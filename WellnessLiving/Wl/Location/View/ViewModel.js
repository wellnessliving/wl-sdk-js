/**
 * An endpoint that returns information on a specified location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_View_ViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location";

  /**
   * A list of ages that are permitted for visiting this location.
   *
   * @get result
   * @see RsAgeSid
   * @type {number[]}
   */
  this.a_age = [];

  /**
   * A list of facilities that are available in this location.
   *
   * @get result
   * @see RsFacilitySid
   * @type {number[]}
   */
  this.a_amenities = [];

  /**
   * A list of levels that are suitable for visiting this location.
   *
   * @get result
   * @type {string[]}
   */
  this.a_level = [];

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} s_url The URL to the image.
   */

  /**
   * Information about the location logo used in WellnessLiving:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     The image height.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     The image width.
   *   </dd>
   *   <dt>
   *     string <var>s_url</var>
   *   </dt>
   *   <dd>
   *     The URL to the image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_slide
   * @property {number} i_height Height.
   * @property {number} i_width Width.
   * @property {string} url_preview URL to image preview.
   * @property {string} url_slide URL to full image.
   */

  /**
   * A list of the location images.
   * Every element has the following keys:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     Height.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     Width.
   *   </dd>
   *   <dt>
   *     string <var>url_preview</var>
   *   </dt>
   *   <dd>
   *     URL to image preview.
   *   </dd>
   *   <dt>
   *     string <var>url_slide</var>
   *   </dt>
   *   <dd>
   *     URL to full image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_slide}
   */
  this.a_slide = undefined;

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_work
   * @property {string} s_end The time of day end in MySQL format.
   * @property {string} s_start The time of day start in MySQL format.
   */

  /**
   * The hours of operation for the location.
   * Fields are numbers representing specific days (1 is Monday, 7 is Sunday). Values are objects with the next fields:
   * <dl>
   *   <dt>
   *     string <var>s_end</var>
   *   </dt>
   *   <dd>
   *     The time of day end in MySQL format.
   *   </dd>
   *   <dt>
   *     string <var>s_start</var>
   *   </dt>
   *   <dd>
   *     The time of day start in MySQL format.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Location_View_ViewModel_a_work}
   */
  this.a_work = undefined;

  /**
   * The latitude coordinate of the location.
   *
   * @get result
   * @type {number}
   */
  this.f_latitude = 0;

  /**
   * The longitude coordinate of the location.
   *
   * @get result
   * @type {number}
   */
  this.f_longitude = 0;

  /**
   * The full description of the location.
   *
   * @get result
   * @type {string}
   */
  this.html_description_full = undefined;

  /**
   * A shorter description of the location. A preview of {@link Wl_Location_View_ViewModel.html_description_full}.
   *
   * @get result
   * @type {string}
   */
  this.html_description_preview = undefined;

  /**
   * Maximum location image height.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_height = 100;

  /**
   * Maximum location image width.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 220;

  /**
   * The industry of the business.
   * `null` in case when industry didn't set for chosen business type, or for business types
   * where set value which is absent.
   *
   * @get result
   * @see RsHomeTourSid
   * @type {?number}
   */
  this.id_industry = 0;

  /**
   * `true` if to display phone number on location page. `False` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_phone = false;

  /**
   * `true` if WellnessLiving identifies this is a top choice location, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_top_choice = false;

  /**
   * The key of the business this location belongs to.
   *
   * @get result
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the business type this location belongs to.
   *
   * @get result
   * @type {string}
   */
  this.k_business_type = "0";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Timezone primary key in {@link \AGeoTimezoneSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_timezone = undefined;

  /**
   * The physical address of the location.
   *
   * @get result
   * @type {string}
   */
  this.s_address = undefined;

  /**
   * A string that can be used in navigator programs.
   *
   * @get result
   * @type {string}
   */
  this.s_map = undefined;

  /**
   * The phone number for the location.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * The system name of the time zone.
   *
   * @get result
   * @type {string}
   */
  this.s_timezone = undefined;

  /**
   * The title of the location.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * The address of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_address_individual = undefined;

  /**
   * The special system name, which can be used in custom location links.
   * This is usually based on name of the location, with extra characters removed.
   * However, it can also can be fully customized.
   *
   * @get result
   * @type {string}
   */
  this.text_alias = undefined;

  /**
   * The name of the business type.
   *
   * @get result
   * @type {string}
   */
  this.text_business_type = "";

  /**
   * The city name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_city = undefined;

  /**
   * The country name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_country = undefined;

  /**
   * The name of the industry of the business.
   *
   * @get result
   * @see RsHomeTourSid
   * @type {string}
   */
  this.text_industry = "";

  /**
   * The email address.
   *
   * @get result
   * @type {string}
   */
  this.text_mail = undefined;

  /**
   * Postal code of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_postal = undefined;

  /**
   * The region name of the location.
   *
   * @get result
   * @type {string}
   */
  this.text_region = undefined;

  /**
   * Region 2 or 3 letters abbreviation of the location. Can be empty, if abbreviation for region is not set.
   *
   * @get result
   * @type {string}
   */
  this.text_region_code = undefined;

  /**
   * The Facebook URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_facebook = "";

  /**
   * The Instagram URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_instagram = "";

  /**
   * The Linked In URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_linkedin = "";

  /**
   * The URL of the location in Google Maps.
   *
   * @get result
   * @type {string}
   */
  this.url_map = undefined;

  /**
   * The URL to the location entry in the WellnessLiving Explorer listing.
   *
   * @get result
   * @type {string}
   */
  this.url_microsite = undefined;

  /**
   * The website URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_site = "";

  /**
   * The URL of the location's Twitter account.
   *
   * @get result
   * @type {string}
   */
  this.url_twitter = "";

  /**
   * The URL to the business's Client Web App.
   *
   * @get result
   * @type {string}
   */
  this.url_web = "";

  /**
   * The YouTube URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_youtube = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_View_ViewModel);

/**
 * @inheritDoc
 */
Wl_Location_View_ViewModel.prototype.config=function()
{
  return {"a_field": {"a_age": {"get": {"result": true}},"a_amenities": {"get": {"result": true}},"a_level": {"get": {"result": true}},"a_logo": {"get": {"result": true}},"a_slide": {"get": {"result": true}},"a_work": {"get": {"result": true}},"f_latitude": {"get": {"result": true}},"f_longitude": {"get": {"result": true}},"html_description_full": {"get": {"result": true}},"html_description_preview": {"get": {"result": true}},"i_logo_height": {"get": {"get": true}},"i_logo_width": {"get": {"get": true}},"id_industry": {"get": {"result": true}},"is_phone": {"get": {"result": true}},"is_top_choice": {"get": {"result": true}},"k_business": {"get": {"result": true}},"k_business_type": {"get": {"result": true}},"k_location": {"get": {"get": true}},"k_timezone": {"get": {"result": true}},"s_address": {"get": {"result": true}},"s_map": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"s_timezone": {"get": {"result": true}},"s_title": {"get": {"result": true}},"text_address_individual": {"get": {"result": true}},"text_alias": {"get": {"result": true}},"text_business_type": {"get": {"result": true}},"text_city": {"get": {"result": true}},"text_country": {"get": {"result": true}},"text_industry": {"get": {"result": true}},"text_mail": {"get": {"result": true}},"text_postal": {"get": {"result": true}},"text_region": {"get": {"result": true}},"text_region_code": {"get": {"result": true}},"url_facebook": {"get": {"result": true}},"url_instagram": {"get": {"result": true}},"url_linkedin": {"get": {"result": true}},"url_map": {"get": {"result": true}},"url_microsite": {"get": {"result": true}},"url_site": {"get": {"result": true}},"url_twitter": {"get": {"result": true}},"url_web": {"get": {"result": true}},"url_youtube": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Location_View_ViewModel.instanceGet
 * @param {string} k_location The location key.
 * @returns {Wl_Location_View_ViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */