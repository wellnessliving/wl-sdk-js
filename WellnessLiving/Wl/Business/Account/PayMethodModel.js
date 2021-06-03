/**
 * Allows to get recurrent default payment method for business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_PayMethodModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Returns default recurrent payment source for business.
   *
   * <tt>null</tt> if source not managed and automatic payments for business are not available.
   *
   * @get result
   * @type {?string}
   */
  this.k_pay_recurrent = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_PayMethodModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_PayMethodModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_pay_recurrent": {"get": {"result": true}}}};
};