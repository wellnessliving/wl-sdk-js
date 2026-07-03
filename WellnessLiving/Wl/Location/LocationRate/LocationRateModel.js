/**
 * Retrieves information about location rate.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_LocationRate_LocationRateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location";

  /**
   * Location rate.
   *
   * @get result
   * @type {number}
   */
  this.f_rate = undefined;

  /**
   * Review count.
   *
   * @get result
   * @type {number}
   */
  this.i_review = undefined;

  /**
   * Determines that the rate type exists in the current business type.
   *
   * @get result
   * @type {boolean}
   */
  this.is_rate = undefined;

  /**
   * ID of a location to show rate for.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_LocationRate_LocationRateModel);

/**
 * @inheritDoc
 */
Wl_Location_LocationRate_LocationRateModel.prototype.config=function()
{
  return {"a_field":{"f_rate":{"get":{"result":true}},"i_review":{"get":{"result":true}},"is_rate":{"get":{"result":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Location_LocationRate_LocationRateModel.instanceGet
 * @param {string} k_location ID of a location to show rate for.
 * @returns {Wl_Location_LocationRate_LocationRateModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about location rate.
 *
 * Returns the average rating and review count for the location, along with whether rating is
 * enabled for the business type the location belongs to.
 *
 * @function
 * @name Wl_Location_LocationRate_LocationRateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
