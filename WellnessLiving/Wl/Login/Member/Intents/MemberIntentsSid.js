/**
 * List of intents of the user in the business.
 * This means, why was user interested in the business, when first time came or called.
 */
function Wl_Login_Member_Intents_MemberIntentsSid()
{
  // Empty constructor.
}

/**
 * Customer asks about payment methods, financing, invoices, payment issues, or billing to insurance.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.BILLING_INQUIRY = 1;

/**
 * Customer clearly expresses intent to schedule a new class, appointment, event, or asset.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.BOOKING = 2;

/**
 * Customer explicitly asks to cancel an existing booking with no intent to reschedule.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.BOOKING_CANCELLATION = 3;

/**
 * Customer explicitly asks to change the date, time, or provider for an existing booking.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.BOOKING_RESCHEDULE = 4;

/**
 * Customer requests operational or logistical details about the business (address, hours, contacts).
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.BUSINESS_INFORMATION = 5;

/**
 * Customer asks whether a specific instructor, staff member, or service is available.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.CHECK_AVAILABILITY = 6;

/**
 * Customer asks general wellness or fitness questions not tied to appointments, pricing, or availability.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.GENERAL_INQUIRY = 7;

/**
 * Customer wants to leave a voicemail, voice note, or message for staff.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.LEAVE_MESSAGE = 8;

/**
 * Customer requests cost or pricing details for services.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.PRICING_INQUIRY = 9;

/**
 * Customer asks about packages, session passes, or membership options.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.PURCHASE_OPTIONS_INQUIRY = 10;

/**
 * Customer mentions they were referred by someone.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.REFERRAL = 11;

/**
 * Customer expresses interest in a service without asking about pricing or availability specifically.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.SERVICE_INQUIRY = 12;

/**
 * Customer requests to speak with a staff member, receive a callback, or staff follow-up is needed.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.STAFF_ASSISTANCE_REQUEST = 13;

/**
 * Customer insists on immediate live transfer to a staff member.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.TRANSFER_CALL_TO_STAFF = 14;

/**
 * Customer asks about their already scheduled or upcoming appointments.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.VIEW_BOOKINGS = 15;

/**
 * Customer asks about their purchased memberships, session passes, or packages.
 *
 * @type {number}
 */
Wl_Login_Member_Intents_MemberIntentsSid.VIEW_CLIENT_PO_DETAILS = 16;
