/**
 * An endpoint that can be used to send email messages.
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
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The business's mailing address.
   *
   * @post post
   * @type {string}
   */
  this.s_business_mail = "";

  /**
   * The business name.
   *
   * @post post
   * @type {string}
   */
  this.s_business_name = "";

  /**
   * The business's reply.
   *
   * @post post
   * @type {string}
   */
  this.s_business_reply = "";

  /**
   * The campaign name.
   *
   * @post post
   * @type {string}
   */
  this.s_campaign = "";

  /**
   * The message recipient's address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The message's subject line.
   *
   * @post post
   * @type {string}
   */
  this.s_subject = "";

  /**
   * The message content.
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