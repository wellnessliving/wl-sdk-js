/**
 * Returns the current value of every term slot of {@link Wl_Business_Custom_Terms_CustomTermsModel.k_business}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Custom_Terms_CustomTermsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Custom_Terms_CustomTermsModel_a_term_option
   * @property {number} id_term Term. One of {@link Wl_Business_Custom_Terms_CustomTermSid} constants.
   * @property {?number} id_term_option Selected custom term option. Sid class depends on `id_term` (e.g. for {@link Wl_Business_Custom_Terms_CustomTermSid}, this is one of {@link Wl_Business_Custom_Terms_ClientTermOptionSid} constants).
   */

  /**
   * Current value of every term slot. Returned by `get()`, posted to
   * `post()` to save.
   *
   * @get result
   * @post post
   * @type {Wl_Business_Custom_Terms_CustomTermsModel_a_term_option[]}
   */
  this.a_term_option = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
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
  return {"a_field":{"a_term_option":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Returns the current value of every term slot of {@link Wl_Business_Custom_Terms_CustomTermsModel.k_business}.
 *
 * No access check - the terms a business picked (e.g. "Session" instead of "Class") are not sensitive, and
 * public-facing pages (the booking widget, for example) need them to render their own wording for a client
 * who is not signed in.
 *
 * @function
 * @name Wl_Business_Custom_Terms_CustomTermsModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves {@link Wl_Business_Custom_Terms_CustomTermsModel.a_term_option} as the custom terms of {@link Wl_Business_Custom_Terms_CustomTermsModel.k_business}.
 *
 * Validates every posted term slot and its selected option, then writes.
 *
 * @function
 * @name Wl_Business_Custom_Terms_CustomTermsModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
