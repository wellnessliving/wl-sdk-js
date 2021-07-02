/**
 * Retrieves information about activity item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Activity_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_activity";

  /**
   * Messages with description what did user do to get points.
   *
   * @get result
   * @type {string[]}
   */
  this.a_reward_score = undefined;

  /**
   * Date of activity in GMT timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_gmt = undefined;

  /**
   * Date of activity in local user timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Total amount of points user got for {@link \Wl\Profile\Activity\ElementApi::$k_login_activity}. This field is a copy of result of {@link \RsLoginActivity::reward()}.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Points spent to redeem a prize.
   *
   * @get result
   * @type {number}
   */
  this.i_spend = undefined;

  /**
   * ID of icon which must be user for this activity. One of {@link \Wl\Design\IconSid} constants. Empty if is no special icon for this activity.
   *
   * @get result
   * @type {number}
   */
  this.id_icon = undefined;

  /**
   * Activity type. One of {@link RsLoginActivityTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_type = undefined;

  /**
   * ID of activity to retrieve information about.
   *
   * Primary key in {@link \RsLoginActivitySql}.
   *
   * @get get
   * @type {string}
   */
  this.k_login_activity = "0";

  /**
   * Description of the action, who and what did.
   *
   * @get result
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * Link to share activity with social networks.
   *
   * @get result
   * @type {string}
   */
  this.url_link = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Activity_ElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Activity_ElementModel.prototype.config=function()
{
  return {"a_field": {"a_reward_score": {"get": {"result": true}},"dt_date_gmt": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"i_score": {"get": {"result": true}},"i_spend": {"get": {"result": true}},"id_icon": {"get": {"result": true}},"id_type": {"get": {"result": true}},"k_login_activity": {"get": {"get": true}},"s_message": {"get": {"result": true}},"url_link": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Activity_ElementModel.instanceGet
 * @param {string} k_login_activity ID of activity to retrieve information about. Primary key in {@link \RsLoginActivitySql}.
 * @returns {Wl_Profile_Activity_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */