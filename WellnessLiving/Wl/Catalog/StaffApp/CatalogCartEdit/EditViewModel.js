/**
 * Calculates price information about sale item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel_a_config
   * @property {string} dt_start Local date when the promotion starts, in `Y-m-d` format. Required when    `is_pay_when_start` is `true`.
   * @property {boolean} is_pay_when_start `true` if the client should be charged only once the promotion actually starts.
   * @property {boolean} is_prorate `true` to calculate a prorated tax amount for the item.
   * @property {boolean} is_prorate_only `true` to use only the prorated amount as the taxable amount.
   * @property {string} m_prorate_custom Custom prorated amount that overrides the automatically calculated one.
   */

  /**
   * Configuration information.
   *
   * Empty array means not set. May include:
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel_a_config}
   */
  this.a_config = undefined;

  /**
   * List of manual set taxes.
   *
   * Empty array means not set. Each key is the tax key, and the value is the manually set
   *  tax amount for that tax.
   *
   * @get get
   * @type {{}}
   */
  this.a_tax = null;

  /**
   * Contains information about taxes. Each key is the tax key, and the value describes the
   *  calculated amount for that tax:
   *
   * @get result
   * @type {{}}
   */
  this.a_tax_data = undefined;

  /**
   * Quantity of items.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {number}
   */
  this.i_quantity = 0;

  /**
   * ID of sale category. One of {@link RsSaleSid}.
   *
   * Empty value means not set.
   *
   * @get get
   * @see RsSaleSid
   * @type {?number}
   */
  this.id_sale = null;

  /**
   * ID of the sale item.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Shop product option ID.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = "";

  /**
   * Discount value of the sale item.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Price amount.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.m_price = "";

  /**
   * Prorate amount.
   *
   * @get result
   * @type {string}
   */
  this.m_prorate = undefined;

  /**
   * Amount of sale item without taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Amount of sale item including taxes and quantity.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Current user ID.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * Client user ID.
   *
   * Empty string or `false` means 'walk-in' option
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true}},"a_tax":{"get":{"get":true}},"a_tax_data":{"get":{"result":true}},"i_quantity":{"get":{"get":true}},"id_sale":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_shop_product_option":{"get":{"get":true}},"m_discount":{"get":{"result":true}},"m_price":{"get":{"get":true}},"m_prorate":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_total":{"get":{"result":true}},"uid":{"get":{"get":true}},"uid_customer":{"get":{"get":true}}}};
};

/**
 * Calculates price information about sale item.
 *
 * Validates the location, user, and requested sale item, builds the appropriate purchase
 * item (product, promotion, or other catalog item), applies any prorate configuration,
 * manual discount rules for the client, and manually set taxes, then returns the
 * resulting subtotal, tax, discount, and total amounts for the requested quantity.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCartEdit_EditViewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
