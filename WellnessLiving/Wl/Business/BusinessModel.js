/**
 * Creates a new business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_BusinessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business locale.
   *
   * @post post
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * The key of the created business.
   *
   * @post result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the business type.
   *
   * @post post
   * @type {string}
   */
  this.k_business_type = undefined;

  /**
   * The city key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_office_city = undefined;

  /**
   * The address of the business.
   *
   * @post post
   * @type {string}
   */
  this.text_office_address = undefined;

  /**
   * The postal code of the business.
   *
   * @post post
   * @type {string}
   */
  this.text_office_postal = undefined;

  /**
   * The phone number of the business.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = undefined;

  /**
   * The title of the business.
   *
   * @post post
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_BusinessModel);

/**
 * @inheritDoc
 */
Wl_Business_BusinessModel.prototype.config=function()
{
  return {"a_field": {"id_locale": {"post": {"post": true}},"k_business": {"post": {"result": true}},"k_business_type": {"post": {"post": true}},"k_office_city": {"post": {"post": true}},"text_office_address": {"post": {"post": true}},"text_office_postal": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"text_title": {"post": {"post": true}}}};
};