/**
 * An endpoint that gets information about appointment add-ons.
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
   * See {@link \Wl\Appointment\Wizard\AppointmentWizard::product()} for details.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_product = undefined;

  /**
   * The service key to show information for.
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
 * @param {string} k_service The service key to show information for.
 * @returns {Wl_Appointment_Book_Product_ProductModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */