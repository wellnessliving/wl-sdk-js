/**
 * Information about locations/business holiday.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Holiday_HolidayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dl_work,k_business";

  /**
   * List of location's closed day titles by location keys on date {@link \Wl\Holiday\HolidayApi::$dl_work}.
   *
   * @get result
   * @type {{}}
   */
  this.a_location_holiday = undefined;

  /**
   * Date for which working hours are required.
   * In business timezone.
   *
   * @get get
   * @type {string}
   */
  this.dl_work = "";

  /**
   * <tt>true</tt> If business has closed day by date {@link \Wl\Holiday\HolidayApi::$dl_work}, <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_business_holiday = undefined;

  /**
   * Business key.
   * Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Message of the closed day of business on date {@link \Wl\Holiday\HolidayApi::$dl_work}.
   *
   * @get result
   * @type {string}
   */
  this.text_business_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Holiday_HolidayModel);

/**
 * @inheritDoc
 */
Wl_Holiday_HolidayModel.prototype.config=function()
{
  return {"a_field": {"a_location_holiday": {"get": {"result": true}},"dl_work": {"get": {"get": true}},"is_business_holiday": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_business_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Holiday_HolidayModel.instanceGet
 * @param {string} dl_work Date for which working hours are required. In business timezone.
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Holiday_HolidayModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */