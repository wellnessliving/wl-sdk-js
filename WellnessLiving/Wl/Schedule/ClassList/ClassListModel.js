/**
 * Retrieves items of class schedule.
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
   * @typedef {{}} Wl_Schedule_ClassList_ClassListModel_a_session
   * @property {string[]} a_staff Keys of staff who conduct session. Primary keys in {@link RsStaffSql} table.
   * @property {string[]} a_virtual_location List of virtual locations keys. Each value is primary key in {@link \RsLocationSql} table.
   * @property {string} dt_date Date/time of session start in UTC.
   * @property {string} dt_time Time of session start in local timezone.
   * @property {string} dtl_date Date/time of session start in location timezone.
   * @property {boolean} hide_application Whether class will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that class will not be displayed, <tt>false</tt> otherwise.
   * @property {number} i_day Day of the week when session is occurred. Constants of {@link ADateWeekSid}.
   * @property {number} i_duration Day of the week when session is occurred. Constants of {@link ADateWeekSid}.
   * @property {boolean} is_cancel <tt>true</tt> if class period was cancelled; <tt>false</tt> otherwise.
   * @property {boolean} is_virtual <tt>true</tt> if class is virtual, <tt>false</tt> otherwise.
   * @property {string} k_class Class key. Primary key in {@link RsClassSql} table.
   * @property {string} k_class_period Session key. Primary key in {@link RsClassPeriodSql} table.
   * @property {string} k_location Key of session location. Primary key in {@link RsLocationSql} table.
   * @property {string} s_title Title of session.
   */

  /**
   * List of classes sessions starting with the date {@link \Wl\Schedule\ClassList\ClassListApi::$dt_date} and in the 62 days ahead (or up to {@link \Wl\Schedule\ClassList\ClassListApi::$dt_end}). Every
   * element has next keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     Keys of staff who conduct session. Primary keys in {@link RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     List of virtual locations keys. Each value is primary key in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date/time of session start in UTC.
   *   </dd>
   *   <dt>
   *     string <var>dt_time</var>
   *   </dt>
   *   <dd>
   *     Time of session start in local timezone.
   *   </dd>
   *   <dt>
   *     string <var>dtl_date</var>
   *   </dt>
   *   <dd>
   *     Date/time of session start in location timezone.
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Whether class will be hidden in the White Label mobile application.
   *      <tt>true</tt> means that class will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     int <var>i_day</var>
   *   </dt>
   *   <dd>
   *     Day of the week when session is occurred. Constants of {@link ADateWeekSid}.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     Day of the week when session is occurred. Constants of {@link ADateWeekSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_cancel</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if class period was cancelled; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if class is virtual, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     Class key. Primary key in {@link RsClassSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     Session key. Primary key in {@link RsClassPeriodSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Key of session location. Primary key in {@link RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Title of session.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ClassList_ClassListModel_a_session[]}
   */
  this.a_session = undefined;

  /**
   * Date of list start in location timezone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Date of list end in location timezone.
   *
   * Empty to end after a period {@link ClassListApi::DEFAULT_PERIOD} after start date {@link \Wl\Schedule\ClassList\ClassListApi::$dt_date}.
   *
   * @get get
   * @type {string}
   */
  this.dt_end = "";

  /**
   * Whether need to retrieve list of classes sessions regardless tab specified in {@link EventListApi::$k_class_tab}.
   *
   * * <tt>true</tt> - retrieve list regardless specified tab.
   * * <tt>false</tt> - retrieve list only for specific tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * <tt>true</tt> - list of sessions contains sessions from different timezones; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_timezone_different = undefined;

  /**
   * <tt>true</tt> - If exist at least one virtual event by specific {@link \Wl\Schedule\ClassList\ClassListApi::$k_business} and {@link \Wl\Schedule\ClassList\ClassListApi::$k_class_tab},
   * <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * Business primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Primary key of booking tab in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql} table.
   *
   * <tt>0</tt> means system default tab.
   * ## Will be ignored if {@link ClassListApi::$is_tab_all} is <tt>true</tt>.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * Whether canceled class periods will be displayed or not.
   *
   * <tt>true</tt> - canceled class periods will be displayed;
   * <tt>false</tt> - canceled class periods will not be displayed.
   *
   * @get get
   * @type {boolean}
   */
  this.show_cancel = false;

  /**
   * Current user key.
   *
   * <tt>null</tt> if user is not signed in.
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
  return {"a_field": {"a_session": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"dt_end": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"is_timezone_different": {"get": {"result": true}},"is_virtual_service": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"show_cancel": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ClassList_ClassListModel.instanceGet
 * @param {string} uid Current user key. <tt>null</tt> if user is not signed in.
 * @param {string} k_business Business primary key in {@link RsBusinessSql} table.
 * @param {string} k_class_tab Primary key of booking tab in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql} table. <tt>0</tt> means system default tab. ## Will be ignored if {@link ClassListApi::$is_tab_all} is <tt>true</tt>.
 * @param {string} dt_date Date of list start in location timezone.
 * @param {boolean} show_cancel Whether canceled class periods will be displayed or not. <tt>true</tt> - canceled class periods will be displayed; <tt>false</tt> - canceled class periods will not be displayed.
 * @returns {Wl_Schedule_ClassList_ClassListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */