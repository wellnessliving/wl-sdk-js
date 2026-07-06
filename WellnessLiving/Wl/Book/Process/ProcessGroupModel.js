/**
 * Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_ProcessGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_event_session
   * @property {string} dtu_date Session date/time.
   * @property {string} k_class_period Session key.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item_a_config_a_event_list
   * @property {string} k_class Event class key to be booked as part of this tuition.
   * @property {string} uid Key of the user for whom this event should be booked.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item_a_config
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item_a_config_a_event_list} a_event_list List of events to register for as part of this tuition.          Each element is an array with the following keys:
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item_a_config} a_config Additional configuration data. Required when `id_purchase_item` is          {@link RsPurchaseItemSid}. Has the following keys:
   * @property {number} i_count Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_owner `true` if client is owner of this purchase option.          This means that this purchase option will be purchased for this client, even if another client          can share a similar purchase option.
   * @property {boolean} is_renew `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.          Specify only if you want to purchase a new option.
   * @property {string} k_id Specify only if you want to purchase a new option.
   * @property {string} k_login_prize Specify if you want to pay by user's prize.
   * @property {string} k_reward_prize Specify if you want to redeem a prize for payment.
   * @property {string} s_signature Signature of the client in base64 format.          Specify only if you want to buy a purchase option that requires signature.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_repeat
   * @property {number[]} a_day The days of week when the session repeats. One of the {@link ADateWeekSid} constants.     Should be passed for any type of repetition.
   * @property {string} dt_from Date to start recurring booking.     Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {string} dt_to Date to complete recurring booking.     Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_count The number of occurrences after which the appointment's repeat cycle stops.      Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.      Expected for `id_repeat_end` = {@link RsRepeatEndSid}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} id_duration A class for managing time intervals. Last ID: 9.
   * @property {number} id_repeat_end Possible ways to stop repeatable events.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_a_resource
   * @property {number} i_index Order number of the asset.
   * @property {string} k_resource Asset key.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_event_session} a_event_session List of event sessions to book. Required for only for event that allows to select sessions to book.     Each element has next keys:
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_purchase_item} a_purchase_item Purchase option information. Required if the service requires online payment. Elements have next keys:
   * @property {string[]} a_quiz_response Answers for questions.     Required if the service requires answers for questions.     Keys are quiz keys.      Values are response keys.      Or the `skip` to skip the quiz.
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_repeat} a_repeat Recurring booking configuration:
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_a_resource} a_resource Asset information. Required if the service requires asset booking. Each element has next keys:
   * @property {string} k_login_promotion Login promotion key.     Specify only if you want to pay by already purchased option.
   * @property {string} k_login_promotion_guest_pass Guest pass login promotion key.     Specify only if you want to pay with guest pass granted by this login promotion.
   * @property {string} k_session_pass Session pass to be used to book a session.
   * @property {string} uid User key.
   */

  /**
   * List of clients to book.
   * Each value is an array with next keys:
   *
   * @post post
   * @type {Wl_Book_Process_ProcessGroupModel_a_client[]}
   */
  this.a_client = undefined;

  /**
   * Primary keys of users' activity that correspond to bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_book = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address
   * @property {boolean} is_new Set this value to `1` to add a new payment address or to `0` to use a saved payment address.
   * @property {string} k_geo_country The key of the country used for the payment address. Specify this to add a new address.
   * @property {string} k_geo_region The key of the region for the payment address. Specify this to add a new address.
   * @property {string} k_pay_address The key of the saved payment address. Specify this to use a saved address.
   * @property {string} s_city The city used for the payment address. Specify this to add a new address.
   * @property {string} s_name The card name. Specify this to add a new address.
   * @property {string} s_phone The payment phone. Specify this to add a new address.
   * @property {string} s_postal The postal code for the payment address. Specify this to add a new address.
   * @property {string} s_street1 The payment address. Specify this to add a new address.
   * @property {string} s_street2 The optional payment address. Specify this to add a new address.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} i_csc The credit card CSC. Specify this to add a new card.
   * @property {number} i_month The credit card expiration month. Specify this to add a new card.
   * @property {number} i_year The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {string} s_comment Optional comment(s). Specify this to add a new card.
   * @property {string} s_number The card number. Specify this to add a new card.
   */

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card} a_pay_card The payment card information:
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {boolean} is_hide Determines whether this payment method is hidden.
   * @property {boolean} is_save Whether payment method should be saved to user's account.
   * @property {boolean} is_success Identifies whether this source was successfully charged.
   * @property {string} m_surcharge The client-side calculated surcharge.
   * @property {string} s_index The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   *
   * @post post
   * @type {Wl_Book_Process_ProcessGroupModel_a_pay_form[]}
   */
  this.a_pay_form = undefined;

  /**
   * Primary keys of bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

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
   * The key of the user's activity corresponding to the purchase made.
   * `null` if no purchase was made.
   *
   * @post result
   * @type {?string}
   */
  this.k_login_activity_purchase = null;

  /**
   * Host login promotion key that grants the guest pass used to pay for the guest's visit.
   * Empty string if the booking is not paid with a guest pass.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion_guest_pass = "";

  /**
   * The installment template primary key.
   * `null` to not use installment template.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * The discount code to be applied to the purchase.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_ProcessGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_ProcessGroupModel.prototype.config=function()
{
  return {"a_field":{"a_client":{"post":{"post":true}},"a_login_activity_book":{"post":{"result":true}},"a_pay_form":{"post":{"post":true}},"a_visit":{"post":{"result":true}},"dt_date_gmt":{"post":{"get":true}},"id_mode":{"post":{"get":true}},"is_backend":{"post":{"get":true}},"is_credit_card_check":{"post":{"get":true}},"is_force_pay_later":{"post":{"post":true}},"k_class_period":{"post":{"get":true}},"k_login_activity_purchase":{"post":{"result":true}},"k_login_promotion_guest_pass":{"post":{"post":true}},"k_pay_installment_template":{"post":{"post":true}},"text_discount_code":{"post":{"post":true}}}};
};

/**
 * Processes the group booking: validates input, collects payment, books sessions, and sends confirmation emails.
 *
 * Accepts a list of clients with their purchase items, resources, sessions, and quiz responses, then validates
 * capacity and eligibility, processes payment for all clients at once, creates booking records, and dispatches
 * confirmation emails. Returns visit keys, activity keys, and purchase activity key upon success.
 *
 * @function
 * @name Wl_Book_Process_ProcessGroupModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
