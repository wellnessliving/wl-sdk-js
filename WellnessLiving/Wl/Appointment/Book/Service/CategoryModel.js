/**
 * An endpoint that retrieves information about service categories.
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
   * @property {boolean} hide_application <tt>true</tt> - all services are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   * @property {boolean} i_sort Sort key for category. Used to sort categories on category list page.
   * @property {string} k_service_category Service category key.
   * @property {string} s_title Service category title.
   */

  /**
   * A list of information about service categories.
   * <dl>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - all services are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>i_sort</var>
   *   </dt>
   *   <dd>
   *     Sort key for category. Used to sort categories on category list page.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     Service category key.
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
  this.a_category = [];

  /**
   * List of user keys to book appointments - primary keys in {@link \PassportLoginSql}.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * `true` - return all service categories for a certain location.
   * `false` - return only service categories that are associated with a book tab and with staff members
   * able to conduct them.
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
   * `true` - search in all tabs.
   * `false` - search only for the selected book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The class tab key used to filter services.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * User to get information for.
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
  return {"a_field": {"a_category": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true}},"is_client_flag": {"get": {"result": true}},"is_tab_all": {"get": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_CategoryModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_class_tab The class tab key used to filter services.
 * @param {boolean} is_backend `true` - return all service categories for a certain location. `false` - return only service categories that are associated with a book tab and with staff members able to conduct them.
 * @param {string} uid User to get information for.
 * @returns {Wl_Appointment_Book_Service_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */