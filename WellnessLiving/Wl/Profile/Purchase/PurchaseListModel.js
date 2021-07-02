/**
 * List of user's purchases.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Purchase_PurchaseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Purchase_PurchaseListModel_a_purchase
   * @property {boolean[]} a_active Value of <tt>a_purchase['is_active']</tt>. For packages also contains values of <tt>a_purchase['is_active']</tt> of every component.
   * @property {number[]} a_sale Value of <tt>a_purchase['id_sale']</tt>. For packages also contains values of <tt>a_purchase['id_sale']</tt> of every component.
   * @property {string} dt_add Date of purchase adding.
   * @property {number} id_purchase_item ID of purchase type. One of constants {@link RsPurchaseItemSid}.
   * @property {number} id_sale ID of sale category in store. One of constants {@link RsSaleSid}.
   * @property {boolean} is_active <tt>true</tt> - purchase item is active; <tt>false</tt> - purchase item is not active.
   * @property {*} is_component <tt>true</tt> if purchase item is a package component; <tt>false</tt> otherwise.
   * @property {string} k_code ID of redemption code which was used to obtain some goods. Not empty only if <tt>k_purchase</tt> and <tt>k_purchase_item</tt> is empty.
   * @property {*} k_enrollment_book ID of whole event book. Is returner only for purchases of whole events which are components of package. Primary key in {@link RsEnrollmentBookSql} table.
   * @property {string} k_id ID of purchase type. Primary key in different tables. See {@link \RsPurchaseItemInterface::id_table()} for details.
   * @property {*} k_login_product ID of purchased product. Is returned only for purchases of products which are components of package. Primary key in {@link RsLoginProductSql} table.
   * @property {string} k_login_promotion ID of user's promotion.
   * @property {string} k_purchase ID of ordinary purchase. Not empty only if <tt>k_code</tt> is empty.
   * @property {string} k_purchase_item ID of ordinary purchase item. Not empty only if <tt>k_code</tt> is empty.
   * @property {*} k_session_pass ID of makeup to attend event. Is returned for repeat purchase of event. Primary key in {@link \Wl\Session\Pass\Sql} table.
   * @property {string} s_title Title of purchase item.
   * @property {string} uid ID of purchase owner. Primary key {@link PassportLoginSql} in table.
   */

  /**
   * User's purchases:
   * <dl>
   *   <dt>
   *     bool[] <var>a_active</var>
   *   </dt>
   *   <dd>
   *     Value of <var>a_purchase['is_active']</var>. For packages also contains values of <var>a_purchase['is_active']</var> of every component.
   *   </dd>
   *   <dt>
   *     int[] <var>a_sale</var>
   *   </dt>
   *   <dd>
   *     Value of <var>a_purchase['id_sale']</var>. For packages also contains values of <var>a_purchase['id_sale']</var> of every component.
   *   </dd>
   *   <dt>
   *     string <var>dt_add</var>
   *   </dt>
   *   <dd>
   *     Date of purchase adding.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of purchase type. One of constants {@link RsPurchaseItemSid}.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     ID of sale category in store. One of constants {@link RsSaleSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - purchase item is active; <tt>false</tt> - purchase item is not active.
   *   </dd>
   *   <dt>
   *     bool [<var>is_component</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if purchase item is a package component; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_code</var>
   *   </dt>
   *   <dd>
   *     ID of redemption code which was used to obtain some goods. Not empty only if <var>k_purchase</var> and <var>k_purchase_item</var> is empty.
   *   </dd>
   *   <dt>
   *     string [<var>k_enrollment_book</var>]
   *   </dt>
   *   <dd>
   *     ID of whole event book. Is returner only for purchases of whole events which are components of package. Primary key in {@link RsEnrollmentBookSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     ID of purchase type. Primary key in different tables. See {@link \RsPurchaseItemInterface::id_table()} for details.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_product</var>]
   *   </dt>
   *   <dd>
   *     ID of purchased product. Is returned only for purchases of products which are components of package. Primary key in {@link RsLoginProductSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_login_promotion</var>
   *   </dt>
   *   <dd>
   *     ID of user's promotion.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase</var>
   *   </dt>
   *   <dd>
   *     ID of ordinary purchase. Not empty only if <var>k_code</var> is empty.
   *   </dd>
   *   <dt>
   *     string <var>k_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of ordinary purchase item. Not empty only if <var>k_code</var> is empty.
   *   </dd>
   *   <dt>
   *     string [<var>k_session_pass</var>]
   *   </dt>
   *   <dd>
   *     ID of makeup to attend event. Is returned for repeat purchase of event. Primary key in {@link \Wl\Session\Pass\Sql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Title of purchase item.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     ID of purchase owner. Primary key {@link PassportLoginSql} in table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Purchase_PurchaseListModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * ID of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Purchase_PurchaseListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Purchase_PurchaseListModel.prototype.config=function()
{
  return {"a_field": {"a_purchase": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Purchase_PurchaseListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of a business to show information for.
 * @returns {Wl_Profile_Purchase_PurchaseListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */