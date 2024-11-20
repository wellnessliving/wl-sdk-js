/**
 * An endpoint that gets information for enterprise locations.
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
  this._s_key = "k_business,id_business_franchise_location,id_report,is_include_non_api,is_include_churn";

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_city_list
   * @property {string} k_city City key.
   * @property {string} k_country Country key.
   * @property {string} k_state State key.
   * @property {string} text_title City title.
   */

  /**
   * The city list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     City key.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key.
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
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_city_list[]}
   */
  this.a_city_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_country_list
   * @property {string} k_country Country key.
   * @property {string} text_title Country title.
   */

  /**
   * The country list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key.
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
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_country_list[]}
   */
  this.a_country_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_location_list
   * @property {string} k_city City key.
   * @property {string} k_country Country key.
   * @property {string} k_location Location key.
   * @property {string} k_region Franchise region key.
   * @property {string} k_state State key.
   * @property {string} text_title Location title.
   */

  /**
   * The location list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     City key.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key.
   *   </dd>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     Franchise region key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key.
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
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_location_list[]}
   */
  this.a_location_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_region_list
   * @property {string} k_region Franchise region key.
   * @property {string} text_title Franchise region title.
   */

  /**
   * The region list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     Franchise region key.
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
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_region_list[]}
   */
  this.a_region_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_state_list
   * @property {string} k_country Country key.
   * @property {string} k_state State key.
   * @property {string} text_title State title.
   */

  /**
   * The state list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     Country key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     State key.
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
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_state_list[]}
   */
  this.a_state_list = undefined;

  /**
   * Determines which locations should be returned.
   *
   * One of the {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} constants.
   *
   * <tt>null</tt> means that {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid.ALL} is used.
   *
   * @get get
   * @type {number}
   */
  this.id_business_franchise_location = undefined;

  /**
   * Determines report for which data should be returned.
   *
   * One of the {@link RsReportSid} constants.
   *
   * <tt>null</tt> means that report is not set.
   *
   * @get get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Whether to include churned/removed locations. `true` to list all locations regardless of their status.
   *
   * @get get
   * @type {boolean}
   */
  this.is_include_churn = false;

  /**
   * Whether to include locations marked to not be displayed on franchisor website. `true` to list all locations
   * regardless of this setting.
   *
   * @get get
   * @type {boolean}
   */
  this.is_include_non_api = false;

  /**
   * The business key.
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
  return {"a_field": {"a_city_list": {"get": {"result": true}},"a_country_list": {"get": {"result": true}},"a_location_list": {"get": {"result": true}},"a_region_list": {"get": {"result": true}},"a_state_list": {"get": {"result": true}},"id_business_franchise_location": {"get": {"get": true}},"id_report": {"get": {"get": true}},"is_include_churn": {"get": {"get": true}},"is_include_non_api": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Integration_Curves_CurvesFranchiseLocationModel.instanceGet
 * @param {string} k_business The business key.
 * @param {number} id_business_franchise_location Determines which locations should be returned. One of the {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} constants. <tt>null</tt> means that {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid.ALL} is used.
 * @param {number} id_report Determines report for which data should be returned. One of the {@link RsReportSid} constants. <tt>null</tt> means that report is not set.
 * @param {boolean} is_include_non_api Whether to include locations marked to not be displayed on franchisor website. `true` to list all locations regardless of this setting.
 * @param {boolean} is_include_churn Whether to include churned/removed locations. `true` to list all locations regardless of their status.
 * @returns {Wl_Integration_Curves_CurvesFranchiseLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */