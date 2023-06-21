/**
 * API endpoint to edit promotion for affected clients.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Edit_PromotionEditAffectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_promotion";

  /**
   * @typedef {{}} Wl_Promotion_Edit_PromotionEditAffectModel_a_params
   * @property {number} id_convert Promotion Conversion type. One of the {@link Wl_Promotion_Convert_PromotionConvertSid} constants.
   * @property {boolean} is_renew_public If <tt>false</tt> it should not be shown for clients in booking process, online store and profile purchases.
   * @property {string} k_promotion_convert Promotion key to which {@link Wl_Promotion_Edit_PromotionEditAffectModel.k_promotion} will be converted.
   * @property {string} s_expire_action Action after expiration.
   */

  /**
   * Params which were changed in promotion.
   * <dl>
   *   <dt>int <var>id_convert</var></dt>
   *   <dd>Promotion Conversion type. One of the {@link Wl_Promotion_Convert_PromotionConvertSid} constants.</dd>
   *   <dt>bool <var>is_renew_public</var></dt>
   *   <dd>If <tt>false</tt> it should not be shown for clients in booking process, online store and profile purchases.</dd>
   *   <dt>string <var>k_promotion_convert</var></dt>
   *   <dd>Promotion key to which {@link Wl_Promotion_Edit_PromotionEditAffectModel.k_promotion} will be converted.</dd>
   *   <dt>string <var>s_expire_action</var></dt>
   *   <dd>Action after expiration.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Promotion_Edit_PromotionEditAffectModel_a_params}
   */
  this.a_params = undefined;

  /**
   * Number of clients who has purchased promotion without editing.
   *
   * @get result
   * @type {number}
   */
  this.i_clients = 0;

  /**
   * Number of clients who has purchased and edited promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_clients_edited = 0;

  /**
   * Whether any clients including with promotion edited have their membership extended.
   *
   * @get result
   * @type {boolean}
   */
  this.is_extend_all = false;

  /**
   * Whether clients without edited promotion have their membership extended.
   *
   * @get result
   * @type {boolean}
   */
  this.is_extend_without_edited = false;

  /**
   * Whether promotion was edited for affected clients.
   * <tt>true</tt> - promotion was edited for affected clients, <tt>false</tt> - otherwise.
   *
   * @post get
   * @type {boolean}
   */
  this.is_sold_edited = false;

  /**
   * Business key promotion belongs to.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of promotion.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_promotion = undefined;

  /**
   * Url of list of the promotion affected clients where sold promotions were not edited.
   *
   * @get result
   * @type {string}
   */
  this.url_affected_clients = undefined;

  /**
   * Url of list of the promotion affected clients.
   *
   * @get result
   * @type {string}
   */
  this.url_affected_clients_edited = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Edit_PromotionEditAffectModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Edit_PromotionEditAffectModel.prototype.config=function()
{
  return {"a_field": {"a_params": {"post": {"get": true}},"i_clients": {"get": {"result": true}},"i_clients_edited": {"get": {"result": true}},"is_extend_all": {"get": {"result": true}},"is_extend_without_edited": {"get": {"result": true}},"is_sold_edited": {"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_promotion": {"get": {"get": true},"post": {"get": true}},"url_affected_clients": {"get": {"result": true}},"url_affected_clients_edited": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Promotion_Edit_PromotionEditAffectModel.instanceGet
 * @param {string} k_business Business key promotion belongs to.
 * @param {string} k_promotion Key of promotion.
 * @returns {Wl_Promotion_Edit_PromotionEditAffectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */