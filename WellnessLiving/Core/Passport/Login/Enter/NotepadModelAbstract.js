/**
 * Base class for models that hash a user's password using a notepad value.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_NotepadModelAbstract()
{
  WlSdk_ModelAbstract.apply(this);
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_NotepadModelAbstract);

/**
 * Evaluates hash based on notepad and plain user password.
 *
 * @param {string} s_password Plain user password.
 * @return {string} Password hash, depends on hash, solt, type of the hash and plain user password.
 */
Core_Passport_Login_Enter_NotepadModelAbstract.prototype.hash=function(s_password)
{
  return sha3_512(this.s_notepad+this.passwordHash(s_password));
};

/**
 * Evaluates initial hash based on notepad and plain user password (this is value of hash that is stored in the database).
 *
 * <b>Be attentive!</b> This method has a PHP-side counterpart: {@link \Core\Passport\Login\PassportLogin::passwordHash()}.
 *
 * @param {string} s_password Plain user password.
 * @return {string} Password hash that is stored in the database.
 */
Core_Passport_Login_Enter_NotepadModelAbstract.prototype.passwordHash=function(s_password)
{
  var a_delimiter=['r','4S','zqX','zqiOK','TLVS75V','Ue5aLaIIG75','uODJYM2JsCX4G','kt58wZfHHGQkHW4QN','Lh9Fl5989crMU4E7P6E'];
  var s_hash='';

  for(var i=0;i<9;i++)
    s_hash=s_hash+a_delimiter[i]+s_password;

  return sha3_512(s_hash);
};