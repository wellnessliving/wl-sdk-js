/**
 * Returns the list of all items for the given Sid class.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_Facility_FacilitySidModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Location_Facility_FacilitySidModel_a_list
   * @property {number} sid String ID.
   * @property {string} text_title Title of the ID.
   */

  /**
   * List of items. Keys are IDs, values are arrays with additional information:
   *
   * @get result
   * @type {Wl_Location_Facility_FacilitySidModel_a_list}
   */
  this.a_list = undefined;

  /**
   * Name of the Sid class to get list from.
   *
   * Should be a fully qualified class name.
   *
   * @get get
   * @type {string}
   */
  this.s_class_name = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_Facility_FacilitySidModel);

/**
 * @inheritDoc
 */
Wl_Location_Facility_FacilitySidModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"s_class_name":{"get":{"get":true}}}};
};

/**
 * Returns the list of all items for the given Sid class.
 *
 * Populates enumeration dropdowns and lookup tables on the frontend.
 *
 * @function
 * @name Wl_Location_Facility_FacilitySidModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
