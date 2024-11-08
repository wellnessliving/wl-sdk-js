/**
 * Completes the payment for an appointment or appointment Purchase Option for a client.
 *
 * The only difference between this endpoint and {@link Wl_Appointment_Book_Payment_PaymentModel} is
 * that this endpoint is capable of paying for multiple appointments at the same time.
 *
 * This endpoint uses a CAPTCHA check.
 * To pass the CAPTCHA, you'll need to study the documentation of the CAPTCHA base class. In the documentation, you'll
 * find that you need to send a CAPTCHA for a specific action. For this API, the action is `1064`.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider
   * @property {{}} a_product The add-on list.
   * Keys refer to add-on keys, and values refer to the add-on quantities.
   * @property {number} i_duration The asset duration in minutes. This won't be empty for asset bookings.
   * @property {number} id_purchase_item The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   * This won't be empty for new options purchased.
   * @property {boolean} is_pay_later This will be <tt>true</tt> if the customer wants to pay upon their visit. Otherwise, this will be <tt>false</tt>
   * if the user wants to pay now.
   * @property {boolean} is_purchase_previous This will be <tt>true</tt> if the Purchase Option that was selected for another appointment from the batch
   * must be used for this appointment. Otherwise, this will be <tt>false</tt>.
   * @property {boolean} is_wait_list_unpaid This will be <tt>true</tt> if the customer is booked into the wait list and doesn't have to pay.
   * Otherwise, this will be <tt>false</tt> if the customer is booking to an active list (or if the wait list booking
   * should be paid now).
   * @property {string} k_id The key of the purchase item.
   * This won't be empty for new options purchased.
   * @property {string} k_login_prize The key of the customer's prize used to pay for the booking. This won't be empty for bookings made using prizes.
   * @property {string} k_login_promotion The key of the Purchase Option. This won't be empty when using a Purchase Option that's already been purchased.
   * @property {string} k_resource The key of the asset booking.
   * This is only used for asset bookings.
   * @property {string} k_service The key of the appointment booking service.
   * This is only used for appointment bookings.
   * @property {string} s_signature The signature for the Purchase Option contract.
   * The data is returned from the canvas HTML element or the signature pad.
   * This won't be empty if the Purchase Option requires contract signing.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data_a_provider[]} a_provider The batch of appointments to be booked. Each element has the next values:
   * <dl>
   *   <dt>
   *     array <tt>a_product</tt>
   *   </dt>
   *   <dd>
   *     The add-on list.
   *     Keys refer to add-on keys, and values refer to the add-on quantities.
   *   </dd>
   *   <dt>
   *     int <tt>i_duration</tt>
   *   </dt>
   *   <dd>
   *     The asset duration in minutes. This won't be empty for asset bookings.
   *   </dd>
   *   <dt>
   *     int <tt>id_purchase_item</tt>
   *   </dt>
   *   <dd>
   *     The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   *     This won't be empty for new options purchased.
   *   </dd>
   *   <dt>
   *     bool <tt>is_pay_later</tt>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the customer wants to pay upon their visit. Otherwise, this will be <tt>false</tt>
   *     if the user wants to pay now.
   *   </dd>
   *   <dt>
   *     bool <tt>is_purchase_previous</tt>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the Purchase Option that was selected for another appointment from the batch
   *     must be used for this appointment. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <tt>is_wait_list_unpaid</tt>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the customer is booked into the wait list and doesn't have to pay.
   *     Otherwise, this will be <tt>false</tt> if the customer is booking to an active list (or if the wait list booking
   *     should be paid now).
   *   </dd>
   *   <dt>
   *     string <tt>k_id</tt>
   *   </dt>
   *   <dd>
   *     The key of the purchase item.
   *     This won't be empty for new options purchased.
   *   </dd>
   *   <dt>
   *     string <tt>k_login_prize</tt>
   *   </dt>
   *   <dd>
   *     The key of the customer's prize used to pay for the booking. This won't be empty for bookings made using prizes.
   *   </dd>
   *   <dt>
   *     string <tt>k_login_promotion</tt>
   *   </dt>
   *   <dd>
   *     The key of the Purchase Option. This won't be empty when using a Purchase Option that's already been purchased.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     The key of the asset booking.
   *     This is only used for asset bookings.
   *   </dd>
   *   <dt>
   *     string <tt>k_service</tt>
   *   </dt>
   *   <dd>
   *     The key of the appointment booking service.
   *     This is only used for appointment bookings.
   *   </dd>
   *   <dt>
   *     string <tt>s_signature</tt>
   *   </dt>
   *   <dd>
   *     The signature for the Purchase Option contract.
   *     The data is returned from the canvas HTML element or the signature pad.
   *     This won't be empty if the Purchase Option requires contract signing.
   *   </dd>
   * </dl>
   * @property {number} id_class_tab The "Book now" tab. One of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {string} m_tip_appointment The tips amount.
   */

  /**
   * The booking process information:
   * <dl>
   *   <dt>
   *     array[] <var>a_provider</var>
   *   </dt>
   *   <dd>
   *     The batch of appointments to be booked. Each element has the next values:
   *     <dl>
   *       <dt>
   *         array <var>a_product</var>
   *       </dt>
   *       <dd>
   *         The add-on list.
   *         Keys refer to add-on keys, and values refer to the add-on quantities.
   *       </dd>
   *       <dt>
   *         int <var>i_duration</var>
   *       </dt>
   *       <dd>
   *         The asset duration in minutes. This won't be empty for asset bookings.
   *       </dd>
   *       <dt>
   *         int <var>id_purchase_item</var>
   *       </dt>
   *       <dd>
   *         The ID of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   *         This won't be empty for new options purchased.
   *       </dd>
   *       <dt>
   *         bool <var>is_pay_later</var>
   *       </dt>
   *       <dd>
   *         This will be <tt>true</tt> if the customer wants to pay upon their visit. Otherwise, this will be <tt>false</tt>
   *         if the user wants to pay now.
   *       </dd>
   *       <dt>
   *         bool <var>is_purchase_previous</var>
   *       </dt>
   *       <dd>
   *         This will be <tt>true</tt> if the Purchase Option that was selected for another appointment from the batch
   *         must be used for this appointment. Otherwise, this will be <tt>false</tt>.
   *       </dd>
   *       <dt>
   *         bool <var>is_wait_list_unpaid</var>
   *       </dt>
   *       <dd>
   *         This will be <tt>true</tt> if the customer is booked into the wait list and doesn't have to pay.
   *         Otherwise, this will be <tt>false</tt> if the customer is booking to an active list (or if the wait list booking
   *         should be paid now).
   *       </dd>
   *       <dt>
   *         string <var>k_id</var>
   *       </dt>
   *       <dd>
   *         The key of the purchase item.
   *         This won't be empty for new options purchased.
   *       </dd>
   *       <dt>
   *         string <var>k_login_prize</var>
   *       </dt>
   *       <dd>
   *         The key of the customer's prize used to pay for the booking. This won't be empty for bookings made using prizes.
   *       </dd>
   *       <dt>
   *         string <var>k_login_promotion</var>
   *       </dt>
   *       <dd>
   *         The key of the Purchase Option. This won't be empty when using a Purchase Option that's already been purchased.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         The key of the asset booking.
   *         This is only used for asset bookings.
   *       </dd>
   *       <dt>
   *         string <var>k_service</var>
   *       </dt>
   *       <dd>
   *         The key of the appointment booking service.
   *         This is only used for appointment bookings.
   *       </dd>
   *       <dt>
   *         string <var>s_signature</var>
   *       </dt>
   *       <dd>
   *         The signature for the Purchase Option contract.
   *         The data is returned from the canvas HTML element or the signature pad.
   *         This won't be empty if the Purchase Option requires contract signing.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>id_class_tab</var>
   *   </dt>
   *   <dd>
   *     The "Book now" tab. One of the {@link Wl_Classes_Tab_TabSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>m_tip_appointment</var>
   *   </dt>
   *   <dd>
   *     The tips amount.
   *   </dd>
   * </dl>
   *
   * Set this field value for GET requests.
   *
   * @get get
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_book_data}
   */
  this.a_book_data = [];

  /**
   * A copy of {@link Wl_Appointment_Book_Payment_PaymentMultipleModel.a_book_data}.
   *
   * Set this field value for POST requests.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data_post = [];

  /**
   * The list of redeemed prizes. Each value is a primary key in {@link \RsLoginPrizeSql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_prize = [];

  /**
   * The payment type for the appointment. One of the {@link RsAppointmentPaySid} constants.
   *
   * @post result
   * @type {number[]}
   */
  this.a_pay = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card_a_pay_address
   * @property {*} is_new Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.
   * @property {*} k_geo_country The key of the country used for the payment address. Specify this to add a new address.
   * @property {*} k_geo_region The key of the region for the payment address. Specify this to add a new address.
   * @property {*} k_pay_address The key of the saved payment address. Specify this to use a saved address.
   * @property {*} s_city The city used for the payment address. Specify this to add a new address.
   * @property {*} s_name The card name. Specify this to add a new address.
   * @property {*} s_phone The payment phone. Specify this to add a new address.
   * @property {*} s_postal The postal code for the payment address. Specify this to add a new address.
   * @property {*} s_street1 The payment address. Specify this to add a new address.
   * @property {*} s_street2 The optional payment address. Specify this to add a new address.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * <dl>
   *   <dt>boolean <tt>is_new</tt></dt>
   *   <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *   <dt>string [<tt>k_geo_country</tt>]</dt>
   *   <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_geo_region</tt>]</dt>
   *   <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>k_pay_address</tt>]</dt>
   *   <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *   <dt>string [<tt>s_city</tt>]</dt>
   *   <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_name</tt>]</dt>
   *   <dd>The card name. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_phone</tt>]</dt>
   *   <dd>The payment phone. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_postal</tt>]</dt>
   *   <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street1</tt>]</dt>
   *   <dd>The payment address. Specify this to add a new address.</dd>
   *   <dt>string [<tt>s_street2</tt>]</dt>
   *   <dd>The optional payment address. Specify this to add a new address.</dd>
   * </dl>
   * @property {*} i_csc The credit card CSC. Specify this to add a new card.
   * @property {*} i_month The credit card expiration month. Specify this to add a new card.
   * @property {*} i_year The credit card expiration year. Specify this to add a new card.
   * @property {*} is_new Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   * @property {*} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {*} s_comment Optional comment(s). Specify this to add a new card.
   * @property {*} s_number The card number. Specify this to add a new card.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
   * <dl>
   *   <dt>
   *     array <tt>a_pay_address</tt>
   *   </dt>
   *   <dd>
   *     The payment address:
   *     <dl>
   *       <dt>boolean <tt>is_new</tt></dt>
   *       <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *       <dt>string [<tt>k_geo_country</tt>]</dt>
   *       <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_geo_region</tt>]</dt>
   *       <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>k_pay_address</tt>]</dt>
   *       <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *       <dt>string [<tt>s_city</tt>]</dt>
   *       <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_name</tt>]</dt>
   *       <dd>The card name. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_phone</tt>]</dt>
   *       <dd>The payment phone. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_postal</tt>]</dt>
   *       <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street1</tt>]</dt>
   *       <dd>The payment address. Specify this to add a new address.</dd>
   *       <dt>string [<tt>s_street2</tt>]</dt>
   *       <dd>The optional payment address. Specify this to add a new address.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int [<tt>i_csc</tt>]
   *   </dt>
   *   <dd>
   *     The credit card CSC. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_month</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration month. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_year</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration year. Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     boolean <tt>is_new</tt>
   *   </dt>
   *   <dd>
   *     Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>k_pay_bank</tt>]
   *   </dt>
   *   <dd>
   *     The key of the credit card. Specify this to use saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_comment</tt>]
   *   </dt>
   *   <dd>
   *     Optional comment(s). Specify this to add a new card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_number</tt>]
   *   </dt>
   *   <dd>
   *     The card number. Specify this to add a new card.
   *   </dd>
   * </dl>
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {*} is_hide Whether payment method should be saved to user's account.
   * @property {*} is_save Determines whether this payment method is hidden.
   * @property {*} is_success Identifies whether this source was successfully charged.
   * @property {*} m_surcharge The client-side calculated surcharge.
   * @property {*} s_index The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   * <dl>
   *   <dt>
   *     array [<var>a_pay_card</var>]
   *   </dt>
   *   <dd>
   *     The payment card information:
   *     <dl>
   *       <dt>
   *         array <var>a_pay_address</var>
   *       </dt>
   *       <dd>
   *         The payment address:
   *         <dl>
   *           <dt>boolean <var>is_new</var></dt>
   *           <dd>Set this value to <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *           <dt>string [<var>k_geo_country</var>]</dt>
   *           <dd>The key of the country used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_geo_region</var>]</dt>
   *           <dd>The key of the region for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>k_pay_address</var>]</dt>
   *           <dd>The key of the saved payment address. Specify this to use a saved address.</dd>
   *           <dt>string [<var>s_city</var>]</dt>
   *           <dd>The city used for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_name</var>]</dt>
   *           <dd>The card name. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_phone</var>]</dt>
   *           <dd>The payment phone. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_postal</var>]</dt>
   *           <dd>The postal code for the payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street1</var>]</dt>
   *           <dd>The payment address. Specify this to add a new address.</dd>
   *           <dt>string [<var>s_street2</var>]</dt>
   *           <dd>The optional payment address. Specify this to add a new address.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         int [<var>i_csc</var>]
   *       </dt>
   *       <dd>
   *         The credit card CSC. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_month</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration month. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_year</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration year. Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         boolean <var>is_new</var>
   *       </dt>
   *       <dd>
   *         Specify <tt>1</tt> to add a new card, or <tt>0</tt> to use a saved card.
   *       </dd>
   *       <dt>
   *         string [<var>k_pay_bank</var>]
   *       </dt>
   *       <dd>
   *         The key of the credit card. Specify this to use saved card.
   *       </dd>
   *       <dt>
   *         string [<var>s_comment</var>]
   *       </dt>
   *       <dd>
   *         Optional comment(s). Specify this to add a new card.
   *       </dd>
   *       <dt>
   *         string [<var>s_number</var>]
   *       </dt>
   *       <dd>
   *         The card number. Specify this to add a new card.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of money to withdraw with this payment source.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_hide</var>]
   *   </dt>
   *   <dt>
   *     bool [<var>is_save</var>=true]
   *   </dt>
   *   <dd>
   *     Whether payment method should be saved to user's account.
   *   </dd>
   *   <dd>
   *     Determines whether this payment method is hidden.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_success</var>=<tt>false</tt>]
   *   </dt>
   *   <dd>
   *     Identifies whether this source was successfully charged.
   *   </dd>
   *   <dt>
   *     string [<var>m_surcharge</var>]
   *   </dt>
   *   <dd>
   *     The client-side calculated surcharge.
   *   </dd>
   *   <dt>
   *     string [<var>s_index</var>]
   *   </dt>
   *   <dd>
   *     The index of this form (optional).
   *   </dd>
   *   <dt>
   *     string <var>sid_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method ID.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_pay_form[]}
   */
  this.a_pay_form = [];

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
   * <dl>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *      The visit count limit of the promotion.
   *   </dd>
   *   <dt>
   *     int <var>i_remain</var>
   *   </dt>
   *   <dd>
   *     The count of remaining visits.
   *   </dd>
   *   <dt>
   *     string <var>s_expire</var>
   *   </dt>
   *   <dd>
   *     The expiration date.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title of the promotion.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax
   * @property {number} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax} a_tax A list of taxes to apply containing information about taxes.
   * The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   * <dl>
   *   <dt>
   *     float <tt>m_tax</tt>
   *   </dt>
   *   <dd>
   *     The tax rate.
   *   </dd>
   *   <dt>
   *     string <tt>text_title</tt>
   *   </dt>
   *   <dd>
   *     The name of the tax.
   *   </dd>
   * </dl>
   * @property {string} id_purchase_item The purchase item ID. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The value of the discount used for the purchase.
   * @property {string} m_discount The value of the discount used for the purchase.
   * @property {string} m_pay The payment for the promotion (or single visit) without taxes.
   * @property {string} m_price The price of the promotion (or single visit).
   */

  /**
   * Fields refer to strings in the format <tt>id_purchase_item-k_id</tt>. Values refer to an array with the next stricture:
   * <dl>
   *   <dt>
   *     array <var>a_tax</var>
   *   </dt>
   *   <dd>
   *     A list of taxes to apply containing information about taxes.
   *     The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   *     <dl>
   *       <dt>
   *         float <var>m_tax</var>
   *       </dt>
   *       <dd>
   *         The tax rate.
   *       </dd>
   *       <dt>
   *         string <var>text_title</var>
   *       </dt>
   *       <dd>
   *         The name of the tax.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The purchase item ID. One of the {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for the purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for the purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_pay</var>
   *   </dt>
   *   <dd>
   *     The payment for the promotion (or single visit) without taxes.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price of the promotion (or single visit).
   *   </dd>
   * </dl>
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
   * The list of quiz response keys.
   * Keys refer to quiz keys.
   * And values refer to response keys.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

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
  this.a_uid = [];

  /**
   * The ID of the source mode. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
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
  this.k_location = "0";

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
  this.m_surcharge = "0.00";

  /**
   * Surcharge amount calculated for money transfers from account: ACH, Direct Entry.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge_ach = "0.00";

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
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentMultipleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentMultipleModel.prototype.config=function()
{
  return {"a_field": {"a_book_data": {"get": {"get": true}},"a_book_data_post": {"post": {"post": true}},"a_login_prize": {"post": {"result": true}},"a_pay": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_total": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"m_coupon": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_surcharge_ach": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_coupon_code": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};