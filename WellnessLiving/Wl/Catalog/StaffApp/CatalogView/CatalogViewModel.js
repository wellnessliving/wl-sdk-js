/**
 * Calculates price information about sale item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogView_CatalogViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_config
   * @property {number} f_promote The amount to prorate the item by.
   * @property {boolean} is_prorate If `true`, this item is prorated.
   * @property {string} m_prorate_custom The custom prorate amount.
   */

  /**
   * Configuration information about the item, which can specify prorated amounts.
   *
   * If set, these values will change the values returned by the endpoint call.
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_config}
   */
  this.a_config = undefined;

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax
   * @property {string} k_tax The tax ID.
   * @property {string} m_tax_custom The amount of custom tax.
   */

  /**
   * Contains information about edited taxes.
   *
   * This will be `null` if not set yet or default taxes are used.
   *
   * The key is the tax identifier, where the value is:
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax}
   */
  this.a_tax = undefined;

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax_data
   * @property {number} f_tax The calculated tax amount applied by this rule.
   * @property {string} f_tax_discount The tax amount after applying all discounts.
   * @property {string} f_tax_discount_login The tax amount after applying the client type discount only.
   * @property {number} f_value The tax rate. Its meaning depends on `id_tax`.
   * @property {number} id_tax Types of taxes.
   * @property {string} k_tax The tax key.
   * @property {string} s_tax The tax name.
   */

  /**
   * Contains information about calculated taxes.
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax_data}
   */
  this.a_tax_data = undefined;

  /**
   * The quantity of items.
   *
   * @get get
   * @type {number}
   */
  this.i_quantity = 0;

  /**
   * The ID of the sale category. One of the {@link RsSaleSid} constants.
   *
   * @get get
   * @see RsSaleSid
   * @type {?number}
   */
  this.id_sale = null;

  /**
   * The business key.
   * This will be `null` for the system business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the sale item.
   * This can be retrieved with the {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel} endpoint (see the
   * `a_shop_product` parameter).
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The product option key.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = "";

  /**
   * The custom price of the sale item.
   *
   * @get get
   * @type {string}
   */
  this.m_price = "";

  /**
   * The prorated amount.
   *
   * @get result
   * @type {string}
   */
  this.m_prorate = undefined;

  /**
   * The amount of the sale item, excluding taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The calculated amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The calculated amount of the sale item, including taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * The ID of the user who performed the actions.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogView_CatalogViewModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogView_CatalogViewModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true}},"a_tax":{"get":{"get":true}},"a_tax_data":{"get":{"result":true}},"i_quantity":{"get":{"get":true}},"id_sale":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_shop_product_option":{"get":{"get":true}},"m_price":{"get":{"get":true}},"m_prorate":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_total":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Calculates price information about sale item.
 *
 * Used in the staff app checkout to show the real-time price of a single line item as the staff
 * member configures it (adjusting quantity, custom price, or proration). Returns the full tax
 * breakdown so the staff member sees exactly what the client will be charged.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogView_CatalogViewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
