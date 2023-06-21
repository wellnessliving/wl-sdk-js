/**
 * An endpoint that gets information about a specified class session.
 *
 * A class listing can be retrieved from the {@link Wl_Schedule_ClassList_ClassListModel} endpoint.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ClassView_ClassViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_class_period,uid";

  /**
   * Asset list data.
   *
   * @get result
   * @post result
   * @type {?{}[]}
   */
  this.a_asset = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_class_a_image
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {boolean} is_empty This will be `true` if there's no image and a default is used.
   * @property {string} s_url The URL link to the image.
   */
  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_class
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_class_a_image} a_image Information describing a class image.<dl>
   * <dt>int <tt>i_height</tt></dt>
   * <dd>The image height.</dd>
   * <dt>int <tt>i_width</tt></dt>
   * <dd>The image width.</dd>
   * <dt>bool <tt>is_empty</tt></dt>
   * <dd>This will be `true` if there's no image and a default is used.</dd>
   * <dt>string <tt>s_url</tt></dt>
   * <dd>The URL link to the image.</dd>
   *   </dl>
   * @property {number[]} a_tag A list of tags that can be used to describe the class in the catalog.
   * @property {boolean} can_book Determines whether the current client can book this class.
   * @property {string} dt_date_global The session date/time in UTC.
   * @property {string} dt_date_local The start date in the local time zone.
   * @property {string} html_deny_reason The reason why the client can't book this class.
   * This will be set only if <tt>can_book</tt> is `false`.
   * @property {string} html_description The class description.
   * @property {string} html_special The special instructions.
   * @property {?number} i_age_from The lower bound of age permitted in the class. This will be `null` there's no age limit set.
   * @property {?number} i_age_to The upper bound of age permitted in the class. This will be `null` there's no age limit.
   * @property {number} i_book The count of booked visits.
   * @property {number} i_capacity The class capacity.
   * @property {number} i_duration The class duration in minutes.
   * @property {boolean} is_book This will be `true` if the current class was booked by the current client.
   * @property {boolean} is_cancel This will be `true` if the class period was canceled. Otherwise, this will be `false`.
   * @property {boolean} is_promotion_only This will be `true` if this class can only be paid for using a Purchase Option. Otherwise, this will be `false`.
   * @property {boolean} is_wait_list This will be `true` if user is only on the wait list. Otherwise, this will be `false`.
   * @property {boolean} is_wait_list_enabled This will be `true` if the wait list is enabled for this class. Otherwise, this will be `false`.
   * @property {string} m_price The session price.
   * @property {string} s_duration The class duration in a human readable format.
   * @property {string} s_title The class name.
   * @property {string} text_room The class room.
   */

  /**
   * Detailed information about the class. When loaded, it contains the following fields:
   * <dl>
   *   <dt>array <var>a_image</var></dt>
   *   <dd>Information describing a class image.<dl>
   *     <dt>int <var>i_height</var></dt>
   *     <dd>The image height.</dd>
   *     <dt>int <var>i_width</var></dt>
   *     <dd>The image width.</dd>
   *     <dt>bool <var>is_empty</var></dt>
   *     <dd>This will be `true` if there's no image and a default is used.</dd>
   *     <dt>string <var>s_url</var></dt>
   *     <dd>The URL link to the image.</dd>
   *   </dl></dd>
   *   <dt>int[] <var>a_tag</var></dt>
   *   <dd>A list of tags that can be used to describe the class in the catalog.</dd>
   *   <dt>bool <var>can_book</var></dt>
   *   <dd>Determines whether the current client can book this class.</dd>
   *   <dt>string <var>dt_date_global</var></dt>
   *   <dd>The session date/time in UTC.</dd>
   *   <dt>string <var>dt_date_local</var></dt>
   *   <dd>The start date in the local time zone.</dd>
   *   <dt>string <var>html_deny_reason</var></dt>
   *   <dd>The reason why the client can't book this class.
   *     This will be set only if <var>can_book</var> is `false`.</dd>
   *   <dt>string <var>html_description</var></dt>
   *   <dd>The class description.</dd>
   *   <dt>string <var>html_special</var></dt>
   *   <dd>The special instructions.</dd>
   *   <dt>int|null <var>i_age_from</var></dt>
   *   <dd>The lower bound of age permitted in the class. This will be `null` there's no age limit set.</dd>
   *   <dt>int|null <var>i_age_to</var></dt>
   *   <dd>The upper bound of age permitted in the class. This will be `null` there's no age limit.</dd>
   *   <dt>int <var>i_book</var></dt>
   *   <dd>The count of booked visits.</dd>
   *   <dt>int <var>i_capacity</var></dt>
   *   <dd>The class capacity.</dd>
   *   <dt>int <var>i_duration</var></dt>
   *   <dd>The class duration in minutes.</dd>
   *   <dt>bool <var>is_book</var></dt>
   *   <dd>This will be `true` if the current class was booked by the current client.</dd>
   *   <dt>bool <var>is_cancel</var></dt>
   *   <dd>This will be `true` if the class period was canceled. Otherwise, this will be `false`.</dd>
   *   <dt>bool <var>is_promotion_only</var></dt>
   *   <dd>This will be `true` if this class can only be paid for using a Purchase Option. Otherwise, this will be `false`.</dd>
   *   <dt>bool <var>is_wait_list</var></dt>
   *   <dd>This will be `true` if user is only on the wait list. Otherwise, this will be `false`.</dd>
   *   <dt>bool <var>is_wait_list_enabled</var></dt>
   *   <dd>This will be `true` if the wait list is enabled for this class. Otherwise, this will be `false`.</dd>
   *   <dt>string <var>m_price</var></dt>
   *   <dd>The session price.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The class duration in a human readable format.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The class name.</dd>
   *   <dt>string <var>text_room</var></dt>
   *   <dd>The class room.</dd>
   * </dl>
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_class}
   */
  this.a_class = null;

  /**
   * Location data.
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?{}}
   */
  this.a_location = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_request
   * @property {string} dt_date The date/time of the session in UTC.
   * @property {string} k_class_period The session key.
   */

  /**
   * A list of sessions to get information for. Every element has the following keys:
   * <dl>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>The date/time of the session in UTC.</dd>
   *   <dt>string <var>k_class_period</var></dt>
   *   <dd>The session key.</dd>
   * </dl>
   *
   * `null` if requesting a single session.
   *
   * @get get
   * @post get
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_session_request[]}
   */
  this.a_session_request = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result
   * @property {{}} a_class Class information.
   * @property {{}} a_location Location information.
   * @property {{}} a_staff Staff member information.
   * @property {{}} dt_date The session date/time in UTC.
   * @property {{}} k_class_period The session key.
   */

  /**
   * A list of sessions with information, received in a multiple session mode.
   * Every element has the following keys:
   * <dl>
   *   <dt>array <var>a_class</var></dt>
   *   <dd>Class information.</dd>
   *   <dt>array <var>a_location</var></dt>
   *   <dd>Location information.</dd>
   *   <dt>array <var>a_staff</var></dt>
   *   <dd>Staff member information.</dd>
   *   <dt>array <var>dt_date</var></dt>
   *   <dd>The session date/time in UTC.</dd>
   *   <dt>array <var>k_class_period</var></dt>
   *   <dd>The session key.</dd>
   * </dl>
   *
   * @get result
   * @post result
   * @type {Wl_Schedule_ClassView_ClassViewModel_a_session_result[]}
   */
  this.a_session_result = undefined;

  /**
   * Staff member list data.
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?{}[]}
   */
  this.a_staff = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_visits_required
   * @property {number} i_count The number of visits.
   * @property {boolean} is_event This will be `true` if this is an event. Otherwise, this will be `false` if this is a class.
   * @property {string} k_class The key of the class or event.
   * @property {string} text_title The name of the class or event.
   */

  /**
   * A list of classes and events that clients should visit before this one.
   *
   * <dl>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>The number of visits.</dd>
   *   <dt>bool <var>is_event</var></dt>
   *   <dd>This will be `true` if this is an event. Otherwise, this will be `false` if this is a class.</dd>
   *   <dt>string <var>k_class</var></dt>
   *   <dd>The key of the class or event.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The name of the class or event.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ClassView_ClassViewModel_a_visits_required[]}
   */
  this.a_visits_required = [];

  /**
   * The date/time of the session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The class period key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * A list of sessions to get information for.
   * A serialized array. See {@link Wl_Schedule_ClassView_ClassViewModel.a_session_request} for the array structure.
   * Serialization and sending by POST is necessary to send big lists.
   *
   * @post post
   * @type {string}
   */
  this.s_session_request = "";

  /**
   * The user key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassView_ClassViewModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassView_ClassViewModel.prototype.config=function()
{
  return {"a_field": {"a_asset": {"get": {"result": true},"post": {"result": true}},"a_class": {"get": {"result": true},"post": {"result": true}},"a_location": {"get": {"result": true},"post": {"result": true}},"a_session_request": {"get": {"get": true},"post": {"get": true}},"a_session_result": {"get": {"result": true},"post": {"result": true}},"a_staff": {"get": {"result": true},"post": {"result": true}},"a_visits_required": {"get": {"result": true}},"dt_date": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"s_session_request": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ClassView_ClassViewModel.instanceGet
 * @param {string} dt_date The date/time of the session.
 * @param {string} k_class_period The class period key.
 * @param {string} uid The user key.
 * @returns {Wl_Schedule_ClassView_ClassViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */