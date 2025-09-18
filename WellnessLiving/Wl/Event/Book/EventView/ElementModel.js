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
   *   <dt>int|null <var>i_age_from</var></dt>
   *   <dd>The minimum age for participation in the event. `null` if there's no minimum age set or information isn't available.</dd>
   *   <dt>int|null <var>i_age_to</var></dt>
   *   <dd>The age limit for participation in the event. `null` if there's no age limit set or information isn't available.</dd>
   *   <dt>bool <var>is_age_public</var></dt>
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
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>Date/time when the session starts. In UTC.</dd>
   *   <dt>string <var>k_class_period</var></dt>
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
   * @property {*} i_height Is returned only if staff has a photo. Image height.
   * @property {*} i_width Is returned only if staff has a photo. Image width.
   * @property {*} id_gender Is returned only if staff does not have a photo. ID of staff gender. One of {@link AGenderSid} constants.
   * @property {*} url_logo Is returned only if staff has a photo. URL to image.
   */

  /**
   * The logo of event.
   * <dl>
   *   <dt>int [<var>i_height</var>]</dt>
   *   <dd>Is returned only if staff has a photo. Image height.</dd>
   *   <dt>int [<var>i_width</var>]</dt>
   *   <dd>Is returned only if staff has a photo. Image width.</dd>
   *   <dt>int [<var>id_gender</var>] </dt>
   *   <dd>Is returned only if staff does not have a photo. ID of staff gender. One of {@link AGenderSid} constants.</dd>
   *   <dt>string [<var>url_logo</var>]</dt>
   *   <dd>Is returned only if staff has a photo. URL to image.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_class_logo}
   */
  this.a_class_logo = undefined;

  /**
   * The list of keys from class tab.+
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
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff
   * @property {string} k_staff The staff member key.
   * @property {string} s_name The staff member name.
   * @property {string} s_surname The first letter of staff member's surname.
   * @property {number} uid_staff The user key of the staff member.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat
   * @property {number} i_repeat Count of the periods which specified in <tt>id_repeat</tt>.
   * @property {number} id_repeat Measuring unit of <tt>i_repeat</tt> (week, month, year).
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule
   * @property {{}} a_day A list of days of the week when the session has occurred.
   * Keys - a number corresponding to a day of the week (0 - Sunday, 6 - Saturday). The value is always <tt>true</tt>.
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat} a_repeat Repeat periodicity instructions.
   * <dl>
   *   <dt>int <tt>i_repeat</tt></dt>
   *   <dd>Count of the periods which specified in <tt>id_repeat</tt>.</dd>
   *   <dt>int <tt>id_repeat</tt></dt>
   *   <dd>Measuring unit of <tt>i_repeat</tt> (week, month, year).</dd>
   * </dl>
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff[]} a_staff A list of staff members who conduct the session. Every element has the following next keys:
   * <dl>
   *   <dt>string <tt>k_staff</tt></dt>
   *   <dd>The staff member key.</dd>
   *   <dt>string <tt>s_name</tt></dt>
   *   <dd>The staff member name.</dd>
   *   <dt>string <tt>s_surname</tt></dt>
   *   <dd>The first letter of staff member's surname.</dd>
   *   <dt>int <tt>uid_staff</tt></dt>
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
   * A textual representation of the start and end time of a session. Example: <tt>10:00 am - 11:00 am</tt>
   * @property {string} s_timezone The name of the timezone in which the session is held.
   * @property {string} text_room The room of the event.
   */

  /**
   * A list of event sessions. Every element has the following next keys:
   * <dl>
   *   <dt>
   *     array <var>a_day</var>
   *   </dt>
   *   <dd>
   *     A list of days of the week when the session has occurred.
   *     Keys - a number corresponding to a day of the week (0 - Sunday, 6 - Saturday). The value is always <tt>true</tt>.
   *   </dd>
   *   <dt>array <var>a_repeat</var></dt>
   *   <dd>
   *     Repeat periodicity instructions.
   *     <dl>
   *       <dt>int <var>i_repeat</var></dt>
   *       <dd>Count of the periods which specified in <var>id_repeat</var>.</dd>
   *       <dt>int <var>id_repeat</var></dt>
   *       <dd>Measuring unit of <var>i_repeat</var> (week, month, year).</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     A list of staff members who conduct the session. Every element has the following next keys:
   *     <dl>
   *       <dt>string <var>k_staff</var></dt>
   *       <dd>The staff member key.</dd>
   *       <dt>string <var>s_name</var></dt>
   *       <dd>The staff member name.</dd>
   *       <dt>string <var>s_surname</var></dt>
   *       <dd>The first letter of staff member's surname.</dd>
   *       <dt>int <var>uid_staff</var></dt>
   *       <dd>The user key of the staff member.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     List of virtual locations.
   *   </dd>
   *   <dt>
   *     string <var>dt_end</var>
   *   </dt>
   *   <dd>
   *     The end date of the session.
   *     The local date without time.
   *   </dd>
   *   <dt>
   *     string <var>dt_start</var>
   *   </dt>
   *   <dd>
   *     The start date of the session.
   *     The local date without time.
   *   </dd>
   *   <dt>
   *     bool <var>hide_location</var>
   *   </dt>
   *   <dd>
   *     `true` if the location should be hidden in the event details. Hide if the event is virtual or if the business
   *     only has one location. `false` otherwise.
   *   </dd>
   *   <dt>
   *     int <var>i_capacity</var>
   *   </dt>
   *   <dd>
   *     The class capacity.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The duration of the class in seconds.
   *   </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the session is not held in person but offered remotely. It will be `false` otherwise.
   *   </dd>
   *   <dt>
   *     string <var>f_price</var>
   *   </dt>
   *   <dd>
   *     The price of the session, if it can be purchased separately.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     The key of the class period.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The key of the location where the session is held.
   *   </dd>
   *   <dt>
   *     string <var>s_location</var>
   *   </dt>
   *   <dd>
   *     The location title.
   *   </dd>
   *   <dt>
   *     string <var>s_time</var>
   *   </dt>
   *   <dd>
   *     The time when session occurred.
   *     A textual representation of the start and end time of a session. Example: <tt>10:00 am - 11:00 am</tt>
   *   </dd>
   *   <dt>
   *     string <var>s_timezone</var>
   *   </dt>
   *   <dd>
   *     The name of the timezone in which the session is held.
   *   </dd>
   *   <dt>
   *     string <var>text_room</var>
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
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_staff_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {string} uid Key of the user.
   * @property {string} url_logo URL to image.
   */

  /**
   * Photos of staff members. Keys are the keys of staff members. The values are the following:
   * <dl>
   *   <dt>int <var>i_height</var></dt>
   *   <dd>Image height.</dd>
   *   <dt>int <var>i_width</var></dt>
   *   <dd>Image width.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>Key of the user.</dd>
   *   <dt>string <var>url_logo</var></dt>
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
   *   <dt>int <var>i_count</var></dt>
   *   <dd>The number of visits required.</dd>
   *   <dt>int <var>i_has</var></dt>
   *   <dd>The number of visits the client has already attended.</dd>
   *   <dt>bool <var>is_event</var></dt>
   *   <dd>`true` if this is an event, `false` if this is a class.</dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>The key of the class or event.</dd>
   *   <dt>string <var>text_title</var></dt>
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
   * <tt>true</tt> means that event will not be displayed, <tt>false</tt> otherwise.
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
   * <tt>true</tt> if the event is already booked; <tt>false</tt> if the event isn't booked.
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
   * `true` if the selected session has already started and do not available to book.
   * `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_past = false;

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
   * Copy of {@link \RsClassSql}.<tt>is_prorate</tt>.
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
   * <tt>true</tt> if event is virtual; <tt>false</tt> - otherwise.
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
   * Primary key in {@link \RsBusinessSql} table to that belongs requested event(s).
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
  return {"a_field": {"a_age_restrictions": {"get": {"result": true}},"a_book_available": {"get": {"result": true}},"a_business_policy": {"get": {"result": true}},"a_class_logo": {"get": {"result": true}},"a_class_tab": {"get": {"result": true}},"a_event": {"get": {"result": true}},"a_schedule": {"get": {"result": true}},"a_staff_logo": {"get": {"result": true}},"a_timezone_info": {"get": {"result": true}},"a_visits_required": {"get": {"result": true}},"dl_book_available_end": {"get": {"get": true}},"dl_book_available_start": {"get": {"get": true}},"dt_book_date": {"get": {"result": true}},"dt_early": {"get": {"result": true}},"dt_end": {"get": {"result": true}},"dt_start": {"get": {"result": true}},"dtu_session": {"get": {"get": true}},"hide_application": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_session": {"get": {"result": true}},"i_session_remain": {"get": {"result": true}},"i_staff_image_height": {"get": {"get": true}},"i_staff_image_width": {"get": {"get": true}},"id_virtual_provider": {"get": {"result": true}},"is_age_restrict": {"get": {"result": true}},"is_availability_checked": {"get": {"result": true}},"is_book": {"get": {"result": true}},"is_bookable": {"get": {"result": true}},"is_full": {"get": {"result": true}},"is_past": {"get": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_prorate": {"get": {"result": true}},"is_schedule_group": {"get": {"get": true}},"is_single_session_buy": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_book_class_period": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_event": {"get": {"get": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_deny_reason": {"get": {"result": true}},"s_event": {"get": {"get": true}},"s_title": {"get": {"result": true}},"text_end": {"get": {"result": true}},"text_start": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_book": {"get": {"result": true}},"xml_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventView_ElementModel.instanceGet
 * @param {string} k_event The event key. You can specify {@link Wl_Event_Book_EventView_ElementModel.s_event} instead to get information for a large number of events.
 * @param {string} uid The user key.
 * @returns {Wl_Event_Book_EventView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */