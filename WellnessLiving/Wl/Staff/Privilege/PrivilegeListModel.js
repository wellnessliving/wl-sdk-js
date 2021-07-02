/**
 * List of privileges available for staff member.
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
   * List of privileges via core. See {@link passport_privilege_user()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_privilege_passport = undefined;

  /**
   * List of staff member privileges.
   *
   * @get result
   * @type {number[]}
   */
  this.a_privilege_staff = undefined;

  /**
   * ID of business to get privileges for. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User key to get privileges for. Primary key in {@link \PassportLoginSql} table.
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
 * @param {string} k_business ID of business to get privileges for. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key to get privileges for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Staff_Privilege_PrivilegeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */