/**
 * Retrieves a list of information about service categories on the appointment booking page.
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
   * @property {boolean} hide_application `true` - all services are hidden in this category for White Label mobile application. `false` - otherwise.
   * @property {number} i_sort Sort key for category. Used to sort categories on category list page.
   * @property {string} k_service_category Service category key.
   * @property {string} s_title Service category title.
   */

  /**
   * A list of information about service categories.
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_CategoryModel_a_category}
   */
  this.a_category = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

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
   * `true` - if client has a flag, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_client_flag = undefined;

  /**
   * Whether a flagged client is allowed to retrieve categories.
   * `true` - allowed, `false` - not allowed.
   *
   * @get get
   * @type {boolean}
   */
  this.is_flag_ignore = false;

  /**
   * `true` - search in all tabs.
   * `false` - search only for the selected book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The class tab key used to filter services.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * The user key.
   *
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_CategoryModel.prototype.config=function()
{
  return {"a_field":{"a_category":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_client_flag":{"get":{"result":true}},"is_flag_ignore":{"get":{"get":true}},"is_tab_all":{"get":{"get":true}},"is_walk_in":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_CategoryModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_class_tab The class tab key used to filter services.
 * @param {boolean} is_backend `true` - return all service categories for a certain location. `false` - return only service categories that are associated with a book tab and with staff members able to conduct them.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @returns {Wl_Appointment_Book_Service_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of information about service categories on the appointment booking page.
 *
 * Returns all service categories available at the given location, optionally filtered by book now tab.
 * Each category includes its title and the list of available services. Supports both frontend and
 * backend modes; in backend mode access is verified against the business.
 *
 * @function
 * @name Wl_Appointment_Book_Service_CategoryModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
