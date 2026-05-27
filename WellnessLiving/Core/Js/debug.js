function debug (o_object, s_prefix)
{
  let i_count;
  let s_key;
  let s_result = '';
  let s_tmp;

  if (!s_prefix)
  {
    s_prefix = '';
  }

  if (s_prefix.length > 6)
  {
    return '...';
  }

  if (typeof o_object === 'object')
  {
    if (o_object instanceof Array)
    {
      s_tmp = '';
      i_count = 0;
      for (s_key in o_object)
      {
        if (!o_object.hasOwnProperty(s_key))
        {
          continue;
        }

        s_tmp += s_prefix + '  [' + String(s_key) + '] => ';
        s_tmp += debug(o_object[s_key], s_prefix + '  ');
        s_tmp += '\r\n';
        i_count++;
        if (i_count >= 128 || s_tmp.length > 20480)
        {
          break;
        }
      }
      s_result = 'array(' + i_count + ') ';
      s_result += '{\r\n' + s_tmp + s_prefix + '}';
    }
    else if (o_object === null)
    {
      s_result = 'null';
    }
    else
    {
      s_tmp = '';
      i_count = 0;
      for (s_key in o_object)
      {
        // We want to dump as much information as possible - include properties of parents also.
        // noinspection JSUnfilteredForInLoop
        s_tmp += s_prefix + '  ["' + String(s_key) + '"] => ';
        // noinspection JSUnfilteredForInLoop
        s_tmp += debug(o_object[s_key], s_prefix + '  ');
        s_tmp += '\r\n';
        i_count++;
        if (i_count >= 128 || s_tmp.length > 20480)
        {
          break;
        }
      }

      let s_class = 'array(' + i_count + ') ';
      if (o_object.constructor)
      {
        const o_match = o_object.constructor.toString().match(/function ([A-Za-z_]+)\(/);
        if (o_match)
        {
          s_class = 'object(' + o_match[1] + ') ';
        }
      }

      s_result = s_class;
      s_result += '{\r\n' + s_tmp + s_prefix + '}';
    }
  }
  else
  {
    switch (typeof o_object)
    {
      case 'boolean':
        s_result += o_object ? 'bool(true)' : 'bool(false)';
        break;
      case 'function':
        s_result += o_object.toString();
        break;
      case 'number':
        if (o_object - Math.floor(o_object) !== 0)
        {
          s_result += 'float(' + o_object + ')';
        }
        else
        {
          s_result += 'int(' + o_object + ')';
        }
        break;
      case 'string':
        s_result += 'string(' + o_object.length + ') "' + o_object + '"';
        break;
      case 'undefined':
        s_result += 'undefined';
        break;
      default:
        s_result += typeof (o_object) + '(unknown)';
    }
  }

  return s_result;
}

/**
 * Gets current stack trace.
 *
 * @param {Error} [e] Exception object from which stack should be retrieved.
 *   If parameter is not specified, current call stack is returned.
 * @returns {{s_source: string, [i_line]: number, [i_column]: number, [s_function]: string}[]} Stack trace. One element contains:<ul>
 *   <li>number [<tt>i_column</tt>] Column number.</li>
 *   <li>number [<tt>i_line</tt>] Global line number (as placed in in <tt>all.js</tt>).</li>
 *   <li>string [<tt>s_function</tt>] Function name.</li>
 *   <li>string <tt>s_source</tt> Source content of stack trace as returned by browser.</li>
 * </ul>
 * @see {@link http://www.eriwen.com/javascript/js-stack-trace/}
 */
function debug_stack (e)
{
  const a_trace = [];

  if (!e)
  {
    try
    {
      i_dont_exist++; // doesn't exist- that's the point
    } catch (e_throw)
    {
      e = e_throw;
    }
  }

  if (e && e.stack)
  { // Firefox and Opera
    const a_stack = e.stack.split('\n'); // Contents of the stack error
    let i_stack;
    const i_length = a_stack.length;  // Number of stack elements
    for (i_stack = 0; i_stack < i_length; i_stack++)
    {
      if (!a_stack[i_stack].length)
      {
        continue;
      }

      // Chrome: the first line of stack is error message.
      // Likely like this: "ReferenceError: i_dont_exist is not defined"
      if (!i_stack && a_stack[i_stack].match(/^[A-Za-z]+: /))
      {
        continue;
      }

      const a_element = {};
      a_element['s_source'] = a_stack[i_stack];

      let a_item = a_stack[i_stack].match(/:([0-9]+):([0-9]+)$/);
      if (a_item)
      {
        a_element['i_line'] = a_item[1];
        a_element['i_column'] = a_item[2];
      }

      a_item = a_stack[i_stack].split('@', 2);

      if (a_item)
      {
        let s_function = a_item[0];
        const i_bracket = s_function.indexOf('(');
        if (i_bracket >= 0)
        {
          s_function = s_function.substring(0, i_bracket);
        }

        s_function = s_function.trim();
        if (s_function.substr(0, 3) === 'at ') // in Chrome: "    at debug_error (http://wellnessliving.local/en-spa/js/all.js?X-Test-Active=yes:89796:15)"
        {
          s_function = s_function.substr(3).trim();
        }

        if (['debug_error', 'debug_stack'].includes(s_function)) // Discard the debug-function
        {
          continue;
        }

        a_element['s_function'] = s_function;
      }

      a_trace.push(a_element);
    }
  }
  if (!a_trace.length)
  { // IE, Chrome and Safari
    let o_function;

    try
    {
      o_function = arguments.callee.caller; // Object - a chain of function calls
    } catch (e)
    {
      return a_trace;
    }

    const a_has = new Set([o_function]);

    while (o_function && a_trace.length < 32)
    {
      a_trace.push({
        's_function': o_function.name || '[anonymous]'
      });

      // Caller was deprecated https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage
      try
      {
        // We can not recreate call stack if at least one recursion exist:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller#Notes
        o_function = o_function.caller;
      } catch (e)
      {
        a_trace.push({
          's_function': '[caller-blocked]'
        });
        break;
      }

      if (a_has.has(o_function))
      {
        break;
      }

      a_has.add(o_function);
    }
  }

  return a_trace;
}