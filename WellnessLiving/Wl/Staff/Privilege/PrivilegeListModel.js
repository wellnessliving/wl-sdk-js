/**
 * Returns the list of privileges for the current user in the given business.
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
   * There is no certain list of admin privileges, as they are name-based.
   * If you need to check access to certain place contact WellnessLiving integration team.
   *
   * @get result
   * @type {{}}
   */
  this.a_privilege_passport = undefined;

  /**
   * List of privileges, if the given user is a staff member in the give business.
   *
   * @get result
   * @type {number[]}
   */
  this.a_privilege_staff = undefined;

  /**
   * Whether this user is a super-administrator because he is a studio staff member.
   *
   * `true`, if this user is a super administrator because he is a studio staff member.
   * Super administrators have all privileges.
   *
   * `false` if this is an ordinary user.
   *
   * @get result
   * @type {boolean}
   */
  this.is_admin = undefined;

  /**
   * Key of business to get privileges for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key to get privileges for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Privilege_PrivilegeListModel);

/**
 * @inheritDoc
 */
Wl_Staff_Privilege_PrivilegeListModel.prototype.config=function()
{
  return {"a_field":{"a_privilege_passport":{"get":{"result":true}},"a_privilege_staff":{"get":{"result":true}},"is_admin":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_Privilege_PrivilegeListModel.instanceGet
 * @param {string} k_business Key of business to get privileges for.
 * @param {string} uid User key to get privileges for.
 * @returns {Wl_Staff_Privilege_PrivilegeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of privileges for the current user in the given business.
 *
 * Returns the complete access profile of the signed-in user for the given business: staff
 * privileges by ID, named admin privileges, and a flag indicating super-admin status. Can
 * only be called for the currently authenticated user, not on behalf of another user.
 *
 * @function
 * @name Wl_Staff_Privilege_PrivilegeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
