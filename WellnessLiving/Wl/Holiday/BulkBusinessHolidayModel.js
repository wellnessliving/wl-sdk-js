/**
 * An endpoint displaying information about all location/business holidays for a given business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Holiday_BulkBusinessHolidayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Holiday_BulkBusinessHolidayModel_a_business_holidays
   * @property {{}} a_class A list of affected classes. Keys are class keys.
   * @property {{}} a_class_only A list of affected classes. Keys are class keys.Primary keys in {@link \RsClassSql} table.
   * @property {{}} a_event_only A list of affected events. Keys are event keys.
   * @property {{}} a_service A list of affected services. Keys are service keys.
   * @property {string} dt_end The end date of the holiday.
   * @property {string} dt_start The start date of the holiday.
   * @property {number} is_class_all '1' if all classes are selected to cancel, '0' if otherwise.
   * @property {number} is_event_all '1' if all events are selected to cancel, '0' if otherwise.
   * @property {number} is_service_all '1' if all services are selected to cancel, '0' if otherwise.
   * @property {number} k_business The business key.
   * @property {number} k_holiday The holiday key.
   * @property {number} k_location The location key.
   * @property {number} k_market The market key.
   * @property {string} s_title The name of the holiday.
   */

  /**
   * An array consisting of the business's closed day data for all locations by holiday keys {@link Wl_Holiday_HolidayModel.dl_work}.
   *
   * List of holidays. Values are arrays of holidays as follows:
   * <dl>
   *   <dt>array <var>a_class</var></dt>
   *   <dd>A list of affected classes. Keys are class keys.</dd>
   *   <dt>array <var>a_class_only</var></dt>
   *   <dd>A list of affected classes. Keys are class keys.Primary keys in {@link \RsClassSql} table.</dd>
   *   <dt>array <var>a_event_only</var></dt>
   *   <dd>A list of affected events. Keys are event keys.</dd>
   *   <dt>array <var>a_service</var></dt>
   *   <dd>A list of affected services. Keys are service keys.</dd>
   *   <dt>string <var>dt_end</var></dt>
   *   <dd>The end date of the holiday.</dd>
   *   <dt>string <var>dt_start</var></dt>
   *   <dd>The start date of the holiday.</dd>
   *   <dt>int <var>is_class_all</var></dt>
   *   <dd>'1' if all classes are selected to cancel, '0' if otherwise.</dd>
   *   <dt>int <var>is_event_all</var></dt>
   *   <dd>'1' if all events are selected to cancel, '0' if otherwise.</dd>
   *   <dt>int <var>is_service_all</var></dt>
   *   <dd>'1' if all services are selected to cancel, '0' if otherwise.</dd>
   *   <dt>int <var>k_business</var></dt>
   *   <dd>The business key.</dd>
   *   <dt>int <var>k_holiday</var></dt>
   *   <dd>The holiday key.</dd>
   *   <dt>int <var>k_location</var></dt>
   *   <dd>The location key.</dd>
   *   <dt>int <var>k_market</var></dt>
   *   <dd>The market key.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The name of the holiday.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Holiday_BulkBusinessHolidayModel_a_business_holidays}
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
  return {"a_field": {"a_business_holidays": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};