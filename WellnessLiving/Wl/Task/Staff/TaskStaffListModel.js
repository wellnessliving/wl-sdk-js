/**
 * Returns the staff roles and the staff members of the business, for the assignment of tasks.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Staff_TaskStaffListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Task_Staff_TaskStaffListModel_a_role
   * @property {string[]} a_uid_staff Keys of the users of the staff members who have this role, in the order of `a_staff`, active or not. An empty array if nobody has the role.
   * @property {?number} id_privilege_role The system role. One of {@link RsPrivilegeRoleSid} constants. `null` for a role of the business that is not based on a system role.
   * @property {?string} k_business_role Key of the role of the business. `null` for a system role that the business has not changed.
   * @property {string} text_title Title of the role.
   */

  /**
   * The staff roles of the business, in the order of the setup of the business.
   *
   * A role that is removed is not listed. A role without staff members is listed.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Task_Staff_TaskStaffListModel_a_role[]}
   */
  this.a_role = undefined;

  /**
   * @typedef {{}} Wl_Task_Staff_TaskStaffListModel_a_staff
   * @property {?number} id_privilege_role The system role of the role of the staff member in the current business. One of {@link RsPrivilegeRoleSid} constants. `null` if the staff member has no role in the current business, or the role is not based on a system role.
   * @property {boolean} is_active `true` if the staff member is active, `false` otherwise. The activity is the one in the current business; for a staff member who does not work in the current business, the one in the first business of the franchise where the staff member works.
   * @property {boolean} is_assignable `true` if the current user may assign a new task to the staff member, `false` otherwise.
   * @property {?string} k_business_role Key of the role of the business of the staff member in the current business. `null` if the staff member has no role in the current business, or the role is a system role that the business has not changed.
   * @property {string} text_name Full name of the staff member.
   * @property {string} uid_staff Key of the user of the staff member.
   * @property {string} url_image URL of the photo of the staff member, for example `https://example.com/staff.jpg`. An empty string if the staff member has no photo.
   */

  /**
   * The staff members whose accounts are not removed, sorted by name.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Task_Staff_TaskStaffListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Business key.
   *
   * `null` means not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Staff_TaskStaffListModel);

/**
 * @inheritDoc
 */
Wl_Task_Staff_TaskStaffListModel.prototype.config=function()
{
  return {"a_field":{"a_role":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns the staff roles and the staff members of the business, for the assignment of tasks.
 *
 * Lists every role of the business that is not removed, and every staff member whose account is not removed, with
 * the flags that tell whether the staff member is active and whether the current user may assign a new task to
 * the staff member. In a franchise with the flexible travel mode the staff members of all the businesses of the
 * franchise are listed; such a staff member who does not work in the current business has no role.
 *
 * The current user must be able to add tasks or to see all the tasks of the business.
 *
 * @function
 * @name Wl_Task_Staff_TaskStaffListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
