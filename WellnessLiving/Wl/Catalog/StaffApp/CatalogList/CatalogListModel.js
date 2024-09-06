/**
 * Returns a list of all products available from a business’s shop.
 * If a location is specified, only products available at that location are included.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogList_CatalogListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_visit";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogList_CatalogListModel_a_shop_product
   * @property {{}} a_location The list of locations where the current sale item is available.
   * @property {string[]} a_login_type The list of login types available to purchase the sale item.
   * Empty list means that the sale item is available to all login types.
   * @property {string[]} a_member_group The list of member groups available to purchase the sale item.
   * Empty list means that the sale item is available to all member groups.
   * @property {string[]} a_shop_category A list of online store category keys.
   * @property {number} [id_program] The program ID, set for promotions. One of the {@link RsProgramSid} constants.
   *  <p>If `id_program` is {@link RsProgramSid.INSURANCE_MEMBERSHIP}, then use:</p>
   *  <ul>
   *    <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain a list of active programs.</li>
   *    <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *    <li>{@link Wl_Catalog_Payment_PaymentModel} for a program purchase.</li>
   *  </ul>
   * @property {number} id_restriction The restriction ID. One of the {@link Wl_Shop_Product_PurchaseRestrictionSid} constants.
   * @property {number} id_sale The sale category ID. One of the {@link RsSaleSid} constants.
   * @property {boolean} is_online_sell Determines whether the sale item can be purchased by the client.
   * @property {boolean} is_visit This will be <tt>true</tt> if this Purchase Option is suitable to pay for the visit {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit}.
   * Otherwise, this will be <tt>false</tt>.
   * If {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit} is empty, this will always be `false`.
   * @property {string} k_id The sale item ID.
   * @property {string} text_title The category title.
   */

  /**
   * Products in the online store category.
   *
   * Every element has the following fields:
   * <dl>
   *   <dt>
   *     array <var>a_location</var>
   *   </dt>
   *   <dd>
   *     The list of locations where the current sale item is available.
   *   </dd>
   *   <dt>
   *     string[] <var>a_login_type</var>
   *   </dt>
   *   <dd>
   *     The list of login types available to purchase the sale item.
   *     Empty list means that the sale item is available to all login types.
   *   </dd>
   *   <dt>
   *     string[] <var>a_member_group</var>
   *   </dt>
   *   <dd>
   *     The list of member groups available to purchase the sale item.
   *     Empty list means that the sale item is available to all member groups.
   *   </dd>
   *   <dt>
   *     string[] <var>a_shop_category</var>
   *   </dt>
   *   <dd>
   *     A list of online store category keys.
   *   </dd>
   *   <dt>
   *     int <var>[id_program]</var>
   *   </dt>
   *   <dd>
   *      The program ID, set for promotions. One of the {@link RsProgramSid} constants.
   *      <p>If `id_program` is {@link RsProgramSid.INSURANCE_MEMBERSHIP}, then use:</p>
   *      <ul>
   *        <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain a list of active programs.</li>
   *        <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *        <li>{@link Wl_Catalog_Payment_PaymentModel} for a program purchase.</li>
   *      </ul>
   *   </dd>
   *   <dt>
   *     int <var>id_restriction</var>
   *   </dt>
   *   <dd>
   *     The restriction ID. One of the {@link Wl_Shop_Product_PurchaseRestrictionSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     The sale category ID. One of the {@link RsSaleSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_online_sell</var>
   *   </dt>
   *   <dd>
   *     Determines whether the sale item can be purchased by the client.
   *   </dd>
   *   <dt>
   *     bool <var>is_visit</var>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if this Purchase Option is suitable to pay for the visit {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit}.
   *     Otherwise, this will be <tt>false</tt>.
   *     If {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit} is empty, this will always be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The sale item ID.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The category title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogList_CatalogListModel_a_shop_product[]}
   */
  this.a_shop_product = undefined;

  /**
   * If `true`, the current user is able to add the purchased item to the account.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * The key of the business to get categories for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The location key.
   * This can affect the list of displayed products.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The visit key to pay for.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogList_CatalogListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogList_CatalogListModel.prototype.config=function()
{
  return {"a_field": {"a_shop_product": {"get": {"result": true}},"can_add": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_visit": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogList_CatalogListModel.instanceGet
 * @param {string} k_business The key of the business to get categories for.
 * @param {string} k_location The location key. This can affect the list of displayed products.
 * @param {string} k_visit The visit key to pay for.
 * @returns {Wl_Catalog_StaffApp_CatalogList_CatalogListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */