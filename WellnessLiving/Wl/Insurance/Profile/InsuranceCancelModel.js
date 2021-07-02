/**
 * Wellness Program membership cancel API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Profile_InsuranceCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The key of the business where we need to cancel Wellness Program membership.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of login promotion to cancel.
   *
   * Primary key from {@link \RsLoginPromotionSql} table.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * Reason to cancel Wellness Program membership.
   *
   * @put post
   * @type {string}
   */
  this.s_reason = "";

  /**
   * The key of the user to cancel Wellness Program membership.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Profile_InsuranceCancelModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Profile_InsuranceCancelModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"delete": {"get": true},"put": {"get": true}},"k_login_promotion": {"delete": {"get": true},"put": {"get": true}},"s_reason": {"put": {"post": true}},"uid": {"delete": {"get": true},"put": {"get": true}}}};
};