/**
 * Point to confirm new user's email.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Register_RegisterConfirmModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Unique registration code.
   *
   * @post get
   * @type {string}
   */
  this.text_code = "";

  /**
   * User's login.
   *
   * @post get
   * @type {string}
   */
  this.text_login = "";

  /**
   * User's email.
   *
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Primary key of registered user in {@link \PassportLoginSql} table.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Register_RegisterConfirmModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Register_RegisterConfirmModel.prototype.config=function()
{
  return {"a_field": {"text_code": {"post": {"get": true}},"text_login": {"post": {"get": true}},"text_mail": {"post": {"get": true}},"uid": {"post": {"result": true}}}};
};