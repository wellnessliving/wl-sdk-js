/**
 * Works with partner settings of the business: name of the business owner, review about wellnessliving and other.
 * This information staff member enters, when enrolls into partner program and is used on custom landing page, which
 * is available by special business url.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_PartnerSettingsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Home page tour of the business. Depends on type.
   *
   * @get result
   * @type {number}
   */
  this.id_business_tour = 0;

  /**
   * Business key.
   *
   * @get result
   * @type {string}
   */
  this.k_business = "";

  /**
   * Unique code that business can give other businesses to tell them about system.
   *
   * @get get
   * @type {string}
   */
  this.text_code = "";

  /**
   * First name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_first = undefined;

  /**
   * Last name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_last = undefined;

  /**
   * Job title of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_position = undefined;

  /**
   * Text of the review about wellnessliving system.
   *
   * @get result
   * @type {string}
   */
  this.text_review = undefined;

  /**
   * Link to the photo of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_PartnerSettingsModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_PartnerSettingsModel.prototype.config=function()
{
  return {"a_field": {"id_business_tour": {"get": {"result": true}},"k_business": {"get": {"result": true}},"text_code": {"get": {"get": true}},"text_name_first": {"get": {"result": true}},"text_name_last": {"get": {"result": true}},"text_position": {"get": {"result": true}},"text_review": {"get": {"result": true}},"url_photo": {"get": {"result": true}}}};
};