/**
 * Generates notepad for user sign in form.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_NotepadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of available data center regions.
   *
   * The business independently chooses the data center region in which it will be registered.
   * The choice of the data center region does not depend on the actual location of the business.
   * The region determines the data center in which the Wellnessliving system operates.
   * The region should be chosen based on the access speed to the data center from business clients.
   * Business from any region can be registered in any data center, but only in one.
   *
   * Last ID: 2.
   *
   * Values:
   * - 2 (`AP_SOUTHEAST_2`): Sydney, Australia.
   * - 1 (`US_EAST_1`): North Virginia, USA.
   *
   * @get result
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

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_NotepadModel);

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
