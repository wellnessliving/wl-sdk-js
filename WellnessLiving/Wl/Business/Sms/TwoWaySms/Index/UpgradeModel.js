/**
 * Api for two-way sms subscriptions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_TwoWaySms_Index_UpgradeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * New subscription plan. One of {@link SmsSubscriptionSid} constants.
   *
   * @put post
   * @type {number}
   */
  this.id_plan = undefined;

  /**
   * Business key.
   *
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_TwoWaySms_Index_UpgradeModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_TwoWaySms_Index_UpgradeModel.prototype.config=function()
{
  return {"a_field": {"id_plan": {"put": {"post": true}},"k_business": {"put": {"get": true}}}};
};