/**
 * Retrieves a list of information about locations on the appointment booking page.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Location_LocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_class_tab,k_class_tab,uid,is_backend";

  /**
   * @typedef {{}} Wl_Appointment_Book_Location_LocationModel_a_location
   * @property {string} k_location Location key.
   * @property {string} s_address Full address of the location, including city, region, and country. Empty if the address is unknown.
   * @property {string} s_map URL of the map image for the location address. Empty if the address is unknown.
   * @property {string} s_title Location title.
   */

  /**
   * A list of business locations with information about them.
   *
   * Each element:
   *
   * @get result
   * @type {Wl_Appointment_Book_Location_LocationModel_a_location[]}
   */
  this.a_location = undefined;

  /**
   * ID of class tab type.
   *
   * `null` if not set yet.
   *
   * @get get
   * @see Wl_Classes_Tab_TabSid
   * @type {?number}
   */
  this.id_class_tab = null;

  /**
   * `true` - return all service categories of certain location;
   * `false` - return only service categories which has staff members and are bound to certain book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * ID of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * ID of class tab.
   *
   * `null` if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_tab = null;

  /**
   * ID of user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Location_LocationModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Location_LocationModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"id_class_tab":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Location_LocationModel.instanceGet
 * @param {string} k_business ID of the business.
 * @param {?number} id_class_tab ID of class tab type. `null` if not set yet.
 * @param {?string} k_class_tab ID of class tab. `null` if not set yet.
 * @param {string} uid ID of user to show information for.
 * @param {boolean} is_backend `true` - return all service categories of certain location; `false` - return only service categories which has staff members and are bound to certain book tab.
 * @returns {Wl_Appointment_Book_Location_LocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of information about locations on the appointment booking page.
 *
 * Validates the business, class tab, and specified user, then loads the business locations
 * that are available for booking. Locations where the user is blocked, or that expose no
 * bookable service categories, are excluded. The result is written to
 * {@link Wl_Appointment_Book_Location_LocationModel.a_location}.
 *
 * @function
 * @name Wl_Appointment_Book_Location_LocationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
