/**
 * API point to get promotion list of the specified business.
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
   * @property {number} id_program Promotion program. One of {@link \RsProgramSid} constants.
   * @property {string} k_promotion ID of promotion, primary key in {@link \RsPromotionSql}.
   * @property {string} text_title Title of promotion.
   */

  /**
   * List of promotions.
   * <dl>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     Promotion program. One of {@link \RsProgramSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_promotion</var>
   *   </dt>
   *   <dd>
   *     ID of promotion, primary key in {@link \RsPromotionSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of promotion.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_PromotionListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Whether to return franchisee-created promotions (if business is franchisor).
   * <tt>true</tt> to include franchisee-created promotions.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key to get promotions.
   * Primary key in the {@link \RsBusinessSql} table.
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
 * @param {string} k_business Business key to get promotions. Primary key in the {@link \RsBusinessSql} table.
 * @param {boolean} is_franchise Whether to return franchisee-created promotions (if business is franchisor). <tt>true</tt> to include franchisee-created promotions.
 * @returns {Wl_Promotion_PromotionListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */