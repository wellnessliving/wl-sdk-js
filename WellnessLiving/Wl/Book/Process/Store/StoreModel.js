/**
 * An endpoint for the booking wizard for the Purchase Options page.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Store_StoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The keys of the user's activity. This won't empty when the booking process is finished.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_repeat
   * @property {*} a_week The days of week when appointment repeats. One of the {@link ADateWeekSid} constants.
   * This won't be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment's repeat cycle stops. This won't be empty if the repeat cycle
   * doesn't stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This won't be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeating.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month `true` if the appointment repeats monthly at the same date.
   * `false` if the appointment repeats monthly at the same week day.
   * `null` if the appointment doesn't repeat monthly.
   */

  /**
   * Displays information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of week when appointment repeats. One of the {@link ADateWeekSid} constants.
   *     This won't be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This won't be empty if the repeat cycle
   *     doesn't stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This won't be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment's repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` if the appointment repeats monthly at the same date.
   *     `false` if the appointment repeats monthly at the same week day.
   *     `null` if the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Store_StoreModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_resource
   * @property {number} i_index The order number of the asset (a number between 1 and the asset quantity).
   * @property {string} k_resource The key of asset.
   */

  /**
   * The list of assets being booked. Every element has the next keys:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The order number of the asset (a number between 1 and the asset quantity).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * The selected sessions.
   *
   * Keys refer to the class period keys.
   *
   * Values refer to the dates/times when the session occurred, returned in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys refer to the session IDs.
   *
   * Values refer to index arrays of dates/times when the session occurred, returned in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of the bookings created.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Determines whether the class/event can be booked at this step or not.
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * The date/time the session is booked for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if the user pressed 'Pay later'.
   *
   * `false` if the user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` if next steps of booking wizard are required (need to purchase something to book the selected session).
   *
   * `false` if no additional steps required (no additional purchase required to book the selected session).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The login promotion used to book the class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The session pass used to book the class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The key of the user making the booking.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};