/**
 * Returns a list of all products available for a business’s shop at a particular location.
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
   * @property {{}} a_location List of locations, where current sale item is available.
   * @property {string[]} a_login_type List of login types available to purchase sale item.
   * @property {string[]} a_shop_category A list of online store category keys.
   * @property {number} [id_program] The program ID, sets for promotions. One of {@link RsProgramSid} constants. Set for promotions.
   *  <p>If `id_program` is {@link RsProgramSid.INSURANCE_MEMBERSHIP}, then use:</p>
   *  <ul>
   *    <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain a list of active programs.</li>
   *    <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>
   *    <li>{@link Wl_Catalog_Payment_PaymentModel} for a program purchase.</li>
   *  </ul>
   * @property {number} id_restriction Restriction ID. One of {@link Wl_Shop_Product_PurchaseRestrictionSid} constants.
   * @property {number} id_sale Sale category ID. One of {@link RsSaleSid}.
   * @property {boolean} is_online_sell Whether sale item can be purchased by client.
   * @property {boolean} is_visit <tt>true</tt> if this purchase option is suitable to pay for visit {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit}; <tt>false</tt> otherwise.
   * If {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit} is empty, always false.
   * @property {string} k_id Sale item ID.
   * @property {string} text_title The category title.
   */

  /**
   * Products in the online store category.
   *
   * Every element has the following next fields:
   * <dl>
   *   <dt>
   *     array <var>a_location</var>
   *   </dt>
   *   <dd>
   *     List of locations, where current sale item is available.
   *   </dd>
   *   <dt>
   *     string[] <var>a_login_type</var>
   *   </dt>
   *   <dd>
   *     List of login types available to purchase sale item.
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
   *      The program ID, sets for promotions. One of {@link RsProgramSid} constants. Set for promotions.
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
   *     Restriction ID. One of {@link Wl_Shop_Product_PurchaseRestrictionSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     Sale category ID. One of {@link RsSaleSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_online_sell</var>
   *   </dt>
   *   <dd>
   *     Whether sale item can be purchased by client.
   *   </dd>
   *   <dt>
   *     bool <var>is_visit</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if this purchase option is suitable to pay for visit {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit}; <tt>false</tt> otherwise.
   *     If {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit} is empty, always false.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Sale item ID.
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
   * If `true` then the current user is able to add the purchased item to the account.
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