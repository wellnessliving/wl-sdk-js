/**
 * Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentPostModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_mode,k_location,uid,id_purchase_item,k_id,k_login_promotion,k_session_pass,s_unique_key";

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_book_data
   * @property {number[]} a_product Add-on list. Keys are add-on option keys, values are quantities.
   * @property {string} dl_client_prorate Client prorate date. Used when the purchased promotion is prorated.
   * @property {number} i_duration Asset booking duration in minutes. Used only for asset bookings.
   * @property {number} id_class_tab List of class tab objects.
   * @property {boolean} is_pay_later `true` if the client wants to pay upon their visit, `false` if paying now.
   * @property {boolean} is_purchase_previous `true` if a previously purchased option is used for this booking.
   * @property {boolean} is_wait_list_unpaid `true` if the client is placed on a wait list without paying.
   * @property {string} k_login_prize Login prize key used to pay for the booking. Empty if no prize is used.
   * @property {string} k_login_promotion Key of an already-purchased promotion used for this booking. Empty if not applicable.
   * @property {string} k_resource Asset key. Used only for asset bookings.
   * @property {string} k_reward_prize Reward prize key used to redeem a free item. Empty if not applicable.
   * @property {string} k_service Service key. Used only for appointment bookings.
   * @property {string} k_session_pass Drop-in key. Used when booking via a drop-in pass.
   * @property {string} m_tip_appointment Tip amount for the appointment.
   * @property {string} s_signature Client signature for a contract. Required when the purchase option has a contract.
   */

  /**
   * Information detailing an appointment booking.
   * Has the same structure as [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json).
   *
   * @post post
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_book_data}
   */
  this.a_book_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form_a_pay_card
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} i_csc The credit card CSC. Specify this to add a new card.
   * @property {number} i_month The credit card expiration month. Specify this to add a new card.
   * @property {number} i_year The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {string} s_comment Optional comment(s). Specify this to add a new card.
   * @property {string} s_number The card number. Specify this to add a new card.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form_a_pay_card} a_pay_card The payment card information:
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_pay_form[]}
   */
  this.a_pay_form = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data
   * @property {number} i_limit The limit of total visits.
   * @property {number} i_remain The number of remaining visits.
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of the Purchase Option.
   */

  /**
   * Information about selected Purchase Options.
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data[]}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax
   * @property {string} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply. The array keys are `k_tax` keys. Each element contains the following fields:
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The value of the discount used for the purchase.
   * @property {string} m_discount The value of the discount used for the purchase.
   * @property {string} m_discount_login The discount amount for the client type of one purchase item.
   * @property {string} m_pay The payment for the Purchase Option or single visit without taxes.
   * @property {string} m_price The price of the Purchase Option or single visit.
   */

  /**
   * Information about selected purchase items.
   *
   * Indexes are strings in the format `id_purchase_item-k_id`.
   *
   * Values are an array with the following structure:
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * The purchase item keys from the database.
   *
   * This will be `null` if not set yet.
   *
   * @post result
   * @type {?string[]}
   */
  this.a_purchase_item = null;

  /**
   * List of quiz response keys.
   * Keys are quiz keys. 
   * Values are quiz response keys.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * The key of source mode. A constant of {@link Wl_Mode_ModeSid}.
   *
   * @get get
   * @post get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The possible payment types an appointment can have.
   *
   * Values:
   * - 2 (`DEPOSIT`): A deposit was paid.
   * - 4 (`FREE`): Appointment is free and does not require payment.
   * - 3 (`FULL`): The full price was paid.
   * - 1 (`NONE`): Nothing was paid.
   *
   * @post result
   * @type {number}
   */
  this.id_pay = undefined;

  /**
   * The purchase item ID. A constant of {@link RsPurchaseItemSid}.
   *
   * @get get
   * @post get
   * @see RsPurchaseItemSid
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The business key. Currently used only with [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) variable.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of activity of the purchase made.
   * Empty if no purchase has been made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Login prize key. In case when appointment paid by reward prize, there is the key of redeemed login prize. Empty otherwise.
   *
   * @post result
   * @type {string}
   */
  this.k_login_prize = undefined;

  /**
   * The login promotion key.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass key.
   *
   * @get get
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * Gift card amount.
   *
   * @get result
   * @type {string}
   */
  this.m_coupon = undefined;

  /**
   * Discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper).
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * Surcharge amount calculated for money transfers from account: ACH, Direct Entry.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge_ach = undefined;

  /**
   * The tax of service.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The total cost of the purchase.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Variable price. Is set only during booking an appointment with variable type of the price
   *   {@link RsServicePriceSid} from spa backend {@link Wl_Mode_ModeSid}.
   *
   * @get get
   * @type {string}
   */
  this.m_variable_price = "";

  /**
   * Service unique key.
   * Used for model cache.
   *
   * @get get
   * @type {string}
   */
  this.s_unique_key = "";

  /**
   * Gift card code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_coupon_code = "";

  /**
   * The discount code to be applied to the purchase.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The user key.
   *
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentPostModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentPostModel.prototype.config=function()
{
  return {"a_field":{"a_book_data":{"post":{"post":true}},"a_pay_form":{"post":{"post":true}},"a_promotion_data":{"get":{"result":true}},"a_purchase":{"get":{"result":true}},"a_purchase_item":{"post":{"result":true}},"a_quiz_response":{"post":{"post":true}},"a_uid":{"get":{"get":true},"post":{"get":true}},"id_mode":{"get":{"get":true},"post":{"get":true}},"id_pay":{"post":{"result":true}},"id_purchase_item":{"get":{"get":true},"post":{"get":true}},"is_walk_in":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true}},"k_id":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true,"result":true},"post":{"get":true}},"k_login_activity_purchase":{"post":{"result":true}},"k_login_prize":{"post":{"result":true}},"k_login_promotion":{"get":{"get":true}},"k_session_pass":{"get":{"get":true}},"m_coupon":{"get":{"result":true}},"m_discount":{"get":{"result":true}},"m_surcharge":{"get":{"result":true}},"m_surcharge_ach":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_total":{"get":{"result":true}},"m_variable_price":{"get":{"get":true}},"s_unique_key":{"get":{"get":true}},"text_coupon_code":{"get":{"get":true},"post":{"get":true}},"text_discount_code":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentPostModel.instanceGet
 * @param {number} id_mode The key of source mode. A constant of {@link Wl_Mode_ModeSid}.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {number} id_purchase_item The purchase item ID. A constant of {@link RsPurchaseItemSid}.
 * @param {string} k_id The item key. Depends on [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json) property.
 * @param {string} k_login_promotion The login promotion key.
 * @param {string} k_session_pass Session pass key.
 * @param {string} s_unique_key Service unique key. Used for model cache.
 * @returns {Wl_Appointment_Book_Payment_PaymentPostModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Calculates pricing information for an appointment booking, including taxes, discounts, surcharges, and totals.
 *
 * Returns the full breakdown of amounts owed for the booking, including available Purchase Options,
 * applicable discount codes, surcharge amounts, and the final total. Intended to be called before
 * submitting payment so the client side can display a pricing summary to the user.
 *
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentPostModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * Accepts payment method and booking data, charges the client for the appointment or the selected
 * Purchase Option, and records the transaction. Requires the client to be authenticated and the
 * booking data to include a valid service or asset key.
 *
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentPostModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
