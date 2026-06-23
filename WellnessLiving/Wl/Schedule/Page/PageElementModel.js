/**
 * Retrieves information about one element of schedule.
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
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {boolean} is_confirmed `true` means that appointment was requested and confirmed by the staff.
   * @property {boolean} is_deny `true` means that appointment was requested and denied by the staff.
   * @property {boolean} is_notify_request_accept `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   * @property {boolean} is_notify_request_deny `true` means that the client will receive a notification, if appointment will be denied by the staff.
   * @property {boolean} is_request `true` means that appointment was requested, but not confirmed by the staff.
   */

  /**
   * Additional visit information about this appointment. Empty array if it's not an appointment.
   *
   * @get result
   * @type {Wl_Schedule_Page_PageElementModel_a_appointment_visit_info}
   */
  this.a_appointment_visit_info = undefined;

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} s_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.
   */

  /**
   * List of assets: .
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
   * Class data:
   *
   * `null` if it isn't class visit.
   *
   * @get result
   * @type {?Wl_Schedule_Page_PageElementModel_a_class_info}
   */
  this.a_class_info = null;

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_resource_image_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_resource_image
   * @property {Wl_Schedule_Page_PageElementModel_a_resource_image_a_image} a_image Image data.
   * @property {number} i_angle Angle of shape rotation. Is set only if `sid_image` equals to `shape`.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_resource Resource key.
   * @property {string} sid_image Image kind. String representation of one of {@link Wl_Resource_Image_ImageSid} constants.
   * @property {string} sid_image_icon Icon name.String representation of one of {@link Wl_Resource_Image_ImageIconSid} constants. Is set only if `sid_image` equals to `image`.
   * @property {string} sid_image_shape Shape name. String representation of one of {@link Wl_Resource_Image_ImageShapeSid} constants. Is set only if `sid_image` equals to `shape`.
   * @property {string} url Path to image.
   */

  /**
   * Resource image data.
   *
   * `null` for all services except resources.
   *
   * @get result
   * @type {?Wl_Schedule_Page_PageElementModel_a_resource_image}
   */
  this.a_resource_image = null;

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_staff
   * @property {string} k_staff The staff member key.
   * @property {string} s_family The surname of the staff member.
   * @property {string} s_name The first name of the staff member.
   */

  /**
   * A list of staff members involved in the visit.
   * Each element is an array with the following elements:
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
   * The description of the service.
   *
   * @get result
   * @type {string}
   */
  this.html_description = undefined;

  /**
   * The special instructions for the service.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * Capacity of the service.
   * `null` indicates that the capacity is not set.
   *
   * @get result
   * @type {?number}
   */
  this.i_capacity = null;

  /**
   * The scheduled duration of the visit.
   * `0` means that session duration is hidden.
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
   * A list of types of visit note.
   *
   * Values:
   * - 2 (`QUICK`): The usual quick accompanying note for the customer visit.
   * - 1 (`SOAP`): Accompanying medical note for the customer visit.
   *
   * @get result
   * @type {number}
   */
  this.id_note = undefined;

  /**
   * List of possible value of virtual integrations.
   *
   * Last used ID: 2.
   *
   * Values:
   * - 2 (`NON_INTEGRATED`): Virtual integration non implemented.
   * - 1 (`ZOOM`): Virtual Zoom service integration.
   *
   * @get result
   * @type {?number}
   */
  this.id_virtual_provider = null;

  /**
   * Possible states of the visit: book, attended, cancelled, etc.
   *
   * Last used ID: 8.
   *
   * Values:
   * - 3 (`ATTEND`): Client has attended the session.
   * - 1 (`BOOK`): Active reservation means that user is going to attend the session.
   * - 6 (`CANCEL`): Client has cancelled the reservation in time and without penalty.
   * - 4 (`PENALTY`): Client has cancelled his reservation too late.
   * - 7 (`PENDING`): This state means that visit is registered, but it is unknown is it {@link Wl_Visit_VisitSid}
   *   or {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid} but definitely one of these states.
   *
   *   The real type of this visit must be set manually by staff.
   *   Status can be changed automatically to {@link Wl_Visit_VisitSid}.
   * - 8 (`REMOVE`): Visit was removed.
   *   Visits with this status are not shown anywhere in system, but still are saved in database.
   * - 5 (`TRUANCY`): Client has missed the session without cancellation.
   * - 2 (`WAIT`): Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation.
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
   * `true` - service is in progress; `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_in_progress = undefined;

  /**
   * `true` - service is virtual; `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * The appointment key.
   * This will be set only if the visit is an appointment.
   *
   * If the visit is a class or event, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * Key of the business to which the visit belongs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class key. This will be set only if the visit is a class or an event.
   * If the visit is an appointment, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.k_class = null;

  /**
   * The class period key. This will be set only if the visit is a class or an event.
   *
   * If the visit is an appointment, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * The location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Resource key.
   *
   * @get result
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Session key.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * Visit key.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "";

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
   * URL of the image representing the service or resource.
   *
   * @get result
   * @type {string}
   */
  this.url_image = undefined;

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
  return {"a_field":{"a_appointment_visit_info":{"get":{"result":true}},"a_asset":{"get":{"result":true}},"a_class_info":{"get":{"result":true}},"a_resource_image":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"dt_cancel":{"get":{"result":true}},"dt_date_global":{"get":{"result":true}},"dt_date_local":{"get":{"result":true}},"dtl_location":{"get":{"result":true}},"html_description":{"get":{"result":true}},"html_special":{"get":{"result":true}},"i_capacity":{"get":{"result":true}},"i_duration":{"get":{"result":true}},"i_wait_spot":{"get":{"result":true}},"id_note":{"get":{"result":true}},"id_virtual_provider":{"get":{"result":true}},"id_visit":{"get":{"result":true}},"is_checkin":{"get":{"result":true}},"is_enable_client_cancel":{"get":{"result":true}},"is_event":{"get":{"result":true}},"is_in_progress":{"get":{"result":true}},"is_virtual":{"get":{"result":true}},"k_appointment":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"result":true}},"k_class_period":{"get":{"result":true}},"k_location":{"get":{"result":true}},"k_resource":{"get":{"result":true}},"k_service":{"get":{"result":true}},"k_visit":{"get":{"get":true}},"s_title":{"get":{"result":true}},"text_location":{"get":{"result":true}},"text_room":{"get":{"result":true}},"text_timezone":{"get":{"result":true}},"uid":{"get":{"result":true}},"url_image":{"get":{"result":true}},"url_virtual_join":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_PageElementModel.instanceGet
 * @param {string} k_business Key of the business to which the visit belongs.
 * @param {string} k_visit Visit key.
 * @returns {Wl_Schedule_Page_PageElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about one element of schedule.
 *
 * Returns full details for a single visit, including staff, location, timing, assigned assets,
 * virtual join URL, and class-specific or appointment-specific information. Used to render the
 * visit detail page in the client's schedule view.
 *
 * @function
 * @name Wl_Schedule_Page_PageElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
