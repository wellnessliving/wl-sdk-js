/**
 * Retrieve the notepad value from the server which is used to log someone in to the SDK.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_NotepadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Type of the hash.
   *
   * @get result
   * @type {string}
   */
  this.s_hash = undefined;

  /**
   * The notepad value, it is used to hash user's the password. Length is {@link Core_Passport_Login_Enter_NotepadModel.NONCE_LENGTH} characters.
   *
   * @get result
   * @type {string}
   */
  this.s_notepad = undefined;

  /**
   * Type of session to store notepad in.
   *
   * Allowed values: <tt>system</tt> to store in system session (this is used to sign in at programmer pages).
   * Empty string to store in temporary session.
   *
   * @get get
   * @type {string}
   */
  this.s_type = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_NotepadModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_NotepadModel.prototype.config=function()
{
  return {"a_field": {"s_hash": {"get": {"result": true}},"s_notepad": {"get": {"result": true}},"s_type": {"get": {"get": true}}}};
};