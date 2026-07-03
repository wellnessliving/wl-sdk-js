/**
 * Validates the new user's data and sends a confirmation email to complete registration.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Register_RegisterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Passport_Login_Register_RegisterModel_a_data
   * @property {string} k_business The key of the business for the WellnessLiving project to register the user in.
   */

  /**
   * The additional data about new users.
   *
   * @post post
   * @type {Core_Passport_Login_Register_RegisterModel_a_data}
   */
  this.a_data = undefined;

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
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * JSON configuration for confirmation email.
   *
   * @post result
   * @type {string}
   */
  this.json_confirm_config = undefined;

  /**
   * The application ID. This is a business specific ID required to register clients.
   *
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * The new client email address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The new client given name.
   *
   * @post post
   * @type {string}
   */
  this.s_name_first = "";

  /**
   * The new client surname.
   *
   * @post post
   * @type {string}
   */
  this.s_name_last = "";

  /**
   * The new client password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * The URL to the confirmation page. This link is used in a confirmation email.
   *
   * If empty, URL to default page is used.
   *
   * @post post,result
   * @type {string}
   */
  this.url_confirm = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Register_RegisterModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Register_RegisterModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"json_confirm_config":{"post":{"result":true}},"s_application":{"post":{"post":true}},"s_mail":{"post":{"post":true}},"s_name_first":{"post":{"post":true}},"s_name_last":{"post":{"post":true}},"s_password":{"post":{"post":true}},"url_confirm":{"post":{"post":true,"result":true}}}};
};

/**
 * Validates the new user's data and sends a confirmation email to complete registration.
 *
 * Accepts the new user's name, email, and password, validates each field, stores the pending registration,
 * and sends a confirmation email with a link to complete registration via [RegisterConfirmApi](/Core/Passport/Login/Register/RegisterConfirm.json).
 * An optional application ID and custom confirmation URL may be provided.
 *
 * @function
 * @name Core_Passport_Login_Register_RegisterModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
