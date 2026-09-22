/**
 * Saves {@link Wl_Business_Custom_Terms_CustomTermsModel.a_term_option} as the custom terms of {@link Wl_Business_Custom_Terms_CustomTermsModel.k_business}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Custom_Terms_CustomTermsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Custom_Terms_CustomTermsModel_a_term_option
   * @property {number} id_term Term ID. One of {@link Wl_Business_Custom_Terms_CustomTermSid} constants.
   * @property {number} id_term_option Selected custom term. Depends on `id_term`.
   */

  /**
   * Current value of every term slot to save. Has the following structure:
   *
   * @post post
   * @type {Wl_Business_Custom_Terms_CustomTermsModel_a_term_option[]}
   */
  this.a_term_option = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Custom_Terms_CustomTermsModel);

/**
 * @inheritDoc
 */
Wl_Business_Custom_Terms_CustomTermsModel.prototype.config=function()
{
  return {"a_field":{"a_term_option":{"post":{"post":true}},"k_business":{"post":{"post":true}}}};
};

/**
 * Saves {@link Wl_Business_Custom_Terms_CustomTermsModel.a_term_option} as the custom terms of {@link Wl_Business_Custom_Terms_CustomTermsModel.k_business}.
 *
 * @function
 * @name Wl_Business_Custom_Terms_CustomTermsModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
