/**
 * Mail types.
 *
 * <h2>How to add a new e-mail type</h2>
 * <ol>
 *   <li>Select a new for a new e-mail. Add a constant in `RsMailSid`.</li>
 *   <li></li>
 * </ol>
 *
 * Pay attention that all `\MailPrioritySid` must start with backslash.
 *
 * Last used ID: 224.
 */
function RsMailSid()
{
  // Empty constructor.
}

/**
 * Sent when a client abandons a checkout (used in automations).
 *
 * @type {number}
 */
RsMailSid.ABANDONED_CHECKOUT = 220;

/**
 * Sent by CASSI phone agent, when client requests a booking url.
 *
 * @type {number}
 */
RsMailSid.AI_LINK_BOOK = 206;

/**
 * Sent by CASSI phone agent, when client requests a purchase url.
 *
 * @type {number}
 */
RsMailSid.AI_LINK_PURCHASE = 207;

/**
 * Appointment approved by staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_APPROVE_STAFF = 71;

/**
 * Sent when the AI Agent successfully books an appointment.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_BOOKED_AI = 198;

/**
 * Appointment Cancelled by Client - Early.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CANCEL_EARLY_USER = 33;

/**
 * Appointment Cancelled by Client - Late.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CANCEL_LATE_USER = 35;

/**
 * Appointment Cancelled Notification - Staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CANCEL_STAFF = 32;

/**
 * Sends to the client when appointment has been cancelled by staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CANCEL_STAFF_USER = 80;

/**
 * Sends to the clients when appointment information has been changed.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CHANGE_GENERAL_CLIENT = 114;

/**
 * Sends to the staff members when appointment information has been changed.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CHANGE_GENERAL_STAFF = 113;

/**
 * Appointment Change Notification - Staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CHANGE_STAFF = 36;

/**
 * Appointment Change Notification - Client.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CHANGE_USER = 37;

/**
 * New Appointment Notification - Staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CREATE_STAFF = 31;

/**
 * Appointment Confirmation.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CREATE_USER = 30;

/**
 * Multiple Appointment Confirmation (Client).
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_CREATE_USER_MULTIPLE = 211;

/**
 * Notification to a customer about an appointment that has been canceled because not paid.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_PAY_CANCEL = 189;

/**
 * Notification to a customer about mandatory payment for an appointment.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_PAY_PAY = 188;

/**
 * Sends one email to a client when several sessions of one or several appointments or single session of recurring
 * appointment were canceled by staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REPEAT_CANCEL_CLIENT = 103;

/**
 * Sends one email to staff when several sessions of one or several appointments or single session of recurring
 * appointment were canceled.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REPEAT_CANCEL_STAFF = 105;

/**
 * Sends one email to a client when several sessions of one or several appointments or single session of recurring
 * appointment were canceled by a client.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REPEAT_CANCEL_USER = 131;

/**
 * Sent to staff when the AI Agent receives an appointment request.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REQUEST_AI = 200;

/**
 * Requested appointment has been denied.
 *
 * Sends to the client, after staff denied requested appointment.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REQUEST_DENY = 88;

/**
 * Appointment has been requested.
 *
 * Sends to the staff after client creates an appointment, that should be approved by staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REQUEST_STAFF = 89;

/**
 * Appointment has been requested.
 *
 * Sends to the client after client creates an appointment, that should be approved by staff.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_REQUEST_USER = 90;

/**
 * Appointment Wait List Cancellation
 *
 * Sent after a client has been removed from the waiting list for an appointment.
 *
 * @type {number}
 */
RsMailSid.APPOINTMENT_WAIT_REMOVE = 195;

/**
 * Sent to staff when the AI Agent logs a billing or payment query.
 *
 * @type {number}
 */
RsMailSid.BILLING_RELATED_QUERY = 204;

/**
 * Class Booking Confirmation.
 *
 * Sent after a client successfully books a class.
 *
 * <h2>Acceptance test</h2>
 * <ol>
 *   <li>Enter a business backend.</li>
 *   <li>Go to calendar ("Schedule" button in the main toolbar).</li>
 *   <li>Find a class in the future.<br />
 *     Click a number in the "Clients" column in the calendar.<br />
 *     Attendance list form will appear.</li>
 *   <li>Click "Add client into class" button in the toolbar of the form.</li>
 *   <li>Type in a login name of a client you want to send this e-mail to. Click "Search", then click "Add".</li>
 *   <li>Process tasks.</li>
 *   <li>Process cron.</li>
 *   <li>The test message should now be sent.</li>
 * </ol>
 *
 * @type {number}
 */
RsMailSid.BOOK_ADD_CLASS = 1;

/**
 * Class Booking Notification - Staff.
 *
 * Sent to the staff member informing them that a client has booked their class.
 *
 * @type {number}
 */
