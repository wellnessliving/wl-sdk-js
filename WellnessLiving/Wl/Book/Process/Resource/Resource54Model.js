/**
 * An endpoint that selects assets for a booking.
 *
 * When working with this endpoint, take into account the {@link Wl_Book_Process_ProcessSpaSid.QUIZ} step.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Resource_Resource54Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,json_session,id_mode";

  /**
   * The keys of a user's activities.
   * This won't be empty only if a session was booked during this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_repeat
   * @property {*} a_week The days of week when the appointment repeats. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when appointment's repeat cycle stops. This will be empty if the repeat cycle
   * doesn't stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency at which the appointment repeats.
   * @property {number} id_period The measurement unit of `i_period`. One of {@link ADurationSid} constants.
   * @property {*} is_month `true` if the appointment repeats monthly on the same date.
   * `false` if the appointment repeats monthly on the same day of the week.
   * `null` if the appointment doesn't repeat monthly.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   *     This will be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the appointment's repeat cycle doesn't stop
   *     at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment's repeat cycle.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` — the appointment repeats monthly on the same date.
   *     `false` — the appointment doesn't repeat monthly on the same day of the week.
   *     `null` — the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if this isn't a recurring booking.
   *
   * @post post
   * @type {?Wl_Book_Process_Resource_Resource54Model_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_resource_all_a_resource_list
   * @property {{}} a_image The asset's image data. See {@link RsResourceImage::data()} for details.
   * @property {number} i_index The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   * @property {boolean} is_current This will be <tt>true</tt> if this asset is selected by a client. Otherwise, this will be <tt>false</tt>.
   * @property {string} k_resource The key of the asset in the database.
   * @property {string} s_resource The title of the asset.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_resource_all
   * @property {{}} a_client A list of clients who have already occupied assets for this session.
   * First level keys refer to asset keys, and second level keys refer to asset numbers.
   * For example, if you want to check if the 10th asset with key '125' is free,
   * you have to check if <tt>a_client['125']['10']</tt> is empty.
   * @property {Wl_Book_Process_Resource_Resource54Model_a_resource_all_a_resource_list[]} a_resource_list A list of available assets.
   * Every element has the next keys:
   * <dl>
   *   <dt>
   *     array <tt>a_image</tt>
   *   </dt>
   *   <dd>
   *     The asset's image data. See {@link RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     int <tt>i_index</tt>
   *   </dt>
   *   <dd>
   *     The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   *   </dd>
   *   <dt>
   *     bool <tt>is_current</tt>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if this asset is selected by a client. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     The key of the asset in the database.
   *   </dd>
   *   <dt>
   *     string <tt>s_resource</tt>
   *   </dt>
   *   <dd>
   *     The title of the asset.
   *   </dd>
   * </dl>
   * @property {boolean} has_current This will be <tt>true</tt> if the current resource is in the list of available assets.
   * Otherwise, this will be <tt>false</tt>.
   * @property {boolean} is_client_select This will be <tt>true</tt> if the client selected the resource from the current group.
   * Otherwise, this will be <tt>false</tt>.
   * @property {boolean} is_select This will be <tt>true</tt> if the resource(s) is selected. Otherwise, this will be <tt>false</tt>.
   * @property {boolean} is_share This will be <tt>true</tt> if resources in this category don't belong to certain users, but to the entire session.
   * Otherwise, this will be <tt>false</tt> if resources belong to specific users.
   * @property {string} k_resource_layout The key of the asset layout.
   * @property {string} k_resource_type The key of the asset category.
   * @property {string} s_resource_type The title of the asset category.
   */

  /**
   * A list of asset categories that are available for the specified session. Every element has the next keys:
   * <dl>
   *   <dt>
   *     array <var>a_client</var>
   *   </dt>
   *   <dd>
   *     A list of clients who have already occupied assets for this session.
   *     First level keys refer to asset keys, and second level keys refer to asset numbers.
   *     For example, if you want to check if the 10th asset with key '125' is free,
   *     you have to check if <tt>a_client['125']['10']</tt> is empty.
   *   </dd>
   *   <dt>
   *     array[] <var>a_resource_list</var>
   *   </dt>
   *   <dd>
   *     A list of available assets. Every element has the next keys:
   *     <dl>
   *       <dt>
   *         array <var>a_image</var>
   *       </dt>
   *       <dd>
   *         The asset's image data. See {@link RsResourceImage::data()} for details.
   *       </dd>
   *       <dt>
   *         int <var>i_index</var>
   *       </dt>
   *       <dd>
   *         The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   *       </dd>
   *       <dt>
   *         bool <var>is_current</var>
   *       </dt>
   *       <dd>
   *         This will be <tt>true</tt> if this asset is selected by a client. Otherwise, this will be <tt>false</tt>.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         The key of the asset in the database.
   *       </dd>
   *       <dt>
   *         string <var>s_resource</var>
   *       </dt>
   *       <dd>
   *         The title of the asset.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>has_current</var>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the current resource is in the list of available assets.
   *     Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_client_select</var>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the client selected the resource from the current group.
   *     Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the resource(s) is selected. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_share</var>
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if resources in this category don't belong to certain users, but to the entire session.
   *     Otherwise, this will be <tt>false</tt> if resources belong to specific users.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_layout</var>
   *   </dt>
   *   <dd>
   *     The key of the asset layout.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_type</var>
   *   </dt>
   *   <dd>
   *     The key of the asset category.
   *   </dd>
   *   <dt>
   *     string <var>s_resource_type</var>
   *   </dt>
   *   <dd>
   *     The title of the asset category.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Resource_Resource54Model_a_resource_all[]}
   */
  this.a_resource_all = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_resource_select
   * @property {number} i_index The asset number. Actual for assets with a quantity greater <tt>1</tt>.
   * @property {string} k_resource The asset key.
   */

  /**
   * The selected assets. Every element has the next keys:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The asset number. Actual for assets with a quantity greater <tt>1</tt>.</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Resource_Resource54Model_a_resource_select}
   */
  this.a_resource_select = [];

  /**
   * The selected sessions.
   * This won't be empty only for session mode.
   *
   * <b>Keys</b> — The class period keys.
   *
   * <b>Values</b> — A list of dates/times when the session occurred in MySQL format and in GMT.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * <b>Keys</b> — The session IDs.
   *
   * <b>Values</b> — The index arrays of dates/times when the session occurred in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of the bookings that have been made.
   * Not empty only if the session(s) was booked at this step.
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
   * The date/time the session is booked for.
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
   * `true` — the user selected 'Pay later'.
   *
   * `false` — the user selected 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * `true` — the next steps of the booking wizard are needed (for example, to purchase something to book the selected session).
   *
   * `false` — no next steps are needed (all that was needed was already purchased).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = false;

  /**
   * The selected sessions.
   * This won't be empty only for session mode.
   *
   * Fields refer the IDs of sessions in the database.
   *
   * Values refer to arrays of dates/times when the session occurred in MySQL format and in GMT.
   *
   * The data is serialized with JSON.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.json_session = "";

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The login promotion to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The session pass to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The key of the user making the booking.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Resource_Resource54Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Resource_Resource54Model.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource_all": {"get": {"result": true}},"a_resource_select": {"post": {"post": true}},"a_session": {"get": {"get": true},"post": {"get": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"json_session": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Resource_Resource54Model.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {string} uid The key of the user making the booking.
 * @param {string} json_session Values refer to arrays of dates/times when the session occurred in MySQL format and in GMT.
 * The data is serialized with JSON.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Resource_Resource54Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */