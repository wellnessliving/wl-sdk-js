/**
 * Allows to pay items for the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_commission
   * @property {string} k_staff <b>Deprecated!</b>   Staff key.
   * @property {string} k_staff_pay The payment schema key.
   * @property {string} uid_staff The staff user ID.
   */

  /**
   * The staff commission earned for this purchase. If this isn't empty, it has the next fields:
   *
   * @post get
   * @type {Wl_Catalog_Payment_PaymentModel_a_commission}
   */
  this.a_commission = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_event_list_a_discount
   * @property {string} m_discount Discount amount.
   * @property {string} text_discount Discount title.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_event_list
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_event_list_a_discount} a_discount Discount applied to the event price. Staff-only: ignored when sent by a client.
   * @property {*[]} a_tax List of taxes to be applied to the event price. Keys are tax keys.  Values are tax amounts. If not specified, taxes are calculated based on class setup. Staff-only: ignored when sent by a client.
   * @property {string} k_class Key of the event class.
   * @property {string} m_checkout The amount charged for this event at checkout. Staff-only: ignored when sent by a client. When provided for all events in the list, per-event amounts are used as-is without aggregate redistribution, allowing a non-uniform distribution across events (Mode 2). If omitted for any event, falls back to item-level `m_checkout` redistribution.
   * @property {string} m_price Price of the event for the tuition participant. If not specified, price is calculated based on class setup. Staff-only: ignored when sent by a client.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift
   * @property {number} i_count The quantity of elements.
   * @property {number} id_purchase_item The purchase type of the element. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The primary key of the element, depending on the element type. Pay attention that if you add a product into gift card, there must be specified not product key but product option key. Do not specify separate field `k_shop_product_option`.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_registration_fee_list_a_discount
   * @property {string} m_discount Discount amount.
   * @property {string} text_discount Discount title.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_registration_fee_list
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_registration_fee_list_a_discount} a_discount Manual discount applied to the registration fee.
   * @property {*[]} a_tax List of taxes to be applied to the registration fee. Keys are tax keys.  Values are tax amounts.
   * @property {string} m_amount Registration fee amount for the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program_a_account
   * @property {string} k_field The field key identifying the account field.
   * @property {string} text_value The submitted value for the field.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program_a_field
   * @property {string} k_field The field key identifying the program field.
   * @property {string} text_value The submitted value for the field.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program_a_account} a_account The list of reimbursement account field values. Corresponds to the `a_account` list in {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field_list}. Each element:
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program_a_field} a_field The list of wellness program field values. Corresponds to the `a_field` list in {@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.a_field_list}. Each element:
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_config
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_event_list} a_event_list List of tuition events. Used only for {@link RsSaleSid}. Each entry has the next structure:
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_quick_gift} a_quick_gift A list of components to be added to the client. For quick gift cards only:
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_registration_fee_list} a_registration_fee_list Registration fees for tuition participants. Used only for `id_sale` = {@link RsSaleSid}. Keys are participant keys.  Staff-only: ignored when sent by a client. Each value has the next structure:
   * @property {string[]} a_uid_share An array of UIDs representing the client's relatives that share the Purchase Option.
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config_a_wellness_program} a_wellness_program "Wellness Program" fields. `k_wellness_program` must be passed along with this array. See the description below.
   * @property {string} dt_prorate The prorate date, used only for memberships.
   * @property {string} dt_send_local The date when the gift card will be sent. This is only used for gift cards.
   * @property {string} dt_start The start date, used only for memberships.
   * @property {boolean} is_pay_when_start If `true`, the client won't be charged for this item until its start date. Otherwise, this will be `false`. The Purchase Option must have a specified start date.
   * @property {boolean} is_prorate If this is set to `1`, this purchase will use the prorate rule. Otherwise, set this to `0`. This is only used for memberships.
   * @property {boolean} is_prorate_fix If this is set to `1`, the custom prorate amount will be used. Otherwise, set this to `0`. This is only used for memberships.
   * @property {boolean} is_prorate_only If this is set to `1`, this purchase is prorate only. Otherwise, set this to `0`. This is only used for memberships.
   * @property {boolean} is_renew If this is set to `1`, auto-renew will be enabled for the item. Otherwise, set this to `0`. This is only used for memberships.
   * @property {string} k_appointment The appointment key, used only for appointment add-ons.
   * @property {string} k_coupon_amount The key of the gift card amount, used only for gift cards.
   * @property {string} k_staff <b>Deprecated!</b>  The staff member key, used only for appointment tips.
   * @property {string} k_wellness_program The "Wellness Program" key. Set this for the insurance membership promotion. `a_wellness_program` array must be passed along with the key. See the array description above. <p>Use the following models to work with this type of promotion:</p> <ul>   <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain list of active programs.</li>   <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li> </ul>
   * @property {string} m_checkout Staff-only: ignored when sent by a client. Total amount to charge for the tuition item at checkout (Mode 1). Distributed proportionally across `a_event_list` entries based on their own final cost. Ignored when all entries in `a_event_list` already contain `m_checkout` values (Mode 2).
   * @property {string} m_prorate_custom The custom prorate price, used only for memberships. This is only used if `is_prorate_fix` is `true`.
   * @property {string} s_code The gift card code. This is required for gift cards.
   * @property {string} s_image The key of the image for the gift card. If empty, the business's first gift card image will be used. Specify this only for gift cards.
   * @property {string} s_mail The gift card receiver email. This is required for gift cards.
   * @property {string} s_recipient The gift card receiver name. This is required for gift cards.
   * @property {string} s_sender The gift card sender name. This is required for gift cards.
   * @property {string} uid_staff The staff member user ID, used only for appointment tips.
   * @property {string} uid_to Specifies the recipient of a transfer Purchase Option.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item_a_tax_custom
   * @property {string} f_tax The tax amount.
   * @property {string} k_tax The tax key.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_item
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_config} a_config Additional configuration information. This may contain the next keys:
   * @property {Wl_Catalog_Payment_PaymentModel_a_item_a_tax_custom} a_tax_custom Customer taxes (optional). Every element must contain the following keys:
   * @property {number} i_quantity The item quantity.
   * @property {number} id_sale The item type ID. One of the {@link RsSaleSid} constants.
   * @property {string} k_id The item key.
   * @property {string} k_login_prize The key of the login prize to apply a login prize discount.
   * @property {string} k_shop_product_option The product option key, required only for products.
   * @property {string} m_price_custom The custom price (optional).
   * @property {string} s_signature The client signature, used for items that require a signed contract.
   */

  /**
   * The list of items in the cart.
   *
   * This parameter is required.
   *
   * Every element must have the following keys:
   *
   * @post post
   * @type {Wl_Catalog_Payment_PaymentModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card
   * @property {Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} i_csc The credit card CSC. Specify this to add a new card.
   * @property {number} i_month The credit card expiration month. Specify this to add a new card.
   * @property {number} i_year The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} k_pay_bank The key of the credit card. Specify this to use saved card.
   * @property {string} s_comment Optional comment(s). Specify this to add a new card.
   * @property {string} s_number The card number. Specify this to add a new card.
   */

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_pay_form
   * @property {Wl_Catalog_Payment_PaymentModel_a_pay_form_a_pay_card} a_pay_card The payment card information:
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
   * @type {Wl_Catalog_Payment_PaymentModel_a_pay_form[]}
   */
  this.a_pay_form = undefined;

  /**
   * The list of quiz response keys.
   * Keys refer to quiz keys. 
   * And values refer to responses. 
   * Or special values from the `skip` constant.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = undefined;

  /**
   * The percentage discount (optional).
   *
   * @post post
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * The WellnessLiving mode type (required). One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines if the payment owner is an anonymous user (optional).
   *
   * @post get
   * @type {boolean}
   */
  this.is_guest = false;

  /**
   * Specify this if operations are performed by the staff member (optional).
   *
   * @post get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * The business key (required).
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key (required).
   *
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of login activity.
   *
   * This will be `null` if not set yet.
   *
   * @post result
   * @type {?string}
   */
  this.k_login_activity = null;

  /**
   * The installment template key (optional).
   * This will be `null` if the installment plan doesn't exist or isn't set for the purchased item.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_installment_template = "";

  /**
   * The purchase key created during payment.
   *
   * @post result
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * The visit key to be paid (optional).
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The amount to discount (optional).
   *
   * @post post
   * @type {string}
   */
  this.m_discount_flat = "";

  /**
   * The manual surcharge amount.
   *
   * An empty string represents an automatic surcharge amount.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = "";

  /**
   * The tip amount (optional).
   *
   * @post post
   * @type {string}
   */
  this.m_tip = "";

  /**
   * The discount code (optional).
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The custom receipt note.
   *
   * @post post
   * @type {string}
   */
  this.text_receipt_note = "";

  /**
   * The user's key (required).
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field":{"a_commission":{"post":{"get":true}},"a_item":{"post":{"post":true}},"a_pay_form":{"post":{"post":true}},"a_quiz_response":{"post":{"post":true}},"f_discount_percent":{"post":{"post":true}},"id_mode":{"post":{"get":true}},"is_guest":{"post":{"get":true}},"is_staff":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_location":{"post":{"get":true}},"k_login_activity":{"post":{"result":true}},"k_pay_installment_template":{"post":{"post":true}},"k_purchase":{"post":{"result":true}},"k_visit":{"post":{"post":true}},"m_discount_flat":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"m_tip":{"post":{"post":true}},"text_discount_code":{"post":{"post":true}},"text_receipt_note":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Allows to pay items for the client.
 *
 * The checkout endpoint that finalizes a purchase in the client-facing store. Charges the client's
 * selected payment method, applies any discounts and tips, and creates the purchase record. Returns
 * the resulting purchase key so the frontend can redirect to the confirmation page.
 *
 * @function
 * @name Wl_Catalog_Payment_PaymentModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
