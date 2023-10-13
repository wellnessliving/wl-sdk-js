/**
 * An endpoint that retrieves information about service categories.
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
   * @property {boolean} hide_application If <tt>true</tt>, all services are hidden in this category for the White Label mobile app.
   * Otherwise, this will be <tt>false</tt>.
   * @property {boolean} i_sort The sort key for the category used to sort categories on category list page.
   * @property {string} k_service_category The service category key.
   * @property {string} s_title The service category title.
   */

  /**
   * A list of information about service categories.
   * <dl>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     If <tt>true</tt>, all services are hidden in this category for the White Label mobile app. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>i_sort</var>
   *   </dt>
   *   <dd>
   *     The sort key for the category used to sort categories on category list page.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     The service category key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The service category title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_CategoryModel_a_category}
   */
  this.a_category = [];

  /**
   * A list of user keys used to book appointments.
   * Empty values in this list represent walk-ins.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * `true` - return all service categories for a certain location.
   *
   * `false` - return only service categories that are associated with a book now tab and with staff members
   * able to conduct them.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If <tt>true</tt>, if client has a flag. Otherwise, this will be <tt>false</tt>.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_flag = undefined;

  /**
   * `true` - search in all tabs.
   *
   * `false` - search only for the selected book now tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * This will be `true` if the client is a walk-in. Otherwise, this will be `false`.
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
   * The location to show available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The user to get information for.
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
 * @param {string} k_location The location to show available appointment booking schedule for.
 * @param {string} k_class_tab The class tab key used to filter services.
 * @param {boolean} is_backend If `true`, all service categories for a certain location are returned.
 * Otherwise, this will be `false` if only service categories that are associated with a book now tab and with staff members
 * able to conduct them will be returned.
 * @param {string} uid The user to get information for.
 * @returns {Wl_Appointment_Book_Service_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */