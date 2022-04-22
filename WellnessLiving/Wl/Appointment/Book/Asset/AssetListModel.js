/**
 * Retrieves information about assets in the current asset category.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Asset_AssetListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_resource_category,k_class_tab,is_backend,dtl_date";

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period
   * @property {number} i_duration Duration of asset in minutes.
   * @property {string} html_duration Duration of asset to paste into view.
   * @property {string} html_price Price of the asset period to paste into view.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset
   * @property {{}} a_image Information about asset logo.
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period[]} a_period A list of asset periods with information about them:
   * <dl>
   *   <dt>
   *     int <tt>i_duration</tt>
   *   </dt>
   *   <dd>
   *     Duration of asset in minutes.
   *   </dd>
   *   <dt>
   *     string <tt>html_duration</tt>
   *   </dt>
   *   <dd>
   *     Duration of asset to paste into view.
   *   </dd>
   *   <dt>
   *     string <tt>html_price</tt>
   *   </dt>
   *   <dd>
   *     Price of the asset period to paste into view.
   *   </dd>
   * </dl>
   * @property {boolean} hide_application Whether asset will be hidden in the White Label mobile application.
   * <tt>true</tt> means that asset will not be displayed, <tt>false</tt> otherwise.
   * @property {number} id_service_require Purchase rule. One of {@link RsServiceRequireSid} constants.
   * @property {string} k_resource Resource key.
   * @property {string} s_title Title of resource.
   */

  /**
   * A list of assets with information about them:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Information about asset logo.
   *   </dd>
   *   <dt>
   *     array[] <var>a_period</var>
   *   </dt>
   *   <dd>
   *     A list of asset periods with information about them:
   *     <dl>
   *       <dt>
   *         int <var>i_duration</var>
   *       </dt>
   *       <dd>
   *         Duration of asset in minutes.
   *       </dd>
   *       <dt>
   *         string <var>html_duration</var>
   *       </dt>
   *       <dd>
   *         Duration of asset to paste into view.
   *       </dd>
   *       <dt>
   *         string <var>html_price</var>
   *       </dt>
   *       <dd>
   *         Price of the asset period to paste into view.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     Whether asset will be hidden in the White Label mobile application.
   *     <tt>true</tt> means that asset will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     int <var>id_service_require</var>
   *   </dt>
   *   <dd>
   *     Purchase rule. One of {@link RsServiceRequireSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_resource</var>
   *   </dt>
   *   <dd>
   *     Resource key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Title of resource.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_AssetListModel_a_asset}
   */
  this.a_asset = undefined;

  /**
   * Selected date and time of asset booking.
   *   It is actual in case when business booking policy allows clients to select a date and time,
   *   then the available asset.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = false;

  /**
   * <tt>true</tt> - load assets for backend mode; <tt>false</tt> - for frontend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Class tab ID to filter assets.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * ID of a location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of an asset category to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_category = "0";

  /**
   * ID of asset category layout. May be empty if asset category has no layout.
   *
   * @get result
   * @type {string}
   */
  this.k_resource_layout = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_AssetListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_AssetListModel.prototype.config=function()
{
  return {"a_field": {"a_asset": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource_category": {"get": {"get": true}},"k_resource_layout": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_AssetListModel.instanceGet
 * @param {string} k_location ID of a location.
 * @param {string} k_resource_category ID of an asset category to show information for.
 * @param {string} k_class_tab Class tab ID to filter assets.
 * @param {boolean} is_backend <tt>true</tt> - load assets for backend mode; <tt>false</tt> - for frontend mode.
 * @returns {Wl_Appointment_Book_Asset_AssetListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */