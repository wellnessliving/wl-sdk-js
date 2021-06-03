/**
 * Point to check if an email address is used by member of a business.
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
   * <tt>true</tt> if user with specified email exists in specified business; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * Business to check email usage in.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Email to check usage.
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