/**
 * An endpoint that performs a booking wizard process.
 *
 * Include the {@link Wl_Book_Process_ProcessSpaSid.QUIZ} step, if required.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Process54Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * Relationships for whom clients are allowed to book for.
   * One of the {@link Wl_Family_Relation_RelationSid} constants.
   *
   * This will be `null` if clients aren't allowed to book for their relationships.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_family_relation_login_allow = null;

  /**
   * @typedef {{}} Wl_Book_Process_Process54Model_a_path
   * @property {number} id_book_process The step ID. One of the {@link Wl_Book_Process_ProcessSpaSid} constants.
   * @property {*} is_current This will be <tt>true</tt> if this item is current. Otherwise, this will be <tt>false</tt>.
   */

  /**
   * All the steps required to make a booking. Every element has the next keys:
   * <dl>
   *   <dt>
   *     int <var>id_book_process</var>
   *   </dt>
   *   <dd>
   *     The step ID. One of the {@link Wl_Book_Process_ProcessSpaSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_current</var>]
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if this item is current. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Process54Model_a_path[]}
   */
  this.a_path = [];

  /**
   * @typedef {{}} Wl_Book_Process_Process54Model_a_repeat
   * @property {*} a_week The days of the week when appointment repeats. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't
   * stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a fixed number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeat cycle.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month `true` — the appointment repeats monthly at the same date.
   * `false` — the appointment repeats monthly on the same day of the week.
   * `null` — the appointment doesn't repeat monthly.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of the week when appointment repeats. One of the {@link ADateWeekSid} constants.
   *     This will be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't
   *     stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeat cycle doesn't stop after a fixed number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment's repeat cycle.
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
   *     `true` — the appointment repeats monthly at the same date.
   *     `false` — the appointment repeats monthly on the same day of the week.
   *     `null` — the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if this isn't a recurring booking.
   *
   * @post post
   * @type {?Wl_Book_Process_Process54Model_a_repeat}
   */
  this.a_repeat = null;

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
   * The purchase rule ID.
   * One of the {@link Wl_Classes_RequirePaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * Determines if the client must authorize the credit card.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * This will be `true` if the session being booked is part of an event. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * `true` — the user pressed 'Pay later'.
   *
   * `false` — the user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Determines whether the class/event is free.
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = false;

  /**
   * This will be `true` if the client has a credit card. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_credit_card = false;

  /**
   * `true` — the client can select several sessions per booking.
   *
   * `false` — the client can't select several sessions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_session = undefined;

  /**
   * This will be `true` if the user can be placed on a wait list. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait = undefined;

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The key of the location where the session is booked.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The login promotion to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The session pass to be used to book a class.
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Process54Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Process54Model.prototype.config=function()
{
  return {"a_field": {"a_family_relation_login_allow": {"get": {"result": true}},"a_path": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay_require": {"get": {"result": true}},"is_card_authorize": {"get": {"result": true}},"is_event": {"get": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_free": {"get": {"result": true}},"is_have_credit_card": {"get": {"result": true}},"is_session": {"get": {"result": true}},"is_wait": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Process54Model.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {string} uid The key of the user making the booking.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Process54Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */