/**
 * Returns information about holiday day of business/locations.
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
   * A list of the location's closed day titles by location keys on the date [HolidayApi](/Wl/Holiday/Holiday.json).
   *
   * Keys are location keys. Values are holiday title strings.
   *
   * @get result
   * @type {string[]}
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
   * `true` if the business has a closed day on the date [HolidayApi](/Wl/Holiday/Holiday.json), `false` if otherwise.
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
  this.k_business = "";

  /**
   * The message used for the business's closed day on the date [HolidayApi](/Wl/Holiday/Holiday.json).
   *
   * @get result
   * @type {string}
   */
  this.text_business_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Holiday_HolidayModel);

/**
 * @inheritDoc
 */
Wl_Holiday_HolidayModel.prototype.config=function()
{
  return {"a_field":{"a_location_holiday":{"get":{"result":true}},"dl_work":{"get":{"get":true}},"is_business_holiday":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_business_title":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Holiday_HolidayModel.instanceGet
 * @param {string} dl_work The date working hours are required for. Set in the business's timezone.
 * @param {string} k_business The business key.
 * @returns {Wl_Holiday_HolidayModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about holiday day of business/locations.
 *
 * For the specified business and date, returns whether that date is a business-wide closed day, the closed day
 * title if applicable, and a map of location keys to their closed day titles for any locations also closed on
 * that date.
 *
 * @function
 * @name Wl_Holiday_HolidayModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
