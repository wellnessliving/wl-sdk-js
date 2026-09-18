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
   * Current value of every term slot to save.
   *
   * Each value is one of {@link Wl_Business_Custom_Terms_CustomTermOptionAbstractSid} child class constants
   *   keyed by {@link Wl_Business_Custom_Terms_CustomTermSid} constants.
   *
   * @post post
   * @type {number[]}
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
 * Validates every posted term slot and its selected option, then delegates the write itself to
 * CustomTermsSettings::saveTerms() - a slot whose new value equals the business's resolved default
 * (the business-type default, or the system default if there is none) is reset instead of written, see
 * CustomTermsSettings::saveTerms(). A term slot missing from {@link Wl_Business_Custom_Terms_CustomTermsModel.a_term_option}
 * is left untouched; the client is expected to submit the current value of every slot on every save, not
 * only the slots that changed.
 *
 * @function
 * @name Wl_Business_Custom_Terms_CustomTermsModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
