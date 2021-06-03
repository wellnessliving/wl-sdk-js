/**
 * List of available staff with commission.
 *
 * This model is generated automatically based on API.
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
   * @property {string} k_staff Staff key. Primary key of {@link \RsStaffSql} table.
   * @property {string} k_staff_pay Staff pay key. Primary key of {@link \RsStaffPaySql} table.
   */

  /**
   * Default staff commission for current client. Includes: <dl>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Staff key. Primary key of {@link \RsStaffSql} table.</dd>
   *   <dt>string <var>k_staff_pay</var></dt>
   *   <dd>Staff pay key. Primary key of {@link \RsStaffPaySql} table.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_commission_default[]}
   */
  this.a_commission_default = [];

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff_a_commission
   * @property {string} f_rate Rate of staff commission.
   * @property {number} id_commission_type One of {@link \RsCommissionTypeSid} constants.
   * @property {boolean} is_default <tt>true</tt> - if it is default commission for the staff,<tt>false</tt> - otherwise.
   * @property {string} html_commission Title of the commission.
   * @property {string} k_staff_pay Staff pay key. Primary key of {@link \RsStaffPaySql} table.
   */
  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff
   * @property {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff_a_commission} a_commission List of staff commissions: <dl>
   * <dt>string <tt>f_rate</tt></dt>
   * <dd>Rate of staff commission.</dd>
   * <dt>int <tt>id_commission_type</tt></dt>
   * <dd>One of {@link \RsCommissionTypeSid} constants.</dd>
   * <dt>bool <tt>is_default</tt></dt>
   * <dd><tt>true</tt> - if it is default commission for the staff,<tt>false</tt> - otherwise.</dd>
   * <dt>string <tt>html_commission</tt></dt>
   * <dd>Title of the commission.</dd>
   * <dt>string <tt>k_staff_pay</tt></dt>
   * <dd>Staff pay key. Primary key of {@link \RsStaffPaySql} table.</dd>
   *   </dl>
   * @property {string} k_staff Staff key. Primary key of {@link \RsStaffSql} table.
   * @property {string} html_name Name of staff.
   * @property {string} uid User key. Primary key of {@link \PassportLoginSql} table.
   */

  /**
   * List of staff with commission. Includes: <dl>
   *   <dt>array <var>a_commission</var></dt>
   *   <dd>List of staff commissions: <dl>
   *     <dt>string <var>f_rate</var></dt>
   *     <dd>Rate of staff commission.</dd>
   *     <dt>int <var>id_commission_type</var></dt>
   *     <dd>One of {@link \RsCommissionTypeSid} constants.</dd>
   *     <dt>bool <var>is_default</var></dt>
   *     <dd><tt>true</tt> - if it is default commission for the staff,<tt>false</tt> - otherwise.</dd>
   *     <dt>string <var>html_commission</var></dt>
   *     <dd>Title of the commission.</dd>
   *     <dt>string <var>k_staff_pay</var></dt>
   *     <dd>Staff pay key. Primary key of {@link \RsStaffPaySql} table.</dd>
   *   </dl></dd>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Staff key. Primary key of {@link \RsStaffSql} table.</dd>
   *   <dt>string <var>html_name</var></dt>
   *   <dd>Name of staff.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>User key. Primary key of {@link \PassportLoginSql} table.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel_a_staff[]}
   */
  this.a_staff = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Customer login key.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel.prototype.config=function()
{
  return {"a_field": {"a_commission_default": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid_customer": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid_customer Customer login key.
 * @returns {Wl_Catalog_StaffApp_CatalogCommission_CatalogCommissionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */