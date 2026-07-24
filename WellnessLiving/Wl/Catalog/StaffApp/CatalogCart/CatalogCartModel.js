/**
 * Calculates amount of cart.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid_current";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_discount_code
   * @property {boolean} is_select `true` if this code is selected currently, `false` otherwise.
   * @property {string} k_discount_code Discount code key.
   * @property {string} text_discount_code Value of the code that can be used to get discount.
   * @property {string} text_title Name of the code.
   */

  /**
   * A list of available discount codes with the next structure:
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_discount_code}
   */
  this.a_discount_code = undefined;

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_event_list_a_discount
   * @property {string} m_discount Discount amount.
   * @property {string} text_discount Discount title.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_event_list
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_event_list_a_discount} a_discount Discount applied to the event price:
   * @property {string} k_class Key of the event class within the tuition which should be granted to the client.
   * @property {string} m_checkout The amount that will be charged for this event when the tuition is purchased.      Calculated based on the payment schedule (full amount or the prorated part due now).      Can be overridden manually. If not specified or `null`, the amount will be calculated      automatically.
   * @property {string} m_price Price of the event for the tuition participant.      If not specified or `null`, price will be calculated based on the class setup.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_registration_fee_list_a_discount
   * @property {string} m_discount Discount amount.
   * @property {string} text_discount Discount title.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_registration_fee_list
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_registration_fee_list_a_discount} a_discount Manual discount applied to the registration fee:
   * @property {string} m_amount Registration fee amount for the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_event_list} a_event_list List of tuition events for tuition participant. Each record has the next structure:
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_registration_fee_list} a_registration_fee_list Registration fees for tuition participants.   Keys are participant keys.    Each value has the next structure:
   * @property {string} dt_prorate The prorate date. This should be passed when `is_prorate`=`true`.
   * @property {string} dt_send_local The date when the gift card email must be sent.
   * @property {string} dt_start The promotion start date.
   * @property {string} f_price The custom price.
   * @property {boolean} is_mail If `true`, the gift card will be sent via email. Otherwise, `false` if the gift card will be printed.
   * @property {boolean} is_prorate Determines whether to prorate the first payment.
   * @property {boolean} is_prorate_fix Determines if the client should pay for the first period now.
   * @property {boolean} is_prorate_only Determines whether the selected option 'pay prorate amount only' should only include the prorate amount.
   * @property {string} k_coupon The coupon key.
   * @property {string} k_coupon_amount The coupon amount key.
   * @property {string} m_custom The custom price of the gift card.
   * @property {string} m_prorate_custom The amount of money for the prorate period. This should only be passed in the case of manual entry.
   * @property {string} s_mail The recipient's email.
   * @property {string} s_message The message.
   * @property {string} s_recipient The recipient's name.
   * @property {string} s_sender The sender's name.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_tax_custom
   * @property {string} f_tax The tax amount.
   * @property {string} k_tax The tax keys.
   */

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config} a_config The list of purchase item additional options:
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_tax_custom} a_tax_custom Information about taxes. If not passed, no custom taxes have been applied to the sale item. If a record is present, the tax is custom using the next structure:
   * @property {number} f_discount_percent The discount percentage, applied to the current item.
   * @property {number} i_quantity The quantity of sale items.
   * @property {?number} id_sale The sale item type. One of the {@link RsSaleSid} constants.
   * @property {string} k_id The sale item key.
   * @property {string} k_shop_product_option The store product option key. This will be `null` if the sale item has no options.
   * @property {string} m_discount_fix The fixed price discount, applied to the current item.
   * @property {string} m_price_custom The custom price of the sale item. If not passed, no custom price has been applied to the sale item.
   */

  /**
   * The list of cart items with the next structure:
   *
   * @get get,result
   * @type {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * The discount as a percentage.
   *
   * @get get
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * If `true`, every item is checked at the cart. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_check_cart_item = false;

  /**
   * Determines whether the business applied a commission at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_commission = undefined;

  /**
   * Determines, how staff sees discount codes in Store.
   * `true` as select field, `false` as input field.
   *
   * @get result
   * @type {boolean}
   */
  this.is_discount_code_mode_select = undefined;

  /**
   * Determines whether to display custom receipt notes at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_receipt_note = undefined;

  /**
   * The business key.
   *
   * This field isn't used directly, but described for correct JavaScript auto-generation.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The business location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The discount amount in dollars, excluding tax.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * The manual discount amount in dollars, excluding tax.
   * Staff members can set this amount when making a sale.
   *
   * @get get
   * @type {string}
   */
  this.m_discount_flat = "";

  /**
   * The discount amount applied to the cart's total amount, including taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_total = undefined;

  /**
   * The subtotal amount.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The amount of tips.
   *
   * @get get
   * @type {string}
   */
  this.m_tip = "";

  /**
   * The amount of appointment tips.
   *
   * @get result
   * @type {string}
   */
  this.m_tip_purchase = undefined;

  /**
   * The cart's total amount.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * The discount code.
   *
   * This will be `null` if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.text_discount_code = null;

  /**
   * The discount code's error code.
   *
   * `null` if no error.
   *
   * @get result
   * @type {?string}
   */
  this.text_error_code = null;

  /**
   * The discount code's error message.
   *
   * `null` if no error.
   *
   * @get result
   * @type {?string}
   */
  this.text_error_message = null;

  /**
   * The custom receipt note's text.
   *
   * @get result
   * @type {string}
   */
  this.text_receipt_note = undefined;

  /**
   * The key of the current user.
   *
   * @get get
   * @type {string}
   */
  this.uid_current = "";

  /**
   * The key of the user who performed the purchase.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.prototype.config=function()
{
  return {"a_field":{"a_discount_code":{"get":{"result":true}},"a_item":{"get":{"get":true,"result":true}},"f_discount_percent":{"get":{"get":true}},"is_check_cart_item":{"get":{"get":true}},"is_commission":{"get":{"result":true}},"is_discount_code_mode_select":{"get":{"result":true}},"is_receipt_note":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"m_discount":{"get":{"result":true}},"m_discount_flat":{"get":{"get":true}},"m_discount_total":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_tip":{"get":{"get":true}},"m_tip_purchase":{"get":{"result":true}},"m_total":{"get":{"result":true}},"text_discount_code":{"get":{"get":true}},"text_error_code":{"get":{"result":true}},"text_error_message":{"get":{"result":true}},"text_receipt_note":{"get":{"result":true}},"uid_current":{"get":{"get":true}},"uid_customer":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.instanceGet
 * @param {string} k_business The business key. This field isn't used directly, but described for correct JavaScript auto-generation.
 * @param {string} uid_current The key of the current user.
 * @returns {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Calculates amount of cart.
 *
 * Used in the staff app checkout flow to show a live price summary before the staff member processes
 * a client's payment. Returns the full breakdown so the staff member can confirm the total with
 * the client before charging.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
