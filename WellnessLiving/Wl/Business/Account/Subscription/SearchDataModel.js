/**
 * An endpoint that gets subscription statuses.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_SearchDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The subscription statuses.
   *
   * @get result
   * @type {{}}
   */
  this.a_subscription_status = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_SearchDataModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_SearchDataModel.prototype.config=function()
{
  return {"a_field": {"a_subscription_status": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};