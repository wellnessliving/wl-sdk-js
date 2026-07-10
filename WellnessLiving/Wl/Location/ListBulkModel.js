/**
 * Gets location lists for a bulk of businesses.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_ListBulkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_business";

  /**
   * Short-form information about locations.
   *
   * Keys refer to location primary keys. Values refer to sub-arrays with the next keys:
   *
   * @get result
   * @type {{}}
   */
  this.a_location = undefined;

  /**
   * A list of models with full information about each location.
   *
   * @get result
   * @type {{}}
   */
  this.a_location_full = undefined;

  /**
   * The ID of the directory if locations should be filtered by enabling directory integration.
   *
   * `0` if a directory filter isn't required.
   *
   * @get get
   * @see RsProjectSid
   * @type {number}
   */
  this.id_directory = 0;

  /**
   * A list of businesses. Business primary keys are serialized with JSON.
   *
   * Empty string if you need all locations in the system.
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  /**
   * A list of locations. Location primary keys are serialized with JSON.
   *
   * @get get
   * @type {string}
   */
  this.s_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListBulkModel);

/**
 * @inheritDoc
 */
Wl_Location_ListBulkModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"a_location_full":{"get":{"result":true}},"id_directory":{"get":{"get":true}},"s_business":{"get":{"get":true}},"s_location":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Location_ListBulkModel.instanceGet
 * @param {string} s_business A list of businesses. Business primary keys are serialized with JSON. Empty string if you need all locations in the system.
 * @returns {Wl_Location_ListBulkModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets location lists for a bulk of businesses.
 *
 * Accepts a JSON-encoded list of business keys, a JSON-encoded list of location keys, or both, and returns
 * short-form location data alongside full location detail objects. Optionally filters results to only
 * locations that have a specific directory integration enabled.
 *
 * @function
 * @name Wl_Location_ListBulkModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
