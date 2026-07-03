/**
 * Gets a secret key for signing.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_KeySecretModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The CSRF code from the client side.
   *
   * @get get
   * @type {string}
   */
  this.s_csrf = "";

  /**
   * The secret key for the request signing.
   *
   * @get result
   * @type {string}
   */
  this.s_key_secret = undefined;

  /**
   * The session key.
   *
   * @get get
   * @type {string}
   */
  this.s_key_session = "";

  /**
   * Alias of [KeySecretApi](/Core/Request/Api/KeySecret.json).
   *
   * @get get
   * @type {string}
   */
  this.url_domain = "";

  /**
   * Origin for client requests.
   *
   * @get get
   * @type {string}
   */
  this.url_origin = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_KeySecretModel);

/**
 * @inheritDoc
 */
Core_Request_Api_KeySecretModel.prototype.config=function()
{
  return {"a_field":{"s_csrf":{"get":{"get":true}},"s_key_secret":{"get":{"result":true}},"s_key_session":{"get":{"get":true}},"url_domain":{"get":{"get":true}},"url_origin":{"get":{"get":true}}}};
};

/**
 * Gets a secret key for signing.
 *
 * Accepts a CSRF code, a session key, and the client origin URL, validates the session key against
 * the current application, and returns a secret key that the client uses to sign subsequent CORS requests.
 * This endpoint must not be called directly from a browser.
 *
 * @function
 * @name Core_Request_Api_KeySecretModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
