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
   * @property {string} k_code Key of the code.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code the business typed in.
   */

  /**
   * Billing codes of the business.
   *
   * Contains the custom codes of the business for now. The system codes of the ICD-10-CM reference library are to
   * be returned here too, and a row is then to tell the two types apart.
   *
   * Removed codes are not returned - they are not offered for selection anymore, they only stay on the receipts
   * and invoices they have already been applied to.
   *
   * The list is not sorted - sorting and filtering of the list is a matter of the page that shows it.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Code_BillingCodeListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Code_BillingCodeListModel.prototype.config=function()
{
  return {"a_field":{"a_code":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
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
 * The list contains the custom codes of the business for now, and is meant to become the single place a client
 * asks for codes, with the diagnostic codes of the read-only ICD-10-CM reference library to be returned
 * from here as well.
 *
 * @function
 * @name Wl_Billing_Code_BillingCodeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
