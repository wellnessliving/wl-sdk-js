/**
 * Retrieves information about an event element.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_Book_EventView_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_event,uid";

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_age_restrictions
   * @property {?number} i_age_from The minimum age for participation in the event.
   * `null` if there's no minimum age set or information isn't available.
   * @property {?number} i_age_to The age limit for participation in the event.
   *    `null` if there's no age limit set or information isn't available.
   * @property {boolean} is_age_public `true` if age restrictions are public and available, `false` if they're hidden.
   * When restrictions are hidden and the current user isn't a staff member, the age range will be empty.
   */

  /**
   * Displays information about age restrictions for this event.
   *
   * An empty array if there are no age restrictions.
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_age_restrictions}
   */
  this.a_age_restrictions = {};

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_book_available
   * @property {string} dt_date Date/time when the session starts. In UTC.
   * @property {string} k_class_period Class session primary keys.
   */

  /**
   * Retrieves information about an event item.
   *
   * Received only if {@link Wl_Event_Book_EventView_ElementModel.k_event} has been specified.
   * In this case, other fields aren't receivers.
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_book_available[]}
   */
  this.a_book_available = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_business_policy
   * @property {number[]} a_payment_reattempt_not_decline_reason List of not allowed decline reasons to payment reattempt. Each element is one of {@link Thoth_WlPay_PayExceptionSid} constants.
   * @property {boolean[]} a_wait_service Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.
   * @property {number} i_book_before Minimum hours|days|months before class should be booked.
   * @property {number} i_book_future Maximum hours|days|months after class can be booked.
   * @property {number} i_cancel Minimum hours|days|months before class should be canceled without penalty.
   * @property {number} i_promote Minimum hours|days|months before class should be promoted from wait list.
   * @property {number} i_promote_fastest_response Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.
   * @property {number} i_promote_require_confirm Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.
   * @property {number} i_reattempt_count Number of failed auto-payments reattempts.
   * @property {number} id_book_before Hours|days|months from {@link ADurationSid}.
   * @property {number} id_book_future Hours|days|months from {@link ADurationSid}.
   * @property {number} id_cancel Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote_fastest_response Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote_require_confirm Hours|days|months from {@link ADurationSid}.
   * @property {boolean} is_book_inside_active_pay_period if `true` - clients with purchase options are only allowed
   * to book sessions within their current paid period, `false` - during purchase option's duration.
   * @property {boolean} is_disable_promotion 1 if a client's automatic payment fails, their account should not be
   * debited and their purchase option becomes inactive, 0 - otherwise. Default 0.
   * @property {boolean} is_enable_payment_penalty Whether to charge penalty after final auto-payment attempt.
   * @property {boolean} is_enable_payment_reattempt Whether to reattempt failed auto-payments.
   * @property {boolean} is_enable_staff_ip_restriction Whether to restrict which IP addresses staff can login from.
   * @property {boolean} is_prevent_booking 1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0.
   * @property {boolean} is_staff_restrict If true, client can not choose provider while appointment wizard.
   * @property {boolean} is_wait Enable\disable wait list.
   * @property {string} k_currency Currency from rs.currency table.
   * @property {string} k_timezone Timezone from get.timezone table.
   * @property {string} m_payment_penalty Penalty amount to charge after final auto-payment attempt.
   * @property {string} url_custom Custom Url of a business
   */

  /**
   * Business policies connected to clients and bookings.
   *
   * Contains the same structure as {@link Wl_Business_Config_BusinessConfigModel.a_business_policy}.
   *
   * If the event has custom overrides, those policies are used; otherwise, the default
   *  business policies are returned.
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_business_policy}
   */
  this.a_business_policy = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_class_logo
   * @property {number} [i_height] Is returned only if staff has a photo. Image height.
   * @property {number} [i_width] Is returned only if staff has a photo. Image width.
   * @property {number} [id_gender] Is returned only if staff does not have a photo. ID of staff gender. One of {@link AGenderSid} constants.
   * @property {string} [url_logo] Is returned only if staff has a photo. URL to image.
   */

  /**
   * The logo of event.
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_class_logo}
   */
  this.a_class_logo = undefined;

  /**
   * The list of keys from class tab.
   *
   * @get result
   * @type {string[]}
   */
  this.a_class_tab = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_staff_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {string} uid Key of the user.
   * @property {string} url_logo URL to image.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_schedule_a_staff
   * @property {string} k_staff @deprecated Legacy staff key. Returned only for applications from allow-list.
   * @property {string} s_name The staff member name.
   * @property {string} s_surname The first letter of staff member's surname.
   * @property {string} uid_staff The user key of the staff member.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_schedule_a_repeat
   * @property {number} i_repeat Count of the periods which specified in `id_repeat`.
   * @property {number} id_repeat Measuring unit of `i_repeat` (week, month, year). One of {@link ADurationSid} constants.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_schedule
   * @property {boolean[]} a_day Days of the week when the session occurs.
   * Keys are weekday numbers (1 = Monday, 7 = Sunday),
   * values are always `true`.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_schedule_a_repeat} a_repeat Repeat periodicity instructions.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_schedule_a_staff[]} a_staff A list of staff members who conduct the session. Every element has the following next keys:
   * @property {string[]} a_virtual_location List of virtual locations.
   * @property {string} dt_end The end date of the session.
   * The local date without time.
   * @property {string} dt_start The start date of the session.
   * The local date without time.
   * @property {boolean} hide_location `true` if the location should be hidden in the event details. Hide if the event is virtual or if the business
   * only has one location. `false` otherwise.
   * @property {number} i_capacity The class capacity.
   * @property {number} i_duration The duration of the class in seconds.
   * @property {boolean} is_virtual This will be `true` if the session is not held in person but offered remotely. It will be `false` otherwise.
   * @property {string} f_price The price of the session, if it can be purchased separately.
   * @property {string} k_class_period The key of the class period.
   * @property {string} k_location The key of the location where the session is held.
   * @property {string} k_resource_location Structured off-site location data used by the calendar attachment.
   * @property {string} s_location The location title.
   * @property {string} s_time The time when session occurred.
   * A textual representation of the start and end time of a session. Example: `10:00 am - 11:00 am`
   * @property {string} s_timezone The name of the timezone in which the session is held.
   * @property {string} text_room The room of the event.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of the {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by `id_period` between individual payments.
   * @property {string} k_currency The payment currency Key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_class_logo
   * @property {number} [i_height] Is returned only if staff has a photo. Image height.
   * @property {number} [i_width] Is returned only if staff has a photo. Image width.
   * @property {number} [id_gender] Is returned only if staff does not have a photo. ID of staff gender. One of {@link AGenderSid} constants.
   * @property {string} [url_logo] Is returned only if staff has a photo. URL to image.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event_a_book_available
   * @property {string} dt_date Date/time when the session starts. In UTC.
   * @property {string} k_class_period Class session primary keys.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_event
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_book_available[]} a_book_available List of sessions available for booking.
   * See {@link Wl_Event_Book_EventView_ElementModel.a_book_available}.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_class_logo} a_class_logo Image of event. See {@link Wl_Event_Book_EventView_ElementModel.a_class_logo}.
   * @property {string[]} a_class_tab Class tab keys. See {@link Wl_Event_Book_EventView_ElementModel.a_class_tab}.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_installment_template[]} a_installment_template List of installment plans. See {@link Wl_Event_Book_EventView_ElementModel.a_installment_template}.
   * @property {{}[]} a_makeup_class Classes selected for make-up sessions. See {@link Wl_Event_Book_EventView_ElementModel.a_makeup_class}.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_schedule[]} a_schedule Schedule of event sessions. See {@link Wl_Event_Book_EventView_ElementModel.a_schedule}.
   * @property {string[]} a_shop_category IDs of online store category.
   * @property {Wl_Event_Book_EventView_ElementModel_a_event_a_staff_logo} a_staff_logo Photos of staff. See {@link Wl_Event_Book_EventView_ElementModel.a_staff_logo}.
   * @property {string} dt_book_date Date/time of first event session.
   * @property {string} dt_early Early date of event purchase.
   * @property {string} dt_end End date of the event instance.
   * @property {string} dt_start Date of first event session.
   * @property {string} html_end Html End date of the event instance.
   * @property {string} html_start Html Date of first event session.
   * @property {boolean} hide_application Whether event will be hidden in the White Label mobile application.
   * @property {string} html_special Special instruction for event.
   * @property {number} i_makeup_cap Number of allowed make-up sessions for event.
   * `0` if make-up sessions are disabled for event or all missed sessions are available for make-up.
   * @property {number} i_session Session count in event.
   * @property {number} i_session_remain Remaining session count in event.
   * @property {boolean} is_availability_checked Whether event availability was checked.
   * @property {boolean} is_book Whether event is booked already
   * @property {boolean} is_full `true` if there are no free spots in the event and booking is available only into wait list.
   * @property {boolean} is_makeup `true` if the selected session can be a make up session; `false` otherwise.
   * @property {boolean} is_past `true` if the event session has already started or ended and is not available to book.
   * @property {boolean} is_policy_custom `true` {@link Wl_Event_Book_EventView_ElementModel.a_business_policy} contains the custom policies from the event; `false` otherwise.
   * @property {boolean} is_virtual `true` if event is virtual; `false` otherwise.
   * @property {string} k_book_class_period Key of first event session.
   * @property {string} m_price Price of the event session.
   * @property {string} m_price_total Price of the full event.
   * @property {string} m_price_total_early Price of the full event, should be used as full price while `dt_early` is actual.
   * @property {string} s_deny_reason Reason of booking restriction. For example if exception has been thrown.
   * @property {string} s_title Event title.
   * @property {string} xml_description Description of event. Ready to put into browser.
   */

  /**
   * Information for a large number of events.
   *
   * Received only if {@link Wl_Event_Book_EventView_ElementModel.s_event} has been specified. In this case, other fields are not populated.
   *
   * Key is the event class key.
   *
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_event[]}
   */
  this.a_event = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of the {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by `id_period` between individual payments.
   * @property {string} k_currency The payment currency Key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */

  /**
   * A list of installment plans. Each element has the following next keys:
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_makeup_class
   * @property {string} k_class Class key.
   * @property {?string} s_title Class title. `null` if title is unavailable for the selected language.
   */

  /**
   * Class selected for make-up sessions.
   *
   * Every element has the following keys:
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_makeup_class[]}
   */
  this.a_makeup_class = [];

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_staff
   * @property {string} k_staff @deprecated Legacy staff key. Returned only for applications from allow-list.
   * @property {string} s_name The staff member name.
   * @property {string} s_surname The first letter of staff member's surname.
   * @property {string} uid_staff The user key of the staff member.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat
   * @property {number} i_repeat Count of the periods which specified in `id_repeat`.
   * @property {number} id_repeat Measuring unit of `i_repeat` (week, month, year). One of {@link ADurationSid} constants.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule
   * @property {boolean[]} a_day Days of the week when the session occurs.
   * Keys are weekday numbers (1 = Monday, 7 = Sunday),
   * values are always `true`.
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat} a_repeat Repeat periodicity instructions.
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_staff[]} a_staff A list of staff members who conduct the session. Every element has the following next keys:
   * @property {string[]} a_virtual_location List of virtual locations.
   * @property {string} dt_end The end date of the session.
   * The local date without time.
   * @property {string} dt_start The start date of the session.
   * The local date without time.
   * @property {boolean} hide_location `true` if the location should be hidden in the event details. Hide if the event is virtual or if the business
   * only has one location. `false` otherwise.
   * @property {number} i_capacity The class capacity.
   * @property {number} i_duration The duration of the class in seconds.
   * @property {boolean} is_virtual This will be `true` if the session is not held in person but offered remotely. It will be `false` otherwise.
   * @property {string} f_price The price of the session, if it can be purchased separately.
   * @property {string} k_class_period The key of the class period.
   * @property {string} k_location The key of the location where the session is held.
   * @property {string} k_resource_location Structured off-site location data used by the calendar attachment.
   * @property {string} s_location The location title.
   * @property {string} s_time The time when session occurred.
   * A textual representation of the start and end time of a session. Example: `10:00 am - 11:00 am`
   * @property {string} s_timezone The name of the timezone in which the session is held.
   * @property {string} text_room The room of the event.
   */

  /**
   * A list of event sessions. Every element has the following next keys:
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_schedule[]}
   */
  this.a_schedule = undefined;

  /**
   * IDs of online store category.
   *
   * @get result
   * @type {string[]}
   */
  this.a_shop_category = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_staff_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {string} uid Key of the user.
   * @property {string} url_logo URL to image.
   */

  /**
   * Photos of staff members. Keys are the keys of staff members. The values are the following:
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_staff_logo}
   */
  this.a_staff_logo = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_timezone_info
   * @property {number} i_shift UTC offset in hours for this timezone.
   * @property {string} s_file Timezone identifier string (e.g. `America/New_York`).
   * @property {?string} text_abbr Timezone abbreviation (e.g. `EST`). `null` if not set.
   */

  /**
   * Timezone information for all timezones used in the event schedule.
   *
   * Key is the timezone key. Primary key in the `a_geo_timezone` table.
   * Value contains timezone information from the geo timezone registry:
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_timezone_info[]}
   */
  this.a_timezone_info = [];

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_visits_required
   * @property {number} i_count The number of visits required.
   * @property {number} i_has The number of visits the client has already attended.
   * @property {boolean} is_event `true` if this is an event, `false` if this is a class.
   * @property {string} k_class The key of the class or event.
   * @property {string} text_title The name of the class or event.
   */

  /**
   * A list of classes and events that clients should attend before this one.
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_visits_required[]}
   */
  this.a_visits_required = undefined;

  /**
   * The last available date for booking.
   * If this is set and {@link Wl_Event_Book_EventView_ElementModel.dl_book_available_start} is a set list of
   *   sessions available for booking, {@link Wl_Event_Book_EventView_ElementModel.a_book_available}
   *   should match given date range.
   *
   * @get get
   * @type {?string}
   */
  this.dl_book_available_end = null;

  /**
   * The first available date for booking.
   * If this is set and {@link Wl_Event_Book_EventView_ElementModel.dl_book_available_end} is a set list of
   *   sessions available for booking {@link Wl_Event_Book_EventView_ElementModel.a_book_available}
   *   should match given date range.
   *
   * @get get
   * @type {?string}
   */
  this.dl_book_available_start = null;

  /**
   * That date that should be used to go to the booking wizard.
   *
   * @get result
   * @type {?string}
   */
  this.dt_book_date = null;

  /**
   * The early registration date of the event.
   *
   * @get result
   * @type {?string}
   */
  this.dt_early = null;

  /**
   * The end date of the event.
   *
   * @get result
   * @type {string}
   */
  this.dt_end = undefined;

  /**
   * The start date of the event.
   *
   * @get result
   * @type {string}
   */
  this.dt_start = undefined;

  /**
   * Datetime of the session.
   * Is not `null` only if we need to get information for an event with a specific class period and datetime.
   * If this is `null`, then the {@link Wl_Event_Book_EventView_ElementModel.k_class_period} should be `null` too.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_session = null;

  /**
   * Whether event will be hidden in the White Label mobile application.
   * `true` means that event will not be displayed, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_application = undefined;

  /**
   * The description of the event.
   *
   * @get result
   * @type {?string}
   */
  this.html_description = null;

  /**
   * Special instruction for the event.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * Class capacity.
   *
   * `null` if no set.
   *
   * @get result
   * @type {?number}
   */
  this.i_capacity = null;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified, the returned image will have the default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified, the returned image will have the default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Number of allowed make-up sessions for event.
   *
   * `0` if make-up sessions are disabled for event or all missed sessions are available for make-up.
   *
   * @get result
   * @type {number}
   */
  this.i_makeup_cap = 0;

  /**
   * The session count.
   *
   * @get result
   * @type {number}
   */
  this.i_session = undefined;

  /**
   * The remaining session count.
   *
   * @get result
   * @type {number}
   */
  this.i_session_remain = undefined;

  /**
   * Staff image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified, the returned image will have the default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_staff_image_height = 0;

  /**
   * Staff image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified, the returned image will have the default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_staff_image_width = 0;

  /**
   * The purchase rule ID.
   * One of the {@link Wl_Classes_RequirePaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * Default required value for {@link Wl_Classes_RequirePaySid.ADVANCE} payment mode,
   *  one of {@link Wl_Classes_RequirePaySid.ONLINE} or {@link Wl_Classes_RequirePaySid.VISIT}.
   *
   * `null` means default value not selected.
   *
   * @get result
   * @see Wl_Classes_RequirePaySid
   * @type {?number}
   */
  this.id_pay_require_option = null;

  /**
   * The virtual provider ID. One of the {@link Wl_Virtual_VirtualProviderSid} constants.
   *
   * `null` if an in-person event.
   *
   * @get result
   * @type {?number}
   */
  this.id_virtual_provider = null;

  /**
   * Whether the event is age restricted.
   * `true` if the event is age restricted, `false` if the event is not.
   *
   * @get result
   * @type {boolean}
   */
  this.is_age_restrict = false;

  /**
   * `true` if the event availability was checked; `false` if the event has too many sessions, and calculating
   *  the availability of each one takes a lot of time.
   *
   * @get result
   * @type {boolean}
   */
  this.is_availability_checked = undefined;

  /**
   * `true` if the event is already booked; `false` if the event isn't booked.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book = undefined;

  /**
   * `true` If the event is bookable; `false` if the event isn't bookable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_bookable = undefined;

  /**
   * `true` if there are no free spots in the event; booking is available only into the wait list.
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_full = undefined;

  /**
   * `true` if the selected session can be a make up session.
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_makeup = false;

  /**
   * `true` if the selected session has already started and do not available to book.
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_past = false;

  /**
   * `true` if the {@link Wl_Event_Book_EventView_ElementModel.a_business_policy} contains the custom policies from the event.
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_policy_custom = false;

  /**
   * `true` if the event can be paid with a Purchase Option only.
   * `false` if full event purchases or single session purchases are permitted.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_only = undefined;

  /**
   * `true` if clients, when they book event, which has been started, can pay only for the sessions in the future.
   * `false` if clients, when they book event, have to pay for the entire event and the number of lefts in the future sessions
   * does not matter.
   *
   * @get result
   * @type {boolean}
   */
  this.is_prorate = undefined;

  /**
   * `true` if schedule should be grouped by location time and staff,
   * `false` if all schedule elements should be independent.
   *
   * @get get
   * @type {boolean}
   */
  this.is_schedule_group = false;

  /**
   * Determines whether this event allows paying for a single session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_session_buy = undefined;

  /**
   * `true` if event is virtual; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * The ID of the session which should be used to go to the booking wizard.
   *
   * @get result
   * @type {string}
   */
  this.k_book_class_period = undefined;

  /**
   * Key of a business to which the requested event(s) belong.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of a class period to show information for.
   *
   * Is not `null` only if we need to get information for an event with a specific class period and datetime.
   * If this is `null`, then the {@link Wl_Event_Book_EventView_ElementModel.dtu_session} should be `null` too.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * The event key.
   * You can specify {@link Wl_Event_Book_EventView_ElementModel.s_event} instead to get information for a large number of events.
   *
   * @get get
   * @type {string}
   */
  this.k_event = "0";

  /**
   * The price of a single session of the event.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * The price of the all sessions of the event.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total = undefined;

  /**
   * Price of the full event should be used as full price while {@link Wl_Event_Book_EventView_ElementModel.dt_early} is actual.
   *
   * @get result
   * @type {?string}
   */
  this.m_price_total_early = null;

  /**
   * The reason why the event can't be booked.
   * Empty if {@link Wl_Event_Book_EventView_ElementModel.k_book_class_period} isn't empty.
   *
   * @get result
   * @type {string}
   */
  this.s_deny_reason = undefined;

  /**
   * A list of event keys serialized with JSON.
   * Specify instead of {@link Wl_Event_Book_EventView_ElementModel.k_event} to get information for a large number of events.
   *
   * @get get
   * @type {string}
   */
  this.s_event = "";

  /**
   * The title of the event.
   *
   * @get result
   * @type {?string}
   */
  this.s_title = null;

  /**
   * `true` if special instructions can be public,
   * `false` if they should be shown only to the clients, who booked the class.
   *
   * @get result
   * @type {boolean}
   */
  this.show_special_instructions = false;

  /**
   * `true` to show schedule, which is not published yet.
   * `false` to show only published schedule.
   *
   * @get get
   * @type {boolean}
   */
  this.show_unpublished = false;

  /**
   * End date of the event in user-friendly format.
   *
   * @get result
   * @type {string}
   */
  this.text_end = undefined;

  /**
   * Start date of the event in user-friendly format.
   *
   * @get result
   * @type {string}
   */
  this.text_start = undefined;

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  /**
   * Link to the start of the booking wizard to book the closed session from this event or the entire event.
   *
   * Can be `null` if there is no available for booking sessions.
   *
   * @get result
   * @type {?string}
   */
  this.url_book = null;

  /**
   * The description of the event.
   *
   * @get result
   * @type {?string}
   */
  this.xml_description = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_Book_EventView_ElementModel);

/**
 * @inheritDoc
 */
Wl_Event_Book_EventView_ElementModel.prototype.config=function()
{
  return {"a_field": {"a_age_restrictions": {"get": {"result": true}},"a_book_available": {"get": {"result": true}},"a_business_policy": {"get": {"result": true}},"a_class_logo": {"get": {"result": true}},"a_class_tab": {"get": {"result": true}},"a_event": {"get": {"result": true}},"a_installment_template": {"get": {"result": true}},"a_makeup_class": {"get": {"result": true}},"a_schedule": {"get": {"result": true}},"a_shop_category": {"get": {"result": true}},"a_staff_logo": {"get": {"result": true}},"a_timezone_info": {"get": {"result": true}},"a_visits_required": {"get": {"result": true}},"dl_book_available_end": {"get": {"get": true}},"dl_book_available_start": {"get": {"get": true}},"dt_book_date": {"get": {"result": true}},"dt_early": {"get": {"result": true}},"dt_end": {"get": {"result": true}},"dt_start": {"get": {"result": true}},"dtu_session": {"get": {"get": true}},"hide_application": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_capacity": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_makeup_cap": {"get": {"result": true}},"i_session": {"get": {"result": true}},"i_session_remain": {"get": {"result": true}},"i_staff_image_height": {"get": {"get": true}},"i_staff_image_width": {"get": {"get": true}},"id_pay_require": {"get": {"result": true}},"id_pay_require_option": {"get": {"result": true}},"id_virtual_provider": {"get": {"result": true}},"is_age_restrict": {"get": {"result": true}},"is_availability_checked": {"get": {"result": true}},"is_book": {"get": {"result": true}},"is_bookable": {"get": {"result": true}},"is_full": {"get": {"result": true}},"is_makeup": {"get": {"result": true}},"is_past": {"get": {"result": true}},"is_policy_custom": {"get": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_prorate": {"get": {"result": true}},"is_schedule_group": {"get": {"get": true}},"is_single_session_buy": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_book_class_period": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_event": {"get": {"get": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_deny_reason": {"get": {"result": true}},"s_event": {"get": {"get": true}},"s_title": {"get": {"result": true}},"show_special_instructions": {"get": {"result": true}},"show_unpublished": {"get": {"get": true}},"text_end": {"get": {"result": true}},"text_start": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_book": {"get": {"result": true}},"xml_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventView_ElementModel.instanceGet
 * @param {string} k_event The event key. You can specify {@link Wl_Event_Book_EventView_ElementModel.s_event} instead to get information for a large number of events.
 * @param {string} uid The user key.
 * @returns {Wl_Event_Book_EventView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */