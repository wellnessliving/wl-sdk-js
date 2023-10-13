/**
 * An endpoint that returns information about service add-ons.
 *
 * This model is generated automatically based on API.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Product_ProductModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Product_ProductModel.prototype.config=function()
{
  return {"a_field": {"a_product": {"get": {"result": true}},"k_service": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Product_ProductModel.instanceGet
 * @param {string} k_service The key of a service to show information for.
 * @returns {Wl_Appointment_Book_Product_ProductModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */