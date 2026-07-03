/**
 * Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_DataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * A list of all business services and their availability data.
   * This is presented as an array, where keys are SIDs from {@link Wl_Service_ServiceSid} and values are Boolean.
   * If `true`, at least one service is enabled in the business. Otherwise, this will be `false`.
   *
   * @get result
   * @type {number[]}
   */
  this.a_service_list = undefined;

  /**
   * The list of predefined tips in percentages.
   *
   * @get result
   * @type {number[]}
   */
  this.a_tip_predefine = undefined;

  /**
   * The maximum height of the business image (in pixels).
   *
   * @get get
   * @type {number}
   */
  this.i_logo_height = 0;

  /**
   * The maximum width of the business image (in pixels).
   *
   * @get get
   * @type {number}
   */
  this.i_logo_width = 0;

  /**
   * A list of client booking flow types.
   *
   * Last ID: 6.
   *
   * Values:
   * - 6 (`EDUCATION`): Musician schools.
   * - 3 (`HEALTH`): Traditional medicine
   * - 2 (`RECREATION`): Spa saloons.
   * - 1 (`SPORT`): Yoga and Fitness studios and gyms.
   *
   * @get result
   * @type {number}
   */
  this.id_category = undefined;

  /**
   * Business status for managing claim request behavior.
   *
   * Last used ID: 4
   *
   * Values:
   * - 4 (`CHURN`): Business HAD a contract with WL, but decided not to continue it, i.e. it is a churned business, or a business
   *   with the trial expired.
   * - 3 (`CUSTOMER`): Business has a contract with WL, be it a trial (with all fields updated and actual), or a subscription.
   * - 1 (`PROSPECT`): Business is not a WL client and never was, i.e. it is a true prospect business.
   * - 2 (`UNVERIFY`): Business claiming process started, the contact information was verified, the trial has started, but company
   *   information wasn’t yet updated.
   *
   * @get result
   * @type {number}
   */
  this.id_claim_status = undefined;

  /**
   * A list of currencies.
   *
   * Currency constant names must comply with the standard `ISO 4217` for correct integration with other services.
   *
   * Values:
   * - 11 (`AED`): United Arab Emirates dirham.
   * - 6 (`AUD`): Australian dollar.
   * - 18 (`BMD`): Bermudian Dollar.
   * - 19 (`BSD`): Bahamian dollar.
   * - 4 (`CAD`): Canadian dollar.
   * - 8 (`EGP`): Egypt Pound.
   * - 13 (`EUR`): Euro.
   * - 3 (`GBP`): British pound.
   * - 14 (`KWD`): Kuwaiti dinar.
   * - 5 (`KYD`): Cayman Islands dollar.
   * - 16 (`MUR`): Mauritian Rupee.
   * - 10 (`NZD`): New Zealand Dollar.
   * - 12 (`PHP`): Philippines Pesco.
   * - 15 (`SAR`): Saudi Riyal.
   * - 20 (`SGD`): Singapore dollar.
   * - 2 (`UNKNOWN`): Unknown code.
   *
   *   Used when currency is not specified or is not known.
   * - 1 (`USD`): US dollars.
   * - 17 (`XOF`): West African CFA franc.
   *
   *   Is used in Senegal.
   * - 7 (`ZAR`): South African rand.
   *
   * @get result
   * @type {number}
   */
  this.id_currency = undefined;

  /**
   * A list of locales.
   *
   * Last used ID: 21
   *
   * Values:
   * - 4 (`AUSTRALIA`): Australia.
   * - 20 (`BAHAMAS`): Bahamas.
   * - 19 (`BERMUDA`): Bermuda.
   * - 2 (`CANADA`): Canada.
   * - 5 (`CAYMAN`): Cayman Islands.
   * - 13 (`CYPRUS`): Cyprus.
   * - 8 (`EGYPT`): Egypt.
   * - 18 (`IRELAND`): Republic of Ireland.
   * - 14 (`KUWAIT`): Kuwait
   * - 16 (`MAURITIUS`): Republic of Mauritius.
   * - 9 (`NEVERLAND`): A special locale that can be used for testing or a business situated in an unknown region.
   * - 10 (`NEW_ZEALAND`): New Zealand.
   * - 12 (`PHILIPPINES`): Philippines.
   * - 15 (`SAUDI_ARABIA`): Saudi Arabia.
   * - 17 (`SENEGAL`): Senegal
   * - 21 (`SINGAPORE`): Singapore.
   * - 6 (`SOUTH_AFRICA`): South Africa.
   * - 11 (`UAE`): United Arab Emirates.
   * - 3 (`UK`): United Kingdom.
   * - 1 (`USA`): United States of America.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Types of the possible ranks in different business.
   * For example, there are belts (white, yellow, black, etc.) in Martial Arts.
   *
   * Values:
   * - 1 (`BELT`): Belts for Martial Arts.
   *
   * @get result
   * @type {?number}
   */
  this.id_rank_type = null;

  /**
   * List of available data center regions.
   *
   * The business independently chooses the data center region in which it will be registered.
   * The choice of the data center region does not depend on the actual location of the business.
   * The region determines the data center in which the Wellnessliving system operates.
   * The region should be chosen based on the access speed to the data center from business clients.
   * Business from any region can be registered in any data center, but only in one.
   *
   * Last ID: 2.
   *
   * Values:
   * - 2 (`AP_SOUTHEAST_2`): Sydney, Australia.
   * - 1 (`US_EAST_1`): North Virginia, USA.
   *
   * @get result
   * @type {number}
   */
  this.id_region = undefined;

  /**
   * Determines whether surcharges to client payments are enabled in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_apply_surcharge = undefined;

  /**
   * `true` if business is a franchisor or franchisee.
   *
   * @get result
   * @type {boolean}
   */
  this.is_franchise = undefined;

  /**
   * Determines whether the business has multiple locations (including inactive locations).
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_multiple = undefined;

  /**
   * `true` - clients of the business can select a custom time zone in their profile.
   *
   * `false` - the location or business time zone is used.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_timezone = undefined;

  /**
   * If `true`, clients can enter the progress log. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_client = undefined;

  /**
   * If `true`, verification of the progress log by a staff member is required. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_progress_verify = undefined;

  /**
   * Determines whether quizzes are available in the business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_quiz_available = undefined;

  /**
   * Determines if the business operates in testing mode.
   *
   * @get result
   * @type {boolean}
   */
  this.is_test = undefined;

  /**
   * If `true`, tips are available in the business. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = undefined;

  /**
   * If `true`, the business has the "No tip" option displayed. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip_deny = undefined;

  /**
   * If `true`, the client must sign after selecting the tip. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip_sign = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The franchisor business key. This will be empty if this business is the franchisor or not in a franchise.
   *
   * @get result
   * @type {string}
   */
  this.k_business_franchisor = undefined;

  /**
   * The business key obtained by the security token [DataApi](/Wl/Business/Data.json).
   * This can be used on the client side if authorization token should be used instead of the business key
   * (the business key isn't available).
   *
   * @get result
   * @type {string}
   */
  this.k_business_token = undefined;

  /**
   * Key of the business type.
   *
   * @get result
   * @type {string}
   */
  this.k_business_type = undefined;

  /**
   * The currency key of the given business, or the system currency if the business didn't pass.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * The reply-to email address.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_mail = undefined;

  /**
   * The reply-to business name.
   *
   * @get result
   * @type {string}
   */
  this.s_reply_name = undefined;

  /**
   * The business address.
   *
   * @get result
   * @type {string}
   */
  this.text_office_address = undefined;

  /**
   * The business title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The authorization token.
   * This may be used instead of [DataApi](/Wl/Business/Data.json) to
   * identify a business.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * The URL for the online store.
   *
   * @get result
   * @type {string}
   */
  this.url_catalog = undefined;

  /**
   * The URL for client sign in.
   *
   * @get result
   * @type {string}
   */
  this.url_enter = undefined;

  /**
   * The Facebook page.
   *
   * @get result
   * @type {string}
   */
  this.url_facebook = undefined;

  /**
   * The Google+ page.
   *
   * @get result
   * @type {string}
   */
  this.url_google = undefined;

  /**
   * URL of the home tour page related to the business type.
   *
   * @get result
   * @type {string}
   */
  this.url_home_tour = undefined;

  /**
   * The Instagram page.
   *
   * @get result
   * @type {string}
   */
  this.url_instagram = undefined;

  /**
   * The `LinkedIn` profile.
   *
   * @get result
   * @type {string}
   */
  this.url_linkedin = undefined;

  /**
   * The logo URL.
   *
   * @get result
   * @type {string}
   */
  this.url_logo = undefined;

  /**
   * The image stub (in cases where the business logo isn't loaded).
   *
   * @get result
   * @type {string}
   */
  this.url_logo_empty = undefined;

  /**
   * The URL to redeem gift card.
   *
   * @get result
   * @type {string}
   */
  this.url_redeem = undefined;

  /**
   * The URL for the client review page.
   *
   * @get result
   * @type {string}
   */
  this.url_review = undefined;

  /**
   * The URL for the client web app (schedule).
   *
   * @get result
   * @type {string}
   */
  this.url_schedule = undefined;

  /**
   * The URL for client sign up.
   *
   * @get result
   * @type {string}
   */
  this.url_signup = undefined;

  /**
   * The Twitter page.
   *
   * @get result
   * @type {string}
   */
  this.url_twitter = undefined;

  /**
   * The business website.
   *
   * @get result
   * @type {string}
   */
  this.url_website = undefined;

  /**
   * The YouTube website.
   *
   * @get result
   * @type {string}
   */
  this.url_youtube = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_DataModel);

