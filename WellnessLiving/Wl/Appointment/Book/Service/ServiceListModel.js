/**
 * Retrieves information about services in the current service category.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Service_ServiceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service_category,k_class_tab,is_backend,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceListModel_a_service
   * @property {{}} a_class_tab The list of tab keys for service.
   * @property {{}} a_image Appointment image. See {@link RsServiceLogo::data()} for details.
   * @property {string} f_deposit Amount of deposit required.
   * @property {string} f_offline_max Maximal offline price.
   * @property {string} f_offline_min Minimal offline price.
   * @property {string} f_online Online price.
   * @property {boolean} hide_application Whether service will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   * @property {number} i_age_from Required minimal client age to book an appointment.
   * @property {number} i_age_to Required maximal client age to book an appointment.
   * @property {number} i_price Price type. One of {@link RsServicePriceSid} constants.
   * @property {number} i_duration Appointment duration in minutes.
   * @property {number} id_book_flow Type of client booking flow. One of {@link \Wl\Service\ServiceBookFlowSid} constants.
   * @property {number} id_service_require Required payment type. One of {@link RsServiceRequireSid} constants.
   * @property {boolean} is_book_repeat_client <tt>true</tt> if allow client to book classes and appointments recurrently, <tt>false</tt> otherwise.
   * @property {boolean} is_deposit_percent <tt>true</tt> if <tt>f_deposit</tt> is percents; <tt>false</tt> if <tt>f_deposit</tt> is amount of money.
   * @property {boolean} is_online_sell <tt>true</tt> if clients can buy this appointment; <tt>false</tt> if only staff members can sale it.
   * @property {boolean} is_single_buy <tt>true</tt> if appointment may be booked without purchase option; <tt>false</tt> if it is necessary to buy a purchase option.
   * @property {boolean} is_staff_confirm <tt>true</tt> if appointment bust be confirmed by staff member after booking; <tt>false</tt> otherwise.
   * @property {boolean} is_virtual <tt>true</tt> if service is virtual; <tt>false</tt> otherwise.
   * @property {string} k_service Appointment primary key in {@link RsServiceSql} table.
   * @property {string} s_duration Appointment duration in human readable format.
   * @property {string} s_service Appointment title.
   * @property {string} xml_describe Appointment description.
   */

  /**
   * A list of services with information about them. Every element has next keys:
   * <dl>
   *   <dt>
   *     array <var>a_class_tab</var>
   *   </dt>
   *   <dd>
   *     The list of tab keys for service.
   *   </dd>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Appointment image. See {@link RsServiceLogo::data()} for details.
   *   </dd>
   *   <dt>
   *     string <var>f_deposit</var>
   *   </dt>
   *   <dd>
   *     Amount of deposit required.
   *   </dd>
   *   <dt>
   *     string <var>f_offline_max</var>
   *   </dt>
   *   <dd>
   *     Maximal offline price.
   *   </dd>
   *   <dt>
   *     string <var>f_offline_min</var>
   *   </dt>
   *   <dd>
   *     Minimal offline price.
   *   </dd>
   *   <dt>
   *     string <var>f_online</var>
   *   </dt>
   *   <dd>
   *     Online price.
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Whether service will be hidden in the White Label mobile application.
   *      <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     int <var>i_age_from</var>
   *   </dt>
   *   <dd>
   *     Required minimal client age to book an appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_age_to</var>
   *   </dt>
   *   <dd>
   *     Required maximal client age to book an appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_price</var>
   *   </dt>
   *   <dd>
   *     Price type. One of {@link RsServicePriceSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     Appointment duration in minutes.
   *   </dd>
   *   <dt>
   *     int <var>id_book_flow</var>
   *   </dt>
   *   <dd>
   *     Type of client booking flow. One of {@link \Wl\Service\ServiceBookFlowSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_service_require</var>
   *   </dt>
   *   <dd>
   *     Required payment type. One of {@link RsServiceRequireSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_book_repeat_client</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if allow client to book classes and appointments recurrently, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_deposit_percent</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if <var>f_deposit</var> is percents; <tt>false</tt> if <var>f_deposit</var> is amount of money.
   *   </dd>
   *   <dt>
   *     bool <var>is_online_sell</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if clients can buy this appointment; <tt>false</tt> if only staff members can sale it.
   *   </dd>
   *   <dt>
   *     bool <var>is_single_buy</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment may be booked without purchase option; <tt>false</tt> if it is necessary to buy a purchase option.
   *   </dd>
   *   <dt>
   *     bool <var>is_staff_confirm</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment bust be confirmed by staff member after booking; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if service is virtual; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     Appointment primary key in {@link RsServiceSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     Appointment duration in human readable format.
   *   </dd>
   *   <dt>
   *     string <var>s_service</var>
   *   </dt>
   *   <dd>
   *     Appointment title.
   *   </dd>
   *   <dt>
   *     string <var>xml_describe</var>
   *   </dt>
   *   <dd>
   *     Appointment description.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_ServiceListModel_a_service}
   */
  this.a_service = undefined;

  /**
   * <tt>true</tt> - return all active services of certain location;
   * <tt>false</tt> - return only services which are bound to certain book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * <tt>true</tt> - find in all tab;
   * <tt>false</tt> - find only on selected book tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * Class tab key to filter services. If empty or <tt>'0'</tt> find on standard book tab.
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
   * Key of a service category to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service_category = "0";

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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_ServiceListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_ServiceListModel.prototype.config=function()
{
  return {"a_field": {"a_service": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_service_category": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_ServiceListModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_service_category Key of a service category to show information for.
 * @param {string} k_class_tab Class tab key to filter services. If empty or <tt>'0'</tt> find on standard book tab.
 * @param {boolean} is_backend <tt>true</tt> - return all active services of certain location; <tt>false</tt> - return only services which are bound to certain book tab.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Appointment_Book_Service_ServiceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */