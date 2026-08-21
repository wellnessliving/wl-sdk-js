/**
 * Generates notepad for user sign in form.
 *
 * @augments Core_Passport_Login_Enter_NotepadModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_NotepadModel()
{
  Core_Passport_Login_Enter_NotepadModelAbstract.apply(this);

  /**
   * ID of the datacenter which is a preferred datacenter for the user specified in
   * {@link Core_Passport_Login_Enter_NotepadModel.s_login}.
   *
   * One of {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *
   * If ID of the datacenter returned in this property differs from the current datacenter, this means that this
   * API request was forwarded to the datacenter returned here, and the notepad was created there.
   * So that {@link Core_Passport_Login_Enter_EnterModel} must always go to the datacenter specified in this property.
   *
   * `null` if datacenter preference was not evaluated, or it is not known.
   * In this case, the notepad is created in datacenter where the API request was initially sent.
   *
   * @get result
   * @see Core_Amazon_Region_AmazonRegionSid
   * @type {number}
   */
  this.id_region = undefined;

  /**
   * The hash type.
   *
   * @get result
   * @type {string}
   */
  this.s_hash = "sha3";

  /**
   * User login.
   *
   * If specified, additional information about user may be returned such as datacenter of the user.
   *
   * This value is only considered when {@link Core_Amazon_Region_AmazonRegionSid} is not empty,
   * and {@link Core_Amazon_Region_AmazonRegionSid} returns `false`.
   * In this case, regional cookie may be set, and the request may be forwarded internally to a different datacenter.
   *
   * `null` if additional information is not needed.
   *
   * @get get
   * @type {?string}
   */
  this.s_login = null;

  /**
   * The notepad value, which is used to hash the user's password.
   * The password length is `NONCE_LENGTH` characters.
   *
   * @get result
   * @type {string}
   */
  this.s_notepad = undefined;

  /**
   * The session type to store the notepad in.
   *
   * This will be an empty string for a temporary session. Otherwise, you can use `system` for a system session.
   *
   * @get get
   * @type {string}
   */
  this.s_type = "";

  this.changeInit();
}

Core_Passport_Login_Enter_NotepadModelAbstract.extend(Core_Passport_Login_Enter_NotepadModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_NotepadModel.prototype.config=function()
{
  return {"a_field":{"id_region":{"get":{"result":true}},"s_hash":{"get":{"result":true}},"s_login":{"get":{"get":true}},"s_notepad":{"get":{"result":true}},"s_type":{"get":{"get":true}}}};
};

/**
 * Generates notepad for user sign in form.
 *
 * Generates a cryptographic nonce (one-time random string) and stores it in the session so that the
 * client can hash the user's password with it before sending it to {@link Core_Passport_Login_Enter_EnterModel}. This prevents
 * replay attacks and avoids transmitting passwords in plain text.
 *
 * @function
 * @name Core_Passport_Login_Enter_NotepadModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
