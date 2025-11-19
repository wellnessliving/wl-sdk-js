/**
 * Manages the "Purchase Options" page of the booking wizard.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Store_StoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The keys for the user's activities. This will be populated upon completion of the booking process.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_purchase_item_check
   * @property {number} i_session The number of sessions that this item can cover.
   *   This only applies to items of type {@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD}.
   * @property {number} s_value The unique identifier of the item being checked.
   * This corresponds to one of the following values:
   * <ul>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_purchase}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_login_prize}`["s_value"]`</li>
   * </ul>
   */

  /**
   * The selected purchase item.
   *
   * This new purchase item should be checked to determine if it can be applied to the current class or event before
   * being purchased.
   *
   * <dl>
   *   <dt>int <var>i_session</var></dt>
   *   <dd>
   *       The number of sessions that this item can cover.
   *       This only applies to items of type {@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD}.
   *   </dd>
   *   <dt>int <var>s_value</var></dt>
   *   <dd>
   *     The unique identifier of the item being checked.
   *     This corresponds to one of the following values:
   *     <ul>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_purchase}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Purchase_Purchase56Model.a_login_prize}`["s_value"]`</li>
   *     </ul>
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreModel_a_purchase_item_check}
   */
  this.a_purchase_item_check = [];

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_repeat
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
   * @type {?Wl_Book_Process_Store_StoreModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_resource
   * @property {number} i_index The order number of the asset (from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * A list of assets being booked. Each element has the following keys:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The order number of the asset (from 1 to the asset quantity).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * The selected sessions for an event.
   *
   * The key is the class period key.
   * The value is an indexed array of dates and times when the session occurred (in MySQL format, UTC).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * The selected sessions for an event that are on the wait list and unpaid.
   *
   * The key is the class period key.
   * The value is an indexed array of dates and times when the session occurred (in MySQL format, UTC).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of the bookings that have been made.
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
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @post get
   * @type {boolean|number}
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
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * If `true`, the next steps of the booking wizard are required to purchase an item or book the selected session.
   *
   * If `false`, no further steps in the booking wizard are required.
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_purchase_item_check": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @typedef Wl_Book_Process_Store_StoreModel_PostResponse
 * @type {object}
 * @property {string[]} a_login_activity The keys for the user's activities. This will be populated upon completion of the booking process.
 * @property {string[]} a_visit The keys of the bookings that have been made.
 * @property {boolean} is_next If `true`, the next steps of the booking wizard are required to purchase an item or book the selected session.
 *
 * If `false`, no further steps in the booking wizard are required.
 */

/**
 * @function
 * @name Wl_Book_Process_Store_StoreModel.post
 * @returns {Promise<Wl_Book_Process_Store_StoreModel_PostResponse>} Response from this request
 */

/**
 * @typedef Wl_Book_Process_Store_StoreModel_GetResponse
 * @type {object}
 */

/**
 * @function
 * @name Wl_Book_Process_Store_StoreModel.get
 * @returns {Promise<Wl_Book_Process_Store_StoreModel_GetResponse>} Response from this request
 */