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
   * @typedef {{}} Wl_Promotion_Purchase_PurchaseListModel_a_promotion
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
   * @type {Wl_Promotion_Purchase_PurchaseListModel_a_promotion}
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
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
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
  return {"a_field": {"a_promotion": {"get": {"result": true}},"id_table": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Promotion_Purchase_PurchaseListModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Promotion_Purchase_PurchaseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */