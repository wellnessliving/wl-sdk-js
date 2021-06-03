/**
 * Model of assets which are required for service booking.
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
  this._s_key = "dt_start,k_location,k_service,is_backend";

  /**
   * List of assets which are busy in the time of service booking. Keys - asset ID; primary key in {@link \RsResourceSql} table. Values - sub array. In sub arrays keys - number of asset unit; values -
   * <tt>true</tt>.
   *
   * @get result
   * @type {{}}
   */
  this.a_resource_busy = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource
   * @property {{}} a_image Asset image data. See {@link \RsResourceImage::data()} for details.
   * @property {boolean} is_available <tt>true</tt> - this asset has at least one free unit; <tt>false</tt> - asset has no free units.
   * @property {string} k_resource Asset key. Primary key in {@link \RsResourceSql} table.
   * @property {string} s_resource Asset title.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource[]} a_resource List of resources. Every element has keys:
   * <dl>
   *   <dt>
   *     array <tt>a_image</tt>
   *   </dt>
   *   <dd>
   *     Asset image data. See {@link \RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     bool <tt>is_available</tt>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - this asset has at least one free unit; <tt>false</tt> - asset has no free units.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     Asset key. Primary key in {@link \RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string <tt>s_resource</tt>
   *   </dt>
   *   <dd>
   *     Asset title.
   *   </dd>
   * </dl>
   * @property {?string} k_resource_layout Assets' layout key; primary key in {@link \Wl\Resource\Layout\Sql} table. <tt>null</tt> if asset category has no layout.
   * @property {string} s_resource_type Title of asset category.
   */

  /**
   * List of assets which are required for service booking. Keys - asset category ID; primary key in {@link \RsResourceTypeSql} table. Values - sub arrays with next keys:
   * <dl>
   *   <dt>
   *     array[] <var>a_resource</var>
   *   </dt>
   *   <dd>
   *     List of resources. Every element has keys:
   *     <dl>
   *       <dt>
   *         array <var>a_image</var>
   *       </dt>
   *       <dd>
   *         Asset image data. See {@link \RsResourceImage::data()} for details.
   *       </dd>
   *       <dt>
   *         bool <var>is_available</var>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> - this asset has at least one free unit; <tt>false</tt> - asset has no free units.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         Asset key. Primary key in {@link \RsResourceSql} table.
   *       </dd>
   *       <dt>
   *         string <var>s_resource</var>
   *       </dt>
   *       <dd>
   *         Asset title.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string|null <var>k_resource_layout</var>
   *   </dt>
   *   <dd>
   *     Assets' layout key; primary key in {@link \Wl\Resource\Layout\Sql} table. <tt>null</tt> if asset category has no layout.
   *   </dd>
   *   <dt>
   *     string <var>s_resource_type</var>
   *   </dt>
   *   <dd>
   *     Title of asset category.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type}
   */
  this.a_resource_type = undefined;

  /**
   * Can staff booked unavailable assets.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_unavailable_assets = undefined;

  /**
   * Date/time of service start in MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * <tt>true</tt> for a case of backend mode.
   * In this mode list of asset categories must be returned even asset selection is disabled for clients.
   *
   * <tt>false</tt> for a case of frontend mode.
   * In this mode list of asset categories must not be returned if asset selection is disabled for clients.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Service key.
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
 * @param {string} dt_start Date/time of service start in MySQL format.
 * @param {string} k_location Location key.
 * @param {string} k_service Service key.
 * @param {boolean} is_backend <tt>true</tt> for a case of backend mode. In this mode list of asset categories must be returned even asset selection is disabled for clients. <tt>false</tt> for a case of frontend mode. In this mode list of asset categories must not be returned if asset selection is disabled for clients.
 * @returns {Wl_Appointment_Book_Asset_Service_ServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */