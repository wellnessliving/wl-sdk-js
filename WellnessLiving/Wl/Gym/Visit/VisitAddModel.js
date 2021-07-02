/**
 * Model to add gym visit.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Gym_Visit_VisitAddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Gym_Visit_VisitAddModel_a_time
   * @property {number} i_hour Number of hours.
   * @property {number} i_minute Number of minutes.
   * @property {boolean} is_am Whether time in AM or PM.
   */

  /**
   * Time of visit:
   * <dl>
   *   <dt>int <var>i_hour</var></dt>
   *   <dd>Number of hours.</dd>
   *   <dt>int <var>i_minute</var></dt>
   *   <dd>Number of minutes.</dd>
   *   <dt>bool <var>is_am</var></dt>
   *   <dd>Whether time in AM or PM.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Gym_Visit_VisitAddModel_a_time}
   */
  this.a_time = [];

  /**
   * Date of visit.
   *
   * @post post
   * @type {string}
   */
  this.dt_date = undefined;

  /**
   * Determines whether to pay.
   *
   * <tt>true</tt> if need pay visit, <tt>false</tt> if visit should be not pay.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location key. Primary key in {@link \RsLocationSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * User key who book gym visit.
   *
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @post get
   * @type {number}
   */
  this.uid = undefined;

  /**
   * Url to catalog for pay of visit.
   *
   * @post result
   * @type {string}
   */
  this.url_catalog = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Gym_Visit_VisitAddModel);

/**
 * @inheritDoc
 */
Wl_Gym_Visit_VisitAddModel.prototype.config=function()
{
  return {"a_field": {"a_time": {"post": {"post": true}},"dt_date": {"post": {"post": true}},"is_pay": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"get": true}},"uid": {"post": {"get": true}},"url_catalog": {"post": {"result": true}}}};
};