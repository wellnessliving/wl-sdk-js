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
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill_a_warning
   * @property {string} text_message The user-facing warning message.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill_a_client
   * @property {boolean} is_warning `true` if the client has no default payment method on file, has no email on file while a receipt is to be sent, or is not eligible for at least one of the selected introductory items; `false` otherwise.
   * @property {string} text_mail The client email address. Empty string if the client has no email.
   * @property {string} text_name The client full name.
   * @property {string} text_pay_method The payment method label for this client. `Account` when billing to the client account; otherwise the default stored card label (for example, `Visa ****1234`), the default ACH account label when no card is on file, or an account fallback when neither is on file.
   * @property {string} text_phone The client cell phone number. Empty string if the client has no cell phone.
   * @property {string} uid The client user key.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill_a_client} a_client The list of clients that will be billed. Each element has the following structure:
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill_a_warning} a_warning The inventory and introductory-eligibility warnings produced while preparing the bill. Each element has the following structure:
   */

  /**
   * The result of preparing the clients to bill. Has the following structure:
   *
   * @post result
   * @type {Wl_Billing_Bulk_PurchaseItemListModel_a_client_bill}
   */
  this.a_client_bill = undefined;

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict_a_client
   * @property {string} text_login_type The client login type title.
   * @property {string} text_mail The client email address. Empty string if the client has no email.
   * @property {string} text_member_group Comma-separated titles of the member groups the client belongs to.
   * @property {string} text_name The client full name.
   * @property {string} uid The client user key.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict_a_warning
   * @property {string} text_message The user-facing warning message.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict_a_client} a_client The clients that fail at least one restriction. Each element has the following structure:
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict_a_warning} a_warning One warning per restricted item that at least one client fails to satisfy. Each element has the following structure:
   * @property {boolean} has_client_group_restrict `true` if at least one client fails a member group restriction, `false` otherwise.
   * @property {boolean} has_client_type_restrict `true` if at least one client fails a login type restriction, `false` otherwise.
   */

  /**
   * The clients removed from the bulk billing because a selected item is not available to their client type or
   *  member group, together with the warnings that explain why. Has the following structure:
   *
   * @post result
   * @type {Wl_Billing_Bulk_PurchaseItemListModel_a_client_restrict}
   */
  this.a_client_restrict = undefined;

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option
   * @property {string} k_shop_product_option The product option key.
   * @property {string} m_price The regular price of the option.
   * @property {string} text_title The product option title.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option} a_option The options of the product available at the location. Each element has the following structure:
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
   * @property {number} id_program The promotion program. One of the {@link RsProgramSid} constants.
   * @property {number} id_program_type The promotion program type. One of the {@link RsProgramTypeSid} constants.
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
   * Whether to charge the client default payment method (`true`) or bill the client account (`false`).
   *
   * @post post
   * @type {boolean}
   */
  this.is_payment_method_default = false;

  /**
   * Whether to send a receipt to the client email address after billing.
   *
   * @post post
   * @type {boolean}
   */
  this.is_receipt_send = false;

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

  /**
   * The review id that identifies this prepared bulk billing. Pass it to {@link Wl_Billing_Bulk_BulkBillingModel} to schedule the
   *  billing without sending the clients and items again.
   *
   * @post result
   * @type {string}
   */
  this.s_id = undefined;

  /**
   * List of client user keys to bill joined with comma.
   *
   * @post post
   * @type {string}
   */
  this.s_uid = "";

  /**
   * A note to store with each client purchase and to show on the receipt. Empty string for no note.
   *
   * @post post
   * @type {string}
   */
  this.text_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Bulk_PurchaseItemListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Bulk_PurchaseItemListModel.prototype.config=function()
{
  return {"a_field":{"a_client_bill":{"post":{"result":true}},"a_client_restrict":{"post":{"result":true}},"a_product":{"get":{"result":true}},"a_promotion":{"get":{"result":true}},"a_purchase_item":{"post":{"post":true}},"is_payment_method_default":{"post":{"post":true}},"is_receipt_send":{"post":{"post":true}},"is_tax":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true},"post":{"get":true}},"m_batch":{"post":{"result":true}},"m_subtotal":{"post":{"result":true}},"m_tax":{"post":{"result":true}},"m_total":{"post":{"result":true}},"s_id":{"post":{"result":true}},"s_uid":{"post":{"post":true}},"text_note":{"post":{"post":true}}}};
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
 * items, and collects each client contact data and payment method label. Clients that a selected item is not
 * available to (by their client type or member group) are removed from billing and returned in
 * {@link Wl_Billing_Bulk_PurchaseItemListModel.a_client_restrict}. Clients that are not eligible for the selected introductory
 * items are flagged with `is_warning` and described in {@link Wl_Billing_Bulk_PurchaseItemListModel.a_client_bill} (`a_warning`
 * key).
 *
 * @function
 * @name Wl_Billing_Bulk_PurchaseItemListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
