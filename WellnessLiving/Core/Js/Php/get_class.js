/**
 * Returns name of the class of an object.
 *
 * @param {Object|Function} o_object Object to retrieve class name from.
 * It is also allowed to pass function here (i.e. constructor of the class).
 * @returns {string} Name of the class.
 * @throws WlSdk_AssertException In a case class name can not be defined.
 * @see http://javascript.ru/php/get_class
 */
function get_class(o_object)
{
  var a_match;

  if(o_object instanceof Object&&!(o_object instanceof Array)&&!(typeof o_object==='function')&&o_object.constructor)
  {
    var s_object=o_object.constructor.toString();
    a_match = s_object.match(/function\s*(\w+)/);
    if (a_match && a_match.length === 2)
      return a_match[1];
    a_match = s_object.match(/\[object ([A-Za-z]+)]/);
    if (a_match && a_match.length === 2)
      return a_match[1];
  }

  if (typeof o_object ==='function')
  {
    a_match = o_object.toString().match(/function\s*(\w+)/);
    if (a_match && a_match.length === 2)
      return a_match[1];
  }

  WlSdk_AssertException.fail('Can not define name of the class.',{
    'o_object': o_object
  });
}
