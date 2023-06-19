/**
 * Select assets for making a booking.
 *
 * Take into account {@link Wl_Book_Process_ProcessSpaSid.QUIZ} step.
 *
 * This model is generated automatically based on API.
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
   * The keys of a user's activity.
   * Not empty only if session(s) was booked on this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   * @property {*} is_month `true` if appointment must repeat monthly at the same date.
   * `false` if appointment must repeat monthly at the same week day.
   * `null` if appointment must not repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` if appointment must repeat monthly at the same date.
   *     `false` if appointment must repeat monthly at the same week day.
   *     `null` if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * `null` if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Resource_Resource54Model_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_resource_all_a_resource_list
   * @property {{}} a_image Asset image data. See {@link RsResourceImage::data()} for details.
   * @property {number} i_index The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   * @property {boolean} is_current <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   * @property {string} k_resource The key of the asset in database.
   * @property {string} s_resource The title of the asset.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_Resource54Model_a_resource_all
   * @property {{}} a_client A list of clients who have already occupied assets for this session.
   * 1st level keys - asset keys; 2nd level keys - asset number.
   * For example, if you want to check if 10th asset with key '125' is free,
   * you have to check if <tt>a_client['125']['10']</tt> is empty.
   * @property {Wl_Book_Process_Resource_Resource54Model_a_resource_all_a_resource_list[]} a_resource_list A list of available assets. Every element has next keys:
   * <dl>
   *   <dt>
   *     array <tt>a_image</tt>
   *   </dt>
   *   <dd>
   *     Asset image data. See {@link RsResourceImage::data()} for details.
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
   *     <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     The key of the asset in database.
   *   </dd>
   *   <dt>
   *     string <tt>s_resource</tt>
   *   </dt>
   *   <dd>
   *     The title of the asset.
   *   </dd>
   * </dl>
   * @property {boolean} has_current <tt>true</tt> - has current resource in the list of available assets; <tt>false</tt> - otherwise.
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
   * <dl>
   *   <dt>
   *     array <var>a_client</var>
   *   </dt>
   *   <dd>
   *     A list of clients who have already occupied assets for this session.
   *     1st level keys - asset keys; 2nd level keys - asset number.
   *     For example, if you want to check if 10th asset with key '125' is free,
   *     you have to check if <tt>a_client['125']['10']</tt> is empty.
   *   </dd>
   *   <dt>
   *     array[] <var>a_resource_list</var>
   *   </dt>
   *   <dd>
   *     A list of available assets. Every element has next keys:
   *     <dl>
   *       <dt>
   *         array <var>a_image</var>
   *       </dt>
   *       <dd>
   *         Asset image data. See {@link RsResourceImage::data()} for details.
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
   *         <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         The key of the asset in database.
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
   *     <tt>true</tt> - has current resource in the list of available assets; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_client_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - the client selected the resource from the current group; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - has selected resources; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_share</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> resources in this category don't belong to certain users, but to the entire session.
   *     <tt>false</tt> belong to specific users.
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
   * @property {number} i_index The asset number. Actual for assets with quantity greater <tt>1</tt>.
   * @property {string} k_resource The key of the asset.
   */

  /**
   * The selected assets. Every element has the next keys:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The asset number. Actual for assets with quantity greater <tt>1</tt>.</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The key of the asset.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Resource_Resource54Model_a_resource_select}
   */
  this.a_resource_select = [];

  /**
   * The selected sessions.
   * Not empty only for session mode.
   *
   * <b>Keys</b> - The class period keys.
   * <b>Values</b> - List of date/time when the session occurred in MySQL format and in GMT.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys - session IDs.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
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
   * Whether the class/event can be booked at this step or not.
   * External process control flag.
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
   * Mode type. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * <tt>true</tt> if next steps of wizard are needed (for example. to purchase something to book the selected session);
   * <tt>false</tt> if no next steps are needed (all that was needed was already bought).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = false;

  /**
   * Selected sessions.
   * Not empty only for session mode.
   *
   * Fields - IDs of sessions in database.
   * Values - arrays of date/time when session is occurred. In MySQL format. In GMT.
   *
   * Serialized with JSON.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.json_session = "";

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
   * Primary key from {@link  \RsLoginProductSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * Primary key from {@link  \Wl\Session\Pass\Sql}.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * Key of a user who is making a book.
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
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {string} json_session Selected sessions. Not empty only for session mode. Fields - IDs of sessions in database. Values - arrays of date/time when session is occurred. In MySQL format. In GMT. Serialized with JSON.
 * @param {number} id_mode Mode type. One of {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Resource_Resource54Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */