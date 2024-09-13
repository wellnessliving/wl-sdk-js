/**
 * Manages the booking wizard for the "Purchase Options" page.
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
   * The user's activity keys. This won't be empty when the booking process is finished.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_purchase_item_check
   * @property {number} i_session The number of sessions that this item can cover.
   * @property {number} s_value Unique identifier of the element being checked.
   * Corresponds to the values:
   * <ul>
   *   <li>{@link Wl_Book_Process_Store_Purchase56Model.a_purchase}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Store_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *   <li>{@link Wl_Book_Process_Store_Purchase56Model.a_login_prize}`["s_value"]`</li>
   * </ul>
   */

  /**
   * The selected purchase item.
   *
   * This new purchasable item should be checked to see if it can be applied to the current class or event before
   * purchasing it.
   *
   * <dl>
   *   <dt>int <var>i_session</var></dt>
   *   <dd>The number of sessions that this item can cover.</dd>
   *   <dt>int <var>s_value</var></dt>
   *   <dd>
   *     Unique identifier of the element being checked.
   *     Corresponds to the values:
   *     <ul>
   *       <li>{@link Wl_Book_Process_Store_Purchase56Model.a_purchase}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Store_Purchase56Model.a_reward_prize}`["s_value"]`</li>
   *       <li>{@link Wl_Book_Process_Store_Purchase56Model.a_login_prize}`["s_value"]`</li>
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
   * @property {*} a_week The days of week when the appointment repeat. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeat cycle.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> - the appointment repeats monthly on the same date.
   * <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   * <tt>null</tt> - the appointment doesn't repeat monthly.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of week when the appointment repeat. One of the {@link ADateWeekSid} constants.
   *     This will be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
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
   *     <tt>true</tt> - the appointment repeats monthly on the same date.
   *     <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   *     <tt>null</tt> - the appointment doesn't repeat monthly.
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
   * @property {number} i_index The order number of the asset (from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * A list of assets being booked. Every element has the next keys:
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
   * The selected sessions.
   *
   * Keys refer to class period keys.
   * And values refer to the list of dates/times when the session occurred (returned in MySQL format and in GMT).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * The selected sessions on the wait list that are unpaid.
   *
   * Keys refer to session IDs.
   * And values refer to index arrays of dates/times when the session occurred (returned in MySQL format and in GMT).
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of bookings that have been made.
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
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` - the next steps of booking wizard are required to purchase something or to book the selected session.
   *
   * `false` - no further steps in the booking wizard are required.
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_purchase_item_check": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};