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
   * @property {?number} i_age_from The minimum age for participation in the event. `null` if there's no minimum age set or information isn't available.
   * @property {?number} i_age_to The age limit for participation in the event. `null` if there's no age limit set or information isn't available.
   * @property {boolean} is_age_public `true` if age restrictions are public and available, `false` if they're hidden.
   * When restrictions are hidden and the current user isn't a staff member, the age range will be empty.
   */

  /**
   * Displays information about age restrictions for this event.
   *
   * An empty array if there are no age restrictions.
   *
   * <dl>
   *   <dt>int|null `i_age_from`</dt>
   *   <dd>The minimum age for participation in the event. `null` if there's no minimum age set or information isn't available.</dd>
   *   <dt>int|null `i_age_to`</dt>
   *   <dd>The age limit for participation in the event. `null` if there's no age limit set or information isn't available.</dd>
   *   <dt>bool `is_age_public`</dt>
   *   <dd>`true` if age restrictions are public and available, `false` if they're hidden.
   *     When restrictions are hidden and the current user isn't a staff member, the age range will be empty.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_age_restrictions}
   */
  this.a_age_restrictions = [];

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
   * <dl>
   *   <dt>string `dt_date`</dt>
   *   <dd>Date/time when the session starts. In UTC.</dd>
   *   <dt>string `k_class_period`</dt>
   *   <dd>Class session primary keys.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_book_available[]}
   */
  this.a_book_available = undefined;

  /**
   * Displays all business policies connected to clients and bookings.
   *
   * Contains the same structure as the {@link Wl_Business_Config_BusinessConfigModel.a_business_policy} property.
   *
   * If policies are overwritten for a certain event, the impacted event's policies will be in this result.
   * Otherwise, the result will display the business policies.
   *
   * @get result
   * @type {{}}
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
   * <dl>
   *   <dt>int [`i_height`]</dt>
   *   <dd>Is returned only if staff has a photo. Image height.</dd>
   *   <dt>int [`i_width`]</dt>
   *   <dd>Is returned only if staff has a photo. Image width.</dd>
   *   <dt>int [`id_gender`] </dt>
   *   <dd>Is returned only if staff does not have a photo. ID of staff gender. One of {@link AGenderSid} constants.</dd>
   *   <dt>string [`url_logo`]</dt>
   *   <dd>Is returned only if staff has a photo. URL to image.</dd>
   * </dl>
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
   * Displays information for a large number of events.
   *
   * Received only if {@link Wl_Event_Book_EventView_ElementModel.s_event} has been specified. In this case, other fields aren't receivers.
   *
   * The event keys of this array.
   * Values of this array and subarrays with keys that correspond to all fields in this table that may be received.
   *
   * @get result
   * @type {{}}
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
   * <dl>
   *   <dt>int `i_count`</dt>
   *   <dd>The number of payments.</dd>
   *   <dt>int `id_duration`</dt>
   *   <dd>The duration of a single period. One of the {@link ADurationSid} constants.</dd>
   *   <dt>int `i_period`</dt>
   *   <dd>The number of periods specified by `id_period` between individual payments.</dd>
   *   <dt>string `k_currency`</dt>
   *   <dd>The payment currency Key.</dd>
   *   <dt>string `k_pay_installment_template`</dt>
   *   <dd>The key of the installment plan template.</dd>
   *   <dt>string `m_amount`</dt>
   *   <dd>The amount of the installment plan.</dd>
   *   <dt>string `s_duration`</dt>
   *   <dd>The title of the installment plan.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff
   * @property {string} k_staff The staff member key.
   * @property {string} s_name The staff member name.
   * @property {string} s_surname The first letter of staff member's surname.
   * @property {number} uid_staff The user key of the staff member.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat
   * @property {number} i_repeat Count of the periods which specified in `id_repeat`.
   * @property {number} id_repeat Measuring unit of `i_repeat` (week, month, year).
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule
   * @property {{}} a_day A list of days of the week when the session has occurred.
   * Keys - a number corresponding to a day of the week (0 - Sunday, 6 - Saturday). The value is always `true`.
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat} a_repeat Repeat periodicity instructions.
   * <dl>
   *   <dt>int `i_repeat`</dt>
   *   <dd>Count of the periods which specified in `id_repeat`.</dd>
   *   <dt>int `id_repeat`</dt>
   *   <dd>Measuring unit of `i_repeat` (week, month, year).</dd>
   * </dl>
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff[]} a_staff A list of staff members who conduct the session. Every element has the following next keys:
   * <dl>
   *   <dt>string `k_staff`</dt>
   *   <dd>The staff member key.</dd>
   *   <dt>string `s_name`</dt>
   *   <dd>The staff member name.</dd>
   *   <dt>string `s_surname`</dt>
   *   <dd>The first letter of staff member's surname.</dd>
   *   <dt>int `uid_staff`</dt>
   *   <dd>The user key of the staff member.</dd>
   * </dl>
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
   * @property {string} s_location The location title.
   * @property {string} s_time The time when session occurred.
   * A textual representation of the start and end time of a session. Example: `10:00 am - 11:00 am`
   * @property {string} s_timezone The name of the timezone in which the session is held.
   * @property {string} text_room The room of the event.
   */

  /**
   * A list of event sessions. Every element has the following next keys:
   * <dl>
   *   <dt>
   *     array `a_day`
   *   </dt>
   *   <dd>
   *     A list of days of the week when the session has occurred.
   *     Keys - a number corresponding to a day of the week (0 - Sunday, 6 - Saturday). The value is always `true`.
   *   </dd>
   *   <dt>array `a_repeat`</dt>
   *   <dd>
   *     Repeat periodicity instructions.
   *     <dl>
   *       <dt>int `i_repeat`</dt>
   *       <dd>Count of the periods which specified in `id_repeat`.</dd>
   *       <dt>int `id_repeat`</dt>
   *       <dd>Measuring unit of `i_repeat` (week, month, year).</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] `a_staff`
   *   </dt>
   *   <dd>
   *     A list of staff members who conduct the session. Every element has the following next keys:
   *     <dl>
   *       <dt>string `k_staff`</dt>
   *       <dd>The staff member key.</dd>
   *       <dt>string `s_name`</dt>
   *       <dd>The staff member name.</dd>
   *       <dt>string `s_surname`</dt>
   *       <dd>The first letter of staff member's surname.</dd>
   *       <dt>int `uid_staff`</dt>
   *       <dd>The user key of the staff member.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string[] `a_virtual_location`
   *   </dt>
   *   <dd>
   *     List of virtual locations.
   *   </dd>
   *   <dt>
   *     string `dt_end`
   *   </dt>
   *   <dd>
   *     The end date of the session.
   *     The local date without time.
   *   </dd>
   *   <dt>
   *     string `dt_start`
   *   </dt>
   *   <dd>
   *     The start date of the session.
   *     The local date without time.
   *   </dd>
   *   <dt>
   *     bool `hide_location`
   *   </dt>
   *   <dd>
   *     `true` if the location should be hidden in the event details. Hide if the event is virtual or if the business
   *     only has one location. `false` otherwise.
   *   </dd>
   *   <dt>
   *     int `i_capacity`
   *   </dt>
   *   <dd>
   *     The class capacity.
   *   </dd>
   *   <dt>
   *     int `i_duration`
   *   </dt>
   *   <dd>
   *     The duration of the class in seconds.
   *   </dd>
   *   <dt>
   *     bool `is_virtual`
   *   </dt>
   *   <dd>
   *     This will be `true` if the session is not held in person but offered remotely. It will be `false` otherwise.
   *   </dd>
   *   <dt>
   *     string `f_price`
   *   </dt>
   *   <dd>
   *     The price of the session, if it can be purchased separately.
   *   </dd>
   *   <dt>
   *     string `k_class_period`
   *   </dt>
   *   <dd>
   *     The key of the class period.
   *   </dd>
   *   <dt>
   *     string `k_location`
   *   </dt>
   *   <dd>
   *     The key of the location where the session is held.
   *   </dd>
   *   <dt>
   *     string `s_location`
   *   </dt>
   *   <dd>
   *     The location title.
   *   </dd>
   *   <dt>
   *     string `s_time`
   *   </dt>
   *   <dd>
   *     The time when session occurred.
   *     A textual representation of the start and end time of a session. Example: `10:00 am - 11:00 am`
   *   </dd>
   *   <dt>
   *     string `s_timezone`
   *   </dt>
   *   <dd>
   *     The name of the timezone in which the session is held.
   *   </dd>
   *   <dt>
   *     string `text_room`
   *   </dt>
   *   <dd>
   *     The room of the event.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>int `i_height`</dt>
   *   <dd>Image height.</dd>
   *   <dt>int `i_width`</dt>
   *   <dd>Image width.</dd>
   *   <dt>string `uid`</dt>
   *   <dd>Key of the user.</dd>
   *   <dt>string `url_logo`</dt>
   *   <dd>URL to image.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_staff_logo}
   */
  this.a_staff_logo = undefined;

  /**
   * Information about timezones.
   *
   * Key is timezone key, value is array with timezone information.
   *
   * @get result
   * @type {{}[]}
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
   * <dl>
   *   <dt>int `i_count`</dt>
   *   <dd>The number of visits required.</dd>
   *   <dt>int `i_has`</dt>
   *   <dd>The number of visits the client has already attended.</dd>
   *   <dt>bool `is_event`</dt>
   *   <dd>`true` if this is an event, `false` if this is a class.</dd>
   *   <dt>string `k_class`</dt>
   *   <dd>The key of the class or event.</dd>
   *   <dt>string `text_title`</dt>
   *   <dd>The name of the class or event.</dd>
   * </dl>
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
   * Key of a business.
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
  return {"a_field": {"a_age_restrictions": {"get": {"result": true}},"a_book_available": {"get": {"result": true}},"a_business_policy": {"get": {"result": true}},"a_class_logo": {"get": {"result": true}},"a_class_tab": {"get": {"result": true}},"a_event": {"get": {"result": true}},"a_installment_template": {"get": {"result": true}},"a_schedule": {"get": {"result": true}},"a_shop_category": {"get": {"result": true}},"a_staff_logo": {"get": {"result": true}},"a_timezone_info": {"get": {"result": true}},"a_visits_required": {"get": {"result": true}},"dl_book_available_end": {"get": {"get": true}},"dl_book_available_start": {"get": {"get": true}},"dt_book_date": {"get": {"result": true}},"dt_early": {"get": {"result": true}},"dt_end": {"get": {"result": true}},"dt_start": {"get": {"result": true}},"dtu_session": {"get": {"get": true}},"hide_application": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_capacity": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_session": {"get": {"result": true}},"i_session_remain": {"get": {"result": true}},"i_staff_image_height": {"get": {"get": true}},"i_staff_image_width": {"get": {"get": true}},"id_pay_require": {"get": {"result": true}},"id_pay_require_option": {"get": {"result": true}},"id_virtual_provider": {"get": {"result": true}},"is_age_restrict": {"get": {"result": true}},"is_availability_checked": {"get": {"result": true}},"is_book": {"get": {"result": true}},"is_bookable": {"get": {"result": true}},"is_full": {"get": {"result": true}},"is_makeup": {"get": {"result": true}},"is_past": {"get": {"result": true}},"is_policy_custom": {"get": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_prorate": {"get": {"result": true}},"is_schedule_group": {"get": {"get": true}},"is_single_session_buy": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_book_class_period": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_event": {"get": {"get": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_deny_reason": {"get": {"result": true}},"s_event": {"get": {"get": true}},"s_title": {"get": {"result": true}},"show_special_instructions": {"get": {"result": true}},"show_unpublished": {"get": {"get": true}},"text_end": {"get": {"result": true}},"text_start": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_book": {"get": {"result": true}},"xml_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventView_ElementModel.instanceGet
 * @param {string} k_event The event key. You can specify {@link Wl_Event_Book_EventView_ElementModel.s_event} instead to get information for a large number of events.
 * @param {string} uid The user key.
 * @returns {Wl_Event_Book_EventView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */