/**
 * Checks if service can be booked by client. Throws exception if booking is restricted.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Service_ServiceCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_service,uid,dt_date";

  /**
   * Date of booking in MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The service key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_ServiceCheckModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_ServiceCheckModel.prototype.config=function()
{
  return {"a_field": {"dt_date": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_ServiceCheckModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} k_location The location key.
 * @param {string} k_service The service key.
 * @param {string} uid The user key.
 * @param {string} dt_date Date of booking in MySQL format.
 * @returns {Wl_Appointment_Book_Service_ServiceCheckModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */