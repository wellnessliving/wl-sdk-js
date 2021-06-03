/**
 * Class for manage "Do Not Disturb" option.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_Pattern_Disturb_DisturbModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Mail_Pattern_Disturb_DisturbModel_a_end
   * @property {number} i_hour Number of hour.
   * @property {boolean} is_am Whether time in <tt>AM</tt> or <tt>PM</tt>.
   */

  /**
   * End time of disturb period. <dl>
   *   <dt>int <var>i_hour</var></dt>
   *   <dd>Number of hour.</dd>
   *   <dt>bool <var>is_am</var></dt>
   *   <dd>Whether time in <tt>AM</tt> or <tt>PM</tt>.</dd>
   * </dl>
   *
   * @get result
   * @post post
   * @type {?Wl_Mail_Pattern_Disturb_DisturbModel_a_end}
   */
  this.a_end = null;

  /**
   * @typedef {{}} Wl_Mail_Pattern_Disturb_DisturbModel_a_start
   * @property {number} i_hour Number of hour.
   * @property {boolean} is_am Whether time in <tt>AM</tt> or <tt>PM</tt>.
   */

  /**
   * Start time of disturb period. <dl>
   *   <dt>int <var>i_hour</var></dt>
   *   <dd>Number of hour.</dd>
   *   <dt>bool <var>is_am</var></dt>
   *   <dd>Whether time in <tt>AM</tt> or <tt>PM</tt>.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Mail_Pattern_Disturb_DisturbModel_a_start}
   */
  this.a_start = undefined;

  /**
   * End time of "Do Not Disturb" period in seconds from start of the day.
   *
   * <tt>null</tt> if disturb period is not setup.
   *
   * @get result
   * @type {number}
   */
  this.i_end = undefined;

  /**
   * Start time of "Do Not Disturb" period in seconds from start of the day.
   *
   * <tt>null</tt> if disturb period is not setup.
   *
   * @get result
   * @type {?number}
   */
  this.i_start = null;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Pattern_Disturb_DisturbModel);

/**
 * @inheritDoc
 */
Wl_Mail_Pattern_Disturb_DisturbModel.prototype.config=function()
{
  return {"a_field": {"a_end": {"get": {"result": true},"post": {"post": true}},"a_start": {"post": {"post": true}},"i_end": {"get": {"result": true}},"i_start": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Mail_Pattern_Disturb_DisturbModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Mail_Pattern_Disturb_DisturbModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */