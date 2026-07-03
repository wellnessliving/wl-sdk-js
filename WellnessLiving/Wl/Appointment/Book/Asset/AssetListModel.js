/**
 * Retrieves information about assets in the current asset category.
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
  this._s_key = "k_location,k_resource_category,k_class_tab,is_backend,dtl_date,k_timezone,id_mode,uid,is_tab_all";

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions
   * @property {?number} i_age_from The minimum age permitted for the event. This will be `null` if a minimum age isn't set or available.
   * @property {?number} i_age_to The maximum age permitted for the event. This will be `null` if a maximum age isn't set or available.
   * @property {boolean} is_age_public This will be `true` if age restrictions are public and available. Otherwise, this will be `false` if they're hidden. When restrictions are hidden and current user isn't a staff member, the age range will be empty.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_direct_link
   * @property {string} k_class_tab The key of the book now tab.
   * @property {string} url_tab The direct booking URL. This will open the booking wizard under the related booking tab.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_image
   * @property {number} i_angle The angle of the shape rotation. This is set only if the image is one of the default shapes.
   * @property {boolean} is_empty Determines if the asset logo is empty.
   * @property {string} sid_image_icon The icon name. String representation of one of the {@link Wl_Resource_Image_ImageIconSid} constants. This is only set if the image kind equals to `image`.
   * @property {string} sid_image_shape The shape name. String representation of one of the {@link Wl_Resource_Image_ImageShapeSid} constants. This is set only if the image kind equals to `shape`.
   * @property {string} url The asset logo URL.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period
   * @property {string} html_duration The HTML code used to display the asset duration.
   * @property {string} html_price The HTML code used to display the formatted price.
   * @property {number} i_duration The asset duration in minutes.
   * @property {number} id_price A list of service price types.
   * @property {string} m_price The asset period price.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions} a_age_restrictions Information about age restrictions for this event.
   * @property {string[]} a_class_tab The key of service.   Keys are service key.    Values are class tab key.
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_direct_link} a_direct_link A list of links to create a booking from a direct link (direct booking URL). The system needs to know what tab is associated with the booking. Therefore, there needs to be one link per tab. Each element has two values:
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_image} a_image Information about the asset logo:
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_period} a_period A list of asset periods with the following information:
   * @property {string[]} a_search_tag QUICK Search tag keys.
   * @property {boolean} hide_application Determines whether the asset will be hidden in the White Label mobile apps. If `true`, the asset won't be displayed. Otherwise, this will be `false`.
   * @property {string} html_age_restriction The resource age restriction
   * @property {string} html_deny_reason Human-readable reason why the client cannot book this asset. Empty string if there is no deny reason.
   * @property {string} html_title The resource name.
   * @property {number} id_deny_reason Reasons why the client can't book this class.
   * @property {number} id_service_require A list of client booking flow types.
   * @property {boolean} is_age_restricted Determines whether this service can't be booked due to age restrictions.
   * @property {string} k_class_tab Quick book tab key.
   * @property {string} k_resource The resource key.
   * @property {string} k_resource_category The resource category key.
   * @property {?string} sid_deny_reason String representation of the deny reason. `null` if no deny reason.
   */

  /**
   * A list of information about assets:
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_AssetListModel_a_asset[]}
   */
  this.a_asset = undefined;

  /**
   * A list of reserved assets.
   *
   * 1st level keys refer to asset keys.
   * 2nd level keys refer to asset numbers.
   * Values are keys of appointment bookings that reserve the asset, or `true` if the asset is reserved by a class or event.
   *
   * For example, if you want to check if the 10th asset with the key of '15' is reserved,
   * you can check if `a_resource_busy['15']['10']` is free.
   *
   * If you're rebooking an appointment, check the value of `a_resource_busy['15']['10']`.
   * If it's equal to the key of your current appointment booking, you can assume the asset is available.
   *
   * @get result
   * @type {*[][]}
   */
  this.a_asset_busy = undefined;

  /**
   * The selected date and time of the asset booking. It is used in cases when the business booking policy allows
   * clients to select a date and time, and then the available asset.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = "";

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Mode type, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` for front-end mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` - search in all tabs.
   * `false` - search only for the selected book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * Key of the appointment, if we reschedule existing appointment.
   * It should be sent to ignore it when we get availability hours for the asset.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Business key.
   *
   * If not set, location's business will be used.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class tab key used to filter assets.
   *
   * This will be `null` if not set yet or if elements with no specified class tab are selected.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The asset category key to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_category = "";

  /**
   * The asset layout key.
   * May be empty if asset category has no layout.
   *
   * @get result
   * @type {string}
   */
  this.k_resource_layout = undefined;

  /**
   * Timezone of date and time of asset booking.
   *
   * Empty if {@link Wl_Appointment_Book_Asset_AssetListModel.dtl_date} not set or client can't change in which timezone dates should be shown.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "";

  /**
   * Client to get information for.
   *
   * If client not set, returns full asset list without client restrictions.
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
  return {"a_field":{"a_asset":{"get":{"result":true}},"a_asset_busy":{"get":{"result":true}},"dtl_date":{"get":{"get":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"id_mode":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_tab_all":{"get":{"get":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_resource_category":{"get":{"get":true}},"k_resource_layout":{"get":{"result":true}},"k_timezone":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_AssetListModel.instanceGet
 * @param {string} k_location The location key.
 * @param {string} k_resource_category The asset category key to show information for.
 * @param {string} k_class_tab The class tab key used to filter assets. This will be `null` if not set yet or if elements with no specified class tab are selected.
 * @param {boolean} is_backend This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` for front-end mode.
 * @param {string} dtl_date The selected date and time of the asset booking. It is used in cases when the business booking policy allows clients to select a date and time, and then the available asset.
 * @param {string} k_timezone Timezone of date and time of asset booking. Empty if {@link Wl_Appointment_Book_Asset_AssetListModel.dtl_date} not set or client can't change in which timezone dates should be shown.
 * @param {number} id_mode Mode type, one of {@link Wl_Mode_ModeSid} constants.
 * @param {?string} uid Client to get information for. If client not set, returns full asset list without client restrictions.
 * @param {boolean} is_tab_all `true` - search in all tabs. `false` - search only for the selected book tab.
 * @returns {Wl_Appointment_Book_Asset_AssetListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about assets in the current asset category.
 *
 * Returns the list of bookable assets at the given location, optionally filtered by category and book now tab.
 * When a date and time are provided, only assets available at that time are included and busy asset slots
 * are returned in {@link Wl_Appointment_Book_Asset_AssetListModel.a_asset_busy}. Supports both frontend and backend modes.
 *
 * @function
 * @name Wl_Appointment_Book_Asset_AssetListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
