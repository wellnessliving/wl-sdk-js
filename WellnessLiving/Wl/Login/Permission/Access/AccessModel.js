/**
 * Class for check if user can make class reservation.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Permission_Access_AccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_access
   * @property {string} k_location Location key, where class or service occurs.
   * @property {string} k_class Class key.
   * @property {string} k_login_promotion Login promotion key if need to check access for specific promotion.
   * @property {string} k_resource Resource key.
   * @property {string} k_service Service key.
   * @property {string} s_deny Login permission error code.
   */

  /**
   * Schedule access information. Has structure: <dl>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Location key, where class or service occurs.</dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>Class key.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>Login promotion key if need to check access for specific promotion.</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>Resource key.</dd>
   *   <dt>string <var>k_service</var></dt>
   *   <dd>Service key.</dd>
   *   <dt>string <var>s_deny</var></dt>
   *   <dd>Login permission error code.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Permission_Access_AccessModel_a_access}
   */
  this.a_access = undefined;

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_schedule
   * @property {string} k_location Location key, where class or service occurs.
   * Primary key in {@link \RsLocationSql} table.
   * @property {string} k_class Class key.
   * Primary key in {@link \RsClassSql} table.
   * @property {string} k_login_promotion Login promotion key if need to check access for specific promotion.
   * Primary key in {@link \RsLoginPromotionSql} table.
   * @property {string} k_resource Resource key.
   * Primary key in {@link \RsResourceSql} table.
   * @property {string} k_service Service key.
   * Primary key in {@link \RsServiceSql} table.
   */

  /**
   * Schedule item information. Has structure: <dl>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>
   *     Location key, where class or service occurs.
   *     Primary key in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>
   *     Class key.
   *     Primary key in {@link \RsClassSql} table.
   *   </dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>
   *     Login promotion key if need to check access for specific promotion.
   *     Primary key in {@link \RsLoginPromotionSql} table.
   *   </dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>
   *     Resource key.
   *     Primary key in {@link \RsResourceSql} table.
   *   </dd>
   *   <dt>string <var>k_service</var></dt>
   *   <dd>
   *     Service key.
   *     Primary key in {@link \RsServiceSql} table.
   *   </dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Login_Permission_Access_AccessModel_a_schedule}
   */
  this.a_schedule = undefined;

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_time
   * @property {number} i_hour Number of hours.
   * @property {number} i_minute Number of minutes.
   * @property {boolean} is_am Whether time in AM or PM.
   */

  /**
   * Time when class or service occurs: <dl>
   *   <dt>int <var>i_hour</var></dt>
   *   <dd>Number of hours.</dd>
   *   <dt>int <var>i_minute</var></dt>
   *   <dd>Number of minutes.</dd>
   *   <dt>bool <var>is_am</var></dt>
   *   <dd>Whether time in AM or PM.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Login_Permission_Access_AccessModel_a_time}
   */
  this.a_time = undefined;

  /**
   * Date when class or service occurs.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = undefined;

  /**
   * Whether user is traveller in current business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * Business key.
   *
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Permission_Access_AccessModel);

/**
 * @inheritDoc
 */
Wl_Login_Permission_Access_AccessModel.prototype.config=function()
{
  return {"a_field": {"a_access": {"get": {"result": true}},"a_schedule": {"get": {"get": true}},"a_time": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};