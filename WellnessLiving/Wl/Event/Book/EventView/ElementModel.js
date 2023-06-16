/**
 * Retrieves information about event item.
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
   * @property {?number} i_age_from Age from that event is allowed. `null` if minimal age is not limited or information is not available.
   * @property {?number} i_age_to Age till that event is allowed. `null` if minimal age is not limited or information is not available.
   * @property {boolean} is_age_public `true` if age restrictions are public and available, `false` if they are hidden.
   * When restrictions are hidden and current user is not a staff member, age range will be empty.
   */

  /**
   * Information about age restrictions for this event.
   *
   * Empty array if there are no restrictions based on the age.
   *
   * <dl>
   *   <dt>int|null <var>i_age_from</var></dt>
   *   <dd>Age from that event is allowed. `null` if minimal age is not limited or information is not available.</dd>
   *   <dt>int|null <var>i_age_to</var></dt>
   *   <dd>Age till that event is allowed. `null` if minimal age is not limited or information is not available.</dd>
   *   <dt>bool <var>is_age_public</var></dt>
   *   <dd>`true` if age restrictions are public and available, `false` if they are hidden.
   *     When restrictions are hidden and current user is not a staff member, age range will be empty.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_age_restrictions}
   */
  this.a_age_restrictions = [];

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_book_available
   * @property {string} dt_date Date/time when session starts. In UTC.
   * @property {string} k_class_period Class session keys.
   */

  /**
   * List of sessions available for booking. Every element has next keys:
   * <dl>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>Date/time when session starts. In UTC.</dd>
   *   <dt>string <var>k_class_period</var></dt>
   *   <dd>Class session keys.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_book_available[]}
   */
  this.a_book_available = undefined;

  /**
   * All business policies connected to clients and bookings.
   *
   * Has the same structure as {@link Wl_Business_Config_BusinessConfigModel.a_business_policy}.
   *
   * If policies are overwritten for the certain event, then this event policies will be in the result.
   * Business policies will be otherwise.
   *
   * @get result
   * @type {{}}
   */
  this.a_business_policy = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_class_logo
   * @property {*} i_height Is returned only if staff has photo. Image height.
   * @property {*} i_width Is returned only if staff has photo. Image width.
   * @property {*} id_gender Is returned only if staff does not have photo. ID of staff gender. One of {@link Wl_Gender_GenderSid} constants.
   * @property {*} url_logo Is returned only if staff has photo. URL to image.
   */

  /**
   * Image of event:
   * <dl>
   *   <dt>int [<var>i_height</var>]</dt>
   *   <dd>Is returned only if staff has photo. Image height.</dd>
   *   <dt>int [<var>i_width</var>]</dt>
   *   <dd>Is returned only if staff has photo. Image width.</dd>
   *   <dt>int [<var>id_gender</var>] </dt>
   *   <dd>Is returned only if staff does not have photo. ID of staff gender. One of {@link Wl_Gender_GenderSid} constants.</dd>
   *   <dt>string [<var>url_logo</var>]</dt>
   *   <dd>Is returned only if staff has photo. URL to image.</dd>
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
   * Keys - keys of events; values - events data (structure is the same as in array described below).
   *
   * @get result
   * @type {{}}
   */
  this.a_event = undefined;

  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff
   * @property {string} k_staff Staff key.
   * @property {string} s_name Staff name.
   * @property {string} s_surname First letter of staff surname.
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat
   * @property {number} i_repeat Count of the periods which specified in <tt>id_repeat</tt>.
   * @property {number} id_repeat Measuring unit of <tt>i_repeat</tt> (week, month, year).
   */
  /**
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_schedule
   * @property {{}} a_day List of week days when session is occurred. Keys - numbers of week day (0 - Sunday, 6 - Saturday);
   *  values - always <tt>true</tt>.
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat} a_repeat Repeat periodicity instructions.
   * <dl>
   *   <dt>int <tt>i_repeat</tt></dt>
   *   <dd>Count of the periods which specified in <tt>id_repeat</tt>.</dd>
   *   <dt>int <tt>id_repeat</tt></dt>
   *   <dd>Measuring unit of <tt>i_repeat</tt> (week, month, year).</dd>
   * </dl>
   * @property {Wl_Event_Book_EventView_ElementModel_a_schedule_a_repeat_a_staff[]} a_staff List of staff who conduct session. Every element has next keys:<dl>
   *   <dt>string <tt>k_staff</tt></dt>
   *   <dd>Staff key.</dd>
   *   <dt>string <tt>s_name</tt></dt>
   *   <dd>Staff name.</dd>
   *   <dt>string <tt>s_surname</tt></dt>
   *   <dd>First letter of staff surname.</dd>
   * </dl>
   * @property {string[]} a_virtual_location List of virtual locations. Each value is location key.
   * @property {string} dt_end End date of session.
   * @property {string} dt_start Start date of session.
   * @property {number} i_capacity Class capacity.
   * @property {number} i_duration Duration of class in seconds.
   * @property {boolean} is_virtual <tt>true</tt> - if event is virtual, <tt>false</tt> - otherwise.
   * @property {string} k_location Location key.
   * @property {string} s_location Location title.
   * @property {string} s_time Time when session is occurred.
   * @property {string} s_timezone Location timezone abbreviation.
   */

  /**
   * Schedule of event sessions. Every element has next keys:
   * <dl>
   *   <dt>array <var>a_day</var></dt>
   *   <dd>
   *      List of week days when session is occurred. Keys - numbers of week day (0 - Sunday, 6 - Saturday);
   *      values - always <tt>true</tt>.
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
   *   <dt>array[] <var>a_staff</var></dt>
   *   <dd>List of staff who conduct session. Every element has next keys:<dl>
   *       <dt>string <var>k_staff</var></dt>
   *       <dd>Staff key.</dd>
   *       <dt>string <var>s_name</var></dt>
   *       <dd>Staff name.</dd>
   *       <dt>string <var>s_surname</var></dt>
   *       <dd>First letter of staff surname.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string[] <var>a_virtual_location</var></dt>
   *   <dd>List of virtual locations. Each value is location key.</dd>
   *   <dt>string <var>dt_end</var></dt>
   *   <dd>End date of session.</dd>
   *   <dt>string <var>dt_start</var></dt>
   *   <dd>Start date of session.</dd>
   *   <dt>int <var>i_capacity</var></dt>
   *   <dd>Class capacity.</dd>
   *   <dt>int <var>i_duration</var></dt>
   *   <dd>Duration of class in seconds.</dd>
   *   <dt>bool <var>is_virtual</var></dt>
   *   <dd><tt>true</tt> - if event is virtual, <tt>false</tt> - otherwise.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Location key.</dd>
   *   <dt>string <var>s_location</var></dt>
   *   <dd>Location title.</dd>
   *   <dt>string <var>s_time</var></dt>
   *   <dd>Time when session is occurred.</dd>
   *   <dt>string <var>s_timezone</var></dt>
   *   <dd>Location timezone abbreviation.</dd>
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
   * Photos of staff. Keys - IDs of staff; values - information about staff photo:
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
   * @typedef {{}} Wl_Event_Book_EventView_ElementModel_a_visits_required
   * @property {number} i_count Number of visits.
   * @property {boolean} is_event `true` if this is an event, `false` if this is a class.
   * @property {string} k_class Key of the class or event.
   * @property {string} text_title Name of the class or event.
   */

  /**
   * List of classes and events, which client should visit before this one.
   *
   * <dl>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>Number of visits.</dd>
   *   <dt>bool <var>is_event</var></dt>
   *   <dd>`true` if this is an event, `false` if this is a class.</dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>Key of the class or event.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Name of the class or event.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Event_Book_EventView_ElementModel_a_visits_required[]}
   */
  this.a_visits_required = undefined;

  /**
   * Book available end date.
   * If is set and {@link Wl_Event_Book_EventView_ElementModel.dl_book_available_start} is set list of sessions
   *   available for booking {@link Wl_Event_Book_EventView_ElementModel.get()} should match given date range.
   *
   * @get get
   * @type {?string}
   */
  this.dl_book_available_end = null;

  /**
   * Book available start date.
   * If is set and {@link Wl_Event_Book_EventView_ElementModel.dl_book_available_end} is set list of sessions
   *   available for booking {@link Wl_Event_Book_EventView_ElementModel.get()} should match given date range.
   *
   * @get get
   * @type {?string}
   */
  this.dl_book_available_start = null;

  /**
   * Date/time of first event session.
   *
   * @get result
   * @type {?string}
   */
  this.dt_book_date = null;

  /**
   * Early date of event purchase.
   *
   * @get result
   * @type {?string}
   */
  this.dt_early = null;

  /**
   * End date of the event instance.
   *
   * @get result
   * @type {string}
   */
  this.dt_end = undefined;

  /**
   * Date of first event session.
   *
   * @get result
   * @type {string}
   */
  this.dt_start = undefined;

  /**
   * Whether event will be hidden in the White Label mobile application.
   * <tt>true</tt> means that event will not be displayed, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_application = undefined;

  /**
   * Special instruction for event.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Session count in event.
   *
   * @get result
   * @type {number}
   */
  this.i_session = undefined;

  /**
   * Staff image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_staff_image_height = 0;

  /**
   * Staff image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_staff_image_width = 0;

  /**
   * Virtual provider ID. One of {@link Wl_Virtual_VirtualProviderSid} constants.
   *
   * <tt>null</tt> for not virtual classes.
   *
   * @get result
   * @type {?number}
   */
  this.id_virtual_provider = null;

  /**
   * <tt>true</tt> if event is booked already; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book = undefined;

  /**
   * <tt>true</tt> if there are no free spots in the event; booking is available only into wait list. <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_full = undefined;

  /**
   * `true` if event can be paid with pricing option only.
   * `false` if full event purchase or single session purchase are allowed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_only = undefined;

  /**
   * Whether this event allows paying for single session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_session_buy = undefined;

  /**
   * <tt>true</tt> -if event is virtual; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * ID of first event session.
   *
   * @get result
   * @type {string}
   */
  this.k_book_class_period = undefined;

  /**
   * Event ID.
   *
   * @get get
   * @type {string}
   */
  this.k_event = "0";

  /**
   * Price of the event session.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Price of the full event.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total = undefined;

  /**
   * Price of the full event, should be used as full price while <var>dt_early</var> is actual.
   *
   * @get result
   * @type {?string}
   */
  this.m_price_total_early = null;

  /**
   * Reason of booking restriction. For example if exception has been thrown.
   *
   * @get result
   * @type {string}
   */
  this.s_deny_reason = undefined;

  /**
   * Serialized with JSON list of event keys.
   *
   * @get get
   * @type {string}
   */
  this.s_event = "";

  /**
   * Event title.
   *
   * @get result
   * @type {?string}
   */
  this.s_title = null;

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  /**
   * Description of event. Ready to put into browser.
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
  return {"a_field": {"a_age_restrictions": {"get": {"result": true}},"a_book_available": {"get": {"result": true}},"a_business_policy": {"get": {"result": true}},"a_class_logo": {"get": {"result": true}},"a_class_tab": {"get": {"result": true}},"a_event": {"get": {"result": true}},"a_schedule": {"get": {"result": true}},"a_staff_logo": {"get": {"result": true}},"a_visits_required": {"get": {"result": true}},"dl_book_available_end": {"get": {"get": true}},"dl_book_available_start": {"get": {"get": true}},"dt_book_date": {"get": {"result": true}},"dt_early": {"get": {"result": true}},"dt_end": {"get": {"result": true}},"dt_start": {"get": {"result": true}},"hide_application": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_session": {"get": {"result": true}},"i_staff_image_height": {"get": {"get": true}},"i_staff_image_width": {"get": {"get": true}},"id_virtual_provider": {"get": {"result": true}},"is_book": {"get": {"result": true}},"is_full": {"get": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_single_session_buy": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_book_class_period": {"get": {"result": true}},"k_event": {"get": {"get": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_deny_reason": {"get": {"result": true}},"s_event": {"get": {"get": true}},"s_title": {"get": {"result": true}},"uid": {"get": {"get": true}},"xml_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventView_ElementModel.instanceGet
 * @param {string} k_event Event ID.
 * @param {string} uid User key.
 * @returns {Wl_Event_Book_EventView_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */