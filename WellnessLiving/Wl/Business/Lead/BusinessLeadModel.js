/**
 * Saves a new business lead referral record submitted through the Partner Program.
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
  this.k_business_partner = "";

  /**
   * The business's name.
   *
   * @post post
   * @type {string}
   */
  this.text_business_name = "";

  /**
   * The client's full name.
   *
   * @post post
   * @type {string}
   */
  this.text_client_name = "";

  /**
   * The client's email.
   *
   * @post post
   * @type {string}
   */
  this.text_email = "";

  /**
   * The client's phone number.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * The business's partner promo code.
   *
   * @post post
   * @type {string}
   */
  this.text_promo_code = "";

  /**
   * The website URL.
   *
   * @post post
   * @type {string}
   */
  this.url_website = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Lead_BusinessLeadModel);

/**
 * @inheritDoc
 */
Wl_Business_Lead_BusinessLeadModel.prototype.config=function()
{
  return {"a_field":{"k_business_partner":{"post":{"post":true}},"text_business_name":{"post":{"post":true}},"text_client_name":{"post":{"post":true}},"text_email":{"post":{"post":true}},"text_phone":{"post":{"post":true}},"text_promo_code":{"post":{"post":true}},"url_website":{"post":{"post":true}}}};
};

/**
 * Saves a new business lead referral record submitted through the Partner Program.
 *
 * Used when a Partner Program member refers a new prospective client to WellnessLiving. Stores the
 * lead's contact details linked to the referring partner so that sales can follow up and attribute
 * the conversion to the correct partner.
 *
 * @function
 * @name Wl_Business_Lead_BusinessLeadModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
