/**
 * Generates notepad for user sign in form.
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
   * Value of a cryptographic nonce to hash user password. Length is {@link \Core\Passport\Login\Enter\NotepadApi::NONCE_LENGTH} characters.
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
 * Evaluates hash based on notepad and plain user password.
 *
 * @param {String} s_password Plain user password.
 * @return {String} Password hash, depends on hash, solt, type of the hash and plain user password.
 */
Core_Passport_Login_Enter_NotepadModel.prototype.hash=function(s_password)
{
  return sha3_512(this.s_notepad+this.passwordHash(s_password));
};

/**
 * Evaluates initial hash based on notepad and plain user password (this is value of hash that is stored in the database).
 *
 * <b>Be attentive!</b> This method has a PHP-side counterpart: {@link \Core\Passport\Login\PassportLogin::passwordHash()}.
 *
 * @param {String} s_password Plain user password.
 * @return {String} Password hash that is stored in the database.
 */
Core_Passport_Login_Enter_NotepadModel.prototype.passwordHash=function(s_password)
{
  var a_delimiter=['r','4S','zqX','zqiOK','TLVS75V','Ue5aLaIIG75','uODJYM2JsCX4G','kt58wZfHHGQkHW4QN','Lh9Fl5989crMU4E7P6E'];
  var s_hash='';

  for(var i=0;i<9;i++)
    s_hash=s_hash+a_delimiter[i]+s_password;

  return sha3_512(s_hash);
};

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_NotepadModel.prototype.config=function()
{
  return {"a_field": {"s_hash": {"get": {"result": true}},"s_notepad": {"get": {"result": true}},"s_type": {"get": {"get": true}}}};
};