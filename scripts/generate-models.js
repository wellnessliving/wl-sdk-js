'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// -----------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------

const OPENAPI_PATH = process.env.OPENAPI_PATH
  || path.resolve(__dirname, '../../openapi/dev/openapi.yaml');

const OUTPUT_DIR = path.resolve(__dirname, '../WellnessLiving');

const SID_CONFIG_PATH = path.resolve(__dirname, 'sid-path-config.json');

const sidPathConfig = fs.existsSync(SID_CONFIG_PATH)
  ? JSON.parse(fs.readFileSync(SID_CONFIG_PATH, 'utf8'))
  : {};

// -----------------------------------------------------------------------
// $ref resolution
// -----------------------------------------------------------------------

function unescapeJsonPointerToken(token)
{
  return token.replace(/~1/g, '/').replace(/~0/g, '~');
}

function resolveRef(spec, ref)
{
  if (!ref || !ref.startsWith('#/')) return null;
  return ref.slice(2).split('/').map(unescapeJsonPointerToken).reduce(
    (obj, key) => (obj != null && typeof obj === 'object') ? obj[key] : null,
    spec
  );
}

function resolveSchema(schema, spec)
{
  if (!schema) return null;
  if (schema.$ref) return resolveRef(spec, schema.$ref) || schema;
  return schema;
}

// -----------------------------------------------------------------------
// Text helpers
// -----------------------------------------------------------------------

function decodeHtml(text)
{
  return String(text)
    .replace(/&amp;/g, '&')
    .replace(/=&gt;/g, '->')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function escDoc(text)
{
  if (!text) return '';
  return decodeHtml(String(text)).replace(/\*\//g, '* /').trim();
}

/**
 * Converts markdown schema links and PHP-style class refs in text to JSDoc {@link} format.
 *
 * Handles:
 * - Markdown: [Label](#/components/schemas/A.B.CSid) -> {@link A_B_CSid}
 * - Markdown: [Label](/A/B/CApi.json) -> {@link A_B_CModel}
 * - Markdown: [CApi::$prop](/A/B/CApi.json) -> {@link A_B_CModel.prop}
 * - PHP backslash: {@link A\B\CSid::CONST} -> {@link A_B_CSid.CONST}
 * - PHP backslash: {@link A\B\CApi} -> {@link A_B_CModel}
 */
function convertLinks(text)
{
  if (!text) return '';

  text = text.replace(
    /\[([^\]]+)\]\(#\/components\/schemas\/([^)]+)\)/g,
    (match, label, schemaRef) => '{@link ' + schemaRef.replace(/\./g, '_') + '}'
  );

  text = text.replace(
    /\[([^\]]+)\]\((\/[^)]+\.json)\)/g,
    (match, label, apiPath) =>
    {
      const jsClass = pathToModelClass(apiPath);
      // Label carries the property, not the URL: "ShortApi::$prop" -> ".prop".
      const propMatch = label.match(/::\$(\w+)$/);
      return propMatch ? '{@link ' + jsClass + '.' + propMatch[1] + '}' : '{@link ' + jsClass + '}';
    }
  );

  text = text.replace(
    /\{@link\s+([\w\\]+?)(Sid|Api)((?:::[^}]*)?)\}/g,
    (match, prefix, suffix, member) =>
    {
      const jsClass = prefix.replace(/\\/g, '_') + (suffix === 'Api' ? 'Model' : suffix);
      if (member)
      {
        const jsMember = member.replace('::', '.').replace('$', '');
        return '{@link ' + jsClass + jsMember + '}';
      }
      return '{@link ' + jsClass + '}';
    }
  );

  return text;
}

// -----------------------------------------------------------------------
// OpenAPI type -> JSDoc type
// -----------------------------------------------------------------------

/**
 * Converts an OpenAPI schema to a JSDoc type string.
 *
 * When `typedefs` and `typedefName` are provided, inline object schemas (type: object with
 * properties, not a $ref) generate a typedef entry and return the typedef name instead of `{}`.
 * Nested inline objects generate child typedefs named `typedefName + '_' + propName`.
 * $ref schemas always return a plain type - named component schemas do not generate typedefs here.
 */
function schemaToJsType(schema, spec, depth, typedefs, typedefName)
{
  if (!schema) return '*';
  if (depth === undefined) depth = 0;
  if (depth > 8) return '*';

  if (schema.$ref)
  {
    const resolved = resolveRef(spec, schema.$ref);
    // Do not pass typedefs - $ref points to a named component, not an inline type.
    return resolved ? schemaToJsType(resolved, spec, depth + 1) : '*';
  }

  if (schema.oneOf || schema.anyOf) return oneOfToJsType(schema.oneOf || schema.anyOf, spec, depth, typedefs, typedefName);

  const rawTypes = schema.type
    ? (Array.isArray(schema.type) ? schema.type : [schema.type])
    : [];

  const isNullable = rawTypes.includes('null');
  const mainTypes = rawTypes.filter(t => t !== 'null');
  const prefix = isNullable ? '?' : '';

  if (mainTypes.length === 0) return isNullable ? '?*' : '*';
  if (mainTypes.length > 1) return prefix + '*';

  switch (mainTypes[0])
  {
    case 'integer':
    case 'number':
      return prefix + 'number';
    case 'string':
      return prefix + 'string';
    case 'boolean':
      return prefix + 'boolean';
    case 'array':
    {
      // Collect typedef for inline array-of-objects (not $ref items).
      if (typedefs && typedefName && schema.items && !schema.items.$ref)
      {
        const resolvedItems = resolveSchema(schema.items, spec);
        if (resolvedItems && resolvedItems.type === 'object' && resolvedItems.properties)
        {
          // Typedef name equals the field name - type will be TypedefName[].
          const inner = schemaToJsType(resolvedItems, spec, depth + 1, typedefs, typedefName);
          return prefix + (inner.startsWith('?') ? inner.slice(1) : inner) + '[]';
        }
      }
      const inner = schema.items ? schemaToJsType(schema.items, spec, depth + 1) : '*';
      return prefix + (inner.startsWith('?') ? inner.slice(1) : inner) + '[]';
    }
    case 'object':
    {
      // Collect typedef for inline objects with properties.
      if (typedefs && typedefName && schema.properties)
      {
        return prefix + buildObjectTypedef(schema, spec, depth, typedefs, typedefName);
      }
      return prefix + '{}';
    }
    default:
      return prefix + '*';
  }
}

/**
 * Builds a typedef for an inline object schema (`type: object` with `properties`) and pushes it
 * to `typedefs`.
 *
 * @param {object} schema Resolved schema with `properties`.
 * @param {object} spec Full parsed OpenAPI spec.
 * @param {number} depth Current recursion depth.
 * @param {object[]} typedefs Typedef collector - mutated in place.
 * @param {string} typedefName Name to give the generated typedef.
 * @returns {string} `typedefName`, returned for call-site convenience.
 */
function buildObjectTypedef(schema, spec, depth, typedefs, typedefName)
{
  const props = [];
  for (const [pName, pSchema] of Object.entries(schema.properties))
  {
    const resolved = resolveSchema(pSchema, spec);
    const subName = typedefName + '_' + pName;
    const pType = schemaToJsType(resolved, spec, depth + 1, typedefs, subName);
    // Use only the first paragraph - @property is a single-line annotation.
    const rawDesc = (resolved && resolved.description) || '';
    const firstPara = rawDesc.split(/\n\s*\n/)[0].replace(/\n/g, ' ').trim();
    const pDesc = convertLinks(escDoc(firstPara));
    props.push({ name: pName, type: pType, desc: pDesc });
  }
  props.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  // Push after children so leaf typedefs appear first in the output.
  typedefs.push({ name: typedefName, properties: props });
  return typedefName;
}

/**
 * Converts an OpenAPI `oneOf`/`anyOf` variant list to a JSDoc union type string.
 *
 * Each object variant (inline, or `$ref` to a named schema with `properties`) becomes its own
 * typedef, so the union reads as `TypedefA|TypedefB|...` instead of collapsing to `*`. A `$ref`
 * variant reuses the referenced schema's name; an inline object variant is suffixed `A`, `B`,
 * `C`, ... in declaration order. Non-object variants (scalars, arrays) fall back to their own JS
 * type without a typedef.
 *
 * @param {object[]} variants `oneOf`/`anyOf` schema list.
 * @param {object} spec Full parsed OpenAPI spec.
 * @param {number} depth Current recursion depth.
 * @param {?object[]} typedefs Typedef collector - mutated in place. `null` disables typedef
 *  generation, falling back to `*`.
 * @param {?string} typedefName Base name for generated typedefs.
 * @returns {string} JSDoc union type string, e.g. `TypedefA|TypedefB`.
 */
function oneOfToJsType(variants, spec, depth, typedefs, typedefName)
{
  if (!typedefs || !typedefName) return '*';

  const variantTypes = [];
  let objectIdx = 0;

  for (const variant of variants)
  {
    if (variant.$ref)
    {
      const resolvedVariant = resolveRef(spec, variant.$ref);
      if (resolvedVariant && resolvedVariant.type === 'object' && resolvedVariant.properties)
      {
        const refName = variant.$ref.replace(/^.*\//, '').replace(/\./g, '_');
        variantTypes.push(buildObjectTypedef(resolvedVariant, spec, depth + 1, typedefs, typedefName + '_' + refName));
      }
      else
      {
        variantTypes.push(schemaToJsType(resolvedVariant || variant, spec, depth + 1));
      }
      continue;
    }

    if (variant.type === 'object' && variant.properties)
    {
      const suffix = objectIdx < 26 ? String.fromCharCode(65 + objectIdx) : String(objectIdx);
      objectIdx++;
      variantTypes.push(buildObjectTypedef(variant, spec, depth + 1, typedefs, typedefName + '_' + suffix));
      continue;
    }

    variantTypes.push(schemaToJsType(variant, spec, depth + 1));
  }

  return [...new Set(variantTypes)].join('|') || '*';
}

/**
 * Returns JS class name if schema.$ref points to a *Sid component schema, null otherwise.
 */
function getSidRefClass(schema)
{
  if (!schema || !schema.$ref) return null;
  const m = schema.$ref.match(/#\/components\/schemas\/(.+Sid)$/);
  return m ? m[1].replace(/\./g, '_') : null;
}

/**
 * Returns whether a schema declares an explicit `default` value, and that value if present.
 *
 * @param {object} schema Resolved OpenAPI schema.
 * @returns {{hasDefault: boolean, defaultValue: *}} Presence flag and the raw `default` value.
 */
function getSchemaDefault(schema)
{
  if (!schema || !Object.prototype.hasOwnProperty.call(schema, 'default'))
  {
    return { hasDefault: false, defaultValue: undefined };
  }
  return { hasDefault: true, defaultValue: schema.default };
}

/**
 * Returns the JS default value string for a field.
 *
 * @param {string} jsType JSDoc type string.
 * @param {boolean} isResultOnly True if the field appears only in response (not in request).
 * @param {boolean} hasDefault True if the schema declares an explicit `default` value.
 * @param {*} defaultValue Explicit `default` value from the schema, used only if `hasDefault` is `true`.
 * @returns {string} JS value literal.
 */
function getDefaultValue(jsType, isResultOnly, hasDefault, defaultValue)
{
  if (hasDefault) return JSON.stringify(defaultValue);
  if (jsType.startsWith('?')) return 'null';
  if (isResultOnly) return 'undefined';
  if (jsType === 'string') return '""';
  if (jsType === 'number') return '0';
  if (jsType === 'boolean') return 'false';
  if (jsType.endsWith('[]')) return 'undefined';
  if (jsType === '{}') return 'null';
  return 'undefined';
}

// -----------------------------------------------------------------------
// Cleanup: delete all *Model.js and *Sid.js
// -----------------------------------------------------------------------

function cleanGeneratedFiles(dir)
{
  if (!fs.existsSync(dir)) return;
  let count = 0;

  // Paths (relative to dir, forward-slash) that must never be deleted.
  const excludeSet = new Set(
    (sidPathConfig._exclude_files || []).map(p => p.replace(/\\/g, '/'))
  );

  function walk(d)
  {
    for (const entry of fs.readdirSync(d))
    {
      const full = path.join(d, entry);
      if (fs.statSync(full).isDirectory())
      {
        walk(full);
        // Remove empty directories left after deletion
        if (fs.readdirSync(full).length === 0 && full !== dir)
        {
          fs.rmdirSync(full);
        }
      }
      else if (entry.endsWith('Model.js') || entry.endsWith('Sid.js'))
      {
        const rel = path.relative(dir, full).replace(/\\/g, '/');
        if (excludeSet.has(rel)) continue;
        fs.unlinkSync(full);
        count++;
      }
    }
  }

  walk(dir);
  console.log('Deleted ' + count + ' generated files.');
}

// -----------------------------------------------------------------------
// Sid generation
// -----------------------------------------------------------------------

/**
 * Returns the class-level description (everything before the "Values:" block).
 */
function extractSidClassDescription(description)
{
  if (!description) return '';
  const idx = description.search(/^Values:/m);
  return (idx !== -1 ? description.slice(0, idx) : description).trim();
}

/**
 * Parses constant entries from a schema description.
 *
 * Expected format per line: "- VALUE (`CONSTANT_NAME`): Description text."
 * Multi-line descriptions (indented continuation lines) are joined.
 */
function parseConstants(description, enumValues)
{
  const constants = [];
  if (!description) return constants;

  const lines = description.split('\n');
  let current = null;

  for (const line of lines)
  {
    const m = line.match(/^-\s+(\d+)\s+\(`([A-Z_0-9]+)`\):\s*(.*)/);
    if (m)
    {
      if (current) constants.push(current);
      current = { value: parseInt(m[1], 10), name: m[2], desc: m[3].trim(), _more: true };
    }
    else if (current)
    {
      const trimmed = line.trim();
      if (trimmed && /^\s{2,}/.test(line) && current._more)
      {
        // Indented continuation of the previous entry's first paragraph
        current.desc += ' ' + trimmed;
      }
      else if (!trimmed)
      {
        // Blank line ends description continuation
        current._more = false;
      }
      else
      {
        // Non-indented non-blank: unrelated section
        constants.push(current);
        current = null;
      }
    }
  }
  if (current) constants.push(current);
  constants.forEach(c => delete c._more);

  if (constants.length === 0 && enumValues && enumValues.length > 0)
  {
    return enumValues.map(v => ({ value: v, name: String(v).toUpperCase(), desc: String(v) }));
  }

  return constants;
}

function generateSidContent(schemaName, schema)
{
  const override = sidPathConfig[schemaName] || {};
  const className = override.className || schemaName.replace(/\./g, '_');

  const rawDesc = schema.description || '';
  const classDesc = convertLinks(escDoc(extractSidClassDescription(rawDesc)));
  const constants = parseConstants(rawDesc, schema.enum);

  // Sort constants alphabetically by name
  constants.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

  const lines = [];

  // Class JSDoc
  lines.push('/**');
  if (classDesc)
  {
    for (const l of classDesc.split('\n'))
    {
      lines.push(l.trim() ? ' * ' + l : ' *');
    }
  }
  else
  {
    lines.push(' * ' + schemaName + ' identifiers.');
  }
  lines.push(' */');

  // Constructor
  lines.push('function ' + className + '()');
  lines.push('{');
  lines.push('  // Empty constructor.');
  lines.push('}');

  // Constants
  for (const c of constants)
  {
    const constDesc = convertLinks(escDoc(c.desc));
    lines.push('');
    lines.push('/**');
    lines.push(' * ' + constDesc);
    lines.push(' *');
    lines.push(' * @type {number}');
    lines.push(' */');
    lines.push(className + '.' + c.name + ' = ' + c.value + ';');
  }

  return lines.join('\n') + '\n';
}

function generateSIDs(spec)
{
  const schemas = (spec.components && spec.components.schemas) || {};
  let count = 0;

  for (const [schemaName, schema] of Object.entries(schemas))
  {
    if (!schemaName.endsWith('Sid')) continue;
    if (!schema.enum || schema.enum.length === 0) continue;

    const override = sidPathConfig[schemaName] || {};
    const filePath = override.filePath
      ? override.filePath + '.js'
      : schemaName.replace(/\./g, '/') + '.js';

    const content = generateSidContent(schemaName, schema);
    const fullPath = path.join(OUTPUT_DIR, filePath);

    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    count++;
  }

  console.log('Generated ' + count + ' Sid files.');
}

// -----------------------------------------------------------------------
// Model generation
// -----------------------------------------------------------------------

const HTTP_METHODS = ['delete', 'get', 'patch', 'post', 'put'];

function pathToModelClass(apiPath)
{
  return apiPath.replace(/^\//, '').replace(/\.json$/i, '').split('/').join('_') + 'Model';
}

function pathToModelFile(apiPath)
{
  return apiPath.replace(/^\//, '').replace(/\.json$/i, '') + 'Model.js';
}

/**
 * Returns the raw description text to use for a field.
 *
 * A description declared directly on the field (sibling to a `$ref`, or the field's own
 * description) always wins. Without one, if the field's schema `$ref`s a `*Sid` enum, only the
 * class-level summary is used - the "Values:" enumeration is generated once into the Sid file
 * and must not be duplicated into every field that references it.
 *
 * @param {?string} ownDescription Description declared directly on the field or param.
 * @param {?object} resolved Field schema after following `$ref`.
 * @param {?string} sidRef JS class name if the field's schema `$ref`s a `*Sid` component, `null` otherwise.
 * @returns {string} Raw (not yet escaped or link-converted) description text.
 */
function getFieldRawDescription(ownDescription, resolved, sidRef)
{
  if (ownDescription) return ownDescription;
  const resolvedDesc = (resolved && resolved.description) || '';
  return sidRef ? extractSidClassDescription(resolvedDesc) : resolvedDesc;
}

/**
 * Returns whether any of the given schema-like objects declares `deprecated: true`, and the
 * `x-deprecated` message to use (from the first candidate that has one).
 *
 * @param {...(?object)} candidates Parameter and/or schema objects to check, in priority order.
 * @returns {{deprecated: boolean, message: string}} Deprecation flag and raw (not yet escaped
 *  or link-converted) message text.
 */
function getDeprecatedInfo(...candidates)
{
  const isDeprecated = candidates.some(c => c && c.deprecated === true);
  if (!isDeprecated) return { deprecated: false, message: '' };

  const withMsg = candidates.find(c => c && c['x-deprecated']);
  return { deprecated: true, message: (withMsg && withMsg['x-deprecated']) || 'This field is deprecated.' };
}

/**
 * Collects all fields from all HTTP operations of a path item.
 *
 * Each field entry: { a_method, type, description, sidRef, hasInput, typedefs, deprecated, deprecatedMsg }
 *   a_method: { [httpMethod]: { get?, post?, result? } }
 *   hasInput: true if the field appears in a request context (not result-only)
 *   typedefs: typedef definitions collected from inline object schemas for this field
 */
function collectFields(pathItem, spec, className)
{
  const fields = {};
  const pathParams = Array.isArray(pathItem.parameters) ? pathItem.parameters : [];

  for (const httpMethod of HTTP_METHODS)
  {
    const op = pathItem[httpMethod];
    if (!op || typeof op !== 'object') continue;

    const allParams = [
      ...pathParams,
      ...(Array.isArray(op.parameters) ? op.parameters : []),
    ]
      .map(p => (p && p.$ref) ? (resolveRef(spec, p.$ref) || p) : p)
      .filter(p => p && (p.in === 'query' || p.in === 'path'));

    // Query / path params -> @{method} get
    for (const param of allParams)
    {
      const name = param.name;
      const isRequired = param.required !== false;
      const paramSchema = param.schema || {};
      const resolvedParamSchema = resolveSchema(paramSchema, spec);
      const localTypedefs = [];
      const jsType = schemaToJsType(resolvedParamSchema, spec, 0, localTypedefs, className + '_' + name);
      // Optional params are treated as nullable
      const effectiveType = (!isRequired && !jsType.startsWith('?')) ? '?' + jsType : jsType;
      const sidRef = getSidRefClass(paramSchema);
      const desc = convertLinks(escDoc(getFieldRawDescription(param.description, resolvedParamSchema, sidRef)));
      const { hasDefault, defaultValue } = getSchemaDefault(resolvedParamSchema);
      const dep = getDeprecatedInfo(param, paramSchema, resolvedParamSchema);
      const deprecatedMsg = dep.deprecated ? convertLinks(escDoc(dep.message)) : '';

      if (!fields[name])
      {
        fields[name] = {
          a_method: {}, type: effectiveType, description: desc, sidRef, hasInput: false,
          typedefs: localTypedefs, hasDefault: false, defaultValue: undefined,
          deprecated: false, deprecatedMsg: '',
        };
      }
      if (!fields[name].a_method[httpMethod]) fields[name].a_method[httpMethod] = {};
      fields[name].a_method[httpMethod].get = true;
      fields[name].hasInput = true;
      if (fields[name].type === '*' && effectiveType !== '*') fields[name].type = effectiveType;
      if (!fields[name].description && desc) fields[name].description = desc;
      if (!fields[name].sidRef && sidRef) fields[name].sidRef = sidRef;
      if (!fields[name].hasDefault && hasDefault)
      {
        fields[name].hasDefault = true;
        fields[name].defaultValue = defaultValue;
      }
      if (!fields[name].deprecated && dep.deprecated)
      {
        fields[name].deprecated = true;
        fields[name].deprecatedMsg = deprecatedMsg;
      }
    }

    // requestBody fields -> @{method} post
    const rb = op.requestBody;
    if (rb)
    {
      const rbContent = rb.content || {};
      const rbSchemaRaw = (
        rbContent['application/json'] ||
        rbContent['application/x-www-form-urlencoded'] ||
        rbContent['multipart/form-data'] ||
        {}
      ).schema;
      const rbSchema = resolveSchema(rbSchemaRaw, spec);

      if (rbSchema && rbSchema.properties)
      {
        const required = Array.isArray(rbSchema.required) ? rbSchema.required : [];
        for (const [name, propSchema] of Object.entries(rbSchema.properties))
        {
          const resolved = resolveSchema(propSchema, spec);
          const localTypedefs = [];
          const jsType = schemaToJsType(resolved, spec, 0, localTypedefs, className + '_' + name);
          const isRequired = required.includes(name);
          const effectiveType = (!isRequired && !jsType.startsWith('?')) ? '?' + jsType : jsType;
          const sidRef = getSidRefClass(propSchema);
          const desc = convertLinks(escDoc(getFieldRawDescription(propSchema.description, resolved, sidRef)));
          const { hasDefault, defaultValue } = getSchemaDefault(resolved);
          const dep = getDeprecatedInfo(propSchema, resolved);
          const deprecatedMsg = dep.deprecated ? convertLinks(escDoc(dep.message)) : '';

          if (!fields[name])
          {
            fields[name] = {
              a_method: {}, type: effectiveType, description: desc, sidRef, hasInput: false,
              typedefs: localTypedefs, hasDefault: false, defaultValue: undefined,
              deprecated: false, deprecatedMsg: '',
            };
          }
          if (!fields[name].a_method[httpMethod]) fields[name].a_method[httpMethod] = {};
          fields[name].a_method[httpMethod].post = true;
          fields[name].hasInput = true;
          if (fields[name].type === '*' && effectiveType !== '*') fields[name].type = effectiveType;
          if (!fields[name].description && desc) fields[name].description = desc;
          if (!fields[name].sidRef && sidRef) fields[name].sidRef = sidRef;
          if (!fields[name].hasDefault && hasDefault)
          {
            fields[name].hasDefault = true;
            fields[name].defaultValue = defaultValue;
          }
          if (!fields[name].deprecated && dep.deprecated)
          {
            fields[name].deprecated = true;
            fields[name].deprecatedMsg = deprecatedMsg;
          }
        }
      }
    }

    // Response 200 properties -> @{method} result
    const resp200 = op.responses && (op.responses['200'] || op.responses[200]);
    if (resp200)
    {
      const respResolved = resp200.$ref ? resolveRef(spec, resp200.$ref) : resp200;
      const respJson = (respResolved && respResolved.content && respResolved.content['application/json']) || null;
      if (respJson && respJson.schema)
      {
        const respSchema = resolveSchema(respJson.schema, spec);
        if (respSchema && respSchema.properties)
        {
          for (const [name, propSchema] of Object.entries(respSchema.properties))
          {
            const resolved = resolveSchema(propSchema, spec);
            const localTypedefs = [];
            const jsType = schemaToJsType(resolved, spec, 0, localTypedefs, className + '_' + name);
            const sidRef = getSidRefClass(propSchema);
            const desc = convertLinks(escDoc(getFieldRawDescription(propSchema.description, resolved, sidRef)));
            const { hasDefault, defaultValue } = getSchemaDefault(resolved);
            const dep = getDeprecatedInfo(propSchema, resolved);
            const deprecatedMsg = dep.deprecated ? convertLinks(escDoc(dep.message)) : '';

            if (!fields[name])
            {
              fields[name] = {
                a_method: {}, type: jsType, description: desc, sidRef, hasInput: false,
                typedefs: localTypedefs, hasDefault: false, defaultValue: undefined,
                deprecated: false, deprecatedMsg: '',
              };
            }
            if (!fields[name].a_method[httpMethod]) fields[name].a_method[httpMethod] = {};
            fields[name].a_method[httpMethod].result = true;
            if (fields[name].type === '*' && jsType !== '*') fields[name].type = jsType;
            if (!fields[name].description && desc) fields[name].description = desc;
            if (!fields[name].sidRef && sidRef) fields[name].sidRef = sidRef;
            if (!fields[name].deprecated && dep.deprecated)
            {
              fields[name].deprecated = true;
              fields[name].deprecatedMsg = deprecatedMsg;
            }
            if (!fields[name].hasDefault && hasDefault)
            {
              fields[name].hasDefault = true;
              fields[name].defaultValue = defaultValue;
            }
          }
        }
      }
    }
  }

  return fields;
}

function buildModelContent(className, fields, description, isDeprecated, deprecatedMsg, instanceGetKey, httpMethods)
{
  const sortedNames = Object.keys(fields).sort();
  const lines = [];

  // --- @typedef blocks for inline object fields (before class JSDoc) ---
  // --- Class JSDoc ---
  lines.push('/**');
  if (description)
  {
    for (const l of description.split('\n'))
    {
      lines.push(l.trim() ? ' * ' + l : ' *');
    }
    lines.push(' *');
  }

  // Class-level tags (sorted alphabetically)
  const classTags = [
    { tag: 'augments', value: 'WlSdk_ModelAbstract' },
    { tag: 'constructor', value: '' },
  ];
  if (isDeprecated)
  {
    classTags.push({ tag: 'deprecated', value: deprecatedMsg });
  }
  classTags.sort((a, b) => (a.tag < b.tag ? -1 : a.tag > b.tag ? 1 : 0));

  for (const { tag, value } of classTags)
  {
    lines.push(' * @' + tag + (value ? ' ' + value : ''));
  }
  lines.push(' */');

  // --- Constructor function ---
  lines.push('function ' + className + '()');
  lines.push('{');
  lines.push('  WlSdk_ModelAbstract.apply(this);');

  // --- _s_key for instanceGet ---
  if (instanceGetKey)
  {
    lines.push('');
    lines.push('  /**');
    lines.push('   * @inheritDoc');
    lines.push('   */');
    lines.push('  this._s_key = "' + instanceGetKey.join(',') + '";');
  }

  // --- Field declarations ---
  for (const name of sortedNames)
  {
    const f = fields[name];
    const jsType = f.type || '*';
    const defaultVal = getDefaultValue(jsType, !f.hasInput, f.hasDefault, f.defaultValue);

    // Output typedef blocks for this field (collection order: leaf typedefs first, then parent).
    for (const td of (f.typedefs || []))
    {
      lines.push('');
      lines.push('  /**');
      lines.push('   * @typedef {{}} ' + td.name);
      for (const prop of td.properties)
      {
        lines.push('   * @property {' + prop.type + '} ' + prop.name + (prop.desc ? ' ' + prop.desc : ''));
      }
      lines.push('   */');
    }

    lines.push('');
    lines.push('  /**');

    if (f.description)
    {
      for (const l of f.description.split('\n'))
      {
        lines.push(l.trim() ? '   * ' + l : '   *');
      }
      lines.push('   *');
    }

    // Field tags sorted alphabetically
    const fieldTags = [];
    for (const method of Object.keys(f.a_method).sort())
    {
      fieldTags.push({ tag: method, value: Object.keys(f.a_method[method]).join(',') });
    }
    if (f.deprecated)
    {
      fieldTags.push({ tag: 'deprecated', value: f.deprecatedMsg });
    }
    if (f.sidRef)
    {
      fieldTags.push({ tag: 'see', value: f.sidRef });
    }
    fieldTags.push({ tag: 'type', value: '{' + jsType + '}' });
    fieldTags.sort((a, b) => (a.tag < b.tag ? -1 : a.tag > b.tag ? 1 : 0));

    for (const { tag, value } of fieldTags)
    {
      lines.push('   * @' + tag + ' ' + value);
    }
    lines.push('   */');
    lines.push('  this.' + name + ' = ' + defaultVal + ';');
  }

  lines.push('');
  lines.push('  this.changeInit();');
  lines.push('}');
  lines.push('');

  // --- Prototype extension ---
  lines.push('WlSdk_ModelAbstract.extend(' + className + ');');
  lines.push('');

  // --- Config method ---
  lines.push('/**');
  lines.push(' * @inheritDoc');
  lines.push(' */');
  lines.push(className + '.prototype.config=function()');
  lines.push('{');

  const a_field = {};
  for (const name of sortedNames)
  {
    const f = fields[name];
    const methodObj = {};
    for (const method of Object.keys(f.a_method).sort())
    {
      methodObj[method] = f.a_method[method];
    }
    a_field[name] = methodObj;
  }
  lines.push('  return ' + JSON.stringify({ a_field }) + ';');
  lines.push('};');

  // --- instanceGet JSDoc ---
  if (instanceGetKey)
  {
    lines.push('');
    lines.push('/**');
    lines.push(' * @function');
    lines.push(' * @name ' + className + '.instanceGet');
    for (const name of instanceGetKey)
    {
      const f = fields[name];
      const jsType = f ? (f.type || '*') : '*';
      const desc = f ? (f.description || '').replace(/\s*\n\s*/g, ' ').trim() : '';
      lines.push(' * @param {' + jsType + '} ' + name + (desc ? ' ' + desc : ''));
    }
    lines.push(' * @returns {' + className + '}');
    lines.push(' * @see WlSdk_ModelAbstract.instanceGet()');
    lines.push(' */');
  }

  // --- Virtual HTTP method JSDoc blocks (sorted alphabetically) ---
  for (const method of Object.keys(httpMethods || {}).sort())
  {
    const { summary, description: opDesc } = httpMethods[method];
    lines.push('');
    lines.push('/**');
    if (summary)
    {
      lines.push(' * ' + summary);
      if (opDesc) lines.push(' *');
    }
    if (opDesc)
    {
      for (const l of opDesc.split('\n'))
      {
        lines.push(l.trim() ? ' * ' + l.trim() : ' *');
      }
      lines.push(' *');
    }
    else if (summary)
    {
      lines.push(' *');
    }
    lines.push(' * @function');
    lines.push(' * @name ' + className + '.' + method);
    lines.push(' * @returns {WlSdk_Deferred_Promise}');
    lines.push(' * @see WlSdk_ModelAbstract.' + method + '()');
    lines.push(' */');
  }

  return lines.join('\n') + '\n';
}

/**
 * Extracts the instance-get key field list from x-instance-get-key on a path item or operation.
 * Returns an array of field name strings, or null if the extension is absent.
 */
function getInstanceGetKey(pathItem)
{
  const val = pathItem['x-instance-get-key'];
  if (val)
  {
    return Array.isArray(val) ? val : String(val).split(',').map(s => s.trim());
  }
  for (const method of HTTP_METHODS)
  {
    const op = pathItem[method];
    if (op && op['x-instance-get-key'])
    {
      const opVal = op['x-instance-get-key'];
      return Array.isArray(opVal) ? opVal : String(opVal).split(',').map(s => s.trim());
    }
  }
  return null;
}

function generateModels(spec)
{
  const paths = spec.paths || {};
  let count = 0;

  for (const [apiPath, rawPathItem] of Object.entries(paths))
  {
    if (!rawPathItem || typeof rawPathItem !== 'object') continue;
    if (!apiPath.endsWith('.json')) continue;

    // Path item may itself be a $ref to another path (an endpoint alias) - follow it to the
    // actual operations/fields, but keep generating the model under the alias's own class name.
    const pathItem = rawPathItem.$ref ? (resolveRef(spec, rawPathItem.$ref) || rawPathItem) : rawPathItem;

    const className = pathToModelClass(apiPath);
    const fields = collectFields(pathItem, spec, className);

    let description = '';
    let isDeprecated = false;
    let deprecatedMsg = '';
    const httpMethods = {};

    for (const method of HTTP_METHODS)
    {
      const op = pathItem[method];
      if (!op) continue;
      const opSummary = op.summary || (op.description ? op.description.split(/\n\s*\n/)[0].replace(/\n/g, ' ').trim() : '');
      if (!description) description = convertLinks(escDoc(opSummary));
      if (op.deprecated && !isDeprecated)
      {
        isDeprecated = true;
        deprecatedMsg = convertLinks(escDoc(op['x-deprecated'] || 'This endpoint is deprecated.'));
      }
      httpMethods[method] = {
        summary: convertLinks(escDoc(op.summary || '')),
        description: convertLinks(escDoc(op.description || '')),
      };
    }

    const instanceGetKey = getInstanceGetKey(pathItem);
    const content = buildModelContent(className, fields, description, isDeprecated, deprecatedMsg, instanceGetKey, httpMethods);
    const fullPath = path.join(OUTPUT_DIR, pathToModelFile(apiPath));

    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content, 'utf8');
    count++;
  }

  console.log('Generated ' + count + ' Model files.');
}

// -----------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------

function main()
{
  console.log('Reading OpenAPI spec: ' + OPENAPI_PATH);

  if (!fs.existsSync(OPENAPI_PATH))
  {
    console.error('ERROR: OpenAPI spec not found: ' + OPENAPI_PATH);
    process.exit(1);
  }

  const raw = fs.readFileSync(OPENAPI_PATH, 'utf8');
  console.log('Read ' + Math.round(raw.length / 1024) + ' KB');

  console.log('Parsing YAML...');
  const spec = yaml.load(raw);

  const pathCount = Object.keys(spec.paths || {}).length;
  const schemaCount = Object.keys(((spec.components || {}).schemas) || {}).length;
  console.log('Spec: ' + pathCount + ' API paths, ' + schemaCount + ' schemas');

  console.log('Cleaning old generated files...');
  cleanGeneratedFiles(OUTPUT_DIR);

  console.log('Generating Sid files...');
  generateSIDs(spec);

  console.log('Generating Model files...');
  generateModels(spec);

  console.log('Done!');
}

main();
