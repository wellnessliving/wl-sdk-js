/**
 * Manages promotion pause.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Profile_InsuranceHoldModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of business to which currently handled login promotion belongs.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of login promotion to cancel.
   *
   * Primary key in {@link \RsLoginPromotionSql} table.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Key of created promotion pause; table {@link \RsPromotionPayPauseSql}.
   *
   * @post result
   * @type {string}
   */
  this.k_promotion_pay_pause = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Profile_InsuranceHoldModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Profile_InsuranceHoldModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"delete": {"get": true},"post": {"get": true}},"k_login_promotion": {"delete": {"get": true},"post": {"get": true}},"k_promotion_pay_pause": {"post": {"result": true}}}};
};