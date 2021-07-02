/**
 * The API for send messages from the virtual phone number of the business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_SmsSendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business. Primary key {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The body of the sms.
   *
   * @post post
   * @type {string}
   */
  this.text_sms_body = undefined;

  /**
   * User key for which need to send the sms. Primary key in {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid_send = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_SmsSendModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_SmsSendModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"text_sms_body": {"post": {"post": true}},"uid_send": {"post": {"post": true}}}};
};