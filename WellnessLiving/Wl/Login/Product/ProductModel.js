/**
 * Returns information about products purchased by client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Product_ProductModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,dtu_end,dtu_start,i_page,i_page_size,id_pay_method,k_location,k_shop_product_option,m_price_max,m_price_min";

  /**
   * @typedef {{}} Wl_Login_Product_ProductModel_a_login_product
   * @property {string} dtu_purchase Date and time of purchase in UTC.
   * @property {number} i_quantity Quantity of the product purchased.
   * @property {string} k_shop_product_option Key of product.
   * @property {string} m_price Price per unit of the product.
   * @property {string} m_total_amount Total amount paid for the product.
   * @property {string} text_location Location where the purchase was made.
   * @property {string} text_product Name of the purchased product.
   */

  /**
   * List of purchased products:
   *
   * @get result
   * @type {Wl_Login_Product_ProductModel_a_login_product}
   */
  this.a_login_product = undefined;

  /**
   * Maximal date and time of purchase in UTC. Empty string means no filter by maximal date.
   *
   * @get get
   * @type {string}
   */
  this.dtu_end = "";

  /**
   * Minimal date and time of purchase in UTC. Empty string means no filter by minimal date.
   *
   * @get get
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * Number of the page to get.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 1;

  /**
   * Page size.
   *
   * @get get
   * @type {number}
   */
  this.i_page_size = 50;

  /**
   * ID of the payment method. One of the {@link RsPayMethodSid} constants. Zero means no filter by payment method.
   *
   * @get get
   * @see RsPayMethodSid
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key. Empty string means no filter by location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Product option key. Empty string means no filter by product option.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = "";

  /**
   * Maximum price of the product. 0 means no filter by maximum price.
   *
   * @get get
   * @type {string}
   */
  this.m_price_max = "0.00";

  /**
   * Minimum price of the product.
   *
   * @get get
   * @type {string}
   */
  this.m_price_min = "0.00";

  /**
   * User key. Empty string means return products purchased by walk-in.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Product_ProductModel);

/**
 * @inheritDoc
 */
Wl_Login_Product_ProductModel.prototype.config=function()
{
  return {"a_field":{"a_login_product":{"get":{"result":true}},"dtu_end":{"get":{"get":true}},"dtu_start":{"get":{"get":true}},"i_page":{"get":{"get":true}},"i_page_size":{"get":{"get":true}},"id_pay_method":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_shop_product_option":{"get":{"get":true}},"m_price_max":{"get":{"get":true}},"m_price_min":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Product_ProductModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key. Empty string means return products purchased by walk-in.
 * @param {string} dtu_end Maximal date and time of purchase in UTC. Empty string means no filter by maximal date.
 * @param {string} dtu_start Minimal date and time of purchase in UTC. Empty string means no filter by minimal date.
 * @param {number} i_page Number of the page to get.
 * @param {number} i_page_size Page size.
 * @param {?number} id_pay_method ID of the payment method. One of the {@link RsPayMethodSid} constants. Zero means no filter by payment method.
 * @param {string} k_location Location key. Empty string means no filter by location.
 * @param {string} k_shop_product_option Product option key. Empty string means no filter by product option.
 * @param {string} m_price_max Maximum price of the product. 0 means no filter by maximum price.
 * @param {string} m_price_min Minimum price of the product.
 * @returns {Wl_Login_Product_ProductModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about products purchased by client.
 *
 * Accepts filters for business, user, location, payment method, product option, price range, and date range,
 * then returns a paginated list of product purchases with quantity, unit price, total amount, product name, and
 * purchase location.
 *
 * @function
 * @name Wl_Login_Product_ProductModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
