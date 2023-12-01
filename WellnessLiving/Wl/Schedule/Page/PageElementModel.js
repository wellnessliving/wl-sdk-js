/**
 * An endpoint that returns information about a specified visit.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Page_PageElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_appointment_visit_info
   * @property {number} id_visit Visit status. One of {@link Wl_Visit_VisitSid} constants.
   * @property {boolean} is_confirmed `true` means that appointment was requested and confirmed by the staff.
   * @property {boolean} is_deny `true` means that appointment was requested and denied by the staff.
   * @property {boolean} is_notify_request_accept `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   * @property {boolean} is_notify_request_deny `true` means that the client will receive a notification, if appointment will be denied by the staff.
   * @property {boolean} is_request `true` means that appointment was requested, but not confirmed by the staff.
   */

  /**
   * Additional visit information about this appointment. Empty array if it's not an appointment. <dl>
   *   <dt>
   *     int <var>id_visit</var>
   *   </dt>
   *   <dd>
   *     Visit status. One of {@link Wl_Visit_VisitSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_confirmed</var>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested and confirmed by the staff.
   *   </dd>
   *   <dt>
   *     bool <var>is_deny</var>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested and denied by the staff.
   *   </dd>
   *   <dt>
   *     bool <var>is_notify_request_accept</var>
   *   </dt>
   *   <dd>
   *     `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   *   </dd>
   *   <dt>
   *     bool <var>is_notify_request_deny</var>
   *   </dt>
   *   <dd>
   *     `true` means that the client will receive a notification, if appointment will be denied by the staff.
   *   </dd>
   *   <dt>
   *     bool <var>is_request</var>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested, but not confirmed by the staff.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_PageElementModel_a_appointment_visit_info}
   */
  this.a_appointment_visit_info = [];

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_asset
   * @property {string} s_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.
   * @property {string} i_count Number of sessions.
   */

  /**
   * List of assets: <dl>
   *   <dt>string <var>s_name</var></dt>
   *   <dd>Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.</dd>
   *   <dt>string <var>i_count</var></dt>
   *   <dd>Number of sessions.</dd>
   * </dl>.
   *
   * @get result
   * @type {Wl_Schedule_Page_PageElementModel_a_asset[]}
   */
  this.a_asset = undefined;

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_class_info
   * @property {number} i_book_active A total number of booked visits in the class, including all lists: active and waitlist.
   * @property {number} i_capacity Class capacity.
   * @property {number} i_wait A total number of booked visits in the waitlist.
   */

  /**
   * Class data:<dl>
   *   <dt>int <var>i_book_active</var></dt>
   *   <dd>A total number of booked visits in the class, including all lists: active and waitlist.</dd>
   *   <dt>int <var>i_capacity</var></dt>
   *   <dd>Class capacity.</dd>
   *   <dt>int <var>i_wait</var></dt>
   *   <dd>A total number of booked visits in the waitlist.</dd>
   * </dl>
   *
   * <tt>null</tt> if it isn't class visit.
   *
   * @get result
   * @type {?Wl_Schedule_Page_PageElementModel_a_class_info}
   */
  this.a_class_info = null;

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_staff
   * @property {string} k_staff The staff member key.
   * @property {string} s_family The surname of the staff member.
   * @property {string} s_name The first name of the staff member.
   */

  /**
   * A list of staff members involved in the visit.
   * Each element is an array with the following elements:
   * <dl>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     The staff member key.
   *   </dd>
   *   <dt>
   *     string <var>s_family</var>
   *   </dt>
   *   <dd>
   *     The surname of the staff member.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     The first name of the staff member.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_PageElementModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * The latest date and time for when the visit can be canceled without penalty.
   *
   * @get result
   * @type {string}
   */
  this.dt_cancel = undefined;

  /**
   * The date and time of the visit in UTC.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_global = undefined;

  /**
   * The date and time of the visit in the local time zone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Session date/time in timezone of the location where it takes place.
   *
   * @get result
   * @type {string}
   */
  this.dtl_location = undefined;

  /**
   * The special instructions for the service.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * The scheduled duration of the visit.
   * <tt>0</tt> means that session duration is hidden.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Estimated place of reservation on the waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = undefined;

  /**
   * The note type ID. This will be set to `null` if notes aren't allowed.
   * This is one of the {@link Wl_Visit_Note_Sid_NoteSid} constants.
   *
   * This will be `null` if notes aren't allowed.
   *
   * @get result
   * @type {?number}
   */
  this.id_note = null;

  /**
   * The virtual provider ID. One of the {@link Wl_Virtual_VirtualProviderSid} constants.
   *
   * This will be `null` for non-virtual services.
   *
   * @get result
   * @type {?number}
   */
  this.id_virtual_provider = null;

  /**
   * The visit type ID. One of the {@link Wl_Visit_VisitSid} constants.
   *
   * This will be `null` if not loaded yet.
   *
   * @get result
   * @type {number}
   */
  this.id_visit = undefined;

  /**
   * If `true`, then this visit is ready to be checked in. If `false`, then this visit can't be checked in.
   *
   * @get result
   * @type {boolean}
   */
  this.is_checkin = undefined;

  /**
   * This will be `true` if clients can cancel the session. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_enable_client_cancel = undefined;

  /**
   * If `true`, then this visit is a part of a larger event. If `false`, then this visit is an individual session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * <tt>true</tt> - service is in progress; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_in_progress = undefined;

  /**
   * <tt>true</tt> - service is virtual; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * The appointment key.
   * This will be set only if the visit is an appointment. If the visit is a class or event, this will be `null`.
   *
   * @get result
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * Key of the business to which the visit belongs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The class key. This will be set only if the visit is a class or an event.
   * If the visit is an appointment, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.k_class = undefined;

  /**
   * The class period key. This will be set only if the visit is a class or an event.
   * If the visit is an appointment, this will be `null`.
   *
   * @get result
   * @type {string}
   */
  this.k_class_period = undefined;

  /**
   * The location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Session key.
   *
   * @get result
   * @type {*}
   */
  this.k_service = undefined;

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * The name of class or service.
   *
   * @get result
   * @type {string}
   */
  this.s_title = undefined;

  /**
   * Location title.
   *
   * @get result
   * @type {string}
   */
  this.text_location = undefined;

  /**
   * Room where session takes place.
   *
   * @get result
   * @type {string}
   */
  this.text_room = undefined;

  /**
   * Timezone abbreviation.
   *
   * @get result
   * @type {string}
   */
  this.text_timezone = undefined;

  /**
   * The user key.
   *
   * @get result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * Url to wait page is the beginning of an online service.
   *
   * @get result
   * @type {string}
   */
  this.url_virtual_join = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Page_PageElementModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Page_PageElementModel.prototype.config=function()
{
  return {"a_field": {"a_appointment_visit_info": {"get": {"result": true}},"a_asset": {"get": {"result": true}},"a_class_info": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"dt_cancel": {"get": {"result": true}},"dt_date_global": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"dtl_location": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_note": {"get": {"result": true}},"id_virtual_provider": {"get": {"result": true}},"id_visit": {"get": {"result": true}},"is_checkin": {"get": {"result": true}},"is_enable_client_cancel": {"get": {"result": true}},"is_event": {"get": {"result": true}},"is_in_progress": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_appointment": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"result": true}},"k_class_period": {"get": {"result": true}},"k_location": {"get": {"result": true}},"k_service": {"get": {"result": true}},"k_visit": {"get": {"get": true}},"s_title": {"get": {"result": true}},"text_location": {"get": {"result": true}},"text_room": {"get": {"result": true}},"text_timezone": {"get": {"result": true}},"uid": {"get": {"result": true}},"url_virtual_join": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_PageElementModel.instanceGet
 * @param {string} k_business Key of the business to which the visit belongs.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Schedule_Page_PageElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */