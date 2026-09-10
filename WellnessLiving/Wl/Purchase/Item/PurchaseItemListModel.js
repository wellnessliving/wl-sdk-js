/**
 * Gets information about purchase and it's items.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Item_PurchaseItemListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_purchase";

  /**
   * @typedef {{}} Wl_Purchase_Item_PurchaseItemListModel_a_additional_info
   * @property {string} html_business_address Business address.
   * @property {string} html_business_mail Business mail.
   * @property {string} html_business_phone Business phone.
   * @property {string} html_business_title Business name.
   * @property {string} html_receipt Text which will be in footer of receipt check.
   * @property {string} html_user_address Customer address.
   * @property {string} html_user_mail Customer mail.
   * @property {string} html_user_name Customer name.
   * @property {string} html_user_phone Customer phone.
   */

  /**
   * Additional information. Uses only on desktop version.
   *
   * @get result
   * @type {Wl_Purchase_Item_PurchaseItemListModel_a_additional_info}
   */
  this.a_additional_info = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Item_PurchaseItemListModel_a_logo_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Purchase_Item_PurchaseItemListModel_a_logo
   * @property {Wl_Purchase_Item_PurchaseItemListModel_a_logo_a_image} a_image Image details, present only when the business has a logo image (when `is_empty` is `false`):
   * @property {number} i_height Thumbnail height, or the empty-image placeholder height when the business has no logo.
   * @property {number} i_width Thumbnail width, or the empty-image placeholder width when the business has no logo.
   * @property {boolean} is_empty Whether the business has no logo image.
   * @property {string} k_business Business key.
   * @property {string} s_title Business title.
   * @property {string} s_url Logo image URL, or the empty-image placeholder URL when the business has no logo.
   */

  /**
   * Logo details array. Business logo:
   *
   * @get result
   * @type {Wl_Purchase_Item_PurchaseItemListModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Item_PurchaseItemListModel_a_purchase_item
   * @property {string} html_category Item category. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_description Item description. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_price Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_title Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_total Item total price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_count Item count. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_logo_height Item picture height. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_logo_width Item picture width. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} id_purchase_item Purchase item type. See {@link RsPurchaseItemSid}. Not returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {boolean} is_logo_empty Whether item picture exists. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} m_price Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`
   * @property {string} s_logo_url Item picture URL. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} text_title Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`
   */

  /**
   * List of purchase items:
   *
   * @get result
   * @type {Wl_Purchase_Item_PurchaseItemListModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * Purchase date in business timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Define a different type result of API. For economy of traffic `false` it means in response will less data.
   * Otherwise, more detailed data will be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_web = false;

  /**
   * Business ID.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Purchase currency.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Purchase location.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Purchase ID.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase = "";

  /**
   * Discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Subtotal amount.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Surcharge amount.
   *
   * `null` - if purchase is made without surcharge and not is web.
   *
   * @get result
   * @type {?string}
   */
  this.m_surcharge = null;

  /**
   * Tax amount.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Tips amount.
   *
   * @get result
   * @type {string}
   */
  this.m_tip = undefined;

  /**
   * Total amount.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Human-readable description of payment method.
   *
   * @get result
   * @type {string}
   */
  this.text_pay_method = undefined;

  /**
   * Purchase owner.
   *
   * @get result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Item_PurchaseItemListModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Item_PurchaseItemListModel.prototype.config=function()
{
  return {"a_field":{"a_additional_info":{"get":{"result":true}},"a_logo":{"get":{"result":true}},"a_purchase_item":{"get":{"result":true}},"dt_date_local":{"get":{"result":true}},"is_web":{"get":{"get":true}},"k_business":{"get":{"result":true}},"k_currency":{"get":{"result":true}},"k_location":{"get":{"result":true}},"k_purchase":{"get":{"get":true}},"m_discount":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_surcharge":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_tip":{"get":{"result":true}},"m_total":{"get":{"result":true}},"text_pay_method":{"get":{"result":true}},"uid":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Purchase_Item_PurchaseItemListModel.instanceGet
 * @param {string} k_purchase Purchase ID.
 * @returns {Wl_Purchase_Item_PurchaseItemListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about purchase and it's items.
 *
 * Validates the purchase and checks that the current user has access to it: either being the
 * purchase owner, or a staff member with the `rs.purchase.item.list` privilege, or location
 * access when the purchase belongs to a location. Depending on
 * {@link Wl_Purchase_Item_PurchaseItemListModel.is_web}, returns either a compact list of purchase items with
 * plain amounts, or a fully formatted set of items and totals (discount, subtotal, surcharge,
 * tax, tip, total) with `HTML`-formatted money values and additional business and client
 * contact information for receipts.
 *
 * @function
 * @name Wl_Purchase_Item_PurchaseItemListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
