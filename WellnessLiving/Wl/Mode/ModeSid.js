// @after Core/Request/Api/Sdk/AssertException.js
// @before Config/ConfigAbstractMixin.js

/**
 * The source of visit.
 *
 * Last used ID: 16.
 */
function WlSdk_Mode_ModeSid()
{
  // Empty constructor.
}

/**
 * Visit has been created by ClassPass.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.CLASSPASS_BOOKING = 8;

/**
 * Visit has been crated by Google Booking Service.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.GOOGLE_BOOKING = 7;

/**
 * Visit has been crated by <tt>GymPass</tt>.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.GYMPASS_BOOKING = 14;

/**
 * Visit was created during import.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.IMPORT = 5;

/**
 * Action made via microsite.
 *
 * It is also names as directory listing.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.MICROSITE = 12;

/**
 * Client booked session on My Presence Site.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.MY_PRESENCE_SITE = 13;

/**
 * Staff booked session from spa backend.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.SPA_BACKEND = 4;

/**
 * Client booked session from spa frontend.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.SPA_FRONTEND = 3;

/**
 * Created by system.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.SYSTEM = 10;

/**
 * Means that we did not define mode.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.UNDEFINED = 6;

/**
 * Client booked session from Attendance Web App.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.WEB_APP_ATTENDANCE = 16;

/**
 * Client checked-in for the session through Check-In Web App.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.WEB_APP_CHECK_IN = 15;

/**
 * Staff booked session for client from website backend.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.WEB_BACKEND = 2;

/**
 * Client booked session from website frontend.
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.WEB_FRONTEND = 1;

/**
 * Action made via widget (purchase, book etc).
 *
 * @type {number}
 */
WlSdk_Mode_ModeSid.WIDGET = 11;