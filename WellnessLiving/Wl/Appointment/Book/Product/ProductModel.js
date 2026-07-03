/**
 * Retrieves list of available service add-ons.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Product_ProductModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_service";

  /**
   * @typedef {{}} Wl_Appointment_Book_Product_ProductModel_a_product_a_logo
   * @property {number} i_height Height of the image.
   * @property {number} i_width Width of the image.
   * @property {boolean} is_empty `true` mean mock instead of real image.
   * @property {string} s_url URL on the image.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Product_ProductModel_a_product
   * @property {Wl_Appointment_Book_Product_ProductModel_a_product_a_logo} a_logo Information about first image connected to the product.
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
   * @type {Wl_Appointment_Book_Product_ProductModel_a_product[]}
   */
  this.a_product = undefined;

  /**
   * The key of a service to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Product_ProductModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Product_ProductModel.prototype.config=function()
{
  return {"a_field":{"a_product":{"get":{"result":true}},"k_service":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Product_ProductModel.instanceGet
 * @param {string} k_service The key of a service to show information for.
 * @returns {Wl_Appointment_Book_Product_ProductModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves list of available service add-ons.
 *
 * Returns all active add-on products available for the specified service, including title, image,
 * price, and quantity information. Results are not filtered by client type; use {@link Wl_Appointment_Book_Product_Product62Model}
 * when filtering by client login type is required.
 *
 * @function
 * @name Wl_Appointment_Book_Product_ProductModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
