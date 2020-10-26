/**
 * Tool to make o signature for request.
 *
 * @constructor
 */
function WlSdk_AuthorizationSignature()
{
  /**
   * List of request fields reduced to 1-level array.
   *
   * <tt>null</tt> until computed.
   *
   * @type {?{}}
   */
  this.a_array = null;

  /**
   * Hash of request.
   *
   * <tt>null</tt> until computed.
   *
   * @type {?string}
   * @private
   */
  this._s_signature = null;

  /**
   * Value to be put into "Authorization" header.
   *
   * <tt>null</tt> until computed.
   *
   * @type {?string}
   */
  this.s_header = null;
}

/**
 * Computes signature for specified data.
 *
 * @param {{
 *   a_header: {}
 *   a_variable: {}
 *   dt_time: string
 *   s_host: string
 *   s_id: string
 *   [s_key_secret]: string
 *   s_method: string
 *   s_resource: string
 * }} a_data Data to compute signature for:
 * <ul><li>{} <tt>a_header</tt> Headers to be used for signature computing.</li>
 * <li>{} <tt>a_variable</tt> Request variables.</li>
 * <li>string <tt>dt_time</tt> Request date/time in MySQL format.</li>
 * <li>string <tt>s_host</tt> Server that request must be done to.</li>
 * <li>string <tt>s_id</tt> Application ID.</li>
 * <li>string [<tt>s_key_secret</tt>] Key to sign the request.</li>
 * <li>string <tt>s_method</tt> Request method (get/post/put/delete).</li>
 * <li>string <tt>s_resource</tt> Name of a resource requested from server.</li></ul>
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when signature is computed.
 */
WlSdk_AuthorizationSignature.prototype._signatureCompute = function(a_data)
{
  var a_signature = [];

  var s_version = a_data.hasOwnProperty('s_code')?'20150518':'20150518-cors';
  // 's_code' is an application password; it must be absent in a browser.
  // The presence of 's_code' means a foreign application (and no CORS policy).
  a_signature.push('Core\\Request\\Api::'+s_version);
  a_signature.push(a_data['dt_time']);
  if(a_data.hasOwnProperty('s_code'))
    a_signature.push(a_data['s_code']);
  a_signature.push(a_data['s_host']);
  a_signature.push(a_data['s_id']);
  a_signature.push(a_data['s_method']);
  a_signature.push(a_data['s_resource']);
  if(a_data.hasOwnProperty('s_cookie_persistent'))
    a_signature.push(a_data['s_cookie_persistent']);
  if(a_data.hasOwnProperty('s_cookie_transient'))
    a_signature.push(a_data['s_cookie_transient']);
  if(a_data.hasOwnProperty('s_key_secret'))
    a_signature.push(a_data['s_key_secret']);

  var o_array = this.signatureArray(a_data['a_variable']);
  var o_this = this;
  o_array.done(function()
  {
    var a_variable = o_this.a_array;

    Object.keys(a_variable).sort().forEach(function(s_key)
    {
      a_signature.push(s_key.toLowerCase()+'='+a_variable[s_key]);
    });

    var a_header = {};
    for(var s_key in a_data['a_header'])
    {
      if(!a_data['a_header'].hasOwnProperty(s_key))
        continue;
      a_header[s_key.toLowerCase()] = a_data['a_header'][s_key].trim();
    }

    Object.keys(a_header).sort().forEach(function(s_key)
    {
      a_signature.push(s_key+':'+a_header[s_key]);
    });

    o_this._s_signature = sha256(a_signature.join("\n"));
  });

  return o_array;
};

/**
 * Makes 1-level array from all request fields.
 *
 * @param {{}} a_array Request fields.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when all fields are processed.
 */
WlSdk_AuthorizationSignature.prototype.signatureArray = function(a_array)
{
  var a_deferred = [];

  this.a_array = {};
  for(var s_key in a_array)
  {
    if(!a_array.hasOwnProperty(s_key))
      continue;

    var x_value = a_array[s_key];

    if(x_value===false||x_value===null||x_value===undefined)
    {
      continue;
    }
    if(typeof x_value === 'object')
    {
      if(x_value instanceof File)
      {
        var o_reader = new FileReader();
        var o_defer_file = WlSdk_Config_Mixin.configDeferredCreate(
          'WlSdk_AuthorizationSignature.signatureArray'
        );

        (function(s_key,o_defer,o_this)
        {
          o_reader.onload = function()
          {
            var text_file_result = this.result;
            o_this.a_array[s_key] = sha256(text_file_result);
            o_defer.resolve();
          };
          o_reader.onerror = function()
          {
            o_defer.reject();
          };
        })(s_key,o_defer_file,this);

        o_reader.readAsArrayBuffer(x_value);
        a_deferred.push(o_defer_file);
        continue;
      }

      var a_array_nested = [];
      for(var s_key_nested in x_value)
      {
        if(!x_value.hasOwnProperty(s_key_nested))
          continue;
        a_array_nested[s_key+'['+s_key_nested+']'] = x_value[s_key_nested];
      }

      var o_signature = new WlSdk_AuthorizationSignature();
      var o_this = this;
      var o_defer_nested = o_signature.signatureArray(a_array_nested);
      (function(o_signature)
      {
        o_defer_nested.done(function()
        {
          var a_result_nested = o_signature.a_array;
          for(var s_key in a_result_nested)
          {
            if(!a_result_nested.hasOwnProperty(s_key))
              continue;
            o_this.a_array[s_key] = a_result_nested[s_key];
          }
        });
      })(o_signature);
      a_deferred.push(o_defer_nested);

      continue;
    }
    // isNaN() for array ['123'] is false.
    // But actually array is an object and its every field must be processed separately.
    // Hence, we check this only after check "typeof x_value==='object'".
    if(typeof x_value === 'string'||!isNaN(x_value))
    {
      this.a_array[s_key] = x_value;
      continue;
    }

    WlSdk_AssertException.fail('Invalid value.',{
      's_key': s_key,
      'x_value': x_value
    });
  }

  return WlSdk_Config_Mixin.configDeferredWhen(a_deferred);
};

/**
 * Computes value for "Authorization" header from request information.
 *
 * @param {{
 *   a_variable: {},
 *   dt_request: string,
 *   s_method: string,
 *   s_resource: string,
 *   url_request: string
 * }} a_request Request information.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when "Authorization" header is computed.
 */
WlSdk_AuthorizationSignature.prototype.signatureAuthorize = function(a_request)
{
  WlSdk_AssertException.notEmpty(WlSdk_ModelAbstract.a_credentials,{
    'text_message': 'Credentials for signature are empty.'
  });

  var a_signature = {
    'a_header': [],
    'a_variable': a_request['a_variable'],
    'dt_time': a_request['dt_request'],
    's_host': (new URL(a_request['url_request'])).host,
    's_id': WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID,
    's_method': a_request['s_method'].toUpperCase(),
    's_resource': a_request['s_resource']
  };
  for(var s_field in WlSdk_ModelAbstract.a_credentials)
  {
    if(WlSdk_ModelAbstract.a_credentials.hasOwnProperty(s_field))
      a_signature[s_field] = WlSdk_ModelAbstract.a_credentials[s_field];
  }

  var o_compute = this._signatureCompute(a_signature);

  var o_this = this;
  o_compute.done(function()
  {
    if(WlSdk_Config_Mixin.CSRF_CODE)
    {
      o_this.s_header = '20150518-cors,'+WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID+',,'+WlSdk_Config_Mixin.CSRF_CODE+','+
        o_this._s_signature;
    }
    else
    {
      o_this.s_header = '20150518,'+WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID+',,'+o_this._s_signature;
    }
  });

  return o_compute;
};