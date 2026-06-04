/**
 * Sorts array by key.
 *
 * @param {{}} a Array to sort.
 * @param {string} [s_compare='SORT_STRING'] Comparison method. Allowed values: SORT_STRING, SORT_NUMERIC.
 * @returns {boolean} Returns <tt>false</tt> in a case of an error, <tt>true</tt> if sort was successful.
 */
function ksort (a, s_compare)
{
  let s_key;

  const a_key = [];
  const a_value = {};
  for (s_key in a)
  {
    if (a.hasOwnProperty(s_key))
    {
      a_key.push(s_key);
      a_value[s_key] = a[s_key];
      delete a[s_key];
    }
  }

  if (s_compare === 'SORT_NUMERIC')
  {
    a_key.sort(function (a, b)
    {
      return a - b;
    });
  }
  else
  {
    a_key.sort();
  }

  for (let i in a_key)
  {
    if (!a_key.hasOwnProperty(i))
    {
      continue;
    }
    s_key = a_key[i];
    a[s_key] = a_value[s_key];
  }

  return true;
}