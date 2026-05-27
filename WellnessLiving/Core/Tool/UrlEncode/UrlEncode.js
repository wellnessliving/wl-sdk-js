/**
 * Class to encode URL.
 *
 * <b>Attention.</b> This class has analogue in PHP. You will, must change PHP side if you change this class.
 *
 * Should be included in all templates because it is a part of the core and this functionality may be necessary in any place.
 *
 * <b>Attention.</b> You will, must change the template of the {@link WlSdk_Core_Tool_UrlEncode_UrlEncodeException} if you change template of this class.
 *
 * @type {WlSdk_Core_Tool_UrlEncode_UrlEncode}
 * @see \Core\Tool\UrlEncode\UrlEncode in PHP
 */
function WlSdk_Core_Tool_UrlEncode_UrlEncode ()
{
  /**
   * A list of all values in all variables of the query.
   *
   * Key - is the value, value is true before the dictionary is stored, or index in the dictionary when the dictionary
   * is completely built.
   *
   * @type {{}}
   * @private
   */
  this.a_dictionary = {};

  /**
   * Value of resulting binary data.
   *
   * @type {Array}
   * @private
   */
  this.a_value = [];

  /**
   * Volume of resulting binary data.
   *
   * @type {Array}
   * @private
   */
  this.a_volume = [];

  /**
   * Number of elements in the dictionary.
   *
   * @type {number}
   * @private
   */
  this.i_dictionary = 0;
}

/**
 * Maximum allowed number of elements in array.
 *
 * @type {number}
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.ARRAY_COUNT_MAX = 1023;

/**
 * Alphabet for the resulting URL-safe string.
 *
 * @type {string}
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.STRING_RESULT = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Predefined alphabet for simple strings (this alphabet covers SIDs, variable names and sorting orders in table
 * reports).
 *
 * @type {string}
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.STRING_SIMPLE = 'abcdefghijklmnopqrstuvwxyz_+-,';

/**
 * Adds binary information to binary storage.
 *
 * @param {int} i_volume Volume of information to store (number of different values for i_value).
 * Pass 0 to flush the last modulus into binary data.
 * @param {int} i_value the value to store.
 * This value should be in range [0..i_volume-1].
 *
 * @protected
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._binary = function (i_volume, i_value)
{
  if (i_volume && i_value >= i_volume)
    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException('value-volume','Value ('+i_value+') is larger then allowed number of different values ('+i_volume+').');
  if (i_volume > 2147483647 || i_volume < 0)
    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException('volume-large', 'Volume (' + i_volume + ') is too large.');
  if (i_value >= 2147483647 || i_value < 0)
    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException('value-large','Value ('+i_value+') is too large (volume='+i_volume+').');

  this.a_value = a_apn_add(this.a_value, a_apn_mul(this.a_volume, a_apn_decimal_apn(i_value.toString())));
  this.a_volume = a_apn_mul(this.a_volume, a_apn_decimal_apn(i_volume.toString()));
};

/**
 * Adds a value to a dictionary.
 *
 * @param {string|boolean} x_value a value to add
 * @private
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._dictionary_add = function (x_value)
{
  WlSdk_AssertException.assertTrue(x_value !== undefined && x_value !== true && x_value !== false && x_value !== null, {
    's_message': '[WlSdk_Core_Tool_UrlEncode_UrlEncode] undefined, true, false and null are not allowed as value.',
    's_value': x_value
  });
  if (!this.a_dictionary.hasOwnProperty(String(x_value)))
  {
    this.a_dictionary[x_value] = true;
    this.i_dictionary++;
  }
};

/**
 * Encodes dictionary
 * @private
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._dictionary_encode = function ()
{
  var i;
  var i_number;
  var s_key;
  var s_value;

  if (this.i_dictionary > 65535)
    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException('dictionary-length','Dictionary is too long ('+this.i_dictionary+')');

  // Store size of the dictionary
  this._binary(65536, this.i_dictionary);

  // Separate different types of dictionary items

  // number => boolean
  // numbers up to 9 digits are stored here.
  // numerical representation of dates are stored here also
  // values is true, if this number is used as a number, and should occupy an individual index in the dictionary
  var a_number = {};
  var a_number_large = []; // number is value. number larger than 9 decimal digits (up to 20 digits) are store here
  var a_string_complex = []; // a string as a value
  var a_string_simple = []; // a string as a value
  var a_date = {}; // date => numerical representation of the date (a link to $a_number)
  var i_number_count = 0; // we have to compute number of elements in the array,
  var i_date_count = 0; //     because associative arrays do not have length property in JavaScript
  for (s_value in this.a_dictionary)
  {
    if (!this.a_dictionary.hasOwnProperty(s_value))
      continue;

    // Values, which begin with 0 should be strings (f.e. 00000001).
    if (/^0+/.test(s_value) && s_value.length > 1 && s_value.length < 256)
    {
      a_string_complex.push(s_value);
      continue;
    }

    if (/^[0-9]{1,10}$/.test(s_value) && s_value <= 2147483647)
    {
      i_number_count++;
      a_number[s_value] = true;
      continue;
    }

    if (/^[0-9]{10,20}$/.test(s_value))
    {
      a_number_large.push(s_value.toString());
      continue;
    }

    var a_match = s_value.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/);
    if (a_match && a_match[1] >= 1900 && a_match[1] < 3000 && a_match[2] > 0 && a_match[2] <= 12 && a_match[3] > 0
      && a_match[3] <= 31)
    {
      i_number = ((parseInt(a_match[1]) - 1900) * 384 + (parseInt(a_match[2]) - 1) * 32 + parseInt(a_match[3])
        - 1).toString();
      a_date[s_value] = i_number;
      i_date_count++;
      if (!a_number.hasOwnProperty(i_number))
      {
        a_number[i_number] = false;
        i_number_count++;
      }
      continue;
    }

    // Empty string is a simple string
    if (s_value.match(/^[a-z_+\-,]{0,31}$/))
    {
      a_string_simple.push(s_value);
      continue;
    }

    if (s_value.length < 256)
    {
      a_string_complex.push(s_value);
      continue;
    }

    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException(
      'string', 'Dictionary has a value that is too long (' + s_value + ')');
  }

  // Indexes in the dictionary are evaluated during encoding of the dictionary.
  var i_index = 0;

  // Store numbers
  // i_dictionary+1, because total number of different values for count($a_number) is by 1 larger than the largest
  //   index in the dictionary (it can equal i_dictionary, if all the values are numbers).
  this._binary(this.i_dictionary + 1, i_number_count);

  ksort(a_number, 'SORT_NUMERIC');

  var i_last = -1; // -1 to allow store 0 as the first value, and to not require zero differences.

  var i_number_index = 0; // separate enumeration to exclude numbers that are used only in dates from the dictionary
  var a_number_index = [];
  for (i_number in a_number)
  {
    if (!a_number.hasOwnProperty(i_number))
      continue;

    if (a_number[i_number])
    {
      this.a_dictionary[i_number] = i_index;
      i_index++;
    }
    a_number_index[i_number] = i_number_index;
    i_number_index++;

    var i_difference = i_number - i_last - 1; // -1, because zero difference is not allowed.
    i_last = i_number;

    if (i_difference < 10)
    {
      this._binary(5, 0);
      this._binary(10, i_difference);
    }
    else if(i_difference<100)
    {
      this._binary(5, 1);
      this._binary(90, i_difference - 10);
    }
    else if(i_difference<10000)
    {
      this._binary(5, 2);
      this._binary(9900, i_difference - 100);
    }
    else if(i_difference<100000)
    {
      this._binary(5, 3);
      this._binary(90000, i_difference - 10000);
    }
    else // up to 2147483647
    {
      this._binary(5, 4);
      this._binary(2147383648, i_difference - 100000);
    }
  }

  // Store dates.
  this._binary(this.i_dictionary + 1, i_date_count);
  for (s_value in a_date)
  {
    if (!a_date.hasOwnProperty(s_value))
      continue;

    i_number = a_date[s_value];
    this.a_dictionary[s_value] = i_index;
    i_index++;

    // Store whether the number is only used in the date and should be excluded from the dictionary.
    this._binary(2, a_number[i_number] ? 1 : 0);

    // Dates are links to their numerical representation in the sequence of all numbers.
    this._binary(this.i_dictionary, a_number_index[i_number]);
  }

  // Store large numbers
  this._binary(this.i_dictionary + 1, a_number_large.length);
  for (s_key in a_number_large)
  {
    if (!a_number_large.hasOwnProperty(s_key))
      continue;

    i_number = a_number_large[s_key].toString();
    this.a_dictionary[i_number] = i_index;
    i_index++;

    // 16 - total number of different lengths ([10..20] lengths are allowed)
    // -10 from the length - to store numbers in range [0..10]
    this._binary(11, i_number.length - 10);
    for (i = 0; i < i_number.length; i++)
      this._binary(10, i_number[i]);
  }

  // Store simple strings
  var a_character = {}; // character -> index
  var s = WlSdk_Core_Tool_UrlEncode_UrlEncode.STRING_SIMPLE;
  for (i = 0; i < s.length; i++)
    a_character[s[i]] = i;
  var i_mod = WlSdk_Core_Tool_UrlEncode_UrlEncode.STRING_SIMPLE.length;

  this._binary(this.i_dictionary + 1, a_string_simple.length);
  for (s_key in a_string_simple)
  {
    if (!a_string_simple.hasOwnProperty(s_key))
      continue;

    s_value = a_string_simple[s_key];
    this.a_dictionary[s_value] = i_index;
    i_index++;

    // 31 is maximum length, empty string is also stored as a simple string - 32 different values
    this._binary(32, s_value.length);

    for (i = 0; i < s_value.length; i++)
      this._binary(i_mod, a_character[s_value[i]]);
  }

  // Store complex strings
  this._binary(this.i_dictionary + 1, a_string_complex.length);
  for (s_key in a_string_complex)
  {
    if (!a_string_complex.hasOwnProperty(s_key))
      continue;

    s_value = a_string_complex[s_key];

    this.a_dictionary[s_value] = i_index;
    i_index++;

    // Replaces each special character with a sequence of characters represented in UTF-8 encoding.
    // It is known that function unescape is outdated, but it was decided not to change this solution.
    // Method {@link \Core\Tool\UrlEncode\Test\UrlEncode\encodeSelenium::test()} is responsible for testing this behavior.
    s_value = unescape(encodeURIComponent(s_value));

    // 255 is maximum length, and empty strings are stored as simple string - so we can subtract 1 from the length,
    //   and use less information (255 instead 256 different values)
    this._binary(255, s_value.length - 1);

    for (i = 0; i < s_value.length; i++)
      this._binary(256, s_value.charCodeAt(i));
  }
};

/**
 * Gathers a dictionary based on the query to encode.
 *
 * @param {{}} a_query Query to encode.
 * @throws RsReportUrlException
 * @protected
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._dictionary_gather = function (a_query)
{
  var is_index = a_query instanceof Array;

  for (var s_key in a_query)
  {
    if (!a_query.hasOwnProperty(s_key))
      continue;

    var x_value = a_query[s_key];

    if (!is_index)
      this._dictionary_add(s_key);

    if (typeof (x_value) === 'object')
      this._dictionary_gather(x_value);
    else
      this._dictionary_add(x_value);
  }
};

/**
 * Modifies a query array.
 * This method is used to modify a query array to allow better compression.
 * For example, if we have a query array like this:
 * <code>
 * [
 *  'a::1'
 *  'a::2'
 *  'a::3'
 *  'b::1'
 *  'b::2'
 *  'c::1'
 *  'd::a'
 *  'e'
 * ]
 * </code>
 * This method will modify it to:
 * <code>
 *  [
 *   'a' => ['1','2','3']
 *   'b' => ['1','2']
 *   'c' => ['1']
 *   'd::a'
 *   'e'
 *  ]
 * </code>
 *
 * @param {{}} a_value Values to encode.
 * @return {{}} Modified values.
 * @protected
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._modify = function (a_value)
{
  let is_index = a_value instanceof Array;

  const a_new = {};
  for (let s_key in a_value)
  {
    if (!a_value.hasOwnProperty(s_key))
      continue;

    let x_value = a_value[s_key];
    if (typeof x_value === 'object')
    {
      a_new[s_key] = this._modify(x_value);
      continue;
    }

    if (!is_index || !(typeof x_value === 'string' || x_value instanceof String))
    {
      a_new[s_key] = x_value;
      continue;
    }

    let a_match = x_value.match(/^([a-z_]+::)([0-9]+)$/);
    if (a_match)
    {
      if (!a_new.hasOwnProperty(a_match[1]))
        a_new[a_match[1]] = [];

      a_new[a_match[1]].push(a_match[2]);
    }
    else
    {
      a_new[s_key] = x_value;
    }
  }

  return a_new;
};

/**
 * Encodes values.
 *
 * @param {{}} a_value Values to encode.
 * @protected
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype._value = function (a_value)
{
  var is_index = a_value instanceof Array; // whether array is indexed
  var has_scalar = false; // whether array has values
  var has_array = false; // whether array has arrays

  var i_length = 0;
  for (var s_key in a_value)
  {
    if (!a_value.hasOwnProperty(s_key))
      continue;

    i_length++; // objects do not have length property.

    if (typeof (a_value[s_key]) === 'object')
      has_array = true;
    else
      has_scalar = true;
  }

  if (i_length > WlSdk_Core_Tool_UrlEncode_UrlEncode.ARRAY_COUNT_MAX)
    throw new WlSdk_Core_Tool_UrlEncode_UrlEncodeException('array-long','Array has too many elements: '+debug(a_value));

  if (i_length <= 31)
  {
    this._binary(2, 0); // type of the length: 0 => up to 31
    this._binary(32, i_length);
  }
  else
  {
    this._binary(2, 1); // type of the length: 1 => 32..1023

    // 992 = 1024-32
    this._binary(992, i_length - 32);
  }

  if (!i_length)
    return;

  if (!is_index)
  {
    is_index = true;
    for (var i = 0; i < i_length; i++)
    {
      if (!a_value.hasOwnProperty(i.toString()))
      {
        is_index = false;
        break;
      }
    }
  }

  this._binary(2, is_index ? 0 : 1); // type of the array

  // Type of array values
  if (has_scalar && has_array)
    this._binary(3,0); // 0 - mixed
  else if(has_scalar)
    this._binary(3,1); // 1 - scalar values only
  else if(has_array)
    this._binary(3,2); // 2 - arrays only
  // else array is empty, so we do not need to specify type of values

  for (s_key in a_value)
  {
    if (!a_value.hasOwnProperty(s_key))
      continue;

    var x_value = a_value[s_key];

    if (!is_index)
      this._binary(this.i_dictionary, this.a_dictionary[s_key]);

    if (typeof (x_value) === 'object')
    {
      if (has_scalar)
        this._binary(2,0); // type of the value. 0 => array
      this._value(x_value);
    }
    else
    {
      if (has_array)
        this._binary(2,1); // type of the value. 1 => link to a dictionary
      this._binary(this.i_dictionary, this.a_dictionary[x_value]);
    }
  }
};

/**
 * Encodes a query array.
 *
 * Designed to encoding data without creating new object.
 *
 * @param {{}} a_query An array to encode.
 * @return string Encoded data.
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.encode = function (a_query)
{
  return (new WlSdk_Core_Tool_UrlEncode_UrlEncode()).encode(a_query);
};

/**
 * Encodes a query array.
 *
 * @param {{}} a_query An array to encode.
 * @return string Encoded data.
 */
WlSdk_Core_Tool_UrlEncode_UrlEncode.prototype.encode = function (a_query)
{
  this.a_dictionary = {};
  this.i_dictionary = 0;
  this.a_value = a_apn_zero();
  this.a_volume = a_apn_decimal_apn('1');

  a_query = this._modify(a_query);
  this._dictionary_gather(a_query);
  this._dictionary_encode();
  this._value(a_query);

  return a_apn_apn_string(this.a_value);
};