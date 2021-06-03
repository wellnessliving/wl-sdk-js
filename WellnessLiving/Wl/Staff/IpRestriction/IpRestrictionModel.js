/**
 * IP Restriction API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_IpRestriction_IpRestrictionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Staff_IpRestriction_IpRestrictionModel_a_ip_restriction_a_role
   * @property {number} id_privilege_role ID of a default system role from {@link \RsPrivilegeRoleSid} that this IP restriction applies to.
   * @property {string} k_business_role Key of a custom business role this IP restriction applies to.
   */
  /**
   * @typedef {{}} Wl_Staff_IpRestriction_IpRestrictionModel_a_ip_restriction
   * @property {Wl_Staff_IpRestriction_IpRestrictionModel_a_ip_restriction_a_role} a_role Array of arrays that contain the following keys:
   * <dl>
   *   <dt>int <tt>id_privilege_role</tt></dt>
   *   <dd>ID of a default system role from {@link \RsPrivilegeRoleSid} that this IP restriction applies to.</dd>
   * 
   *   <dt>string <tt>k_business_role</tt></dt>
   *   <dd>Key of a custom business role this IP restriction applies to.</dd>
   * </dl>
   * @property {string} ip_allow The IP address or IP range to allow.
   */

  /**
   * List of IP restrictions to check against the current logged-in user.
   * <dl>
   *   <dt>array <var>a_role</var></dt>
   *   <dd>Array of arrays that contain the following keys:
   *     <dl>
   *       <dt>int <var>id_privilege_role</var></dt>
   *       <dd>ID of a default system role from {@link \RsPrivilegeRoleSid} that this IP restriction applies to.</dd>
   *
   *       <dt>string <var>k_business_role</var></dt>
   *       <dd>Key of a custom business role this IP restriction applies to.</dd>
   *     </dl>
   *   </dd>
   *
   *   <dt>string <var>ip_allow</var></dt>
   *   <dd>The IP address or IP range to allow.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Staff_IpRestriction_IpRestrictionModel_a_ip_restriction[]}
   */
  this.a_ip_restriction = undefined;

  /**
   * Indicates if the logged-in user's IP is allowed by the passed list of IP restrictions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_user_ip_allowed = undefined;

  /**
   * Business key, primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_IpRestriction_IpRestrictionModel);

/**
 * @inheritDoc
 */
Wl_Staff_IpRestriction_IpRestrictionModel.prototype.config=function()
{
  return {"a_field": {"a_ip_restriction": {"get": {"get": true}},"is_user_ip_allowed": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_IpRestriction_IpRestrictionModel.instanceGet
 * @param {string} k_business Business key, primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Staff_IpRestriction_IpRestrictionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */