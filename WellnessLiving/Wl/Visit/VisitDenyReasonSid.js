/**
 * Reasons of failed book or check-in.
 *
 * Last used ID: 38
 */
function Wl_Visit_VisitDenyReasonSid()
{
  // Empty constructor.
}

/**
 * The business can not take one more client.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ACCESS_DENIED = 1;

/**
 * Access is limited.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ACCESS_LIMITED = 2;

/**
 * The business can not take one more client.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ACCOUNT_LIMIT = 3;

/**
 * Class is not available for certain age.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.AGE_RESTRICTION = 4;

/**
 * Liability Release needs to be agreed.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.AGREE_NX = 5;

/**
 * Service approval denied
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.APPOINTMENT_DENY = 25;

/**
 * Service requires staff approval
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.APPOINTMENT_REQUEST = 26;

/**
 * Business Policy restricts Gym Visits
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ATTEND_GYM_DISABLE = 23;

/**
 * The client already has a checked-in gym visit on the same local day, at any location of the business.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ATTEND_ONCE = 38;

/**
 * Self check-in not available for this service
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ATTEND_SELF_DISABLE = 22;

/**
 * Business policy prevents unpaid check-ins
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ATTEND_UNPAID = 28;

/**
 * Client is on the Wait List
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.ATTEND_WAIT = 27;

/**
 * Client has a negative account balance
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BALANCE_NEGATIVE = 37;

/**
 * Client is already booked for this session.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BOOKED_ALREADY = 6;

/**
 * It's too early to book a class.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BOOK_EARLY = 7;

/**
 * It's too late to book a class.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BOOK_LATE = 8;

/**
 * Visit must be booked before check-in
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BOOK_NX = 24;

/**
 * Cannot book to this class anymore.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BOOK_RESTRICT = 9;

/**
 * Business is inactive.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.BUSINESS_INACTIVE = 10;

/**
 * Class is canceled.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.CLASS_CANCELED = 11;

/**
 * Class is full.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.CLASS_FULL = 14;

/**
 * Class does not exist anymore.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.CLASS_NOT_AVAILABLE_ANYMORE = 15;

/**
 * Client is flagged at location.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.CLIENT_FLAGGED = 12;

/**
 * Credit card is required for booking services.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.CREDIT_CARD_REQUIRE = 13;

/**
 * Business is closed.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.HOLIDAY = 16;

/**
 * Login is required.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.LOGIN_REQUIRED = 17;

/**
 * Online booking is disabled for the class.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.NOT_BOOKABLE = 18;

/**
 * Contract not signed
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_CONTRACT = 35;

/**
 * Purchase Option expired
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_EXPIRE = 36;

/**
 * Purchase Option on hold
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_HOLD = 34;

/**
 * No valid Purchase Option
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_NX = 30;

/**
 * Purchase Option has no visits left
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_REMAIN = 33;

/**
 * Purchase Option not active yet
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.PAYMENT_START = 32;

/**
 * Attendance limit on Purchase Option reached
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.SCHEDULE_RESTRICT = 31;

/**
 * Check-in could not be completed
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.UNKNOWN = 29;

/**
 * Required personal details missing.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.USER_INFO_MISSING = 19;

/**
 * Visit to another class is required first.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.VISIT_BEFORE = 20;

/**
 * The wait list is full.
 *
 * @type {number}
 */
Wl_Visit_VisitDenyReasonSid.WAIT_LIST_LIMIT_MAX = 21;