RsMailSid.BOOK_ADD_STAFF = 47;

/**
 * Sent if a client cancels a booking (used in automations).
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL = 210;

/**
 * Class Booking (Reservation) Cancelled by Staff.
 *
 * Sent after a staff member cancels a client reservation for a class.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_ADMIN_CLASS = 23;

/**
 * Enrollment Booking Cancelled by Staff.
 *
 * Sent after a staff member cancels a client reservation for a class.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_ADMIN_ENROLLMENT = 57;

/**
 * Enrollment Session Cancellation Notification
 *
 * Sent to a client when an event session(s) are canceled.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_ENROLLMENT_SESSION = 128;

/**
 * Class Cancelled by Client - Early.
 *
 * Sent after a class reservation is cancelled by a client early. Cancellations are considered to be early if they are
 * made before the late cancel window that you’ve set in your Business Policy settings.
 *
 * <h2>Acceptance test</h2>
 * <ol>
 *   <li>Select a user (not a staff, not an administrator). The e-mail you seek to send will be sent to that user.
 *     And you will need to log in under that user.</li>
 *   <li>Add a book to the user you selected. See `RsMailSid::BOOK_ADD` for details.</li>
 *   <li>Login as that user. Go to Profile - My Schedule. Find the class there, click "Cancel" button.</li>
 *   <li>Process tasks.</li>
 *   <li>Process cron.</li>
 *   <li>The message should now be sent to the user you selected.</li>
 * </ol>
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_FREE_CLASS = 3;

/**
 * Enrollment Cancelled by Client - Early.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_FREE_ENROLLMENT = 58;

/**
 * Class Cancelled By Client - Late.
 *
 * Sent after a class reservation is cancelled by a client late. Cancellations are considered to be late if they are
 * made after the late cancel window that you’ve set in your Business Policy settings.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_PENALTY_CLASS = 4;

/**
 * Enrollment Cancelled By Client - Late.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_PENALTY_ENROLLMENT = 59;

/**
 * Class Booking Cancellation Notification - Staff.
 *
 * Sent to the staff member informing them that a client has cancelled their class reservation.
 *
 * @type {number}
 */
RsMailSid.BOOK_CANCEL_STAFF = 48;

/**
 * Enrollment Booking Confirmation.
 *
 * @type {number}
 */
RsMailSid.BOOK_ENROLLMENT = 69;

/**
 * Enrollment Booking Cancellation Notification - Staff
 *
 * Sent to a staff member informing them that a client has cancelled their enrollment.
 *
 * @type {number}
 */
RsMailSid.BOOK_ENROLLMENT_CANCEL_STAFF = 92;

/**
 * Enrollment Booking Notification - Staff.
 *
 * Sent to a staff member informing them that a client has booked their enrollment.
 *
 * @type {number}
 */
RsMailSid.BOOK_ENROLLMENT_STAFF = 91;

/**
 * Thanks for your interest.
 *
 * Sent to prospective clients after they sign up online.
 *
 * @type {number}
 */
RsMailSid.BOOK_FIRST = 73;

/**
 * Appointment Wait List Promotion (Client Confirmation Required)
 *
 * Sent to a client to confirm they promote from wait list to active list.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_CONFIRM_APPOINTMENT = 169;

/**
 * Waitlist Promotion (Client Confirmation Required)
 *
 * Sent after the client is promoted from the waiting list for a class.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_CONFIRM_CLASS = 53;

/**
 * Waitlist Promotion (Client Confirmation Required)
 *
 * Sent after the client is promoted from the waiting list for an enrollment.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_CONFIRM_ENROLLMENT = 60;

/**
 * Appointment Wait List Promotion (Confirmation not Required).
 *
 * Sent after the client is promoted from the waiting list for an appointment.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_DIRECT_APPOINTMENT = 168;

/**
 * Waitlist Promotion (Client Confirmation Not Required)
 *
 * Sent after the client is promoted from the waiting list for a class.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_DIRECT_CLASS = 8;

/**
 * Waitlist Promotion (Client Confirmation Not Required)
 *
 * Sent after the client is promoted from the waiting list for an enrollment.
 *
 * @type {number}
 */
RsMailSid.BOOK_PROMOTE_DIRECT_ENROLLMENT = 61;

/**
 * Class Reminder.
 *
 * Sent to the client reminding about an upcoming class reservation.
 *
 * @type {number}
 */
RsMailSid.BOOK_REMIND_CLASS = 25;

/**
 * Enrollment Reminder.
 *
 * Sent to the client reminding about an upcoming enrollment.
 *
 * @type {number}
 */
RsMailSid.BOOK_REMIND_ENROLLMENT = 62;

/**
 * Appointment Reminder - Staff.
 *
 * Sent to the staff member reminding them about an upcoming appointment.
 *
 * @type {number}
 */
RsMailSid.BOOK_REMIND_SERVICE_STAFF = 27;

/**
 * Appointment Reminder.
 *
 * Sent to the client reminding about an upcoming reservation.
 *
 * @type {number}
 */
RsMailSid.BOOK_REMIND_SERVICE_USER = 26;

/**
 * Class Booking Confirmation.
 *
 * Sent after a client books the recurring sessions.
 *
 * @type {number}
 */
RsMailSid.BOOK_REPEAT_ADD = 101;

/**
 * Class Booking Cancelled.
 *
 * Sent after a client cancels the recurring sessions.
 *
 * @type {number}
 */
RsMailSid.BOOK_REPEAT_CANCEL = 102;

/**
 * Recurrent Class Reservation Wait List.
 *
 * Sent when a client books a recurring class and is placed on more than one wait list.
 *
 * @type {number}
 */
RsMailSid.BOOK_REPEAT_WAIT = 166;

/**
 * Class Review Request.
 *
 * Sent after the client visits a new class requesting that he/she write a review about their experience.
 *
 * @type {number}
 */
RsMailSid.BOOK_VISIT = 39;

/**
 * Appointment Reservation Wait List.
 * Sent when an appointment is full and the client is placed on the waiting list.
 *
 * @type {number}
 */
RsMailSid.BOOK_WAIT_APPOINTMENT = 165;

/**
 * Class Reservation Wait List.
 *
 * Sent when a class is full and the client is placed on the waiting list.
 *
 * @type {number}
 */
RsMailSid.BOOK_WAIT_CLASS = 2;

/**
 * Enrollment Reservation Wait List.
 * Sent when an enrollment is full and the client is placed on the waiting list.
 *
 * @type {number}
 */
RsMailSid.BOOK_WAIT_ENROLLMENT = 63;

/**
 * Sent when a business account or location is churned.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_CHURN = 154;

/**
 * Sent to business owner if payment for account failed.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_PAY_FAIL = 82;

/**
 * Sent to business owners as notification in one day before payment for account.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_PAY_NOTIFY = 83;

/**
 * Sent to business owner on successful payment for account.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_PAY_OK = 81;

/**
 * Sent when the monthly postcard limit is exceeded.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_POSTCARD_LIMIT = 155;

/**
 * Sent when subscription price has been overridden and is less than the configured notification threshold.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_SUBSCRIPTION_DISCOUNT = 158;

/**
 * Sent when subscription price has been overridden twice or more.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_SUBSCRIPTION_OVERRIDE = 151;

/**
 * Sent when a subscription payment is marked as paid.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_SUBSCRIPTION_PAYMENT = 156;

/**
 * Sent when subscription skip payment setting has been changed.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_SUBSCRIPTION_SKIP = 134;

/**
 * Sent when a new subscription has been added, and the business is paying for fewer locations than they have.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_SUBSCRIPTION_UNDERPAYING = 152;

/**
 * Sent when a user signs up for the virtual service.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_VIRTUAL_SIGNUP = 157;

/**
 * Sent when a business adds more licenses to their `FitLIVE` subscription.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_ACCOUNT_VIRTUAL_UPGRADE = 175;

/**
 * Sends to client after the first-level onboarding, providing them with login information
 * and next steps for using their trial account.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_CREATE = 192;

/**
 * Email sales@wellnessliving.com when user changes Message Center plan
 *
 * @type {number}
 */
RsMailSid.BUSINESS_MESSAGE_SUBSCRIBE = 164;

/**
 * Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to all businesses accounts.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_BANNER = 179;

/**
 * Email to the marketing to remind to upload the 'Partner Program 30-Day Notification Banner' to business account.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_BANNER_CUSTOMER = 180;

/**
 * Email to the admins that business staff member wants to take a part in the partner program.
 *
 * Note! This email is not sent anymore because there is no need to enroll in the partner program (enrollment occurs
 * automatically). For details see:
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_ENROLL = 119;

/**
 * Email to the staff members of the partner business when a new lead comes in through his partnership.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_NEW = 143;

/**
 * Email to the admins when a referral reaches a certain period of paid subscription about sending a check to partner business.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_PARTNER = 145;

/**
 * Email to the admins when a referral reaches a certain period of paid subscription about sending a check to referral business.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_REACH_ADMIN_REFERRAL = 148;

/**
 * Email to the staff members of the partner business when a referral reaches a certain period of paid subscription.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_REACH_PARTNER = 146;

/**
 * Email to the staff members of the referred business when they reaches a certain period of paid subscription.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_REACH_REFERRAL = 147;

/**
 * Email to the staff members of the partner business when a referral has been subscribed.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PARTNER_REFERRAL_MAIL_SUBSCRIBE = 144;

/**
 * Business registered its business phone number.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_PHONE = 139;

/**
 * Sent when send/receive SMS in Two-Way SMS chat.
 *
 * @type {number}
 */
RsMailSid.BUSINESS_SMS_CHAT = 141;

/**
 * Sent to staff when the AI Agent captures a cancellation request.
 *
 * @type {number}
 */
RsMailSid.CANCELLATION_REQUEST_AI = 202;

/**
 * Class Cancellation Notification - Staff.
 *
 * Sent to a staff after class cancelled by staff.
 *
 * @type {number}
 */
RsMailSid.CLASSES_CANCEL_STAFF = 135;

/**
 * Class Schedule Details Changed.
 * Sent after a staff member modifies a scheduled class.
 *
 * @type {number}
 */
RsMailSid.CLASSES_PERIOD_CHANGE_CLASSES_STAFF = 100;

/**
 * Email to the business members with information about newly added class schedule.
 *
 * Sent after a clients, when new schedule is added.
 *
 * <h2>Acceptance test</h2>
 * <ol>
 *   <li>Enter a business backend.</li>
 *   <li>Config email.</li>
 *   <li>Adds schedule to the selected in email settings class.</li>
 *   <li>Check that selected clients got an email.</li>
 * </ol>
 *
 * @type {number}
 */
RsMailSid.CLASSES_PROMOTE = 109;

/**
 * A reminder for the staff about an upcoming recurrent class.
 * Sent after a new recurrent class booking occurs.
 *
 * @type {number}
 */
RsMailSid.CLASSES_STAFF_RECURRENT = 124;

/**
 * A notification to the staff about a cancellation of a recurrent class.
 *
 * @type {number}
 */
RsMailSid.CLASSES_STAFF_RECURRENT_CANCEL = 125;

/**
 * Staff member that conducts the class is changed (a new staff member is added, or an existing staff member is substituted).
 * Sent after a staff member modifies a scheduled class.
 *
 * @type {number}
 */
RsMailSid.CLASSES_STAFF_SUBSTITUTION = 110;

/**
 * Send to the staff a remind about an upcoming class session.
 * It is sent only when this staff is a substitution.
 *
 * @type {number}
 */
RsMailSid.CLASSES_STAFF_SUBSTITUTION_REMIND = 117;

/**
 * Sent to the client after a video uploaded to an attendance list is published.
 *
 * @type {number}
 */
RsMailSid.CLASSES_VIDEO_PUBLISH = 161;

/**
 * Alerts staff that the AI Agent has completed a class booking for a client.
 *
 * @type {number}
 */
RsMailSid.CLASS_BOOKED_AI = 199;

/**
 * Sent to staff when CAASI receives a request for booking.
 *
 * @type {number}
 */
RsMailSid.CLASS_BOOK_AI = 201;

/**
 * Class Type Modified Has Changed.
 *
 * Sent after the class title or class category have changed. Sent to all clients who have the class booked.
 *
 * @type {number}
 */
RsMailSid.CLASS_EDIT_CLASS = 24;

/**
 * Enrollment Type Modified Has Changed.
 *
 * Sent after the enrollment title have changed. Sent to all clients who have the enrollment booked.
 *
 * @type {number}
 */
RsMailSid.CLASS_EDIT_ENROLLMENT = 64;

/**
 * Class cancelled by staff.
 *
 * Sent after a staff member cancels a class.
 *
 * @type {number}
 */
RsMailSid.CLASS_PERIOD_CANCEL_CLASS = 16;

/**
 * Enrollment cancelled by staff.
 *
 * Sent after a staff member cancels an enrollment.
 *
 * @type {number}
 */
RsMailSid.CLASS_PERIOD_CANCEL_ENROLLMENT = 66;

/**
 * Class Schedule Details Changed Modified.
 *
 * Sent after a staff member modifies a scheduled class.
 *
 * @type {number}
 */
RsMailSid.CLASS_PERIOD_CHANGE_CLASS = 17;

/**
 * Enrollment Schedule Details Changed Modified.
 *
 * Sent after a staff member modifies a scheduled of enrollment.
 *
 * @type {number}
 */
RsMailSid.CLASS_PERIOD_CHANGE_ENROLLMENT = 65;

/**
 * Automated marketing email sent on the client's birthday.
 *
 * @type {number}
 */
RsMailSid.CLIENT_BIRTHDAY = 221;

/**
 * Send a copy of contract.
 *
 * @type {number}
 */
RsMailSid.CONTRACT_COPY = 98;

/**
 * Sent after purchase of coupon.
 *
 * @type {number}
 */
RsMailSid.COUPON_PURCHASE = 84;

/**
 * Enrollment Session(s) Booking Confirmation.
 *
 * @type {number}
 */
RsMailSid.EVENT_BOOK_SESSION_CLIENT = 129;

/**
 * Enrollment Session(s) Booking Notification - Staff.
 *
 * @type {number}
 */
RsMailSid.EVENT_BOOK_SESSION_STAFF = 130;

/**
 * Email to the business members with information about newly added event schedule.
 *
 * Sent after a clients, when new schedule is added.
 *
 * @type {number}
 */
RsMailSid.EVENT_PROMOTE = 160;

/**
 * Sent to the client after a video uploaded to an attendance list is published.
 *
 * @type {number}
 */
RsMailSid.EVENT_VIDEO_PUBLISH = 162;

/**
 * Staff sent feedback with some comment.
 *
 * All functionality related to this feature has been removed from the codebase.
 *
 * @type {number}
 */
RsMailSid.FEEDBACK_DIALOG = 133;

/**
 * New Comment on Logged Result.
 *
 * @type {number}
 */
RsMailSid.FITBUILDER_MAIL_COMMENT = 182;

/**
 * New Likes on Comment.
 *
 * @type {number}
 */
RsMailSid.FITBUILDER_MAIL_LIKE = 183;

/**
 * Thumbs up on Logged Result.
 *
 * @type {number}
 */
RsMailSid.FITBUILDER_MAIL_THUMB = 184;

/**
 * Workout of the day.
 *
 * @type {number}
 */
RsMailSid.FITBUILDER_MAIL_WORKOUT = 185;

/**
 * Guest Pass invitation expired.
 *
 * @type {number}
 */
RsMailSid.GUEST_PASS_EXPIRED = 218;

/**
 * Guest Pass invitation sent.
 *
 * @type {number}
 */
RsMailSid.GUEST_PASS_INVITATION = 217;

/**
 * Guest Pass invitation reminder.
 *
 * @type {number}
 */
RsMailSid.GUEST_PASS_REMINDER = 219;

/**
 * For staff members to send emails to support using the help popup.
 *
 * @type {number}
 */
RsMailSid.HELP_POPUP_EMAIL = 150;

/**
 * Sent when a business enrolls in Autymate.
 *
 * @type {number}
 */
RsMailSid.INTEGRATION_AUTYMATE_ENROLLMENT = 176;

/**
 * Sent when a business subscribes to collections.
 *
 * @type {number}
 */
RsMailSid.INTEGRATION_COLLECTION_ALDOUS = 178;

/**
 * Email, which is sent when a customer has connected a paid Zoom account.
 *
 * Is sent to administrators or to a special address if set {@link Wl_Integration_Zoom_ConfirmationModel.MAIL_RECIPIENT}.
 *
 * @type {number}
 */
RsMailSid.INTEGRATION_ZOOM_CONFIRMATION = 138;

/**
 * Request a demo from landing page.
 *
 * @type {number}
 */
RsMailSid.LANDING_CONTACT = 97;

/**
 * Sent to staff member informing them that a new client has entered their information into the Lead Capture Widget.
 *
 * @type {number}
 */
RsMailSid.LEAD_ADDED_STAFF = 163;

/**
 * Sent to the client after they fill out a Lead Capture Form on the website of a business.
 *
 * @type {number}
 */
RsMailSid.LEAD_CAPTURE = 87;

/**
 * Sent to staff when CAASI captures a new lead from a conversation,
 * including contact details and any provided inquiry notes.
 *
 * @type {number}
 */
RsMailSid.LEAD_CAPTURE_AI = 197;

/**
 * Sent to staff when a lead's stage is updated in the Lead Capture Form.
 *
 * @type {number}
 */
RsMailSid.LEAD_STAGE_UPDATED = 224;

/**
 * Sent to client on annual anniversary of the Member Since date.
 *
 * @type {number}
 */
RsMailSid.LOGIN_ANNIVERSARY = 96;

/**
 * Attendance List.
 *
 * Sent to the staff member with their attendance list for the day.
 *
 * @type {number}
 */
RsMailSid.LOGIN_ATTENDANCE = 42;

/**
 * Sent when user long time did not visit location, and it not has active promotion.
 * Client Win-Back send only for inactive members {@link Wl_Login_Type_SystemSid.INACTIVE}.
 *
 * @type {number}
 */
RsMailSid.LOGIN_BACK = 79;

/**
 * Email to send on the day, when client has birthday.
 *
 * @type {number}
 */
RsMailSid.LOGIN_BIRTHDAY = 49;

/**
 * Clients Payment Card expires this month.
 *
 * @type {number}
 */
RsMailSid.LOGIN_CARD_EXPIRE = 51;

/**
 * Email address confirmation.
 * Sends after client registration to confirm the email address.
 *
 * @type {number}
 */
RsMailSid.LOGIN_MAIL_CONFIRM = 123;

/**
 * Custom Client Email #1.
 *
 * Should not have high priority as this is often a big sending from the reports to all clients of the business.
 *
 * @type {number}
 */
RsMailSid.LOGIN_MESSAGE = 22;

/**
 * Client no show.
 *
 * Sent if the client does not show up to an appointment that they have reserved.
 *
 * @type {number}
 */
RsMailSid.LOGIN_PENALTY_APPOINTMENT = 72;

/**
 * Client no show.
 *
 * Sent if the client does not show up to a class that they have reserved.
 *
 * @type {number}
 */
RsMailSid.LOGIN_PENALTY_CLASS = 15;

/**
 * Client no show.
 *
 * Sent if the client does not show up to an enrollment that they have reserved.
 *
 * @type {number}
 */
RsMailSid.LOGIN_PENALTY_ENROLLMENT = 67;

/**
 * Billed to Account. Sent to the client when any purchase was billed to their account balance.
 *
 * @type {number}
 */
RsMailSid.LOGIN_PURCHASE_ACCOUNT = 159;

/**
 * Sent to a client when they haven't visited in a set number of days,
 * but still have an active pass or membership.
 * Client Retention send only for active members {@link Wl_Login_Type_SystemSid.ACTIVE} and custom client types.
 *
 * @type {number}
 */
RsMailSid.LOGIN_RETENTION = 50;

/**
 * Sent to the client when a new account statement becomes available.
 * Email includes the statement as a PDF attachment.
 *
 * @type {number}
 */
RsMailSid.LOGIN_STATEMENT_NEW = 213;

/**
 * Sent to all new users after they create an account for the first time.
 *
 * @type {number}
 */
RsMailSid.LOGIN_WELCOME = 9;

/**
 * Sent to selected staff or staff roles when a marketing automation flow reaches a Notify Staff step.
 *
 * @type {number}
 */
RsMailSid.MARKETING_AUTOMATION_NOTIFY_STAFF = 223;

/**
 * Sent to staff when the AI Agent logs a membership or purchase query.
 *
 * @type {number}
 */
RsMailSid.MEMBERSHIP_QUERY = 203;

/**
 * Client added to a member group.
 *
 * @type {number}
 */
RsMailSid.MEMBER_GROUP_USER_ADD = 214;

/**
 * Client removed from a member group.
 *
 * @type {number}
 */
RsMailSid.MEMBER_GROUP_USER_REMOVE = 215;

/**
 * Sent OTP code by sms or email to validate phone number or email address.
 *
 * @type {number}
 */
RsMailSid.NOTIFICATION_OTP = 191;

/**
 * Sent OTP code by sms and email for the user sign in.
 *
 * @type {number}
 */
RsMailSid.PASSPORT_LOGIN_ENTER = 187;

/**
 * Notification about email address is changed due to merge.
 *
 * @type {number}
 */
RsMailSid.PASSPORT_LOGIN_MERGE = 205;

/**
 * E-mail with a list of user's payment account transactions for last {@link \RsPayAccountMail::DAY} days.
 *
 * <h2>Acceptance test</h2>
 *
 * <ul><li>Initial conditions: you'll need a user with an e-mail that you can receive e-mail to.</li>
 *
 * <li>Go to business backend - store. Purchase anything. Pay with user's account.</li>
 *
 * <li>Go to Reports - Client - Account Balance. Click 'Send invoice' in the row of that user.</li>
 *
 * <li>Execute cron. Check e-mail box. There should be an invoice e-mail.
 *
 * Check that there is information about purchase you've just made.</li>
 *
 * @type {number}
 */
RsMailSid.PAY_ACCOUNT_INVOICE = 85;

/**
 * Automatic payment success.
 *
 * Sent to the customer in the following cases:
 * * An automatic renewal of a purchase option is successful.
 * * Recurrent payment of installment plan is successful.
 * * Suspended payment completed successfully {@link \Wl\Catalog\Payment\Task}.
 * * When status of a recurrently paid transaction is changed to {@link RsPayTransactionStatusSid.PURCHASE_OK}.
 *
 * Should be disabled by default according to the task (see link below).
 *
 * @type {number}
 */
RsMailSid.PAY_AUTOMATIC_SUCCESS = 116;

/**
 * Transaction failed.
 *
 * Sent to support whenever transaction fails.
 *
 * @type {number}
 */
RsMailSid.PAY_TRANSACTION_FAIL = 181;

/**
 * Sent to staff when CAASI's Phone Agent concludes a call, regardless of outcome
 * (resolved by CAASI, transferred live, or callback requested).
 *
 * @type {number}
 */
RsMailSid.PHONE_AGENT_CALL_RECEIVED = 222;

/**
 * Request a custom website subscription.
 *
 * @type {number}
 */
