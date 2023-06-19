/**
 * An endpoint that retrieves assets that are required for a service booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Asset_Service_ServiceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_start,k_location,k_service,is_backend,is_grid_any,k_timezone,id_mode,uid";

  /**
   * A list of reserved assets.
   *
   * 1st level keys refer to asset keys.
   * 2nd level keys refer to asset numbers.
   * Values refer to keys of appointment bookings that reserve the asset(s).
   *
   * For example, if you want to check if the 10th asset with the key of '15' is reserved,
   * you can check if `a_resource_busy['15']['10']` is free.
   *
   * If you're rebooking an appointment, check the value of `a_resource_busy['15']['10']`.
   * If it's equal to the key of your current appointment booking, you can assume the asset is available.
   *
   * @get result
   * @type {{}}
   */
  this.a_resource_busy = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource
   * @property {{}} a_image The asset's image data. See {@link RsResourceImage::data()} for details.
   * @property {boolean} is_available If `true`, then this asset has at least one free unit.
   * If `false`, then this asset has no free units.
   * @property {string} k_resource The asset key.
   * @property {string} s_resource The asset title.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource[]} a_resource A list of resources. Every element has the following keys:
   * <dl>
   *   <dt>
   *     array <tt>a_image</tt>
   *   </dt>
   *   <dd>
   *     The asset's image data. See {@link RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     bool <tt>is_available</tt>
   *   </dt>
   *   <dd>
   *     If `true`, then this asset has at least one free unit.
   *     If `false`, then this asset has no free units.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     The asset key.
   *   </dd>
   *   <dt>
   *     string <tt>s_resource</tt>
   *   </dt>
   *   <dd>
   *     The asset title.
   *   </dd>
   * </dl>
   * @property {?string} k_resource_layout The asset's layout key.
   * This will be `null` if the asset category has no layout.
   * @property {string} s_resource_type The title of asset category.
   */

  /**
   * A list of assets required for the service booking.
   * Keys refer the asset category key(s).
   * Values refer to sub-arrays with next structure:
   * <dl>
   *   <dt>
   *     array[] <var>a_resource</var>
   *   </dt>
   *   <dd>
   *     A list of resources. Every element has the following keys:
   *     <dl>
   *       <dt>
   *         array <var>a_image</var>
   *       </dt>
   *       <dd>
   *         The asset's image data. See {@link RsResourceImage::data()} for details.
   *       </dd>
   *       <dt>
   *         bool <var>is_available</var>
   *       </dt>
   *       <dd>
   *         If `true`, then this asset has at least one free unit.
   *         If `false`, then this asset has no free units.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         The asset key.
   *       </dd>
   *       <dt>
   *         string <var>s_resource</var>
   *       </dt>
   *       <dd>
   *         The asset title.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string|null <var>k_resource_layout</var>
   *   </dt>
   *   <dd>
   *     The asset's layout key.
   *     This will be `null` if the asset category has no layout.
   *   </dd>
   *   <dt>
   *     string <var>s_resource_type</var>
   *   </dt>
   *   <dd>
   *     The title of asset category.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type}
   */
  this.a_resource_type = undefined;

  /**
   * Can the staff members book reserved assets.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_unavailable_assets = undefined;

  /**
   * The appointment booking date selected by the user.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * Mode type, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * If `true`, back-end mode is selected.
   * In this mode, the list of asset categories must be returned even if asset selection is disabled for clients.
   *
   * If `false` for a case of front-end mode.
   * In this mode, the list of asset categories won't be returned if asset selection is disabled for clients.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Whether to show both grid layouts and custom layouts.
   *
   * `true` if custom layout should be included in the result.
   * `false` if only grid layout can be used.
   *
   * @get get
   * @type {boolean}
   */
  this.is_grid_any = false;

  /**
   * Whether unavailable assets should be included.
   *
   * @get get
   * @type {boolean}
   */
  this.is_show_unavailable_assets = false;

  /**
   * The selected location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The selected service's key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Timezone of date and time of service start.
   *
   * Empty if client can't change in which timezone dates should be shown.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "";

  /**
   * User to get information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_Service_ServiceModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_Service_ServiceModel.prototype.config=function()
{
  return {"a_field": {"a_resource_busy": {"get": {"result": true}},"a_resource_type": {"get": {"result": true}},"can_book_unavailable_assets": {"get": {"result": true}},"dt_start": {"get": {"get": true}},"id_mode": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_grid_any": {"get": {"get": true}},"is_show_unavailable_assets": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_Service_ServiceModel.instanceGet
 * @param {string} dt_start The appointment booking date selected by the user.
 * @param {string} k_location The selected location key.
 * @param {string} k_service The selected service's key.
 * @param {boolean} is_backend If `true`, back-end mode is selected. In this mode, the list of asset categories must be returned even if asset selection is disabled for clients. If `false` for a case of front-end mode. In this mode, the list of asset categories won't be returned if asset selection is disabled for clients.
 * @param {boolean} is_grid_any Whether to show both grid layouts and custom layouts. `true` if custom layout should be included in the result. `false` if only grid layout can be used.
 * @param {string} k_timezone Timezone of date and time of service start. Empty if client can't change in which timezone dates should be shown.
 * @param {number} id_mode Mode type, one of {@link Wl_Mode_ModeSid} constants.
 * @param {string} uid User to get information for.
 * @returns {Wl_Appointment_Book_Asset_Service_ServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */