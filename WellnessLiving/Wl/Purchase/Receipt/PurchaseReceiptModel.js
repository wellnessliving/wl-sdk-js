/**
 * Gets purchase information.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Receipt_PurchaseReceiptModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_account_rest
   * @property {string} m_amount The account balance on the user's account.
   * @property {string} text_currency The currency of the amount.
   * @property {string} text_method The payment method title.
   */

  /**
   * Information about the account balance for a user's account after payment for the purchase. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_account_rest}
   */
  this.a_account_rest = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_business_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {boolean} is_empty This will be `true` if the image is empty. Otherwise, this will be `false`.
   * @property {string} text_url The URL of the image.
   */

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_business
   * @property {Wl_Purchase_Receipt_PurchaseReceiptModel_a_business_a_logo} a_logo The business logo.
   * @property {string} text_address The business's address.
   * @property {string} text_mail The business's email address.
   * @property {string} text_phone The business's phone number.
   * @property {string} text_title The business name.
   */

  /**
   * Information about the business.
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_business}
   */
  this.a_business = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_card
   * @property {string} text_card_number The card or account number.
   * @property {string} text_card_system The card system name from {@link ACardSystemSid}.
   * @property {string} text_title The payment account title. This will be 'Account number' for ACH, 'Card' for all other cases.
   */

  /**
   * Payment transaction information. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_card}
   */
  this.a_card = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_customer
   * @property {string} text_address The customer's address.
   * @property {string} text_mail The customer's email address.
   * @property {string} text_name The customer's name.
   * @property {string} text_phone The customer's phone number.
   */

  /**
   * Information about the customer.
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_customer}
   */
  this.a_customer = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_pay_method
   * @property {string} m_amount The amount of the payment.
   * @property {string} text_currency The currency of the amount.
   * @property {string} text_pay_method The payment method title.
   */

  /**
   * A list of payment methods for the current purchase. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_pay_method}
   */
  this.a_pay_method = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_price
   * @property {string} m_discount The discount amount.
   * @property {string} m_discount_code The discount amount for a discount code.
   * @property {string} m_sum The subtotal amount (the sum of the prices).
   * @property {string} m_tax The amount of taxes.
   * @property {string} m_tip The amount of tips.
   * @property {string} m_total The total amount.
   * @property {string} text_currency The currency of the purchase.
   * @property {string} text_discount_code The discount code applied to the purchase.
   */

  /**
   * Complete information about price information for the purchase.
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_price}
   */
  this.a_price = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {boolean} is_empty Determines whether the image is empty.
   * @property {string} text_url he URL of the image.
   */

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item
   * @property {Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item_a_logo} a_logo The purchase item logo.
   * @property {string[]} a_visit List of visit keys. Only available if the purchase item is a class period, enrollment, enrollment deposit, or enrollment discount. Each element is a string visit key.
   * @property {number} i_count The number of items in the purchase.
   * @property {number} id_program Program types.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {string} k_id The identifier of the item.
   * @property {string} k_purchase_item The key of the purchase item.
   * @property {string} k_shop_product Product key. Set only if `id_purchase_item`is {@link RsPurchaseItemSid}.
   * @property {string} m_price The price of the single item.
   * @property {string} m_price_total The price of all items.
   * @property {string} text_category The type of the item (for example, a pass or membership).
   * @property {string} text_currency The currency of the price.
   * @property {string} text_description The description of the purchase item.
   * @property {string} text_info Additional information about the purchase item.
   * @property {string} text_title The name of the purchase item.
   * @property {string} url_print The URL to print. Only available if the purchase item is a coupon (gift card).
   */

  /**
   * A list of purchase items. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * The local date of the purchase in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_purchase = undefined;

  /**
   * Determines whether the payment contained a signature.
   *
   * @get result
   * @type {boolean}
   */
  this.has_signature = undefined;

  /**
   * HTML representation of the purchase receipt.
   *
   * @get result
   * @type {string}
   */
  this.html_receipt = undefined;

  /**
   * Whether {@link Wl_Purchase_Receipt_PurchaseReceiptModel.url_print} and {@link Wl_Purchase_Receipt_PurchaseReceiptModel.url_print_receipt} require authentication.
   *
   * If `true`, the URL contains a token that allows temporary access to the page without logging in. If 'false', the
   * page requires authentication.
   *
   * @get get
   * @type {boolean}
   */
  this.is_url_public = false;

  /**
   * The key of the purchase.
   *
   * @get get
   * @type {?string}
   */
  this.k_purchase = null;

  /**
   * The normalized purchase ID.
   *
   * @get result
   * @type {string}
   */
  this.text_purchase_id = undefined;

  /**
   * The receipt text set in the store settings.
   *
   * @get result
   * @type {string}
   */
  this.text_receipt = undefined;

  /**
   * The URL for printing on a normal printer.
   *
   * @get result
   * @type {string}
   */
  this.url_print = undefined;

  /**
   * The URL for printing on a receipt printer.
   *
   * @get result
   * @type {string}
   */
  this.url_print_receipt = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Receipt_PurchaseReceiptModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Receipt_PurchaseReceiptModel.prototype.config=function()
{
  return {"a_field":{"a_account_rest":{"get":{"result":true}},"a_business":{"get":{"result":true}},"a_card":{"get":{"result":true}},"a_customer":{"get":{"result":true}},"a_pay_method":{"get":{"result":true}},"a_price":{"get":{"result":true}},"a_purchase_item":{"get":{"result":true}},"dtl_purchase":{"get":{"result":true}},"has_signature":{"get":{"result":true}},"html_receipt":{"get":{"result":true}},"is_url_public":{"get":{"get":true}},"k_purchase":{"get":{"get":true}},"text_purchase_id":{"get":{"result":true}},"text_receipt":{"get":{"result":true}},"url_print":{"get":{"result":true}},"url_print_receipt":{"get":{"result":true}}}};
};

/**
 * Gets purchase information.
 *
 * Returns full receipt data for the specified purchase, including business details, customer information,
 * itemized purchase items, payment methods, pricing summary, and print URLs.
 *
 * @function
 * @name Wl_Purchase_Receipt_PurchaseReceiptModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
