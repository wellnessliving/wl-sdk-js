/**
 * Retrieves information about purchase.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_PurchaseList_PurchaseListElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_purchase_item,k_login_promotion,k_code,k_login_product,k_enrollment_book,k_session_pass";

  /**
   * @typedef {{}} Wl_Profile_PurchaseList_PurchaseListElementModel_a_component
   * @property {*} k_enrollment_book Primary key in {@link \RsEnrollmentBookSql} table.
   * @property {*} k_login_product Primary key in {@link \RsLoginProductSql} table.
   * @property {*} k_login_promotion Primary key in {@link \RsLoginPromotionSql} table.
   * @property {*} k_session_pass Primary key in {@link \Wl\Session\Pass\Sql} table.
   */

  /**
   * List of components (not empty if this purchase element is a package). Every element has keys:
   * <dl>
   *   <dt>
   *     string [<var>k_enrollment_book</var>]
   *   </dt>
   *   <dd>
   *     Primary key in {@link \RsEnrollmentBookSql} table.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_product</var>]
   *   </dt>
   *   <dd>
   *     Primary key in {@link \RsLoginProductSql} table.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *     Primary key in {@link \RsLoginPromotionSql} table.
   *   </dd>
   *   <dt>
   *     string [<var>k_session_pass</var>]
   *   </dt>
   *   <dd>
   *     Primary key in {@link \Wl\Session\Pass\Sql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_PurchaseList_PurchaseListElementModel_a_component[]}
   */
  this.a_component = undefined;

  /**
   * @typedef {{}} Wl_Profile_PurchaseList_PurchaseListElementModel_a_logo
   * @property {number} i_height Height.
   * @property {number} i_width Width.
   * @property {boolean} is_empty `true` - purchase item does not have image; `false` - has image.
   */

  /**
   * Image data:
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     Height.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     Width.
   *   </dd>
   *   <dt>
   *     bool <var>is_empty</var>
   *   </dt>
   *   <dd>
   *     `true` - purchase item does not have image; `false` - has image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_PurchaseList_PurchaseListElementModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Profile_PurchaseList_PurchaseListElementModel_a_restrict
   * @property {number} i_limit How many sessions may be booked during period.
   * @property {number} i_remain How many sessions is not used up yet.
   * @property {string} text_date Name of period type.
   */

  /**
   * For promotions - list of booking restrictions. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     How many sessions may be booked during period.
   *   </dd>
   *   <dt>
   *     int <var>i_remain</var>
   *   </dt>
   *   <dd>
   *     How many sessions is not used up yet.
   *   </dd>
   *   <dt>
   *     string <var>text_date</var>
   *   </dt>
   *   <dd>
   *     Name of period type.
   *   </dd>
   * </dl>Empty array for another purchase items.
   *
   * @get result
   * @type {Wl_Profile_PurchaseList_PurchaseListElementModel_a_restrict[]}
   */
  this.a_restrict = undefined;

  /**
   * @typedef {{}} Wl_Profile_PurchaseList_PurchaseListElementModel_a_tax
   * @property {string} f_tax_discount Amount of tax.
   * @property {string} s_tax Name of tax.
   */

  /**
   * List of taxes paid for purchase item. Every element has next keys:
   * <dl>
   *   <dt>
   *     string <var>f_tax_discount</var>
   *   </dt>
   *   <dd>
   *     Amount of tax.
   *   </dd>
   *   <dt>
   *     string <var>s_tax</var>
   *   </dt>
   *   <dd>
   *     Name of tax.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_PurchaseList_PurchaseListElementModel_a_tax[]}
   */
  this.a_tax = undefined;

  /**
   * Not `false` only for promotions. `true` - user can control renewing of promotion; `false` - can not control.
   *
   * @get result
   * @type {boolean}
   */
  this.can_renew = undefined;

  /**
   * Not empty only for promotions and events. Expiration date of promotion or end date of event.
   *
   * @get result
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * Local date of purchase in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dl_purchase = undefined;

  /**
   * Not empty only for gift cards. Local date in MySQL format when mail about purchasing was sent (or will be sent) to user.
   *
   * @get result
   * @type {string}
   */
  this.dl_send = undefined;

  /**
   * Start date. Not empty only for passes/memberships and events.
   *
   * @get result
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Not empty only for promotions. Date of promotion hold end. May be empty if hold is internal.
   *
   * @get result
   * @type {string}
   */
  this.dt_hold_end = undefined;

  /**
   * Not empty only for promotions. Date of promotion hold start.
   *
   * @get result
   * @type {string}
   */
  this.dt_hold_start = undefined;

  /**
   * UTC date/time of purchase in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_purchase = undefined;

  /**
   * Not empty only for gift cards. Date in MySQL format when gift card was redeemed.
   *
   * @get result
   * @type {string}
   */
  this.dt_redeem = undefined;

  /**
   * Size in percents of discount for client type.
   *
   * @get result
   * @type {number}
   */
  this.f_discount_login_type_percent = undefined;

  /**
   * Formatted description.
   *
   * @get result
   * @type {string}
   */
  this.html_description = undefined;

  /**
   * Not `0` only for promotions and enrollments. How many sessions were booked by this promotion or enrollment.
   *
   * @get result
   * @type {number}
   */
  this.i_book = undefined;

  /**
   * Not `0` only for promotions. How many minutes of sessions were booked by this promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_book_duration = undefined;

  /**
   * How many units of purchase item were bought.
   *
   * @get result
   * @type {number}
   */
  this.i_buy = undefined;

  /**
   * Size in percents of discount via prize.
   *
   * @get result
   * @type {number}
   */
  this.i_discount_count = undefined;

  /**
   * This field is only added for promotions. Duration of promotion. Measurement unit is <var>id_duration</var>.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Not `0` only for not sequential promotions. How many books by this promotion is left.
   *
   * @get result
   * @type {number}
   */
  this.i_left = undefined;

  /**
   * Not `0` only for promotions. How many book may be made by promotion in total.
   *
   * @get result
   * @type {number}
   */
  this.i_limit = undefined;

  /**
   * Not `0` only for promotions with program type "membership". Duration of regular payments interval.
   *
   * @get result
   * @type {number}
   */
  this.i_payment_period = undefined;

  /**
   * Not `0` only for promotions. How many books by this promotion is left.
   *
   * @get result
   * @type {number}
   */
  this.i_remain = undefined;

  /**
   * Not `0` only for promotions. How many minutes of sessions can be booked by promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_remain_duration = undefined;

  /**
   * Not `0` only for promotions. How many times promotion was updated.
   *
   * @get result
   * @type {number}
   */
  this.i_renew = undefined;

  /**
   * Not `0` only for promotions. How many visits were made by promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_use = undefined;

  /**
   * Not `0` only for promotions. Number of minutes the user has already used with this purchase of this promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_use_duration = undefined;

  /**
   * Activation mode. One on {@link \RsActivationSid} constants. This field is only added for promotions.
   *
   * @get result
   * @type {number}
   */
  this.id_activation = undefined;

  /**
   * Type of discount via prizes. One on {@link \RsCommissionTypeSid} constants. Empty if this discount was not applied.
   *
   * @get result
   * @type {number}
   */
  this.id_discount_commission_type = undefined;

  /**
   * Not `0` only for promotions with program type "membership". Measurement unit for key <var>i_payment_period</var>. One on {@link \RsDurationTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_duration = undefined;

  /**
   * Not `0` only for promotions. Measurement unit for key <var>i_payment_period</var>. ID of promotion program type. One on {@link \RsProgramTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_program_type = undefined;

  /**
   * Measurement unit for key <var>i_payment_period</var>. ID of purchase item type. One on {@link \RsPurchaseItemSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * ID of sale category in store. One of constants {@link \RsSaleSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_sale = undefined;

  /**
   * `true` if purchase item is active; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * `true` if purchase item is a component of another purchase item (package); `false` if purchase item is not a component.
   *
   * @get result
   * @type {boolean}
   */
  this.is_component = undefined;

  /**
   * Not `false` only for promotions. `true` if after expiration promotion should be converted to another promotion; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_convert = undefined;

  /**
   * Not `false` only for promotions. `true` if promotion is expired; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_expire = undefined;

  /**
   * Not `false` only for promotions. `true` if promotion is on hold; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_hold = undefined;

  /**
   * `true` if usage purchase item is restricted; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_limit = undefined;

  /**
   * `true` - discount was applied for member type; `false` - discount was applied for pass holder type; `null` - discount was applied for prospect type or if this discount was not
   * applied.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_login_type_member = null;

  /**
   * Not `false` only for gift cards. `true` if email notification about gift should be sent; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_mail = undefined;

  /**
   * Not `false` only for gift cards. `true` if email notification about gift was sent; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_past = undefined;

  /**
   * Not `false` only for gift cards. `true` - gift card is redeemed; `false` - gift cart is not redeemed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_redeem = undefined;

  /**
   * Not `false` only for promotions. `true` if promotion will be renewed after expiration; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_renew = undefined;

  /**
   * Not `false` only for promotions. `true` if promotion has been transferred; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_transfer = undefined;

  /**
   * ID of redemption code which is used to obtain some goods.
   *
   * Should be specified only to obtain via redemption code
   * (not for ordinary purchases or for purchased promotions without purchases).
   *
   * Primary key in {@link \RsCodeSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_code = "0";

  /**
   * Redemption code via purchase item was purchased. Primary key in {@link \RsCodeSql} table. Empty if purchase item was purchased not via redemption code.
   *
   * @get result
   * @type {string}
   */
  this.k_code_result = undefined;

  /**
   * Purchase item currency. Primary key in {@link \RsCurrencySql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * ID of entirely booked event.
   *
   * Must be specified if purchase item is a component of a package and it is whole event book.
   *
   * @get get
   * @type {string}
   */
  this.k_enrollment_book = "0";

  /**
   * The key of the item. Can correspond to one of many values depending on {@link \Wl\Profile\PurchaseList\PurchaseListElementApi::$id_sale}.
   *
   * @get result
   * @type {string}
   */
  this.k_id = "0";

  /**
   * ID of purchased product.
   *
   * Must be specified if purchase item is a component of a package.
   *
   * @get get
   * @type {string}
   */
  this.k_login_product = "0";

  /**
   * ID of purchased promotion.
   *
   * Must be specified only for purchases promotions without purchases
   * (not for ordinary purchases or to obtain via redemption codes).
   *
   * Primary key in {@link \RsLoginPromotionSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * Purchased promotion. Primary key in {@link \RsLoginPromotionSql} table. Not empty only for promotions and components of package.
   *
   * @get result
   * @type {string}
   */
  this.k_login_promotion_result = undefined;

  /**
   * ID of purchase item.
   *
   * Must be specified only for ordinary purchases
   * (not for obtain via redemption codes or for purchased promotions without purchases).
   * And only for items which are not components of package.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase_item = "0";

  /**
   * Purchase ID. Primary key in {@link \RsPurchaseSql} table. Empty for purchases obtained via redemption code and results of old import.
   *
   * @get result
   * @type {string}
   */
  this.k_purchase_result = undefined;

  /**
   * ID of makeup to attend event.
   *
   * Must be specified if purchase item is a component of a package and it is whole event book.
   * And only for items which are not components of package.
   *
   * @get get
   * @type {string}
   */
  this.k_session_pass = "0";

  /**
   * Final cost of this purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_cost_item = undefined;

  /**
   * Final cost of purchase which includes this purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_cost_total = undefined;

  /**
   * Amount of discount via prize. Empty if this discount was not applied.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_amount = undefined;

  /**
   * Amount of discount for client type. Empty if this discount was not applied.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_login_type_amount = undefined;

  /**
   * Amount of manual discount. Empty if this discount was not applied.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_manual = undefined;

  /**
   * Not empty only for promotions with program type "membership". Amount of regular payment.
   *
   * @get result
   * @type {string}
   */
  this.m_period_price = undefined;

  /**
   * Source price of item.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Refunded amount. `0` if were no refunds.
   *
   * @get result
   * @type {string}
   */
  this.m_refund = undefined;

  /**
   * Redemption code. Not empty only if purchase is obtained via redemption code.
   *
   * @get result
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * Not empty only for gift cards. Code to redeem gift card.
   *
   * Can be auto-generated or custom (entered manually by the staff member during purchase).
   * Max length - 20 characters. Can include numbers and letters.
   *
   * @get result
   * @type {string}
   */
  this.s_gift_code = undefined;

  /**
   * Not empty only for gift cards. Name of gift recipient.
   *
   * @get result
   * @type {string}
   */
  this.s_gift_recipient = undefined;

  /**
   * Name of staff member who disabled usage of purchase item. Empty if usage of purchase item is enabled.
   *
   * @get result
   * @type {string}
   */
  this.s_limit_actor = undefined;

  /**
   * Not empty only for gift cards. `true` if mail about purchase was sent (or will be sent); `false` otherwise.
   *
   * @get result
   * @type {string}
   */
  this.s_mail = undefined;

  /**
   * Not empty only for gift cards. Message to gift receiver. Empty if email notification should not be sent.
   *
   * @get result
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * Name of user who has paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.s_payer = undefined;

  /**
   * Not empty only for promotions which must be converted to another promotion after expiration. Title of promotion to which convent.
   *
   * @get result
   * @type {string}
   */
  this.s_promotion_convert = undefined;

  /**
   * Number of receipt.
   *
   * @get result
   * @type {string}
   */
  this.s_purchase = undefined;

  /**
   * Name of user who has paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.s_recipient = undefined;

  /**
   * Not empty only for gift cards. Gift sender.
   *
   * @get result
   * @type {string}
   */
  this.s_sender = undefined;

  /**
   * Title of purchase item.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * Unique string ID of purchase item kind.
   *
   * @get result
   * @type {string}
   */
  this.sid_value = undefined;

  /**
   * ID of user who is owner of this purchase. Primary key in {@link \PassportLoginSql} table.
   *
   * @get result
   * @type {string}
   */
  this.uid_payer = undefined;

  /**
   * ID of user who is owner of this purchase. Primary key in {@link \PassportLoginSql} table.
   *
   * @get result
   * @type {string}
   */
  this.uid_recipient = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_PurchaseList_PurchaseListElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_PurchaseList_PurchaseListElementModel.prototype.config=function()
{
  return {"a_field": {"a_component": {"get": {"result": true}},"a_logo": {"get": {"result": true}},"a_restrict": {"get": {"result": true}},"a_tax": {"get": {"result": true}},"can_renew": {"get": {"result": true}},"dl_end": {"get": {"result": true}},"dl_purchase": {"get": {"result": true}},"dl_send": {"get": {"result": true}},"dl_start": {"get": {"result": true}},"dt_hold_end": {"get": {"result": true}},"dt_hold_start": {"get": {"result": true}},"dt_purchase": {"get": {"result": true}},"dt_redeem": {"get": {"result": true}},"f_discount_login_type_percent": {"get": {"result": true}},"html_description": {"get": {"result": true}},"i_book": {"get": {"result": true}},"i_book_duration": {"get": {"result": true}},"i_buy": {"get": {"result": true}},"i_discount_count": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_left": {"get": {"result": true}},"i_limit": {"get": {"result": true}},"i_payment_period": {"get": {"result": true}},"i_remain": {"get": {"result": true}},"i_remain_duration": {"get": {"result": true}},"i_renew": {"get": {"result": true}},"i_use": {"get": {"result": true}},"i_use_duration": {"get": {"result": true}},"id_activation": {"get": {"result": true}},"id_discount_commission_type": {"get": {"result": true}},"id_duration": {"get": {"result": true}},"id_program_type": {"get": {"result": true}},"id_purchase_item": {"get": {"result": true}},"id_sale": {"get": {"result": true}},"is_active": {"get": {"result": true}},"is_component": {"get": {"result": true}},"is_convert": {"get": {"result": true}},"is_expire": {"get": {"result": true}},"is_hold": {"get": {"result": true}},"is_limit": {"get": {"result": true}},"is_login_type_member": {"get": {"result": true}},"is_mail": {"get": {"result": true}},"is_past": {"get": {"result": true}},"is_redeem": {"get": {"result": true}},"is_renew": {"get": {"result": true}},"is_transfer": {"get": {"result": true}},"k_code": {"get": {"get": true}},"k_code_result": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"k_enrollment_book": {"get": {"get": true}},"k_id": {"get": {"result": true}},"k_login_product": {"get": {"get": true}},"k_login_promotion": {"get": {"get": true}},"k_login_promotion_result": {"get": {"result": true}},"k_purchase_item": {"get": {"get": true}},"k_purchase_result": {"get": {"result": true}},"k_session_pass": {"get": {"get": true}},"m_cost_item": {"get": {"result": true}},"m_cost_total": {"get": {"result": true}},"m_discount_amount": {"get": {"result": true}},"m_discount_login_type_amount": {"get": {"result": true}},"m_discount_manual": {"get": {"result": true}},"m_period_price": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_refund": {"get": {"result": true}},"s_code": {"get": {"result": true}},"s_gift_code": {"get": {"result": true}},"s_gift_recipient": {"get": {"result": true}},"s_limit_actor": {"get": {"result": true}},"s_mail": {"get": {"result": true}},"s_message": {"get": {"result": true}},"s_payer": {"get": {"result": true}},"s_promotion_convert": {"get": {"result": true}},"s_purchase": {"get": {"result": true}},"s_recipient": {"get": {"result": true}},"s_sender": {"get": {"result": true}},"s_title": {"get": {"result": true}},"sid_value": {"get": {"result": true}},"uid_payer": {"get": {"result": true}},"uid_recipient": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_PurchaseList_PurchaseListElementModel.instanceGet
 * @param {string} k_purchase_item ID of purchase item. Must be specified only for ordinary purchases (not for obtain via redemption codes or for purchased promotions without purchases). And only for items which are not components of package.
 * @param {string} k_login_promotion ID of purchased promotion. Must be specified only for purchases promotions without purchases (not for ordinary purchases or to obtain via redemption codes). Primary key in {@link \RsLoginPromotionSql}.
 * @param {string} k_code ID of redemption code which is used to obtain some goods. Should be specified only to obtain via redemption code (not for ordinary purchases or for purchased promotions without purchases). Primary key in {@link \RsCodeSql}.
 * @param {string} k_login_product ID of purchased product. Must be specified if purchase item is a component of a package.
 * @param {string} k_enrollment_book ID of entirely booked event. Must be specified if purchase item is a component of a package and it is whole event book.
 * @param {string} k_session_pass ID of makeup to attend event. Must be specified if purchase item is a component of a package and it is whole event book. And only for items which are not components of package.
 * @returns {Wl_Profile_PurchaseList_PurchaseListElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */