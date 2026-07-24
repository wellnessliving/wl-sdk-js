/**
 * Retrieves an information about current sale item.
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
   * @property {number} i_age_from Minimum age for service (years part).
   * @property {number} i_age_from_month Minimum age for service (months part).
   * @property {number} i_age_from_year Minimum age for service (years part).
   * @property {number} i_age_to Maximum age for service (years part).
   * @property {number} i_age_to_month Maximum age for service (months part).
   * @property {number} i_age_to_year Maximum age for service (years part).
   * @property {boolean} is_age_public Is service public even if user does not meet age requirements or not?
   * @property {boolean} is_month_enabled Whether months are enabled for age restrictions.
   */

  /**
   * The age restriction configuration.
   *
   * Age restrictions for an item apply when they're configured for a specific item and the API is requested from the backend
   * or when age restriction are public.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_age_restriction}
   */
  this.a_age_restriction = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data_a_component
   * @property {number} id_program Program ID. One of {@link RsProgramSid} ID's. Only applies to promotions.
   * @property {number} id_purchase_item Purchase item ID. One of {@link RsPurchaseItemSid} ID's.
   * @property {?number} id_sale Sale ID. One of {@link RsSaleSid} ID's.
   * @property {string} k_id The identifier of the item.
   * @property {string} text_title The title of the item.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data_a_staff
   * @property {string} k_staff @deprecated Legacy staff key.  Deprecated, use `uid_staff`.
   * @property {string} text_family Staff last name.
   * @property {string} text_staff Staff display name.
   * @property {string} uid_staff Staff user key.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_data
   * @property {Wl_Catalog_CatalogList_ElementModel_a_data_a_component} a_component This applies only for coupons. Coupon components information. Each element will contain the following keys:
   * @property {number[]} a_service_access Access to services for a purchase option. Keys are one of the {@link Wl_Service_ServiceSid} constants, values are one of the {@link AFlagSid} constants. Set only for relevant purchase option service category. {@link AFlagSid} access to some services. {@link AFlagSid} no access to services. It can be set only for classes and events. {@link AFlagSid} access to all services. It can be set only for classes and events. For purchase options with appointments and assets service category status is always {@link AFlagSid}.
   * @property {Wl_Catalog_CatalogList_ElementModel_a_data_a_staff} a_staff This applies to enrollment/event items. Staff list for class periods. Each element contains:
   * @property {string} dl_expire Date of expiration of coupon, local date in MySQL format.
   * @property {string} dl_now Current date, local date in MySQL format.
   * @property {string} dl_start Date to activate the coupon on, local date in MySQL format.   When `id_activation`=FIXED, this field contains a custom date to activate the coupon on, local date in MySQL format.
   * @property {number} i_duration Number of periods the coupon is active. Type of a period is specified by `id_duration`.
   * @property {number} id_activation Type of a coupon activation date specification. One of {@link Wl_Coupon_Edit_ActivationSid} constants.
   * @property {number} id_duration Duration of a period. A constant from {@link ADurationSid}.
   * @property {number} id_duration_type A way to specify a duration. One of {@link Wl_Coupon_Edit_DurationTypeSid} constants.
   * @property {boolean} is_renew_public This applies only for promotions. `true` - clients can set promotion auto-renew. `false` - clients can't set promotion auto-renew.
   */

  /**
   * Additional information specific for the item.
   *
   * The structure may be different depending on the item category.
   *
   *
   * Consider the following examples:
   * * For a product, this contains inventory information.
   * * For a gift card, this contains possible amounts.
   * * For a session pass/membership/package, this contains information about start and stop dates.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_data}
   */
  this.a_data = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_discount_code
   * @property {string} f_amount The fixed amount of the discount.
   * @property {number} f_percent The percentage amount of the discount.
   * @property {number} i_limit Limitation.
   * @property {string} k_discount_code The discount code key.
   * @property {string} s_discount_code The discount code value.
   */

  /**
   * Information about the discount code:
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_discount_code}
   */
  this.a_discount_code = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_image
   * @property {number} i_height The height in pixels.
   * @property {number} i_width The width in pixels.
   * @property {boolean} is_empty `true` - the item has no image (in this case, ignore the other keys of this array). `false` - the item has an image.
   * @property {string} s_url The image URL.
   */

  /**
   * Image information:
   *
   * @deprecated This property is deprecated as it does not support multiple images.
 Use {@link Wl_Catalog_CatalogList_ElementModel.a_image_list} instead.
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_image}
   */
  this.a_image = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_image_list
   * @property {number} i_height The height in pixels.
   * @property {number} i_width The width in pixels.
   * @property {boolean} is_empty `true` - item has no image (in this case ignore other keys of this array). `false` - item has an image.
   * @property {string} s_url The image URL.
   */

  /**
   * List of images.
   * Keys are index and value is below information:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_image_list[]}
   */
  this.a_image_list = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} i_period The number of periods specified by `id_period` between individual payments.
   * @property {number} id_duration The duration of a single period. One of the {@link ADurationSid} constants.
   * @property {string} k_currency The payment currency Key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */

  /**
   * A list of installment plans. Each element has the following next keys:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_installment_template[]}
   */
  this.a_installment_template = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item_a_data
   * @property {boolean} is_price_breakdown Whether to display individual prices for each item in the package. `true` display individual prices for each item in the package, `false` display a single total price for the package.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item_a_image_a_image
   * @property {number} i_height Height of the variant image.
   * @property {number} i_height_src Height of the original image.
   * @property {number} i_rotate Rotate.
   * @property {number} i_width Width of the variant image.
   * @property {number} i_width_src Width of the original image.
   * @property {number} id_type_src Type ID of the image. Constant from {@link Core_Drive_DriveTypeSid}.
   * @property {boolean} is-resize `true` if the variant differs from the original, `false` - otherwise.
   * @property {string} url-thumbnail URL to download variant (thumbnail) file.
   * @property {string} url-view URL to download original file.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item_a_image
   * @property {Wl_Catalog_CatalogList_ElementModel_a_item_a_image_a_image} a_image
   * @property {number} i_height Height of the variant image.
   * @property {number} i_width Width of the variant image.
   * @property {boolean} is_empty `true` if the image file does not exist, `false` - otherwise.
   * @property {string} s_url Link to the variant file.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item_a_tax
   * @property {number} f_tax The calculated tax amount applied by this rule.
   * @property {string} f_tax_discount The tax amount after applying all discounts.
   * @property {string} f_tax_discount_login The tax amount after applying the client type discount only.
   * @property {number} f_value The tax rate. Its meaning depends on `id_tax`.
   * @property {number} id_tax The tax type. One of {@link RsTaxSid} constants.
   * @property {string} k_tax The tax key.
   * @property {string} s_tax The tax name.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_item
   * @property {Wl_Catalog_CatalogList_ElementModel_a_item_a_data} a_data Contains additional data for the sale item. For Package, it contains also the following key:
   * @property {Wl_Catalog_CatalogList_ElementModel_a_item_a_image} a_image Contains information about one image connected to a sale item.
   * @property {Wl_Catalog_CatalogList_ElementModel_a_item_a_tax} a_tax Contains information about taxes.
   * @property {number} id_purchase_option_view The Purchase Option view type. One of the {@link Wl_Catalog_PurchaseOptionViewSid} constants.
   * @property {string} m_discount_code The discount code amount.
   * @property {string} m_discount_login The discount amount for the client type.
   * @property {string} s_comment Additional information about the sale item. For example, information about 'introductory offer'.
   * @property {string} s_price The price of the sale item in a human-readable format.
   * @property {string} s_sale The category title of the sale item.
   * @property {string} s_title The title of the sale item.
   */

  /**
   * The list of information pertaining to the specified item.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_sale_id_group
   * @property {?number} id_sale The item category ID. One of the {@link RsSaleSid} constants.
   * @property {string} k_id The primary key of item.
   * @property {string} k_shop_product_option The product option or `0` for any other cases.
   */

  /**
   * The list of items grouped by sale categories on the store page.
   * Keys refer to sale IDs from {@link RsSaleSid}, and values refer to data to identify an item:
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ElementModel_a_sale_id_group[]}
   */
  this.a_sale_id_group = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ElementModel_a_tax
   * @property {number} f_tax The calculated tax amount applied by this rule.
   * @property {string} f_tax_discount The tax amount after applying all discounts.
   * @property {string} f_tax_discount_login The tax amount after applying the client type discount only.
   * @property {number} f_value The tax rate. Its meaning depends on `id_tax`.
   * @property {number} id_tax The tax type. One of {@link RsTaxSid} constants.
   * @property {string} k_tax The tax key.
   * @property {string} s_tax The tax name.
   */

  /**
   * A list of the item's taxes.
   * Keys refer tax keys, and values refer to the amount of tax.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ElementModel_a_tax[]}
   */
  this.a_tax = undefined;

  /**
   * The client prorate date.
   *
   * This will be `null` in cases where the client prorate date hasn't passed.
   *
   * @get get
   * @type {?string}
   */
  this.dl_client_prorate = null;

  /**
   * The price of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.f_price = null;

  /**
   * The price of the sale item, including tax.
   *
   * @get result
   * @type {?string}
   */
  this.f_price_include = null;

  /**
   * The retail price of the product. This will be empty if this isn't a product.
   *
   * @get result
   * @type {string}
   */
  this.f_price_retail_product = undefined;

  /**
   * Full price of event. This will be empty if this isn't an event.
   *
   * @get result
   * @type {string}
   */
  this.f_price_total_enrollment = undefined;

  /**
   * The tax amount.
   *
   * @get result
   * @type {?string}
   */
  this.f_tax = null;

  /**
   * The sale item description.
   *
   * @get result
   * @type {?string}
   */
  this.html_description = null;

  /**
   * Special instructions for the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.html_special = null;

  /**
   * The image height in pixels. Specify this value if you need the image to be returned in a specific size.
   * The returned image will have default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * The image width in pixels. Specify this value if you need the image to be returned in a specific size.
   * The returned image will have default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The promotion image height in pixels. Specify this value if you need the image to be returned in a specific size.
   * The returned image will have default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_promotion_image_height = 0;

  /**
   * The promotion image width in pixels. Specify this value if you need the image to be returned in a specific size.
   * The returned image will have default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_promotion_image_width = 0;

  /**
   * The purchase item category ID.
   * One of the {@link RsPurchaseItemSid} constants.
   *
   * @get result
   * @see RsPurchaseItemSid
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * The ID of the item view category. One of the {@link Wl_Catalog_PurchaseOptionViewSid} constants.
   *
   * @get result
   * @see Wl_Catalog_PurchaseOptionViewSid
   * @type {number}
   */
  this.id_purchase_option_view = undefined;

  /**
   * The ID of item category.
   * One of the {@link RsSaleSid} constants.
   *
   * @get get,result
   * @see RsSaleSid
   * @type {?number}
   */
  this.id_sale = null;

  /**
   * Determines whether the API is called in the backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If `true`, the item requires a contract. Otherwise, this will be `false`.
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
  this.k_business = "";

  /**
   * The item key.
   *
   * @get get,result
   * @type {string}
   */
  this.k_id = "";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The product option key.
   *
   * This will be `null` if not set yet.
   *
   * @get get,result
   * @type {?string}
   */
  this.k_shop_product_option = null;

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
   * The price, including taxes.
   *
   * @get result
   * @type {string}
   */
  this.m_price_include = undefined;

  /**
   * The tax amount.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Additional comment(s).
   * For example, information about 'introductory offer'.
   *
   * @get result
   * @type {string}
   */
  this.s_comment = undefined;

  /**
   * The price of the sale item in a human-readable format.
   *
   * @get result
   * @type {?string}
   */
  this.s_price = null;

  /**
   * The category title of the sale item.
   *
   * @get result
   * @type {?string}
   */
  this.s_sale = null;

  /**
   * The sale item title.
   *
   * @get result
   * @type {?string}
   */
  this.s_title = null;

  /**
   * A list of goods to get information for. Every element must contain the next keys:
   *
   * Note that this must be serialized via JSON.
   *
   * If this field is specified, don't specify any of the following fields:
   * * {@link Wl_Catalog_CatalogList_ElementModel.id_sale}
   * * {@link Wl_Catalog_CatalogList_ElementModel.k_id}
   * * {@link Wl_Catalog_CatalogList_ElementModel.k_shop_product_option}
   *
   * This will be `null` to get information for only one item.
   *
   * @get get
   * @type {?string}
   */
  this.text_item = null;

  /**
   * The price on the price tag, with the currency sign.
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
   * The UID of a customer (user) for whom the purchase is made. This is used in the backend to calculate discounts.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

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
  return {"a_field":{"a_age_restriction":{"get":{"result":true}},"a_data":{"get":{"result":true}},"a_discount_code":{"get":{"get":true}},"a_image":{"get":{"result":true}},"a_image_list":{"get":{"result":true}},"a_installment_template":{"get":{"result":true}},"a_item":{"get":{"result":true}},"a_sale_id_group":{"get":{"get":true}},"a_tax":{"get":{"result":true}},"dl_client_prorate":{"get":{"get":true}},"f_price":{"get":{"result":true}},"f_price_include":{"get":{"result":true}},"f_price_retail_product":{"get":{"result":true}},"f_price_total_enrollment":{"get":{"result":true}},"f_tax":{"get":{"result":true}},"html_description":{"get":{"result":true}},"html_special":{"get":{"result":true}},"i_image_height":{"get":{"get":true}},"i_image_width":{"get":{"get":true}},"i_promotion_image_height":{"get":{"get":true}},"i_promotion_image_width":{"get":{"get":true}},"id_purchase_item":{"get":{"result":true}},"id_purchase_option_view":{"get":{"result":true}},"id_sale":{"get":{"get":true,"result":true}},"is_backend":{"get":{"get":true}},"is_contract":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_id":{"get":{"get":true,"result":true}},"k_location":{"get":{"get":true}},"k_shop_product_option":{"get":{"get":true,"result":true}},"m_discount_code":{"get":{"result":true}},"m_discount_login":{"get":{"result":true}},"m_price":{"get":{"result":true}},"m_price_include":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"s_comment":{"get":{"result":true}},"s_price":{"get":{"result":true}},"s_sale":{"get":{"result":true}},"s_title":{"get":{"result":true}},"text_item":{"get":{"get":true}},"text_price":{"get":{"result":true}},"text_sale":{"get":{"result":true}},"text_title":{"get":{"result":true}},"uid_customer":{"get":{"get":true}},"xml_description":{"get":{"result":true}},"xml_special":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ElementModel.instanceGet
 * @param {?number} id_sale The ID of item category. One of the {@link RsSaleSid} constants.
 * @param {string} k_id The item key.
 * @param {?string} k_shop_product_option The product option key. This will be `null` if not set yet.
 * @param {string} k_location The location key.
 * @param {?string} dl_client_prorate The client prorate date. This will be `null` in cases where the client prorate date hasn't passed.
 * @param {string} k_business The business key.
 * @param {boolean} is_backend Determines whether the API is called in the backend mode.
 * @param {string} uid_customer The UID of a customer (user) for whom the purchase is made. This is used in the backend to calculate discounts.
 * @returns {Wl_Catalog_CatalogList_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves an information about current sale item.
 *
 * Used to render the detail view of a single store item (promotion, product, event, or coupon) in the
 * client-facing catalog. Returns everything needed to display the item: price, taxes, images,
 * description, booking restrictions, and available purchase options.
 *
 * @function
 * @name Wl_Catalog_CatalogList_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
