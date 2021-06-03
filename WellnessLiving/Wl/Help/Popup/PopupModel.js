/**
 * Help popup settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Help_Popup_PopupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Whether "Call Us" button should be hidden in the help popup.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_call_us = undefined;

  /**
   * Whether "Email Us" button should be hidden in the help popup.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_email_us = undefined;

  /**
   * Whether "Forum" button should be hidden in the help popup.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_forum = undefined;

  /**
   * Whether "My Requests" button should be hidden in the help popup.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_my_requests = undefined;

  /**
   * Articles target ID.
   * Constant from {@link ArticleTargetSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_article_target = undefined;

  /**
   * A business in which a user requests help.
   * Primary key from {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User who asks for help.
   * Primary key from {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Help_Popup_PopupModel);

/**
 * @inheritDoc
 */
Wl_Help_Popup_PopupModel.prototype.config=function()
{
  return {"a_field": {"hide_call_us": {"get": {"result": true}},"hide_email_us": {"get": {"result": true}},"hide_forum": {"get": {"result": true}},"hide_my_requests": {"get": {"result": true}},"id_article_target": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Help_Popup_PopupModel.instanceGet
 * @param {string} k_business A business in which a user requests help. Primary key from {@link \RsBusinessSql} table.
 * @param {string} uid User who asks for help. Primary key from {@link \PassportLoginSql} table.
 * @returns {Wl_Help_Popup_PopupModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */