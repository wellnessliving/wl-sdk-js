/**
 * Gets list of client's last booked services.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Recent_RecentServiceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of last booked services.
   *
   * @get result
   * @type {string[]}
   */
  this.a_service_last = undefined;

  /**
   * Count of last booked services to return. Default value is 5.
   *
   * @get get
   * @type {number}
   */
  this.i_visit = 0;

  /**
   * Type of service to return. One of {@link Wl_Service_ServiceSid} constants.
   *
   * @get get
   * @see Wl_Service_ServiceSid
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
  return {"a_field":{"a_service_last":{"get":{"result":true}},"i_visit":{"get":{"get":true}},"id_service":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Gets list of client's last booked services.
 *
 * Returns the most recently booked unique services for the given client at the given business,
 * filtered by service type (appointment or bookable asset). Duplicate services are collapsed so
 * only the most recent booking per service is included, up to `MAX_SERVICE_COUNT`.
 *
 * @function
 * @name Wl_Appointment_Recent_RecentServiceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
