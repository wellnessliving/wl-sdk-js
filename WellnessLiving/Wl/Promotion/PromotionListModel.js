/**
 * An endpoint that gets a promotion list of the specified business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_PromotionListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Promotion_PromotionListModel_a_promotion
   * @property {number} id_program The promotion program. One of the {@link RsProgramSid} constants.
   * @property {string} k_promotion The key of the promotion.
   * @property {string} text_title The title of the promotion.
   */

  /**
   * A list of promotions.
   * <dl>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     The promotion program. One of the {@link RsProgramSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_promotion</var>
   *   </dt>
   *   <dd>
   *     The key of the promotion.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The title of the promotion.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_PromotionListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud businesses only).
   * If `true`, promotions created by Enterprise Locations are included. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * The business key used to get the promotions.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_PromotionListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_PromotionListModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Promotion_PromotionListModel.instanceGet
 * @param {string} k_business The business key used to get the promotions.
 * @param {boolean} is_franchise Determines whether to return promotions created by Enterprise Locations (for Enterprise Cloud businesses only). If `true`, promotions created by Enterprise Locations are included. Otherwise, this will be `false`.
 * @returns {Wl_Promotion_PromotionListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */