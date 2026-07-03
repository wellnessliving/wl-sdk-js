/**
 * Returns detailed information about the specified location.
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
   * @type {number[]}
   */
  this.a_age = undefined;

  /**
   * A list of facilities that are available in this location.
   *
   * @get result
   * @type {number[]}
   */
  this.a_amenities = undefined;

  /**
   * A list of levels that are suitable for visiting this location.
   *
   * @get result
   * @type {string[]}
   */
  this.a_level = undefined;

  /**
   * @typedef {{}} Wl_Location_View_ViewModel_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} s_url The URL to the image.
   */

  /**
   * Information about the location logo used in WellnessLiving:
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
  this.f_latitude = undefined;

  /**
   * The longitude coordinate of the location.
   *
   * @get result
   * @type {number}
   */
  this.f_longitude = undefined;

  /**
   * The full description of the location.
   *
   * @get result
   * @type {string}
   */
  this.html_description_full = undefined;

  /**
   * A shorter description of the location. A preview of [ViewApi](/Wl/Location/View/View.json).
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
  this.i_logo_height = 0;

  /**
   * Maximum location image width.
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 0;

  /**
   * List of different types for landing pages based on business types.
   *
   * Last ID: 33
   *
   * Values:
   * - 26 (`BARBERSHOP`): Barbershops.
   * - 24 (`BOOTCAMP`): Boot camps.
   * - 25 (`BOXING`): Boxing studios.
   * - 21 (`BUSINESS_MANAGEMENT`): Special industry free landing page with only contact us form.
   * - 10 (`CLUB`): Health clubs.
   * - 9 (`CROSSFIT`): Affiliate Gym.
   * - 11 (`DANCE`): Dance studios.
   * - 14 (`DENTAL`): Dental studios.
   * - 6 (`FITNESS`): Fitness gyms.
   * - 29 (`FUNCTIONAL_FITNESS`): Functional fitness also known as functional training or functional movement.
   * - 22 (`GYM`): Fitness gyms.
   * - 23 (`HEALTH_CLUB`): Health clubs.
   * - 30 (`INTEGRATIVE_HEALTH_CENTER`): Health and beauty salons at one place.
   * - 8 (`MARTIAL_ART`): Martial arts.
   * - 4 (`MASSAGE`): Massage salons.
   * - 28 (`MEDICAL_SPA`): Massage salons.
   * - 15 (`MEDICINE_ALTERNATIVE`): Alternative medical offices.
   * - 13 (`MEDICINE_TRADITIONAL`): Hospitals and private doctors.
   * - 19 (`MUSIC`): Music schools.
   * - 5 (`PERSONAL_TRAINING`): Personal trainings.
   * - 7 (`PILATES`): Pilates.
   * - 32 (`PLAY_CAFE`): Play cafes.
   * - 18 (`POLE_DANCING`): Pole dancing studios.
   * - 3 (`SALON`): Salons.
   * - 2 (`SPA`): Spa salons.
   * - 17 (`SPINNING`): Spinning.
   * - 33 (`SWIM_SCHOOL`): Swim schools
   * - 31 (`TATTOO`): Tattoo salons.
   * - 12 (`TOUR`): Tours and events.
   * - 20 (`WELLNESS_CENTER`): Wellness Centers
   * - 1 (`YOGA`): Yoga.
   * - 27 (`ZUMBA`): Zumba.
   *
   * @get result
   * @type {?number}
   */
  this.id_industry = null;

  /**
   * `true` if to display phone number on location page. `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_phone = undefined;

  /**
   * `true` if WellnessLiving identifies this is a top choice location, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_top_choice = undefined;

  /**
   * The key of the business this location belongs to.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the business type this location belongs to.
   *
   * @get result
   * @type {string}
   */
  this.k_business_type = undefined;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The timezone.
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
  this.text_business_type = undefined;

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
   * @type {string}
   */
  this.text_industry = undefined;

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
  this.url_facebook = undefined;

  /**
   * The Instagram URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_instagram = undefined;

  /**
   * The Linked In URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_linkedin = undefined;

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
  this.url_site = undefined;

  /**
   * The URL of the location's Twitter account.
   *
   * @get result
   * @type {string}
   */
  this.url_twitter = undefined;

  /**
   * The URL to the business's Client Web App.
   *
   * @get result
   * @type {string}
   */
  this.url_web = undefined;

  /**
   * The YouTube URL of the location.
   *
   * @get result
   * @type {string}
   */
  this.url_youtube = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_View_ViewModel);

/**
 * @inheritDoc
 */
Wl_Location_View_ViewModel.prototype.config=function()
{
  return {"a_field":{"a_age":{"get":{"result":true}},"a_amenities":{"get":{"result":true}},"a_level":{"get":{"result":true}},"a_logo":{"get":{"result":true}},"a_slide":{"get":{"result":true}},"a_work":{"get":{"result":true}},"f_latitude":{"get":{"result":true}},"f_longitude":{"get":{"result":true}},"html_description_full":{"get":{"result":true}},"html_description_preview":{"get":{"result":true}},"i_logo_height":{"get":{"get":true}},"i_logo_width":{"get":{"get":true}},"id_industry":{"get":{"result":true}},"is_phone":{"get":{"result":true}},"is_top_choice":{"get":{"result":true}},"k_business":{"get":{"result":true}},"k_business_type":{"get":{"result":true}},"k_location":{"get":{"get":true}},"k_timezone":{"get":{"result":true}},"s_address":{"get":{"result":true}},"s_map":{"get":{"result":true}},"s_phone":{"get":{"result":true}},"s_timezone":{"get":{"result":true}},"s_title":{"get":{"result":true}},"text_address_individual":{"get":{"result":true}},"text_alias":{"get":{"result":true}},"text_business_type":{"get":{"result":true}},"text_city":{"get":{"result":true}},"text_country":{"get":{"result":true}},"text_industry":{"get":{"result":true}},"text_mail":{"get":{"result":true}},"text_postal":{"get":{"result":true}},"text_region":{"get":{"result":true}},"text_region_code":{"get":{"result":true}},"url_facebook":{"get":{"result":true}},"url_instagram":{"get":{"result":true}},"url_linkedin":{"get":{"result":true}},"url_map":{"get":{"result":true}},"url_microsite":{"get":{"result":true}},"url_site":{"get":{"result":true}},"url_twitter":{"get":{"result":true}},"url_web":{"get":{"result":true}},"url_youtube":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Location_View_ViewModel.instanceGet
 * @param {string} k_location The location key.
 * @returns {Wl_Location_View_ViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns detailed information about the specified location.
 *
 * Returns the full profile of a location, including address, coordinates, timezone, contact information,
 * business hours, logo, slide images, amenities, social media links, and a description.
 *
 * @function
 * @name Wl_Location_View_ViewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
