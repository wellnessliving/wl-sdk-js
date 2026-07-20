/**
 * Returns list of appointment type in the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_ServiceList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Service_ServiceList_ListModel_a_service
   * @property {boolean} hide_application Whether service will be hidden in the White Label mobile application.  `true` means that service will not be displayed, `false` otherwise.
   * @property {string} k_service Appointment type identifier, primary key.
   * @property {string} k_service_category Appointment type category identifier, primary key.
   * @property {string} text_category Appointment type category name.
   * @property {string} text_service Appointment type name.
   */

  /**
   * Appointment types list:
   *
   * @get result
   * @type {Wl_Service_ServiceList_ListModel_a_service[]}
   */
  this.a_service = undefined;

  /**
   * Whether to return franchisee-created appointment types (if business is franchisor).
   * `true` to include franchisee-created appointment types.
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

WlSdk_ModelAbstract.extend(Wl_Service_ServiceList_ListModel);

/**
 * @inheritDoc
 */
Wl_Service_ServiceList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_service":{"get":{"result":true}},"is_franchise":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Service_ServiceList_ListModel.instanceGet
 * @param {string} k_business Business key, primary key.
 * @returns {Wl_Service_ServiceList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns list of appointment type in the business.
 *
 * Gets key of the business and returns all available appointment types with their names and categories.
 *
 * @function
 * @name Wl_Service_ServiceList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
