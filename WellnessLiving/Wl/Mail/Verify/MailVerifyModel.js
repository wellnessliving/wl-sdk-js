/**
 * Api to work with verification email in Amazon SES. It is necessary for sending email through Amazon SES.
 * Amazon SES can send email only from verified email addresses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_Verify_MailVerifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Email address.
   *
   * @post post
   * @type {string}
   */
  this.text_email = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Verify_MailVerifyModel);

/**
 * @inheritDoc
 */
Wl_Mail_Verify_MailVerifyModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"text_email": {"post": {"post": true}}}};
};