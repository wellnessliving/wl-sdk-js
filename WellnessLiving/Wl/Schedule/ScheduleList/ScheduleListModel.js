/**
 * Schedule of sessions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_ScheduleListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,dt_date,k_class_tab,id_class_tab,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_ScheduleListModel_a_schedule_a_staff
   * @property {boolean} is_staff_change Determines current staff member as substituted.
   * @property {string} s_staff Full name of staff.
   */
  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_ScheduleListModel_a_schedule
   * @property {Wl_Schedule_ScheduleList_ScheduleListModel_a_schedule_a_staff} a_staff List of staff:
   * <dl>
   *   <dt>
   *     bool <tt>is_staff_change</tt>
   *   </dt>
   *   <dd>
   *     Determines current staff member as substituted.
   *   </dd>
   *   <dt>
   *     string <tt>s_staff</tt>
   *   </dt>
   *   <dd>
   *     Full name of staff.
   *   </dd>
   * </dl>
   * @property {boolean} can_book <tt>true</tt> - session can be booked. <tt>false</tt> - otherwise.
   * @property {string} dt_date_local Date/time of session start (in local timezone).
   * @property {string} dt_date_gmt Date/time of session start (in GMT).
   * @property {number} i_duration Session duration (in minutes).
   * @property {boolean} is_wait_list <tt>true</tt> if user can take place in wait list only; <tt>false</tt> otherwise.
   * @property {string} k_class_period Session ID. Primary key in {@link RsClassPeriodSql} table.
   * @property {string} s_title Class title.
   */

  /**
   * Schedule of sessions in location {@link \Wl\Schedule\ScheduleList\ScheduleListApi::$k_location} in day {@link \Wl\Schedule\ScheduleList\ScheduleListApi::$dt_date}. Every element has keys:
   * <dl>
   *   <dt>
   *     array <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     List of staff:
   *     <dl>
   *       <dt>
   *         bool <var>is_staff_change</var>
   *       </dt>
   *       <dd>
   *         Determines current staff member as substituted.
   *       </dd>
   *       <dt>
   *         string <var>s_staff</var>
   *       </dt>
   *       <dd>
   *         Full name of staff.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>can_book</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - session can be booked. <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>dt_date_local</var>
   *   </dt>
   *   <dd>
   *     Date/time of session start (in local timezone).
   *   </dd>
   *   <dt>
   *     string <var>dt_date_gmt</var>
   *   </dt>
   *   <dd>
   *     Date/time of session start (in GMT).
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     Session duration (in minutes).
   *   </dd>
   *   <dt>
   *     bool <var>is_wait_list</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if user can take place in wait list only; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     Session ID. Primary key in {@link RsClassPeriodSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Class title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_ScheduleListModel_a_schedule[]}
   */
  this.a_schedule = undefined;

  /**
   * Date to show information for.
   * In MySQL format, without time.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * ID of group of category tab. One of {@link \Wl\Classes\Tab\TabSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_class_tab = 0;

  /**
   * Is there any classes available for booking.
   *
   * @get result
   * @type {boolean}
   */
  this.is_classes_available = undefined;

  /**
   * ID of category tab in database. Primary key in table {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * ID of business location to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of user to show information for. Primary key in table {@link PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_ScheduleListModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_ScheduleListModel.prototype.config=function()
{
  return {"a_field": {"a_schedule": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"id_class_tab": {"get": {"get": true}},"is_classes_available": {"get": {"result": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_ScheduleListModel.instanceGet
 * @param {string} k_location ID of business location to show information for.
 * @param {string} dt_date Date to show information for. In MySQL format, without time.
 * @param {string} k_class_tab ID of category tab in database. Primary key in table {@link \Wl\Classes\Tab\Sql\ClassTab\Sql}.
 * @param {number} id_class_tab ID of group of category tab. One of {@link \Wl\Classes\Tab\TabSid} constants.
 * @param {string} uid ID of user to show information for. Primary key in table {@link PassportLoginSql}.
 * @returns {Wl_Schedule_ScheduleList_ScheduleListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */