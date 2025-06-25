/**
 * Performs the booking wizard steps.
 *
 * This endpoint includes changes to the list of steps if the service is already booked for the currently selected client,
 * and if {@link Wl_Book_Process_ProcessModel.is_family_relation_book} is set to `true`.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Process59Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * Relationships who clients are allowed to book for.
   * One of the {@link RsFamilyRelationSid} constants.
   *
   * This will be `null` if clients aren't allowed to book for their relationships.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_family_relation_login_allow = null;

  /**
   * @typedef {{}} Wl_Book_Process_Process59Model_a_path
   * @property {number} id_book_process The step ID. One of the {@link Wl_Book_Process_ProcessSpaSid} constants.
   * @property {*} is_current <tt>true</tt> - this item is current.
   * <tt>false</tt> - this item isn't current or not set yet.
   */

  /**
   * All the steps to be performed to make a booking. Every element has the next keys:
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
   *     <tt>true</tt> - this item is current.
   *     <tt>false</tt> - this item isn't current or not set yet.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Process59Model_a_path[]}
   */
  this.a_path = [];

  /**
   * @typedef {{}} Wl_Book_Process_Process59Model_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   * Should be passed for any type of repetition.
   * @property {number[]} a_week Deprecated, use `a_day` instead!
   * @property {*} dl_end Deprecated, use `dt_from` and `dt_to` instead!
   * @property {*} dt_from Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} dt_to Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} i_count The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {*} i_occurrence Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead!
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>int[] <var>a_day</var></dt>
   *   <dd>
   *     The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   *     Should be passed for any type of repetition.
   *   </dd>
   *   <dt>int[] <var>a_week</var></dt>
   *   <dd>Deprecated, use `a_day` instead!</dd>
   *   <dt>string [<var>dl_end</var>]</dt>
   *   <dd>Deprecated, use `dt_from` and `dt_to` instead!</dd>
   *   <dt>
   *     string [<var>dt_from</var>]
   *   </dt>
   *   <dd>
   *     Date to start recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *     string [<var>dt_to</var>]
   *   </dt>
   *   <dd>
   *     Date to complete recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *      int [<var>i_count</var>]
   *    </dt>
   *    <dd>
   *      The number of occurrences after which the appointment's repeat cycle stops.
   *      Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *      Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   *    </dd>
   *   <dt>int <var>i_duration</var></dt>
   *   <dd>Count of days\weeks\months between recurring bookings.</dd>
   *   <dt>int [<var>i_occurrence</var>]</dt>
   *   <dd>Deprecated, use `i_count` instead!</dd>
   *   <dt>int <var>i_period</var></dt>
   *   <dd>Deprecated, use `i_duration` instead!</dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *     Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   *   </dd>
   *   <dt>int <var>id_period</var></dt>
   *   <dd>Deprecated, use `id_duration` instead!</dd>
   *   <dt>int <var>id_repeat_end</var></dt>
   *   <dd>Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.</dd>
   * </dl>
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Process59Model_a_repeat}
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
   * Date/time to which session is booked.
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
   * `true` if this class has age restriction and requires user to specify age. `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_age_require = undefined;

  /**
   * Determines if the client must authorize the credit card.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag and the check will still be performed.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * If `true`, the session being booked is an event. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * Determines whether clients are allowed to book for their relationships without switching profiles.
   *
   * @get result
   * @type {boolean}
   */
  this.is_family_relation_book = undefined;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Determines whether the class/event is free (price).
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = false;

  /**
   * `true` if the client has an ach account, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_ach = false;

  /**
   * If `true`, the client has a credit card. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_credit_card = false;

  /**
   * `true` - the client can select several sessions per booking.
   *
   * `false` - the client can't select several sessions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_session = undefined;

  /**
   * If `true`, the user can be placed on a wait list. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait = undefined;

  /**
   * If `true`, the user can be placed on a wait list without payment, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait_list_unpaid = undefined;

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
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * `true` to show "book for" option in booking wizard. `false` for default behavior.
   *
   * @get get
   * @type {boolean}
   */
  this.show_relation = false;

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Process59Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Process59Model.prototype.config=function()
{
  return {"a_field": {"a_family_relation_login_allow": {"get": {"result": true}},"a_path": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay_require": {"get": {"result": true}},"is_age_require": {"get": {"result": true}},"is_card_authorize": {"get": {"result": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_event": {"get": {"result": true}},"is_family_relation_book": {"get": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_free": {"get": {"result": true}},"is_have_ach": {"get": {"result": true}},"is_have_credit_card": {"get": {"result": true}},"is_session": {"get": {"result": true}},"is_wait": {"get": {"result": true}},"is_wait_list_unpaid": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Process59Model.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Process59Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */