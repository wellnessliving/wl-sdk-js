/**
 * An endpoint that retrieves assets required for a service booking.
 *
 * This endpoint is generated automatically based on the API.
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
  this._s_key = "dt_start,k_location,k_service,is_backend";

  /**
   * A list of assets that are busy for the time of service booking.
   *
   * Keys refer to asset IDs, and values refer to subarrays. The subarray key is the asset key, where the values will always be `true`.
   *
   * @get result
   * @type {{}}
   */
  this.a_resource_busy = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource
   * @property {{}} a_image The asset's image data.
   * @property {boolean} is_available If `true`, the asset has at least one free unit. Otherwise, this will be `false`
   * if the asset has no free units.
   * @property {string} k_resource The asset key.
   * @property {string} s_resource The asset title.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource[]} a_resource A list of resources.
   * Every element has the next keys:
   * <dl>
   *   <dt>
   *     array <tt>a_image</tt>
   *   </dt>
   *   <dd>
   *     The asset's image data.
   *   </dd>
   *   <dt>
   *     bool <tt>is_available</tt>
   *   </dt>
   *   <dd>
   *     If <tt>true</tt>, this asset has at least one free unit. Otherwise, this will be <tt>false</tt> if the asset has no free units.
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
   * @property {?string} k_resource_layout The asset's layout key. This will be `null` if the asset category has no layout.
   * @property {string} s_resource_type The title of the asset category.
   */

  /**
   * A list of assets that are required for the service booking. Keys refer to asset category IDs, and values refer to subarrays with the next keys:
   * <dl>
   *   <dt>
   *     array[] <b>a_resource</b>
   *   </dt>
   *   <dd>
   *     A list of resources. Every element has the next keys:
   *     <dl>
   *       <dt>
   *         array <b>a_image</b>
   *       </dt>
   *       <dd>
   *         The asset image data.
   *       </dd>
   *       <dt>
   *         bool <b>is_available</b>
   *       </dt>
   *       <dd>
   *         If `true`, this asset has at least one free unit. Otherwise, this will be `false` if the asset has no free units.
   *       </dd>
   *       <dt>
   *         string <b>k_resource</b>
   *       </dt>
   *       <dd>
   *         The asset key.
   *       </dd>
   *       <dt>
   *         string <b>s_resource</b>
   *       </dt>
   *       <dd>
   *         The asset title.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string|null <b>k_resource_layout</b>
   *   </dt>
   *   <dd>
   *     The asset's layout key. This will be <tt>null</tt> if the asset category has no layout.
   *   </dd>
   *   <dt>
   *     string <b>s_resource_type</b>
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
   * Determines whether staff members booked unavailable assets.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_unavailable_assets = undefined;

  /**
   * The date/time of the service start in MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * <b>true</b> - backend mode is used.
   * In this mode, the list of asset categories will be returned even if asset selection is disabled for clients.
   *
   * <b>false</b> - frontend mode is used.
   * In this mode, the list of asset categories won't be returned if asset selection is disabled for clients.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The service key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_Service_ServiceModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_Service_ServiceModel.prototype.config=function()
{
  return {"a_field": {"a_resource_busy": {"get": {"result": true}},"a_resource_type": {"get": {"result": true}},"can_book_unavailable_assets": {"get": {"result": true}},"dt_start": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_Service_ServiceModel.instanceGet
 * @param {string} dt_start The date/time of service start in MySQL format.
 * @param {string} k_location The location key.
 * @param {string} k_service The service key.
 * @param {boolean} is_backend <tt>true</tt> if backend mode is used. In this mode, the list of asset categories will be
 * returned even if asset selection is disabled for clients. Otherwise, this will be <tt>false</tt> if frontend mode is used.
 * In this mode, the list of asset categories won't be returned if asset selection is disabled for clients.
 * @returns {Wl_Appointment_Book_Asset_Service_ServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */