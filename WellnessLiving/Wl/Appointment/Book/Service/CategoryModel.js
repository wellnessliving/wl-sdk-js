/**
 * Retrieves a list of information about service categories on the appointment booking page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Service_CategoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_class_tab,is_backend,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_CategoryModel_a_category
   * @property {*} hide_application <tt>true</tt> - all services are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   * @property {string} k_service_category Service category key. Primary key in {@link \RsServiceCategorySql} table.
   * @property {string} s_title Service category title.
   */

  /**
   * A list of service categories with information about them:
   * <dl>
   *   <dt>
   *     boolean <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - all services are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     Service category key. Primary key in {@link \RsServiceCategorySql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Service category title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_CategoryModel_a_category}
   */
  this.a_category = undefined;

  /**
   * <tt>true</tt> - return all service categories of certain location;
   * <tt>false</tt> - return only service categories which has staff members and are bound to certain book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * <tt>true</tt> - if client has a flag, <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_flag = undefined;

  /**
   * Book tab ID.
   * Primary key in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * User to get information for.
   *
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_CategoryModel.prototype.config=function()
{
  return {"a_field": {"a_category": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"is_client_flag": {"get": {"result": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_CategoryModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_class_tab Book tab ID. Primary key in {@link \Wl\Classes\Tab\Sql\ClassTab\Sql} table.
 * @param {boolean} is_backend <tt>true</tt> - return all service categories of certain location; <tt>false</tt> - return only service categories which has staff members and are bound to certain book tab.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Appointment_Book_Service_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */