/**
 * Returns all sale items available in the business for staff, optionally filtered by location and visit.
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
   * @property {string[]} a_location The list of location keys where the current sale item is available. Each value is a location key.
   * @property {string[]} a_login_type The list of login types available to purchase the sale item. Empty list means that the sale item is available to all login types.
   * @property {string[]} a_member_group The list of member groups available to purchase the sale item.
   * @property {string[]} a_shop_category A list of online store category keys.
   * @property {number} id_program The program ID, set for promotions. One of the {@link RsProgramSid} constants.  <p>If `id_program` is {@link RsProgramSid}, then use:</p>  <ul>    <li>{@link Wl_Insurance_Catalog_ProgramListModel} to obtain a list of active programs.</li>    <li>{@link Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel} to get and validate fields for a given program.</li>    <li>{@link Wl_Catalog_Payment_PaymentModel} for a program purchase.</li>  </ul>
   * @property {number} id_restriction The restriction ID. One of the {@link Wl_Shop_Product_PurchaseRestrictionSid} constants.
   * @property {?number} id_sale The sale category ID. One of the {@link RsSaleSid} constants.
   * @property {boolean} is_online_sell Determines whether the sale item can be purchased by the client.
   * @property {boolean} is_visit This will be `true` if this Purchase Option is suitable to pay for the visit {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit}. Otherwise, this will be `false`. If {@link Wl_Catalog_StaffApp_CatalogList_CatalogListModel.k_visit} is empty, this will always be `false`.
   * @property {string} k_id The sale item ID.
   * @property {string} text_title The category title.
   * @property {string} url_catalog Direct link to catalog view page of this purchase item.
   */

  /**
   * Products in the online store category.
   *
   * Every element has the following fields:
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
  this.k_business = "";

  /**
   * The location key.
   * This can affect the list of displayed products.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The visit key to pay for.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogList_CatalogListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogList_CatalogListModel.prototype.config=function()
{
  return {"a_field":{"a_shop_product":{"get":{"result":true}},"can_add":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_visit":{"get":{"get":true}}}};
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

/**
 * Returns all sale items available in the business for staff, optionally filtered by location and visit.
 *
 * Used in the staff app to populate the add-item picker during checkout. Returns the products and
 * services the staff member is allowed to sell at the current location. When a visit key is provided,
 * the list is filtered to items that are relevant to that visit.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogList_CatalogListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
