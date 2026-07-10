/**
 * Retrieves assets required for a service booking at the given date and time, including availability and busy status.
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
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource_a_image_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource_a_image
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource_a_image_a_image} a_image Image data.
   * @property {number} i_angle Angle of shape rotation. Is set only if `sid_image` equals to `shape`.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_resource Resource key.
   * @property {string} sid_image Image kind. String representation of one of {@link Wl_Resource_Image_ImageSid} constants.
   * @property {string} sid_image_icon Icon name.String representation of one of {@link Wl_Resource_Image_ImageIconSid} constants. Is set only if `sid_image` equals to `image`.
   * @property {string} sid_image_shape Shape name. String representation of one of {@link Wl_Resource_Image_ImageShapeSid} constants. Is set only if `sid_image` equals to `shape`.
   * @property {string} url Path to image.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource_a_image} a_image The asset's image data.
   * @property {number} i_quantity Asset quantity.
   * @property {boolean} is_available Whether this asset has at least one free unit.
   * @property {string} k_resource The asset key.
   * @property {string} s_resource The asset title.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type
   * @property {Wl_Appointment_Book_Asset_Service_ServiceModel_a_resource_type_a_resource} a_resource A list of resources. Every element has the following keys:
   * @property {?string} k_resource_layout The asset's layout key.  This will be `null` if the asset category has no layout.
   * @property {string} s_resource_type The title of asset category.
   */

  /**
   * A list of assets required for the service booking.
   * Keys refer the asset category key(s).
   * Values refer to sub-arrays with next key(s).
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
   * @see Wl_Mode_ModeSid
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
   * The appointment booking key to ignore when {@link Wl_Appointment_Book_Asset_Service_ServiceModel.a_resource_busy} is derived.
   *
   * `null` if no appointment booking must be ignored.
   *
   * @get get
   * @type {?string}
   */
  this.k_appointment_ignore = null;

  /**
   * The selected location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The selected service's key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_Service_ServiceModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_Service_ServiceModel.prototype.config=function()
{
  return {"a_field":{"a_resource_busy":{"get":{"result":true}},"a_resource_type":{"get":{"result":true}},"can_book_unavailable_assets":{"get":{"result":true}},"dt_start":{"get":{"get":true}},"id_mode":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_grid_any":{"get":{"get":true}},"is_show_unavailable_assets":{"get":{"get":true}},"k_appointment_ignore":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_timezone":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
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

/**
 * Retrieves assets required for a service booking at the given date and time, including availability and busy status.
 *
 * Returns the asset categories and individual assets linked to the service at the given location.
 * Each asset includes its availability flag for the requested time slot. The response also includes
 * {@link Wl_Appointment_Book_Asset_Service_ServiceModel.a_resource_busy} with currently reserved asset slots and a flag indicating
 * whether the current user is allowed to book unavailable assets.
 *
 * @function
 * @name Wl_Appointment_Book_Asset_Service_ServiceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
