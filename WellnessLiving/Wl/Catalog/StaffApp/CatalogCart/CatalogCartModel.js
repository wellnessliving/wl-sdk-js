/**
 * A model to calculate price data for a sale item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid_current";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_tax_custom
   * @property {string} f_tax The tax amount.
   * @property {string} k_tax The tax keys.
   */
  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config
   * @property {*} f_price Custom price.
   * @property {*} dt_prorate The prorate date. Should be passed when <tt>is_prorate</tt>=<tt>true</tt>.
   * @property {*} dt_start The date when the promotion starts.
   * @property {*} is_prorate Determines whether to prorate the first payment.
   * @property {*} is_prorate_fix Determines if the client should pay for the first period now or not.
   * @property {*} is_prorate_only Whether selected option 'pay prorate amount only' to include to price prorate amount only.
   * @property {*} m_custom Custom price for gift card.
   * @property {*} dt_send_local Date when mail with gift card must be sent.
   * @property {boolean} is_mail <tt>true</tt> if gift card will be sent on email, <tt>false</tt> if gift card will be printed.
   * @property {*} s_mail Recipient's email.
   * @property {*} s_message Message.
   * @property {string} s_recipient Recipient's name.
   * @property {string} s_sender Sender's name.
   * @property {string} m_prorate_custom The amount of money for prorate period. Should be passed only in a case of manual entry.
   * @property {string} k_coupon The coupon key.
   * @property {string} k_coupon_amount The coupon amount key.
   */
  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config[]} a_config List of purchase item additional options:
   * <dl>
   *   <dt>string [<tt>f_price</tt>]</dt>
   *   <dd>Custom price.</dd>
   *   <dt>string [<tt>dt_prorate</tt>]</dt>
   *   <dd>The prorate date. Should be passed when <tt>is_prorate</tt>=<tt>true</tt>.</dd>
   *   <dt>string [<tt>dt_start</tt>]</dt>
   *   <dd>The date when the promotion starts.</dd>
   *   <dt>bool [<tt>is_prorate</tt>]</dt>
   *   <dd>Determines whether to prorate the first payment.</dd>
   *   <dt>bool [<tt>is_prorate_fix</tt>]</dt>
   *   <dd>Determines if the client should pay for the first period now or not.</dd>
   *   <dt>bool [<tt>is_prorate_only</tt>]</dt>
   *   <dd>Whether selected option 'pay prorate amount only' to include to price prorate amount only.</dd>
   *   <dt>string [<tt>m_custom</tt>]</dt>
   *   <dd>Custom price for gift card.</dd>
   *   <dt>string [<tt>dt_send_local</tt>]</dt>
   *   <dd>Date when mail with gift card must be sent.</dd>
   *   <dt>bool <tt>is_mail</tt></dt>
   *   <dd><tt>true</tt> if gift card will be sent on email, <tt>false</tt> if gift card will be printed.</dd>
   *   <dt>string [<tt>s_mail</tt>]</dt>
   *   <dd>Recipient's email.</dd>
   *   <dt>string [<tt>s_message</tt>]</dt>
   *   <dd>Message.</dd>
   *   <dt>string <tt>s_recipient</tt></dt>
   *   <dd>Recipient's name.</dd>
   *   <dt>string <tt>s_sender</tt></dt>
   *   <dd>Sender's name.</dd>
   *   <dt>string <tt>m_prorate_custom</tt></dt>
   *   <dd>The amount of money for prorate period. Should be passed only in a case of manual entry.</dd>
   *   <dt>string <tt>k_coupon</tt></dt>
   *   <dd>The coupon key.</dd>
   *   <dt>string <tt>k_coupon_amount</tt></dt>
   *   <dd>The coupon amount key.</dd>
   * </dl>
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_config_a_tax_custom[]} a_tax_custom Information about taxes. If not passed means no custom taxes have been applied to the sale item.
   * If a record is present, it means that the tax is custom. Structured as follows:
   * <dl>
   *   <dt>string <tt>f_tax</tt></dt>
   *   <dd>The tax amount.</dd>
   *   <dt>string <tt>k_tax</tt></dt>
   *   <dd>The tax keys.</dd>
   * </dl>
   * @property {*} f_discount_percent The discount percentage, applied to the current item.
   * @property {number} i_quantity The quantity of sale items.
   * @property {number} id_sale The sale item type. One of {@link RsSaleSid} constants.
   * @property {string} k_id The sale item key.
   * @property {string} k_shop_product_option The store product option key. <tt>null</tt> if the sale item has no options.
   * @property {*} m_discount_fix The fixed price discount, applied to the current item.
   * @property {*} m_price_custom The custom price of sale item. If not passed means no custom price has been applied to the sale item.
   */

  /**
   * A list of cart items with the next structure:
   * <dl>
   *   <dt>array [<var>a_config</var>]</dt>
   *   <dd>
   *     List of purchase item additional options:
   *     <dl>
   *       <dt>string [<var>f_price</var>]</dt>
   *       <dd>Custom price.</dd>
   *       <dt>string [<var>dt_prorate</var>]</dt>
   *       <dd>The prorate date. Should be passed when <var>is_prorate</var>=<tt>true</tt>.</dd>
   *       <dt>string [<var>dt_start</var>]</dt>
   *       <dd>The date when the promotion starts.</dd>
   *       <dt>bool [<var>is_prorate</var>]</dt>
   *       <dd>Determines whether to prorate the first payment.</dd>
   *       <dt>bool [<var>is_prorate_fix</var>]</dt>
   *       <dd>Determines if the client should pay for the first period now or not.</dd>
   *       <dt>bool [<var>is_prorate_only</var>]</dt>
   *       <dd>Whether selected option 'pay prorate amount only' to include to price prorate amount only.</dd>
   *       <dt>string [<var>m_custom</var>]</dt>
   *       <dd>Custom price for gift card.</dd>
   *       <dt>string [<var>dt_send_local</var>]</dt>
   *       <dd>Date when mail with gift card must be sent.</dd>
   *       <dt>bool <var>is_mail</var></dt>
   *       <dd><tt>true</tt> if gift card will be sent on email, <tt>false</tt> if gift card will be printed.</dd>
   *       <dt>string [<var>s_mail</var>]</dt>
   *       <dd>Recipient's email.</dd>
   *       <dt>string [<var>s_message</var>]</dt>
   *       <dd>Message.</dd>
   *       <dt>string <var>s_recipient</var></dt>
   *       <dd>Recipient's name.</dd>
   *       <dt>string <var>s_sender</var></dt>
   *       <dd>Sender's name.</dd>
   *       <dt>string <var>m_prorate_custom</var></dt>
   *       <dd>The amount of money for prorate period. Should be passed only in a case of manual entry.</dd>
   *       <dt>string <var>k_coupon</var></dt>
   *       <dd>The coupon key.</dd>
   *       <dt>string <var>k_coupon_amount</var></dt>
   *       <dd>The coupon amount key.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array [<var>a_tax_custom</var>]</dt>
   *   <dd>
   *     Information about taxes. If not passed means no custom taxes have been applied to the sale item.
   *     If a record is present, it means that the tax is custom. Structured as follows:
   *     <dl>
   *       <dt>string <var>f_tax</var></dt>
   *       <dd>The tax amount.</dd>
   *       <dt>string <var>k_tax</var></dt>
   *       <dd>The tax keys.</dd>
   *     </dl>
   *   </dd>
   *   <dt>int [<var>f_discount_percent</var>]</dt>
   *   <dd>The discount percentage, applied to the current item.</dd>
   *   <dt>int <var>i_quantity</var></dt>
   *   <dd>The quantity of sale items.</dd>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>The sale item type. One of {@link RsSaleSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The sale item key.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>
   *     The store product option key. <tt>null</tt> if the sale item has no options.
   *   </dd>
   *   <dt>string [<var>m_discount_fix</var>]</dt>
   *   <dd>The fixed price discount, applied to the current item.</dd>
   *   <dt>string [<var>m_price_custom</var>]</dt>
   *   <dd>The custom price of sale item. If not passed means no custom price has been applied to the sale item.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item[]}
   */
  this.a_item = [];

  /**
   * The discount as a percentage.
   *
   * @get get
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * `true` to enable checking every item at the cart, `false` to disable.
   *
   * @get get
   * @type {boolean}
   */
  this.is_check_cart_item = false;

  /**
   * Determines whether the business applied a commission at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_commission = false;

  /**
   * Determines whether to display custom receipt notes at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_receipt_note = false;

  /**
   * The business key.
   *
   * <b>This field isn't used directly but described for correct auto generation JavaScript.</b>
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The business location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * The discount amount of money.
   *
   * @get get
   * @type {string}
   */
  this.m_discount_flat = "";

  /**
   * Amount of total discount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_total = undefined;

  /**
   * The subtotal amount.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The amount of tips.
   *
   * @get get
   * @type {string}
   */
  this.m_tip = "";

  /**
   * The amount of appointment tips.
   *
   * @get result
   * @type {string}
   */
  this.m_tip_purchase = undefined;

  /**
   * The cart's total amount.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * The discount code.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.text_discount_code = null;

  /**
   * The discount code's error message.
   *
   * @get result
   * @type {string}
   */
  this.text_error_code = undefined;

  /**
   * The custom receipt note's text.
   *
   * @get result
   * @type {string}
   */
  this.text_receipt_note = "";

  /**
   * The key of the current user.
   *
   * @get get
   * @type {string}
   */
  this.uid_current = undefined;

  /**
   * The key of the user who performed the purchase.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.prototype.config=function()
{
  return {"a_field": {"a_item": {"get": {"get": true}},"f_discount_percent": {"get": {"get": true}},"is_check_cart_item": {"get": {"get": true}},"is_commission": {"get": {"result": true}},"is_receipt_note": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_discount_flat": {"get": {"get": true}},"m_discount_total": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip": {"get": {"get": true}},"m_tip_purchase": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"text_error_code": {"get": {"result": true}},"text_receipt_note": {"get": {"result": true}},"uid_current": {"get": {"get": true}},"uid_customer": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.instanceGet
 * @param {string} k_business The business key. <b>This field isn't used directly but described for correct auto generation JavaScript.</b>
 * @param {string} uid_current The key of the current user.
 * @returns {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */