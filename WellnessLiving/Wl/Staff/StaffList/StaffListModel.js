/**
 * Returns the list of staff members for the given business.
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
  this.a_privilege = undefined;

  /**
   * @typedef {{}} Wl_Staff_StaffList_StaffListModel_a_staff_a_staff_service
   * @property {string} k_service Service key.
   * @property {string} k_staff_pay Staff pay key for this service.
   */

  /**
   * @typedef {{}} Wl_Staff_StaffList_StaffListModel_a_staff
   * @property {string[]} a_pay_rate A list of internal pay rate keys applicable to the staff member.
   * @property {Wl_Staff_StaffList_StaffListModel_a_staff_a_staff_service} a_staff_service A list of all services, provided by the staff member. Each element is an array with structure:
   * @property {string} html_name Staff name.
   * @property {number} i_order Order for sorting.
   * @property {boolean} is_appointment Whether this staff provides appointments service.
   * @property {boolean} is_class Whether this staff provides class service.
   * @property {boolean} is_event Whether this staff provides events service.
   * @property {string} k_staff The staff key.  deprecated Use `uid_staff` instead. Returned only for backward-compatible applications.
   * @property {string} s_name The staff member first name. If there are rights, the full first name, if not, then depending on the business settings.
   * @property {string} s_position The staff member position in the organization.
   * @property {string} s_surname The first letter of the staff member surname. If there are rights, the full surname, if not, then depending on the business settings.
   * @property {?string} s_surname_full The entire surname of the staff member. This will be `null` if private staff member information isn't accessible.
   * @property {string} text_name_full The full name of the staff member.
   * @property {string} uid The user key. Each staff member in WellnessLiving can also access the system as a client of their business. This is the key used to represent the staff member as a client.
   * @property {string} uid_staff The staff member user key.
   * @property {string} url_image Url link to user photo, or empty string, if photo is not loaded.
   */

  /**
   * Information about staff members.
   * Each array index is the staff member keys.
   * Each array element is an array containing the following fields:
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
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffList_StaffListModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffList_StaffListModel.prototype.config=function()
{
  return {"a_field":{"a_privilege":{"get":{"get":true}},"a_staff":{"get":{"result":true}},"is_check_staff_access":{"get":{"get":true}},"is_staff_inactive":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffList_StaffListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @returns {Wl_Staff_StaffList_StaffListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of staff members for the given business.
 *
 * Returns all active (or optionally inactive) staff members for the business, including
 * their name, role, assigned services, contact details, and location assignments. Can be
 * filtered to only staff who have a specific privilege, and whether access-level checks
 * should be applied when building the result.
 *
 * @function
 * @name Wl_Staff_StaffList_StaffListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
