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
   * @property {string} m_price Item price.
   * @property {string} text_title Item title.
   */

  /**
   * List of purchase items:
   * <dl>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Item price.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Item title.
   *   </dd>
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
   * Define a different type result of API. For economy of traffic <tt>false</tt> it mean in response will less data.
   * Otherwise more detailed data.
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
   * Purchase currency. Primary key in {@link \RsCurrencySql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Purchase location. Primary key in {@link \RsLocationSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Purchase ID.
   * Primary key in {@link \RsPurchaseSql} table.
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
   * Title of the discount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_title = undefined;

  /**
   * Subtotal amount.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Subtotal amount minus amount discount.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal_apply_discount = undefined;

  /**
   * Subtotal amount minus amount discount and plus amount tax.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal_include_tax = undefined;

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
   * Total amount with surcharge.
   *
   * <tt>null</tt> - if purchase is made without surcharge and not is web.
   *
   * @get result
   * @type {?string}
   */
  this.m_total_include_surcharge = null;

  /**
   * Human readable description of payment method.
   *
   * @get result
   * @type {string}
   */
  this.text_pay_method = undefined;

  /**
   * Purchase owner. Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_additional_info": {"get": {"result": true}},"a_logo": {"get": {"result": true}},"a_purchase_item": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"is_web": {"get": {"get": true}},"k_business": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"k_location": {"get": {"result": true}},"k_purchase": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_discount_title": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_subtotal_apply_discount": {"get": {"result": true}},"m_subtotal_include_tax": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip": {"get": {"result": true}},"m_total": {"get": {"result": true}},"m_total_include_surcharge": {"get": {"result": true}},"text_pay_method": {"get": {"result": true}},"uid": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Purchase_Item_PurchaseItemListModel.instanceGet
 * @param {string} k_purchase Purchase ID. Primary key in {@link \RsPurchaseSql} table.
 * @returns {Wl_Purchase_Item_PurchaseItemListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */