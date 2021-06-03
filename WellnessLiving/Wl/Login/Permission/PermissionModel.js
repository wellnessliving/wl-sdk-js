/**
 * Saves changes in user's permissions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Permission_PermissionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_promotion";

  /**
   * <tt>true</tt> - make purchased promotion auto-renewable; <tt>false</tt> - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_renew = false;

  /**
   * ID of purchased promotion.
   *
   * Primary key in {@link \RsLoginPromotionSql}.
   *
   * @post get
   * @type {string}
   */
  this.k_login_promotion = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Permission_PermissionModel);

/**
 * @inheritDoc
 */
Wl_Login_Permission_PermissionModel.prototype.config=function()
{
  return {"a_field": {"is_renew": {"post": {"post": true}},"k_login_promotion": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Permission_PermissionModel.instanceGet
 * @param {string} k_login_promotion ID of purchased promotion. Primary key in {@link \RsLoginPromotionSql}.
 * @returns {Wl_Login_Permission_PermissionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */