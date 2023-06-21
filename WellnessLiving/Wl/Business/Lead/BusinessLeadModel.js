/**
 * An endpoint that creates a new business lead request within the Partner Program.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Lead_BusinessLeadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business's partner key.
   *
   * @post post
   * @type {string}
   */
  this.k_business_partner = undefined;

  /**
   * The business's name.
   *
   * @post post
   * @type {string}
   */
  this.text_business_name = undefined;

  /**
   * The client's full name.
   *
   * @post post
   * @type {string}
   */
  this.text_client_name = undefined;

  /**
   * The client's email.
   *
   * @post post
   * @type {string}
   */
  this.text_email = undefined;

  /**
   * The client's phone number.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = undefined;

  /**
   * The business's partner promo code.
   *
   * @post post
   * @type {string}
   */
  this.text_promo_code = undefined;

  /**
   * The website URL.
   *
   * @post post
   * @type {string}
   */
  this.url_website = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Lead_BusinessLeadModel);

/**
 * @inheritDoc
 */
Wl_Business_Lead_BusinessLeadModel.prototype.config=function()
{
  return {"a_field": {"k_business_partner": {"post": {"post": true}},"text_business_name": {"post": {"post": true}},"text_client_name": {"post": {"post": true}},"text_email": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"text_promo_code": {"post": {"post": true}},"url_website": {"post": {"post": true}}}};
};