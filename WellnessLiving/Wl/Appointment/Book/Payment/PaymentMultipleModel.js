/**
 * Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider_a_product
   * @property {number} i_count Quantity of the add-on to purchase (used as array value).
   * @property {string} k_shop_product_option Add-on option key (used as array key).
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider_a_product} a_product The add-on list. Keys are add-on option keys.  Values are quantities:
   * @property {string} dl_client_prorate Client prorate date. Used when the purchased promotion is prorated.
   * @property {number} i_duration The asset duration in minutes. This won't be empty for asset bookings.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_pay_later This will be `true` if the customer wants to pay upon their visit. Otherwise, this will be `false` if the user wants to pay now.
   * @property {boolean} is_purchase_previous This will be `true` if the Purchase Option that was selected for another appointment from the batch must be used for this appointment. Otherwise, this will be `false`.
   * @property {boolean} is_wait_list_unpaid This will be `true` if the customer is booked into the wait list and doesn't have to pay. Otherwise, this will be `false` if the customer is booking to an active list (or if the wait list booking should be paid now).
   * @property {string} k_id The key of the purchase item. This won't be empty for new options purchased.
   * @property {string} k_login_prize The key of the customer's prize used to pay for the booking. This won't be empty for bookings made using prizes.
   * @property {string} k_login_promotion The key of the Purchase Option. This won't be empty when using a Purchase Option that's already been purchased.
   * @property {string} k_resource The key of the asset booking. This is only used for asset bookings.
   * @property {string} k_service The key of the appointment booking service. This is only used for appointment bookings.
   * @property {string} s_signature The signature for the Purchase Option contract. The data is returned from the canvas HTML element or the signature pad. This won't be empty if the Purchase Option requires contract signing.
   * @property {string} uid User's key.  Specify only in a case of booking for a lof of different users.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider} a_provider The batch of appointments to be booked. Each element has the next values:
   * @property {number} id_class_tab List of class tab objects.
   * @property {string} m_tip_appointment The tips amount.
   */

  /**
   * The booking process information:
   *
   *
   * Set this field value for GET requests.
   *
   * @get get
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data}
   */
  this.a_book_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post_a_provider_a_product
   * @property {number} i_count Quantity of the add-on to purchase (used as array value).
   * @property {string} k_shop_product_option Add-on option key (used as array key).
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post_a_provider
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post_a_provider_a_product} a_product The add-on list. Keys are add-on option keys.  Values are quantities:
   * @property {string} dl_client_prorate Client prorate date. Used when the purchased promotion is prorated.
   * @property {number} i_duration The asset duration in minutes. This won't be empty for asset bookings.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_pay_later This will be `true` if the customer wants to pay upon their visit. Otherwise, this will be `false` if the user wants to pay now.
   * @property {boolean} is_purchase_previous This will be `true` if the Purchase Option that was selected for another appointment from the batch must be used for this appointment. Otherwise, this will be `false`.
   * @property {boolean} is_wait_list_unpaid This will be `true` if the customer is booked into the wait list and doesn't have to pay. Otherwise, this will be `false` if the customer is booking to an active list (or if the wait list booking should be paid now).
   * @property {string} k_id The key of the purchase item. This won't be empty for new options purchased.
   * @property {string} k_login_prize The key of the customer's prize used to pay for the booking. This won't be empty for bookings made using prizes.
   * @property {string} k_login_promotion The key of the Purchase Option. This won't be empty when using a Purchase Option that's already been purchased.
   * @property {string} k_resource The key of the asset booking. This is only used for asset bookings.
   * @property {string} k_service The key of the appointment booking service. This is only used for appointment bookings.
   * @property {string} s_signature The signature for the Purchase Option contract. The data is returned from the canvas HTML element or the signature pad. This won't be empty if the Purchase Option requires contract signing.
   * @property {string} uid User's key.  Specify only in a case of booking for a lof of different users.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post_a_provider} a_provider The batch of appointments to be booked. Each element has the next values:
   * @property {number} id_class_tab List of class tab objects.
   * @property {string} m_tip_appointment The tips amount.
   */

  /**
   * A copy of {@link Wl_Appointment_Book_Payment_PaymentMultipleModel.a_book_data}. Has the same structure.
   * Set this field value for POST requests.
   *
   * @post post
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_post}
   */
  this.a_book_data_post = undefined;

  /**
   * The list of redeemed prizes.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_prize = undefined;

  /**
   * The payment type for the appointment. One of the {@link RsAppointmentPaySid} constants.
   *
   * @post result
   * @type {number[]}
   */
  this.a_pay = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} i_csc The credit card CSC. Specify this to add a new card.
   * @property {number} i_month The credit card expiration month. Specify this to add a new card.
   * @property {number} i_year The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {string} s_comment Optional comment(s). Specify this to add a new card.
   * @property {string} s_number The card number. Specify this to add a new card.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card} a_pay_card The payment card information:
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
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form[]}
   */
  this.a_pay_form = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data
   * @property {number} i_limit The visit count limit of the promotion.
   * @property {number} i_remain The count of remaining visits.
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of the promotion.
   */

  /**
   * Information about the selected login promotion.
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax
   * @property {string} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax} a_tax A list of taxes to apply containing information about taxes. The array keys are `k_tax` keys. Each element contains the following fields:
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The value of the discount used for the purchase.
   * @property {string} m_discount The value of the discount used for the purchase.
   * @property {string} m_pay The payment for the promotion (or single visit) without taxes.
   * @property {string} m_price The price of the promotion (or single visit).
   */

  /**
   * Fields refer to strings in the format `id_purchase_item-k_id`. Values refer to an array with the next stricture:
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase}
   */
  this.a_purchase = undefined;

  /**
   * The keys of purchased items.
   *
   * The first level of the array is the list of appointments from the batch.
   * The second level of the array is the list of items purchased for this appointment.
   *
   * @post result
   * @type {?string[][]}
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
   * The list of amounts to pay for appointments from the batch, with taxes and without surcharges.
   *
   * @get result
   * @type {string[]}
   */
  this.a_total = undefined;

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
   * The ID of the source mode. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of the activity for the purchase made. This will be empty if no purchase has been made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * The gift card amount.
   *
   * @get result
   * @type {string}
   */
  this.m_coupon = undefined;

  /**
   * The discount amount.
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
   * The amount of tax to pay.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The price of the service, with taxes and without surcharges.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * The gift card code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_coupon_code = "";

  /**
   * The discount code.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentMultipleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentMultipleModel.prototype.config=function()
{
  return {"a_field":{"a_book_data":{"get":{"get":true}},"a_book_data_post":{"post":{"post":true}},"a_login_prize":{"post":{"result":true}},"a_pay":{"post":{"result":true}},"a_pay_form":{"post":{"post":true}},"a_promotion_data":{"get":{"result":true}},"a_purchase":{"get":{"result":true}},"a_purchase_item":{"post":{"result":true}},"a_quiz_response":{"post":{"post":true}},"a_total":{"get":{"result":true}},"a_uid":{"get":{"get":true},"post":{"get":true}},"id_mode":{"get":{"get":true},"post":{"get":true}},"is_walk_in":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true,"result":true},"post":{"get":true}},"k_login_activity_purchase":{"post":{"result":true}},"m_coupon":{"get":{"result":true}},"m_discount":{"get":{"result":true}},"m_surcharge":{"get":{"result":true}},"m_surcharge_ach":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_total":{"get":{"result":true}},"text_coupon_code":{"get":{"get":true},"post":{"get":true}},"text_discount_code":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Calculates pricing information for a batch of appointment bookings, including taxes, discounts, surcharges, and per-provider totals.
 *
 * Returns the full pricing breakdown for all providers specified in the booking data, including
 * available Purchase Options, applicable discount codes, surcharge amounts, and the final total
 * for each provider. Intended to be called before submitting payment so the client side can
 * display a pricing summary.
 *
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentMultipleModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * Accepts payment method and multi-provider booking data, charges the client for all appointments
 * or selected Purchase Options in the batch, and records the transactions. Requires the client
 * to be authenticated and each provider entry to include a valid service or asset key with date.
 *
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentMultipleModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
