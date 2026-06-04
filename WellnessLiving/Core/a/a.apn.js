/**
 * Characters for base-62 strings.
 *
 * @type {string}
 */
const A_APN_CHARACTER = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/**
 * Adds two arbitrary precision numbers.
 *
 * @param {Array} a_left Left operand.
 * @param {Array} a_right Right operand.
 * @return {Array} Sum of two operands.
 */
function a_apn_add(a_left,a_right)
{
  var a_result=[];
  var i_max=Math.max(a_left.length,a_right.length);
  var i;
  var i_carry=0;
  var i_mod=0;

  // A small optimization when adding a zero.
  if(!a_left.length)
    return a_right;
  if(!a_right.length)
    return a_left;

  for(i=0;i<i_max;i++)
  {
    i_mod=i_carry;
    if(a_left.length>i)
      i_mod+=a_left[i];
    if(a_right.length>i)
      i_mod+=a_right[i];
    if(i_mod>=32768)
    {
      i_mod-=32768;
      i_carry=1;
    }
    else
      i_carry=0;
    a_result.push(i_mod);
  }

  if(i_carry>0)
    a_result.push(i_carry);

  return a_result;
}

/**
 * Converts an APN to decimal number.
 *
 * @param {array} a_apn APN to convert.
 * @returns {number} Decimal number.
 */
function a_apn_apn_decimal(a_apn)
{
  var a_max = a_apn_decimal_apn(Number.MAX_SAFE_INTEGER.toString());
  WlSdk_AssertException.assertTrue(a_apn_compare(a_max,a_apn) >= 0,{
    'a_apn': a_apn,
    'a_max': a_max,
    'i_max': Number.MAX_SAFE_INTEGER,
    'text_message': '[a_apn_apn_decimal] APN is too large.'
  });

  var i_value = 0;
  var a_char = a_apn_apn_string(a_apn).split('');
  for(var i = 0; i < a_char.length; i++)
    i_value += A_APN_CHARACTER.indexOf(a_char[i]) * Math.pow(62,i);

  return i_value;
}

/**
 * Converts an APN to base-62 string.
 *
 * @param {Array} a_apn APN to convert.
 * @returns {string} Base-62 string.
 */
function a_apn_apn_string(a_apn)
{
  var s_character=A_APN_CHARACTER;

  var s_result='';
  var v;
  while(a_apn.length>0)
  {
    var a_set=a_apn_div(a_apn,[0,0,0,0,0,0,0,0,256,32224,13198,21532,20046,3242,23901,30459,19530,22386,5557,5056,9263,3137,6862,26752,10455,6574,26727,18584,32687,21571,9557,20476,17571,19883,21083,11607,20838,21003,29586,17816,16236,27464,20990,30183,6439,4460,16884,20387,18550,13976,4504]); // the hardcoded APN number is 62^128
    a_apn=a_set[0];
    a_set=a_set[1];

    for(i=0;i<32;i++)
    {
      var a_quotient=a_apn_div(a_set,[30736,450]); // 62^4
      a_set=a_quotient[0];
      v=0;
      for(var i_j=a_quotient[1].length-1;i_j>=0;i_j--)
        v=v*32768+a_quotient[1][i_j];
      var i_one=v%62;
      v=(v-i_one)/62;
      var i_two=v%62;
      v=(v-i_two)/62;
      var i_three=v%62;
      var i_four=(v-i_three)/62;
      s_result+=s_character.charAt(i_one)+s_character.charAt(i_two)+s_character.charAt(i_three)+s_character.charAt(i_four);
    }
  }

  var i=s_result.length-1;
  while(i>=0&&s_result.charAt(i)==='0')
    i--;
  s_result=s_result.substr(0,i+1);

  return s_result;
}

/**
 * Compares two APNs.
 *
 * @param {Array} a_left Left argument (APN).
 * @param {Array} a_right Right argument (APN).
 * @returns {number} -1, if a_left is less then a_right; 0, if a_left equals a_right; 1, if a_left is greater than a_right.
 */
function a_apn_compare(a_left,a_right)
{
  // normalize numbers
  while(a_right.length>0&&a_right[a_right.length-1]==0)
    a_right.pop();
  while(a_left.length>0&&a_left[a_left.length-1]==0)
    a_left.pop();

  if(a_left.length<a_right.length)
    return -1;
  if(a_left.length>a_right.length)
    return 1;

  // length is equal
  for(var i=a_left.length-1;i>=0;i--)
  {
    if(a_left[i]<a_right[i])
      return -1;
    if(a_left[i]>a_right[i])
      return 1;
  }

  return 0;
}

/**
 * Prepares a decimal number for use in other APM functions.
 *
 * @param {string} s_decimal A decimal integer.
 * @return {Array} Arbitrary precision number.
 */
function a_apn_decimal_apn(s_decimal)
{
  if(typeof(s_decimal)==='number')
    s_decimal=s_decimal.toString();

  if(s_decimal.length<=5&&s_decimal<32768) // A little optimization for small numbers.
    return [parseInt(s_decimal)];

  var a_result=[];
  var i,i_l,s;
  var a_power=[10,100,1000,10000];

  for(i=0;i<s_decimal.length;i+=4)
  {
    i_l=Math.min(4,s_decimal.length-i);
    s=s_decimal.substr(i,i_l);
    a_result=a_apn_add(a_apn_mul(a_result,[a_power[i_l-1]]),[parseInt(s)]);
  }

  return a_result;
}

/**
 * Divides a_left by a_right.
 *
 * @param {Array} a_left Dividend.
 * @param {Array} a_right Divisor.
 * @return {Array} Quotient (0) and remainder (1).
 */
function a_apn_div(a_left,a_right)
{
  if(!a_right.length) // division by zero
    return null;

  var i_right=a_right.length;

  var a_quotient=[];
  var a_remainder=[];
  var i_left=a_left.length-1;
  var i_dividend;
  var i_divisor;

  while(i_left>=0)
  {
    var is_zero=false;
    while(i_left>=0&&a_apn_compare(a_remainder,a_right)<0)
    {
      if(is_zero)
        a_quotient.unshift(0);
      else
        is_zero=true;
      a_remainder.unshift(a_left[i_left]);
      i_left--;
    }

    if(i_left<0&&a_apn_compare(a_remainder,a_right)<0)
    {
      a_quotient.unshift(0);
      break;
    }

    var i_number=i_right-1;

    if(a_remainder.length>i_right)
    {
      // At this point:
      // i_right equals a_remainder.length-1
      // i_number equals a_remainder.length-2
      // Using a_remainder.length would be more clear, but using variables is a little faster
      i_dividend=a_remainder[i_right]*32768+a_remainder[i_number];
    }
    else
    {
      // i_number equals a_remainder.length-1
      i_dividend=a_remainder[i_number];
    }

    i_divisor=a_right[i_number];

    if(i_number>0)
    {
      i_number--;
      i_dividend=a_remainder[i_number]+i_dividend*32768;
      i_divisor=a_right[i_number]+i_divisor*32768;
    }

    if(i_number>0)
    {
      i_number--;
      i_dividend=a_remainder[i_number]+i_dividend*32768;
      i_divisor=a_right[i_number]+i_divisor*32768;
    }

    if(i_number>0)
    {
      i_number--;
      i_dividend=a_remainder[i_number]+i_dividend*32768;
      i_divisor=a_right[i_number]+i_divisor*32768;
    }

    i_number=Math.floor(i_dividend/i_divisor);

    a_quotient.unshift(i_number);
    a_remainder=a_apn_sub(a_remainder,a_apn_mul(a_right,[i_number]));
  }

  while(a_quotient.length>0&&a_quotient[a_quotient.length-1]==0)
    a_quotient.pop();

  return [a_quotient,a_remainder];
}

/**
 * Multiplies two arbitrary precision numbers.
 *
 * @param {Array} a_left Left operand.
 * @param {Array} a_right Right operand.
 * @return {Array} Multiplication of two operands.
 */
function a_apn_mul(a_left,a_right)
{
  var a_result=[];
  var a_element;
  var i;
  var i_left,i_right;
  var i_carry,i_mod,i_value;

  if(!a_left.length||!a_right.length) // multiplication by zero
    return [];

  for(i_right=0;i_right<a_right.length;i_right++)
  {
    if(!a_right[i_right])
      continue;

    a_element=[];

    for(i=0;i<i_right;i++)
      a_element.push(0);

    i_carry=0;
    for(i_left=0;i_left<a_left.length;i_left++)
    {
      i_value=a_left[i_left]*a_right[i_right]+i_carry;
      i_mod=i_value%32768;
      i_carry=(i_value-i_mod)/32768;
      a_element.push(i_mod);
    }
    if(i_carry>0)
      a_element.push(i_carry);
    a_result=a_apn_add(a_result,a_element);
  }
  return a_result;
}

/**
 * Subtracts right argument from left argument.
 *
 * @param {Array} a_left Left argument, APN.
 * @param {Array} a_right Right argument, APN.
 * @returns {Array|null} Difference, APN. Null, if a_left<a_right.
 */
function a_apn_sub(a_left,a_right)
{
  var a_result=[];
  var i;

  var i_carry=0;
  for(i=0;i<a_left.length;i++)
  {
    var i_mod=i_carry+a_left[i];
    if(a_right.length>i)
      i_mod-=a_right[i];
    if(i_mod<0)
    {
      i_mod+=32768;
      i_carry=-1;
    }
    else
      i_carry=0;
    a_result.push(i_mod);
  }

  while(a_result.length>0&&a_result[a_result.length-1]==0)
    a_result.pop();

  return a_result;
}

/**
 * Returns an arbitrary precision number containing 0.
 *
 * @return {Array} An arbitrary precision number containing 0.
 */
function a_apn_zero()
{
  return [];
}