/**
 * Returns all holiday records for all locations of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Holiday_BulkBusinessHolidayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Holiday_BulkBusinessHolidayModel_a_business_holidays
   * @property {boolean[]} a_class List of effected classes, keys are class keys. Values always `true`.
   * @property {boolean[]} a_class_only List of effected classes, keys are class keys. Values always `true`. Used in schedule widget.
   * @property {boolean[]} a_event_only List of effected events, keys are class keys. Values always `true`. Used in schedule widget.
   * @property {string} dt_end Date of the end of the holiday.
   * @property {string} dt_start Date of the start of the holiday.
   * @property {boolean} is_class_all `1` if all classes are selected to cancel, `0` - otherwise.
   * @property {boolean} is_event_all `1` if all events are selected to cancel, `0` - otherwise.
   * @property {boolean} is_service_all `1` if all services are selected to cancel, `0` - otherwise.
   * @property {string} k_business Business key.
   * @property {string} k_holiday Holiday key.
   * @property {string} k_location Location key.
   * @property {string} k_market The market key.
   * @property {string} s_title Name of the holiday.
   */

  /**
   * An array consisting of the business's closed day data for all locations by holiday keys {@link Wl_Holiday_HolidayModel}.
   *
   * List of holidays.
   *
   * @get result
   * @type {Wl_Holiday_BulkBusinessHolidayModel_a_business_holidays[]}
   */
  this.a_business_holidays = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Holiday_BulkBusinessHolidayModel);

/**
 * @inheritDoc
 */
Wl_Holiday_BulkBusinessHolidayModel.prototype.config=function()
{
  return {"a_field":{"a_business_holidays":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns all holiday records for all locations of the specified business.
 *
 * Retrieves the complete list of holidays across all date ranges for every location belonging to the given
 * business, including both business-level and location-level closed days.
 *
 * @function
 * @name Wl_Holiday_BulkBusinessHolidayModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
