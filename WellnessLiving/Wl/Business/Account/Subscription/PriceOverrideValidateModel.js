/**
 * Allows to validate override options.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_PriceOverrideValidateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of override options.
   *
   * @get get
   * @type {{}}
   */
  this.a_override = undefined;

  /**
   * Subscription statuses.
   *
   * @get get
   * @type {number}
   */
  this.cid_subscription = undefined;

  /**
   * Periodicity of payments.
   *
   * @get get
   * @type {number}
   */
  this.id_periodicity = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_PriceOverrideValidateModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_PriceOverrideValidateModel.prototype.config=function()
{
  return {"a_field": {"a_override": {"get": {"get": true}},"cid_subscription": {"get": {"get": true}},"id_periodicity": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};