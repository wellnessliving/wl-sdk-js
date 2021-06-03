/**
 * Point to get a session key.
 * CORS request only.
 *
 * This point must be done from user's browser.
 *
 * See {@link \Core\Request\Api\KeySecretApi} also.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_KeySessionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application ID.
   *
   * @get get
   * @type {string}
   */
  this.s_application = undefined;

  /**
   * CSRF code.
   *
   * @get get
   * @type {string}
   */
  this.s_csrf = undefined;

  /**
   * Session key.
   *
   * @get result
   * @type {string}
   */
  this.s_key = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_KeySessionModel);

/**
 * @inheritDoc
 */
Core_Request_Api_KeySessionModel.prototype.config=function()
{
  return {"a_field": {"s_application": {"get": {"get": true}},"s_csrf": {"get": {"get": true}},"s_key": {"get": {"result": true}}}};
};