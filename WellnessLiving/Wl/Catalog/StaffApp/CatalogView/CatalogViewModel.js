/**
 * Products list for online store.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogView_CatalogViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Configuration information.
   *
   * Empty array means not set.
   *
   * @get get
   * @type {{}}
   */
  this.a_config = [];

  /**
   * Tax list.
   *
   * Empty array means not set.
   *
   * @get get
   * @type {{}}
   */
  this.a_tax = [];

  /**
   * Contains information about taxes. Structure of this array is described in {@link \RsTax::$a_tax}.
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
  this.i_quantity = "";

  /**
   * ID of sale category. One of {@link \RsSaleSid}.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {number}
   */
  this.id_sale = 0;

  /**
   * Business key.
   *
   * Empty value means not set.
   * <tt>null</tt> means system business.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = "";

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
   * Shop product option ID.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = "";

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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogView_CatalogViewModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogView_CatalogViewModel.prototype.config=function()
{
  return {"a_field": {"a_config": {"get": {"get": true}},"a_tax": {"get": {"get": true}},"a_tax_data": {"get": {"result": true}},"i_quantity": {"get": {"get": true}},"id_sale": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true}},"m_price": {"get": {"get": true}},"m_prorate": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};