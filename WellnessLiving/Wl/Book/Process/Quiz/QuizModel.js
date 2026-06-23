/**
 * Defines list of required quizzes.
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
   * The user's activity keys.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_purchase_item
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The item key. This depends on `id_purchase_item` of this array.
   */

  /**
   * The list of purchase items. Each element has the format `[id_purchase_item]::[k_id]`, where: 
   *
   * This will be empty if no purchases are made for the booking.
   *
   * @get get
   * @type {Wl_Book_Process_Quiz_QuizModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_quiz
   * @property {boolean} is_require Determines whether the quiz is required.
   * @property {string} k_quiz The quiz key.
   */

  /**
   * The list of quizzes. Each element has the next structure:
   *
   * @get result
   * @type {Wl_Book_Process_Quiz_QuizModel_a_quiz[]}
   */
  this.a_quiz = undefined;

  /**
   * The list of quiz response keys.
   *
   * Keys are quiz keys. 
   * Values are response keys. 
   * Or the `skip` to skip the quiz.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants. Should be passed for any type of repetition.
   * @property {number[]} a_week Deprecated, use `a_day` instead!
   * @property {string} dl_end Deprecated, use `dt_from` and `dt_to` instead!
   * @property {string} dt_from Date to start recurring booking. Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {string} dt_to Date to complete recurring booking. Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_count The number of occurrences after which the appointment's repeat cycle stops.  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.  Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} i_occurrence Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_period A class for managing time intervals. Last ID: 9.
   * @property {number} id_repeat_end Possible ways to stop repeatable events.
   */

  /**
   * Information about the recurring booking:
   *
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Quiz_QuizModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Quiz_QuizModel_a_resource
   * @property {number} i_index The order number of the asset (could be from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * The selected assets.
   *
   * Every element has the next keys:
   *
   * @post post
   * @type {Wl_Book_Process_Quiz_QuizModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * The selected sessions.
   *
   * Keys are class period keys. 
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @post post
   * @type {string[]}
   */
  this.a_session_select = undefined;

  /**
   * The selected sessions on the wait list that are unpaid.
   *
   * Keys are class period keys. 
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @post post
   * @type {string[]}
   */
  this.a_session_wait_list_unpaid = undefined;

  /**
   * The keys the bookings that have been made.
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
  this.can_book = false;

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
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

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
   * Allowed in {@link Wl_Mode_ModeSid} mode only.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book_unpaid = false;

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
  this.is_credit_card_check = false;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * If `true`, the next steps of the booking wizard are required for the purchase or booking. Otherwise, this will be `false`.
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
  this.k_class_period = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Quiz_QuizModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Quiz_QuizModel.prototype.config=function()
{
  return {"a_field":{"a_login_activity":{"post":{"result":true}},"a_purchase_item":{"get":{"get":true}},"a_quiz":{"get":{"result":true}},"a_quiz_response":{"post":{"post":true}},"a_repeat":{"post":{"post":true}},"a_resource":{"post":{"post":true}},"a_session_select":{"post":{"post":true}},"a_session_wait_list_unpaid":{"post":{"post":true}},"a_visit":{"post":{"result":true}},"can_book":{"post":{"post":true}},"dt_date_gmt":{"get":{"get":true},"post":{"get":true}},"id_mode":{"get":{"get":true},"post":{"get":true}},"is_backend":{"get":{"get":true},"post":{"get":true}},"is_book_unpaid":{"post":{"post":true}},"is_credit_card_check":{"get":{"get":true},"post":{"get":true}},"is_force_pay_later":{"post":{"post":true}},"is_next":{"post":{"result":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"k_login_promotion":{"post":{"post":true}},"k_session_pass":{"post":{"post":true}},"show_relation":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Quiz_QuizModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} uid The client key for which the booking is being made.
 * @param {Wl_Book_Process_Quiz_QuizModel_a_purchase_item[]} a_purchase_item The list of purchase items. Each element has the format `[id_purchase_item]::[k_id]`, where: This will be empty if no purchases are made for the booking.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Quiz_QuizModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Defines list of required quizzes.
 *
 * Merges the quizzes required by the booking itself with quizzes tied to the selected purchase options,
 * filters out internal (staff-only) quizzes for non-backend requests, and returns the unified list in `a_quiz`.
 *
 * @function
 * @name Wl_Book_Process_Quiz_QuizModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Finished booking process and save quiz responses (if quiz step is the last in booking wizard).
 *
 * Validates session selection and asset requirements, stores quiz responses in the booking process context,
 * and attempts to complete the booking without payment when no payment step is needed. Returns visit keys,
 * activity keys, and a flag indicating whether additional wizard steps are still required.
 *
 * @function
 * @name Wl_Book_Process_Quiz_QuizModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
