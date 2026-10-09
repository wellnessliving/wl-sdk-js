/**
 * Returns the codes suggested for a visit.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit,k_service,uid_staff,uid_client";

  /**
   * @typedef {{}} Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_service
   * @property {boolean} is_custom Always `true`: only custom codes can be default codes of a service.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code.
   */

  /**
   * Codes applied by default to the service of the visit, sorted by the code value. Empty if the visit has no
   * service, for example if it is not an appointment.
   *
   * @get result
   * @type {Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_service[]}
   */
  this.a_code_service = undefined;

  /**
   * @typedef {{}} Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_staff
   * @property {boolean} is_custom Always `true`: only a custom code can be the default code of a staff member.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {string} text_description Description of the code.
   */

  /**
   * Default code of the staff member of the visit: a list of one code, or an empty list if the staff member has no
   * default code.
   *
   * @get result
   * @type {Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_staff[]}
   */
  this.a_code_staff = undefined;

  /**
   * @typedef {{}} Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_top
   * @property {boolean} is_custom `true` for a custom code of the business or a temporary code, `false` for an ICD-10-CM diagnostic code.
   * @property {string} text_code Code value, as it is printed on receipts and invoices.
   * @property {?string} text_description Description of the code. `null` for a temporary code.
   */

  /**
   * Codes most used for the visits of the client, the most used first.
   *
   * Only the codes the current staff member can apply again are returned: a custom code that is still in the billing
   * code list, a diagnostic code while the business has them turned on, and a temporary code only if the staff
   * member can add temporary codes.
   *
   * @get result
   * @type {Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel_a_code_top[]}
   */
  this.a_code_top = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the service of the visit being booked. Required if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is not
   * given, and not used otherwise. The service must belong to the business.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * Key of an existing visit. Its service, staff member and client are taken from the visit. Empty string for a visit
   * being booked: then they are given by {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_service},
   * {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.uid_staff} and {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.uid_client}.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Key of the client of the visit being booked. Used only if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is not
   * given. Empty string if the client is not known yet: then no most used codes are returned.
   *
   * @get get
   * @type {string}
   */
  this.uid_client = "";

  /**
   * Key of the staff member of the visit being booked. Required if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is
   * not given, and not used otherwise. The staff member must work in the business.
   *
   * @get get
   * @type {string}
   */
  this.uid_staff = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel);

/**
 * @inheritDoc
 */
Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.prototype.config=function()
{
  return {"a_field":{"a_code_service":{"get":{"result":true}},"a_code_staff":{"get":{"result":true}},"a_code_top":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_visit":{"get":{"get":true}},"uid_client":{"get":{"get":true}},"uid_staff":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_visit Key of an existing visit. Its service, staff member and client are taken from the visit. Empty string for a visit being booked: then they are given by {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_service}, {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.uid_staff} and {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.uid_client}.
 * @param {string} k_service Key of the service of the visit being booked. Required if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is not given, and not used otherwise. The service must belong to the business.
 * @param {string} uid_staff Key of the staff member of the visit being booked. Required if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is not given, and not used otherwise. The staff member must work in the business.
 * @param {string} uid_client Key of the client of the visit being booked. Used only if {@link Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.k_visit} is not given. Empty string if the client is not known yet: then no most used codes are returned.
 * @returns {Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the codes suggested for a visit.
 *
 * The default codes of the service and of the staff member, and up to 5 codes most used for the client, each list
 * separately. The current staff member must be able to assign billing codes to appointments.
 *
 * @function
 * @name Wl_Visit_Billing_Code_VisitBillingCodeDefaultModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
