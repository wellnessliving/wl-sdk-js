/**
 * An endpoint that retrieves information about assets' locations.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Asset_AssetLocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_resource";

  /**
   * The location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The resource key.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_AssetLocationModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_AssetLocationModel.prototype.config=function()
{
  return {"a_field": {"k_location": {"get": {"result": true}},"k_resource": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_AssetLocationModel.instanceGet
 * @param {string} k_resource Resource key.
 * @returns {Wl_Appointment_Book_Asset_AssetLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */