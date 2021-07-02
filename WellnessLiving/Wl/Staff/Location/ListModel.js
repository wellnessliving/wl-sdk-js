/**
 * List of business staffs with the locations available to them.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Location_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * List of business staffs with the locations available to them.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_location = undefined;

  /**
   * Business key for which data will be collected.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Location_ListModel);

/**
 * @inheritDoc
 */
Wl_Staff_Location_ListModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Staff_Location_ListModel.instanceGet
 * @param {string} k_business Business key for which data will be collected.
 * @returns {Wl_Staff_Location_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */