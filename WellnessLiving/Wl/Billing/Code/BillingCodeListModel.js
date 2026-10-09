/**
 * Gets the billing code list of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Code_BillingCodeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Billing_Code_BillingCodeListModel_a_code
   * @property {string[]} a_service List of services the code is applied to by default. Always empty for a system code: system codes are not applied to services by default.
   * @property {boolean} is_custom `true` for a custom code of the business, `false` for a system code of the ICD-10-CM reference library.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code. The business typed it in for a custom code. For a system code it comes from the reference library, in the language of the request.
   */

  /**
   * Billing codes of the business.
   *
   * Contains the custom codes of the business and the system codes of the ICD-10-CM reference library, which are
   * shared by all businesses. The system codes are returned only if the business has turned on ICD diagnostic
   * codes .
   *
   * Removed codes are not returned - they are not offered for selection anymore, they only stay on the receipts
   * and invoices they have already been applied to.
   *
   * The custom codes go first, then the system codes, each type sorted by the code value. Filtering of the list is a
   * matter of the page that shows it.
   *
   * @get result
   * @type {Wl_Billing_Code_BillingCodeListModel_a_code[]}
   */
  this.a_code = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Service key. If set, only the codes that are applied to this service by default are returned. System codes are
   * not applied to services by default, so they are not returned then.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Code_BillingCodeListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Code_BillingCodeListModel.prototype.config=function()
{
  return {"a_field":{"a_code":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_service":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Billing_Code_BillingCodeListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Billing_Code_BillingCodeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets the billing code list of the business.
 *
 * The list contains the custom codes of the business and the diagnostic codes of the read-only ICD-10-CM
 * reference library, the descriptions of the latter in the language of the request. The diagnostic codes are
 * returned only if the business has turned on ICD diagnostic codes.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
