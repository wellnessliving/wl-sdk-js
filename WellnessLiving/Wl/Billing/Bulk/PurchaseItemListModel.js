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
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option
   * @property {boolean} is_inventory `true` if the product tracks inventory, `false` otherwise.
   * @property {string} k_shop_product_option The product option key.
   * @property {string} m_price The regular price of the option.
   * @property {string} text_title The product option title.
   */

  /**
   * @typedef {{}} Wl_Billing_Bulk_PurchaseItemListModel_a_product
   * @property {Wl_Billing_Bulk_PurchaseItemListModel_a_product_a_option} a_option The list of product options available at the location. Each element has the following structure:
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
   * @property {string} k_promotion The promotion key.
   * @property {string} m_price The promotion price, excluding taxes.
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
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key to filter available items by.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Bulk_PurchaseItemListModel);

/**
 * @inheritDoc
 */
Wl_Billing_Bulk_PurchaseItemListModel.prototype.config=function()
{
  return {"a_field":{"a_product":{"get":{"result":true}},"a_promotion":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
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
