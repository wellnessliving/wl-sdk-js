/**
 * An endpoint displaying information about locations' business holidays.
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
   * A list of the location's closed day titles by location keys on the date {@link Wl_Holiday_HolidayModel.dl_work}.
   *
   * @get result
   * @type {{}}
   */
  this.a_location_holiday = undefined;

  /**
   * The date working hours are required for.
   * Set in the business's timezone.
   *
   * @get get
   * @type {string}
   */
  this.dl_work = "";

  /**
   * <tt>true</tt> if the business has a closed day on the date {@link Wl_Holiday_HolidayModel.dl_work}, <tt>false</tt> if otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_business_holiday = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The message used for the business's closed day on the date {@link Wl_Holiday_HolidayModel.dl_work}.
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
 * @param {string} dl_work The date working hours are required for. Set in the business's timezone.
 * @param {string} k_business The business key.
 * @returns {Wl_Holiday_HolidayModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */