/**
 * The Booking Wizard.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Book_Process_Process54Model} instead.
 */
function Wl_Book_Process_ProcessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * Relationships who clients are allowed to book for.
   * Constants of {@link Wl_Family_Relation_RelationSid}.
   *
   * `null` if clients are not allowed to book for their relationships.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_family_relation_login_allow = null;

  /**
   * @typedef {{}} Wl_Book_Process_ProcessModel_a_path
   * @property {number} id_book_process Step ID. One of {@link Wl_Book_Process_ProcessSpaSid} constants.
   * @property {*} is_current <tt>true</tt> - this item is current;
   * <tt>false</tt> or is not set - is not current.
   */

  /**
   * All steps to be done to make a booking. Every element has the next keys:
   * <dl>
   *   <dt>
   *     int <var>id_book_process</var>
   *   </dt>
   *   <dd>
   *     Step ID. One of {@link Wl_Book_Process_ProcessSpaSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_current</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - this item is current;
   *     <tt>false</tt> or is not set - is not current.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_ProcessModel_a_path[]}
   */
  this.a_path = [];

  /**
   * @typedef {{}} Wl_Book_Process_ProcessModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   * @property {*} is_month `true` if appointment must repeat monthly at the same date.
   * `false` if appointment must repeat monthly at the same week day.
   * `null` if appointment must not repeat monthly.
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
   *     Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` if appointment must repeat monthly at the same date.
   *     `false` if appointment must repeat monthly at the same week day.
   *     `null` if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * `null` if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_ProcessModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * Whether the class/event can be booked at this step or not.
   * External process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Mode type. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The purchase rule ID.
   * One of {@link Wl_Classes_RequirePaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * If client must authorize credit card.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * <tt>true</tt> - the session which is being booked is an event, <tt>false</tt> - if not an event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Whether class/event is free or not (it's just about the price).
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = false;

  /**
   * The client has a credit card `true`, if not `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_credit_card = false;

  /**
   * <tt>true</tt> - the client can select several sessions per booking, <tt>false</tt> - the client can't select several sessions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_session = undefined;

  /**
   * <tt>true</tt> - the user can be placed on a wait list, <tt>false</tt> - the user can't be placed on a wait list.
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
   * The key of the location where the session is booked.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Login promotion to be used to book a class.
   *
   * Primary key from {@link  \RsLoginProductSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * Primary key from {@link  \Wl\Session\Pass\Sql}.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

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
  return {"a_field": {"a_family_relation_login_allow": {"get": {"result": true}},"a_path": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay_require": {"get": {"result": true}},"is_card_authorize": {"get": {"result": true}},"is_event": {"get": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_free": {"get": {"result": true}},"is_have_credit_card": {"get": {"result": true}},"is_session": {"get": {"result": true}},"is_wait": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_ProcessModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {number} id_mode Mode type. One of {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_ProcessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */