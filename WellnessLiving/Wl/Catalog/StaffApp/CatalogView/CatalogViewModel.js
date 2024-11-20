/**
 * Returns information about an item’s price after taxes.
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
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_config
   * @property {number} f_promote The amount to prorate the item by.
   * @property {boolean} is_prorate If <tt>true</tt> this item is prorated.
   * @property {string} m_prorate_custom The custom prorate amount.
   */

  /**
   * Configuration information about the item, which can specify prorated amounts.
   *
   * If set, these values will change the values returned by the endpoint call.
   *
   * <dl>
   *   <dt>float <var>f_promote</var></dt>
   *   <dd>The amount to prorate the item by.</dd>
   *   <dt>bool <var>is_prorate</var></dt>
   *   <dd>If <tt>true</tt> this item is prorated.</dd>
   *   <dt>string <var>m_prorate_custom</var></dt>
   *   <dd>The custom prorate amount.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_config}
   */
  this.a_config = [];

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax
   * @property {string} k_tax The tax ID.
   * @property {string} m_tax_custom The amount of custom tax.
   */

  /**
   * Contains information about edited taxes.
   *
   * It is `null` if not set yet or taxes are default.
   *
   * The key is the tax identifier and the value is:
   * <dl>
   *   <dt>string <var>k_tax</var></dt>
   *   <dd>The tax ID.</dd>
   *   <dt>string <var>m_tax_custom</var></dt>
   *   <dd>The amount of custom tax.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogView_CatalogViewModel_a_tax}
   */
  this.a_tax = [];

  /**
   * Contains information about calculated taxes. The structure of this array is described in {@link RsTax::$a_tax}.
   *
   * @get result
   * @type {{}}
   */
  this.a_tax_data = undefined;

  /**
   * The quantity of items.
   *
   * @get get
   * @type {number}
   */
  this.i_quantity = "";

  /**
   * The ID of the sale category. One of {@link RsSaleSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_sale = 0;

  /**
   * The business key.
   * `null` means system business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the sale item.
   * It can be retrieved with the {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel} endpoint (see the
   * <var>a_shop_product</var> parameter).
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The key of the product option.
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
   * Amount of sale item without taxes.
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
  return {"a_field": {"a_config": {"get": {"get": true}},"a_tax": {"get": {"get": true}},"a_tax_data": {"get": {"result": true}},"i_quantity": {"get": {"get": true}},"id_sale": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true}},"m_price": {"get": {"get": true}},"m_prorate": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};