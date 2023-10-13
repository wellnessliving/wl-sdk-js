/**
 * Allows to get and update timezone in user's profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Timezone_ProfileTimezoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Profile_Timezone_ProfileTimezoneModel_a_timezone
   * @property {string} k_geo_timezone Timezone key.
   * @property {number} i_shift Shift time zone.
   * @property {string} s_file File name.
   * @property {number} i_order Order.
   * @property {string} text_abbr Timezone abbreviation.
   * @property {string} s_title Timezone title.
   * @property {string} k_timezone Timezone key.
   */

  /**
   * List of timezones. Keys - timezone keys; primary keys in {@link \AGeoTimezoneSql} table.
   * Values - sub array with next keys:
   * <dl>
   *   <dt>
   *     string <var>k_geo_timezone</var>
   *   </dt>
   *   <dd>
   *     Timezone key.
   *   </dd>
   *   <dt>
   *     int <var>i_shift</var>
   *   </dt>
   *   <dd>
   *     Shift time zone.
   *   </dd>
   *   <dt>
   *     string <var>s_file</var>
   *   </dt>
   *   <dd>
   *     File name.
   *   </dd>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     Order.
   *   </dd>
   *   <dt>
   *     string <var>text_abbr</var>
   *   </dt>
   *   <dd>
   *     Timezone abbreviation.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Timezone title.
   *   </dd>
   *   <dt>
   *     string <var>k_timezone</var>
   *   </dt>
   *   <dd>
   *     Timezone key.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Timezone_ProfileTimezoneModel_a_timezone[]}
   */
  this.a_timezone = [];

  /**
   * Whether clients are allowed to adjust timezone.
   *
   * <tt>true</tt> if allowed, <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_timezone = undefined;

  /**
   * Key of the business, in which user selected timezone.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of the timezone, which user selected to see site in.
   *
   * @put post
   * @type {string}
   */
  this.k_timezone = "0";

  /**
   * Key of the timezone which is currently selected.
   *
   * @get result
   * @type {string}
   */
  this.k_timezone_select = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Timezone_ProfileTimezoneModel);

/**
 * @inheritDoc
 */
Wl_Profile_Timezone_ProfileTimezoneModel.prototype.config=function()
{
  return {"a_field": {"a_timezone": {"get": {"result": true}},"is_profile_timezone": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_timezone": {"put": {"post": true}},"k_timezone_select": {"get": {"result": true}}}};
};