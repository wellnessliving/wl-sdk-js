/**
 * Retrieves a list of information about locations on the appointment booking page.
 *
 * This model is generated automatically based on API.
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
   * ID of class tab type.
   *
   * <tt>null</tt> if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.id_class_tab = null;

  /**
   * <tt>true</tt> - return all service categories of certain location;
   * <tt>false</tt> - return only service categories which has staff members and are bound to certain book tab.
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
   * <tt>null</tt> if not set yet.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_tab = null;

  /**
   * ID of user to show information for. Primary key in {@link \PassportLoginSql} table.
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
 * @param {string} k_business ID of the business.
 * @param {?string} id_class_tab ID of class tab type. <tt>null</tt> if not set yet.
 * @param {?string} k_class_tab ID of class tab. <tt>null</tt> if not set yet.
 * @param {string} uid ID of user to show information for. Primary key in {@link \PassportLoginSql} table.
 * @param {boolean} is_backend <tt>true</tt> - return all service categories of certain location; <tt>false</tt> - return only service categories which has staff members and are bound to certain book tab.
 * @returns {Wl_Appointment_Book_Location_LocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */