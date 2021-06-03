/**
 * Api for get list franchise region for promotion.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Edit_Region_RegionListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Promotion_Edit_Region_RegionListModel_a_franchise_region
   * @property {boolean} is_select <tt>true</tt> if region is selected, <tt>false</tt> otherwise.
   * @property {string} k_franchise_region Franchise region key. Primary key in {@link FranchiseRegionSql} table.
   * @property {string} text_title Name of the franchise region.
   */

  /**
   * List of franchise regions.
   * Has next structure: <dl>
   *   <dt>bool <var>is_select</var></dt>
   *   <dd><tt>true</tt> if region is selected, <tt>false</tt> otherwise.</dd>
   *   <dt>string <var>k_franchise_region</var></dt>
   *   <dd>Franchise region key. Primary key in {@link FranchiseRegionSql} table.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Name of the franchise region.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Promotion_Edit_Region_RegionListModel_a_franchise_region[]}
   */
  this.a_franchise_region = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Promotion key.
   *
   * <tt>null</tt> if promotion is not created yet.
   *
   * @get get
   * @type {?string}
   */
  this.k_promotion = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Edit_Region_RegionListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Edit_Region_RegionListModel.prototype.config=function()
{
  return {"a_field": {"a_franchise_region": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_promotion": {"get": {"get": true}}}};
};