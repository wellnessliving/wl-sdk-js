/**
 * Wellness programs (Insurance) API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Catalog_ProgramListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Insurance_Catalog_ProgramListModel_a_wellness_program
   * @property {string} k_wellness_program Insurance key.
   * @property {string} m_price Purchase option price.
   * @property {string} text_insurance_organization Insurance organization name.
   * @property {string} text_partner Insurance partner name.
   * @property {string} text_program Insurance name.
   * @property {string} url_insurance_detail Insurance organization URL.
   */

  /**
   * Wellness Program (Insurance) info.
   * <dl>
   *   <dt>
   *     string <var>k_wellness_program</var>
   *   </dt>
   *   <dd>
   *     Insurance key.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Purchase option price.
   *   </dd>
   *   <dt>
   *     string <var>text_insurance_organization</var>
   *   </dt>
   *   <dd>
   *     Insurance organization name.
   *   </dd>
   *   <dt>
   *     string <var>text_partner</var>
   *   </dt>
   *   <dd>
   *     Insurance partner name.
   *   </dd>
   *   <dt>
   *     string <var>text_program</var>
   *   </dt>
   *   <dd>
   *     Insurance name.
   *   </dd>
   *   <dt>
   *     string <var>url_insurance_detail</var>
   *   </dt>
   *   <dd>
   *     Insurance organization URL.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Insurance_Catalog_ProgramListModel_a_wellness_program}
   */
  this.a_wellness_program = undefined;

  /**
   * Franchisee business key from {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Promotion key from {@link \RsPromotionSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_promotion = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Catalog_ProgramListModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Catalog_ProgramListModel.prototype.config=function()
{
  return {"a_field": {"a_wellness_program": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_promotion": {"get": {"get": true}}}};
};