RsMailSid.PRESENCE_ACTIVATE = 137;

/**
 * Sent after purchase of product.
 *
 * @type {number}
 */
RsMailSid.PRODUCT_PURCHASE = 127;

/**
 * Email to inform user that they email is changed.
 *
 * @type {number}
 */
RsMailSid.PROFILE_MAIL_CHANGE = 93;

/**
 * Email to confirm new email address after it was changed.
 *
 * @type {number}
 */
RsMailSid.PROFILE_MAIL_CONFIRM = 86;

/**
 * Mail to inform the user that their password has been changed.
 *
 * @type {number}
 */
RsMailSid.PROFILE_PASSWORD_CHANGE = 111;

/**
 * Mail containing reset password link to allow the user to change their password.
 *
 * @type {number}
 */
RsMailSid.PROFILE_PASSWORD_RESET = 142;

/**
 * Few Pass Visits Remaining.
 *
 * Sent when the client only has a few visits remaining on their pass.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_LOW = 43;

/**
 * Sent when membership is canceled.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_CANCEL = 153;

/**
 * Sent to staff when membership is canceled.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_CANCEL_STAFF = 193;

/**
 * Sent when membership expires.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_EXPIRE = 77;

/**
 * Membership Payment - Billed to Account.
 *
 * Sent to the customer to inform them that their account after purchase became negative.
 * Sent in the following cases:
 * * Automatic renewal of a purchase option.
 * * Account payment for installment plan.
 * * Suspended payment {@link \Wl\Catalog\Payment\Task}.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_PAY_ACCOUNT = 106;

/**
 * Automatic Payment Failed.
 *
 * In case of unsuccessful Credit Card transaction.
 *
 * Sent to the customer in the following cases:
 * * An automatic renewal of a purchase option is failed.
 * * Recurrent payment of installment plan is failed.
 * * Suspended payment failed {@link \Wl\Catalog\Payment\Task}.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_PAY_FAIL = 55;

/**
 * Membership Payment Confirmation.
 *
 * In case of a successful Credit Card transaction.
 *
 * Sent to the customer when a payment has been made toward their membership.
 * Sent to the customer in the following cases:
 * * An automatic renewal of a purchase option is failed.
 * * Recurrent payment of installment plan is failed.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_PAY_OK = 56;

/**
 * Sent to the customer after their membership is renewed.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_REACTIVATE = 75;

/**
 * Sent before certain count of days before membership renews.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_MEMBERSHIP_RENEW = 78;

/**
 * Sent after purchase of promotion.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_PURCHASE = 76;

/**
 * Receipt sent after purchase of promotion.
 *
 * @type {number}
 */
RsMailSid.PROMOTION_RECEIPT = 136;

/**
 * Sent after a client attended a visit using a purchase option (used in automations).
 *
 * @type {number}
 */
RsMailSid.PROMOTION_USED = 212;

/**
 * Sent to the customer when a promotion is paused.
 *
 * @type {number}
 */
RsMailSid.PURCHASE_HOLD = 194;

/**
 * Sends to the clients when purchase option hold expiring soon.
 *
 * @type {number}
 */
RsMailSid.PURCHASE_HOLD_EXPIRING = 186;

/**
 * Purchase Receipt.
 *
 * Sent to the customer when he makes a purchase in online store.
 *
 * Is not sent, when staff made a purchase for the client.
 *
 * <h2>Acceptance test #1</h2>
 * <ol>
 *   <li>Go to store. Buy something.</li>
 *   <li>At confirmation order page, click "Email Receipt" button.</li>
 * </ol>
 * <h2>Acceptance test #2</h2>
 * <ol>
 *   <li>Go to user profile - Purchases.</li>
 *   <li>Near a purchase, select Actions - Email receipt.</li>
 * </ol>
 *
 * @type {number}
 */
RsMailSid.PURCHASE_PAYMENT = 52;

/**
 * Purchase Receipt.
 * Sent to the customer when staff made a purchase for the client.
 *
 * Is not sent, when client purchased anything in online store.
 *
 * @type {number}
 */
RsMailSid.PURCHASE_PAYMENT_ACCOUNT = 107;

/**
 * Purchase Receipt.
 *
 * Sent to the customer when he makes a purchase.
 *
 * <h2>Acceptance test #1</h2>
 * <ol>
 *   <li>Go to store. Buy something.</li>
 *   <li>At confirmation order page, click "Email Receipt" button.</li>
 * </ol>
 * <h2>Acceptance test #2</h2>
 * <ol>
 *   <li>Go to user profile - Purchases.</li>
 *   <li>Near a purchase, select Actions - Email receipt.</li>
 * </ol>
 *
 * @type {number}
 */
RsMailSid.PURCHASE_PAYMENT_POS = 115;

