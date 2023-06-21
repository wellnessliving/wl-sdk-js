/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * Only difference from {@link Wl_Appointment_Book_Payment_PaymentModel} is possibility to pay for a lot of appointments at the same time.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Booking process information:
   * <dl>
   *   <dt>
   *     array[] <tt>a_provider</tt>
   *   </dt>
   *   <dd>
   *     Batch of appointments to be booked. Each element has values:
   *     <dl>
   *       <dt>
   *         array <tt>a_product</tt>
   *       </dt>
   *       <dd>
   *         Add-on list.
   *         Keys are add-on keys.
   *         Values are add-on quantity.
   *       </dd>
   *       <dt>
   *         int <tt>i_duration</tt>
   *       </dt>
   *       <dd>
   *         Asset duration in minutes. Not empty for asset booking only.
   *       </dd>
   *       <dt>
   *         int <tt>id_purchase_item</tt>
   *       </dt>
   *       <dd>
   *         ID of item to purchase.
   *         Not empty for new options purchase.
   *       </dd>
   *       <dt>
   *         boolean <tt>is_pay_later</tt>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if customer wants to on visit; <tt>false</tt> if user wants to pay now.
   *       </dd>
   *       <dt>
   *         boolean <tt>is_purchase_previous</tt>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if purchase option that was selected for another appointment from the batch
   *         must be used for this appointment; <tt>false</tt> otherwise.
   *       </dd>
   *       <dt>
   *         boolean <tt>is_wait_list_unpaid</tt>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if customer is booking to wait list and don't have to pay;
   *         <tt>false</tt> if customer is booking to active list or wait list should be paid.
   *       </dd>
   *       <dt>
   *         string <tt>k_id</tt>
   *       </dt>
   *       <dd>
   *         Key of option to purchase.
   *         Not empty for new option purchase.
   *       </dd>
   *       <dt>
   *         string <tt>k_login_prize</tt>
   *       </dt>
   *       <dd>
   *         Key of customer's prize to pay for booking. Not empty for free booking by prize.
   *       </dd>
   *       <dt>
   *         string <tt>k_login_promotion</tt>
   *       </dt>
   *       <dd>
   *         Key of already purchased option. Not empty to use already purchase option.
   *       </dd>
   *       <dt>
   *         string <tt>k_resource</tt>
   *       </dt>
   *       <dd>
   *         Key of booking asset.
   *         Not empty only for asset booking.
   *       </dd>
   *       <dt>
   *         string <tt>k_service</tt>
   *       </dt>
   *       <dd>
   *         Key of booking appointment.
   *         Not empty only for appointment booking.
   *       </dd>
   *       <dt>
   *         string <tt>s_signature</tt>
   *       </dt>
   *       <dd>
   *         Signature for purchase option contract.
   *         Data from canvas html element or signature pad.
   *         Not empty only if purchase option requires contract signing.
   *       </dd>
   *     </dl>
   *   </dt>
   *   <dt>
   *     int <tt>id_class_tab</tt>
   *   </dt>
   *   <dd>
   *     "Book now" tab ID.
   *   </dd>
   *   <dt>
   *     string <tt>m_tip_appointment</tt>
   *   </dt>
   *   <dd>
   *     Tips amount.
   *   </dd>
   * </dl>
   *
   * Set this field value in a case of GET request.
   *
   * @get get
   * @type {{}}
   */
  this.a_book_data = {};

  /**
   * Copy of <tt>a_book_data</tt>.
   *
   * Set this field value in a case of POST request.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data_post = {};

  /**
   * IDs of payment conditions of booked appointments.
   *
   * @post result
   * @type {number[]}
   */
  this.a_pay = undefined;

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   * <dl>
   *   <dt>
   *     array [<tt>a_pay_card</tt>]
   *   </dt>
   *   <dd>
   *     The payment card information:
   *     <dl>
   *       <dt>
   *         array <tt>a_pay_address</tt>
   *       </dt>
   *       <dd>
   *         The payment address:
   *         <dl>
   *           <dt>boolean <tt>is_new</tt></dt>
   *           <dd>Set this value is <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *           <dt>string [<tt>k_geo_country</tt>]</dt>
   *           <dd>The key of the country used for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<tt>k_geo_region</tt>]</dt>
   *           <dd>The key of the region for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<tt>k_pay_address</tt>]</dt>
   *           <dd>The key of the saved payment address. Specify to use a saved address.</dd>
   *           <dt>string [<tt>s_city</tt>]</dt>
   *           <dd>The city used for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<tt>s_name</tt>]</dt>
   *           <dd>The card name. Specify to add a new address.</dd>
   *           <dt>string [<tt>s_phone</tt>]</dt>
   *           <dd>The payment phone. Specify to add a new address.</dd>
   *           <dt>string [<tt>s_postal</tt>]</dt>
   *           <dd>The postal code for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<tt>s_street1</tt>]</dt>
   *           <dd>The payment address. Specify to add a new address.</dd>
   *           <dt>string [<tt>s_street2</tt>]</dt>
   *           <dd>The optional payment address. Specify to add a new address.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         int [<tt>i_csc</tt>]
   *       </dt>
   *       <dd>
   *         The credit card CSC. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         int [<tt>i_month</tt>]
   *       </dt>
   *       <dd>
   *         The credit card expiration month. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         int [<tt>i_year</tt>]
   *       </dt>
   *       <dd>
   *         The credit card expiration year. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         boolean <tt>is_new</tt>
   *       </dt>
   *       <dd>
   *         <tt>1</tt> to add a new card; <tt>0</tt> to use a saved card.
   *       </dd>
   *       <dt>
   *         string [<tt>k_pay_bank</tt>]
   *       </dt>
   *       <dd>
   *         The key of a credit card. Specify to use saved card.
   *       </dd>
   *       <dt>
   *         string [<tt>s_comment</tt>]
   *       </dt>
   *       <dd>
   *         Optional comment(s). Specify to add a new card.
   *       </dd>
   *       <dt>
   *         string [<tt>s_number</tt>]
   *       </dt>
   *       <dd>
   *         The card number. Specify to add a new card.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <tt>f_amount</tt>
   *   </dt>
   *   <dd>
   *     The amount of money to withdraw with this payment source.
   *   </dd>
   *   <dt>
   *     boolean [<tt>is_hide</tt>]
   *   </dt>
   *   <dd>
   *     Whether this payment method is hidden.
   *   </dd>
   *   <dt>
   *     boolean [<tt>is_success</tt>=<tt>false</tt>]
   *   </dt>
   *   <dd>
   *     Identifies whether this source was successfully charged.
   *   </dd>
   *   <dt>
   *     string [<tt>m_surcharge</tt>]
   *   </dt>
   *   <dd>
   *     The client-side calculated surcharge.
   *   </dd>
   *   <dt>
   *     string [<tt>s_index</tt>]
   *   </dt>
   *   <dd>
   *     The index of this form (optional).
   *   </dd>
   *   <dt>
   *     string <tt>sid_pay_method</tt>
   *   </dt>
   *   <dd>
   *     The payment method ID.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data
   * @property {number} i_limit Limit on the visit count of the promotion.
   * @property {number} i_remain Count of remaining visits.
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of promotion.
   */

  /**
   * Information about selected login promotion.
   *
   *     <dl>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *      Limit on the visit count of the promotion.
   *   </dd>
   *   <dt>
   *     int <var>i_remain</var>
   *   </dt>
   *   <dd>
   *     Count of remaining visits.
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
   *     The title of promotion.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax
   * @property {number} m_tax Tax rate.
   * @property {string} text_title Name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   * <dl>
   *   <dt>
   *     float <tt>m_tax</tt>
   *   </dt>
   *   <dd>
   *     Tax rate.
   *   </dd>
   *   <dt>
   *     string <tt>text_title</tt>
   *   </dt>
   *   <dd>
   *     Name of the tax.
   *   </dd>
   * </dl>
   * @property {string} id_purchase_item Purchase item ID.
   * @property {string} k_id The value of the discount used for purchase.
   * @property {string} m_discount The value of the discount used for purchase.
   * @property {string} m_pay The payment for the promotion or single visit without taxes.
   * @property {string} m_price The price of the promotion or single visit.
   */

  /**
   * Fields - string in format <tt>id_purchase_item-k_id</tt>. Values - array with next stricture:
   * <dl>
   *   <dt>
   *     array <var>a_tax</var>
   *   </dt>
   *   <dd>
   *     Contains information about taxes in the following format. A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   *     <dl>
   *       <dt>
   *         float <var>m_tax</var>
   *       </dt>
   *       <dd>
   *         Tax rate.
   *       </dd>
   *       <dt>
   *         string <var>text_title</var>
   *       </dt>
   *       <dd>
   *         Name of the tax.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     Purchase item ID.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_pay</var>
   *   </dt>
   *   <dd>
   *     The payment for the promotion or single visit without taxes.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price of the promotion or single visit.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase}
   */
  this.a_purchase = undefined;

  /**
   * Keys of purchased items.
   *
   * 1st level array is list of appointments from batch.
   * 2nd level array is list of items purchased for this appointment.
   *
   * @post result
   * @type {?string[][]}
   */
  this.a_purchase_item = null;

  /**
   * List of quiz response keys.
   * Key is quiz key.
   * Value is response key.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = {};

  /**
   * List of amount to pay for appointments from batch with the tax without surcharge.
   *
   * @get result
   * @type {string[]}
   */
  this.a_total = undefined;

  /**
   * List of users' keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * The ID of the source mode. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The key of the location to show available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The activity key of the purchase that was made. This will be empty if no purchase was made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

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
   * Surcharge amount.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * The amount of tax to pay.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The price of service with the tax without surcharge.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Gift card code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_coupon_code = "";

  /**
   * Discount code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * User to get information for.
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
Wl_Appointment_Book_Payment_PaymentMultipleModel.prototype.config = function()
{
  return {
    "a_field": {
      "a_book_data": {
        "get": {
          "get": true
        }
      },
      "a_book_data_post": {
        "post": {
          "post": true
        }
      },
      "a_pay": {
        "post": {
          "result": true
        }
      },
      "a_pay_form": {
        "post": {
          "post": true
        }
      },
      "a_promotion_data": {
        "get": {
          "result": true
        }
      },
      "a_purchase": {
        "get": {
          "result": true
        }
      },
      "a_purchase_item": {
        "post": {
          "result": true
        }
      },
      "a_quiz_response": {
        "post": {
          "post": true
        }
      },
      "a_total": {
        "get": {
          "result": true
        }
      },
      "a_uid": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "id_mode": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "is_walk_in": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "k_location": {
        "get": {
          "get": true,
          "result": true
        },
        "post": {
          "get": true
        }
      },
      "k_login_activity_purchase": {
        "post": {
          "result": true
        }
      },
      "m_coupon": {
        "get": {
          "result": true
        }
      },
      "m_discount": {
        "get": {
          "result": true
        }
      },
      "m_surcharge": {
        "get": {
          "result": true
        }
      },
      "m_tax": {
        "get": {
          "result": true
        }
      },
      "m_total": {
        "get": {
          "result": true
        }
      },
      "text_coupon_code": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "text_discount_code": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      },
      "uid": {
        "get": {
          "get": true
        },
        "post": {
          "get": true
        }
      }
    }
  };
};