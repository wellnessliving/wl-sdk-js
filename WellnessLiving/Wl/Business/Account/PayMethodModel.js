/**
 * An endpoint that gets recurring default payment methods for a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_PayMethodModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The default recurring payment source for the business.
   *
   * This will be `null` if the source isn't managed and automatic payments for the business aren't available.
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