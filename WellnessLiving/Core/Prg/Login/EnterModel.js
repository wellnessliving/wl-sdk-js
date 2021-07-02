/**
 * Signs a programmer in.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_Login_EnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Programmer login.
   *
   * @post post
   * @type {string}
   */
  this.s_login = "";

  /**
   * Notepad that is used to hash user password.
   *
   * See {@link \Core\Passport\Login\Enter\EnterApi::$s_password} about hashing of user password.
   *
   * @post post
   * @type {string}
   */
  this.s_notepad = "";

  /**
   * User password (evaluated with {@link Core_Passport_Login_Enter_NotepadModel.hash()}).
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_Login_EnterModel);

/**
 * @inheritDoc
 */
Core_Prg_Login_EnterModel.prototype.config=function()
{
  return {"a_field": {"s_login": {"post": {"post": true}},"s_notepad": {"post": {"post": true}},"s_password": {"post": {"post": true}}}};
};