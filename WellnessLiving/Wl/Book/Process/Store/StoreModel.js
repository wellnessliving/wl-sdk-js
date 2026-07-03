/**
 * Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible.
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
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_purchase_item_check_a_config_a_event_list
   * @property {string} k_class Key of the event class.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_purchase_item_check_a_config
   * @property {Wl_Book_Process_Store_StoreModel_a_purchase_item_check_a_config_a_event_list} a_event_list List of tuition events. Each entry has the next structure:
   */

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_purchase_item_check
   * @property {Wl_Book_Process_Store_StoreModel_a_purchase_item_check_a_config} a_config Additional configuration. Used only for `id_purchase_item` = {@link RsPurchaseItemSid}.
   * @property {number} i_session The number of sessions that this item can cover. This only applies to items of type {@link RsPurchaseItemSid}.
   * @property {string} s_value The unique identifier of the item being checked. This corresponds to one of the following values: <ul>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li> </ul>
   */

  /**
   * The selected purchase item.
   *
   * This new purchase item should be checked to determine if it can be applied to the current class or event before
   * being purchased.
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreModel_a_purchase_item_check}
   */
  this.a_purchase_item_check = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_repeat
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
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * The selected sessions for an event.
   *
   * Keys are class period keys, values are indexed arrays of dates and times when the session occurred
   *  (in MySQL format, UTC).
   *
   * @post post
   * @type {string[][]}
   */
  this.a_session_select = undefined;

  /**
   * The selected sessions for an event that are on the wait list and unpaid.
   *
   * Keys are class period keys, values are indexed arrays of dates and times when the session occurred
   *  (in MySQL format, UTC).
   *
   * @post post
   * @type {string[][]}
   */
  this.a_session_wait_list_unpaid = undefined;

  /**
   * The keys of the bookings that have been made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreModel_a_visit_payment
   * @property {boolean} is_free `true` if the visit is free; `false` otherwise.
   * @property {boolean} is_waitlist `true` whether the booked slot was waitlisted; `false` otherwise.
   * @property {string} k_login_promotion Applied user's purchase option.
   * @property {string} k_promotion Purchase option.
   * @property {string} k_session_pass Applied session pass.
   * @property {string} text_promotion Purchase option title.
   */

  /**
   * Values are arrays with next keys:
   *
   * @post result
   * @type {Wl_Book_Process_Store_StoreModel_a_visit_payment[]}
   */
  this.a_visit_payment = undefined;

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
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
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
   * Host login promotion key that grants the guest pass used to pay for the guest's visit.
   * Empty string if the booking is not paid with a guest pass.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion_guest_pass = "";

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
   * @post get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The client key for which the booking is being made.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreModel.prototype.config=function()
{
  return {"a_field":{"a_login_activity":{"post":{"result":true}},"a_purchase_item_check":{"post":{"post":true}},"a_repeat":{"post":{"post":true}},"a_resource":{"post":{"post":true}},"a_session_select":{"post":{"post":true}},"a_session_wait_list_unpaid":{"post":{"post":true}},"a_visit":{"post":{"result":true}},"a_visit_payment":{"post":{"result":true}},"can_book":{"post":{"post":true}},"dt_date_gmt":{"post":{"get":true}},"id_mode":{"post":{"get":true}},"is_backend":{"post":{"get":true}},"is_book_unpaid":{"post":{"post":true}},"is_credit_card_check":{"post":{"get":true}},"is_force_pay_later":{"post":{"post":true}},"is_next":{"post":{"result":true}},"k_class_period":{"post":{"get":true}},"k_login_promotion":{"post":{"post":true}},"k_login_promotion_guest_pass":{"post":{"post":true}},"k_session_pass":{"post":{"post":true}},"show_relation":{"post":{"get":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Processes the "Purchase Options" step of the booking wizard, validates selections, and books the session when possible.
 *
 * Stores the selected purchase option (existing login promotion or new purchasable item) and session data in
 * the booking process context, validates availability and eligibility, and attempts to complete the booking
 * immediately when no payment or quiz step is needed. Returns visit keys, activity keys, and a flag indicating
 * whether further wizard steps are required.
 *
 * @function
 * @name Wl_Book_Process_Store_StoreModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
