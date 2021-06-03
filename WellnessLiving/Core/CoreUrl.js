/**
 * A set of JavaScript functions to process url.
 *
 * @constructor
 */
function WlSdk_Core_Url()
{
  // Do nothing.
}

/**
 * Encodes an URL variable.
 *
 * @param {string} s_name Name of the variable.
 * @param {*} x_value Value to encode.
 * @return {string|array} String in a case of a scalar value, an array in a case of arrays.
 */
WlSdk_Core_Url.encode = function(s_name,x_value)
{
  var s_name_encode=encodeURIComponent(s_name);

  if(x_value===true)
    return s_name_encode+'=1';
  if(x_value===false)
    return s_name_encode+'=0';

  var s_type=typeof(x_value);

  if(s_type==='number')
    return s_name_encode+'='+x_value.toString();
  if(s_type==='string')
    return s_name_encode+'='+encodeURIComponent(x_value);

  if(s_type!=='object')
    return s_name_encode;

  var a_result=[];
  var i;
  var x_element; // either string, or []
  var s_key;

  var is_index=x_value instanceof Array;

  for(s_key in x_value)
  {
    if(!x_value.hasOwnProperty(s_key))
      continue;

    x_element=WlSdk_Core_Url.encode(s_name+'['+(is_index?'':s_key)+']',x_value[s_key]);
    if(typeof(x_element)==='string')
      a_result.push(x_element);
    else
    {
      for(i=0;i<x_element.length;i++)
        a_result.push(x_element[i]);
    }
  }
  return a_result;
};

/**
 * Adds / replaces values in query part of url.
 *
 * @param {string} url_source Source url.
 * @param {{}} a_change Array of variables to change.
 * @return {string} Resulting url.
 */
WlSdk_Core_Url.variable = function(url_source,a_change)
{
  var i_fragment=url_source.lastIndexOf('#');
  var i_query=url_source.indexOf('?');
  var s_variable;
  var a_new={};

  for(s_variable in a_change)
  {
    if(!a_change.hasOwnProperty(s_variable))
      continue;

    var x_value=a_change[s_variable];
    if(x_value!==false&&x_value!==null&&x_value!==undefined)
      a_new[encodeURIComponent(s_variable)] = WlSdk_Core_Url.encode(s_variable,a_change[s_variable]);
  }

  if(i_query>=0)
  {
    var s_query=url_source.substr(i_query+1,(i_fragment<0?url_source.length:i_fragment)-i_query-1);
    if(s_query.length)
    {
      var a_pair=s_query.split('&');
      for(var i_pair in a_pair)
      {
        if(!a_pair.hasOwnProperty(i_pair))
          continue;

        var a_pair_item = a_pair[i_pair].split('=',2);
        a_pair_item = a_pair_item[0].split('[',2);
        a_pair_item = a_pair_item[0].split('%5B',2);

        var s_name_variable = a_pair_item[0];

        if(!a_change.hasOwnProperty(s_name_variable))
        {
          if(s_name_variable.indexOf('a_')>-1)
          {
            if(!a_new.hasOwnProperty(s_name_variable))
              a_new[s_name_variable] = [];

            a_new[s_name_variable].push(a_pair[i_pair]);
          }
          else
          {
            a_new[s_name_variable] = a_pair[i_pair];
          }
        }
      }
    }
  }

  var a_query=[];
  for(s_variable in a_new)
  {
    if(!a_new.hasOwnProperty(s_variable))
      continue;

    var x_variable=a_new[s_variable];

    if(typeof(x_variable)==='string')
      a_query.push(x_variable);
    else
    {
      for(var s_key in x_variable)
      {
        if(x_variable.hasOwnProperty(s_key))
          a_query.push(x_variable[s_key]);
      }
    }
  }

  var url_result=url_source.substr(0,i_query>=0?i_query:(i_fragment>=0?i_fragment:url_source.length));
  if(a_query.length)
    url_result+='?'+a_query.join('&');
  if(i_fragment>=0)
    url_result+=url_source.substr(i_fragment);

  return url_result;
};