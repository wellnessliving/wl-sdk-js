/**
 * An endpoint that works with partner settings of the business.
 * The name of the business owner, review(s) about WellnessLiving, and more.
 * This information is entered by a staff member when a client enrolls into Partner Program and uses a custom landing page, which
 * is available by special business URL.
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
   * The homepage tour of the business, which depends on the type.
   *
   * @get result
   * @see RsHomeTourSid
   * @type {number}
   */
  this.id_business_tour = 0;

  /**
   * The business key.
   *
   * @get result
   * @type {string}
   */
  this.k_business = "";

  /**
   * The unique code that a business can provide other businesses to tell them about system.
   *
   * @get get
   * @type {string}
   */
  this.text_code = "";

  /**
   * The first name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_first = undefined;

  /**
   * The last name of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_name_last = undefined;

  /**
   * The job title of the business representative.
   *
   * @get result
   * @type {string}
   */
  this.text_position = undefined;

  /**
   * The text of the review about the WellnessLiving system.
   *
   * @get result
   * @type {string}
   */
  this.text_review = undefined;

  /**
   * A link to the photo of the business representative.
   *
   * `null` in case when image is not uploaded.
   *
   * @get result
   * @type {?string}
   */
  this.url_photo = null;

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