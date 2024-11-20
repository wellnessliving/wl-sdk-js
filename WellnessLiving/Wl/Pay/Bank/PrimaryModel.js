/**
 * Sets a payment method as default.
 *
 * This model is generated automatically based on API.
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
  this.k_pay_bank = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_PrimaryModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_PrimaryModel.prototype.config=function()
{
  return {"a_field": {"k_pay_bank": {"put": {"post": true}}}};
};