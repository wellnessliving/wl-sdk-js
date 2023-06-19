/**
 * An endpoint to check if an email address is used by member of a business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Mail_MailUseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If <tt>true</tt>, the user with the specified email address exists in specified business. Otherwise, this will
   * be <tt>false</tt>.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * The business for which the email address search is being performed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The email address to check for.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Mail_MailUseModel);

/**
 * @inheritDoc
 */
Wl_Login_Mail_MailUseModel.prototype.config=function()
{
  return {"a_field": {"is_exists": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_mail": {"get": {"get": true}}}};
};