/**
 * Check if user exists.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Guest_GuestProfileModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_service,k_id,text_mail,text_first_name,text_last_name,dl_birthday";

  /**
   * Guest's birthday in MySQL format. Empty if service not restricted by age.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dl_birthday = "";

  /**
   * The source of a visit.
   *
   * Last used ID: 31.
   *
   * Values:
   * - 28 (`API`): Action made via Api Endpoint. Default for leads created via API, unless overridden.
   * - 21 (`AZURE`): Registered through `Azure`.
   * - 31 (`BRIVO_DOOR_ACCESS`): Visit has been checked-in by Brivo Door Access.
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
  this.id_mode = 0;

  /**
   * Type of the service to book.
   *
   * @get get
   * @post get
   * @see Wl_Service_ServiceSid
   * @type {number}
   */
  this.id_service = 0;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of service to book.
   * Depending on {@link Wl_Book_Process_Guest_GuestProfileModel.id_service} value:,
   * <ul>
   *     <li>{@link Wl_Service_ServiceSid} - class key. </li>
   *     <li>{@link Wl_Service_ServiceSid} - service key.</li>
   *     <li>{@link Wl_Service_ServiceSid} - resource key.</li>
   * </ul>
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Guest's first name.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_first_name = "";

  /**
   * Guest's last name.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_last_name = "";

  /**
   * Guest's email.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * UID of found or created user.
   *
   * @get result
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Guest_GuestProfileModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Guest_GuestProfileModel.prototype.config=function()
{
  return {"a_field":{"dl_birthday":{"get":{"get":true},"post":{"get":true}},"id_mode":{"post":{"post":true}},"id_service":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_id":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true}},"text_first_name":{"get":{"get":true},"post":{"get":true}},"text_last_name":{"get":{"get":true},"post":{"get":true}},"text_mail":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"result":true},"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.instanceGet
 * @param {string} k_business Business key.
 * @param {number} id_service Type of the service to book.
 * @param {string} k_id Key of service to book. Depending on {@link Wl_Book_Process_Guest_GuestProfileModel.id_service} value:, <ul> <li>{@link Wl_Service_ServiceSid} - class key. </li> <li>{@link Wl_Service_ServiceSid} - service key.</li> <li>{@link Wl_Service_ServiceSid} - resource key.</li> </ul>
 * @param {string} text_mail Guest's email.
 * @param {string} text_first_name Guest's first name.
 * @param {string} text_last_name Guest's last name.
 * @param {string} dl_birthday Guest's birthday in MySQL format. Empty if service not restricted by age.
 * @returns {Wl_Book_Process_Guest_GuestProfileModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Check if user exists.
 *
 * Looks up a guest by email within the specified business and service context. Returns the user key if an
 * existing member is found whose email, birthday (when required), and location eligibility all pass validation.
 *
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates new user.
 *
 * Creates a new guest profile (or reuses an existing non-member account) for the specified business and service,
 * applying birthday and virtual-account rules, and returns the UID of the created or matched user.
 *
 * @function
 * @name Wl_Book_Process_Guest_GuestProfileModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
