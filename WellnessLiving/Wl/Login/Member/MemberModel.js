/**
 * An endpoint that displays information about members of businesses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_MemberModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * @typedef {{}} Wl_Login_Member_MemberModel_a_business
   * @property {boolean} can_enter <tt>true</tt> if user is allowed to sign in into this business; <tt>false</tt> otherwise.
   * This value is based on {@link Wl\Login\Disable\LoginDisableSql} table.
   * @property {boolean} is_franchisee If `true`, then the business is a franchisee. Otherwise, this will be `false`.
   * @property {string} k_business The business key.
   * @property {string} k_business_franchisor The business key of the Enterprise Headquarters account (if applicable).
   * @property {string} text_title The title of the business.
   */

  /**
   * A list of businesses where the client is present. Every element is an array with the following keys:
   * <dl>
   *   <dt>
   *     bool <var>can_enter</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if user is allowed to sign in into this business; <tt>false</tt> otherwise.
   *     This value is based on {@link Wl\Login\Disable\LoginDisableSql} table.
   *   </dd>
   *   <dt>
   *     bool <var>is_franchisee</var>
   *   </dt>
   *   <dd>
   *     If `true`, then the business is a franchisee. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_business</var>
   *   </dt>
   *   <dd>
   *     The business key.
   *   </dd>
   *   <dt>
   *     string <var>k_business_franchisor</var>
   *   </dt>
   *   <dd>
   *     The business key of the Enterprise Headquarters account (if applicable).
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The title of the business.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Member_MemberModel_a_business[]}
   */
  this.a_business = undefined;

  /**
   * The user's key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_MemberModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_MemberModel.instanceGet
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_MemberModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */