/**
 * API for controlling cancelled promotion options.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_PromotionPayCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,k_login_promotion";

  /**
   * Whether the client may use remaining visits after promotion cancellation.
   *
   * @put post
   * @type {boolean}
   */
  this.is_use = undefined;

  /**
   * The key of the business to which the promotion belongs. Primary key in {@link \RsBusinessSql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of login promotion to update options for.
   *
   * Primary key in {@link \RsLoginPromotionSql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * Key of the user performing the request. Primary key in {@link \PassportLoginSql} table.
   *
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_PromotionPayCancelModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_PromotionPayCancelModel.prototype.config=function()
{
  return {"a_field": {"is_use": {"put": {"post": true}},"k_business": {"put": {"get": true}},"k_login_promotion": {"put": {"get": true}},"uid": {"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Promotion_PromotionPayCancelModel.instanceGet
 * @param {string} k_business The key of the business to which the promotion belongs. Primary key in {@link \RsBusinessSql} table.
 * @param {string} uid Key of the user performing the request. Primary key in {@link \PassportLoginSql} table.
 * @param {string} k_login_promotion Key of login promotion to update options for. Primary key in {@link \RsLoginPromotionSql} table.
 * @returns {Wl_Login_Promotion_PromotionPayCancelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */