/**
 * Data of certain purchase.
 *
 * This model is generated automatically based on API.
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
   * Additional information. Uses only on desktop version.
   *
   * @get result
   * @type {{}}
   */
  this.a_additional_info = undefined;

  /**
   * Logo details array.
   *
   * @get result
   * @type {{}}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Purchase_Item_PurchaseItemListModel_a_purchase_item
   * @property {string} m_price Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`
   * @property {string} text_title Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`
   * @property {string} html_category Item category. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_description Item description. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_price Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_title Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} html_total Item total price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_count Item count. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_logo_height Item picture height. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} i_logo_width Item picture width. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {number} id_purchase_item . This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {boolean} is_logo_empty Whether item picture exists. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   * @property {string} s_logo_url Item picture URL. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`
   */

  /**
   * List of purchase items:
   * <dl>
   *   <dt>string <var>m_price</var></dt><dd>Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`</dd>
   *   <dt>string <var>text_title</var></dt><dd>Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `true`</dd>
   *   <dt>string <var>html_category</var></dt><dd>Item category. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>string <var>html_description</var></dt><dd>Item description. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>string <var>html_price</var></dt><dd>Item price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>string <var>html_title</var></dt><dd>Item title. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>string <var>html_total</var></dt><dd>Item total price. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>int <var>i_count</var></dt><dd>Item count. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>int <var>i_logo_height</var></dt><dd>Item picture height. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>int <var>i_logo_width</var></dt><dd>Item picture width. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>int <var>id_purchase_item</var></dt><dd>. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>bool <var>is_logo_empty</var></dt><dd>Whether item picture exists. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   *   <dt>string <var>s_logo_url</var></dt><dd>Item picture URL. This key doesn't returned when {@link Wl_Purchase_Item_PurchaseItemListModel.is_web} is `false`</dd>
   * </dl>
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
  this.k_purchase = "0";

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
   * <tt>null</tt> - if purchase is made without surcharge and not is web.
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
  return {"a_field": {"a_additional_info": {"get": {"result": true}},"a_logo": {"get": {"result": true}},"a_purchase_item": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"is_web": {"get": {"get": true}},"k_business": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"k_location": {"get": {"result": true}},"k_purchase": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_pay_method": {"get": {"result": true}},"uid": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Purchase_Item_PurchaseItemListModel.instanceGet
 * @param {string} k_purchase Purchase ID.
 * @returns {Wl_Purchase_Item_PurchaseItemListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */