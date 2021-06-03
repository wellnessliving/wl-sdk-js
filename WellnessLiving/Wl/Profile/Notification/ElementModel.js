/**
 * Retrieves information about push notification item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Notification_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_push_history";

  /**
   * Date of push notification sending.
   *
   * @get result
   * @type {string}
   */
  this.dtl_send = undefined;

  /**
   * Business key.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of push notification to retrieve information about.
   *
   * Primary key in {@link \Core\Push\History\Sql}.
   *
   * @get get
   * @type {string}
   */
  this.k_push_history = "0";

  /**
   * Push notification message.
   *
   * @get result
   * @type {string}
   */
  this.text_message = undefined;

  /**
   * Push notification title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Notification_ElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Notification_ElementModel.prototype.config=function()
{
  return {"a_field": {"dtl_send": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_push_history": {"get": {"get": true}},"text_message": {"get": {"result": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Notification_ElementModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_push_history Key of push notification to retrieve information about. Primary key in {@link \Core\Push\History\Sql}.
 * @returns {Wl_Profile_Notification_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */