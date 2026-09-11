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
   * @property {number} i_age_from Lower age limit (years).
   * @property {number} i_age_from_month Lower age limit (months).
   * @property {number} i_age_from_year Lower age limit (years).
   * @property {number} i_age_to Upper age limit (years).
   * @property {number} i_age_to_month Upper age limit (months).
   * @property {number} i_age_to_year Upper age limit (years).
   * @property {boolean} is_age_public Whether age restriction should be displayed to the client.
   */

  /**
   * Age restriction config.
   *
   * Age restrictions for item fills when they are configured for specific item and API requested from back side,
   * or when age restriction are public. `null` if age restrictions are not set for the item.
   *
   * @get result
   * @var {Wl_Catalog_CatalogList_ElementModel_a_age_restriction|null}
   */
  this.a_age_restriction = null;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data_a_component
   * @property {number} id_program Program ID. One of {@link RsProgramSid} ID's. Only applies to promotions.
   * @property {number} id_purchase_item Purchase item ID. One of {@link RsPurchaseItemSid} ID's.
   * @property {number} id_sale Sale ID. One of {@link RsSaleSid} ID's.
   * @property {string} k_id The identifier of the item.
   * @property {string} text_title The title of the item.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data_a_staff
   * @property {string} k_staff @deprecated Legacy staff key. Deprecated, use {@link uid_staff} instead.
   * @property {string} uid_staff Staff user key.
   * @property {string} text_family Staff last name.
   * @property {string} text_staff Staff display name.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data
   * @property {int[]} a_service_access Access to services for a purchase option.
   *   Keys are one of the {@link ServiceSid} constants, values are one of the {@link AFlagSid}
   *   constants. Set only for relevant purchase option service category.
   *   {@link AFlagSid::ON} access to some services.
   *   {@link AFlagSid::OFF} no access to services. It can be set only for classes and events.
   *   {@link AFlagSid::ALL} access to all services. It can be set only for classes and events.
   *   For purchase options with appointments and assets service category status is always {@link AFlagSid::ON}.
   * @property {boolean} is_renew_public This applies only for promotions.
   *   `true` - clients can set promotion auto-renew.
   *   `false` - clients can't set promotion auto-renew.
   * @property {Wl_Catalog_CatalogList_ElementModel_a_data_a_component} a_component This applies only for coupons. Coupon components information.
   * @property {Wl_Catalog_CatalogList_ElementModel_a_data_a_staff} a_staff This applies to enrollment/event items. Staff list for class periods.
   * @property {string} dl_expire Date of expiration of coupon, local date in MySQL format.
   * @property {string} dl_now Current date, local date in MySQL format.
   * @property {string} dl_start Date to activate the coupon on, local date in MySQL format.
   *   When `id_activation`=FIXED, this field contains a custom date to activate the coupon on, local date in MySQL format.
   * @property {number} i_duration Number of periods the coupon is active. Type of period is specified by `id_duration`.
   * @property {number} id_activation Type of a coupon activation date specification. One of {@link ActivationSid} constants.
   * @property {number} id_duration Duration of a period. A constant from {@link ADurationSid}.</dd>
   * @property {number} id_duration_type A way to specify a duration. One of {@link DurationTypeSid} constants.
   * @property {boolean} is_price_breakdown Whether to display individual prices for each item in the package.
   */

  /**
   * Additional information specific for the item.
   *
   * The structure may be different depending on the item category.
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
   * @property {string} f_percent Percentage amount of the discount.
   * @property {number} i_limit Maximum count of usage. Zero means unlimited usage.
   * @property {string} k_discount_code Discount code key.
   * @property {string} s_discount_code Discount code value.
   */

  /**
   * Information about discount code.
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_discount_code}
   */
  this.a_discount_code = [];

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_guest_pass
   * @property {?number} i_limit Number of times guest pass can be used per period. `null` for unlimited guest pass.
   * @property {?number} i_limit_daily Number of times guest pass can be used per day. `null` for limited guest pass.
   * @property {?number} i_period Number of periods after which guest pass limits are reset. `null` for unlimited guest pass.
   * @property {?number} id_period Period type by which guest pass limits are reset. `null` for unlimited guest pass.
   * @property {?number} id_reset_type Type by which guest pass limits are reset. `null` for unlimited guest pass.
   * @property {string} k_promotion_guest Guest pass promotion key.
   * @property {string} text_limit Formatted guest pass limits.
   * @property {string} text_title Guest pass promotion title.
   */

  /**
   * Information about promotion guest pass. Empty array if promotion does not have guest pass or
   * guest pass is not enabled.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_guest_pass}
   */
  this.a_guest_pass = {};

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_image
   * @property {number} i_height The height in pixels.
   * @property {number} i_width The width in pixels.
   * @property {boolean} is_empty `true` - item has no image (in this case ignore other keys of this array).
   * `false` - item has an image.
   * @property {string} s_url The image URL.
   */

  /**
   * Image information.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_image}
   * @deprecated This property is deprecated as it does not support multiple images. Use {@link a_image_list} instead.
   */
  this.a_image = undefined;

  /**
   * List of images
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_image[]|null}
   */
  this.a_image_list = null;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by `id_period` between individual payments.
   * @property {string} k_currency The payment currency Key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */

  /**
   * A list of installment plans.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item
   * @property {Wl_Catalog_CatalogList_ElementModel_a_data} a_data Contains additional data for the sale item.
   * @property {Wl_Catalog_CatalogList_ElementModel_a_image} a_image Contains information about one image connected to a sale item.
   * @property {{}} a_tax Contains information about taxes. Fields - tax keys; values - tax amounts.
   * @property {number} id_purchase_option_view The Purchase Option view type. One of the {@link PurchaseOptionViewSid} constants.
   * @property {string} m_discount_code The discount code amount.
   * @property {string} m_discount_login The discount amount for the client type.
   * @property {string} s_comment Additional information about the sale item. For example, information about 'introductory offer'.
   * @property {string} s_price The price of the sale item in a human-readable format.
   * @property {string} s_sale The category title of the sale item.
   * @property {string} s_title The title of the sale item.
   */

  /**
   * A list of requested goods information.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_sale_id_group
   * @property {number} id_sale ID of item category. One of {@link RsSaleSid} constants.
   * @property {string} k_id Primary key of item.
   * @property {string} k_shop_product_option Product option. `0` for any other cases.
   */

  /**
   * List of items groped by sale categories on the store page.
   *
   * Keys refer to sale IDs from {@link RsSaleSid}, and values refer to data to identify an item.
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_sale_id_group[]}
   */
  this.a_sale_id_group = [];

  /**
   * A list of the item's taxes. Keys - tax keys, values - the amount of tax
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
   * Retail price of product. Empty if not a product.
   *
   * @get result
   * @type {string}
   */
  this.f_price_retail_product = '';

  /**
   * Full price of event. Empty if not an event.
   *
   * @get result
   * @type {string}
   */
  this.f_price_total_enrollment = '';

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
   * One of {@link Wl_Purchase_Item_ItemSid} constants.
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
   * `true` if API is called in the backend mode, `false` otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

  /**
   * `true` if the item requires a contract, `false` otherwise.
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
   * `null` if not initialized yet.
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
   *   <dt>int `id_sale`</dt>
   *   <dd>The ID of the item category. One of {@link RsSaleSid} constants.</dd>
   *   <dt>string `k_id`</dt>
   *   <dd>The key of the item.</dd>
   *   <dt>string `k_shop_product_option`</dt>
   *   <dd>The key of the product option. `0` if the item is not a product.</dd>
   * </dl>
   * Must be serialized via JSON.
   *
   * If you specify this field, you must NOT specify fields {@link Wl_Catalog_CatalogList_ElementModel.id_sale}, {@link Wl_Catalog_CatalogList_ElementModel.k_id},
   * {@link Wl_Catalog_CatalogList_ElementModel.k_shop_product_option}.
   *
   * `null` to get information of only one item.
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
  return {"a_field": {"a_age_restriction": {"get": {"result": true}},"a_data": {"get": {"result": true}},"a_discount_code": {"get": {"get": true}},"a_guest_pass": {"get": {"result": true}},"a_image": {"get": {"result": true}},"a_image_list": {"get": {"result": true}},"a_installment_template": {"get": {"result": true}},"a_item": {"get": {"result": true}},"a_sale_id_group": {"get": {"get": true}},"a_tax": {"get": {"result": true}},"dl_client_prorate": {"get": {"get": true}},"f_price": {"get": {"result": true}},"f_price_include": {"get": {"result": true}},"f_price_retail_product": {"get": {"result": true}},"f_price_total_enrollment":{"get":{"result": true}},"f_tax": {"get": {"result": true}},"html_description": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"i_promotion_image_height": {"get": {"get": true}},"i_promotion_image_width": {"get": {"get": true}},"id_purchase_item": {"get": {"result": true}},"id_purchase_option_view": {"get": {"result": true}},"id_sale": {"get": {"get": true,"result": true}},"is_backend": {"get": {"get": true}},"is_contract": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true,"result": true}},"k_location": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true,"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_price_include": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"s_comment": {"get": {"result": true}},"s_price": {"get": {"result": true}},"s_sale": {"get": {"result": true}},"s_title": {"get": {"result": true}},"text_item": {"get": {"get": true}},"text_price": {"get": {"result": true}},"text_sale": {"get": {"result": true}},"text_title": {"get": {"result": true}},"uid_customer": {"get": {"get": true}},"xml_description": {"get": {"result": true}},"xml_special": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ElementModel.instanceGet
 * @param {number} id_sale The ID of item category. One of {@link RsSaleSid} constants.
 * @param {string} k_id The item key.
 * @param {?string} k_shop_product_option The product option key. `null` if not initialized yet.
 * @param {string} k_location The location key.
 * @param {?string} dl_client_prorate Client prorate date. `null` in case when client prorate date is not passed.
 * @param {string} k_business Business key.
 * @param {string} is_backend Whether API is called in the backend mode.
 * @param {string} uid_customer UID of a customer user for whom purchase is performed. Is used in backend to calculate discounts.
 * @returns {Wl_Catalog_CatalogList_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */