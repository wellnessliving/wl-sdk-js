/**
 * Sends email to support that some business wants to take part in a partner program.
 *
 * Note! No longer need because of auto-enroll. See https://wellnessliving.atlassian.net/browse/WL-58652
 * TODO wl-40346: Remove code after 2023-11-08
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_Enroll_EnrollModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_Enroll_EnrollModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_Enroll_EnrollModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}}}};
};