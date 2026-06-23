/**
 * Returns country, region, state, city and location lists of the franchisor.
 * This method returns all the information from the parent
 * `get()` and the Curves territory ID.
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
  this._s_key = "k_business,id_business_franchise_location,is_include_non_api,is_include_churn";

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_city_list
   * @property {string} k_city City key.
   * @property {string} k_country Country key.
   * @property {string} k_state State key.
   * @property {string} text_title City title.
   */

  /**
   * The city list. Each element has next structure:
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
   *
   * @get result
   * @type {Wl_Integration_Curves_CurvesFranchiseLocationModel_a_country_list[]}
   */
  this.a_country_list = undefined;

  /**
   * @typedef {{}} Wl_Integration_Curves_CurvesFranchiseLocationModel_a_location_list
   * @property {number} id_currency A list of currencies.
   * @property {string} k_city City key.
   * @property {string} k_country Country key.
   * @property {string} k_location Location key.
   * @property {string} k_region Franchise region key.
   * @property {string} k_state State key.
   * @property {string} text_title Location title.
   */

  /**
   * The location list. Each element has the next structure:
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
   * The region list. Each element has the next structure:
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
   * The state list. Each element has the next structure:
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
   * If `null`, {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} is used.
   *
   * @get get
   * @see Wl_Business_Franchise_Location_BusinessFranchiseLocationSid
   * @type {number}
   */
  this.id_business_franchise_location = 0;

  /**
   * Determines whether to include churned/removed locations.
   *
   * If `true`, all locations are listed (regardless of their status).
   *
   * @get get
   * @type {boolean}
   */
  this.is_include_churn = false;

  /**
   * Determines whether to include locations marked to not be displayed on franchisor website.
   *
   * If `true`, all locations are listed (regardless of this setting).
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
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_CurvesFranchiseLocationModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_CurvesFranchiseLocationModel.prototype.config=function()
{
  return {"a_field":{"a_city_list":{"get":{"result":true}},"a_country_list":{"get":{"result":true}},"a_location_list":{"get":{"result":true}},"a_region_list":{"get":{"result":true}},"a_state_list":{"get":{"result":true}},"id_business_franchise_location":{"get":{"get":true}},"is_include_churn":{"get":{"get":true}},"is_include_non_api":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Integration_Curves_CurvesFranchiseLocationModel.instanceGet
 * @param {string} k_business The business key.
 * @param {number} id_business_franchise_location Determines which locations should be returned. One of the {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} constants. If `null`, {@link Wl_Business_Franchise_Location_BusinessFranchiseLocationSid} is used.
 * @param {boolean} is_include_non_api Determines whether to include locations marked to not be displayed on franchisor website. If `true`, all locations are listed (regardless of this setting).
 * @param {boolean} is_include_churn Determines whether to include churned/removed locations. If `true`, all locations are listed (regardless of their status).
 * @returns {Wl_Integration_Curves_CurvesFranchiseLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns country, region, state, city and location lists of the franchisor.
This method returns all the information from the parent
`get()` and the Curves territory ID.
 *
 * Extends the parent location list with the Curves-specific territory ID (`k_territory_id`) for each
 * franchisee location by joining against the Curves franchisee integration table.
 *
 * @function
 * @name Wl_Integration_Curves_CurvesFranchiseLocationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
