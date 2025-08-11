/**
 * API for group booking process.
 *
 * This API allows to book a class/event for multiple clients at once.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_ProcessGroupModel()
{
    WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    _       array [a_purchase_item]
    _       array[] [a_resource]
    
   * @property {number} i_index Order number of the asset.
   * @property {number} k_resource Asset primary key.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    _       array [a_purchase_item]
    
   * @property {*}            int [i_count]
         Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   * @property {*}            string [id_purchase_item]
         Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *         Specify only if you want to purchase a new option.
   * @property {*}            bool [is_renew]
         `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *         Specify only if you want to purchase a new option.
   * @property {*}            string [k_id]
         Primary key of option to purchase.
   *         Specify only if you want to purchase a new option.
   * @property {*}            string [k_login_prize]
         Primary key of user's prize.
   *         Specify if you want to pay by user's prize.
   * @property {*}            string [k_login_promotion]
         Primary key of user's purchase option.
   *         Specify only if you want to pay by already purchased option.
   * @property {*}            string [k_reward_prize]
         Primary key of a prize to redeem.
   *         Specify if you want to redeem a prize for payment.
   * @property {*}            string [s_signature]
         Signature of the client in base64 format.
   *         Specify only if you want to buy a purchase option that requires signature.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    
   * @property {string} dtu_date Session date/time.
   * @property {boolean} [is_wait_list_unpaid=false] `true` to book this session into waitlist, `false` to book in common way.
   * @property {string} k_class_period Session primary key.
   */
  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_client
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    }        array[] [a_event_session]
     List of event sessions to book. Required for only for event that allows to select sessions to book.
   *     Each element has next keys:
   *     <dl>
   *         <dt>string `dtu_date`</dt>
   *         <dd>Session date/time.</dd>
   *         <dt>bool [`is_wait_list_unpaid`=false]</dt>
   *         <dd>`true` to book this session into waitlist, `false` to book in common way.</dd>
   *         <dt>string `k_class_period`</dt>
   *         <dd>Session primary key.</dd>
   *     </dl>
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    _       array [a_purchase_item]
    }        array [a_purchase_item]
     Purchase option information. Required if the service requires online payment:
   *     <dl>
   *         <dt>
   *             int [`i_count`]
   *         </dt>
   *         <dd>
   *             Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   *         </dd>
   *         <dt>
   *             string [`id_purchase_item`]
   *         </dt>
   *         <dd>
   *             Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *             Specify only if you want to purchase a new option.
   *         </dd>
   *         <dt>
   *             bool [`is_renew`]
   *         </dt>
   *         <dd>
   *             `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *             Specify only if you want to purchase a new option.
   *         </dd>
   *         <dt>
   *             string [`k_id`]
   *         </dt>
   *         <dd>
   *             Primary key of option to purchase.
   *             Specify only if you want to purchase a new option.
   *         </dd>
   *         <dt>
   *             string [`k_login_prize`]
   *         </dt>
   *         <dd>
   *             Primary key of user's prize.
   *             Specify if you want to pay by user's prize.
   *         </dd>
   *         <dt>
   *             string [`k_login_promotion`]
   *         </dt>
   *         <dd>
   *             Primary key of user's purchase option.
   *             Specify only if you want to pay by already purchased option.
   *         </dd>
   *         <dt>
   *             string [`k_reward_prize`]
   *         </dt>
   *         <dd>
   *             Specify if you want to redeem a prize for payment.
   *         </dd>
   *         <dt>
   *             string [`s_signature`]
   *         </dt>
   *         <dd>
   *             Signature of the client in base64 format.
   *             Specify only if you want to buy a purchase option that requires signature.
   *         </dd>
   *     </dl>
   * @property {*}        array [a_quiz_response]
     Answers for questions. Required if the service requires answers for questions.
   *     Keys are quiz keys.
   *     Values are response keys.
   * @property {Wl_Book_Process_ProcessGroupModel_a_client_       array[] [a_event_session]
    _       array [a_purchase_item]
    _       array[] [a_resource]
    }        array[] [a_resource]
     Asset information. Required if the service requires asset booking. Each element has next keys:
   *     <dl>
   *         <dt>int <tt>i_index</tt></dt>
   *         <dd>Order number of the asset.</dd>
   *         <dt>int <tt>k_resource</tt></dt>
   *         <dd>Asset primary key.</dd>
   *     </dl>
   */

  /**
   * List of clients to book.
   * Each key is client's primary key.
   * Each value is an array with next keys:
   * <dl>
   *     <dt>
   *         array[] [`a_event_session`]
   *     </dt>
   *     <dd>
   *         List of event sessions to book. Required for only for event that allows to select sessions to book.
   *         Each element has next keys:
   *         <dl>
   *             <dt>string `dtu_date`</dt>
   *             <dd>Session date/time.</dd>
   *             <dt>bool [`is_wait_list_unpaid`=false]</dt>
   *             <dd>`true` to book this session into waitlist, `false` to book in common way.</dd>
   *             <dt>string `k_class_period`</dt>
   *             <dd>Session primary key.</dd>
   *         </dl>
   *     </dd>
   *     <dt>
   *         array [`a_purchase_item`]
   *     </dt>
   *     <dd>
   *         Purchase option information. Required if the service requires online payment:
   *         <dl>
   *             <dt>
   *                 int [`i_count`]
   *             </dt>
   *             <dd>
   *                 Number of options to purchase. Specify only if you want to pay a class booking by Drop-In.
   *             </dd>
   *             <dt>
   *                 string [`id_purchase_item`]
   *             </dt>
   *             <dd>
   *                 Kind of option to purchase. One of {@link Wl_Purchase_Item_ItemSid} constants.
   *                 Specify only if you want to purchase a new option.
   *             </dd>
   *             <dt>
   *                 bool [`is_renew`]
   *             </dt>
   *             <dd>
   *                 `true` if you want to enable auto-renewal for new purchase option. `false` otherwise.
   *                 Specify only if you want to purchase a new option.
   *             </dd>
   *             <dt>
   *                 string [`k_id`]
   *             </dt>
   *             <dd>
   *                 Primary key of option to purchase.
   *                 Specify only if you want to purchase a new option.
   *             </dd>
   *             <dt>
   *                 string [`k_login_prize`]
   *             </dt>
   *             <dd>
   *                 Primary key of user's prize.
   *                 Specify if you want to pay by user's prize.
   *             </dd>
   *             <dt>
   *                 string [`k_login_promotion`]
   *             </dt>
   *             <dd>
   *                 Primary key of user's purchase option.
   *                 Specify only if you want to pay by already purchased option.
   *             </dd>
   *             <dt>
   *                 string [`k_reward_prize`]
   *             </dt>
   *             <dd>
   *                 Specify if you want to redeem a prize for payment.
   *             </dd>
   *             <dt>
   *                 string [`s_signature`]
   *             </dt>
   *             <dd>
   *                 Signature of the client in base64 format.
   *                 Specify only if you want to buy a purchase option that requires signature.
   *             </dd>
   *         </dl>
   *     </dd>
   *     <dt>
   *         array [`a_quiz_response`]
   *     </dt>
   *     <dd>
   *         Answers for questions. Required if the service requires answers for questions.
   *         Keys are quiz keys.
   *         Values are response keys.
   *     </dd>
   *     <dt>
   *         array[] [`a_resource`]
   *     </dt>
   *     <dd>
   *         Asset information. Required if the service requires asset booking. Each element has next keys:
   *         <dl>
   *             <dt>int <var>i_index</var></dt>
   *             <dd>Order number of the asset.</dd>
   *             <dt>int <var>k_resource</var></dt>
   *             <dd>Asset primary key.</dd>
   *         </dl>
   *     </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_ProcessGroupModel_a_client}
   */
  this.a_client = [];

  /**
   * Primary keys of users' activity that correspond to bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_book = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
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
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_pay_form
   * @property {Wl_Book_Process_ProcessGroupModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
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
   * @type {Wl_Book_Process_ProcessGroupModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Book_Process_ProcessGroupModel_a_repeat
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
   * @type {?Wl_Book_Process_ProcessGroupModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * Primary keys of bookings made.
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
   * Key of the business in which the wizard is executed.
   *
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The key of the user's activity corresponding to the purchase made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Login promotion to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The installment template primary key.
   * `null` to not use installment template.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

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
   * The discount code to be applied to the purchase.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

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

WlSdk_ModelAbstract.extends(Wl_Book_Process_ProcessGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_ProcessGroupModel.prototype.config=function()
{
  return {"a_field": {"a_client": {"post": {"post": true}},"a_login_activity_book": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_pay_installment_template": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};