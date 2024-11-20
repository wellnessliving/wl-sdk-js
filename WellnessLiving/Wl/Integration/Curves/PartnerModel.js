/**
 * Api for get data of the partners.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Curves_PartnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A partner list. Where key is key partner, value is name of the partner.
   *
   * @get result
   * @type {?{}}
   */
  this.a_partner = null;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_PartnerModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_PartnerModel.prototype.config=function()
{
  return {"a_field": {"a_partner": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};