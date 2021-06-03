/**
 * Wizard of booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_ProcessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid";

  /**
   * @typedef {{}} Wl_Book_Process_ProcessModel_a_path
   * @property {number} id_book_process Step ID. One of {@link \Wl\Book\Process\ProcessSpaSid} constants.
   * @property {*} is_current <tt>true</tt> - this item is current; <tt>false</tt> or is not set - is not current.
   */

  /**
   * All steps to be done to make book. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>id_book_process</var>
   *   </dt>
   *   <dd>
   *     Step ID. One of {@link \Wl\Book\Process\ProcessSpaSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_current</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - this item is current; <tt>false</tt> or is not set - is not current.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_ProcessModel_a_path[]}
   */
  this.a_path = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_ProcessModel_a_repeat
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
   * @type {?Wl_Book_Process_ProcessModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Mode type. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Purchase rule ID. One of {@link \Wl\Classes\RequirePaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * <tt>true</tt> - session which is being booked is event; <tt>false</tt> - is not event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * <tt>true</tt> - client can select several session per booking; <tt>false</tt> - can not select.
   *
   * @get result
   * @type {boolean}
   */
  this.is_session = undefined;

  /**
   * <tt>true</tt> - user can be placed to wait list; <tt>false</tt> - can not be.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Key of location. Primary key in table {@link \RsLocationSql}.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_ProcessModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_ProcessModel.prototype.config=function()
{
  return {"a_field": {"a_path": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay_require": {"get": {"result": true}},"is_event": {"get": {"result": true}},"is_session": {"get": {"result": true}},"is_wait": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_ProcessModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @returns {Wl_Book_Process_ProcessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */