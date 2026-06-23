/**
 * Gets new pin code.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Token_TokenPinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The expiration date/time of the PIN code.
   *
   * @get result
   * @type {string}
   */
  this.dtu_expire = undefined;

  /**
   * The PIN code.
   *
   * @get result
   * @type {string}
   */
  this.text_pin = undefined;

  /**
   * The ID to use to send a security code via a push notification.
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
  return {"a_field":{"dtu_expire":{"get":{"result":true}},"text_pin":{"get":{"result":true}},"text_push":{"get":{"get":true}}}};
};

/**
 * Gets new pin code.
 *
 * First step of push-notification-based security token generation. Issues a short-lived PIN code
 * linked to a push recipient, which is then sent to the user's device. The client must present
 * this PIN before its expiry to receive the final security token.
 *
 * @function
 * @name Core_Request_Token_TokenPinModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
