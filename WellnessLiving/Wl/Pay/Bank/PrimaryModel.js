/**
 * Sets a specified payment method as default.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_PrimaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of pay bank.
   *
   * @put post
   * @type {string}
   */
  this.k_pay_bank = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_PrimaryModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_PrimaryModel.prototype.config=function()
{
  return {"a_field":{"k_pay_bank":{"put":{"post":true}}}};
};

/**
 * Sets a specified payment method as default.
 *
 * Validates that the payment method exists, is not removed, not expired, and not already default,
 * then verifies the acting user has access to the owning business or client profile before applying
 * the change and logging it to the payment method history.
 *
 * @function
 * @name Wl_Pay_Bank_PrimaryModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