/**
 * Sent to Business Owner when the re-order level has been reached for some product.
 *
 * @type {number}
 */
RsMailSid.PURCHASE_PRODUCT_INVENTORY = 95;

/**
 * Thanks for purchasing an introductory offer.
 *
 * Sent to the client after they purchase an introductory offer.
 *
 * Whether delay sending email after purchasing is set to 0 the introductory email will be delayed 5 - 10 minutes
 *  to allow for client group recalculation to occur .
 *
 * @type {number}
 */
RsMailSid.PURCHASE_PROMOTION_INTRODUCTORY = 74;

/**
 * Send refund receipt.
 *
 * @type {number}
 */
RsMailSid.PURCHASE_REFUND = 108;

/**
 * Quiz form submission - Client.
 *
 * Send to a client informing them that a form has been submitted.
 *
 * @type {number}
 */
RsMailSid.QUIZ_FORM_SUBMITTION = 172;

/**
 * Email to wellnessliving team when user changes Quiz Subscription plan.
 *
 * @type {number}
 */
RsMailSid.QUIZ_INDEX = 174;

/**
 * Quiz submitted - Staff.
 *
 * Send to a staff member informing them that a form has been submitted.
 *
 * @type {number}
 */
RsMailSid.QUIZ_NOTIFICATION = 171;

/**
 * Quiz submitted - Staff.
 *
 * Send to a staff member informing them of a reminder.
 *
 * @type {number}
 */
RsMailSid.QUIZ_NOTIFICATION_REMIND = 173;

/**
 * Email to wellnessliving team when businesses perform actions which is exporting data
 * that indicate that they are making steps to cancel their WL account.
 *
 * @type {number}
 */
RsMailSid.REPORT_EXPORT = 177;

/**
 * New Customer Review - Staff.
 *
 * Sent to the business to inform them that they have a new customer review.
 *
 * @type {number}
 */
RsMailSid.REVIEW_ADD = 38;

/**
 * Owner Replied to Review.
 *
 * Sent to the reviewer when the business owner replied to their customer review.
 *
 * @type {number}
 */
RsMailSid.REVIEW_REPLY = 45;

/**
 * Client left a review.
 *
 * @type {number}
 */
RsMailSid.REVIEW_USER_LEFT = 216;

/**
 * Event redeems a reward (points or prizes) for client.
 *
 * @type {number}
 */
RsMailSid.REWARD_PRIZE_CLIENT = 120;

/**
 * Event redeems a reward (points or prizes) for staff.
 *
 * @type {number}
 */
RsMailSid.REWARD_PRIZE_STAFF = 121;

/**
 * Sale Has Been Made.
 *
 * Sent after staff/client makes a purchase at the point of sale or in the online store.
 *
 * @type {number}
 */
RsMailSid.SALE_STAFF = 126;

/**
 * Sent after booking a service (used in automations).
 *
 * @type {number}
 */
RsMailSid.SERVICE_BOOK = 208;

/**
 * Event when finished push certification for ios devices.
 *
 * @type {number}
 */
RsMailSid.SKIN_APPLICATION_CONNECT = 122;

/**
 * Notifies staff when CAASI captures a client request for a staff connect,
 * including their contact details and any relevant notes from the conversation.
 *
 * @type {number}
 */
RsMailSid.STAFF_CALLBACK_REQUEST = 196;

/**
 * Sends when task assigned to staff.
 *
 * @type {number}
 */
RsMailSid.TASK_ASSIGN = 104;

/**
 * Send a copy of waiver.
 *
 * @type {number}
 */
RsMailSid.TERM_COPY = 99;

/**
 * Global email campaigns allows to send email to all clients, business owners, admins, etc.
 *
 * @type {number}
 */
RsMailSid.USER_CAMPAIGN = 112;

/**
 * Request a video subscription.
 *
 * Triggers by staff member via {@link Wl_Video_Subscription_UpgradeModel.put()}.
 *
 * Is sent to administrators or to a special address if set {@link Wl_Video_Subscription_UpgradeModel.MAIL_RECIPIENT}.
 *
 * @type {number}
 */
RsMailSid.VIDEO_SUBSCRIPTION_UPGRADE = 140;

/**
 * Sent after visit the service.
 *
 * @type {number}
 */
RsMailSid.VISIT_CAMPAIGN = 94;

/**
 * Sent if a client does not show up to a service reserved by (used in automations).
 *
 * @type {number}
 */
RsMailSid.VISIT_NOSHOW = 209;

/**
 * Visit receipt.
 *
 * @type {number}
 */
RsMailSid.VISIT_RECEIPT_RECEIPT = 190;

/**
 * Email, which is sent when a Zoom license is lack.
 *
 * @type {number}
 */
RsMailSid.ZOOM_LICENSE_LACK = 149;
