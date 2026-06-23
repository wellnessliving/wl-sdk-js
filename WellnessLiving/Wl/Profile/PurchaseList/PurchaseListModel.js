/**
 * Retrieves a list of user's purchase items to show in user profile.
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
   * @property {boolean[]} a_active The value of `a_purchase['is_active']`. For packages, this also contains the values of `a_purchase['is_active']` of every component.
   * @property {number[]} a_sale The value of `a_purchase['id_sale']`. For packages, this also contains the values of `a_purchase['id_sale']` of every component.
   * @property {string} dt_add The date that the purchase was added.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_active If `true`, then the purchase item is active. Otherwise, this will be `false`.
   * @property {boolean} is_component If `true`, then the purchase item is a package component. Otherwise, this will be `false`.
   * @property {boolean} is_package If `true`, then the purchase item is a package, `false` otherwise.
   * @property {string} k_appointment Appointment key.
   * @property {string} k_code The redemption code key that was used to make a purchase. This is used only if `k_login_promotion` and `k_purchase` are empty.
   * @property {string} k_enrollment_book The key of an event that requires clients to book every session at once. This is used only if the event is part of a package.
   * @property {string} k_id The key of the purchase type referring to different types of keys depending on the value of `id_sale`.
   * @property {string} k_login_product The key of the purchased product. This is used only if the event is part of a package.
   * @property {string} k_login_promotion The key of the user's existing purchase options. This is used only if `k_code` and `k_purchase` are empty.
   * @property {string} k_purchase The key of a purchase where no special case rules are in effect. This is used only used if `k_code` is empty.
   * @property {string} k_purchase_item The key of a purchase item where no special case rules are in effect. This is used only if `k_code` is empty.
   * @property {string} k_service Service key.
   * @property {string} k_session_pass In certain cases a session can be canceled and makeup sessions can be granted to a client in lieu of other compensation. This is the key of one of the makeup sessions used to attend an event. This is also present for a repeat purchase of an event.
   * @property {string} s_title The name of the purchase item.
   * @property {string} uid The ID of the purchase owner.
   */

  /**
   * A list of purchased items. Every element contains a sub-array with the following fields:
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
  this.k_business = "";

  /**
   * The key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_PurchaseList_PurchaseListModel);

/**
 * @inheritDoc
 */
Wl_Profile_PurchaseList_PurchaseListModel.prototype.config=function()
{
  return {"a_field":{"a_purchase":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_PurchaseList_PurchaseListModel.instanceGet
 * @param {string} uid The key of a user to show information for.
 * @param {string} k_business The key of a business to show information for.
 * @returns {Wl_Profile_PurchaseList_PurchaseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of user's purchase items to show in user profile.
 *
 * Returns the complete purchase history for the client in the given business, covering all
 * item types such as memberships, redemption codes, enrollments, products, appointments, and
 * gift cards. Package components are resolved and included inline beside their parent item.
 *
 * @function
 * @name Wl_Profile_PurchaseList_PurchaseListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
