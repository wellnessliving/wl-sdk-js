/**
 * Validates and distributes selected purchase options across all clients in the booking group.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Store_StoreGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of existing login promotions which are selected by a group of clients.
   *
   * This login promotions will be checked to determine if it can be applied to the current class or event.
   *
   * Keys are UIDs of clients, values are login promotion keys.
   *
   * @post post
   * @type {string[]}
   */
  this.a_login_promotion = undefined;

  /**
   * A list of host guest passes which are selected by a group of clients to pay for the guests visits.
   *
   * These guest passes will be checked to determine if they can be applied to the current class or event.
   *
   * Keys are UIDs of clients, values are host login promotion keys that grant the guest passes.
   *
   * @post post
   * @type {string[]}
   */
  this.a_login_promotion_guest_pass = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_check
   * @property {number} i_session The number of sessions that this item can cover.   This only applies to items of type {@link RsPurchaseItemSid}.
   * @property {string} s_value The unique identifier of the item being checked. This corresponds to one of the following values: <ul>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li>   <li>{@link Wl_Book_Process_Purchase_Purchase56Model}`["s_value"]`</li> </ul>
   */

  /**
   * A list of new purchase items which are selected by a group of clients.
   *
   * This new purchase items will be checked to determine if it can be applied to the current class or event before
   * being purchased.
   *
   * Keys are UIDs of clients, values are arrays with the following structure:
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_check[]}
   */
  this.a_purchase_item_check = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_distribute
   * @property {string[]} a_owner List of UIDs of owners who will share this promotion with this client.   If empty, this client is the owner of the promotion.   This only applies to the new promotions.
   * @property {number} i_session The number of sessions that this item can cover.   The same as in {@link Wl_Book_Process_Store_StoreGroupModel}.   `0` if not applicable.
   * @property {?string} k_login_promotion Login promotion key.    The same as in {@link Wl_Book_Process_Store_StoreGroupModel}.   `null` if not applicable.
   * @property {?string} k_login_promotion_guest_pass Host login promotion key that grants the guest pass.    `null` if not applicable.
   * @property {?string} k_session_pass Session pass key.    The same as in {@link Wl_Book_Process_Store_StoreGroupModel}.   `null` if not applicable.
   * @property {?string} s_value The unique identifier of the purchase item.   The same as in {@link Wl_Book_Process_Store_StoreGroupModel}.   `null` if not applicable.
   * @property {string} text_error Error text if the purchase item cannot be applied to the current class or event for this client.
   * @property {string} text_error_code Error code if the purchase item cannot be applied to the current class or event for this client.
   */

  /**
   * A list of distributed new shared purchase items which are selected by a group of clients.
   *
   * Keys are UIDs of clients, values are arrays with the following structure:
   *
   * @post result
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_purchase_item_distribute[]}
   */
  this.a_purchase_item_distribute = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants. Should be passed for any type of repetition.
   * @property {string} dt_from Date to start recurring booking. Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {string} dt_to Date to complete recurring booking. Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_count The number of occurrences after which the appointment's repeat cycle stops. Should be empty if the repeat cycle doesn't stop after a certain number of occurrences. Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_repeat_end Possible ways to stop repeatable events.
   */

  /**
   * Information about the recurring booking for each client in the group.
   *
   * Keys are UIDs of clients, values are arrays with information about the recurring booking:
   *
   *
   * Should be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Store_StoreGroupModel_a_repeat[]}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Store_StoreGroupModel_a_resource
   * @property {number} i_index The order number of the asset (from 1 to the asset quantity).
   * @property {string} k_resource The asset key.
   */

  /**
   * A list of assets which are selected by a group of clients.
   *
   * Keys are UIDs of clients, values are arrays with the following structure:
   *
   * @post post
   * @type {Wl_Book_Process_Store_StoreGroupModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * A list of existing session passes (drop-in, full-event) which are selected by a group of clients.
   *
   * This session passes will be checked to determine if it can be applied to the current class or event.
   *
   * Keys are UIDs of clients, values are session pass keys.
   *
   * @post post
   * @type {string[]}
   */
  this.a_session_pass = undefined;

  /**
   * A list of sessions which are selected by a group of clients.
   *
   * Keys are UIDs of clients, values are arrays of class period keys mapped to index arrays of
   *  dates/times when the session occurred (MySQL format; UTC).
   *
   * @post post
   * @type {string[][][]}
   */
  this.a_session_select = undefined;

  /**
   * A list of wait list (unpaid) sessions which are selected by a group of clients.
   *
   * Keys are UIDs of clients, values are arrays of class period keys mapped to index arrays of
   *  dates/times when the session occurred (MySQL format; UTC).
   *
   * @post post
   * @type {string[][][]}
   */
  this.a_session_wait_list_unpaid = undefined;

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
   * Key of session which is booked.
   *
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Host login promotion key that grants the guest pass used to pay for the guest's visit.
   * Empty string if the booking is not paid with a guest pass.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion_guest_pass = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Store_StoreGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Store_StoreGroupModel.prototype.config=function()
{
  return {"a_field":{"a_login_promotion":{"post":{"post":true}},"a_login_promotion_guest_pass":{"post":{"post":true}},"a_purchase_item_check":{"post":{"post":true}},"a_purchase_item_distribute":{"post":{"result":true}},"a_repeat":{"post":{"post":true}},"a_resource":{"post":{"post":true}},"a_session_pass":{"post":{"post":true}},"a_session_select":{"post":{"post":true}},"a_session_wait_list_unpaid":{"post":{"post":true}},"dt_date_gmt":{"post":{"get":true}},"id_mode":{"post":{"get":true}},"is_backend":{"post":{"get":true}},"is_credit_card_check":{"post":{"get":true}},"is_force_pay_later":{"post":{"post":true}},"k_class_period":{"post":{"get":true}},"k_login_promotion_guest_pass":{"post":{"post":true}}}};
};

/**
 * Validates and distributes selected purchase options across all clients in the booking group.
 *
 * For each client in the group, validates session selection, resource requirements, recurring booking
 * configuration, and purchase item eligibility. When all clients pass validation, attempts to assign or share
 * promotions across the group and returns per-client distribution results with any error details in
 * `a_purchase_item_distribute`.
 *
 * @function
 * @name Wl_Book_Process_Store_StoreGroupModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
