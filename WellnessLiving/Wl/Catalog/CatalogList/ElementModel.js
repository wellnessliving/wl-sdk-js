/**
 * Information about a certain item in the store.
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
  this._s_key = "id_sale,k_id,k_shop_product_option,k_location,dl_client_prorate,k_business,is_backend,uid_customer";

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_age_restriction
   */

  /**
   * Age restriction config.
   *
   * Age restrictions for item fills when they are configured for specific item and API requested from back side,
   * or when age restriction are public.
   *
   * <dl>
   *   <dt>int|null <var>i_age_from</var></dt>
   *   <dd>The minimum age permitted for the event. This will be `null` if a minimum age isn't set or available.</dd>
   *   <dt>int|null <var>i_age_to</var></dt>
   *   <dd>The maximum age permitted for the event. This will be `null` if a maximum age isn't set or available.</dd>
   *   <dt>bool <var>is_age_public</var></dt>
   *   <dd>This will be `true` if age restrictions are public and available. Otherwise, this will be `false` if they're hidden.
   *     When restrictions are hidden and current user isn't a staff member, the age range will be empty.</dd>
   * </dl>
   *
   * @get result
   * @var {Wl_Catalog_CatalogList_ElementModel_a_age_restriction}
   */
  this.a_age_restriction = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data
   * @property {boolean} is_renew_public Only for promotions.
   * <tt>true</tt> - client can set promotion auto-renew.
   * <tt>false</tt> - client can't set promotion auto-renew.
   */

  /**
   * Additional information specific for the item.
   *
   * The structure may be different depending on the item category.
   * <dl>
   *   <dt>
   *     bool <var>is_renew_public</var>
   *   </dt>
   *   <dd>
   *     Only for promotions.
   *     <tt>true</tt> - client can set promotion auto-renew.
   *     <tt>false</tt> - client can't set promotion auto-renew.
   *   </dd>
   * </dl>
   *
   * For example, for a product it contains inventory information. For a gift card, it contains possible amounts.
   * For a pass/membership/package, it contains information about starting and stopping.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_data}
   */
  this.a_data = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_discount_code
   * @property {string} f_amount Fixed amount of the discount.
   * @property {number} f_percent Percentage amount of the discount.
   * @property {number} i_limit Maximum count of usage. Zero means unlimited usage.
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
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_image
   * @property {number} i_height The height in pixels.
   * @property {number} i_width The width in pixels.
   * @property {boolean} is_empty <tt>true</tt> - item has no image (in this case ignore other keys of this array).
   * <tt>false</tt> - item has an image.
   * @property {string} s_url The image URL.
   */

  /**
   * Image information:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     The height in pixels.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     The width in pixels.
   *   </dd>
   *   <dt>
   *     bool <var>is_empty</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - item has no image (in this case ignore other keys of this array).
   *     <tt>false</tt> - item has an image.
   *   </dd>
   *   <dt>
   *     string <var>s_url</var>
   *   </dt>
   *   <dd>
   *     The image URL.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_image}
   */
  this.a_image = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by <tt>id_period</tt> between individual payments.
   * @property {string} k_currency The payment currency Key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */

  /**
   * A list of installment plans. Each element has the following next keys:
   * <dl>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *      The number of payments.
   *   </dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *      The duration of a single period. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *      The number of periods specified by <var>id_period</var> between individual payments.
   *   </dd>
   *   <dt>
   *     string <var>k_currency</var>
   *   </dt>
   *   <dd>
   *     The payment currency Key.
   *   </dd>
   *   <dt>
   *     string <var>k_pay_installment_template</var>
   *   </dt>
   *   <dd>
   *      The key of the installment plan template. Primary key in {@link \Wl\Pay\Installment\Template\Sql}
   *   </dd>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of the installment plan.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     The title of the installment plan.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item
   * @property {{}} a_data Contains additional specified data for the sale item.
   * @property {{}} a_image Information about one image connected to a sale item.
   * @property {{}} a_tax Contains information about taxes. Structure of this array is described in {@link RsTax::$a_tax}.
   * @property {string} id_purchase_option_view Purchase option view type, one of {@link Wl_Catalog_PurchaseOptionViewSid}.
   * @property {string} m_discount_code Amount of discount code.
   * @property {string} m_discount_login Amount of discount for client type.
   * @property {string} s_comment Additional information about sale item. For example: information about 'introductory offer'.
   * @property {string} s_price Price of the sale item in human readable format.
   * @property {string} s_sale Category title of the sale item.
   * @property {string} s_title Title of sale item.
   */

  /**
   * A list of requested goods information.
   * <dl>
   *   <dt>array <var>a_data</var></dt>
   *   <dd>Contains additional specified data for the sale item.</dd>
   *
   *   <dt>array <var>a_image</var></dt>
   *   <dd>Information about one image connected to a sale item.</dd>
   *
   *   <dt>array <var>a_tax</var></dt>
   *   <dd>Contains information about taxes. Structure of this array is described in {@link RsTax::$a_tax}.</dd>
   *
   *   <dt>string <var>id_purchase_option_view</var></dt>
   *   <dd>Purchase option view type, one of {@link Wl_Catalog_PurchaseOptionViewSid}.</dd>
   *
   *   <dt>string <var>m_discount_code</var></dt>
   *   <dd>Amount of discount code.</dd>
   *
   *   <dt>string <var>m_discount_login</var></dt>
   *   <dd>Amount of discount for client type.</dd>
   *
   *   <dt>string <var>s_comment</var></dt>
   *   <dd>Additional information about sale item. For example: information about 'introductory offer'.</dd>
   *
   *   <dt>string <var>s_price</var></dt>
   *   <dd>Price of the sale item in human readable format.</dd>
   *
   *   <dt>string <var>s_sale</var></dt>
   *   <dd>Category title of the sale item.</dd>
   *
   *   <dt>string <var>s_title</var></dt>
   *   <dd>Title of sale item.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_sale_id_group
   * @property {number} id_sale ID of item category. One of {@link RsSaleSid} constants.
   * @property {string} k_id Primary key of item.
   * @property {string} k_shop_product_option Product option. <tt>0</tt> for any other cases.
   */

  /**
   * List of items groped by sale categories on the store page.
   * Keys are sale IDs {@link RsSaleSid}, values - data to identify an item:<dl>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>ID of item category. One of {@link RsSaleSid} constants.</dd>
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
   * A list of the item's taxes.
   * Keys - tax keys.
   * Values - The amount of tax
   *
   * @get result
   * @type {{}}
   */
  this.a_tax = undefined;

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
   * The ID of the purchase item category.
   * One of {@link RsPurchaseItemSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * The ID of the item view category. One of {@link Wl_Catalog_PurchaseOptionViewSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_purchase_option_view = undefined;

  /**
   * The ID of item category.
   * One of {@link RsSaleSid} constants.
   *
   * @get get,result
   * @type {number}
   */
  this.id_sale = 0;

  /**
   * <tt>true</tt> if API is called in the backend mode, <tt>false</tt> otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

  /**
   * <tt>true</tt> if the item requires a contract, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The item key.
   *
   * @get get,result
   * @type {string}
   */
  this.k_id = 0;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The product option key.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @get get,result
   * @type {?string}
   */
  this.k_shop_product_option = "";

  /**
   * The discount amount for a discount code.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_code = undefined;

  /**
   * The discount amount for a user's type.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_login = undefined;

  /**
   * The price on the price tag.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * The price including taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_price_include = undefined;

  /**
   * The amount of taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Additional comment(s).
   * For example: information about 'introductory offer'.
   *
   * @get result
   * @type {string}
   */
  this.s_comment = undefined;

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
   * A list of goods to get information for. Every element must contain the next keys:
   * <dl>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>The ID of the item category. One of {@link RsSaleSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The key of the item.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>The key of the product option. <tt>0</tt> if the item is not a product.</dd>
   * </dl>
   * Must be serialized via JSON.
   *
   * If you specify this field, you must NOT specify fields {@link Wl_Catalog_CatalogList_ElementModel.id_sale}, {@link Wl_Catalog_CatalogList_ElementModel.k_id},
   * {@link Wl_Catalog_CatalogList_ElementModel.k_shop_product_option}.
   *
   * <tt>null</tt> to get information of only one item.
   *
   * @get get
   * @type {?string}
   */
  this.text_item = null;

  /**
   * The price on the price tag with currency sign.
   *
   * @get result
   * @type {string}
   */
  this.text_price = undefined;

  /**
   * The title of the item category.
   *
   * @get result
   * @type {string}
   */
  this.text_sale = undefined;

  /**
   * The item title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * UID of a customer user for whom purchase is performed. Is used in backend to calculate discounts.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "0";

  /**
   * A detailed description.
   *
   * @deprecated Use `html_description`.
   * @get result
   * @type {?string}
   */
  this.xml_description = null;

  /**
   * Special instructions.
   *
   * @deprecated Use `html_special`.
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
  return {"a_field": {"a_age_restriction": {"get": {"result": true}},"a_data": {"get": {"result": true}},"a_discount_code": {"get": {"get": true}},"a_image": {"get": {"result": true}},"a_installment_template": {"get": {"result": true}},"a_item": {"get": {"result": true}},"a_sale_id_group": {"get": {"get": true}},"a_tax": {"get": {"result": true}},"dl_client_prorate": {"get": {"get": true}},"f_price": {"get": {"result": true}},"f_price_include": {"get": {"result": true}},"f_tax": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_promotion_image_height": {"get": {"get": true}},"i_promotion_image_width": {"get": {"get": true}},"id_purchase_item": {"get": {"result": true}},"id_purchase_option_view": {"get": {"result": true}},"id_sale": {"get": {"get": true,"result": true}},"is_backend": {"get": {"get": true}},"is_contract": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true,"result": true}},"k_location": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true,"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_price_include": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"s_comment": {"get": {"result": true}},"s_price": {"get": {"result": true}},"s_sale": {"get": {"result": true}},"s_title": {"get": {"result": true}},"text_item": {"get": {"get": true}},"text_price": {"get": {"result": true}},"text_sale": {"get": {"result": true}},"text_title": {"get": {"result": true}},"uid_customer": {"get": {"get": true}},"xml_description": {"get": {"result": true}},"xml_special": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ElementModel.instanceGet
 * @param {number} id_sale The ID of item category. One of {@link RsSaleSid} constants.
 * @param {string} k_id The item key.
 * @param {?string} k_shop_product_option The product option key. <tt>null</tt> if not initialized yet.
 * @param {string} k_location The location key.
 * @param {?string} dl_client_prorate Client prorate date. `null` in case when client prorate date is not passed.
 * @param {string} k_business Business key.
 * @param {string} is_backend Whether API is called in the backend mode.
 * @param {string} uid_customer UID of a customer user for whom purchase is performed. Is used in backend to calculate discounts.
 * @returns {Wl_Catalog_CatalogList_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */