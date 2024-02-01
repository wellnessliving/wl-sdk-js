/**
 * An endpoint that manages franchisor locations.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Franchise_Location_BusinessFranchiseLocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_business_franchise_location,id_report,is_include_non_api,is_include_churn";

  /**
   * @typedef {{}} Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_city_list
   * @property {string} k_city The city key.
   * @property {string} k_country The country key.
   * @property {string} k_state The state key.
   * @property {string} text_title The city title.
   */

  /**
   * The city list. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     The city key.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     The country key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     The state key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The city title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_city_list[]}
   */
  this.a_city_list = undefined;

  /**
   * @typedef {{}} Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_country_list
   * @property {string} k_country The country key.
   * @property {string} text_title The country title.
   */

  /**
   * The country list. Each element has the next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     The country key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The country title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_country_list[]}
   */
  this.a_country_list = undefined;

  /**
   * @typedef {{}} Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_location_list
   * @property {string} k_city The city key.
   * @property {string} k_country The country key.
   * @property {string} k_location The location key.
   * @property {string} k_region The franchise region key.
   * @property {string} k_state The state key.
   * @property {string} text_title The location title.
   */

  /**
   * The location list. Each element has the next structure:
   * <dl>
   *   <dt>
   *     string <var>k_city</var>
   *   </dt>
   *   <dd>
   *     The city key.
   *   </dd>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     The country key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The location key.
   *   </dd>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     The franchise region key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     The state key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The location title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_location_list[]}
   */
  this.a_location_list = undefined;

  /**
   * @typedef {{}} Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_region_list
   * @property {string} k_region The franchise region key.
   * @property {string} text_title The franchise region title.
   */

  /**
   * The region list. Each element has the next structure:
   * <dl>
   *   <dt>
   *     string <var>k_region</var>
   *   </dt>
   *   <dd>
   *     The franchise region key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The franchise region title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_region_list[]}
   */
  this.a_region_list = undefined;

  /**
   * @typedef {{}} Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_state_list
   * @property {string} k_country The country key.
   * @property {string} k_state The state key.
   * @property {string} text_title The state title.
   */

  /**
   * The state list. Each element has the next structure:
   * <dl>
   *   <dt>
   *     string <var>k_country</var>
   *   </dt>
   *   <dd>
   *     The country key.
   *   </dd>
   *   <dt>
   *     string <var>k_state</var>
   *   </dt>
   *   <dd>
   *     The state key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The state title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel_a_state_list[]}
   */
  this.a_state_list = undefined;

  /**
   * Determines which locations should be returned.
   *
   * One of the {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} constants.
   *
   * This will be `null` if {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid.ALL} is used.
   *
   * @get get
   * @type {number}
   */
  this.id_business_franchise_location = undefined;

  /**
   * Determines the report data to be returned.
   *
   * One of the the {@link RsReportSid} constants.
   *
   * This will be `null` if the report isn't set yet.
   *
   * @get get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Determines whether to include churned/removed locations.
   *
   * If `true`, all locations are listed regardless of their status. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_include_churn = false;

  /**
   * Determines whether to include locations marked as not to be displayed on the franchisor website.
   *
   * If `true`, all locations are listed regardless of this setting. Otherwise, this will be `false`.
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

WlSdk_ModelAbstract.extend(Wl_Business_Franchise_Location_BusinessFranchiseLocationModel);

/**
 * @inheritDoc
 */
Wl_Business_Franchise_Location_BusinessFranchiseLocationModel.prototype.config=function()
{
  return {"a_field": {"a_city_list": {"get": {"result": true}},"a_country_list": {"get": {"result": true}},"a_location_list": {"get": {"result": true}},"a_region_list": {"get": {"result": true}},"a_state_list": {"get": {"result": true}},"id_business_franchise_location": {"get": {"get": true}},"id_report": {"get": {"get": true}},"is_include_churn": {"get": {"get": true}},"is_include_non_api": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Franchise_Location_BusinessFranchiseLocationModel.instanceGet
 * @param {string} k_business The business key.
 * @param {number} id_business_franchise_location Determines which locations should be returned.
 * One of the {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} constants.
 * This will be `null` if {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid.ALL} is used.
 * @param {number} id_report Determines the report data to be returned.
 * One of the the {@link RsReportSid} constants.
 * This will be `null` if the report isn't set yet.
 * @param {boolean} is_include_non_api Determines whether to include locations marked as not to be displayed on the franchisor website.
 * If `true`, all locations are listed regardless of this setting. Otherwise, this will be `false`.
 * @param {boolean} is_include_churn Determines whether to include churned/removed locations.
 * If `true`, all locations are listed regardless of their status. Otherwise, this will be `false`.
 * @returns {Wl_Business_Franchise_Location_BusinessFranchiseLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */