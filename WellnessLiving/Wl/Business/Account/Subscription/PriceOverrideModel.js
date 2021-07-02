/**
 * Allows to get subscription status.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_PriceOverrideModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of override options.
   *
   * @get result
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
   * Whether override is active.
   *
   * @get result
   * @type {boolean}
   */
  this.has_override = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_PriceOverrideModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_PriceOverrideModel.prototype.config=function()
{
  return {"a_field": {"a_override": {"get": {"result": true}},"cid_subscription": {"get": {"get": true}},"has_override": {"get": {"result": true}},"id_periodicity": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};