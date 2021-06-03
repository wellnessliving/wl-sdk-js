/**
 * Point to get a secret key for request signing.
 * It is necessary in a case of CORS request.
 *
 * Request to this point must be signed as ordinary requests from SDK (using transient and persistent cookies).
 * There must be no CORS (do not send from a browser).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_KeySecretModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * CSRF code of a client side.
   *
   * @get get
   * @type {string}
   */
  this.s_csrf = undefined;

  /**
   * Secret key that must be used for signing API requests in the browser.
   *
   * @get result
   * @type {string}
   */
  this.s_key_secret = undefined;

  /**
   * Session client key.
   * See {@link \Core\Request\Api\KeySessionApi}.
   *
   * @get get
   * @type {string}
   */
  this.s_key_session = undefined;

  /**
   * Alias of {@link \Core\Request\Api\KeySecretApi::$url_origin}.
   *
   * @get get
   * @type {string}
   */
  this.url_domain = undefined;

  /**
   * Origin for client requests.
   *
   * @get get
   * @type {string}
   */
  this.url_origin = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_KeySecretModel);

/**
 * @inheritDoc
 */
Core_Request_Api_KeySecretModel.prototype.config=function()
{
  return {"a_field": {"s_csrf": {"get": {"get": true}},"s_key_secret": {"get": {"result": true}},"s_key_session": {"get": {"get": true}},"url_domain": {"get": {"get": true}},"url_origin": {"get": {"get": true}}}};
};