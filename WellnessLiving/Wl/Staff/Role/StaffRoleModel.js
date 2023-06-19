/**
 * Staff Role API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Role_StaffRoleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_all";

  /**
   * @typedef {{}} Wl_Staff_Role_StaffRoleModel_a_staff_role
   * @property {number} id_privilege_role ID of privilege role. Constant from {@link RsPrivilegeRoleSid}.
   * @property {string} k_business_role Key of the business role.
   * @property {string} text_title Title of staff role.
   */

  /**
   * List of staff roles.
   * <dl>
   *   <dt>
   *     int <var>id_privilege_role</var>
   *   </dt>
   *   <dd>
   *     ID of privilege role. Constant from {@link RsPrivilegeRoleSid}.
   *   </dd>
   *   <dt>
   *     string <var>k_business_role</var>
   *   </dt>
   *   <dd>
   *     Key of the business role.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of staff role.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Staff_Role_StaffRoleModel_a_staff_role}
   */
  this.a_staff_role = [];

  /**
   * Whether current user has privilege to change staff roles.
   *
   * @get result
   * @type {boolean}
   */
  this.can_privilege = false;

  /**
   * Whether need return all roles in the business, else if you need return only available roles for current user.
   *
   * @get get
   * @type {boolean}
   */
  this.is_all = true;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Role_StaffRoleModel);

/**
 * @inheritDoc
 */
Wl_Staff_Role_StaffRoleModel.prototype.config=function()
{
  return {"a_field": {"a_staff_role": {"get": {"result": true}},"can_privilege": {"get": {"result": true}},"is_all": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_Role_StaffRoleModel.instanceGet
 * @param {string} k_business Business key.
 * @param {boolean} is_all Whether need return all roles in the business, else if you need return only available roles for current user.
 * @returns {Wl_Staff_Role_StaffRoleModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */