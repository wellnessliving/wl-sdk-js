/**
 * API to save surcharge amount to the cart.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Cart_SurchargeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Data for Quick Buy.
   *
   * Structure of this array is described in {@link \RsCatalogCart::__construct()}.
   *
   * @post post
   * @type {{}}
   */
  this.a_quick_config = [];

  /**
   * Whether surcharge was set manually.
   * <tt>0</tt> if not, <tt>1</tt> if yes.
   *
   * @post post
   * @type {number}
   */
  this.is_manual = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Surcharge amount to update the cart.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_SurchargeModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_SurchargeModel.prototype.config=function()
{
  return {"a_field": {"a_quick_config": {"post": {"post": true}},"is_manual": {"post": {"post": true}},"k_business": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}}}};
};