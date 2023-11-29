/**
 * An endpoint that retrieves a list of classes and class information for a Class Tab.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ClassList_ClassListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_class_tab,dt_date,show_cancel";

  /**
   * Keys are dates of the days inside requested date range, when there is at least one class in the business.
   * If, locations are sent as a parameter, then at least one class in the given locations.
   *
   * Values are empty arrays for now. This is done to make possible to add some information about certain dates, if we need this.
   *
   * @get result
   * @var {{}[]}
   */
  this.a_calendar = [];

  /**
   * The list of location keys to filter results.
   * If it's empty, schedule for all locations will be returned.
   * All given locations should be from the same business, which is sent in {@link ClassListModel::$k_business}.
   *
   * @get get
   * @var {string[]}
   */
  this.a_location = [];

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassListModel_a_session
   * @property {string[]} a_class_tab Keys of class tab.
   * @property {string[]} a_staff The list of staff keys for the staff member conducting the session.
   * @property {string[]} a_virtual_location The list of virtual locations keys. Each value is a location key.
   * @property {string} dt_date The date/time of the session start in UTC.
   * @property {string} dt_time The time of the session start in the local time zone.
   * @property {string} dtl_date The date/time of session start in the location's time zone.
   * @property {boolean} hide_application Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it means that the
   *  class won't be displayed. Otherwise, this will be `false` to indicate that the class will be displayed.
   * @property {number} i_day The day of the week when session is occurred. Constant from {@link ADateWeekSid}.
   * @property {number} i_duration The duration of the session in minutes.
   * @property {boolean} is_cancel If `true`, this class period was canceled. Otherwise, this will be `false`.
   * @property {boolean} is_virtual If `true`, this class is virtual. Otherwise, this will be `false`.
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
   *     bool <var>is_cancel</var>
   *   </dt>
   *   <dd>
   *     If `true`, this class period was canceled. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     If `true`, this class is virtual. Otherwise, this will be `false`.
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
   * @get result
   * @type {Wl_Schedule_ClassList_ClassListModel_a_session[]}
   */
  this.a_session = undefined;

  /**
   * The list start date in UTC and in MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The list end date in UTC and in MySQL format.
   * If left empty, the default duration is {@link Wl_Schedule_ClassList_ClassListModel.DEFAULT_PERIOD} days after
   * {@link Wl_Schedule_ClassList_ClassListModel.dt_date}.
   *
   * @get get
   * @type {string}
   */
  this.dt_end = "";

  /**
   * `true` means to not generate {@link Wl_Schedule_ClassList_ClassListModel.a_session} result.
   * Can be used, if you do not need full information about existing classes and result in {@link Wl_Schedule_ClassList_ClassListModel.a_calendar} is enough.
   * any classes in the business.
   *
   * @get get
   * @var {boolean}
   */
  this.is_response_short = false;

  /**
   * If `true`, sessions from every class tab are returned. If `false`, use the
   * {@link Wl_Schedule_ClassList_ClassListModel.k_class_tab} value.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_timezone_different = undefined;

  /**
   * If `true`, there exists at least one virtual service by a specified
   * {@link Wl_Schedule_ClassList_ClassListModel.k_business} and {@link Wl_Schedule_ClassList_ClassListModel.k_class_tab},
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The category tab key.
   *
   * This will be `null` if not set yet.
   * This will be ignored if {@link Wl_Schedule_ClassList_ClassListModel.is_tab_all} is `true`.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The list of staff members to filter.
   * A comma seperated list of staff keys.
   *
   * @get get
   * @var string
   */
  this.s_staff = '';

  /**
   * If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.show_cancel = false;

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassList_ClassListModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassList_ClassListModel.prototype.config=function()
{
  return {"a_field": {"a_calendar": {"get": {"result": true}},"a_location": {"get": {"result": true}},"a_session": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"dt_end": {"get": {"get": true}},"is_response_short": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"is_timezone_different": {"get": {"result": true}},"is_virtual_service": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"s_staff": {"get": {"get": true}},"show_cancel": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ClassList_ClassListModel.instanceGet
 * @param {string} uid The user key.
 * @param {string} k_business The business key.
 * @param {string} k_class_tab The category tab key. This will be `null` if not set yet. This will be ignored if {@link Wl_Schedule_ClassList_ClassListModel.is_tab_all} is `true`.
 * @param {string} dt_date The list start date in UTC and in MySQL format.
 * @param {boolean} show_cancel If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
 * @returns {Wl_Schedule_ClassList_ClassListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */