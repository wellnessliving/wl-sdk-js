/**
 * Versioned list of appointment types with support for selected inactive services.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_ServiceList_List75Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Service_ServiceList_List75Model_a_service
   * @property {boolean} hide_application Whether service will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   * @property {boolean} is_active Whether appointment type is active.
   * @property {string} k_service Appointment type identifier, primary key.
   * @property {string} k_service_category Appointment type category identifier, primary key.
   * @property {string} text_category Appointment type category name.
   * @property {string} text_service Appointment type name.
   */

  /**
   * Appointment types list.
   *
   * @get result
   * @type {Wl_Service_ServiceList_List75Model_a_service[]}
   */
  this.a_service = undefined;

  /**
   * Whether to return franchisee-created appointment types (if business is franchisor).
   * <tt>true</tt> to include franchisee-created appointment types.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key, primary key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_ServiceList_List75Model);

/**
 * @inheritDoc
 */
Wl_Service_ServiceList_List75Model.prototype.config=function()
{
  return {"a_field": {"a_service": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Service_ServiceList_List75Model.instanceGet
 * @param {string} k_business Business key.
 * @param {boolean} is_franchise Whether to return franchisee-created appointment types (if business is franchisor). <tt>true</tt> to include franchisee-created appointment types.
 * @returns {Wl_Service_ServiceList_List75Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */