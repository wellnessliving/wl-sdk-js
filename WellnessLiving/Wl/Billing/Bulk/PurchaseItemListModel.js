/**
 * Gets the list of promotions and products available at the location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Bulk_PurchaseItemListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location";

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill
   * @property {string} text_mail The client email address. Empty string if the client has no email.
   * @property {string} text_name The client full name.
   * @property {string} text_pay_method The payment method label for this client. `Account` when billing to the client account; otherwise the default stored card label (for example, `Visa ****1234`), the default ACH account label when no card is on file, or an account fallback when neither is on file.
   * @property {string} text_phone The client cell phone number. Empty string if the client has no cell phone.
   * @property {string} uid The client user key.
   */

  /**
   * The list of clients that will be billed. Each element has the following structure:
   *
   * @post result
   * @type {Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill[]}
   */
  this.a_client_bill = undefined;

  /**
   * The list of clients that will be skipped due to restrictions. Each element has the same structure as an
   *  element of {@link Wl_Billing_Bulk_PurchaseItemListModel.a_client_bill}.
   *
   * This list is always empty for now and will be populated once the restriction checks are implemented.
   *
   * @post result
   * @type {*[][]}
   */
  this.a_client_ignore = undefined;

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option
   * @property {boolean} is_inventory `true` if the product tracks inventory, `false` otherwise.
   * @property {string} k_shop_product_option The product option key.
   * @property {string} m_price The regular price of the option.
   * @property {string} text_title The product option title.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option} a_option The list of product options available at the location. Each element has the following structure:
   * @property {boolean} is_tax_free `true` if no taxes should be applied to the product, `false` otherwise.
   * @property {string} k_shop_product The product key.
   * @property {string} text_title The product title.
   */

  /**
   * The list of products available at the location. Each element has the following structure:
   *
   * @get result
   * @type {Wl_Billing_Bulk_PurchaseItemListModel_a_product[]}
   */
  this.a_product = undefined;

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_promotion
   * @property {number} id_program Program types.
   * @property {number} id_program_type Program types.
   * @property {boolean} is_tax_free `true` if no taxes should be applied to the promotion, `false` otherwise.
   * @property {string} k_promotion The promotion key.
   * @property {string} m_price The promotion price, excluding taxes.
   * @property {string} text_payment_period Payment period of the promotion.
   * @property {string} text_title The promotion title.
   */

  /**
   * The list of promotions available at the location. Each element has the following structure:
   *
   * @get result
   * @type {Wl_Billing_Bulk_PurchaseItemListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The list of purchase items to bill. Each element is a string in the `{id_purchase_item}:{k_id}` format, where
   *  `id_purchase_item` is one of the {@link RsPurchaseItemSid} constants and `k_id` is the promotion key for
   *  {@link RsPurchaseItemSid} or the product option key for {@link RsPurchaseItemSid}.
   *
   * @post post
   * @type {number[]}
   */
  this.a_purchase_item = undefined;

  /**
   * The list of client user keys to bill.
   *
   * @post post
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * Whether to charge the client default payment method (`true`) or bill the client account (`false`).
   *
   * @post post
   * @type {boolean}
   */
  this.is_payment_method_default = false;

  /**
   * Whether to include the pre-configured taxes into the totals.
   *
   * @post post
   * @type {boolean}
   */
  this.is_tax = false;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key to filter available items by.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The total amount charged across every client that will be billed (per-client total multiplied by the number
   *  of billed clients). Excludes taxes when {@link Wl_Billing_Bulk_PurchaseItemListModel.is_tax} is `false`.
   *
   * @post result
   * @type {string}
   */
  this.m_batch = undefined;

  /**
   * The subtotal per client (sum of the selected purchase item prices, excluding taxes).
   *
   * @post result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The tax amount per client. Always `0` when {@link Wl_Billing_Bulk_PurchaseItemListModel.is_tax} is `false`.
   *
   * @post result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The total per client (subtotal plus tax).
   *
   * @post result
   * @type {string}
   */
  this.m_total = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Bulk_PurchaseItemListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Bulk_PurchaseItemListModel.prototype.config=function()
{
  return {"a_field":{"a_client_bill":{"post":{"result":true}},"a_client_ignore":{"post":{"result":true}},"a_product":{"get":{"result":true}},"a_promotion":{"get":{"result":true}},"a_purchase_item":{"post":{"post":true}},"a_uid":{"post":{"post":true}},"is_payment_method_default":{"post":{"post":true}},"is_tax":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true},"post":{"get":true}},"m_batch":{"post":{"result":true}},"m_subtotal":{"post":{"result":true}},"m_tax":{"post":{"result":true}},"m_total":{"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Billing_Bulk_PurchaseItemListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} k_location The location key to filter available items by.
 * @returns {Wl_Billing_Bulk_PurchaseItemListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets the list of promotions and products available at the location.
 *
 * Validates access to the business, then loads promotions with their prices and products expanded into
 * their options, keeping only the items available at the requested location.
 *
 * @function
 * @name Wl_Billing_Bulk_PurchaseItemListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Prepares the bulk billing review: the per-client totals and the list of clients that will be billed.
 *
 * Validates access to the business, calculates the per-client subtotal, tax and total for the selected purchase
 * items, and collects each client contact data and payment method label. The list of clients skipped due to
 * restrictions is returned separately and is empty for now.
 *
 * @function
 * @name Wl_Billing_Bulk_PurchaseItemListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
