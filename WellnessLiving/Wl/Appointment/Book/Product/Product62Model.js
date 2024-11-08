/**
 * Returns information about service add-ons.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Appointment\Book\Product\Product62Api
 */
function Wl_Appointment_Book_Product_Product62ModelAbstract()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_service,uid";

  /**
   * A list service add-ons.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_product = undefined;

  /**
   * The key of a service to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The key of a user to show information for.
   *
   * Products with a {@link Wl_Shop_Product_PurchaseRestrictionSid.TYPE} restriction will be filtered out.
   * Only those products that match the client type or those that have no restrictions will be shown.
   *
   * `null` if the client is not logged in.
   *
   * If you don't need to filter products by client type/group, use {@link Wl_Appointment_Book_Product_ProductModel}.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Product_Product62ModelAbstract);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Product_Product62ModelAbstract.prototype.config=function()
{
  return {"a_field": {"a_product": {"get": {"result": true}},"k_service": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Product_Product62Model.instanceGet
 * @param {string} k_service The key of a service to show information for.
 * @param {?string} uid The key of a user to show information for. Products with a {@link Wl_Shop_Product_PurchaseRestrictionSid.TYPE} restriction will be filtered out. Only those products that match the client type or those that have no restrictions will be shown. `null` if the client is not logged in. If you don't need to filter products by client type/group, use {@link Wl_Appointment_Book_Product_ProductModel}.
 * @returns {Wl_Appointment_Book_Product_Product62Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */