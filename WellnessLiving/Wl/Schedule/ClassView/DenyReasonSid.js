/**
 * Reasons why the client can't book this class.
 *
 * Last used ID: 26
 */
function Wl_Schedule_ClassView_DenyReasonSid()
{
  // Empty constructor.
}

/**
 * User is trying to book on behalf of another client, but does not have permission to do so.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.ACCESS_DENIED = 1;

/**
 * Manual restriction to book business, location or a certain class. Right now is not available in UI.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.ACCESS_LIMITED = 2;

/**
 * The business can not take one more client because of business subscription limitations. Right now there is no such subscriptions, but it can appear in the future.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.ACCOUNT_LIMIT = 3;

/**
 * Class is not available for certain age.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.AGE_RESTRICTION = 4;

/**
 * Liability Release needs to be agreed.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.AGREE_NX = 5;

/**
 * Client has unpaid fees.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BALANCE_NEGATIVE = 22;

/**
 * Client is already booked for this session.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BOOKED_ALREADY = 6;

/**
 * It's too early to book a class.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BOOK_EARLY = 7;

/**
 * It's too late to book a class.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BOOK_LATE = 8;

/**
 * User's visit overlaps with another visit.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BOOK_OVERLAP = 25;

/**
 * User's pricing options do not allow booking another visit within a certain period because of pricing option limitations.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BOOK_RESTRICT = 9;

/**
 * Business is inactive.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.BUSINESS_INACTIVE = 10;

/**
 * Class is canceled.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CLASS_CANCELED = 11;

/**
 * Class is finished.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CLASS_FINISHED = 26;

/**
 * Class is full.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CLASS_FULL = 14;

/**
 * Class does not exist anymore.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CLASS_NOT_AVAILABLE_ANYMORE = 15;

/**
 * Client is flagged at location.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CLIENT_FLAGGED = 12;

/**
 * Credit card is required for booking services.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.CREDIT_CARD_REQUIRE = 13;

/**
 * Business is closed.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.HOLIDAY = 16;

/**
 * Login is required.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.LOGIN_REQUIRED = 17;

/**
 * Online booking is disabled for the class.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.NOT_BOOKABLE = 18;

/**
 * Online booking is disabled for this type of client.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.NOT_BOOKABLE_BY_TYPE = 24;

/**
 * Required personal details missing.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.USER_INFO_MISSING = 19;

/**
 * Visit to another class is required first.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.VISIT_BEFORE = 20;

/**
 * The wait list is full.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.WAIT_LIST_LIMIT_MAX = 21;

/**
 * Client has unsigned waiver.
 *
 * @type {number}
 */
Wl_Schedule_ClassView_DenyReasonSid.WAIVER_NX = 23;
