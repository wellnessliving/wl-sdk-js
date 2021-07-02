/**
 * Wizard of booking. Page "Class and Location".
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid";

  /**
   * Week days available for recurring booking. Constants of {@link \ADateWeekSid} class.
   *
   * <tt>null</tt> if recurring booking is not available.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_day_available = null;

  /**
   * IDs of user's activity. Primary keys in {@link RsLoginActivitySql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> if appointment must repeat monthly at the same date.
   * <tt>false</tt> if appointment must repeat monthly at the same week day.
   * <tt>null</tt> if appointment must not repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment must repeat monthly at the same date.
   *     <tt>false</tt> if appointment must repeat monthly at the same week day.
   *     <tt>null</tt> if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * <tt>null</tt> if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Info_InfoModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_resource
   * @property {number} i_index Order number of the asset (may be from 1 to asset quantity).
   * @property {string} k_resource Asset ID. Primary key in table {@link RsResourceSql}.
   */

  /**
   * Selected assets.
   *
   * Every element has keys: <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>Order number of the asset (may be from 1 to asset quantity).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>Asset ID. Primary key in table {@link RsResourceSql}.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Info_InfoModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_session_all
   * @property {string[]} a_virtual_location List of virtual locations. Each value is primary key in {@link \RsLocationSql} table.
   * @property {string} dt_date Date/time when session starts. In MySQL format. In GMT.
   * @property {boolean} is_select <tt>true</tt> if this session should be selected when page is initialized; <tt>false</tt> otherwise.
   * @property {string} k_class_period Session ID. Primary keys in table {@link RsClassPeriodSql}.
   * @property {string} k_staff Primary key of staff member in {@link RsStaffSql} table.
   * @property {string} k_location Location key. Primary key in {@link \RsLocationSql} table.
   * @property {string} s_location Title of location where session is occurred.
   * @property {string} s_start Date/time when session starts. In human readable format. In timezone of location.
   * @property {string} uid Key of staff member as a user. Primary key in {@link PassportLoginSql} table.
   */

  /**
   * All available to book sessions. Not empty only if booking is in session mode. Every element has keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     List of virtual locations. Each value is primary key in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date/time when session starts. In MySQL format. In GMT.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if this session should be selected when page is initialized; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     Session ID. Primary keys in table {@link RsClassPeriodSql}.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Primary key of staff member in {@link RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location key. Primary key in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_location</var>
   *   </dt>
   *   <dd>
   *     Title of location where session is occurred.
   *   </dd>
   *   <dt>
   *     string <var>s_start</var>
   *   </dt>
   *   <dd>
   *     Date/time when session starts. In human readable format. In timezone of location.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     Key of staff member as a user. Primary key in {@link PassportLoginSql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_InfoModel_a_session_all[]}
   */
  this.a_session_all = undefined;

  /**
   * Selected sessions.
   *
   * Keys - session IDs. Primary keys in table {@link RsClassPeriodSql}.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_staff
   * @property {string} s_family 1st letter of staff member surname.
   * @property {string} s_staff Staff member name.
   * @property {string} uid Staff user ID.
   */

  /**
   * Staff who conduct session. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>s_family</var>
   *   </dt>
   *   <dd>
   *     1st letter of staff member surname.
   *   </dd>
   *   <dt>
   *     string <var>s_staff</var>
   *   </dt>
   *   <dd>
   *     Staff member name.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     Staff user ID.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_InfoModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * IDs of books are made. Primary keys in {@link RsVisitSql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Date/time when session starts. In MySQL format. In location timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Formatted text of business liability release. Not empty if business has liability release and if user did not agree to this liability release.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * Special instructions for class.
   *
   * @get result
   * @type {?string}
   */
  this.html_special = null;

  /**
   * Number of available spots.
   *
   * <tt>null</tt> if this information is not available.
   *
   * @get result
   * @type {?number}
   */
  this.i_available = null;

  /**
   * Number of booked spots.
   *
   * <tt>null</tt> if this information is not available.
   *
   * @get result
   * @type {?number}
   */
  this.i_book = null;

  /**
   * Duration of session. In minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Estimated place of reservation on the waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = 0;

  /**
   * Mode type. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Does user agree liability release?
   *
   * <tt>true</tt> - user agreed; <tt>false</tt> - user did not agree or agreement not required.
   *
   * @post post
   * @type {boolean}
   */
  this.is_agree = false;

  /**
   * <tt>true</tt> if recurring booking is available; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_repeat_client = undefined;

  /**
   * <tt>true</tt> if need next steps of wizard (need to purchase something to book selected session); <tt>false</tt> if no need next steps (all that need was already bought).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * Whether the class can be paid with single session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_buy = undefined;

  /**
   * <tt>true</tt> if class is virtual, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {number}
   */
  this.is_virtual = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Price of the session.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Title of class.
   *
   * @get result
   * @type {string}
   */
  this.s_class = undefined;

  /**
   * Address of location.
   *
   * @get result
   * @type {string}
   */
  this.s_location_address = undefined;

  /**
   * Title of location.
   *
   * @get result
   * @type {string}
   */
  this.s_location_title = undefined;

  /**
   * Time when session starts. In format <tt>hh:mm</tt>.
   *
   * @get result
   * @type {string}
   */
  this.s_time = undefined;

  /**
   * Room where session takes place.
   *
   * @get result
   * @type {string}
   */
  this.text_room = undefined;

  /**
   * Key of a user who is making a book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_day_available": {"get": {"result": true}},"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_all": {"get": {"result": true}},"a_session_select": {"post": {"post": true}},"a_staff": {"get": {"result": true}},"a_visit": {"post": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"dt_date_local": {"get": {"result": true}},"html_contract": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_available": {"get": {"result": true}},"i_book": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_agree": {"post": {"post": true}},"is_book_repeat_client": {"get": {"result": true}},"is_next": {"post": {"result": true}},"is_single_buy": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"m_price": {"get": {"result": true}},"s_class": {"get": {"result": true}},"s_location_address": {"get": {"result": true}},"s_location_title": {"get": {"result": true}},"s_time": {"get": {"result": true}},"text_room": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Info_InfoModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @returns {Wl_Book_Process_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */