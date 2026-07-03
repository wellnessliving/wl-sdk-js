/**
 * Gets location lists for a bulk of businesses.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_ListBulkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_business";

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location
   * @property {number} f_latitude The latitude coordinate.
   * @property {number} f_longitude The longitude coordinate.
   * @property {number} f_rate The location rate.
   * @property {number} i_order The order number.
   * @property {string} k_business The business's primary key.
   * @property {string} k_location The location's primary key.
   * @property {string} s_title The location title.
   * @property {string} text_address The full location address.
   * @property {string} url_logo The location logo.
   */

  /**
   * Short-form information about locations.
   *
   * Keys refer to location primary keys. Values refer to sub-arrays with the next keys:
   *
   * @get result
   * @type {Wl_Location_ListBulkModel_a_location}
   */
  this.a_location = undefined;

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location_full_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} s_url The URL to the image.
   */

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location_full_a_slide
   * @property {number} i_height Height.
   * @property {number} i_width Width.
   * @property {string} url_preview URL to image preview.
   * @property {string} url_slide URL to full image.
   */

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location_full_a_work
   * @property {string} s_end The time of day end in MySQL format.
   * @property {string} s_start The time of day start in MySQL format.
   */

  /**
   * @typedef {{}} Wl_Location_ListBulkModel_a_location_full
   * @property {number[]} a_age A list of ages that are permitted for visiting this location.
   * @property {number[]} a_amenities A list of facilities that are available in this location.
   * @property {string[]} a_level A list of levels that are suitable for visiting this location.
   * @property {Wl_Location_ListBulkModel_a_location_full_a_logo} a_logo Information about the location logo used in WellnessLiving:
   * @property {Wl_Location_ListBulkModel_a_location_full_a_slide} a_slide A list of the location images. Every element has the following keys:
   * @property {Wl_Location_ListBulkModel_a_location_full_a_work} a_work The hours of operation for the location. Fields are numbers representing specific days (1 is Monday, 7 is Sunday). Values are objects with the next fields:
   * @property {?string} dtu_check The date when the location actuality was last checked. `null` if the location has never been checked. Set only in {@link Wl_Location_ListBulkModel}, otherwise always `null`.
   * @property {string} dtu_create The date when the location was created.
   * @property {number} f_latitude The latitude coordinate of the location.
   * @property {number} f_longitude The longitude coordinate of the location.
   * @property {string} html_description_full The full description of the location.
   * @property {string} html_description_preview A shorter description of the location. A preview of {@link Wl_Location_View_ViewModel.html_description_full}.
   * @property {number} i_logo_height Maximum location image height.
   * @property {number} i_logo_width Maximum location image width.
   * @property {?number} id_industry List of different types for landing pages based on business types.
   * @property {boolean} is_phone `true` if to display phone number on location page. `false` otherwise.
   * @property {boolean} is_top_choice `true` if WellnessLiving identifies this is a top choice location, `false` otherwise.
   * @property {string} k_business The key of the business this location belongs to.
   * @property {string} k_business_type The key of the business type this location belongs to.
   * @property {string} k_location The location key.
   * @property {string} k_timezone The timezone.
   * @property {string} s_address The physical address of the location.
   * @property {string} s_map A string that can be used in navigator programs.
   * @property {string} s_phone The phone number for the location.
   * @property {string} s_timezone The system name of the time zone.
   * @property {string} s_title The title of the location.
   * @property {string} text_address_individual The address of the location.
   * @property {string} text_alias The special system name, which can be used in custom location links. This is usually based on name of the location, with extra characters removed. However, it can also can be fully customized.
   * @property {string} text_business_type The name of the business type.
   * @property {string} text_city The city name of the location.
   * @property {string} text_country The country name of the location.
   * @property {string} text_industry The name of the industry of the business.
   * @property {string} text_mail The email address.
   * @property {string} text_postal Postal code of the location.
   * @property {string} text_region The region name of the location.
   * @property {string} text_region_code Region 2 or 3 letters abbreviation of the location. Can be empty, if abbreviation for region is not set.
   * @property {string} url_facebook The Facebook URL of the location.
   * @property {string} url_instagram The Instagram URL of the location.
   * @property {string} url_linkedin The Linked In URL of the location.
   * @property {string} url_map The URL of the location in Google Maps.
   * @property {string} url_microsite The URL to the location entry in the WellnessLiving Explorer listing.
   * @property {string} url_site The website URL of the location.
   * @property {string} url_twitter The URL of the location's Twitter account.
   * @property {string} url_web The URL to the business's Client Web App.
   * @property {string} url_youtube The YouTube URL of the location.
   */

  /**
   * A list of models with full information about each location.
   *
   * @get result
   * @type {Wl_Location_ListBulkModel_a_location_full[]}
   */
  this.a_location_full = undefined;

  /**
   * The ID of the directory if locations should be filtered by enabling directory integration.
   *
   * `0` if a directory filter isn't required.
   *
   * @get get
   * @see RsProjectSid
   * @type {number}
   */
  this.id_directory = 0;

  /**
   * A list of businesses. Business primary keys are serialized with JSON.
   *
   * Empty string if you need all locations in the system.
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  /**
   * A list of locations. Location primary keys are serialized with JSON.
   *
   * @get get
   * @type {string}
   */
  this.s_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListBulkModel);

/**
 * @inheritDoc
 */
Wl_Location_ListBulkModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"a_location_full":{"get":{"result":true}},"id_directory":{"get":{"get":true}},"s_business":{"get":{"get":true}},"s_location":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Location_ListBulkModel.instanceGet
 * @param {string} s_business A list of businesses. Business primary keys are serialized with JSON. Empty string if you need all locations in the system.
 * @returns {Wl_Location_ListBulkModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets location lists for a bulk of businesses.
 *
 * Accepts a JSON-encoded list of business keys, a JSON-encoded list of location keys, or both, and returns
 * short-form location data alongside full location detail objects. Optionally filters results to only
 * locations that have a specific directory integration enabled.
 *
 * @function
 * @name Wl_Location_ListBulkModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
