/**
 * Retrieves a list of classes and class information for a Class Tab.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Schedule\ClassList\ClassList68Api
 */
function Wl_Schedule_ClassList_ClassList68Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys are dates of the days inside requested date range, when there is at least one class in the business.
   * If, locations are sent as a parameter, then at least one class in the given locations.
   *
   * Values are empty arrays for now. This is done to make possible to add some information about certain dates, if we need this.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_calendar = [];

  /**
   * The list of classes keys to filter.
   * Return sessions with matching class IDs.
   *
   * If it's empty, all classes will be returned.
   *
   * @post post
   * @type {string[]}
   */
  this.a_class = [];

  /**
   * Class filter by day of the week.
   * Array of number representing the days of the week.
   * Return sessions matching the given weekdays.
   * (7 = Sunday, 1 = Monday, ..., 6 = Saturday)
   *
   * Empty array means no filtering.
   *
   * @post post
   * @see ADateWeekSid
   * @type {number[]}
   */
  this.a_day = [];

  /**
   * The list of classes keys to filter.
   * Return sessions with matching class IDs.
   *
   * If it's empty, all events will be returned.
   *
   * @post post
   * @type {string[]}
   */
  this.a_event = [];

  /**
   * The list of location keys to filter results.
   * If it's empty, schedule for all locations will be returned.
   * All given locations should be from the same business, which is sent in {@link Wl_Schedule_ClassList_ClassListModel.k_business}.
   *
   * @post post
   * @type {string[]}
   */
  this.a_location = [];

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_quick
   * @property {string} text_type Type of class ("class" || "event")
   * @property {string} k_class Class/event key.
   * @property {string} s_class Class/event title.
   * @property {number} i_class Total sessions found.
   */

  /**
   * Information about classes/events for quick filter.
   *
   * Every element has the following keys:
   * <dl>
   *   <dt>string <var>text_type</var></dt> <dd>Type of class ("class" || "event")</dd>
   *   <dt>string <var>k_class</var></dt> <dd>Class/event key.</dd>
   *   <dt>string <var>s_class</var></dt> <dd>Class/event title.</dd>
   *   <dt>int <var>i_class</var></dt> <dd>Total sessions found.</dd>
   * </dl>
   *
   * For generating this filter, all filters are applied except:
   * - {@link Wl_Schedule_ClassList_ClassList68Model.a_class};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.a_event};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.show_class};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.show_event}.
   *
   * @post result
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_quick}
   */
  this.a_quick = [];

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_session
   * @property {string[]} a_class_tab Keys of class tab.
   * @property {string[]} a_image The class image. Empty array if there is no image.
   * @property {string[]} a_search_tag Tags associated with an individual class.
   * @property {string[]} a_staff The list of staff keys for the staff member conducting the session.
   * @property {string[]} a_virtual_location The list of virtual locations keys. Each value is a location key.
   * @property {string} dt_date The date/time of the session start in UTC.
   * @property {string} dt_time The time of the session start in the local time zone.
   * @property {string} dtl_date The date/time of session start in the location's time zone.
   * @property {boolean} hide_application Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it means that the
   *  class won't be displayed. Otherwise, this will be `false` to indicate that the class will be displayed.
   * @property {string} html_description The class description.
   * @property {number} i_book Count of visits on this class.
   * @property {?number} i_capacity The capacity of the service. 'null' indicates that the capacity is not set.
   * @property {number} i_day The day of the week when session is occurred. Constant from {@link ADateWeekSid}.
   * @property {number} i_duration The duration of the session in minutes.
   * @property {number} i_wait Number of clients in wait list.
   * @property {boolean} is_cancel If `true`, this class period was canceled. Otherwise, this will be `false`.
   * @property {boolean} is_event If `true`, this is an event. Otherwise, this will be `false`.
   * @property {boolean} is_virtual If `true`, this class is virtual. Otherwise, this will be `false`.
   * @property {boolean} is_wait_list_enabled This will be `true` if user is only on the wait-list. Otherwise, this will be `false`.
   * @property {string} k_class The class key.
   * @property {string} k_class_period The class period key.
   * @property {string} k_location The key of the session's location.
   * @property {string} s_title The title of the session.
   * @property {string} url_book The direct link to start booking on the WellnessLiving website.
   */

  /**
   * A list of classes sessions starting with the date {@link Wl_Schedule_ClassList_ClassListModel.dt_date}
   * and in the 62 days ahead (or up to {@link Wl_Schedule_ClassList_ClassListModel.dt_end}).
   * Every element has the following keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_class_tab</var>
   *   </dt>
   *   <dd>
   *     Keys of class tab.
   *   </dd>
   *   <dt>
   *     string[] <var>a_image</var>
   *    </dt>
   *    <dd>
   *     The class image. Empty array if there is no image.
   *   </dd>
   *   <dt>
   *     string[] <var>a_search_tag</var>
   *   </dt>
   *   <dd>
   *     Tags associated with an individual class.
   *   </dd>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     The list of staff keys for the staff member conducting the session.
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     The list of virtual locations keys. Each value is a location key.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time of the session start in UTC.
   *   </dd>
   *   <dt>
   *     string <var>dt_time</var>
   *   </dt>
   *   <dd>
   *     The time of the session start in the local time zone.
   *   </dd>
   *   <dt>
   *     string <var>dtl_date</var>
   *   </dt>
   *   <dd>
   *     The date/time of session start in the location's time zone.
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it means that the
   *      class won't be displayed. Otherwise, this will be `false` to indicate that the class will be displayed.
   *   </dd>
   *   <dt>
   *     string <var>html_description</var>
   *   </dt>
   *   <dd>
   *     The class description.
   *   </dd>
   *   <dt>
   *     int <var>i_book</var>
   *   </dt>
   *   <dd>
   *     Count of visits on this class.
   *   </dd>
   *   <dt>
   *     int|null <var>i_capacity</var>
   *   </dt>
   *   <dd>
   *     The capacity of the service. 'null' indicates that the capacity is not set.
   *    </dd>
   *   <dt>
   *     int <var>i_day</var>
   *   </dt>
   *   <dd>
   *     The day of the week when session is occurred. Constant from {@link ADateWeekSid}.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The duration of the session in minutes.
   *   </dd>
   *   <dt>
   *     int <var>i_wait</var>
   *   </dt>
   *   <dd>
   *     Number of clients in wait list.
   *   </dd>
   *   <dt>
   *     bool <var>is_cancel</var>
   *   </dt>
   *   <dd>
   *     If `true`, this class period was canceled. Otherwise, this will be `false`.
   *   </dd>
   *    <dt>
   *      bool <var>is_event</var>
   *    </dt>
   *    <dd>
   *      If `true`, this is an event. Otherwise, this will be `false`.
   *    </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     If `true`, this class is virtual. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_wait_list_enabled</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if user is only on the wait-list. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     The class key.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     The class period key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The key of the session's location.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title of the session.
   *   </dd>
   *   <dt>
   *     string <var>url_book</var>
   *   </dt>
   *   <dd>
   *     The direct link to start booking on the WellnessLiving website.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_session[]}
   */
  this.a_session = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_time
   * @property {string} tl_start Time when the session starts. Example: value `'06:00'`.
   * @property {string} tl_end Time when the session ends. Example: value `'14:00'`.
   */

  /**
   * Class filter by time of day.
   * List of arrays with start and end time in "HH:MM" format (24h).
   * Include sessions that start between the specified time range.
   *
   * Each value is array with time parameters:
   * <dl>
   *    <dt>string <var>tl_start</var></dt>
   *    <dd>Time when the session starts. Example: value `'06:00'`.</dd>
   *    <dt>string <var>tl_end</var></dt>
   *    <dd>Time when the session ends. Example: value `'14:00'`.</dd>
   * </dl>
   *
   * Empty array means no filtering.
   *
   * @post post
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_time[]}
   */
  this.a_time = [];

  /**
   * The list start date in UTC and in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The list end date in UTC and in MySQL format.
   * <no-sdk>
   * If left empty, the default duration is {@link Wl_Schedule_ClassList_ClassListModel.DEFAULT_PERIOD} days after
   * {@link Wl_Schedule_ClassList_ClassListModel.dt_date}.
   * </no-sdk>
   *
   * @post post
   * @type {string}
   */
  this.dt_end = "";

  /**
   * ID of tab. One of {@link Wl_Classes_Tab_TabSid} constants.
   *
   * `null` if no filtering by Tab is required.
   *
   * @post post
   * @type {?number}
   */
  this.id_class_tab = null;

  /**
   * `true` means to not generate {@link Wl_Schedule_ClassList_ClassListModel.a_session} result.
   * Can be used, if you do not need full information about existing classes and result in {@link Wl_Schedule_ClassList_ClassListModel.a_calendar} is enough.
   *
   * @post post
   * @type {boolean}
   */
  this.is_response_short = false;

  /**
   * If `true`, sessions from every class tab are returned. If `false`, use the
   * {@link Wl_Schedule_ClassList_ClassListModel.k_class_tab} value.
   *
   * @post post
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will be `false`.
   *
   * @post result
   * @type {boolean}
   */
  this.is_timezone_different = undefined;

  /**
   * Class filter by type.
   * The class is virtual.
   *
   * `true`: Only virtual classes.
   * `false`: Only in-person.
   * `null` or not set: No filtering.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_virtual = null;

  /**
   * If `true`, there exists at least one virtual service by a specified
   * {@link Wl_Schedule_ClassList_ClassListModel.k_business} and {@link Wl_Schedule_ClassList_ClassListModel.k_class_tab},
   * Otherwise, this will be `false`.
   *
   * @post result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The category tab key.
   *
   * This will be `null` if not set yet.
   * This will be ignored if {@link Wl_Schedule_ClassList_ClassListModel.is_tab_all} is `true`.
   *
   * @post post
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The list of staff members to filter.
   * A comma seperated list of staff keys.
   *
   * @post post
   * @type {string}
   */
  this.s_staff = "";

  /**
   * If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
   *
   * @post post
   * @type {boolean}
   */
  this.show_cancel = false;

  /**
   * If `true`, classes will be included in the response. `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.show_class = true;

  /**
   * If `true`, events are also returned. If `false`, only classes are returned.
   *
   * @post post
   * @type {boolean}
   */
  this.show_event = false;

  /**
   * Whether to generate a quick filter.
   * If `true`, a quick filter will be generated. `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.show_quick_filter = false;

  /**
   * The user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassList_ClassList68Model);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassList_ClassList68Model.prototype.config=function()
{
  return {"a_field": {"a_calendar": {"post": {"result": true}},"a_class": {"post": {"post": true}},"a_day": {"post": {"post": true}},"a_event": {"post": {"post": true}},"a_location": {"post": {"post": true}},"a_quick": {"post": {"result": true}},"a_session": {"post": {"result": true}},"a_time": {"post": {"post": true}},"dt_date": {"post": {"post": true}},"dt_end": {"post": {"post": true}},"id_class_tab": {"post": {"post": true}},"is_response_short": {"post": {"post": true}},"is_tab_all": {"post": {"post": true}},"is_timezone_different": {"post": {"result": true}},"is_virtual": {"post": {"post": true}},"is_virtual_service": {"post": {"result": true}},"k_business": {"post": {"post": true}},"k_class_tab": {"post": {"post": true}},"s_staff": {"post": {"post": true}},"show_cancel": {"post": {"post": true}},"show_class": {"post": {"post": true}},"show_event": {"post": {"post": true}},"show_quick_filter": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ClassList_ClassList68Model.instanceGet
 * @param {string} uid The user key.
 * @param {string} k_business The business key.
 * @param {string} k_class_tab The category tab key. This will be `null` if not set yet. This will be ignored if {@link Wl_Schedule_ClassList_ClassListModel.is_tab_all} is `true`.
 * @param {string} dt_date The list start date in UTC and in MySQL format.
 * @param {boolean} show_cancel If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
 * @param {boolean} show_event If `true`, events are also returned. If `false`, only classes are returned.
 * @param {boolean} show_class If `true`, classes will be included in the response. `false` - otherwise.
 * @returns {Wl_Schedule_ClassList_ClassList68Model}
 * @see Core_Spa_Model.instanceGet()
 */