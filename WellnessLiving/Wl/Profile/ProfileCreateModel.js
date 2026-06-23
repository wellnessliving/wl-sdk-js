/**
 * Creates a new client profile with the provided personal details in the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_ProfileCreateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of intent identifiers. Each element is one of {@link Wl_Login_Member_Intents_MemberIntentsSid} constants.
   *
   * Available only for leads added by CAASI agent.
   *
   * @post post
   * @type {number[]}
   */
  this.a_intents = undefined;

  /**
   * Date of the user's birthday in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_birthday = "";

  /**
   * Class to work with gender string identifiers.
   *
   * Values:
   * - 2 (`FEMALE`): Female gender.
   * - 1 (`MALE`): Male gender.
   * - 3 (`UNDEFINED`): Gender is undefined in cases where the user preferred not to identify their gender.
   *
   * @post post
   * @see Wl_Gender_GenderSid
   * @type {number}
   */
  this.id_gender = 0;

  /**
   * The source of a visit.
   *
   * Last used ID: 30.
   *
   * Values:
   * - 28 (`API`): Action made via Api Endpoint. Default for leads created via API, unless overridden.
   * - 21 (`AZURE`): Registered through `Azure`.
   * - 23 (`CENTRED`): Visit has been created by `CENTRED`.
   * - 8 (`CLASSPASS_BOOKING`): Visit has been created by `ClassPass`.
   * - 22 (`COLLECTIONS`): Debt paid via collections.
   * - 26 (`COLLECTIONS_FUTURE`): Debt paid via collections.
   * - 27 (`CONCERTO`): Action from Concerto.
   * - 18 (`EMAIL`): Action made via email.
   * - 20 (`FACEBOOK`): Indicating that the source is Facebook.
   * - 30 (`GO_HIGH_LEVEL`): Action from Go High Level.
   * - 19 (`GOOGLE`): Indicating that the source is Google.
   * - 7 (`GOOGLE_BOOKING`): Visit has been created by Google Booking Service.
   * - 14 (`GYMPASS_BOOKING`): Visit has been created by `GymPass`.
   * - 5 (`IMPORT`): Visit was created during import.
   * - 12 (`MICROSITE`): Action made via microsite.
   *
   *   It is also names as directory listing.
   * - 24 (`MICROSOFT`): Indicating that the source is Microsoft.
   * - 13 (`MY_PRESENCE_SITE`): Client booked session on My Presence Site.
   * - 17 (`SMS`): Action made via SMS.
   * - 4 (`SPA_BACKEND`): Staff booked session from spa backend.
   * - 3 (`SPA_FRONTEND`): Client booked session from spa frontend.
   * - 10 (`SYSTEM`): Created by system.
   * - 6 (`UNDEFINED`): Means that we did not define mode.
   * - 16 (`WEB_APP_ATTENDANCE`): Client booked session from Attendance Web App.
   * - 15 (`WEB_APP_CHECK_IN`): Client checked-in for the session through Check-In Web App.
   * - 2 (`WEB_BACKEND`): Staff booked session for client from website backend.
   * - 1 (`WEB_FRONTEND`): Client booked session from website frontend.
   * - 11 (`WIDGET`): Action made via widget (purchase, book etc).
   * - 25 (`ZAPIER`): Action from Zapier.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_lead_source = 0;

  /**
   * List of member vaccination statuses.
   *
   * Last used ID: 4
   *
   * Values:
   * - 3 (`FULL`): Fully Vaccinated.
   * - 1 (`NONE`): Unvaccinated.
   * - 2 (`PARTIAL`): Partially Vaccinated.
   * - 4 (`UNKNOWN`): Unknown.
   *
   * @post post
   * @see Wl_Login_Member_VaccinationStatus_VaccinationStatusSid
   * @type {number}
   */
  this.id_vaccination_status = 0;

  /**
   * `true` means to add user to the legacy lead report.
   * `false` means to not add user to the legacy lead report.
   *
   * Note, that this setting does not impact new Lead Management report, which will always include new user.
   * Also lead capture marketing notification will never be triggered with this endpoint.
   *
   * @post post
   * @type {boolean}
   */
  this.is_lead = false;

  /**
   * The key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the lead source.
   *
   * Empty string if not specified.
   *
   * @post post
   * @type {string}
   */
  this.k_lead_source = "";

  /**
   * The key of the home location.
   *
   * @post post
   * @type {string}
   */
  this.k_location_home = "";

  /**
   * The address of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_address = "";

  /**
   * First name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_firstname = "";

  /**
   * Last name of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_lastname = "";

  /**
   * Email of the user.
   * Required if `text_phone` not provided.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Phone of the user.
   * Required if `text_mail` not provided.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * Home phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone_home = "";

  /**
   * Work phone of the user.
   *
   * @post post
   * @type {string}
   */
  this.text_phone_work = "";

  /**
   * The key of the user.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * Referrer user key.
   *
   * Empty string if not specified.
   *
   * @post post
   * @type {string}
   */
  this.uid_referrer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_ProfileCreateModel);

/**
 * @inheritDoc
 */
Wl_Profile_ProfileCreateModel.prototype.config=function()
{
  return {"a_field":{"a_intents":{"post":{"post":true}},"dt_birthday":{"post":{"post":true}},"id_gender":{"post":{"post":true}},"id_lead_source":{"post":{"post":true}},"id_vaccination_status":{"post":{"post":true}},"is_lead":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_lead_source":{"post":{"post":true}},"k_location_home":{"post":{"post":true}},"text_address":{"post":{"post":true}},"text_firstname":{"post":{"post":true}},"text_lastname":{"post":{"post":true}},"text_mail":{"post":{"post":true}},"text_phone":{"post":{"post":true}},"text_phone_home":{"post":{"post":true}},"text_phone_work":{"post":{"post":true}},"uid":{"post":{"result":true}},"uid_referrer":{"post":{"post":true}}}};
};

/**
 * Creates a new client profile with the provided personal details in the specified business.
 *
 * Creates or retrieves a user account by email or phone, saves personal details such as name,
 * address, phones, birthday, gender, and vaccination status, registers the user in the
 * business, and optionally adds them to the lead report and sets intents.
 *
 * @function
 * @name Wl_Profile_ProfileCreateModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
