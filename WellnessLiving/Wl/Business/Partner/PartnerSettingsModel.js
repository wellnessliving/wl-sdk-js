/**
 * Returns partner settings for the business identified by the given partner code.
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
   * @type {?number}
   */
  this.id_business_tour = null;

  /**
   * The business key.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

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
  return {"a_field":{"id_business_tour":{"get":{"result":true}},"k_business":{"get":{"result":true}},"text_code":{"get":{"get":true}},"text_name_first":{"get":{"result":true}},"text_name_last":{"get":{"result":true}},"text_position":{"get":{"result":true}},"text_review":{"get":{"result":true}},"url_photo":{"get":{"result":true}}}};
};

/**
 * Returns partner settings for the business identified by the given partner code.
 *
 * Used when rendering the Partner Program landing page. Resolves the partner code to a business and
 * returns the business key and the home tour type so the landing page can show the appropriate demo
 * tour. A daily failed-request limit per IP prevents brute-force enumeration of partner codes.
 *
 * @function
 * @name Wl_Business_Partner_PartnerSettingsModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
