/**
 * Point to get packages/passes/memberships available in a certain location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Index_PromotionIndexModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Promotion_Index_PromotionIndexModel_a_promotion
   * @property {{}} a_image Image data.
   * @property {string} k_promotion Promotion primary key in {@link \RsPromotionSql} table.
   * @property {string} m_price Price.
   * @property {string} text_description Description.
   * @property {string} text_title Title.
   */

  /**
   * Item list. Every element has keys:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Image data.
   *   </dd>
   *   <dt>
   *     string <var>k_promotion</var>
   *   </dt>
   *   <dd>
   *     Promotion primary key in {@link \RsPromotionSql} table.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Price.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     Description.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_Index_PromotionIndexModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * Program type to get items of.
   * One of {@link \RsProgramTypeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_program_type = 0;

  /**
   * Location primary key if {@link \RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Index_PromotionIndexModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Index_PromotionIndexModel.prototype.config=function()
{
  return {"a_field": {"a_promotion": {"get": {"result": true}},"id_program_type": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};