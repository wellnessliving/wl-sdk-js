/**
 * An endpoint that retrieves information about locations on the appointment booking page.
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
   * A list of business locations with information about them.
   *
   * @get result
   * @type {{}}
   */
  this.a_location = undefined;

  /**
   * The class tab type ID.
   *
   * This will be `null` if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.id_class_tab = null;

  /**
   * `true` - return all service categories of specified location.
   *
   * `false` - return only service categories that have staff members and are associated to a specific book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * The business ID.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class tab ID.
   *
   * This will be `null` if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_tab = null;

  /**
   * The ID of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Location_LocationModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Location_LocationModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"id_class_tab": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Location_LocationModel.instanceGet
 * @param {string} k_business The ID of the business.
 * @param {?string} id_class_tab The ID of class tab type. This will be `null` if not set yet.
 * @param {?string} k_class_tab The ID of class tab. This will be `null` if not set yet.
 * @param {string} uid The ID of user to show information for.
 * @param {boolean} is_backend This will be `true` if all service categories of a specified location are returned. Otherwise,
 * this will be `false` if only service categories that have staff members and are associated to a specific book tab are returned.
 * @returns {Wl_Appointment_Book_Location_LocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */