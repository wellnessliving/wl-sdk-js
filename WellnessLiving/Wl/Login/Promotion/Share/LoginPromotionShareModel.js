/**
 * List of family members with whom the purchased promotion can be shared.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_Share_LoginPromotionShareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_Share_LoginPromotionShareModel_a_share_family
   * @property {boolean} is_share Whether the login promotion was shared with user.
   * @property {string} text_name User name.
   * @property {string} uid User key. Primary key in {@link \PassportLoginSql} table.
   */

  /**
   * List of family members with whom the purchased promotion can be shared. Each element has next structure:
   * <dl>
   *   <dt>
   *     bool <var>is_share</var>
   *   </dt>
   *   <dd>
   *     Whether the login promotion was shared with user.
   *   </dd>
   *   <dt>
   *     string <var>text_name</var>
   *   </dt>
   *   <dd>
   *     User name.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     User key. Primary key in {@link \PassportLoginSql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Promotion_Share_LoginPromotionShareModel_a_share_family}
   */
  this.a_share_family = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Purchased promotion key. Primary key in {@link \RsLoginPromotionSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_Share_LoginPromotionShareModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_Share_LoginPromotionShareModel.prototype.config=function()
{
  return {"a_field": {"a_share_family": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_login_promotion": {"get": {"get": true}}}};
};