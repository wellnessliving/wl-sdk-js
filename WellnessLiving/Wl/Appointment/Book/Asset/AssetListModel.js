/**
 * An endpoint that retrieves information about assets in the current asset category.
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
  this._s_key = "k_location,k_resource_category,k_class_tab,is_backend,dtl_date,k_timezone,id_mode,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period
   * @property {number} i_duration The duration of the asset in minutes.
   * @property {string} html_duration The duration of the asset to paste into view.
   * @property {string} html_price The price of the asset period to paste into view.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset
   * @property {{}} a_image Information about the asset logo.
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period[]} a_period A list of asset periods with information about them:
   * <dl>
   *   <dt>
   *     int <tt>i_duration</tt>
   *   </dt>
   *   <dd>
   *     The duration of the asset in minutes.
   *   </dd>
   *   <dt>
   *     string <tt>html_duration</tt>
   *   </dt>
   *   <dd>
   *     The duration of asset to paste into view.
   *   </dd>
   *   <dt>
   *     string <tt>html_price</tt>
   *   </dt>
   *   <dd>
   *     The price of the asset period to paste into view.
   *   </dd>
   * </dl>
   * @property {boolean} hide_application Determines whether the asset will be hidden in the White Label mobile application.
   * If <b>true</b>, the asset won't be displayed. Otherwise, this will be <b>false</b>.
   * @property {number} id_service_require The purchase rule. One of the {@link WlSdk_Service_ServiceRequireSid} constants.
   * @property {string} k_resource The resource key.
   * @property {string} s_title The title of the resource.
   */

  /**
   * A list of assets with information about them:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Information about the asset logo.
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
   *         The duration of asset in minutes.
   *       </dd>
   *       <dt>
   *         string <var>html_duration</var>
   *       </dt>
   *       <dd>
   *         The duration of the asset to paste into view.
   *       </dd>
   *       <dt>
   *         string <var>html_price</var>
   *       </dt>
   *       <dd>
   *         The price of the asset period to paste into view.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     Determines whether the asset will be hidden in the White Label mobile application.
   *     If <b>true</b> the asset won't be displayed. Otherwise, this will be <b>false</b>.
   *   </dd>
   *   <dt>
   *     int <var>id_service_require</var>
   *   </dt>
   *   <dd>
   *     The purchase rule. One of the {@link WlSdk_Service_ServiceRequireSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_resource</var>
   *   </dt>
   *   <dd>
   *     The resource key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title of the resource.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_AssetListModel_a_asset}
   */
  this.a_asset = undefined;

  /**
   * The selected date and time of the asset booking. This is for cases where the business booking policy allows clients
   * to select a date and time, then the available asset.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = false;

  /**
   * The mode type. One of the {@link WlSdk_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * If <b>true</b>, assets will be loaded for backend mode.
   *
   * If <b>false</b>, assets will be loaded for frontend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The business key.
   *
   * The location's business will be used if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The class tab ID used to filter assets.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The ID of a location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The ID of an asset category to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_category = "0";

  /**
   * The ID of an asset category layout. This may be empty if the asset category has no layout.
   *
   * @get result
   * @type {string}
   */
  this.k_resource_layout = undefined;

  /**
   * The time zone in which the asset booking was made.
   *
   * This will be empty if {@link Wl_Appointment_Book_Asset_AssetListModel.dtl_date} isn't set yet or if clients can't
   * change the time zone in which asset bookings can be made.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "";

  /**
   * The client to get information for.
   *
   * The full asset list without client restrictions will be returned if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_AssetListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_AssetListModel.prototype.config=function()
{
  return {"a_field": {"a_asset": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"id_mode": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource_category": {"get": {"get": true}},"k_resource_layout": {"get": {"result": true}},"k_timezone": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_AssetListModel.instanceGet
 * @param {string} k_location The ID of a location.
 * @param {string} k_resource_category The ID of an asset category to show information for.
 * @param {string} k_class_tab The class tab ID to filter assets.
 * @param {boolean} is_backend If <b>true</b>, assets are loaded for backend mode. Otherwise, <b>false</b> if assets
 * are loaded for frontend mode.
 * @returns {Wl_Appointment_Book_Asset_AssetListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */