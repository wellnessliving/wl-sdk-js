/**
 * Retrieves a list of available appointment booking schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Schedule_ServiceAvailabilityModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_ServiceAvailabilityModel_a_time
   * @property {string[][]} a_availability Availability data of the staff. Keys are dates and values are lists of available appointment start times.
   * @property {string} text_name Staff name.
   * @property {string} uid_staff Staff user key.
   */

  /**
   * An array with a schedule of available appointment booking times.
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_ServiceAvailabilityModel_a_time}
   */
  this.a_time = undefined;

  /**
   * End date of search period in MySQL format, in location time zone.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = "";

  /**
   * Start date of search period in MySQL format, in location time zone.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Service key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_ServiceAvailabilityModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_ServiceAvailabilityModel.prototype.config=function()
{
  return {"a_field":{"a_time":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_service":{"get":{"get":true}}}};
};

/**
 * Retrieves a list of available appointment booking schedule.
 *
 * Returns list of staff that can provide selected appointment. Each staff data contains list of dates from
 * selected period when appointment can be booked. Each date contains list of available appointment start times.
 *
 * @function
 * @name Wl_Appointment_Book_Schedule_ServiceAvailabilityModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */