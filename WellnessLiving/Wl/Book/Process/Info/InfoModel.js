/**
 * An endpoint that offers functionality for the class booking wizard on the "Class and Location" page.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Book_Process_Info_Info54Model} instead.
 */
function Wl_Book_Process_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * The days of the week available for recurring booking. One of the {@link ADateWeekSid} constants.
   *
   * This will be `null` if recurring booking isn't available.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_day_available = null;

  /**
   * The keys of users' activity.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_repeat
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
   * @type {?Wl_Book_Process_Info_InfoModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_resource
   * @property {number} i_index The order number of the asset (likely starting from 1).
   * @property {string} k_resource The asset key.
   */

  /**
   * A list of assets being booked. Every element has the next structure:
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The order number of the asset (likely starting from 1).</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The asset key.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Info_InfoModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_session_all
   * @property {string[]} a_staff The list of staff members leading this session.
   * @property {string[]} a_virtual_location A list of virtual locations.
   * @property {string} dt_date The date/time when the session starts in MySQL format and in GMT.
   * @property {*} is_select If <tt>true</tt>, this session should be selected when the page is initialized.
   * Otherwise, this will be <tt>false</tt>.
   * @property {boolean} is_wait If <tt>true</tt>, the client has been added to a wait list.
   * Otherwise, this will be <tt>false</tt> if they've been added to an active list.
   * @property {boolean} is_wait_list_unpaid Allows clients to join the wait list unpaid.
   * @property {string} k_class_period The session key.
   * @property {string} k_location The location key.
   * @property {boolean} m_price The session price.
   * @property {string} s_location The name of the location where the session occurred.
   * @property {string} s_start The date/time when the session starts in a human-readable format, returned
   * in the time zone of the location.
   * @property {string} text_duration A string representation of the session duration.
   * The duration formatting method can be found in {@link Wl_Book_Process_Info_InfoModel._classDurationFormat()}.
   */

  /**
   * A list of all class sessions that can be booked together. Every element has the next structure:
   * <dl>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     The list of staff members leading this session.
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     A list of virtual locations.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time when the session starts in MySQL format and in GMT.
   *   </dd>
   *   <dt>
   *     boolean <var>is_select</var>
   *   </dt>
   *   <dd>
   *     If <tt>true</tt>, this session should be selected when the page is initialized.
   *     Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_wait</var>
   *   </dt>
   *   <dd>
   *     If <tt>true</tt>, the client has been added to a wait list.
   *     Otherwise, this will be <tt>false</tt> if they've been added to an active list.
   *   </dd>
   *   <dt>
   *     bool <var>is_wait_list_unpaid</var>
   *   </dt>
   *   <dd>
   *     Allows clients to join the wait list unpaid.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     The session key.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The location key.
   *   </dd>
   *   <dt>
   *     bool <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The session price.
   *   </dd>
   *   <dt>
   *     string <var>s_location</var>
   *   </dt>
   *   <dd>
   *     The name of the location where the session occurred.
   *   </dd>
   *   <dt>
   *     string <var>s_start</var>
   *   </dt>
   *   <dd>
   *     The date/time when the session starts in a human-readable format, returned in the time zone
   *     of the location.
   *   </dd>
   *   <dt>
   *     string <var>text_duration</var>
   *   </dt>
   *   <dd>
   *     A string representation of the session duration. The duration formatting method can be
   *     found in {@link Wl_Book_Process_Info_InfoModel._classDurationFormat()}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_InfoModel_a_session_all[]}
   */
  this.a_session_all = undefined;

  /**
   * The selected sessions.
   *
   * <b>Keys</b> refer to the class period keys.
   *
   * <b>Values</b> refer to the list of dates/times when the session occurred in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * <b>Keys</b> refer to the session IDs.
   *
   * <b>Values</b> refer to the index arrays of dates/times when session occurred in MySQL format and in GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_staff_a_logo
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} s_url The image URL.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoModel_a_staff
   * @property {Wl_Book_Process_Info_InfoModel_a_staff_a_logo} a_logo The staff member photo:
   * <dl>
   *   <dt>int <tt>i_height</tt></dt>
   *   <dd>The image height.</dd>
   *   <dt>int <tt>i_width</tt></dt>
   *   <dd>The image width.</dd>
   *   <dt>string <tt>s_url</tt></dt>
   *   <dd>The image URL.</dd>
   * </dl>
   * @property {string} s_family The first letter of staff member's surname.
   * @property {string} s_staff The staff member's name.
   * @property {string} uid The UID of the staff member.
   */

  /**
   * The staff member conducting the session. Every element has the next structure:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *     <dd>
   *     The staff member photo:
   *     <dl>
   *       <dt>int <var>i_height</var></dt>
   *       <dd>The image height.</dd>
   *       <dt>int <var>i_width</var></dt>
   *       <dd>The image width.</dd>
   *       <dt>string <var>s_url</var></dt>
   *       <dd>The image URL.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string <var>s_family</var></dt>
   *   <dd>The first letter of staff member's surname.</dd>
   *   <dt>string <var>s_staff</var></dt>
   *   <dd>The staff member's name.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The UID of the staff member.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Info_InfoModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * The keys of the bookings that were made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Determines whether the class/event can be booked at this step or not.
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * The date when this class session's occurrences end.
   *
   * @get result
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * The date/time the session is booked for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The date/time of the booked session in MySQL format and in the location's time zone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * `true` if the price for the individual session should be hidden (the client has an applicable
   * Purchase Option to pay for this booking).
   *
   * `false` if the price must be displayed.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_price = undefined;

  /**
   * The text of the contract to which the user must agree before booking this session.
   * This won't be empty if the business has a contract and the user didn't agree to this contract.
   *
   * @get result
   * @type {string}
   */
  this.html_contract = undefined;

  /**
   * The class duration in a human-readable format.
   *
   * @get result
   * @type {string}
   */
  this.html_duration = undefined;

  /**
   * The special instructions for the class.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * The special instructions preview for the class.
   *
   * @get result
   * @type {string}
   */
  this.html_special_preview = undefined;

  /**
   * The number of available spots.
   *
   * This will be `null` if this information isn't available.
   *
   * @get result
   * @type {?number}
   */
  this.i_available = null;

  /**
   * The number of booked spots.
   *
   * This will be `null` if this information isn't available.
   *
   * @get result
   * @type {?number}
   */
  this.i_book = null;

  /**
   * The duration of the session in minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * The client's estimated reserved spot on the waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = 0;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines whether the user has agreed to the liability release.
   *
   * This will be `true` if the user has agreed. Otherwise, this will be `false` if the user
   * hasn't agreed or the agreement isn't required.
   *
   * @post post
   * @type {boolean}
   */
  this.is_agree = false;

  /**
   * This will be `true` if recurring booking is available. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_repeat_client = undefined;

  /**
   * `true` if the setting for frequency during class recurring booking will be `never end` by default, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_book_repeat_client_no_end_date = undefined;

  /**
   * Determines whether the client must authorize the credit card.
   *
   * @post result
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * Determines whether the class/event can be booked immediately or not.
   *
   * The verification is based on the search for the client's Purchase Options and other features of the class/event.
   * However, it doesn't account for any other mandatory steps that may exist.
   * Their presence will be indicated by the {@link Wl_Book_Process_Info_InfoModel.is_next} flag.
   *
   * @post result
   * @type {boolean}
   */
  this.is_force_book = false;

  /**
   * `true` - the user pressed 'Pay later'.
   *
   * `false` - the user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * This will be `true` if the next steps of the booking wizard are needed (for example, to purchase something to
   * book the selected session).
   *
   * Otherwise, this will be `false` if next steps aren't needed (everything required has already been purchased).
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * `true` - the event can be paid with a Purchase Option only.
   *
   * `false` - the full event purchase and single session purchases are both allowed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_only = undefined;

  /**
   * Determines whether the class can be paid with single session.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_buy = undefined;

  /**
   * Determines whether the full text of the special instructions fits within the preview length or not.
   *
   * @get result
   * @type {boolean}
   */
  this.is_special_preview = false;

  /**
   * This will be `true` if the class is virtual. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The class period location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The login Purchase Option used to book a class.
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
   * The session price.
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * The entire event cost.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total = undefined;

  /**
   * The event price at an early discount.
   *
   * This will be an empty string if there's no discount.
   *
   * @get result
   * @type {string}
   */
  this.m_price_total_early = undefined;

  /**
   * The class title.
   *
   * @get result
   * @type {string}
   */
  this.s_class = undefined;

  /**
   * The location address.
   *
   * @get result
   * @type {string}
   */
  this.s_location_address = undefined;

  /**
   * The location title.
   *
   * @get result
   * @type {string}
   */
  this.s_location_title = undefined;

  /**
   * The user signature.
   *
   * @post post
   * @type {string}
   */
  this.s_signature = "";

  /**
   * The time when the session takes place in the location's time zone, returned in the `hh:mm` format.
   *
   * @get result
   * @type {string}
   */
  this.s_time = undefined;

  /**
   * The room in which the session takes place.
   *
   * @get result
   * @type {string}
   */
  this.text_room = undefined;

  /**
   * A text representation of the list of staff members.
   *
   * This list can be found in {@link Wl_Book_Process_Info_InfoModel.a_staff}.
   *
   * @get result
   * @type {string}
   */
  this.text_staff = undefined;

  /**
   * The time zone abbreviation.
   *
   * @get result
   * @type {string}
   */
  this.text_timezone = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_day_available": {"get": {"result": true}},"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session_all": {"get": {"result": true}},"a_session_select": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_staff": {"get": {"result": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dl_end": {"get": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"dt_date_local": {"get": {"result": true}},"hide_price": {"get": {"result": true}},"html_contract": {"get": {"result": true}},"html_duration": {"get": {"result": true}},"html_special": {"get": {"result": true}},"html_special_preview": {"get": {"result": true}},"i_available": {"get": {"result": true}},"i_book": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_agree": {"post": {"post": true}},"is_book_repeat_client": {"get": {"result": true}},"is_book_repeat_client_no_end_date": {"get": {"result": true}},"is_card_authorize": {"post": {"result": true}},"is_force_book": {"post": {"result": true}},"is_force_pay_later": {"post": {"post": true}},"is_next": {"post": {"result": true}},"is_promotion_only": {"get": {"result": true}},"is_single_buy": {"get": {"result": true}},"is_special_preview": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"m_price": {"get": {"result": true}},"m_price_total": {"get": {"result": true}},"m_price_total_early": {"get": {"result": true}},"s_class": {"get": {"result": true}},"s_location_address": {"get": {"result": true}},"s_location_title": {"get": {"result": true}},"s_signature": {"post": {"post": true}},"s_time": {"get": {"result": true}},"text_room": {"get": {"result": true}},"text_staff": {"get": {"result": true}},"text_timezone": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Info_InfoModel.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {string} uid The key of the user making the booking.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */