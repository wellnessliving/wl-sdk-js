/**
 * Send mail API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_SendMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Primary key of business in {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Business mail.
   *
   * @post post
   * @type {string}
   */
  this.s_business_mail = "";

  /**
   * Business name.
   *
   * @post post
   * @type {string}
   */
  this.s_business_name = "";

  /**
   * Business reply.
   *
   * @post post
   * @type {string}
   */
  this.s_business_reply = "";

  /**
   * Company name.
   *
   * @post post
   * @type {string}
   */
  this.s_campaign = "";

  /**
   * Message recipient.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * Message subject.
   *
   * @post post
   * @type {string}
   */
  this.s_subject = "";

  /**
   * Message content.
   *
   * @post post
   * @type {string}
   */
  this.z_html = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_SendMailModel);

/**
 * @inheritDoc
 */
Wl_Mail_SendMailModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"s_business_mail": {"post": {"post": true}},"s_business_name": {"post": {"post": true}},"s_business_reply": {"post": {"post": true}},"s_campaign": {"post": {"post": true}},"s_mail": {"post": {"post": true}},"s_subject": {"post": {"post": true}},"z_html": {"post": {"post": true}}}};
};