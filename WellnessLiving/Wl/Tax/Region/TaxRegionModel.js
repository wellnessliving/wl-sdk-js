/**
 * API for regional taxes.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tax_Region_TaxRegionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Tax value.
   *
   * @get result
   * @post get
   * @type {?number}
   */
  this.f_tax_region = null;

  /**
   * Status of tax region.
   *
   * @post get
   * @type {?boolean}
   */
  this.is_active = null;

  /**
   * <tt>true</tt> - changes of the tax value for the business must be confirmed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_confirm = undefined;

  /**
   * Primary key of business in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Primary key of tax in {@link \RsTaxSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_tax = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tax_Region_TaxRegionModel);

/**
 * @inheritDoc
 */
Wl_Tax_Region_TaxRegionModel.prototype.config=function()
{
  return {"a_field": {"f_tax_region": {"get": {"result": true},"post": {"get": true}},"is_active": {"post": {"get": true}},"is_confirm": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_tax": {"post": {"get": true}}}};
};