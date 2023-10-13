/**
 * An endpoint that can return list of admin or staff privileges of the current user.
 *
 * Cannot be used to check privileges of another user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Privilege_PrivilegeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of privileges, if user is administrator.
   *
   * There is no certain list of admin privileges, as they are name-based. If you need to check access to certain place
   *  contact WellnessLiving integration team.
   *
   * @get result
   * @type {{}}
   */
  this.a_privilege_passport = undefined;

  /**
   * List of privileges, if the given user is a staff member in the give business.
   *
   * @get result
   * @see RsPrivilegeSid
   * @type {number[]}
   */
  this.a_privilege_staff = undefined;

  /**
   * Key of business to get privileges for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User key to get privileges for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Privilege_PrivilegeListModel);

/**
 * @inheritDoc
 */
Wl_Staff_Privilege_PrivilegeListModel.prototype.config=function()
{
  return {"a_field": {"a_privilege_passport": {"get": {"result": true}},"a_privilege_staff": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_Privilege_PrivilegeListModel.instanceGet
 * @param {string} k_business Key of business to get privileges for.
 * @param {string} uid User key to get privileges for.
 * @returns {Wl_Staff_Privilege_PrivilegeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */