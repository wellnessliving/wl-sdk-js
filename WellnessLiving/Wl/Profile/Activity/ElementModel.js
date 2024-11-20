/**
 * An endpoint that returns detailed information about a single client activity.
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
   * Messages with description what did user do to get account credits as reward points.
   *
   * @get result
   * @type {string[]}
   */
  this.a_credit_score = undefined;

  /**
   * Messages with description what did user do to get points.
   *
   * @get result
   * @type {string[]}
   */
  this.a_reward_score = undefined;

  /**
   * The date of the activity in GMT.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_gmt = undefined;

  /**
   * The date of the activity in the client's time zone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Description of the action, who and what did.
   *
   * @get result
   * @type {string}
   */
  this.html_message = undefined;

  /**
   * Total amount of account credits user got for {@link Wl_Profile_Activity_ElementModel.k_login_activity}. This field is a copy of result of {@link RsLoginActivity::reward()}.
   *
   * @get result
   * @type {number}
   */
  this.i_credit_score = undefined;

  /**
   * The total amount of rewards points the client received for the activity.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * The rewards points used to redeem a prize.
   *
   * @get result
   * @type {number}
   */
  this.i_spend = undefined;

  /**
   * The ID of the icon that should be shown for this activity. One of {@link Wl_Design_IconSid} constants.
   *
   * This will be `null`  is no special icon for this activity.
   *
   * @get result
   * @type {?number}
   */
  this.id_icon = null;

  /**
   * The ID of the activity item returned by this endpoint. One of {@link RsLoginActivityTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_type = undefined;

  /**
   * Object ID, for example, class period ID for books and visits.
   *
   * @get result
   * @type {string}
   */
  this.k_id = undefined;

  /**
   * The key of the activity item represented by this endpoint.
   *
   * @get get
   * @type {string}
   */
  this.k_login_activity = "0";

  /**
   * The description of the activity. This should include the nature of the activity and the people involved.
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
  return {"a_field": {"a_credit_score": {"get": {"result": true}},"a_reward_score": {"get": {"result": true}},"dt_date_gmt": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"html_message": {"get": {"result": true}},"i_credit_score": {"get": {"result": true}},"i_score": {"get": {"result": true}},"i_spend": {"get": {"result": true}},"id_icon": {"get": {"result": true}},"id_type": {"get": {"result": true}},"k_id": {"get": {"result": true}},"k_login_activity": {"get": {"get": true}},"s_message": {"get": {"result": true}},"url_link": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Activity_ElementModel.instanceGet
 * @param {string} k_login_activity The key of the activity item represented by this endpoint.
 * @returns {Wl_Profile_Activity_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */