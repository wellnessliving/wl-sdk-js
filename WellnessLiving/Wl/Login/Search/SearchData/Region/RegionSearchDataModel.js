/**
 * Search entity API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Search_SearchData_Region_RegionSearchDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Login_Search_SearchData_Region_RegionSearchDataModel_a_geo_a_region
   * @property {string} k_geo Region key.
   * @property {string} text_title Region name.
   */
  /**
   * @typedef {{}} Wl_Login_Search_SearchData_Region_RegionSearchDataModel_a_geo
   * @property {Wl_Login_Search_SearchData_Region_RegionSearchDataModel_a_geo_a_region[]} a_region List of regions within the country.
   * <dl>
   *   <dt>
   *     string <tt>k_geo</tt>
   *   </dt>
   *   <dd>
   *     Region key.
   *   </dd>
   *   <dt>
   *     string <tt>text_title</tt>
   *   </dt>
   *   <dd>
   *     Region name.
   *   </dd>
   * </dl>
   * @property {string} k_geo Country key.
   * @property {string} text_title Country name.
   */

  /**
   * List of countries and nested regions.
   * <dl>
   *   <dt>
   *     string[] <var>a_region</var>
   *   </dt>
   *   <dd>
   *     List of regions within the country.
   *     <dl>
   *       <dt>
   *         string <var>k_geo</var>
   *       </dt>
   *       <dd>
   *         Region key.
   *       </dd>
   *       <dt>
   *         string <var>text_title</var>
   *       </dt>
   *       <dd>
   *         Region name.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>k_geo</var>
   *   </dt>
   *   <dd>
   *     Country key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Country name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Search_SearchData_Region_RegionSearchDataModel_a_geo[]}
   */
  this.a_geo = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Search_SearchData_Region_RegionSearchDataModel);

/**
 * @inheritDoc
 */
Wl_Login_Search_SearchData_Region_RegionSearchDataModel.prototype.config=function()
{
  return {"a_field": {"a_geo": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Search_SearchData_Region_RegionSearchDataModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Login_Search_SearchData_Region_RegionSearchDataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */