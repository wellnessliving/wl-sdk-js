/**
 * Information about members of businesses.
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
   * @property {boolean} is_franchisee <tt>true</tt> if business is franchisee; <tt>false</tt> otherwise.
   * @property {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
   * @property {string} k_business_franchisor Corporate account of the business franchise. Primary key in {@link RsBusinessSql} table.
   * @property {string} text_title Title of business.
   */

  /**
   * Businesses, member of which is user. Every element has next keys:
   * <dl>
   *   <dt>
   *     bool <var>is_franchisee</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if business is franchisee; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_business</var>
   *   </dt>
   *   <dd>
   *     Business key. Primary key in {@link RsBusinessSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_business_franchisor</var>
   *   </dt>
   *   <dd>
   *     Corporate account of the business franchise. Primary key in {@link RsBusinessSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of business.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Member_MemberModel_a_business[]}
   */
  this.a_business = undefined;

  /**
   * User key. Primary key in {@link PassportLoginSql} table.
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
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Login_Member_MemberModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */