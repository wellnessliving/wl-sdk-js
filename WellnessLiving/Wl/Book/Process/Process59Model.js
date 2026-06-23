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
   * @deprecated Use {@link Wl_Book_Process_ProcessModel.is_family_relation_book} instead. Full list of relatives available, see {@link RsFamilyRelationSid}.
   * @get result
   * @type {?number[]}
   */
  this.a_family_relation_login_allow = null;

  /**
   * @typedef {{}} Wl_Book_Process_Process59Model_a_path
   * @property {number} id_book_process The step ID. One of the {@link Wl_Book_Process_ProcessSpaSid} constants.
   * @property {boolean} [is_current] <tt>true</tt> - this item is current.
   * <tt>false</tt> - this item isn't current or not set yet.
   */

  /**
   * All the steps to be performed to make a booking. Every element has the next keys:
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
   * @property {string} [dl_end] Deprecated, use `dt_from` and `dt_to` instead!
   * @property {string} [dt_from] Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {string} [dt_to] Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {number} [i_count] The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} [i_occurrence] Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead! One of {@link ADurationSid} constants.
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   *
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
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` to book unpaid.
   * `false` otherwise.
   *
   * Allows booking unpaid when client has a login promotion that can be used to pay for the service.
   * Allowed in {@link Wl_Mode_ModeSid.WIDGET} mode only.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book_unpaid = false;

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
   * The final booking will not use this flag, and the check will still be performed.
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
   * @post get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The client key for which the booking is being made.
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
  return {"a_field": {"a_family_relation_login_allow": {"get": {"result": true}},"a_path": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay_require": {"get": {"result": true}},"is_age_require": {"get": {"result": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_card_authorize": {"get": {"result": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_event": {"get": {"result": true}},"is_family_relation_book": {"get": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_free": {"get": {"result": true}},"is_have_ach": {"get": {"result": true}},"is_have_credit_card": {"get": {"result": true}},"is_session": {"get": {"result": true}},"is_wait": {"get": {"result": true}},"is_wait_list_unpaid": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Process59Model.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid The client key for which the booking is being made.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Process59Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */