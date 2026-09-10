/**
 * Gathers a list of business staffs and locations that are available to them.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Location_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Staff_Location_ListModel_a_location
   * @property {string} k_location Location key.
   * @property {string} text_title Location title.
   */

  /**
   * List of business staffs with the locations available to them, keyed by `uid_staff`.
   * For applications in the `APPS_USE_OLD_K_STAFF` allow-list, keys are legacy `k_staff`.
   * Each value is a list of locations available to that staff member:
   *
   * @get result
   * @type {Wl_Staff_Location_ListModel_a_location[]}
   */
  this.a_location = undefined;

  /**
   * Business key for which data will be collected.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Location_ListModel);

/**
 * @inheritDoc
 */
Wl_Staff_Location_ListModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_Location_ListModel.instanceGet
 * @param {string} k_business Business key for which data will be collected.
 * @returns {Wl_Staff_Location_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gathers a list of business staffs and locations that are available to them.
 *
 * Builds the list of locations available to each staff member of the business and keys the
 * result by `uid_staff`, converting from the legacy `k_staff` key. Applications on the legacy
 * allow-list receive `k_staff`-keyed results instead, for backward compatibility.
 *
 * @function
 * @name Wl_Staff_Location_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
