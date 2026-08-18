/**
 * Retrieves information about services in the current service category.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Service_ServiceList52Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "a_class_tab,k_location,k_service_category,is_backend,uid";

  /**
   * The class tab key to use to filter services. If empty, this can be found on the standard book tab.
   *
   * If multiple tabs are sent, appointment types, which are in at least in one of the tabs, will be in the result.
   *
   * @get get
   * @type {string[]}
   */
  this.a_class_tab = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_direct_link
   * @property {string} k_class_tab The key of the book now tab.
   * @property {string} url_tab The booking URL. This will open the booking wizard under the related booking tab.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_config
   * @property {boolean} is_back_to_back `true` if this service supports back-to-back booking.
   * @property {boolean} is_book_repeat_client `true` if clients can book this service on a recurring basis.
   * @property {boolean} is_book_repeat_no_end_date_appointment `true` if appointment bookings for this service default to weekly recurring with no end date.
   * @property {boolean} is_multiple_booking `true` if multiple bookings are allowed for this service.
   * @property {boolean} is_wait_list_unpaid `true` if clients on the wait list do not have to pay upfront.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_image
   * @property {number} i_height The height of the image.
   * @property {number} i_width The width of the image.
   * @property {boolean} is_empty This will be `true` if the image is not set.
   * @property {string} k_service The service key.
   * @property {string} s_service The name of the service.
   * @property {string} s_url The URL to the image.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Service_ServiceList52Model_a_service
   * @property {string[]} a_class_tab The list of tab keys for the service.
   * @property {?Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_config} a_config Appointment-specific business policy overrides. `null` when the service uses the general business policy. When not `null`, contains a subset of business config fields, including:
   * @property {Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_direct_link} a_direct_link A list of links to start booking from a direct link. This can't be one link, as the same appointment can be available in several booking tabs. Therefore, each booking tab has its own direct booking link. Each element has two values:
   * @property {Wl_Appointment_Book_Service_ServiceList52Model_a_service_a_image} a_image Information about the appointment image. An array with the following values:
   * @property {string[]} a_login_type_restriction Keys are login type keys.  Values - List of login types' titles for current service. Clients that have one of these types can book service.
   * @property {string[]} a_member_group_restriction Keys are member group keys.  Values - list of member groups' titles for current service. Clients that belongs to these groups can book service.
   * @property {string} f_deposit The amount of deposit required.
   * @property {string} f_offline_max The maximum offline price.
   * @property {string} f_offline_min The minimum offline price.
   * @property {string} f_online The online price.
   * @property {boolean} hide_application Determines whether the service will be hidden in the White Label mobile application.  `true` means that service won't be displayed. Otherwise, this will be `false`.
   * @property {string} html_deny_reason Human-readable reason why the client cannot book this service. Empty string if there is no deny reason.
   * @property {number} i_age_from The required minimum client age to book an appointment (years part).
   * @property {number} i_age_from_month The required minimum client age to book an appointment (months part).
   * @property {number} i_age_to The required maximum client age to book an appointment (years part).
   * @property {number} i_age_to_month The required maximum client age to book an appointment (months part).
   * @property {number} i_duration The appointment duration in minutes.
   * @property {number} i_padding_after Padding time after the end of the appointment, in minutes. Used to detect when a staff member is   busy after this appointment when booking back-to-back appointments.
   * @property {number} i_padding_before Padding time before the beginning of the appointment, in minutes. Used to detect when a staff member is   busy before this appointment when booking back-to-back appointments.
   * @property {number} i_price The price type ID. One of {@link RsServicePriceSid} constants.
   * @property {number} id_book_flow The type of client booking flow. One of {@link Wl_Service_ServiceBookFlowSid} constants.
   * @property {?number} id_deny_reason The ID of the reason why the client cannot book this service. One of {@link Wl_Schedule_ClassView_DenyReasonSid} constants. `null` if there is no deny reason.
   * @property {number} id_service_require The required payment type ID. One of {@link RsServiceRequireSid} constants.
   * @property {?number} id_virtual_provider Virtual provider ID. One of {@link Wl_Virtual_VirtualProviderSid} constants. `null` for non-virtual services.
   * @property {boolean} is_age_public `true` if age restrictions are public. Otherwise, `false` if they should be hidden from clients.
   * @property {boolean} is_age_restricted Determines whether this service can't be booked due to age restrictions.
   * @property {boolean} is_back_to_back Determines whether this service supports back-to-back booking.
   * @property {boolean} is_book_repeat_client `true` if clients can book classes and appointments on a recurring basis. Otherwise, this `false`.
   * @property {boolean} is_book_repeat_no_end_date_appointment `true` if appointment bookings default to weekly recurring with no end date, `false` otherwise.
   * @property {boolean} is_bookable Whether this appointment can be booked online.
   * @property {boolean} is_deposit_percent `true` if `f_deposit` is a percentage. `false` if `f_deposit` is an amount of money.
   * @property {boolean} is_gender_select `true` if clients can select the staff member's gender. Otherwise, this will be `false`.
   * @property {boolean} is_online_sell `true` if clients can buy this appointment. `false` if only staff members can sell it.
   * @property {boolean} is_question Determines whether the service will ask for questions or not.
   * @property {boolean} is_resource_type `true` if the service requires assets. Otherwise, this will be `false`.
   * @property {boolean} is_single_buy `true` if the appointment can be booked without a Purchase Option. `false` if it's necessary to buy a Purchase Option.
   * @property {boolean} is_staff_confirm `true` if the appointment must be confirmed by a staff member after booking. Otherwise, `false`.
   * @property {boolean} is_staff_skip `true` if clients can select a staff member for the appointment. Otherwise, `false`.
   * @property {boolean} is_virtual `true` if the service is virtual. Otherwise, this will be `false`.
   * @property {string} k_resource_location Off-site location if service requires such type of asset.
   * @property {string} k_service The appointment primary key.
   * @property {string} k_service_category The service category primary key.
   * @property {string} s_duration The appointment duration in a human-readable format.
   * @property {string} s_service The appointment title.
   * @property {?string} sid_deny_reason String representation of the deny reason. `null` if no deny reason.
   * @property {string} text_age_restriction Age restriction header.
   * @property {string} xml_description Appointment description (deprecated, use `html_description`).
   * @property {string} xml_description_short Appointment short description (deprecated, use `html_description_short`).
   * @property {string} xml_special Special instructions (deprecated, use `html_special`).
   */

  /**
   * A list of services with information about them.
   *
   * <b>Key</b> - the service key.
   * <b>Value</b> - an array, with every element consisting of the next keys:
   *
   * @get result
   * @type {Wl_Appointment_Book_Service_ServiceList52Model_a_service}
   */
  this.a_service = undefined;

  /**
   * List of staff members to filter a result.
   *
   * Empty if the filtering is not necessary.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {?number}
   */
  this.i_height = null;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {?number}
   */
  this.i_width = null;

  /**
   * `true` - return all active services for a certain location ignoring user age and other restrictions.
   * `false` - return only services that are allowed for the user.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Whether services allow multiple appointment booking.
   *
   * @get result
   * @type {boolean}
   */
  this.is_multiple_booking = undefined;

  /**
   * `true` - search in all tabs.
   * `false` - search only on the selected book now tab.
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
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of a service category to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service_category = "";

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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Service_ServiceList52Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Service_ServiceList52Model.prototype.config=function()
{
  return {"a_field":{"a_class_tab":{"get":{"get":true}},"a_service":{"get":{"result":true}},"a_staff":{"get":{"get":true}},"a_uid":{"get":{"get":true}},"i_height":{"get":{"get":true}},"i_width":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_multiple_booking":{"get":{"result":true}},"is_tab_all":{"get":{"get":true}},"is_walk_in":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"k_service_category":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Service_ServiceList52Model.instanceGet
 * @param {string[]} a_class_tab The class tab key to use to filter services. If empty, this can be found on the standard book tab. If multiple tabs are sent, appointment types, which are in at least in one of the tabs, will be in the result.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service_category The key of a service category to show information for.
 * @param {boolean} is_backend `true` - return all active services for a certain location ignoring user age and other restrictions. `false` - return only services that are allowed for the user.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @returns {Wl_Appointment_Book_Service_ServiceList52Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about services in the current service category.
 *
 * Returns all services available for booking at the given location, optionally filtered by service
 * category, book now tab, and client. Each service entry includes title, description, image, pricing,
 * duration, staff availability, and age restriction details. Supports both frontend and backend modes.
 *
 * @function
 * @name Wl_Appointment_Book_Service_ServiceList52Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
