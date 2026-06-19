/**
 * Selects assets for making a booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Book_Process_Resource_Resource54Model} instead.
 */
function Wl_Book_Process_Resource_ResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,a_session,id_mode";

  /**
   * The keys of a user's activity.
   * This won't be empty only if the session(s) was booked at this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   * Should be passed for any type of repetition.
   * @property {number[]} a_week Deprecated, use `a_day` instead!
   * @property {string} [dl_end] Deprecated, use `dt_from` and `dt_to` instead!
   * @property {string} [dt_from] Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {string} [dt_to] Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {number} [i_count] The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} [i_occurrence] Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead! One of {@link ADurationSid} constants.
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   *
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Resource_ResourceModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list_a_image
   * @property {number} [i_angle] Angle of shape rotation. Set only when `sid_image` equals 'shape'.
   * @property {number} i_height Height of the image in pixels.
   * @property {number} i_width Width of the image in pixels.
   * @property {boolean} is_empty `true` if no image was uploaded, `false` otherwise.
   * @property {string} sid_image Image kind. One of {@link Wl_Resource_Image_ImageSid} string constants.
   * @property {string} [sid_image_icon] Icon name. One of {@link Wl_Resource_Image_ImageIconSid} string constants.
   * Set only when `sid_image` equals 'icon'.
   * @property {string} [sid_image_shape] Shape name. One of {@link Wl_Resource_Image_ImageShapeSid} string constants.
   * Set only when `sid_image` equals 'shape'.
   * @property {string} url Thumbnail image URL.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list
   * @property {number[][][]} a_class_period List of resources available for booking sessions.
   *   The field structure is `[k_class_period][dtu_session]['a_available']`.
   *   Contains indexes of resource available for each session.
   * @property {Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list_a_image} a_image Asset image data.
   *
   * @property {number} i_index The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   * @property {number} i_quantity Total number of the asset spots.
   * @property {number} i_use Number of already used asset units.
   * @property {boolean} is_current City for the off-site location.
   * @property {string} k_city <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   * @property {string} k_resource The key of the asset in database.
   *
   * @property {string} s_resource The title of the asset.
   * @property {string} text_address Address for the off-site location.
   * @property {string} text_guide Additional address tips for the off-site location.
   * @property {string} text_postal Postal code for the off-site location.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all
   * @property {boolean[][]} a_client A list of clients who have already occupied assets for this session.
   * 1st level keys are asset keys.
   * 2nd level keys are asset index numbers (starting from 1).
   * Values are `true` if the asset spot is occupied.
   * For example, to check if asset spot 10 with key '125' is occupied,
   * check `a_client['125']['10']`.
   * @property {Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list[]} a_resource_list A list of available assets. Every element has next keys:
   * @property {boolean} has_current <tt>true</tt> - has current resource in the list of available assets; <tt>false</tt> - otherwise.
   * @property {number} id_category Type of the asset category. One of {@link Wl\Resource\ResourceCategoryEnum} constants.
   * @property {boolean} is_client_select <tt>true</tt> - the client selected the resource from the current group; <tt>false</tt> otherwise.
   * @property {boolean} is_select <tt>true</tt> - has selected resources; <tt>false</tt> - otherwise.
   * @property {boolean} is_share <tt>true</tt> resources in this category don't belong to certain users, but to the entire session.
   * <tt>false</tt> belong to specific users.
   * @property {string} k_resource_layout The key of the asset layout.
   * @property {string} k_resource_type The key of the asset category.
   * @property {string} s_resource_type The title of the asset category.
   */

  /**
   * A list of asset categories which are available for specified session. Every element has next keys:
   *
   * @get result
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_all[]}
   */
  this.a_resource_all = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_select
   * @property {number} i_index The asset number. Applies only for assets with a quantity greater than <tt>1</tt>.
   * @property {string} k_resource The asset key.
   */

  /**
   * The selected assets. Every element has the next keys:
   *
   * @post post
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_select}
   */
  this.a_resource_select = [];

  /**
   * The selected sessions.
   * Only makes sense for session events.
   * Optional parameter for GET request: if not passed, all available sessions will be used.
   *
   * Keys are class period keys.
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_session = [];

  /**
   * The selected sessions on the wait list that are unpaid.
   *
   * Keys are class period keys.
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @post post
   * @type {string[]}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of the bookings that have been made.
   * Not empty only if session(s) was booked on this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * Determines whether the class/event can be booked at this step or not.
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` to book unpaid.
   * `false` otherwise.
   *
   * Allows booking unpaid when client has a login promotion that can be used to pay for the service.
   * Allowed in {@link Wl_Mode_ModeSid.WIDGET} mode only.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book_unpaid = false;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag, and the check will still be performed.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` - the next steps of the booking wizard are required (for example, to purchase something to book the selected session).
   * `false` - no further booking steps are required.
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = false;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Login promotion to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * `true` to show "book for" option in booking wizard. `false` for default behavior.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The client key for which the booking is being made.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Resource_ResourceModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Resource_ResourceModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource_all": {"get": {"result": true}},"a_resource_select": {"post": {"post": true}},"a_session": {"get": {"get": true},"post": {"get": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Resource_ResourceModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid The client key for which the booking is being made.
 * @param {string[]} a_session The selected sessions. Only makes sense for session events. Optional parameter for GET request: if not passed, all available sessions will be used. Keys are class period keys. Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Resource_ResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */