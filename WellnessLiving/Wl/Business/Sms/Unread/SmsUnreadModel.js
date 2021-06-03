/**
 * The API for delete unread sms.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Unread_SmsUnreadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business. Primary key {@link \RsBusinessSql} table.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key with whom you want to delete unread messages.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Unread_SmsUnreadModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Unread_SmsUnreadModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"delete": {"post": true},"post": {"post": true}},"uid": {"delete": {"post": true},"post": {"post": true}}}};
};