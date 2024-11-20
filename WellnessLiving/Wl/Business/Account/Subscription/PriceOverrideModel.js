/**
 * An endpoint that retrieves a subscription status.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_PriceOverrideModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of override options.
   *
   * @get result
   * @type {{}}
   */
  this.a_override = undefined;

  /**
   * The subscription statuses.
   *
   * @get get
   * @type {number}
   */
  this.cid_subscription = undefined;

  /**
   * Determines whether the override is active.
   *
   * @get result
   * @type {boolean}
   */
  this.has_override = undefined;

  /**
   * The schedule period of payments.
   *
   * @get get
   * @type {number}
   */
  this.id_periodicity = undefined;

  /**
   * The plan ID.
   *
   * @get get
   * @type {number}
   */
  this.id_plan = undefined;

  /**
   * The business key.
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
  return {"a_field": {"a_override": {"get": {"result": true}},"cid_subscription": {"get": {"get": true}},"has_override": {"get": {"result": true}},"id_periodicity": {"get": {"get": true}},"id_plan": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};