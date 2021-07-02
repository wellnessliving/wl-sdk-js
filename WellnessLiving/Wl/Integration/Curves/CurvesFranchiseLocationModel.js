/**
 * Gets information for franchisee locations.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Curves_CurvesFranchiseLocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_business_franchise_location,id_report";

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_city_list
   * @property {string} k_city City key. Primary key in the {@link \AGeoSql} table.
   * @property {string} k_country Country key. Primary key in the {@link \AGeoSql} table.
   * @property {string} k_state State key. Primary key in the {@link \AGeoSql} table.
   * @property {string} text_title City title.
   */

  /**
   * City list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     City key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     City title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_city_list}
   */
  this.a_city_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_country_list
   * @property {string} k_country Country key. Primary key in the {@link \AGeoSql} table.
   * @property {string} text_title Country title.
   */

  /**
   * Country list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Country title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_country_list}
   */
  this.a_country_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_location_list
   * @property {string} k_city City key. Primary key in the {@link \AGeoSql} table.
   * @property {string} k_country Country key. Primary key in the {@link \AGeoSql} table.
   * @property {string} k_location Location key. Primary key in the {@link \RsLocationSql} table.
   * @property {string} k_region Franchise region key. Primary key in the {@link \Wl\Business\Franchise\Region\RegionSql} table.
   * @property {string} k_state State key. Primary key in the {@link \AGeoSql} table.
   * @property {string} text_title Location title.
   */

  /**
   * Location list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     City key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key. Primary key in the {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     Franchise region key. Primary key in the {@link \Wl\Business\Franchise\Region\RegionSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Location title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_location_list}
   */
  this.a_location_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_region_list
   * @property {string} k_region Franchise region key. Primary key in the {@link \Wl\Business\Franchise\Region\RegionSql} table.
   * @property {string} text_title Franchise region title.
   */

  /**
   * Region list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     Franchise region key. Primary key in the {@link \Wl\Business\Franchise\Region\RegionSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Franchise region title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_region_list}
   */
  this.a_region_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_state_list
   * @property {string} k_country Country key. Primary key in the {@link \AGeoSql} table.
   * @property {string} k_state State key. Primary key in the {@link \AGeoSql} table.
   * @property {string} text_title State title.
   */

  /**
   * State list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key. Primary key in the {@link \AGeoSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     State title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_state_list}
   */
  this.a_state_list = undefined;

  /**
   * Determines which locations should be returned.
   *
   * One of the {@link BusinessFranchiseLocationSid} constants.
   *
   * <tt>null</tt> means that {@link \Wl\Business\Franchise\Location\BusinessFranchiseLocationSid::ALL} is used.
   *
   * @get get
   * @type {number}
   */
  this.id_business_franchise_location = undefined;

  /**
   * Determines report for which data should be returned.
   *
   * One of the {@link \RsReportSid} constants.
   *
   * <tt>null</tt> means that report is not set.
   *
   * @get get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_CurvesFranchiseLocationModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_CurvesFranchiseLocationModel.prototype.config=function()
{
  return {"a_field": {"a_city_list": {"get": {"result": true}},"a_country_list": {"get": {"result": true}},"a_location_list": {"get": {"result": true}},"a_region_list": {"get": {"result": true}},"a_state_list": {"get": {"result": true}},"id_business_franchise_location": {"get": {"get": true}},"id_report": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Integration_Curves_CurvesFranchiseLocationModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {number} id_business_franchise_location Determines which locations should be returned. One of the {@link BusinessFranchiseLocationSid} constants. <tt>null</tt> means that {@link \Wl\Business\Franchise\Location\BusinessFranchiseLocationSid::ALL} is used.
 * @param {number} id_report Determines report for which data should be returned. One of the {@link \RsReportSid} constants. <tt>null</tt> means that report is not set.
 * @returns {Wl_Integration_Curves_CurvesFranchiseLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */