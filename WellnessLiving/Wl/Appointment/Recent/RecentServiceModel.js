/**
 * Returns list of client's last booked services. Only unique services are returned, i.e. if a client
 * booked the same service several times, only last of these bookings is returned in the list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Recent_RecentServiceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of last booked services. Values are visit keys.
   *
   * @get result
   * @type {string[]}
   */
  this.a_service_last = [];

  /**
   * Count of last booked services to return. Default value is 5.
   *
   * @get get
   * @type {number}
   */
  this.i_visit = 5;

  /**
   * Type of service to return. One of {@link Wl_Service_ServiceSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_service = 0;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Recent_RecentServiceModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Recent_RecentServiceModel.prototype.config=function()
{
  return {"a_field": {"a_service_last": {"get": {"result": true}},"i_visit": {"get": {"get": true}},"id_service": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};