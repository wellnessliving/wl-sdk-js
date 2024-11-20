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
   * @typedef {{}} Wl_Mail_Pattern_Disturb_DisturbModel_a_disturb
   * @property {number} i_end The end time of the do not disturb period, in seconds since midnight.
   * @property {number} i_start The start time of the do not disturb period, in seconds since midnight.
   */

  /**
   * The start and end time for all the do not disturb periods for each mail page.
   * Each key is one of the {@link RsMailPageSid} constants.
   * Each of the values will be `null` if the do not disturb period is not set for this mail page.
   * It will be an array with the following keys if set.
   * <dl>
   *   <dt>int <var>i_end</var></dt>
   *   <dd>The end time of the do not disturb period, in seconds since midnight.</dd>
   *   <dt>int <var>i_start</var></dt>
   *   <dd>The start time of the do not disturb period, in seconds since midnight.</dd>
   * </dl>
   *
   * @get result
   * @post post
   * @type {Wl_Mail_Pattern_Disturb_DisturbModel_a_disturb}
   */
  this.a_disturb = [];

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
  return {"a_field": {"a_disturb": {"get": {"result": true},"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Mail_Pattern_Disturb_DisturbModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Mail_Pattern_Disturb_DisturbModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */