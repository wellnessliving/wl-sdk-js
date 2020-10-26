/**
 * A set of functions to process dates.
 *
 * @constructor
 */
function WlSdk_Core_Date()
{
}

/**
 * Performs integer division.
 *
 * @param {number} x Dividend.
 * @param {number} y Divisor.
 * @returns {number} Quotient.
 * @private
 */
WlSdk_Core_Date._div = function(x,y)
{
  return Math.round((x-(x%y))/y);
}

/**
 * Converts a date in array format to count of days.
 *
 * @param {number[]} a_date Data in array format.
 * @returns {number} Count of days.
 */
WlSdk_Core_Date.aDc = function(a_date)
{
  var i_year = a_date[0]-1;
  var i_day_count = i_year*365+WlSdk_Core_Date._div(i_year,4)-WlSdk_Core_Date._div(i_year,100)+
    WlSdk_Core_Date._div(i_year,400);
  var a_day = [0,31,59,90,120,151,181,212,243,273,304,334];
  i_day_count += a_day[a_date[1]-1];
  if(a_date[1]>2&&WlSdk_Core_Date.yearLeap(a_date[0]))
    i_day_count++;
  i_day_count += a_date[2];
  return i_day_count;
};

/**
 * Converts a data in array format to HTTP format.
 *
 * @param {number[]} a_date Date in array format.
 * @returns {string} Date in HTTP format.
 */
WlSdk_Core_Date.aHttp = function(a_date)
{
  var i_week = WlSdk_Core_Date.dcWeek(WlSdk_Core_Date.aDc(a_date));

  var a_week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  var a_month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  var s_week = a_week[i_week-1];

  var s_day = a_date[2].toString();
  if(s_day.length===1)
    s_day = '0'+s_day;

  var s_month = a_month[a_date[1]-1];

  var s_year = a_date[0];

  var s_hour = a_date[3].toString();
  if(s_hour.length===1)
    s_hour = '0'+s_hour;

  var s_minute = a_date[4].toString();
  if(s_minute.length===1)
    s_minute = '0'+s_minute;

  var s_second = a_date[5].toString();
  if(s_second.length===1)
    s_second = '0'+s_second;

  return s_week+', '+s_day+' '+s_month+' '+s_year+' '+s_hour+':'+s_minute+':'+s_second+' GMT';
};

/**
 * Converts array representation of a date to MySQL format.
 *
 * @param {number[]} a_date Date in array representation to be converter.
 * @param {boolean} [is_time=true] <tt>true</tt> - return date and time; <tt>false</tt> - return date only.
 * @return {string} Date (with/without time) in MySQL format.
 */
WlSdk_Core_Date.aMysql = function(a_date,is_time)
{
  is_time = is_time!==false;

  var s_date = a_date[0]+'-'+(a_date[1]<10?'0':'')+a_date[1]+'-'+(a_date[2]<10?'0':'')+a_date[2];
  if(is_time===false)
    return s_date;
  var s_time = (a_date[3]<10?'0':'')+a_date[3]+':'+(a_date[4]<10?'0':'')+a_date[4]+':'+(a_date[5]<10?'0':'')+a_date[5];
  return s_date+' '+s_time;
};

/**
 * Gets day of week by day count.
 *
 * @param {number} i_dc Day count.
 * @returns {number} Day of week (1 - monday, 7 - sunday).
 */
WlSdk_Core_Date.dcWeek = function(i_dc)
{
  return (i_dc-1)%7+1;
};

/**
 * Converts JS Date object to date represented as array.
 *
 * @param {Date} o_date Input date.
 * @param {boolean} [is_local=false] <tt>true</tt> - convert time from UTC to local;
 * <tt>false</tt> - do not convert.
 * @return {number[]} Array representation of date.
 */
WlSdk_Core_Date.jsA = function(o_date,is_local)
{
  var a = [
    o_date.getUTCFullYear(),
    o_date.getUTCMonth()+1,
    o_date.getUTCDate(),
    o_date.getUTCHours(),
    o_date.getUTCMinutes(),
    o_date.getUTCSeconds()
  ];

  if(is_local)
    a_date_a_add(a,-o_date.getTimezoneOffset()*60);

  return a;
};

/**
 * Converts a date in MySQL format to array format.
 *
 * @param {string} dt_date Date in MySQL format.
 * @returns {number[]} Date in array format.
 */
WlSdk_Core_Date.mysqlA = function(dt_date)
{
  var a_date = (dt_date.trim()+' 0 0 0 0 0 0').replace(/[^0-9]+/g,' ').split(' ');

  return [
    parseInt(a_date[0],10),
    parseInt(a_date[1],10),
    parseInt(a_date[2],10),
    parseInt(a_date[3],10),
    parseInt(a_date[4],10),
    parseInt(a_date[5],10)
  ];
};

/**
 * Converts a date in MySQL format to HTTP format.
 *
 * @param {string} dt_date Date in MySQL format.
 * @returns {string} Date in HTTP format.
 */
WlSdk_Core_Date.mysqlHttp = function(dt_date)
{
  return WlSdk_Core_Date.aHttp(WlSdk_Core_Date.mysqlA(dt_date));
};

/**
 * Gets current date/time in array representation.
 *
 * @return {number[]} Current date/time in array representation.
 */
WlSdk_Core_Date.nowA = function()
{
  return WlSdk_Core_Date.jsA(WlSdk_Core_Date.nowJs());
};

/**
 * Gets current date/time as JS Date object.
 *
 * @return {Date} JS Date/time object.
 */
WlSdk_Core_Date.nowJs = function()
{
  return new Date();
};

/**
 * Returns current date/time in MySQL format.
 *
 * @return {string} Current date/time in MySQL format.
 */
WlSdk_Core_Date.nowMysql = function()
{
  return WlSdk_Core_Date.aMysql(WlSdk_Core_Date.nowA());
};

/**
 * Checks if a year is leap.
 *
 * @param {number} i_year Year to check.
 * @returns {boolean} <tt>true</tt> if year is leap; <tt>false</tt> otherwise.
 */
WlSdk_Core_Date.yearLeap = function(i_year)
{
  return i_year%4===0&&i_year%100!==0||i_year%400===0;
}