/**
 * @inheritDoc
 */
Wl_Business_DataModel.prototype.config=function()
{
  return {"a_field":{"a_service_list":{"get":{"result":true}},"a_tip_predefine":{"get":{"result":true}},"i_logo_height":{"get":{"get":true}},"i_logo_width":{"get":{"get":true}},"id_category":{"get":{"result":true}},"id_claim_status":{"get":{"result":true}},"id_currency":{"get":{"result":true}},"id_locale":{"get":{"result":true}},"id_rank_type":{"get":{"result":true}},"id_region":{"get":{"result":true}},"is_apply_surcharge":{"get":{"result":true}},"is_franchise":{"get":{"result":true}},"is_location_multiple":{"get":{"result":true}},"is_profile_timezone":{"get":{"result":true}},"is_progress_client":{"get":{"result":true}},"is_progress_verify":{"get":{"result":true}},"is_quiz_available":{"get":{"result":true}},"is_test":{"get":{"result":true}},"is_tip":{"get":{"result":true}},"is_tip_deny":{"get":{"result":true}},"is_tip_sign":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_business_franchisor":{"get":{"result":true}},"k_business_token":{"get":{"result":true}},"k_business_type":{"get":{"result":true}},"k_currency":{"get":{"result":true}},"s_reply_mail":{"get":{"result":true}},"s_reply_name":{"get":{"result":true}},"text_office_address":{"get":{"result":true}},"text_title":{"get":{"result":true}},"text_token":{"get":{"get":true}},"url_catalog":{"get":{"result":true}},"url_enter":{"get":{"result":true}},"url_facebook":{"get":{"result":true}},"url_google":{"get":{"result":true}},"url_home_tour":{"get":{"result":true}},"url_instagram":{"get":{"result":true}},"url_linkedin":{"get":{"result":true}},"url_logo":{"get":{"result":true}},"url_logo_empty":{"get":{"result":true}},"url_redeem":{"get":{"result":true}},"url_review":{"get":{"result":true}},"url_schedule":{"get":{"result":true}},"url_signup":{"get":{"result":true}},"url_twitter":{"get":{"result":true}},"url_website":{"get":{"result":true}},"url_youtube":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Business_DataModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns detailed information about the specified business, including locale, franchise status, services, tips, social URLs, and logo.
 *
 * Used to bootstrap client-facing pages and widgets that need to know the full business profile: which
 * services are enabled, tip and progress log settings, franchise relationship, social media links, and
 * deep links to the schedule, catalog, and sign-up pages. Accepts either a business key or a location
 * request token for widget contexts where the key is not available.
 *
 * @function
 * @name Wl_Business_DataModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
