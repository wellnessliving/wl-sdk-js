/**
 * API for get count of unread messages in the business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Unread_SmsUnreadCountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The count with unread SMS in the business.
   *
   * @get result
   * @type {number}
   */
  this.i_unread_sms = undefined;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Unread_SmsUnreadCountModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Unread_SmsUnreadCountModel.prototype.config=function()
{
  return {"a_field": {"i_unread_sms": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};