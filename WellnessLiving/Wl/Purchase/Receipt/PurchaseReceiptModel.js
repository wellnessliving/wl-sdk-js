/**
 * An endpoint that returns receipt data of certain purchase.
 *
 * This model is generated automatically based on API.
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
   * <dl>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     The account balance on the user's account.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     The currency of the amount.
   *   </dd>
   *   <dt>
   *     string <var>text_method</var>
   *   </dt>
   *   <dd>
   *     The payment method title.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     The image height.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     The image width.
   *   </dd>
   *   <dt>
   *     bool <tt>is_empty</tt>
   *   </dt>
   *   <dd>
   *     This will be `true` if the image is empty. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <tt>text_url</tt>
   *   </dt>
   *   <dd>
   *     The URL of the image.
   *   </dd>
   * </dl>
   * @property {string} text_address The business's address.
   * @property {string} text_mail The business's email address.
   * @property {string} text_phone The business's phone number.
   * @property {string} text_title The business name.
   */

  /**
   * Information about the business.
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     The business logo.
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         The image height.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         The image width.
   *       </dd>
   *       <dt>
   *         bool <var>is_empty</var>
   *       </dt>
   *       <dd>
   *         This will be `true` if the image is empty. Otherwise, this will be `false`.
   *       </dd>
   *       <dt>
   *         string <var>text_url</var>
   *       </dt>
   *       <dd>
   *         The URL of the image.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     The business's address.
   *   </dd>
   *   <dt>
   *     string <var>text_mail</var>
   *   </dt>
   *   <dd>
   *     The business's email address.
   *   </dd>
   *   <dt>
   *     string <var>text_phone</var>
   *   </dt>
   *   <dd>
   *     The business's phone number.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The business name.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>
   *     string <var>text_card_number</var>
   *   </dt>
   *   <dd>
   *     The card or account number.
   *   </dd>
   *   <dt>
   *     string <var>text_card_system</var>
   *   </dt>
   *   <dd>
   *     The card system name from {@link ACardSystemSid}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The payment account title. This will be 'Account number' for ACH, 'Card' for all other cases.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     The customer's address.
   *   </dd>
   *   <dt>
   *     string <var>text_mail</var>
   *   </dt>
   *   <dd>
   *     The customer's email address.
   *   </dd>
   *   <dt>
   *     string <var>text_name</var>
   *   </dt>
   *   <dd>
   *     The customer's name.
   *   </dd>
   *   <dt>
   *     string <var>text_phone</var>
   *   </dt>
   *   <dd>
   *     The customer's phone number.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of the payment.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     The currency of the amount.
   *   </dd>
   *   <dt>
   *     string <var>text_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method title.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     The discount amount.
   *   </dd>
   *   <dt>
   *     string <var>m_discount_code</var>
   *   </dt>
   *   <dd>
   *     The discount amount for a discount code.
   *   </dd>
   *   <dt>
   *     string <var>m_sum</var>
   *   </dt>
   *   <dd>
   *     The subtotal amount (the sum of the prices).
   *   </dd>
   *   <dt>
   *     string <var>m_tax</var>
   *   </dt>
   *   <dd>
   *     The amount of taxes.
   *   </dd>
   *   <dt>
   *     string <var>m_tip</var>
   *   </dt>
   *   <dd>
   *     The amount of tips.
   *   </dd>
   *   <dt>
   *     string <var>m_total</var>
   *   </dt>
   *   <dd>
   *     The total amount.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     The currency of the purchase.
   *   </dd>
   *   <dt>
   *     string <var>text_discount_code</var>
   *   </dt>
   *   <dd>
   *     The discount code applied to the purchase.
   *   </dd>
   * </dl>
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
   * @property {string} text_url The URL of the image.
   */
  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item
   * @property {Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item_a_logo} a_logo The purchase item logo.
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     The image height.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     The image width.
   *   </dd>
   *   <dt>
   *     bool <tt>is_empty</tt>
   *   </dt>
   *   <dd>
   *     Determines whether the image is empty.
   *   </dd>
   *   <dt>
   *     string <tt>text_url</tt>
   *   </dt>
   *   <dd>
   *     The URL of the image.
   *   </dd>
   * </dl>
   * @property {number} i_count The number of items in the purchase.
   * @property {string} k_purchase_item The key of the purchase item.
   * @property {string} m_price The price of the single item.
   * @property {string} m_price_total The price of all items.
   * @property {string} text_category The type of the item (for example, a pass or membership).
   * @property {string} text_currency The currency of the price.
   * @property {string} text_info Additional information about the purchase item.
   * @property {string} text_title The name of the purchase item.
   * @property {string} text_description The description of the purchase item.
   */

  /**
   * A list of purchase items. Every element has the following keys:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     The purchase item logo.
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         The image height.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         The image width.
   *       </dd>
   *       <dt>
   *         bool <var>is_empty</var>
   *       </dt>
   *       <dd>
   *         Determines whether the image is empty.
   *       </dd>
   *       <dt>
   *         string <var>text_url</var>
   *       </dt>
   *       <dd>
   *         The URL of the image.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *     The number of items in the purchase.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The key of the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price of the single item.
   *   </dd>
   *   <dt>
   *     string <var>m_price_total</var>
   *   </dt>
   *   <dd>
   *     The price of all items.
   *   </dd>
   *   <dt>
   *     string <var>text_category</var>
   *   </dt>
   *   <dd>
   *     The type of the item (for example, a pass or membership).
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     The currency of the price.
   *   </dd>
   *   <dt>
   *     string <var>text_info</var>
   *   </dt>
   *   <dd>
   *     Additional information about the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The name of the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     The description of the purchase item.
   *   </dd>
   * </dl>
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
   * Whether the print receipt URL requires authentication. If `true`, the URL contains a token that temporarily
   * allows access to the print receipt without a login. `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_url_public = false;

  /**
   * The key of the purchase.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase = undefined;

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
  return {"a_field": {"a_account_rest": {"get": {"result": true}},"a_business": {"get": {"result": true}},"a_card": {"get": {"result": true}},"a_customer": {"get": {"result": true}},"a_pay_method": {"get": {"result": true}},"a_price": {"get": {"result": true}},"a_purchase_item": {"get": {"result": true}},"dtl_purchase": {"get": {"result": true}},"has_signature": {"get": {"result": true}},"html_receipt": {"get": {"result": true}},"k_purchase": {"get": {"get": true}},"text_purchase_id": {"get": {"result": true}},"text_receipt": {"get": {"result": true}},"url_print": {"get": {"result": true}},"url_print_receipt": {"get": {"result": true}}}};
};