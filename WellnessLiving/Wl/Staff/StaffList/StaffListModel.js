/**
 * List of staff of business.
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
   * @typedef {{}} Wl_Staff_StaffList_StaffListModel_a_staff
   * @property {string[]} a_staff_pay Staff name.
   * @property {string} html_name List of pay rate ID's applicable for staff.
   * @property {number} i_order Order for sorting.
   * @property {string} k_staff Staff key; primary key in {@link RsStaffSql} table.
   * @property {string} s_name Staff name.
   * @property {string} s_position Staff position.
   * @property {string} s_surname First letter of surname of staff member.
   * @property {?string} s_surname_full Whole surname of staff member. <tt>null</tt> if private staff member information is not accessible.
   * @property {string} uid ID of staff as user. Primary key in {@link PassportLoginSql} table.
   * @property {string} url_image Url link to user photo, or empty string, if photo is not loaded.
   */

  /**
   * Keys - staff IDs; primary keys in {@link RsStaffSql} table. Values - sub arrays with keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_staff_pay</var>
   *   </dt>
   *   <dt>
   *     string <var>html_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   *   <dd>
   *     List of pay rate ID's applicable for staff.
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
   *     Staff key; primary key in {@link RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   *   <dt>
   *     string <var>s_position</var>
   *   </dt>
   *   <dd>
   *     Staff position.
   *   </dd>
   *   <dt>
   *     string <var>s_surname</var>
   *   </dt>
   *   <dd>
   *     First letter of surname of staff member.
   *   </dd>
   *   <dt>
   *     string|null <var>s_surname_full</var>
   *   </dt>
   *   <dd>
   *     Whole surname of staff member. <tt>null</tt> if private staff member information is not accessible.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     ID of staff as user. Primary key in {@link PassportLoginSql} table.
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
   * @type {Wl_Staff_StaffList_StaffListModel_a_staff}
   */
  this.a_staff = undefined;

  /**
   * ID of business. Primary key in {@link RsBusinessSql} table.
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
  return {"a_field": {"a_staff": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffList_StaffListModel.instanceGet
 * @param {string} k_business ID of business. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Staff_StaffList_StaffListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */