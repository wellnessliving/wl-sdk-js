/**
 * An endpoint that selects assets for a booking.
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
   * The keys of a user's activities.
   * This won't be empty only if a session was booked during this step.
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
   * @property {*} dl_end Deprecated, use `dt_from` and `dt_to` instead!
   * @property {*} dt_from Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} dt_to Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} i_count The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {*} i_occurrence Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead!
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>int[] <var>a_day</var></dt>
   *   <dd>
   *     The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   *     Should be passed for any type of repetition.
   *   </dd>
   *   <dt>int[] <var>a_week</var></dt>
   *   <dd>Deprecated, use `a_day` instead!</dd>
   *   <dt>string [<var>dl_end</var>]</dt>
   *   <dd>Deprecated, use `dt_from` and `dt_to` instead!</dd>
   *   <dt>
   *     string [<var>dt_from</var>]
   *   </dt>
   *   <dd>
   *     Date to start recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *     string [<var>dt_to</var>]
   *   </dt>
   *   <dd>
   *     Date to complete recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *      int [<var>i_count</var>]
   *    </dt>
   *    <dd>
   *      The number of occurrences after which the appointment's repeat cycle stops.
   *      Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *      Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   *    </dd>
   *   <dt>int <var>i_duration</var></dt>
   *   <dd>Count of days\weeks\months between recurring bookings.</dd>
   *   <dt>int [<var>i_occurrence</var>]</dt>
   *   <dd>Deprecated, use `i_count` instead!</dd>
   *   <dt>int <var>i_period</var></dt>
   *   <dd>Deprecated, use `i_duration` instead!</dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *     Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   *   </dd>
   *   <dt>int <var>id_period</var></dt>
   *   <dd>Deprecated, use `id_duration` instead!</dd>
   *   <dt>int <var>id_repeat_end</var></dt>
   *   <dd>Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.</dd>
   * </dl>
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Resource_ResourceModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list
   * @property {{}} a_image The asset's image data. See {@link RsResourceImage::data()} for details.
   * @property {number} i_index The asset number. Actual for assets with a quantity more than <tt>1</tt>.
   * @property {boolean} is_current This will be <tt>true</tt> if this asset is selected by a client. Otherwise, this will be <tt>false</tt>.
   * @property {string} k_resource The key of the asset in the database.
   * @property {string} s_resource The title of the asset.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all
   * @property {{}} a_client A list of clients who have already occupied assets for this session.
   * First level keys refer to asset keys, and second level keys refer to asset numbers.
   * For example, if you want to check if the 10th asset with key '125' is free,
   * you have to check if <tt>a_client['125']['10']</tt> is empty.
   * @property {Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list[]} a_resource_list A list of available assets. Every element has next keys:
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
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_all[]}
   */
  this.a_resource_all = [];

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_select
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
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_select}
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Resource_ResourceModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Resource_ResourceModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource_all": {"get": {"result": true}},"a_resource_select": {"post": {"post": true}},"a_session": {"get": {"get": true},"post": {"get": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Resource_ResourceModel.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {string} uid The key of the user making the booking.
 * @param {{}} a_session The selected sessions. This won't be empty for session mode.
 * <b>Keys</b> — The class period keys. <b>Values</b> — A list of dates/times when the session occurred in MySQL format and in GMT.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Resource_ResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */