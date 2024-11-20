/**
 * Point to create one-time pin code.
 * This code must be used for a security token generation.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Token_TokenPinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date/time of pin code expiration.
   *
   * @get result
   * @type {string}
   */
  this.dtu_expire = undefined;

  /**
   * Pin code.
   *
   * @get result
   * @type {string}
   */
  this.text_pin = undefined;

  /**
   * ID to send a security code by push notification.
   *
   * @get get
   * @type {string}
   */
  this.text_push = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Token_TokenPinModel);

/**
 * @inheritDoc
 */
Core_Request_Token_TokenPinModel.prototype.config=function()
{
  return {"a_field": {"dtu_expire": {"get": {"result": true}},"text_pin": {"get": {"result": true}},"text_push": {"get": {"get": true}}}};
};