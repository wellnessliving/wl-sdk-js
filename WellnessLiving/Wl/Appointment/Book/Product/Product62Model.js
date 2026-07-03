/**
 * Retrieves list of available service add-ons.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Product_Product62Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_service,k_location,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Product_Product62Model_a_product_a_logo
   * @property {number} i_height Height of the image.
   * @property {number} i_width Width of the image.
   * @property {boolean} is_empty `true` mean mock instead of real image.
   * @property {string} s_url URL on the image.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Product_Product62Model_a_product
   * @property {Wl_Appointment_Book_Product_Product62Model_a_product_a_logo} a_logo Information about first image connected to the product.
   * @property {string} html_description Description of the product as prepared html code.
   * @property {number} i_duration Duration that will be added to the appointment with this addon as count of minutes.
   * @property {boolean} is_amount `true` means that addon increases price of the appointment.
   * @property {boolean} is_client_duration `true` means that the duration information will be displayed for the client.
   * @property {boolean} is_online_sell `true` if client can purchase product, `false` if only staff can perform purchase.
   * @property {string} k_currency ID of the currency.
   * @property {string} k_shop_product ID of the product.
   * @property {string} k_shop_product_option ID of the product option. Zero means that product has multiple options and option should be selected by client.
   * @property {string} m_amount Amount that will be added to the appointment price with this addon.
   * @property {string} text_description Description of the product.
   * @property {string} text_duration Duration that will be added to the appointment with this addon as a formatted string.
   * @property {string} text_title Name of the product.
   */

  /**
   * A list service add-ons.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {Wl_Appointment_Book_Product_Product62Model_a_product[]}
   */
  this.a_product = undefined;

  /**
   * The key of a location where appointment is going to be booked.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of a service to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * The key of a user to show information for.
   *
   * Products with a {@link Wl_Shop_Product_PurchaseRestrictionSid} restriction will be filtered out.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Product_Product62Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Product_Product62Model.prototype.config=function()
{
  return {"a_field":{"a_product":{"get":{"result":true}},"k_location":{"get":{"get":true}},"k_service":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Product_Product62Model.instanceGet
 * @param {string} k_service The key of a service to show information for.
 * @param {string} k_location The key of a location where appointment is going to be booked.
 * @param {?string} uid The key of a user to show information for. Products with a {@link Wl_Shop_Product_PurchaseRestrictionSid} restriction will be filtered out. Only those products that match the client type or those that have no restrictions will be shown. `null` if the client is not logged in. If you don't need to filter products by client type/group, use {@link Wl_Appointment_Book_Product_ProductModel}.
 * @returns {Wl_Appointment_Book_Product_Product62Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves list of available service add-ons.
 *
 * Returns active add-on products for the specified service and location, filtered by the given
 * client's login type when a UID is provided. Products with a purchase restriction that does not
 * match the client type are excluded from the result.
 *
 * @function
 * @name Wl_Appointment_Book_Product_Product62Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
