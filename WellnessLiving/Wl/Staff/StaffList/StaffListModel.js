/**
 * An endpoint that returns a list of all staff members working for a business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_StaffList_StaffListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * A list of privileges to filter staff members by.
   *
   * This property acts as a filter.
   * Only staff members possessing all the privileges specified in this list will be included in the result.
   * Each element in the array represents a privilege ID, and should be one of {@link Wl_Privilege_PrivilegeSid} constants.
   *
   * @get get
   * @type {number[]}
   */
  this.a_privilege = [];

  /**
   * @typedef {{}} Wl_Staff_StaffList_StaffListModel_a_staff
   * @property {string[]} a_pay_rate A list of internal pay rate keys applicable to the staff member.
   * @property {string} html_name Staff name.
   * @property {number} i_order Order for sorting.
   * @property {string} k_staff Staff key; primary key in {@link \RsStaffSql} table.
   * @property {string} s_name The staff member first name.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} s_surname The first letter of the staff member surname.
   * @property {?string} s_surname_full The entire surname of the staff member. This will be `null` if private staff member information isn't accessible.
   * @property {string} uid The user key.
   * Each staff member in WellnessLiving can also access the system as a client of their business.
   * This is the key used to represent the staff member as a client.
   * @property {string} url_image Url link to user photo, or empty string, if photo is not loaded.
   */

  /**
   * Information about staff members.
   * Each array index is the staff member keys.
   * Each array element is an array containing the following fields:
   * <dl>
   *   <dt>
   *     string[] <var>a_pay_rate</var>
   *   </dt>
   *   <dd>
   *     A list of internal pay rate keys applicable to the staff member.
   *   </dd>
   *   <dt>
   *     string <var>html_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     Order for sorting.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key; primary key in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     The staff member first name.
   *   </dd>
   *   <dt>
   *     string <var>s_position</var>
   *   </dt>
   *   <dd>
   *     The staff member position in the organization.
   *   </dd>
   *   <dt>
   *     string <var>s_surname</var>
   *   </dt>
   *   <dd>
   *     The first letter of the staff member surname.
   *   </dd>
   *   <dt>
   *     string|null <var>s_surname_full</var>
   *   </dt>
   *   <dd>
   *     The entire surname of the staff member. This will be `null` if private staff member information isn't accessible.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     The user key.
   *     Each staff member in WellnessLiving can also access the system as a client of their business.
   *     This is the key used to represent the staff member as a client.
   *   </dd>
   *   <dt>
   *     string <var>url_image</var>
   *   </dt>
   *   <dd>
   *     Url link to user photo, or empty string, if photo is not loaded.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_StaffList_StaffListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Determines that only staff members which the current user has access to should be retrieved.
   *
   *  `true` if only staff members which the current user has access to should be retrieved.
   *  `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_check_staff_access = false;

  /**
   * Whether inactive and removed staff members are available.
   * If `true` inactive and removed staff members are available. `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_staff_inactive = false;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffList_StaffListModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffList_StaffListModel.prototype.config=function()
{
  return {"a_field": {"a_privilege": {"get": {"get": true}},"a_staff": {"get": {"result": true}},"is_check_staff_access": {"get": {"get": true}},"is_staff_inactive": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffList_StaffListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @returns {Wl_Staff_StaffList_StaffListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */