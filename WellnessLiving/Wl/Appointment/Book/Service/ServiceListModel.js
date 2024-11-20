/**
 * An endpoint that retrieves information about services in the current service category.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated New version {@link Wl_Appointment_Book_Service_ServiceList52Model} should be used instead.
 */
function Wl_Appointment_Book_Service_ServiceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service_category,k_class_tab,is_backend,uid,is_tab_all";

  /**
   * The class tab key to use to filter services. If empty, this can be found on the standard book tab.
   *
   * If multiple tabs are sent, appointment types, which are in at least in one of the tabs, will be in the result.
   *
   * @get get
   * @type {string[]}
   */
  this.a_class_tab = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceListModel_a_service_a_direct_link
   * @property {string} k_class_tab The key of the book now tab.
   * @property {string} url_tab The booking URL. This will open the booking wizard under the related booking tab.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceListModel_a_service
   * @property {{}} a_class_tab The list of tab keys for the service.
   * @property {Wl_Appointment_Book_Service_ServiceListModel_a_service_a_direct_link[]} a_direct_link A list of links to start booking from a direct link.
   * This can't be one link, as the same appointment can be available in several booking tabs.
   * Therefore, each booking tab has its own direct booking link.
   * Each element has two values:
   * <dl>
   *   <dt>string <tt>k_class_tab</tt></dt>
   *   <dd>The key of the book now tab.</dd>
   *   <dt>string <tt>url_tab</tt></dt>
   *   <dd>The booking URL. This will open the booking wizard under the related booking tab.</dd>
   * </dl>
   * @property {{}} a_config The appointment-specific business policies. This will be `null` when using the general business policy.
   * @property {{}} a_image The appointment image. See {@link RsServiceLogo::data()} for details.
   * @property {string[]} a_login_type_restriction A list of login type titles for the current service.
   * @property {string[]} a_member_group_restriction The names of the client groups permitted to book the current service.
   * Clients that belong to these groups can book the service.
   * @property {string} f_deposit The deposit amount required.
   * @property {string} f_offline_max The maximum offline price.
   * @property {string} f_offline_min The minimum offline price.
   * @property {string} f_online The online price.
   * @property {boolean} hide_application Determines whether the service will be hidden in the White Label mobile application.
   *  This will be `true` if the service won't be displayed. Otherwise, this will be `false`.
   * @property {number} i_age_from The required minimum client age to book an appointment.
   * @property {number} i_age_to The required maximum client age to book an appointment.
   * @property {number} i_price The price type ID. One of the {@link RsServicePriceSid} constants.
   * @property {number} i_duration The appointment duration in minutes.
   * @property {number} id_book_flow The type of client booking flow. One of the {@link Wl_Service_ServiceBookFlowSid} constants.
   * @property {number} id_service_require The required payment type ID. One of the {@link RsServiceRequireSid} constants.
   * @property {boolean} is_age_public This will be `true` if age restrictions are public. Otherwise, this will be `false` if they should be hidden from clients.
   * @property {boolean} is_age_restricted Determines whether this service can't be booked due to age restrictions.
   * @property {boolean} is_back_to_back Determines whether this service supports back-to-back booking.
   * @property {boolean} is_bookable Determines whether this appointment can be booked online.
   * @property {boolean} is_book_repeat_client `true` if clients can book classes and appointments on a recurring basis. Otherwise, this will be `false`.
   * @property {boolean} is_deposit_percent This will be `true` if <tt>f_deposit</tt> is a percentage. Otherwise, this will be `false` if <tt>f_deposit</tt> is an amount of
   * money.
   * @property {boolean} is_gender_select This will be `true` if clients can select the staff member's gender. Otherwise, this will be `false`.
   * @property {boolean} is_online_sell This will be `true` if clients can buy this appointment. Otherwise, this will be `false` if only staff members can sell it.
   * @property {boolean} is_resource_type This will be `true` if the service requires assets. Otherwise, this will be `false`.
   * @property {boolean} is_single_buy This will be `true` if the appointment can be booked without a Purchase Option. Otherwise, this will be `false` if it's necessary to
   * buy a Purchase Option.
   * @property {boolean} is_staff_confirm This will be `true` if the appointment must be confirmed by a staff member after booking. Otherwise, this will be `false`.
   * @property {boolean} is_staff_skip This will be `true` if clients can select a staff member for the appointment. Otherwise, this will be `false`.
   * @property {boolean} is_question Determines whether the service will ask for questions or not.
   * @property {boolean} is_virtual This will be `true` if the service is virtual. Otherwise, this will be `false`.
   * @property {string} k_service The appointment primary key.
   * @property {string} k_service_category The service category primary key.
   * @property {string} s_duration The appointment duration in a human-readable format.
   * @property {string} s_service The appointment title.
   * @property {string} text_age_restriction The age restriction header.
   * @property {string} xml_description The appointment description.
   * @property {string} xml_description_short The appointment short description.
   * @property {string} xml_special The special instructions.
   */

  /**
   * A list of services with information about them.
   *
   * <b>Key</b> - the service key.
   * <b>Value</b> - an array, with every element consisting of the next keys:
   * <dl>
   *   <dt>
   *     array <var>a_class_tab</var>
   *   </dt>
   *   <dd>
   *     The list of tab keys for the service.
   *   </dd>
   *   <dt>
   *     array[] <var>a_direct_link</var>
   *   </dt>
   *   <dd>
   *     A list of links to start booking from a direct link.
   *     This can't be one link, as the same appointment can be available in several booking tabs.
   *     Therefore, each booking tab has its own direct booking link.
   *     Each element has two values:
   *     <dl>
   *       <dt>string <var>k_class_tab</var></dt>
   *       <dd>The key of the book now tab.</dd>
   *       <dt>string <var>url_tab</var></dt>
   *       <dd>The booking URL. This will open the booking wizard under the related booking tab.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array <var>a_config</var>
   *   </dt>
   *   <dd>
   *     Appointment-specific business policies. This will be `null` when using the general business policy.
   *   </dd>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     The appointment image. See {@link RsServiceLogo::data()} for details.
   *   </dd>
   *   <dt>
   *     string[] <var>a_login_type_restriction</var>
   *   </dt>
   *   <dd>
   *     A list of login type titles for the current service.
   *     Clients that have one of these types can book the service.
   *   </dd>
   *   <dt>
   *     string[] <var>a_member_group_restriction</var>
   *   </dt>
   *   <dd>
   *     The names of the client groups permitted to book the current service.
   *   </dd>
   *   <dt>
   *     string <var>f_deposit</var>
   *   </dt>
   *   <dd>
   *     The deposit amount required.
   *   </dd>
   *   <dt>
   *     string <var>f_offline_max</var>
   *   </dt>
   *   <dd>
   *     The maximum offline price.
   *   </dd>
   *   <dt>
   *     string <var>f_offline_min</var>
   *   </dt>
   *   <dd>
   *     The minimum offline price.
   *   </dd>
   *   <dt>
   *     string <var>f_online</var>
   *   </dt>
   *   <dd>
   *     The online price.
   *   </dd>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Determines whether the service will be hidden in the White Label mobile application.
   *      This will be `true` if the service won't be displayed. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     int <var>i_age_from</var>
   *   </dt>
   *   <dd>
   *     The required minimum client age to book an appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_age_to</var>
   *   </dt>
   *   <dd>
   *     The required maximum client age to book an appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_price</var>
   *   </dt>
   *   <dd>
   *     The price type ID. One of the {@link RsServicePriceSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The appointment duration in minutes.
   *   </dd>
   *   <dt>
   *     int <var>id_book_flow</var>
   *   </dt>
   *   <dd>
   *     The type of client booking flow. One of the {@link Wl_Service_ServiceBookFlowSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_service_require</var>
   *   </dt>
   *   <dd>
   *     The required payment type ID. One of the {@link RsServiceRequireSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_age_public</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if age restrictions are public. Otherwise, this will be `false` if they should be hidden from clients.
   *   </dd>
   *   <dt>
   *     bool <var>is_age_restricted</var>
   *   </dt>
   *   <dd>
   *     Determines whether this service can't be booked due to age restrictions.
   *   </dd>
   *   <dt>
   *     bool <var>is_back_to_back</var>
   *   </dt>
   *   <dd>
   *      Determines whether this service supports back-to-back booking.
   *   </dd>
   *   <dt>
   *     bool <var>is_bookable</var>
   *   </dt>
   *   <dd>
   *     Determines whether this appointment can be booked online.
   *   </dd>
   *   <dt>
   *     bool <var>is_book_repeat_client</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if clients can book classes and appointments on a recurring basis. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_deposit_percent</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if <var>f_deposit</var> is a percentage. Otherwise, this will be `false` if <var>f_deposit</var> is an amount of
   *     money.
   *   </dd>
   *   <dt>
   *     bool <var>is_gender_select</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if clients can select the staff member's gender. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_online_sell</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if clients can buy this appointment. Otherwise, this will be `false` if only staff members can sell it.
   *   </dd>
   *   <dt>
   *     bool <var>is_resource_type</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the service requires assets. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_single_buy</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the appointment can be booked without a Purchase Option. Otherwise, this will be `false` if it's necessary to
   *     buy a Purchase Option.
   *   </dd>
   *   <dt>
   *     bool <var>is_staff_confirm</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the appointment must be confirmed by a staff member after booking. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_staff_skip</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if clients can select a staff member for the appointment. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     bool <var>is_question</var>
   *   </dt>
   *   <dd>
   *     Determines whether the service will ask for questions or not.
   *   </dd>
   *   <dt>
   *     bool <var>is_virtual</var>
   *   </dt>
   *   <dd>
   *     This will be `true` if the service is virtual. Otherwise, this will be `false`.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     The appointment primary key.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     The service category primary key.
   *   </dd>
   *   <dt>
   *     string <var>s_duration</var>
   *   </dt>
   *   <dd>
   *     The appointment duration in a human-readable format.
   *   </dd>
   *   <dt>
   *     string <var>s_service</var>
   *   </dt>
   *   <dd>
   *     The appointment title.
   *   </dd>
   *   <dt>
   *     string <var>text_age_restriction</var>
   *   </dt>
   *   <dd>
   *     The age restriction header.
   *   </dd>
   *   <dt>
   *     string <var>xml_description</var>
   *   </dt>
   *   <dd>
   *     The appointment description.
   *   </dd>
   *   <dt>
   *     string <var>xml_description_short</var>
   *   </dt>
   *   <dd>
   *     The appointment short description.
   *   </dd>
   *   <dt>
   *     string <var>xml_special</var>
   *   </dt>
   *   <dd>
   *      The special instructions.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_ServiceListModel_a_service}
   */
  this.a_service = undefined;

  /**
   * A list of user keys to book appointments.
   * Empty values in this list signify walk-ins.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * The image height in pixels. Please specify this value if you need the image to be returned in a specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {?number}
   */
  this.i_height = 0;

  /**
   * The image width in pixels. Please specify this value if you need image to be returned in a specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {?number}
   */
  this.i_width = 0;

  /**
   * `true` - return all active services for a certain location.
   *
   * `false` - return only services that are associated with a book now tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Determines whether services allow multiple appointment booking.
   *
   * @get result
   * @type {boolean}
   */
  this.is_multiple_booking = undefined;

  /**
   * `true` - search in all tabs.
   *
   * `false` - search only on the selected book now tab.
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
   * The class tab key used to filter services. If empty or `0`, this can be found on the standard book now tab.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of the service category to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service_category = "0";

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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_ServiceListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_ServiceListModel.prototype.config=function()
{
  return {"a_field": {"a_class_tab": {"get": {"get": true}},"a_service": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"i_height": {"get": {"get": true}},"i_width": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_multiple_booking": {"get": {"result": true}},"is_tab_all": {"get": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_service_category": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_ServiceListModel.instanceGet
 * @param {string} k_location The location to show the available appointment booking schedule for.
 * @param {string} k_service_category The key of the service category to show information for.
 * @param {string} k_class_tab The class tab key used to filter services. If empty or `0`, this can be found on the standard book now tab.
 * @param {boolean} is_backend This will be `true` if  all active services for a certain location are returned.
 * Otherwise, this will be `false` if only services that are associated with a book now tab are returned.
 * @param {string} uid The user to get information for.
 * @param {boolean} is_tab_all This will be `true` if all tabs are searched. Otherwise, this will be `false` if only the selected book now tab is searched.
 * @returns {Wl_Appointment_Book_Service_ServiceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */