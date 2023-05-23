/**
 * Manages quizzes for the class or event and selected purchase option during booking process.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Quiz_QuizModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,uid,a_purchase_item,dt_date_gmt,id_mode";

  /**
   * Keys of user's activity.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * List of purchase items. Each element has format <tt>[id_purchase_item]::[k_id]</tt>, where<dl>
   *  <dt>int <var>id_purchase_item</var></dt>
   *  <dd>ID of the purchase item.</dd>
   *  <dt>string <var>k_id</var></dt>
   *  <dd>Key of the item. Depends on <var>id_purchase_item</var> of this array.</dd>
   * </dl>
   *
   * Empty if no purchases are made for booking.
   *
   * @get get
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Whether the quiz is required and can not be skipped.
   * @property {string} k_quiz Quiz key.
   */

  /**
   * List of quizzes. Each element has next structure:<dl>
   *  <dt>bool <var>is_require</var></dt>
   *  <dd>Whether the quiz is required and can not be skipped.</dd>
   *  <dt>string <var>k_quiz</var></dt>
   *  <dd>Quiz key.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = [];

  /**
   * List of quiz response keys.
   * Key is quiz key.
   * Value is response key or special value `skip`.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of `i_period`.
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
   *     Days of week when appointment must repeat.
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
   *     Measurement unit of `i_period`.
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
   * @type {?Wl_Book_Process_Quiz_QuizModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_resource
   * @property {number} i_index Order number of the asset (may be from 1 to asset quantity).
   * @property {string} k_resource Asset ID.
   */

  /**
   * Selected assets.
   *
   * Every element has keys:
   * <dl><dt>int <var>i_index</var></dt><dd>Order number of the asset (may be from 1 to asset quantity).</dd>
   * <dt>string <var>k_resource</var></dt><dd>Asset ID.</dd></dl>
   *
   * @post post
   * @type {Wl_Book_Process_Quiz_QuizModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * Selected sessions.
   *
   * Keys - session IDs.
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys - session IDs.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * IDs of books are made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = [];

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
   * Mode type.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` if need next steps of wizard (need to purchase something to book selected session); `false` if no need next steps (all that need was already bought).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

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
   * Key of a user who is making a book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_purchase_item": {"get": {"get": true}},"a_quiz": {"get": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Quiz_QuizModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {string[]} a_purchase_item List of purchase items. Each element has format <tt>[id_purchase_item]::[k_id]</tt>, where<dl> <dt>int <var>id_purchase_item</var></dt> <dd>ID of the purchase item. One of {@link \RsPurchaseItemSid}.</dd> <dt>string <var>k_id</var></dt> <dd>Key of the item. Depends on <var>id_purchase_item</var> of this array.</dd> </dl> Empty if no purchases are made for booking.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {number} id_mode Mode type.
 * @returns {Wl_Book_Process_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */