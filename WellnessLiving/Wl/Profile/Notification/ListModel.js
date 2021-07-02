/**
 * Retrieves a list of push notification items to show in user profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Notification_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * A list of notification items. Each value is a primary key in {@link \Core\Push\History\Sql}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_notification = undefined;

  /**
   * Business key to show information for. Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of a user to show information for. Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Notification_ListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Notification_ListModel.prototype.config=function()
{
  return {"a_field": {"a_notification": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Notification_ListModel.instanceGet
 * @param {string} k_business Business key to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} uid ID of a user to show information for. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_Profile_Notification_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */