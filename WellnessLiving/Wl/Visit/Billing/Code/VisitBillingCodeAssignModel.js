/**
 * Returns the billing codes applied to a visit and the history of their changes.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Billing_Code_VisitBillingCodeAssignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * @typedef {{}} Wl_Visit_Billing_Code_VisitBillingCodeAssignModel_a_code
   * @property {boolean} is_custom `true` for a custom code of the business or a temporary code for this visit only, `false` for an ICD-10-CM diagnostic code.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {?string} text_description Description of the code as it was when the code was applied. `null` for a temporary code.
   */

  /**
   * Billing codes applied to the visit, the custom codes first, each type sorted by the code value.
   *
   * A staff member who can not assign billing codes gets the custom codes only: the diagnostic codes are a part of
   * the medical record of the client. The codes are changed by posting {@link Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.a_text_code}.
   *
   * @get result
   * @type {Wl_Visit_Billing_Code_VisitBillingCodeAssignModel_a_code[]}
   */
  this.a_code = undefined;

  /**
   * @typedef {{}} Wl_Visit_Billing_Code_VisitBillingCodeAssignModel_a_history
   * @property {string} dtu_change Date and time of the change in UTC.
   * @property {string} text_log What changed.
   * @property {?string} text_reason Reason of the change the staff member gave. `null` if no reason was given.
   * @property {?string} text_signature Signature of the staff member who made the change. `null` if no signature was given, or if the business did not require one.
   * @property {?string} uid_staff Key of the staff member who made the change. `null` if the user is deleted.
   */

  /**
   * History of the changes of the billing codes of the visit, the latest change first: a record per added or removed
   * code.
   *
   * Empty for a staff member who can not assign billing codes.
   *
   * @get result
   * @type {Wl_Visit_Billing_Code_VisitBillingCodeAssignModel_a_history[]}
   */
  this.a_history = undefined;

  /**
   * Values of all billing codes the visit must have, as they are printed on receipts and invoices.
   *
   * The list replaces the codes of the visit as a whole: a code that is not in the list is removed from the visit.
   * A value may be a code of the billing code list of the business, an ICD-10-CM diagnostic code if the business
   * has turned them on, or a temporary code for this visit only. A temporary code requires the access to create
   * temporary codes. The case of a value does not matter. The codes the visit has are returned in
   * {@link Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.a_code}.
   *
   * @post post
   * @type {string[]}
   */
  this.a_text_code = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Reason of the change, for example when the codes are changed after the receipt has been sent to the client.
   *
   * Empty string if no reason is given.
   *
   * @post post
   * @type {string}
   */
  this.text_reason = "";

  /**
   * Signature of the staff member who applies the codes.
   *
   * Required and stored only if the business requires a signature when billing codes are saved. Empty string if no
   * signature is given.
   *
   * @post post
   * @type {string}
   */
  this.text_signature = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Billing_Code_VisitBillingCodeAssignModel);

/**
 * @inheritDoc
 */
Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.prototype.config=function()
{
  return {"a_field":{"a_code":{"get":{"result":true}},"a_history":{"get":{"result":true}},"a_text_code":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_visit":{"get":{"get":true},"post":{"get":true}},"text_reason":{"post":{"post":true}},"text_signature":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Visit_Billing_Code_VisitBillingCodeAssignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the billing codes applied to a visit and the history of their changes.
 *
 * A staff member who can not assign billing codes gets the custom codes only, without the diagnostic codes and
 * without the history.
 *
 * @function
 * @name Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Applies billing codes to a visit.
 *
 * The given list replaces the codes of the visit as a whole. A code the visit has already keeps the type and the
 * description it was applied with. A new code is looked up in the billing code list of the business first, then
 * among the ICD-10-CM diagnostic codes if the business has turned them on. A code found nowhere is a temporary
 * code for this visit only: it requires the access to create temporary codes, and it is not added to the billing
 * code list. Every added and every removed code is logged with the reason and, if the business requires it, the
 * signature.
 *
 * @function
 * @name Wl_Visit_Billing_Code_VisitBillingCodeAssignModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
