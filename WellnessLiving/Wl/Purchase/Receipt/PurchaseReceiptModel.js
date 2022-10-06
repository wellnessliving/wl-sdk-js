/**
 * Data of certain purchase for a receipt.
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
   * @property {string} m_amount Rest amount on user account.
   * @property {string} text_currency Currency of the amount.
   * @property {string} text_method Payment method title.
   */

  /**
   * Information about rest amount on personal user account after payment of purchase. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     Rest amount on user account.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     Currency of the amount.
   *   </dd>
   *   <dt>
   *     string <var>text_method</var>
   *   </dt>
   *   <dd>
   *     Payment method title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_account_rest}
   */
  this.a_account_rest = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_business_a_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {boolean} is_empty Whether image is empty.
   * @property {string} text_url URL of the image.
   */
  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_business
   * @property {Wl_Purchase_Receipt_PurchaseReceiptModel_a_business_a_logo} a_logo Business logo:
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     Image height.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     Image width.
   *   </dd>
   *   <dt>
   *     bool <tt>is_empty</tt>
   *   </dt>
   *   <dd>
   *     Whether image is empty.
   *   </dd>
   *   <dt>
   *     string <tt>text_url</tt>
   *   </dt>
   *   <dd>
   *     URL of the image.
   *   </dd>
   * </dl>
   * @property {string} text_address Business address.
   * @property {string} text_mail Business mail.
   * @property {string} text_phone Business phone.
   * @property {string} text_title Business name.
   */

  /**
   * Information about business:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     Business logo:
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         Image height.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         Image width.
   *       </dd>
   *       <dt>
   *         bool <var>is_empty</var>
   *       </dt>
   *       <dd>
   *         Whether image is empty.
   *       </dd>
   *       <dt>
   *         string <var>text_url</var>
   *       </dt>
   *       <dd>
   *         URL of the image.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     Business address.
   *   </dd>
   *   <dt>
   *     string <var>text_mail</var>
   *   </dt>
   *   <dd>
   *     Business mail.
   *   </dd>
   *   <dt>
   *     string <var>text_phone</var>
   *   </dt>
   *   <dd>
   *     Business phone.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Business name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_business}
   */
  this.a_business = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_card
   * @property {string} text_card_number Card or account number.
   * @property {string} text_card_system Card system name from {@link \ACardSystemSid}.
   * @property {string} text_title Payment account title. 'Account number' for ACH, Card for all other.
   */

  /**
   * Payment transaction information. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>text_card_number</var>
   *   </dt>
   *   <dd>
   *     Card or account number.
   *   </dd>
   *   <dt>
   *     string <var>text_card_system</var>
   *   </dt>
   *   <dd>
   *     Card system name from {@link \ACardSystemSid}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Payment account title. 'Account number' for ACH, Card for all other.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_card}
   */
  this.a_card = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_customer
   * @property {string} text_address Customer address.
   * @property {string} text_mail Customer mail.
   * @property {string} text_name Customer name.
   * @property {string} text_phone Customer phone.
   */

  /**
   * Information about customer:
   * <dl>
   *   <dt>
   *     string <var>text_address</var>
   *   </dt>
   *   <dd>
   *     Customer address.
   *   </dd>
   *   <dt>
   *     string <var>text_mail</var>
   *   </dt>
   *   <dd>
   *     Customer mail.
   *   </dd>
   *   <dt>
   *     string <var>text_name</var>
   *   </dt>
   *   <dd>
   *     Customer name.
   *   </dd>
   *   <dt>
   *     string <var>text_phone</var>
   *   </dt>
   *   <dd>
   *     Customer phone.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_customer}
   */
  this.a_customer = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_pay_method
   * @property {string} m_amount Amount of the payment.
   * @property {string} text_currency Currency of the amount.
   * @property {string} text_pay_method Payment method title.
   */

  /**
   * List of payment methods of current purchase. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     Amount of the payment.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     Currency of the amount.
   *   </dd>
   *   <dt>
   *     string <var>text_pay_method</var>
   *   </dt>
   *   <dd>
   *     Payment method title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_pay_method}
   */
  this.a_pay_method = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_price
   * @property {string} m_discount Discount amount.
   * @property {string} m_discount_code Discount amount for a discount code.
   * @property {string} m_sum Subtotal amount - sum of the prices.
   * @property {string} m_tax Taxes amount.
   * @property {string} m_tip Tip amount.
   * @property {string} m_total Total amount.
   * @property {string} text_currency Currency of the purchase.
   * @property {string} text_discount_code Discount code applied to the purchase.
   */

  /**
   * Full information about prices of the purchase:
   * <dl>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     Discount amount.
   *   </dd>
   *   <dt>
   *     string <var>m_discount_code</var>
   *   </dt>
   *   <dd>
   *     Discount amount for a discount code.
   *   </dd>
   *   <dt>
   *     string <var>m_sum</var>
   *   </dt>
   *   <dd>
   *     Subtotal amount - sum of the prices.
   *   </dd>
   *   <dt>
   *     string <var>m_tax</var>
   *   </dt>
   *   <dd>
   *     Taxes amount.
   *   </dd>
   *   <dt>
   *     string <var>m_tip</var>
   *   </dt>
   *   <dd>
   *     Tip amount.
   *   </dd>
   *   <dt>
   *     string <var>m_total</var>
   *   </dt>
   *   <dd>
   *     Total amount.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     Currency of the purchase.
   *   </dd>
   *   <dt>
   *     string <var>text_discount_code</var>
   *   </dt>
   *   <dd>
   *     Discount code applied to the purchase.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_price}
   */
  this.a_price = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item_a_logo
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {boolean} is_empty Whether image is empty.
   * @property {string} text_url URL of the image.
   */
  /**
   * @typedef {{}} Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item
   * @property {Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item_a_logo} a_logo Purchase item logo:
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     Image height.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     Image width.
   *   </dd>
   *   <dt>
   *     bool <tt>is_empty</tt>
   *   </dt>
   *   <dd>
   *     Whether image is empty.
   *   </dd>
   *   <dt>
   *     string <tt>text_url</tt>
   *   </dt>
   *   <dd>
   *     URL of the image.
   *   </dd>
   * </dl>
   * @property {number} i_count Count of items in the purchase.
   * @property {string} k_purchase_item Purchase item key. Primary key in {@link \RsPurchaseItemSql} table.
   * @property {string} m_price Price of the single item.
   * @property {string} m_price_total Price of all items.
   * @property {string} text_category Type of the item: product, class pass, etc.
   * @property {string} text_currency Currency of the price.
   * @property {string} text_info Additional information about the purchase item.
   * @property {string} text_title Name of the purchase item.
   * @property {string} text_description Description of the purchase item.
   */

  /**
   * List of purchase items. Every element has keys:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     Purchase item logo:
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         Image height.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         Image width.
   *       </dd>
   *       <dt>
   *         bool <var>is_empty</var>
   *       </dt>
   *       <dd>
   *         Whether image is empty.
   *       </dd>
   *       <dt>
   *         string <var>text_url</var>
   *       </dt>
   *       <dd>
   *         URL of the image.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *     Count of items in the purchase.
   *   </dd>
   *   <dt>
   *     int <var>k_purchase_item</var>
   *   </dt>
   *   <dd>
   *     Purchase item key. Primary key in {@link \RsPurchaseItemSql} table.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Price of the single item.
   *   </dd>
   *   <dt>
   *     string <var>m_price_total</var>
   *   </dt>
   *   <dd>
   *     Price of all items.
   *   </dd>
   *   <dt>
   *     string <var>text_category</var>
   *   </dt>
   *   <dd>
   *     Type of the item: product, class pass, etc.
   *   </dd>
   *   <dt>
   *     string <var>text_currency</var>
   *   </dt>
   *   <dd>
   *     Currency of the price.
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
   *     Name of the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     Description of the purchase item.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Receipt_PurchaseReceiptModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * Local date of the purchase in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_purchase = undefined;

  /**
   * Whether payment was signed.
   *
   * @get result
   * @type {boolean}
   */
  this.has_signature = undefined;

  /**
   * HTML representation of purchase receipt.
   *
   * @get result
   * @type {string}
   */
  this.html_receipt = undefined;

  /**
   * Purchase key. Primary key {@link \RsPurchaseSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * Normalized purchase ID.
   *
   * @get result
   * @type {string}
   */
  this.text_purchase_id = undefined;

  /**
   * Receipt text set in store settings.
   *
   * @get result
   * @type {string}
   */
  this.text_receipt = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Receipt_PurchaseReceiptModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Receipt_PurchaseReceiptModel.prototype.config=function()
{
  return {"a_field": {"a_account_rest": {"get": {"result": true}},"a_business": {"get": {"result": true}},"a_card": {"get": {"result": true}},"a_customer": {"get": {"result": true}},"a_pay_method": {"get": {"result": true}},"a_price": {"get": {"result": true}},"a_purchase_item": {"get": {"result": true}},"dtl_purchase": {"get": {"result": true}},"has_signature": {"get": {"result": true}},"html_receipt": {"get": {"result": true}},"k_purchase": {"get": {"get": true}},"text_purchase_id": {"get": {"result": true}},"text_receipt": {"get": {"result": true}}}};
};