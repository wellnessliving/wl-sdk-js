/**
 * Retrieves a list of information about asset categories on the appointment booking page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Asset_CategoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_class_tab,is_backend";

  /**
   * @typedef {{}} Wl_Appointment_Book_Asset_CategoryModel_a_category
   * @property {*} hide_application <tt>true</tt> - all resources are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   * @property {string} k_resource_type Resource type ID.
   * @property {string} html_title Title of resource type.
   */

  /**
   * A list of service categories with information about them:
   * <dl>
   *   <dt>
   *     boolean <var>hide_application</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - all resources are hidden in this category for White Label mobile application. <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_type</var>
   *   </dt>
   *   <dd>
   *     Resource type ID.
   *   </dd>
   *   <dt>
   *     string <var>html_title</var>
   *   </dt>
   *   <dd>
   *     Title of resource type.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Asset_CategoryModel_a_category}
   */
  this.a_category = undefined;

  /**
   * `true` to load asset categories for backend mode; `false` for frontend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Class tab ID to filter services.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * ID of the location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Asset_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Asset_CategoryModel.prototype.config=function()
{
  return {"a_field": {"a_category": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Asset_CategoryModel.instanceGet
 * @param {string} k_location ID of the location.
 * @param {string} k_class_tab Class tab ID to filter services.
 * @param {boolean} is_backend `true` to load asset categories for backend mode; `false` for frontend mode.
 * @returns {Wl_Appointment_Book_Asset_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */