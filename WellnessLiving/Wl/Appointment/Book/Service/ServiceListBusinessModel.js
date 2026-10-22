/**
 * Retrieves the full list of appointment services and categories for a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Service_ServiceListBusinessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceListBusinessModel_a_category
   * @property {string[]} a_location List of location keys where this category has at least one active service.
   * @property {number} i_sort Sort order of the category.
   * @property {string} k_service_category Service category key.
   * @property {string} s_title Service category title.
   */

  /**
   * A list of service categories of the business.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_ServiceListBusinessModel_a_category[]}
   */
  this.a_category = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceListBusinessModel_a_service
   * @property {string[]} a_location List of location keys where this service is available.
   * @property {number} i_sort Sort order of the service within its category.
   * @property {string} k_service Service key.
   * @property {string} k_service_category Service category key.
   * @property {string} s_service Service title.
   */

  /**
   * A list of appointment services of the business.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_ServiceListBusinessModel_a_service[]}
   */
  this.a_service = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_ServiceListBusinessModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_ServiceListBusinessModel.prototype.config=function()
{
  return {"a_field":{"a_category":{"get":{"result":true}},"a_service":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_ServiceListBusinessModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Appointment_Book_Service_ServiceListBusinessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves the full list of appointment services and categories for a business.
 *
 * Returns all active appointment services and their categories across every location of the business.
 * Each service and category includes an array of location keys where it is available.
 * All active services are returned: unlike the location-scoped list, the result is not filtered by class tab
 * or by online bookability, and removed locations are skipped.
 *
 * @function
 * @name Wl_Appointment_Book_Service_ServiceListBusinessModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
