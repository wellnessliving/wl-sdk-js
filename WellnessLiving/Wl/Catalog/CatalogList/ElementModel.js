/**
 * Retrieves information about product.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_CatalogList_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_sale,k_id,k_shop_product_option,k_location,dl_client_prorate";

  /**
   * Contains additional specified data for the sale item.
   *
   * @get result
   * @type {?{}}
   */
  this.a_data = null;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_discount_code
   * @property {string} f_amount Fixed amount of the discount.
   * @property {number} f_percent Percentage amount of the discount.
   * @property {number} i_limit
   * @property {string} k_discount_code Discount code key.
   * @property {string} s_discount_code Discount code value.
   */

  /**
   * Information about discount code:
   * <dl>
   *   <dt>string <var>f_amount</var></dt>
   *   <dd>Fixed amount of the discount.</dd>
   *   <dt>float <var>f_percent</var></dt>
   *   <dd>Percentage amount of the discount.</dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd></dd>
   *   <dt>string <var>k_discount_code</var></dt>
   *   <dd>Discount code key.</dd>
   *   <dt>string <var>s_discount_code</var></dt>
   *   <dd>Discount code value.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_discount_code}
   */
  this.a_discount_code = [];

  /**
   * Contains a image connected to a sale item.
   *
   * @get result
   * @type {?{}}
   */
  this.a_image = null;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_installment_template
   * @property {number} i_count Number of payments.
   * @property {number} id_duration Duration of a single period. One of {@link \ADurationSid} constants.
   * @property {number} i_period Number of periods specified by <tt>id_period</tt> between individual payments.
   * @property {string} k_currency Payment currency Key.
   * @property {string} k_pay_installment_template Key of installment plan template.
   * @property {string} m_amount Amount of installment plan.
   * @property {string} s_duration Title of installment plan.
   */

  /**
   * A list of installment plans. Each element has next keys:
   * <dl>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *      Number of payments.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *      Duration of a single period. One of {@link \ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *      Number of periods specified by <var>id_period</var> between individual payments.
   *   </dd>
   *   <dt>
   *     string <var>k_currency</var>
   *   </dt>
   *   <dd>
   *     Payment currency Key.
   *   </dd>
   *   <dt>
   *     string <var>k_pay_installment_template</var>
   *   </dt>
   *   <dd>
   *      Key of installment plan template.
   *   </dd>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     Amount of installment plan.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     Title of installment plan.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * List of data for each item from {@link Wl_Catalog_CatalogList_ElementModel.text_item}. Structure of every element equals to {@link Wl_Catalog_CatalogList_ElementModel._get()} return.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_sale_id_group
   * @property {number} id_sale ID of item category. One of {@link \RsSaleSid} constants.
   * @property {string} k_id Primary key of item.
   * @property {string} k_shop_product_option Product option. <tt>0</tt> for any other cases.
   */

  /**
   * List of items groped by sale categories on the store page.
   * Keys are sale IDs {@link \RsSaleSid}, values - data to identify an item:<dl>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>ID of item category. One of {@link \RsSaleSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Primary key of item.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>Product option. <tt>0</tt> for any other cases.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_sale_id_group[]}
   */
  this.a_sale_id_group = [];

  /**
   * Contains information about taxes. Fields - tax keys; values - tax amounts.
   *
   * @get result
   * @type {?{}}
   */
  this.a_tax = null;

  /**
   * Client prorate date.
   *
   * `null` in case when client prorate date is not passed.
   *
   * @get get
   * @type {?string}
   */
  this.dl_client_prorate = null;

  /**
   * Price of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.f_price = null;

  /**
   * Price of the sale item including the tax.
   *
   * @get result
   * @type {?string}
   */
  this.f_price_include = null;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {?string}
   */
  this.f_tax = null;

  /**
   * Description about the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.html_description = null;

  /**
   * Special instructions of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.html_special = null;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Promotion image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_promotion_image_height = 0;

  /**
   * Promotion image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_promotion_image_width = 0;

  /**
   * Purchase item ID.
   *
   * @get result
   * @type {?number}
   */
  this.id_purchase_item = null;

  /**
   * ID of purchase option view type. One of {@link \RsPurchaseItemSid}.
   *
   * @get result
   * @type {?number}
   */
  this.id_purchase_option_view = null;

  /**
   * ID of sale category. One of {@link \RsSaleSid}.
   *
   * @get get,result
   * @type {number}
   */
  this.id_sale = 0;

  /**
   * Whether it is required to sign contract.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract = undefined;

  /**
   * Key of the sale item.
   *
   * @get get,result
   * @type {string}
   */
  this.k_id = 0;

  /**
   * ID of the location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Shop product option key.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @get get,result
   * @type {?string}
   */
  this.k_shop_product_option = "";

  /**
   * Amount of discount code.
   *
   * @get result
   * @type {?string}
   */
  this.m_discount_code = null;

  /**
   * Amount of discount for client type.
   *
   * @get result
   * @type {?string}
   */
  this.m_discount_login = null;

  /**
   * Price of the element.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Price after application of discounts but before application of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_price_include = undefined;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Additional information about sale item. For example: information about 'introductory offer'.
   *
   * @get result
   * @type {?string}
   */
  this.s_comment = null;

  /**
   * Price of the sale item in human readable format.
   *
   * @get result
   * @type {?string}
   */
  this.s_price = null;

  /**
   * Category title of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.s_sale = null;

  /**
   * Title of sale item.
   *
   * @get result
   * @type {?string}
   */
  this.s_title = null;

  /**
   * Serialized list of goods.
   *
   * Use it to load a bulk of goods by 1 request. In this case do not specify {@link Wl_Catalog_CatalogList_ElementModel.id_sale},
   * {@link Wl_Catalog_CatalogList_ElementModel.k_id} and {@link Wl_Catalog_CatalogList_ElementModel.k_shop_product_option}.
   *
   * <tt>null</tt> to load just data of 1 item.
   *
   * @get get
   * @type {?string}
   */
  this.text_item = null;

  /**
   * Formatted amount of money.
   *
   * @get result
   * @type {string}
   */
  this.text_price = undefined;

  /**
   * Title of the sale.
   *
   * @get result
   * @type {string}
   */
  this.text_sale = undefined;

  /**
   * Title of the item.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * Description about the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.xml_description = null;

  /**
   * Special instructions of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.xml_special = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_CatalogList_ElementModel);

/**
 * @inheritDoc
 */
Wl_Catalog_CatalogList_ElementModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"a_discount_code": {"get": {"get": true}},"a_image": {"get": {"result": true}},"a_installment_template": {"get": {"result": true}},"a_item": {"get": {"result": true}},"a_sale_id_group": {"get": {"get": true}},"a_tax": {"get": {"result": true}},"dl_client_prorate": {"get": {"get": true}},"f_price": {"get": {"result": true}},"f_price_include": {"get": {"result": true}},"f_tax": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_promotion_image_height": {"get": {"get": true}},"i_promotion_image_width": {"get": {"get": true}},"id_purchase_item": {"get": {"result": true}},"id_purchase_option_view": {"get": {"result": true}},"id_sale": {"get": {"get": true,"result": true}},"is_contract": {"get": {"result": true}},"k_id": {"get": {"get": true,"result": true}},"k_location": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true,"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_price_include": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"s_comment": {"get": {"result": true}},"s_price": {"get": {"result": true}},"s_sale": {"get": {"result": true}},"s_title": {"get": {"result": true}},"text_item": {"get": {"get": true}},"text_price": {"get": {"result": true}},"text_sale": {"get": {"result": true}},"text_title": {"get": {"result": true}},"xml_description": {"get": {"result": true}},"xml_special": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ElementModel.instanceGet
 * @param {number} id_sale ID of sale category. One of {@link \RsSaleSid}.
 * @param {string} k_id Key of the sale item.
 * @param {?string} k_shop_product_option Shop product option key. <tt>null</tt> if not initialized yet.
 * @param {string} k_location ID of the location.
 * @param {?string} dl_client_prorate Client prorate date. `null` in case when client prorate date is not passed.
 * @returns {Wl_Catalog_CatalogList_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */