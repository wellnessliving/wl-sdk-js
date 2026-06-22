/**
 * API point for read, create and edit existing discount code.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Discount_Code_Edit_DiscountCodeEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Discount_Code_Edit_DiscountCodeEditModel_a_component
   * @property {number} id_purchase_item Type ID of the purchase item. One of {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {string} k_id Primary key of the component.
   * <p>Special Notes:</p>
   * <ul>
   *   <li>Zero means that all elements of this type are available.</li>
   *   <li>For `id_purchase_item`={@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD} we store {@link \RsClassSql}.`k_class` in the `k_id` field.</li>
   * </ul>
   * @property {string} text_title Title of the component.
   */

  /**
   * List of components that are affected by this discount code.
   * Each element is an array containing:
   * <dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>Type ID of the purchase item. One of {@link Wl_Purchase_Item_ItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>
   *     Primary key of the component.
   *     <p>Special Notes:</p>
   *     <ul>
   *       <li>Zero means that all elements of this type are available.</li>
   *       <li>For `id_purchase_item`={@link Wl_Purchase_Item_ItemSid.CLASS_PERIOD} we store {@link \RsClassSql}.`k_class` in the `k_id` field.</li>
   *     </ul>
   *   </dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of the component.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Discount_Code_Edit_DiscountCodeEditModel_a_component[]}
   */
  this.a_component = [];

  /**
   * List of client types.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_login_type = [];

  /**
   * List of client groups.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_member_group = [];

  /**
   * Expiration date. <tt>null</tt> if discount code is never expires.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Activation date.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.dl_start = "";

  /**
   * Value of the percentage or fixed discount.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.f_value = "0.00";

  /**
   * Count of calendar periods from <var>id_duration</var> before expiration.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Maximum count of usage. Zero means unlimited usage.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_limit = 0;

  /**
   * Calendar periods for discount code duration from {@link ADurationSid}. Zero if discount code is never expires.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_duration = 0;

  /**
   * Type of the discount code duration from {@link RsDurationTypeSid}.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_duration_type = 0;

  /**
   * <tt>true</tt> means discount code is active.
   * <tt>false</tt> means discount code is inactive.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_active = false;

  /**
   * <tt>true</tt> means membership will auto-renew at discounted rate.
   * <tt>false</tt> means membership will auto-renew at full rate.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_auto_renew = false;

  /**
   * <tt>true</tt> means discount code can reduce price of the gift cards.
   * <tt>false</tt> means discount code cannot reduce price of the gift cards.
   *
   * If {@link Wl\Discount\Code\Edit\Controller::$is_purchase_all} is <tt>true</tt> this fields does not matter.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_coupon = false;

  /**
   * <tt>true</tt> means discount code can be applied to first membership payment only.
   * <tt>false</tt> means discount code can be applied to all membership payments.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_first_payment = false;

  /**
   * <tt>true</tt> means that only selected client types or groups can use this discount code.
   * <tt>false</tt> means that all client types and groups can use this discount code.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_login_type = false;

  /**
   * <tt>true</tt> if clients can use this discount code in online store,
   * <tt>false</tt> if discount code can be used only in point of sale.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_online = false;

  /**
   * <tt>true</tt> means discount value is percent from the purchase amount.
   * <tt>false</tt> means discount value is fixed sum from the purchase amount.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_percent = false;

  /**
   * <tt>true</tt> means discount can be applied to all products and purchase options.
   * <tt>false</tt> means discount can be applied only to the selected product and purchase options.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_purchase_all = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the discount code. Empty, if this is creation of a new code.
   *
   * @get get
   * @post get,result
   * @put get,result
   * @type {string}
   */
  this.k_discount_code = "";

  /**
   * List of product and purchase options that are effected with this discount code.
   * Each element has the next format: <var>id_purchase_item</var>:<var>k_id</var>, where <tt>id_purchase_item</tt> -
   * one of {@link Wl_Purchase_Item_ItemSid}, <tt>k_id</tt> is key of certain purchase item.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.s_component = "";

  /**
   * Discount code that can be used during purchase.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_code = "";

  /**
   * Description of the discount code.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Name of the discount code.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Discount_Code_Edit_DiscountCodeEditModel);

/**
 * @inheritDoc
 */
Wl_Discount_Code_Edit_DiscountCodeEditModel.prototype.config=function()
{
  return {"a_field": {"a_component": {"get": {"result": true}},"a_login_type": {"get": {"result": true},"post": {"post": true}},"a_member_group": {"get": {"result": true},"post": {"post": true}},"dl_end": {"get": {"result": true},"post": {"post": true}},"dl_start": {"get": {"result": true},"post": {"post": true}},"f_value": {"get": {"result": true},"post": {"post": true}},"i_duration": {"get": {"result": true},"post": {"post": true}},"i_limit": {"get": {"result": true},"post": {"post": true}},"id_duration": {"get": {"result": true},"post": {"post": true}},"id_duration_type": {"get": {"result": true},"post": {"post": true}},"is_active": {"get": {"result": true},"post": {"post": true}},"is_auto_renew": {"get": {"result": true},"post": {"post": true}},"is_coupon": {"get": {"result": true},"post": {"post": true}},"is_first_payment": {"get": {"result": true},"post": {"post": true}},"is_login_type": {"get": {"result": true},"post": {"post": true}},"is_online": {"get": {"result": true},"post": {"post": true}},"is_percent": {"get": {"result": true},"post": {"post": true}},"is_purchase_all": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_discount_code": {"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true,"result": true}},"s_component": {"get": {"result": true},"post": {"post": true}},"text_code": {"get": {"result": true},"post": {"post": true}},"text_description": {"get": {"result": true},"post": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true}}}};
};