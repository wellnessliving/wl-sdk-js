/**
 * An endpoint that retrieves information about assets in the current asset category.
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
  this._s_key = "k_location,k_resource_category,k_class_tab,is_backend,dtl_date,k_timezone,id_mode,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link_a_image_a_period
   * @property {string} html_duration The HTML code used to display the asset duration.
   * @property {string} html_price The HTML code used to display the formatted price.
   * @property {number} i_duration The asset duration in minutes.
   * @property {number} id_price The asset period price type. One of {@link RsServicePriceSid} constants.
   * @property {*} m_price The asset period price.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link_a_image
   * @property {number} i_angle The angle of the shape rotation. This is set only if the image is one of the default shapes.
   * @property {boolean} is_empty Determines if the asset logo is empty.
   * @property {string} sid_image_icon The icon name. String representation of one of the {@link Wl_Resource_Image_ImageIconSid} constants. This is only set if the image kind equals to `image`.
   * @property {string} sid_image_shape The shape name. String representation of one of the {@link Wl_Resource_Image_ImageShapeSid} constants. This is set only if the image kind equals to `shape`.
   * @property {string} url The asset logo URL.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link
   * @property {string} k_class_tab The key of the book now tab.
   * @property {string} url_tab The direct booking URL. This will open the booking wizard under the related booking tab.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions
   * @property {?number} i_age_from The minimum age permitted for the event. This will be `null` if a minimum age isn't set or available.
   * @property {?number} i_age_to The maximum age permitted for the event. This will be `null` if a maximum age isn't set or available.
   * @property {boolean} is_age_public This will be `true` if age restrictions are public and available. Otherwise, this will be `false` if they're hidden.
   * When restrictions are hidden and current user isn't a staff member, the age range will be empty.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_AssetListModel_a_asset
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions} a_age_restrictions Information about age restrictions for this event.
   * 
   * This will be an empty array if there aren't any age restrictions.
   * 
   * <dl>
   *   <dt>int|null <tt>i_age_from</tt></dt>
   *   <dd>The minimum age permitted for the event. This will be `null` if a minimum age isn't set or available.</dd>
   *   <dt>int|null <tt>i_age_to</tt></dt>
   *   <dd>The maximum age permitted for the event. This will be `null` if a maximum age isn't set or available.</dd>
   *   <dt>bool <tt>is_age_public</tt></dt>
   *   <dd>This will be `true` if age restrictions are public and available. Otherwise, this will be `false` if they're hidden.
   *     When restrictions are hidden and current user isn't a staff member, the age range will be empty.</dd>
   * </dl>
   * @property {{}} a_class_tab Keys are primary key in {@link \RsClassSql} table, values are primary key in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link[]} a_direct_link A list of links to create a booking from a direct link (direct booking URL).
   * The system needs to know what tab is associated with the booking. Therefore, there needs to be one link
   * per tab.
   * Each element has two values:
   * <dl>
   *   <dt>string <tt>k_class_tab</tt></dt>
   *   <dd>The key of the book now tab.</dd>
   *   <dt>string <tt>url_tab</tt></dt>
   *   <dd>The direct booking URL. This will open the booking wizard under the related booking tab.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link_a_image[]} a_image Information about the asset logo:
   * <dl>
   *   <dt>int <tt>i_angle</tt></dt>
   *   <dd>The angle of the shape rotation. This is set only if the image is one of the default shapes.</dd>
   *   <dt>bool <tt>is_empty</tt></dt>
   *   <dd>Determines if the asset logo is empty.</dd>
   *   <dt>string <tt>sid_image_icon</tt></dt>
   *   <dd>The icon name. String representation of one of the {@link Wl_Resource_Image_ImageIconSid} constants. This is only set if the image kind equals to `image`.</dd>
   *   <dt>string <tt>sid_image_shape</tt></dt>
   *   <dd>The shape name. String representation of one of the {@link Wl_Resource_Image_ImageShapeSid} constants. This is set only if the image kind equals to `shape`.</dd>
   *   <dt>string <tt>url</tt></dt>
   *   <dd>The asset logo URL.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Asset_AssetListModel_a_asset_a_age_restrictions_a_direct_link_a_image_a_period[]} a_period A list of asset periods with the following information:
   * <dl>
   *   <dt>string <tt>html_duration</tt></dt>
   *   <dd>The HTML code used to display the asset duration.</dd>
   *   <dt>string <tt>html_price</tt></dt>
   *   <dd>The HTML code used to display the formatted price.</dd>
   *   <dt>int <tt>i_duration</tt></dt>
   *   <dd>The asset duration in minutes.</dd>
   *   <dt>int <tt>id_price</tt></dt>
   *   <dd>The asset period price type. One of {@link RsServicePriceSid} constants.</dd>
   *   <dt>sting <tt>m_price</tt></dt>
   *   <dd>The asset period price.</dd>
   * </dl>
   * @property {{}} a_search_tag QUICK Search tag keys.
   * @property {boolean} hide_application Determines whether the asset will be hidden in the White Label mobile apps.
   * If `true`, the asset won't be displayed. Otherwise, this will be `false`.
   * @property {string} html_age_restriction The resource age restriction
   * @property {string} html_title The resource name.
   * @property {number} id_service_require The purchase rule. One of the {@link RsServiceRequireSid} constants.
   * @property {boolean} is_age_restricted Determines whether this service can't be booked due to age restrictions.
   * @property {string} k_class_tab Quick book tab key.
   * @property {string} k_resource The resource key.
   * @property {string} k_resource_category The resource category key.
   */

  /**
   * A list of information about assets:
   *
   * <dl>
   *   <dt>array <var>a_age_restrictions</var></dt>
   *   <dd>
   *     Information about age restrictions for this event.
   *
   *     This will be an empty array if there aren't any age restrictions.
   *
   *     <dl>
   *       <dt>int|null <var>i_age_from</var></dt>
   *       <dd>The minimum age permitted for the event. This will be `null` if a minimum age isn't set or available.</dd>
   *       <dt>int|null <var>i_age_to</var></dt>
   *       <dd>The maximum age permitted for the event. This will be `null` if a maximum age isn't set or available.</dd>
   *       <dt>bool <var>is_age_public</var></dt>
   *       <dd>This will be `true` if age restrictions are public and available. Otherwise, this will be `false` if they're hidden.
   *         When restrictions are hidden and current user isn't a staff member, the age range will be empty.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array <var>a_class_tab</var></dt>
   *   <dd>Keys are primary key in {@link \RsClassSql} table, values are primary key in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.</dd>
   *   <dt>
   *     array[] <var>a_direct_link</var>
   *   </dt>
   *   <dd>
   *     A list of links to create a booking from a direct link (direct booking URL).
   *     The system needs to know what tab is associated with the booking. Therefore, there needs to be one link
   *     per tab.
   *     Each element has two values:
   *     <dl>
   *       <dt>string <var>k_class_tab</var></dt>
   *       <dd>The key of the book now tab.</dd>
   *       <dt>string <var>url_tab</var></dt>
   *       <dd>The direct booking URL. This will open the booking wizard under the related booking tab.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_image</var></dt>
   *   <dd>Information about the asset logo:
   *     <dl>
   *       <dt>int <var>i_angle</var></dt>
   *       <dd>The angle of the shape rotation. This is set only if the image is one of the default shapes.</dd>
   *       <dt>bool <var>is_empty</var></dt>
   *       <dd>Determines if the asset logo is empty.</dd>
   *       <dt>string <var>sid_image_icon</var></dt>
   *       <dd>The icon name. String representation of one of the {@link Wl_Resource_Image_ImageIconSid} constants. This is only set if the image kind equals to `image`.</dd>
   *       <dt>string <var>sid_image_shape</var></dt>
   *       <dd>The shape name. String representation of one of the {@link Wl_Resource_Image_ImageShapeSid} constants. This is set only if the image kind equals to `shape`.</dd>
   *       <dt>string <var>url</var></dt>
   *       <dd>The asset logo URL.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_period</var></dt>
   *   <dd>A list of asset periods with the following information:
   *     <dl>
   *       <dt>string <var>html_duration</var></dt>
   *       <dd>The HTML code used to display the asset duration.</dd>
   *       <dt>string <var>html_price</var></dt>
   *       <dd>The HTML code used to display the formatted price.</dd>
   *       <dt>int <var>i_duration</var></dt>
   *       <dd>The asset duration in minutes.</dd>
   *       <dt>int <var>id_price</var></dt>
   *       <dd>The asset period price type. One of {@link RsServicePriceSid} constants.</dd>
   *       <dt>sting <var>m_price</var></dt>
   *       <dd>The asset period price.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array <var>a_search_tag</var></dt>
   *   <dd>QUICK Search tag keys.</dd>
   *   <dt>bool <var>hide_application</var></dt>
   *   <dd>
   *     Determines whether the asset will be hidden in the White Label mobile apps.
   *     If `true`, the asset won't be displayed. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>string <var>html_age_restriction</var></dt>
   *   <dd>The resource age restriction</dd>
   *   <dt>string <var>html_title</var></dt>
   *   <dd>The resource name.</dd>
   *   <dt>int <var>id_service_require</var></dt>
   *   <dd>The purchase rule. One of the {@link RsServiceRequireSid} constants.</dd>
   *   <dt>bool <var>is_age_restricted</var></dt>
   *   <dd>Determines whether this service can't be booked due to age restrictions.</dd>
   *   <dt>string <var>k_class_tab</var></dt>
   *   <dd>Quick book tab key.</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The resource key.</dd>
   *   <dt>string <var>k_resource_category</var></dt>
   *   <dd>The resource category key.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_AssetListModel_a_asset[]}
   */
  this.a_asset = undefined;

  /**
   * The selected date and time of the asset booking. It is used in cases when the business booking policy allows
   * clients to select a date and time, and then the available asset.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = false;

  /**
   * Mode type, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 0;

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
   * This is `true` if asset categories are loaded for back-end mode. Otherwise, this will be `false` for front-end mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Business key.
   *
   * If not set, location's business will be used.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The class tab key used to filter assets.
   *
   * This will be `null` if not set yet or if elements with no specified class tab are selected.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The asset category key to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_resource_category = "0";

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
  return {"a_field": {"a_asset": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"id_mode": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource_category": {"get": {"get": true}},"k_resource_layout": {"get": {"result": true}},"k_timezone": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
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
 * @returns {Wl_Appointment_Book_Asset_AssetListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */