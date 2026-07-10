/**
 * Returns current session environment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Session_EnvironmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of businesses which are available in given application.
   * `null` for default application.
   *
   * @get result
   * @type {?string[]}
   */
  this.a_business = null;

  /**
   * List of businesses keys, which are connected to franchise.
   * `null` if current business is not part of franchise.
   *
   * @get result
   * @type {?string[]}
   */
  this.a_business_franchise_all = null;

  /**
   * List of business franchisee keys.
   * Can be limited by levels to which a user can view/access in frontend. See {@link Wl_Business_Franchise_FranchiseSwitchSid}.
   * `null` if current business is not part of franchise or if 'Allow clients to switch between franchise locations' is OFF.
   *
   * @get result
   * @type {?string[]}
   */
  this.a_business_franchisee = null;

  /**
   * @typedef {{}} Wl_Session_EnvironmentModel_a_payment_alert
   * @property {number} i_duration Time left in seconds. `null` if business account is not created or if service interruption dates aren't specified.
   * @property {boolean} is_alert Determines whether to show an alert. Alert should be shown only once per session.
   * @property {boolean} is_churn Determines whether the business is churned.
   * @property {string} url_billing Link to business billing page on the web.
   */

  /**
   * Payment alert data. `null` if user is not logged or none businesses are available for user, or if it's not backend.
   * Otherwise, contains data:
   *
   * @get result
   * @type {?Wl_Session_EnvironmentModel_a_payment_alert}
   */
  this.a_payment_alert = null;

  /**
   * @typedef {{}} Wl_Session_EnvironmentModel_a_splash_screen_a_background
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
   * @typedef {{}} Wl_Session_EnvironmentModel_a_splash_screen_a_gradient
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
   * @typedef {{}} Wl_Session_EnvironmentModel_a_splash_screen_a_image
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
   * @typedef {{}} Wl_Session_EnvironmentModel_a_splash_screen
   * @property {Wl_Session_EnvironmentModel_a_splash_screen_a_background} a_background Background image.
   * @property {Wl_Session_EnvironmentModel_a_splash_screen_a_gradient} a_gradient Background color.
   * @property {Wl_Session_EnvironmentModel_a_splash_screen_a_image} a_image Logo image.
   */

  /**
   * Settings of splash screen customization for business:
   *
   *
   * `null` if splash screen in not customized for business.
   *
   * @get result
   * @type {?Wl_Session_EnvironmentModel_a_splash_screen}
   */
  this.a_splash_screen = null;

  /**
   * Local date with time now in current location {@link Wl_Session_EnvironmentModel.k_location}.
   *
   * @get result
   * @type {string}
   */
  this.dtl_now = undefined;

  /**
   * Whether exists form to confirm during registration process.
   *
   * @get result
   * @type {boolean}
   */
  this.has_form_quiz = undefined;

  /**
   * Whether the merchant is configured for the client's home location or for business {@link Wl_Session_EnvironmentModel.k_business}.
   *
   * @get result
   * @type {boolean}
   */
  this.has_merchant = undefined;

  /**
   * Currency ID. One of {@link RsCurrencySid} constants.
   *
   * @get result
   * @see RsCurrencySid
   * @type {number}
   */
  this.id_currency = undefined;

  /**
   * Business locale. One of {@link Core_Locale_LocaleSid} constants.
   *
   * @get result
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Current place ID. One of {@link RsPlaceSid} constants. For the Application is determined by the template. For the Web version of the site is determined by the current session.
   *
   * @get result
   * @see RsPlaceSid
   * @type {number}
   */
  this.id_place = undefined;

  /**
   * Achieve subscription plan ID.
   *
   * One of {@link Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionSid} constants.
   *
   * @get result
   * @see Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionSid
   * @type {number}
   */
  this.id_plan_achieve = undefined;

  /**
   * Base subscription plan ID.
   *
   * @get result
   * @see Wl_Business_Account_Subscription_Base_BaseSubscriptionSid
   * @type {number}
   */
  this.id_plan_base = undefined;

  /**
   * Marketing subscription plan ID.
   *
   * @get result
   * @see Wl_Business_Account_Subscription_MarketingSuite_MarketingSuiteSubscriptionSid
   * @type {number}
   */
  this.id_plan_marketing = undefined;

  /**
   * Current travel mode ID in business.
   *
   * `null` if travel mode is disabled.
   *
   * @get result
   * @see Wl_Business_Franchise_Travel_TravelModeSid
   * @type {?number}
   */
  this.id_travel_mode = null;

  /**
   * Whether AI agent chat (CAASI) is available for current business.
   * * `true` if chat is available
   * * `false` if chat is not available
   *
   * @get result
   * @type {boolean}
   */
  this.is_aiagent_chat = undefined;

  /**
   * Determines current business has custom application. If `true` application has custom application, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_application_custom = undefined;

  /**
   * `true` if user must be redirected to billing page to enter credit card; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_billing_required = undefined;

  /**
   * `true` if clients must sign in to book an appointment; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_booking_appointment_authorize = undefined;

  /**
   * `true` if user must be redirected from booking page to billing page to enter credit card;
   *   `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_booking_required_billing = undefined;

  /**
   * Determines if a business has multiple locations.
   *
   * @get result
   * @type {boolean}
   */
  this.is_business_location_multiple = undefined;

  /**
   * `true` id profile details can be shared with the new location while adding a client that already has an existing
   *   profile in franchise, `false` - otherwise.
   *
   * * `null` if not franchise.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_client_profile_share = null;

  /**
   * If clients are allowed to select a date and time, then the available asset while asset booking.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_select_date_asset = undefined;

  /**
   * `true` - user has unassigned contract(s); `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract = undefined;

  /**
   * `true` is allowed relationship to display, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_family_relation_display_client = undefined;

  /**
   * `true` - if business is franchisor; `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_franchisor = undefined;

  /**
   * `true` to use page of geographical search of locations (possible for franchise case only); `false` to use simple select of locations from list.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_geo = undefined;

  /**
   * `true` - in backend application user must be redirected to location selection; `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_redirect = undefined;

  /**
   * `true` if user must be redirected to profile page to enter mandatory fields; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_profile_required = undefined;

  /**
   * Indicates whether to obtain customer required information such as required profile data and waiver. Mostly used for selenium tests running purposes to avoid creating profile filled with required
   * information. If `true` all required information must be obtained before client will be allowed to use application, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request_required_information = undefined;

  /**
   * `true` if you want the API to switch to staff back office; `false` otherwise.
   *
   * @put post
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * `true` if user is traveler; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * `true` if it is required to sign online waiver, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_waiver_required = undefined;

  /**
   * Key of business to be set as current.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Not `null` for franchise application only.
   *
   * @get result
   * @type {?string}
   */
  this.k_business_franchisor = null;

  /**
   * Currency key.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Key of location to be set as current.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Application ID.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.s_application_id = "";

  /**
   * Key to check session in a case of business change.
   *
   * @put post
   * @type {string}
   */
  this.s_business_change = "";

  /**
   * Country code for business locale {@link Core_Locale_LocaleSid} constants.
   *
   * @get result
   * @type {string}
   */
  this.text_country_code = undefined;

  /**
   * Current user key. `null` if user is not signed in.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  /**
   * Business login URL.
   *
   * `null` if user is not logged in or none businesses are available for user.
   *
   * @get result
   * @type {?string}
   */
  this.url_login = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Session_EnvironmentModel);

/**
 * @inheritDoc
 */
Wl_Session_EnvironmentModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"result":true}},"a_business_franchise_all":{"get":{"result":true}},"a_business_franchisee":{"get":{"result":true}},"a_payment_alert":{"get":{"result":true}},"a_splash_screen":{"get":{"result":true}},"dtl_now":{"get":{"result":true}},"has_form_quiz":{"get":{"result":true}},"has_merchant":{"get":{"result":true}},"id_currency":{"get":{"result":true}},"id_locale":{"get":{"result":true}},"id_place":{"get":{"result":true}},"id_plan_achieve":{"get":{"result":true}},"id_plan_base":{"get":{"result":true}},"id_plan_marketing":{"get":{"result":true}},"id_travel_mode":{"get":{"result":true}},"is_aiagent_chat":{"get":{"result":true}},"is_application_custom":{"get":{"result":true}},"is_billing_required":{"get":{"result":true}},"is_booking_appointment_authorize":{"get":{"result":true}},"is_booking_required_billing":{"get":{"result":true}},"is_business_location_multiple":{"get":{"result":true}},"is_client_profile_share":{"get":{"result":true}},"is_client_select_date_asset":{"get":{"result":true}},"is_contract":{"get":{"result":true}},"is_family_relation_display_client":{"get":{"result":true}},"is_franchisor":{"get":{"result":true}},"is_location_geo":{"get":{"result":true}},"is_location_redirect":{"get":{"result":true}},"is_profile_required":{"get":{"result":true}},"is_request_required_information":{"get":{"result":true}},"is_staff":{"put":{"post":true}},"is_traveller":{"get":{"result":true}},"is_waiver_required":{"get":{"result":true}},"k_business":{"get":{"result":true},"put":{"post":true}},"k_business_franchisor":{"get":{"result":true}},"k_currency":{"get":{"result":true}},"k_location":{"get":{"result":true},"put":{"post":true}},"s_application_id":{"get":{"get":true},"put":{"get":true}},"s_business_change":{"put":{"post":true}},"text_country_code":{"get":{"result":true}},"uid":{"get":{"result":true}},"url_login":{"get":{"result":true}}}};
};

/**
 * Returns current session environment.
 *
 * Determines the current business, location, and user for the session, taking into account the
 * application type, franchise settings, and multi-datacenter routing, and returns the resulting
 * environment data used to bootstrap the client application.
 *
 * @function
 * @name Wl_Session_EnvironmentModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves current location of business for current user.
 *
 * Switches the current business and location for the session, forwarding the request to another
 * data center when the target business is hosted elsewhere.
 *
 * @function
 * @name Wl_Session_EnvironmentModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
