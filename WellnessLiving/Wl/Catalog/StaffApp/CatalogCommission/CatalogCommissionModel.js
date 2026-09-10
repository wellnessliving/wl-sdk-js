/**
 * Retrieves the list of staff members eligible for commission along with the default staff
 * commission for the current client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid_customer";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_commission_default
   * @property {string} k_staff @deprecated Staff key. Primary key of  table.
   * @property {string} k_staff_pay Staff pay key. Primary key of  table.
   * @property {string} uid_staff User key of staff. Primary key of  table.
   */

  /**
   * Default staff commission for current client. Includes:
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_commission_default[]}
   */
  this.a_commission_default = undefined;

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff_a_commission
   * @property {string} f_rate Rate of staff commission.
   * @property {string} html_commission Title of the commission.
   * @property {number} id_commission_type One of {@link RsCommissionTypeSid} constants.
   * @property {boolean} is_default `true` - if it is default commission for the staff,`false` - otherwise.
   * @property {string} k_staff_pay Staff pay key. Primary key of  table.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff
   * @property {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff_a_commission} a_commission List of staff commissions:
   * @property {string} html_name Name of staff.
   * @property {string} k_staff @deprecated Staff key. Primary key of  table. It's use `uid` instead of this field.
   * @property {string} uid User key. Primary key of  table.
   */

  /**
   * List of staff with commission. Includes:
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Customer login key.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel.prototype.config=function()
{
  return {"a_field":{"a_commission_default":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid_customer":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid_customer Customer login key.
 * @returns {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves the list of staff members eligible for commission along with the default staff
 * commission for the current client.
 *
 * Checks that the actor has access to the business and that commission-based payment is
 * enabled. When enabled, loads the default staff commission assigned to the given client
 * and the list of staff members with commission enabled, including their commission rates.
 * For a small set of legacy applications, also returns the deprecated `k_staff` field for
 * backward compatibility.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
