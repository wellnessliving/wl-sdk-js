/**
 * An endpoint that retrieves a list of programs' information.
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
   * @property {string} k_wellness_program The insurance key.
   * @property {string} m_price The Purchase Option price.
   * @property {string} text_insurance_organization The insurance organization name.
   * @property {string} text_partner The insurance partner name.
   * @property {string} text_program The insurance name.
   * @property {string} url_insurance_detail The insurance organization URL.
   */

  /**
   * A List of active programs.
   * Every element has next keys:
   *
   * <dl>
   *   <dt>string <var>k_wellness_program</var></dt>
   *   <dd>The insurance key.</dd>
   *   <dt>string <var>m_price</var></dt>
   *   <dd>The Purchase Option price.</dd>
   *   <dt>string <var>text_insurance_organization</var></dt>
   *   <dd>The insurance organization name.</dd>
   *   <dt>string <var>text_partner</var></dt>
   *   <dd>The insurance partner name.</dd>
   *   <dt>string <var>text_program</var></dt>
   *   <dd>The insurance name.</dd>
   *   <dt>string <var>url_insurance_detail</var></dt>
   *   <dd>The insurance organization URL.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Insurance_Catalog_ProgramListModel_a_wellness_program[]}
   */
  this.a_wellness_program = undefined;

  /**
   * The key of the franchisee business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the promotion.
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