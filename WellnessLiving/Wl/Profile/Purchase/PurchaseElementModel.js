/**
 * An endpoint that gets details of a specified purchase.
 *
 * This endpoint may require different IDs to be specified for different types of purchases.
 * The IDs required for a specific item will be the same IDs returned from the {@link Wl_Profile_PurchaseList_PurchaseListModel}
 * endpoint.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Profile_PurchaseList_PurchaseListElementModel} instead. It provides the same functionality
and more.
 */
function Wl_Profile_Purchase_PurchaseElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_purchase_item,k_login_promotion,k_code,k_login_product,k_enrollment_book,k_session_pass";

  /**
   * @typedef {{}} Wl_Profile_Purchase_PurchaseElementModel_a_component
   * @property {*} k_enrollment_book Primary key in {@link RsenrollmentBookSql} table.
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
   *   </dd>
   *   <dt>
   *     string [<var>k_login_product</var>]
   *   </dt>
   *   <dd>
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *   </dd>
   *   <dt>
   *     string [<var>k_session_pass</var>]
   *   </dt>
   *   <dd>
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Purchase_PurchaseElementModel_a_component[]}
   */
  this.a_component = undefined;

  /**
   * @typedef {{}} Wl_Profile_Purchase_PurchaseElementModel_a_logo
   * @property {number} i_height The height of the image.
   * @property {number} i_width The width of the image.
   * @property {boolean} is_empty If `true`, then the purchased item doesn't have image. If `false`, then the item has an image.
   * @property {string} s_url The URL for the image.
   */

  /**
   * An array containing information about the image of the purchased item. Every element has the following keys:
   * <dl>
   *   <dt>int <var>i_height</var></dt>
   *   <dd>The height of the image.</dd>
   *   <dt>int <var>i_width</var></dt>
   *   <dd>The width of the image.</dd>
   *   <dt>bool <var>is_empty</var></dt>
   *   <dd>If `true`, then the purchased item doesn't have image. If `false`, then the item has an image.</dd>
   *   <dt>string <var>s_url</var></dt>
   *   <dd>The URL for the image.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Purchase_PurchaseElementModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Profile_Purchase_PurchaseElementModel_a_restrict
   * @property {number} i_limit The number of sessions that may be booked during this period.
   * @property {number} i_remain The number of sessions that remain available.
   * @property {string} s_date The name of the period type.
   */

  /**
   * This field is used only for promotions. It contains restrictions that will
   * apply to bookings made with this promotion. Every element has the following keys:
   * <dl>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The number of sessions that may be booked during this period.</dd>
   *   <dt>int <var>i_remain</var></dt>
   *   <dd>The number of sessions that remain available.</dd>
   *   <dt>string <var>s_date</var></dt>
   *   <dd>The name of the period type.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Purchase_PurchaseElementModel_a_restrict[]}
   */
  this.a_restrict = undefined;

  /**
   * @typedef {{}} Wl_Profile_Purchase_PurchaseElementModel_a_tax
   * @property {string} f_tax_discount The amount of tax.
   * @property {string} s_tax The name of the tax.
   */

  /**
   * The list of taxes paid for the purchased item. Every element has the following fields:
   * <dl>
   *   <dt>string <var>f_tax_discount</var></dt>
   *   <dd>The amount of tax.</dd>
   *   <dt>string <var>s_tax</var></dt>
   *   <dd>The name of the tax.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Purchase_PurchaseElementModel_a_tax[]}
   */
  this.a_tax = undefined;

  /**
   * This is `true` only if the purchased item is a promotion and the user can control the renewal of the promotion.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.can_renew = undefined;

  /**
   * Local date of purchase in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dl_purchase = undefined;

  /**
   * The start date of the promotion. This is used only if the purchased item is a promotion.
   *
   * @get result
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * The expiration date of the promotion. This is used only if the purchased item is a promotion.
   *
   * @get result
   * @type {string}
   */
  this.dt_end = undefined;

  /**
   * The end date of the promotion hold. This is used only for promotions on hold.
   * This may be empty if the hold is internal.
   *
   * @get result
   * @type {string}
   */
  this.dt_hold_end = undefined;

  /**
   * The start date of the promotion hold. This is used only for promotions on hold.
   *
   * @get result
   * @type {string}
   */
  this.dt_hold_start = undefined;

  /**
   * The purchase date of the purchased item. This is given in GMT in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_purchase = undefined;

  /**
   * The date for when the email regarding the gift card should be sent (or was sent) to the receiver.
   * This is only used for gift cards.
   *
   * @get result
   * @type {string}
   */
  this.dt_send = undefined;

  /**
   * The percentage value of the discount for the client type. This is empty if this discount wasn't applied.
   *
   * @get result
   * @type {number}
   */
  this.f_discount_login_type_percent = undefined;

  /**
   * The description of the purchased item.
   *
   * @get result
   * @type {string}
   */
  this.html_description = undefined;

  /**
   * The number of sessions remaining for a promotion. This is used only for promotions.
   * This will be `0` if the purchased item isn't a promotion or if there are no remaining sessions.
   *
   * @get result
   * @type {number}
   */
  this.i_book = undefined;

  /**
   * The number of purchased items bought at the time of purchase.
   * This field will be `0` for purchase items obtained via a redemption code or as a result of an old import.
   *
   * @get result
   * @type {number}
   */
  this.i_buy = undefined;

  /**
   * The percentage value of the discount given by a reward prize. This field will be `0` if a discount wasn't applied.
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
   * The number of bookings remaining in this promotion. This value is used only for non-sequential promotions.
   *
   * @get result
   * @type {number}
   */
  this.i_left = undefined;

  /**
   * The number of visits which can be made with this promotion. This is used only for promotions.
   *
   * @get result
   * @type {number}
   */
  this.i_limit = undefined;

  /**
   * The duration of the regular payments interval. This is used only for “membership” type promotions.
   *
   * @get result
   * @type {number}
   */
  this.i_payment_period = undefined;

  /**
   * The number of remaining bookings for the promotion. This is used only for promotions.
   *
   * @get result
   * @type {number}
   */
  this.i_remain = undefined;

  /**
   * The number of minutes remaining for the promotion.
   * This is used only for promotions that work with a limited number of minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_remain_duration = undefined;

  /**
   * Not <tt>0</tt> only for promotions. How many times promotion was updated.
   *
   * @get result
   * @type {number}
   */
  this.i_renew = undefined;

  /**
   * This is used only for promotions. This is the number of visits that were attended for the promotion.
   *
   * @get result
   * @type {number}
   */
  this.i_use = undefined;

  /**
   * Activation mode. One on {@link RsActivationSid} constants. This field is only added for promotions.
   *
   * @get result
   * @type {number}
   */
  this.id_activation = undefined;

  /**
   * The type of discount given via a reward prize.
   * One on the {@link RsCommissionTypeSid} constants.
   * This will be empty if this discount wasn't applied.
   *
   * @get result
   * @type {number}
   */
  this.id_discount_commission_type = undefined;

  /**
   * The type of duration for the promotion. This is used only for “membership” type promotions.
   * This determines whether the promotion lasts indefinitely, has a fixed duration, or ends on a specific date.
   * One of the {@link RsDurationTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_duration = undefined;

  /**
   * The ID of the promotion program.
   * One of the {@link RsProgramTypeSid} constants.
   * This is used only for promotions.
   *
   * @get result
   * @type {number}
   */
  this.id_program_type = undefined;

  /**
   * The ID of the purchase item type.
   * One of the {@link RsPurchaseItemSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * The ID of the sale category.
   * One of the {@link RsSaleSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_sale = undefined;

  /**
   * If `true`, then the purchase item is active. If `false`, then the purchase item isn't active.
   *
   * @get result
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * If `true`, then the purchased item is a component of another purchase item, as is the case of a package.
   * If `false`, then the purchased item isn't a component of another purchase item.
   *
   * @get result
   * @type {boolean}
   */
  this.is_component = undefined;

  /**
   * If `true`, then this promotion will be converted to a different promotion after it expires. It `false`, then the
   * promotion won't be converted to a different promotion after it expires. This can only be true for certain
   * promotions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_convert = undefined;

  /**
   * This is `true` only if the purchased item is an expired promotion. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_expire = undefined;

  /**
   * This is `true` only if the purchased item is a promotion placed on hold.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_hold = undefined;

  /**
   * If `true`, then the usage of this purchased item is disabled. If `false`, then the usage of this purchased item
   * is enabled.
   *
   * @get result
   * @type {boolean}
   */
  this.is_limit = undefined;

  /**
   * If `true`, then the discount was applied for the member type. If `false`, then the discount was applied for the
   * pass holder type. If `null`, then the discount was applied for the prospect type (this won't be `null` only
   * if a discount based on a client type was applied).
   *
   * @get result
   * @type {?boolean}
   */
  this.is_login_type_member = null;

  /**
   * If `true`, then the gift card email notification will be sent to the receiver. This is `true` only if the
   * purchased item is a gift card. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_mail = undefined;

  /**
   * If `true`, then the gift card email notification has been sent. This can only be `true` if the purchased item is a
   * gift card. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_past = undefined;

  /**
   * This is `true` if the gift card has been redeemed. This can only be true if the purchased item is a gift card.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_redeem = undefined;

  /**
   * This is `true` if the promotion is auto-renewable. This can only be true if the purchased item is a promotion.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_renew = undefined;

  /**
   * This is `true` if the promotion has been transferred. This can only be `true` if the purchased item is a promotion.
   * This is `false` if the promotion hasn't been transferred or in all other cases.
   *
   * @get result
   * @type {boolean}
   */
  this.is_transfer = undefined;

  /**
   * The key of the redemption code used to obtain some goods.
   * This should be specified only for items obtained via redemption code (not for ordinary purchases or for purchased
   * promotions without purchases). This will be `null` if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_code = "0";

  /**
   * The key of the redemption code. This won't be `0` if the purchased item is obtained via a redemption code
   * or if it's a component of a package which is obtained via a redemption code.
   *
   * @get result
   * @type {string}
   */
  this.k_code_result = undefined;

  /**
   * The key of the currency used to make the purchase.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * The key of an entirely booked event.
   * This must be specified if the purchased item is a whole event and a component of a package.
   *
   * @get get
   * @type {string}
   */
  this.k_enrollment_book = "0";

  /**
   * The key of a purchased product.
   * This must be specified if the purchased item is a product and a component of a package.
   *
   * @get get
   * @type {string}
   */
  this.k_login_product = "0";

  /**
   * The key of the user's promotion.
   * This should only be specified for promotions given without a purchase. This isn't for ordinary purchases or for
   * promotions obtained via redemption codes. This will be `null` if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * The key of the purchased promotion. This won't be `0` only for promotions.
   *
   * @get result
   * @type {string}
   */
  this.k_login_promotion_result = undefined;

  /**
   * The key of the purchased item. This should be specified only for ordinary purchases, not for those obtained via
   * redemption codes or as a result of an old import.
   *
   * @get get
   * @type {string}
   */
  this.k_purchase_item = "0";

  /**
   * The key of the whole purchase which includes the given purchased item.
   *
   * @get result
   * @type {string}
   */
  this.k_purchase_result = undefined;

  /**
   * The key of the make-up session used to attend an event.
   *
   * @get get
   * @type {string}
   */
  this.k_session_pass = "0";

  /**
   * The cost of the purchased item.
   *
   * @get result
   * @type {string}
   */
  this.m_cost_item = undefined;

  /**
   * The total cost of the purchase, including taxes and fees.
   *
   * @get result
   * @type {string}
   */
  this.m_cost_total = undefined;

  /**
   * The amount of the discount given via a reward prize. This will be empty if the discount wasn't applied.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_amount = undefined;

  /**
   * The amount of the discount for the client type. This will be empty if the discount wasn't applied.
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
   * The amount to pay for each payment period. This is used only for promotions with the "membership" program type.
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
   * The amount refunded. This will be `0` if there are no refunds.
   *
   * @get result
   * @type {string}
   */
  this.m_refund = undefined;

  /**
   * The redemption code. This is used only if the purchase is bought using a redemption code.
   *
   * @get result
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * The code to redeem gift card. This won't be empty only for gift cards.
   *
   * This can be auto-generated or custom (entered manually by the staff member during purchase).
   * The max length is 20 characters, which can include both numbers and letters.
   *
   * @get result
   * @type {string}
   */
  this.s_gift_code = undefined;

  /**
   * Name of gift recipient. This won't be empty only for gift cards.
   *
   * @get result
   * @type {string}
   */
  this.s_gift_recipient = undefined;

  /**
   * The name of the staff member who disabled the usage of the purchased item.
   * This will be empty if the purchased item is enabled.
   *
   * @get result
   * @type {string}
   */
  this.s_limit_actor = undefined;

  /**
   * The email address the gift card was sent to. This is used only for gift cards.
   *
   * @get result
   * @type {string}
   */
  this.s_mail = undefined;

  /**
   * The text of the message sent to the gift card recipient. This is used only for gift cards.
   * This will be empty if an email notification shouldn't be sent.
   *
   * @get result
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * The name of the user who paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.s_payer = undefined;

  /**
   * The title of the converted promotion. This is used only for promotions which must be converted to
   * another promotion after expiration.
   *
   * @get result
   * @type {string}
   */
  this.s_promotion_convert = undefined;

  /**
   * The purchase ID number as it appears on the receipt.
   * This value will also include the leading 0s for the ID number.
   *
   * @get result
   * @type {string}
   */
  this.s_purchase = undefined;

  /**
   * The name of the user who paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.s_recipient = undefined;

  /**
   * The name of the sender. This is used only for gift cards.
   *
   * @get result
   * @type {string}
   */
  this.s_sender = undefined;

  /**
   * The name of the purchased item.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * The string ID of the purchased item. This ID may be used to change the view of the purchased item.
   *
   * @get result
   * @type {string}
   */
  this.sid_value = undefined;

  /**
   * The key of the user who paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.uid_payer = undefined;

  /**
   * The key of the user who paid for this purchase.
   *
   * @get result
   * @type {string}
   */
  this.uid_recipient = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Purchase_PurchaseElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Purchase_PurchaseElementModel.prototype.config=function()
{
  return {"a_field": {"a_component": {"get": {"result": true}},"a_logo": {"get": {"result": true}},"a_restrict": {"get": {"result": true}},"a_tax": {"get": {"result": true}},"can_renew": {"get": {"result": true}},"dl_purchase": {"get": {"result": true}},"dl_start": {"get": {"result": true}},"dt_end": {"get": {"result": true}},"dt_hold_end": {"get": {"result": true}},"dt_hold_start": {"get": {"result": true}},"dt_purchase": {"get": {"result": true}},"dt_send": {"get": {"result": true}},"f_discount_login_type_percent": {"get": {"result": true}},"html_description": {"get": {"result": true}},"i_book": {"get": {"result": true}},"i_buy": {"get": {"result": true}},"i_discount_count": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_left": {"get": {"result": true}},"i_limit": {"get": {"result": true}},"i_payment_period": {"get": {"result": true}},"i_remain": {"get": {"result": true}},"i_remain_duration": {"get": {"result": true}},"i_renew": {"get": {"result": true}},"i_use": {"get": {"result": true}},"id_activation": {"get": {"result": true}},"id_discount_commission_type": {"get": {"result": true}},"id_duration": {"get": {"result": true}},"id_program_type": {"get": {"result": true}},"id_purchase_item": {"get": {"result": true}},"id_sale": {"get": {"result": true}},"is_active": {"get": {"result": true}},"is_component": {"get": {"result": true}},"is_convert": {"get": {"result": true}},"is_expire": {"get": {"result": true}},"is_hold": {"get": {"result": true}},"is_limit": {"get": {"result": true}},"is_login_type_member": {"get": {"result": true}},"is_mail": {"get": {"result": true}},"is_past": {"get": {"result": true}},"is_redeem": {"get": {"result": true}},"is_renew": {"get": {"result": true}},"is_transfer": {"get": {"result": true}},"k_code": {"get": {"get": true}},"k_code_result": {"get": {"result": true}},"k_currency": {"get": {"result": true}},"k_enrollment_book": {"get": {"get": true}},"k_login_product": {"get": {"get": true}},"k_login_promotion": {"get": {"get": true}},"k_login_promotion_result": {"get": {"result": true}},"k_purchase_item": {"get": {"get": true}},"k_purchase_result": {"get": {"result": true}},"k_session_pass": {"get": {"get": true}},"m_cost_item": {"get": {"result": true}},"m_cost_total": {"get": {"result": true}},"m_discount_amount": {"get": {"result": true}},"m_discount_login_type_amount": {"get": {"result": true}},"m_discount_manual": {"get": {"result": true}},"m_period_price": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_refund": {"get": {"result": true}},"s_code": {"get": {"result": true}},"s_gift_code": {"get": {"result": true}},"s_gift_recipient": {"get": {"result": true}},"s_limit_actor": {"get": {"result": true}},"s_mail": {"get": {"result": true}},"s_message": {"get": {"result": true}},"s_payer": {"get": {"result": true}},"s_promotion_convert": {"get": {"result": true}},"s_purchase": {"get": {"result": true}},"s_recipient": {"get": {"result": true}},"s_sender": {"get": {"result": true}},"s_title": {"get": {"result": true}},"sid_value": {"get": {"result": true}},"uid_payer": {"get": {"result": true}},"uid_recipient": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Purchase_PurchaseElementModel.instanceGet
 * @param {string} k_purchase_item The key of the purchased item. This should be specified only for ordinary purchases, not for those obtained via redemption codes or as a result of an old import.
 * @param {string} k_login_promotion The key of the user's promotion. This should only be specified for promotions given without a purchase. This isn't for ordinary purchases or for promotions obtained via redemption codes. This will be `null` if not set yet.
 * @param {string} k_code The key of the redemption code used to obtain some goods. This should be specified only for items obtained via redemption code (not for ordinary purchases or for purchased promotions without purchases). This will be `null` if not set yet.
 * @param {string} k_login_product The key of a purchased product. This must be specified if the purchased item is a product and a component of a package.
 * @param {string} k_enrollment_book The key of an entirely booked event. This must be specified if the purchased item is a whole event and a component of a package.
 * @param {string} k_session_pass The key of the make-up session used to attend an event.
 * @returns {Wl_Profile_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */