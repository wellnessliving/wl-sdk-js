/**
 * Checks to possible to send SMS to a client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_SmsSendCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user key for which need to send the SMS.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_SmsSendCheckModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_SmsSendCheckModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Checks to possible to send SMS to a client.
 *
 * Runs the same checks as `check()` and `checkCellPhoneOwner()`
 * for the business and client given in `k_business` and `uid`, throwing an exception when
 * SMS sending is not allowed or the client does not own the given cell phone.
 *
 * @function
 * @name Wl_Business_Sms_SmsSendCheckModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
