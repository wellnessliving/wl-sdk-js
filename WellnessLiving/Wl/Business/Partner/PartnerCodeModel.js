/**
 * Works with partner url for a business that takes part in the partner program.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_PartnerCodeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Unique code that business can give other businesses to tell them about system.
   *
   * @post post
   * @type {string}
   */
  this.text_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_PartnerCodeModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_PartnerCodeModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"text_code": {"post": {"post": true}}}};
};