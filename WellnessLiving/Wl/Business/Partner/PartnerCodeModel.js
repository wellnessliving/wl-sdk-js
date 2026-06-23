/**
 * Returns the partner URL for the specified business.
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
   * @get get
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

  /**
   * Link to the landing campaign
   *
   * @get result
   * @type {string}
   */
  this.url_partner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_PartnerCodeModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_PartnerCodeModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true},"post":{"get":true}},"text_code":{"post":{"post":true}},"url_partner":{"get":{"result":true}}}};
};

/**
 * Returns the partner URL for the specified business.
 *
 * Used to display or share the business's unique Partner Program landing page link. Partner URLs are
 * public information, so no access check is performed.
 *
 * @function
 * @name Wl_Business_Partner_PartnerCodeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates partner url for a business that takes part in the partner program.
 *
 * Allows a Partner Program member to set a memorable custom vanity code for their referral landing page.
 * The code must be unique across all businesses and contain only letters, digits, and underscores.
 *
 * @function
 * @name Wl_Business_Partner_PartnerCodeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
