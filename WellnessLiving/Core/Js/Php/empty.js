/**
 * Analogue of empty() function from PHP.
 *
 * @param {*} mixed_var Input variable.
 * @returns {boolean} <tt>true</tt> if empty, <tt>false</tt> otherwise.
 * @license Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) and Contributors (http://phpjs.org/authors).
 */
function empty(mixed_var) {
  var undef, key, i, len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixed_var === emptyValues[i]) {
      return true;
    }
  }

  if (typeof mixed_var === 'object') {
    for (key in mixed_var) {
      if (!mixed_var.hasOwnProperty(key))
        continue;

      return false;
    }
    return true;
  }

  return false;
}