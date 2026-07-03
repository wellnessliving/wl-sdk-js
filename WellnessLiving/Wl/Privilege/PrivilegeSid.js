/**
 * Wellnessliving-wide privileges.
 *
 * Last Used ID: 244.
 */
function Wl_Privilege_PrivilegeSid()
{
  // Empty constructor.
}

/**
 * Allows user to view, create or edit knowledge base entries, or conversational flows used by the AI Agent.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.AI_AGENT_KNOWLEDGE_BASE = 225;

/**
 * Allows user to view reporting and analytics data related to AI Agent performance or usage.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.AI_AGENT_REPORTS = 226;

/**
 * Allows user to modify configuration or conversational flows used by the AI Agents.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.AI_AGENT_SETTINGS = 227;

/**
 * Allows user to create, update, or cancel AI Agent subscription plans.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.AI_AGENT_SUBSCRIPTIONS = 228;

/**
 * View banner alert message on dashboard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ALERT_MESSAGE = 142;

/**
 * Book appointments for clients with negative account balances.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_BOOK_NEGATIVE = 209;

/**
 * Unpaid appointment booking.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_BOOK_UNPAID = 167;

/**
 * Book appointments for clients with an unsigned waiver.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_BOOK_UNSIGNED = 203;

/**
 * Edit appointment at my location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_EDIT = 50;

/**
 * Change/View all appointment.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_FOREIGN = 49;

/**
 * Edit appointment schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_PERIOD = 51;

/**
 * View appointment.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.APPOINTMENT_VIEW = 52;

/**
 * Ability to book clients outside their current paid period.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_OUTSIDE_PAID_PERIOD = 141;

/**
 * Ability to book clients over capacity during or after the services have been scheduled.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_OVER_CAPACITY = 154;

/**
 * Ability to book assets which are booked for another service or set as unavailable.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_UNAVAILABLE_ASSETS = 138;

/**
 * Ability to schedule staff members who are booked for another service or set as unavailable.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_UNAVAILABLE_STAFF = 137;

/**
 * Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_UNPAID_RECURRING_APPOINTMENT = 231;

/**
 * Ability to book clients into recurring services even if they do not have an applicable Purchase Option to cover all visits.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_UNPAID_RECURRING_CLASS = 232;

/**
 * Unpaid asset recurring booking.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BOOK_UNPAID_RECURRING_RESOURCE = 233;

/**
 * Manage business.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_EDIT = 1;

/**
 * Change business email settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_EMAIL = 117;

/**
 * Change business policies.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_POLICY = 120;

/**
 * Change available services in business.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_SERVICE = 118;

/**
 * Change services privileges apply.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_SERVICE_APPLY = 145;

/**
 * Change services privileges apply (third button requires second privilege).
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_SERVICE_APPLY_CUSTOM = 165;

/**
 * Change Design Settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_SKIN = 19;

/**
 * Change business SMS settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_SMS = 169;

/**
 * Change business URLs.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_URL = 119;

/**
 * Change business online waiver.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.BUSINESS_WAIVER = 121;

/**
 * Perform Cash Out.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CASH_OUT = 82;

/**
 * Edit deposits while perform Cash Out.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CASH_OUT_DEPOSIT = 83;

/**
 * Perform editing of Cash Out.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CASH_OUT_EDIT = 84;

/**
 * Manage clients' Credit Cards.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CC_MANAGE = 35;

/**
 * Manage clients' Credit Cards manually.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CC_MANAGE_MANUAL = 208;

/**
 * Edit class schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_ATTENDANCE = 48;

/**
 * Book classes for clients with negative account balances.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_BOOK_NEGATIVE = 210;

/**
 * Add clients to the attendance list of a service, even if they do not have an applicable purchase option.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_BOOK_UNPAID = 79;

/**
 * Book classes for clients with an unsigned waiver.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_BOOK_UNSIGNED = 201;

/**
 * Edit classes at my location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_EDIT = 3;

/**
 * Allows overriding certain class fields (capacity, price, etc.) when schedule is added.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_EDIT_SESSIONS = 238;

/**
 * Change/View all classes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_FOREIGN = 17;

/**
 * Lock search bar on class attendance list.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_LOCK_SEARCH = 152;

/**
 * Edit class schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CLASS_PERIOD = 5;

/**
 * Add and view client's contact logs.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.CONTACT_LOG_MANAGE = 135;

/**
 * Add, remove, and edit gift cards.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.COUPON = 31;

/**
 * Delete shared dashboard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.DASHBOARD_DELETE = 131;

/**
 * Edit shared dashboard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.DASHBOARD_EDIT = 130;

/**
 * Share dashboard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.DASHBOARD_SHARE = 129;

/**
 * Add, remove and edit discount codes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.DISCOUNT_CODE = 76;

/**
 * Configure Constant Contact settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.EML_CONSTANT_CONTACT = 123;

/**
 * Configure MailChimp settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.EML_MAILCHIMP = 122;

/**
 * Edit class schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_ATTENDANCE = 55;

/**
 * Book events for clients with negative account balances.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_BOOK_NEGATIVE = 211;

/**
 * Add clients to the attendance list of a service, even if they do not have an applicable purchase option.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_BOOK_UNPAID = 80;

/**
 * Book events for clients with an unsigned waiver.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_BOOK_UNSIGNED = 202;

/**
 * Edit classes at my location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_EDIT = 54;

/**
 * Allows overriding certain event fields (capacity, price, etc.) when schedule is added.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_EDIT_SESSIONS = 239;

/**
 * Change/View all classes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_FOREIGN = 53;

/**
 * Lock search bar on enrollment attendance list.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENROLLMENT_LOCK_SEARCH = 153;

/**
 * Manage Enterprise Cloud Fees.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ENTERPRISE_CLOUD_FEES = 207;

/**
 * Allows to manage leaderboard in the `FitBuilder` addon.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FITBUILDER_LEADERBOARD = 190;

/**
 * Allows to subscribe to `FitBuilder` subscription addon.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FITBUILDER_SUBSCRIPTION = 189;

/**
 * Allows to assign workouts from the `FitBuilder` addon to different services.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FITBUILDER_WORKOUT_ASSIGN = 188;

/**
 * Allows to add, edit and remove workouts in the `FitBuilder` addon.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FITBUILDER_WORKOUT_MANAGE = 187;

/**
 * Allow Staff members to view/complete forms for clients from any location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_ALL = 177;

/**
 * Amend apply to privilege.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_AMEND_ACCESS = 198;

/**
 * Allow staff members to make modifications to completed forms on the client profile.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_AMEND_COMPLETED = 194;

/**
 * Allow staff members to make modifications to completed forms on the client profile for all clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_AMEND_COMPLETED_ALL = 195;

/**
 * Allow staff members to make modifications to completed forms on the client profile for clients at staff location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_AMEND_COMPLETED_LOCATION = 196;

/**
 * Allow staff members to make modifications to completed forms on the client profile for self clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_AMEND_COMPLETED_MY_CLIENTS = 197;

/**
 * Allow staff members to fill in forms for clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_COMPLETE = 178;

/**
 * Allow staff members to add, edit and delete forms.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_MANAGE = 160;

/**
 * Allow Staff members to view/complete forms for clients that belong to them through service offerings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_MY_CLIENTS = 175;

/**
 * Allow Staff members to view/complete forms for clients that belong to the location that they are selected to work at.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_MY_LOCATION = 176;

/**
 * Allow staff members to delete forms from the client’s profile.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_RESPONSE_DELETE = 199;

/**
 * Allow staff members to view form responses.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.FORM_VIEW_RESPONSE = 161;

/**
 * Add holidays.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.HOLIDAY = 7;

/**
 * Allows to import clients from a CSV file.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.IMPORT_CLIENT = 215;

/**
 * Set up and modify Autymate integration.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INTEGRATION_AUTYMATE = 163;

/**
 * Set up and modify Brivo integration.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INTEGRATION_BRIVO = 179;

/**
 * Enroll into and manage the WellnessLiving Achieve App. These settings are located under Setup > Achieve Client App.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INTERFACE_ACHIEVE_APP = 87;

/**
 * Modify the look and functionality business’s widgets. These settings are located within Setup > Widgets.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INTERFACE_WIDGET_EDIT = 39;

/**
 * View the look and functionality business’s widgets. These settings are located within Setup > Widgets.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INTERFACE_WIDGET_VIEW = 110;

/**
 * Permission to Receive or Adjust quantity from the Inventory On Hand Report.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.INVENTORY_UPDATE = 157;

/**
 * Manage my locations except General information.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOCATION_EDIT = 9;

/**
 * Manage tab Location -> General.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOCATION_EDIT_GENERAL = 126;

/**
 * Manage all locations.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOCATION_FOREIGN = 8;

/**
 * Manage franchise locations.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOCATION_FRANCHISE = 109;

/**
 * Add client notes and warnings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOGIN_NOTE = 11;

/**
 * Flag clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOGIN_NOTE_RESTRICT = 12;

/**
 * View service add-ons.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOGIN_PRODUCT_VIEW = 206;

/**
 * Logs view.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.LOG_VIEW = 101;

/**
 * Access to send mails and sms to clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MAIL_SEND = 75;

/**
 * Manage announcements.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MANAGE_ANNOUNCEMENT = 200;

/**
 * Only the staff roles with this permission provided are able to edit/add/delete the business billing information.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MANAGE_BILLING_INFORMATION = 134;

/**
 * View, manage, and analyze CAASI-led conversations.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MANAGE_CAASI_CONVERSATION = 229;

/**
 * Manage hardware readers.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MANAGE_READERS = 181;

/**
 * Enable, disable, and edit daily deals.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MARKETING_DD = 43;

/**
 * Settings pertaining to all automated marketing to clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MARKETING_EMAIL = 42;

/**
 * Allows to subscribe to email marketing subscription plans and manage existing subscriptions.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MARKETING_SUBSCRIPTION = 237;

/**
 * Enabling this permission for a role will enable making and receiving calls in Message Center.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MESSAGES_CALLS = 173;

/**
 * Enabling this permission for a role will enable the role to use the ‘Assign to’ field and assign a conversation to a staff member.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MESSAGES_CONVERSATIONS = 174;

/**
 * Enabling this permission for a role will grant access to the inbox tab including viewing and sending messages in the Message Center.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MESSAGES_MANAGE = 170;

/**
 * Enabling this permission for a role will grant access to the Settings tab including modifying phone number(s) for the business.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MESSAGES_SETTINGS = 171;

/**
 * Enabling this permission for a role will grant access and changes to the Subscription Plans tab.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.MESSAGES_SUBSCRIPTION = 172;

/**
 * Receive new appointment booking / request notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_APPOINTMENT_BOOK = 60;

/**
 * Receive Appointment Booked (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_APPOINTMENT_BOOKED_AI = 218;

/**
 * Receive appointment cancellation notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_APPOINTMENT_CANCEL = 61;

/**
 * Receive appointment change notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_APPOINTMENT_CHANGE = 59;

/**
 * Receive Appointment Requested (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_APPOINTMENT_REQUEST_AI = 220;

/**
 * Receive Billing Related Query notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_BILLING_RELATED_QUERY = 224;

/**
 * Receive Cancellation Requested (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CANCELLATION_REQUEST_AI = 222;

/**
 * Receive class attendance list.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CLASS_ATTENDANCE = 56;

/**
 * Receive client class booking notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CLASS_BOOK = 57;

/**
 * Receive Class Booked (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CLASS_BOOKED_AI = 219;

/**
 * Receive Class Booking Requested (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CLASS_BOOK_AI = 221;

/**
 * Receive client class cancellation notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_CLASS_CANCEL = 58;

/**
 * Receive event attendance list.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_EVENT_ATTENDANCE = 62;

/**
 * Receive client event booking notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_EVENT_BOOK = 63;

/**
 * Receive client event cancellation notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_EVENT_CANCEL = 64;

/**
 * Permissions apply to all appointment schedules.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_FOREIGN = 65;

/**
 * Receive new lead capture widget notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_LEAD_CAPTURE = 159;

/**
 * Receive Lead Capture (AI Agent) notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_LEAD_CAPTURE_AI = 217;

/**
 * Staff with this role will receive the membership cancel mails.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_MEMBERSHIP_CANCEL = 214;

/**
 * Receive Membership or Purchase Options Query notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_MEMBERSHIP_QUERY = 223;

/**
 * Staff with this role will receive emails about reward prizes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_PRIZE_REDEMPTION = 90;

/**
 * Staff with this role will receive the inventory mails.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_PRODUCT_INVENTORY = 77;

/**
 * Receive new quiz notification form staff.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_QUIZ = 162;

/**
 * Staff with this role will receive customer review notifications.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_REVIEW = 66;

/**
 * Staff with this role will receive the sale receipts mails.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_SALE_STAFF = 136;

/**
 * Receive Staff Callback Request notification.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.NOTIFICATION_STAFF_CALLBACK_REQUEST = 216;

/**
 * Override late cancel and no show fees.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.OVERRIDE_FEE = 164;

/**
 * Manage partner program.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PARTNER_PROGRAM_MANAGE = 94;

/**
 * Access to Payment Processing.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PAYMENT_PROCESSING = 166;

/**
 * Permission to perform Physical Inventory Count.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PHYSICAL_INVENTORY_COUNT = 156;

/**
 * Staff member with this role will be able to send postcards.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.POSTCARD_SEND = 88;

/**
 * Delete shared power searches.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.POWER_SEARCH_DELETE = 106;

/**
 * Edit shared power searches.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.POWER_SEARCH_EDIT = 105;

/**
 * Share power searches with other staff members.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.POWER_SEARCH_SHARE = 107;

/**
 * Ability to request subscription plan for custom website.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PRESENCE = 149;

/**
 * Edit products but not product name and description.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PRODUCT_DESCRIPTION_EDIT = 113;

/**
 * Add, remove, and edit products in the online store.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PRODUCT_MANAGE = 34;

/**
 * Manage all clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_ALL = 24;

/**
 * This permission allows users to delete client profiles.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_DELETE = 230;

/**
 * This permission allows users to view client details throughout the interface.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_DETAIL = 67;

/**
 * Manage profile client groups (only create, delete and rename a group).
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_GROUP_MANAGE = 69;

/**
 * Manage client group members (only members, not a group itself).
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_GROUP_MEMBER_MANAGE = 191;

/**
 * Merge client profiles.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_MERGE = 213;

/**
 * Manage clients from my location.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_MY_LOCATION = 86;

/**
 * View client’s upcoming and past schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_SCHEDULE = 205;

/**
 * Manage profile client type.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_TYPE_EDIT = 68;

/**
 * Manage all clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROFILE_VIEW = 13;

/**
 * Manage progress log.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROGRESS_LOG_MANAGE = 102;

/**
 * Edit progress log in profile.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROGRESS_LOG_PROFILE = 104;

/**
 * Add, remove, and edit purchase options and packages for services.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROMOTION_MANAGE = 25;

/**
 * Allows to edit only base information about purchase option.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PROMOTION_MANAGE_BASE = 127;

/**
 * Access to edit client purchases (passes and memberships).
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PURCHASE_EDIT = 93;

/**
 * Access to view client purchases (passes and memberships).
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.PURCHASE_VIEW = 92;

/**
 * Allow to see alerts.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.RECEIVE_ALERT = 193;

/**
 * Access to view reports for all staff.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_ALL = 71;

/**
 * Reports attendance.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_ATTENDANCE = 27;

/**
 * Reports client.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_CLIENT = 26;

/**
 * Reports with cash closeout information.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_CLOSEOUT = 85;

/**
 * Export and print button in reports.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_EXPORT_PRINT = 186;

/**
 * Reports with franchise information.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_FRANCHISE = 108;

/**
 * Wellness Programs reports.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_INSURANCE = 115;

/**
 * Ability to generate, export and import insurance reimbursement files.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_INSURANCE_FILE = 155;

/**
 * Reports emails.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_MAIL = 30;

/**
 * Reports sales.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_SALE = 29;

/**
 * Ability to view purchase report for specific user.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_SALE_USER = 125;

/**
 * Reports staff.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REPORT_STAFF = 28;

/**
 * Manage assets.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.RESOURCE = 37;

/**
 * Book assets for clients with negative account balances.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.RESOURCE_BOOK_NEGATIVE = 212;

/**
 * Unpaid asset booking.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.RESOURCE_BOOK_UNPAID = 168;

/**
 * Book assets for clients with an unsigned waiver.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.RESOURCE_BOOK_UNSIGNED = 204;

/**
 * Mark client reviews as inappropriate and respond to customer comments.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REVIEW_FLAG = 18;

/**
 * Create contests on the leaderboard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REWARD_LEADERBOARD = 44;

/**
 * Rules related to point accumulation.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REWARD_POINT_MANAGE = 46;

/**
 * Clear the total accumulated points for all clients.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REWARD_POINT_RESET = 45;

/**
 * Define prizes and the number of points that are required to redeem.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.REWARD_PRIZE = 47;

/**
 * Enable SABA single sign on and create SABA accounts.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SABA = 116;

/**
 * View canceled classes from the schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_CANCELED_CLASS = 139;

/**
 * View canceled classes from the schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_CANCELED_ENROLLMENT = 140;

/**
 * Scheduling and editing future sessions of the appointments.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_FUTURE_APPOINTMENT = 95;

/**
 * Scheduling sessions of the assets.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_FUTURE_ASSETS = 128;

/**
 * Scheduling and editing future sessions of the classes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_FUTURE_CLASS = 96;

/**
 * Scheduling and editing future sessions of the events.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_FUTURE_EVENT = 99;

/**
 * Scheduling and editing past sessions of the appointments.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_PAST_APPOINTMENT = 97;

/**
 * Scheduling and editing past sessions of the classes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_PAST_CLASS = 98;

/**
 * Scheduling and editing past sessions of the events.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_PAST_EVENT = 100;

/**
 * View a summary of projected and earned service revenue generated from scheduled and completed sessions.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_SUMMARY_REVENUE_SERVICE = 234;

/**
 * View a summary of projected pay from upcoming sessions and earned pay from completed sessions, based on the staff’s schedule.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SCHEDULE_SUMMARY_REVENUE_STAFF = 235;

/**
 * Allows sign service agreement.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SERVICE_AGREEMENT_SIGN = 133;

/**
 * View, modify and delete shop categories.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SHOP_CATEGORY = 78;

/**
 * Modify the clock-in and clock-out times for staff members.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_CLOCK = 32;

/**
 * Add, remove, and edit staff profiles.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_EDIT = 14;

/**
 * Edit own staff profile.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_EDIT_OWN = 150;

/**
 * Modify pay rates for products and Purchase Options.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_MODIFY_RATES_PRODUCT = 184;

/**
 * Modify pay rates for services.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_MODIFY_RATES_SERVICE = 183;

/**
 * Modify the clock-in and clock-out times for your own staff profile.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_MY_CLOCK = 192;

/**
 * Add, remove, and edit staff pay rates.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_PAY_ALL = 20;

/**
 * Change staff role on the staff edit page.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_ROLE_CHANGE = 72;

/**
 * Edit staff role on the staff role page.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_ROLE_EDIT = 124;

/**
 * Create/Edit/Remove staff working hours.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STAFF_WORKING_HOURS = 144;

/**
 * Allow staff to override staff commission at the point of sale.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STORE_COMMISSION_OVERRIDE = 185;

/**
 * Temporarily modify the price of products and services at the point of sale.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STORE_PRICE = 41;

/**
 * Access to the point of sale store to facilitate the sale of products and services.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STORE_SELL = 40;

/**
 * Access to view and edit store settings.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.STORE_SETTINGS_EDIT = 143;

/**
 * Add, remove, and edit supplier profiles.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.SUPPLIER_MANAGE = 114;

/**
 * Access to add tasks.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TASK_ADD = 111;

/**
 * Access to view all tasks for all members.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TASK_ALL = 70;

/**
 * Access to edit tasks.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TASK_EDIT = 112;

/**
 * Access to transaction details.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TRANSACTION_DETAIL = 81;

/**
 * Access to edit transaction.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TRANSACTION_EDIT = 89;

/**
 * Access to refund transaction.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TRANSACTION_REFUND = 91;

/**
 * Access to enroll clients in tuition plans via the enrollment wizard.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TUITION_ENROLL = 242;

/**
 * Add, remove, and edit tuition plans, their settings, and assigned instances.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TUITION_MANAGE = 243;

/**
 * Cancel a client's tuition plan from the Clients tab, stopping all future installments and optionally revoking remaining session access.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TUITION_PAYMENT_CANCEL = 244;

/**
 * Access to view the tuition plan list and plan details.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.TUITION_VIEW = 241;

/**
 * Access to view and change list of video categories.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VIDEO_CATEGORY = 146;

/**
 * Access to view and change videos in the business video library.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VIDEO_SETUP = 147;

/**
 * View the Balance History & Statements tab and generate or email account statements on the client profile or the Balance Due Report.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VIEW_BALANCE_HISTORY_STATEMENTS = 240;

/**
 * Set up and modify FitLIVE integration.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VIRTUAL_SETUP = 158;

/**
 * Access to edit, delete visit notes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VISIT_NOTE_EDIT = 74;

/**
 * Access to view visit notes.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.VISIT_NOTE_VIEW = 73;

/**
 * Access to WellnessLiving Academy.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.WELLNESSLIVING_ACADEMY = 151;

/**
 * Allow access to manage integration with Zapier.
 *
 * @type {number}
 */
Wl_Privilege_PrivilegeSid.ZAPIER = 180;
