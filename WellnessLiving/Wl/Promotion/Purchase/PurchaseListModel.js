/**
 * Purchase API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Purchase_PurchaseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Promotion_Purchase_PurchaseListModel_a_promotion_a_promotion
   * @property {string} k_promotion ID of promotion, primary key in {@link \RsPromotionSql}.
   * @property {string} text_title Title of promotion.
   */
  /**
   * @typedef {{}} Wl_Promotion_Purchase_PurchaseListModel_a_promotion
   * @property {Wl_Promotion_Purchase_PurchaseListModel_a_promotion_a_promotion[]} a_promotion Promotion list. Each element has keys:
   * <dl>
   *   <dt>string <tt>k_promotion</tt></dt>
   *   <dd>ID of promotion, primary key in {@link \RsPromotionSql}.</dd>
   *   <dt>string <tt>text_title</tt></dt>
   *   <dd>Title of promotion.</dd>
   * </dl>
   * @property {number} id_program Promotion program. One of {@link RsProgramSid} constants.
   * @property {number} id_program_type Promotion program type. One of {@link RsProgramTypeSid} constants.
   * @property {string} text_title Program type title.
   */

  /**
   * List of promotions.
   * <dl>
   *   <dt>
   *     array[] <var>a_promotion</var>
   *   </dt>
   *   <dd>
   *     Promotion list. Each element has keys:
   *     <dl>
   *       <dt>string <var>k_promotion</var></dt>
   *       <dd>ID of promotion, primary key in {@link \RsPromotionSql}.</dd>
   *       <dt>string <var>text_title</var></dt>
   *       <dd>Title of promotion.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>id_program</var>
   *   </dt>
   *   <dd>
   *     Promotion program. One of {@link RsProgramSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_program_type</var>
   *   </dt>
   *   <dd>
   *     Promotion program type. One of {@link RsProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Program type title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_Purchase_PurchaseListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Class table ID.
   *
   * @get result
   * @type {number}
   */
  this.id_table = undefined;

  /**
   * A flag to include disabled items in the query result
   *
   * @get get
   * @type {boolean}
   */
  this.is_inactive_include = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Purchase_PurchaseListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Purchase_PurchaseListModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"id_table": {"get": {"result": true}},"is_inactive_include": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Promotion_Purchase_PurchaseListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Promotion_Purchase_PurchaseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */