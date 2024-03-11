/**
 * An endpoint that gets a list of purchases for a user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_PurchaseList_PurchaseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_PurchaseList_PurchaseListModel_a_purchase
   * @property {boolean[]} a_active The value of <tt>a_purchase['is_active']</tt>. For packages, this also contains the values of <tt>a_purchase['is_active']</tt> of every component.
   * @property {number[]} a_sale The value of <tt>a_purchase['id_sale']</tt>. For packages, this also contains the values of <tt>a_purchase['id_sale']</tt> of every component.
   * @property {string} dt_add The date that the purchase was added.
   * @property {number} id_purchase_item The ID of the purchase type. One of the constants {@link RsPurchaseItemSid}.
   * @property {number} id_sale The ID of the sale category in the store. One of the constants {@link RsSaleSid}.
   * @property {boolean} is_active If `true`, then the purchase item is active. Otherwise, this will be `false`.
   * @property {*} is_component If `true`, then the purchase item is a package component. Otherwise, this will be `false`.
   * @property {string} k_appointment Appointment key.
   * @property {string} k_code The redemption code key that was used to make a purchase.
   * This is used only if <tt>k_login_promotion</tt> and <tt>k_purchase</tt> are empty.
   * @property {*} k_enrollment_book The key of an event that requires clients to book every session at once.
   * This is used only if the event is part of a package.
   * @property {string} k_id The key of the purchase type referring to different types of keys depending on the value of <tt>id_sale</tt>.
   * @property {*} k_login_product The key of the purchased product.
   * This is used only if the event is part of a package.
   * @property {string} k_login_promotion The key of the user's existing purchase options.
   * This is used only if `k_code` and `k_purchase` are empty.
   * @property {string} k_purchase The key of a purchase where no special case rules are in effect.
   * This is used only used if `k_code` is empty.
   * @property {string} k_purchase_item The key of a purchase item where no special case rules are in effect.
   * This is used only if <tt>k_code</tt> is empty.
   * @property {*} k_session_pass In certain cases a session can be canceled and makeup sessions can be granted to a client in lieu of
   * other compensation. This is the key of one of the makeup sessions used to attend an event. This is also
   * present for a repeat purchase of an event.
   * @property {string} k_service Service key.
   * @property {string} s_title The name of the purchase item.
   * @property {string} uid The ID of the purchase owner.
   */

  /**
   * A list of purchased items. Every element contains a sub-array with the following fields:
   * <dl>
   *   <dt>
   *     bool[] <var>a_active</var>
   *   </dt>
   *   <dd>
   *     The value of <var>a_purchase['is_active']</var>. For packages, this also contains the values of <var>a_purchase['is_active']</var> of every component.
   *   </dd>
   *   <dt>
   *     int[] <var>a_sale</var>
   *   </dt>
   *   <dd>
   *     The value of <var>a_purchase['id_sale']</var>. For packages, this also contains the values of <var>a_purchase['id_sale']</var> of every component.
   *   </dd>
   *   <dt>
   *     string <var>dt_add</var>
   *   </dt>
   *   <dd>
   *     The date that the purchase was added.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The ID of the purchase type. One of the constants {@link RsPurchaseItemSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     The ID of the sale category in the store. One of the constants {@link RsSaleSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     If `true`, then the purchase item is active. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool [<var>is_component</var>]
   *   </dt>
   *   <dd>
   *     If `true`, then the purchase item is a package component. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_code</var>
   *   </dt>
   *   <dd>
   *     The redemption code key that was used to make a purchase.
   *     This is used only if <var>k_login_promotion</var> and <var>k_purchase</var> are empty.
   *   </dd>
   *   <dt>
   *     string [<var>k_enrollment_book</var>]
   *   </dt>
   *   <dd>
   *     The key of an event that requires clients to book every session at once.
   *     This is used only if the event is part of a package.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The key of the purchase type referring to different types of keys depending on the value of <var>id_sale</var>.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_product</var>]
   *   </dt>
   *   <dd>
   *     The key of the purchased product.
   *     This is used only if the event is part of a package.
   *   </dd>
   *   <dt>
   *     string <var>k_login_promotion</var>
   *   </dt>
   *   <dd>
   *     The key of the user's existing purchase options.
   *     This is used only if `k_code` and `k_purchase` are empty.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase</var>
   *   </dt>
   *   <dd>
   *     The key of a purchase where no special case rules are in effect.
   *     This is used only used if `k_code` is empty.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The key of a purchase item where no special case rules are in effect.
   *     This is used only if <var>k_code</var> is empty.
   *   </dd>
   *   <dt>
   *     string [<var>k_session_pass</var>]
   *   </dt>
   *   <dd>
   *     In certain cases a session can be canceled and makeup sessions can be granted to a client in lieu of
   *     other compensation. This is the key of one of the makeup sessions used to attend an event. This is also
   *     present for a repeat purchase of an event.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The name of the purchase item.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     The ID of the purchase owner.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_PurchaseList_PurchaseListModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * The key of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_PurchaseList_PurchaseListModel);

/**
 * @inheritDoc
 */
Wl_Profile_PurchaseList_PurchaseListModel.prototype.config=function()
{
  return {"a_field": {"a_purchase": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_PurchaseList_PurchaseListModel.instanceGet
 * @param {string} uid The key of a user to show information for.
 * @param {string} k_business The key of a business to show information for.
 * @returns {Wl_Profile_PurchaseList_PurchaseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */