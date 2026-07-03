/**
 * Retrieves information about class.
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
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_asset
   * @property {number} i_count Number of sessions.
   * @property {number} i_index Asset index.
   * @property {number} id_category List of resource categories.
   * @property {string} k_city City of the asset, if this is Off-Site Location.
   * @property {string} k_resource Resource key.
   * @property {string} text_address Address of the asset, if this is Off-Site Location.
   * @property {string} text_guide Additional address guidance, if this is Off-Site Location.
   * @property {string} text_index Asset index with '#' prefix.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.
   * @property {string} text_postal Postal code of the asset, if this is Off-Site Location.
   */

  /**
   * Asset list data.
   *
   * @get result
   * @post result
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_asset[]}
   */
  this.a_asset = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_class_a_image
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {boolean} is_empty Whether current image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_class_a_search_tag
   * @property {string} k_search_tag Search tag key.
   * @property {string} text_title Search tag name.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_class
   * @property {string[]} a_class_tab Keys are class key.    Values are class tab key.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_class_a_image} a_image Class image data:
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_class_a_search_tag} a_search_tag List of search tags.
   * @property {number[]} a_tag List of tags.
   * @property {boolean} can_book Whether current client can book class.
   * @property {string} dt_date_global Session date/time in UTC.
   * @property {string} dt_date_local Start date in local time.
   * @property {string} html_deny_reason Reason why client can not book class. Not empty only if `can_book` is `false`.
   * @property {string} html_description Class description.
   * @property {string} html_special Special instructions.
   * @property {?number} i_age_from Age from that class is allowed. `null` if information is not available.
   * @property {?number} i_age_to Age to that class is allowed. `null` if information is not available.
   * @property {number} i_book A total number of booked visits in the class, including all lists: active and waitlist.
   * @property {number} i_book_active A total number of booked active visits in the class.
   * @property {number} i_capacity Class capacity.
   * @property {number} i_duration Class duration. In number of minutes.
   * @property {number} i_visit Number of usages of promotion required to pay for a single class session.
   * @property {?number} i_wait_limit Limit of wait list. `null` if limit is not set.
   * @property {number} id_deny_reason Reasons why the client can't book this class.
   * @property {boolean} is_book Whether current class was booked by current client.
   * @property {boolean} is_book_for_guest Allow clients to book on behalf of a guest. `true` if clients can book on behalf of a guest. `false` otherwise.
   * @property {boolean} is_cancel `true` if class period was cancelled; `false` otherwise.
   * @property {boolean} is_event `true` if it is event; `false` if it is class.
   * @property {boolean} is_promotion_only `true` if this class can be paid with promotion only; `false` otherwise.
   * @property {boolean} is_virtual `true` if class is virtual, `false` otherwise.
   * @property {boolean} is_wait_list `true` if user can take place in wait list only; `false` otherwise.
   * @property {boolean} is_wait_list_enabled `true` if wait list is enabled for class; `false` otherwise.
   * @property {string} k_resource_location Off-site location asset key. Empty if off-site location is not assigned to this class.
   * @property {string} m_price Session price.
   * @property {string} s_duration Class duration. In human readable format.
   * @property {string} s_title Class name.
   * @property {string} text_room Class room.
   * @property {string} text_timezone Timezone title.
   */

  /**
   * Detailed information about the class.
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_class}
   */
  this.a_class = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_location
   * @property {number} f_latitude Location latitude.
   * @property {number} f_longitude Location longitude.
   * @property {number} f_rate Location rating. From 1 to 5.
   * @property {string} k_location Location key.
   * @property {string} s_address Location address.
   * @property {string} s_map Query to search location on "Google maps".
   * @property {string} s_phone Location phone.
   * @property {string} s_title Location name.
   */

  /**
   * Location data.
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_location}
   */
  this.a_location = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_request
   * @property {string} dt_date The date/time of the session in UTC.
   * @property {string} k_class_period The session key.
   */

  /**
   * A list of sessions to get information for. Every element has the following keys:
   *
   *
   * `null` if requesting a single session.
   *
   * @get get
   * @post get
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_session_request[]}
   */
  this.a_session_request = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_asset
   * @property {number} i_count Number of sessions.
   * @property {number} i_index Asset index.
   * @property {number} id_category List of resource categories.
   * @property {string} k_city City of the asset, if this is Off-Site Location.
   * @property {string} k_resource Resource key.
   * @property {string} text_address Address of the asset, if this is Off-Site Location.
   * @property {string} text_guide Additional address guidance, if this is Off-Site Location.
   * @property {string} text_index Asset index with '#' prefix.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.
   * @property {string} text_postal Postal code of the asset, if this is Off-Site Location.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class_a_image
   * @property {number} i_height Image height.
   * @property {number} i_width Image width.
   * @property {boolean} is_empty Whether current image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class_a_search_tag
   * @property {string} k_search_tag Search tag key.
   * @property {string} text_title Search tag name.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class
   * @property {string[]} a_class_tab Keys are class key.    Values are class tab key.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class_a_image} a_image Class image data:
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class_a_search_tag} a_search_tag List of search tags.
   * @property {number[]} a_tag List of tags.
   * @property {boolean} can_book Whether current client can book class.
   * @property {string} dt_date_global Session date/time in UTC.
   * @property {string} dt_date_local Start date in local time.
   * @property {string} html_deny_reason Reason why client can not book class. Not empty only if `can_book` is `false`.
   * @property {string} html_description Class description.
   * @property {string} html_special Special instructions.
   * @property {?number} i_age_from Age from that class is allowed. `null` if information is not available.
   * @property {?number} i_age_to Age to that class is allowed. `null` if information is not available.
   * @property {number} i_book A total number of booked visits in the class, including all lists: active and waitlist.
   * @property {number} i_book_active A total number of booked active visits in the class.
   * @property {number} i_capacity Class capacity.
   * @property {number} i_duration Class duration. In number of minutes.
   * @property {number} i_visit Number of usages of promotion required to pay for a single class session.
   * @property {?number} i_wait_limit Limit of wait list. `null` if limit is not set.
   * @property {number} id_deny_reason Reasons why the client can't book this class.
   * @property {boolean} is_book Whether current class was booked by current client.
   * @property {boolean} is_book_for_guest Allow clients to book on behalf of a guest. `true` if clients can book on behalf of a guest. `false` otherwise.
   * @property {boolean} is_cancel `true` if class period was cancelled; `false` otherwise.
   * @property {boolean} is_event `true` if it is event; `false` if it is class.
   * @property {boolean} is_promotion_only `true` if this class can be paid with promotion only; `false` otherwise.
   * @property {boolean} is_virtual `true` if class is virtual, `false` otherwise.
   * @property {boolean} is_wait_list `true` if user can take place in wait list only; `false` otherwise.
   * @property {boolean} is_wait_list_enabled `true` if wait list is enabled for class; `false` otherwise.
   * @property {string} k_resource_location Off-site location asset key. Empty if off-site location is not assigned to this class.
   * @property {string} m_price Session price.
   * @property {string} s_duration Class duration. In human readable format.
   * @property {string} s_title Class name.
   * @property {string} text_room Class room.
   * @property {string} text_timezone Timezone title.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_location
   * @property {number} f_latitude Location latitude.
   * @property {number} f_longitude Location longitude.
   * @property {number} f_rate Location rating. From 1 to 5.
   * @property {string} k_location Location key.
   * @property {string} s_address Location address.
   * @property {string} s_map Query to search location on "Google maps".
   * @property {string} s_phone Location phone.
   * @property {string} s_title Location name.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_staff_a_logo
   * @property {number} id_gender Class to work with gender string identifiers.
   * @property {boolean} is_empty `true` - staff has photo; `false` - has no photo.
   * @property {string} s_url URL to staff photo.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_staff
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_staff_a_logo} a_logo Information about staff photo:
   * @property {boolean} is_quick_substitute Whether staff or pay rate changed due quick substitution.
   * @property {boolean} is_substitute Whether or not this staff member is a substitute.
   * @property {string} k_staff Deprecated use `uid_staff` instead.
   * @property {string} s_family 1st letter of surname of staff member.
   * @property {string} s_name Staff name.
   * @property {string} uid_staff Staff user key.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_visits_required
   * @property {number} i_count Number of visits.
   * @property {boolean} is_event `true` if this is an event, `false` if this is a class.
   * @property {string} k_class Key of the class or event.
   * @property {string} text_title Name of the class or event.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_result
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_asset} a_asset Array of asset.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_class} a_class Class information.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_location} a_location Location info.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_staff} a_staff Staff list.
   * @property {string[]} a_virtual_location List of other locations where virtual class can be booked. Empty array if class isn't virtual or can't be booked in other locations.
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_session_result_a_visits_required} a_visits_required List of classes and events, which client should visit before this one.
   */

  /**
   * A list of sessions with information, received in a multiple session mode.
   *
   * @get result
   * @post result
   * @type {Wl_Schedule_ClassView_ClassViewModel_a_session_result[]}
   */
  this.a_session_result = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_staff_a_logo
   * @property {number} id_gender Class to work with gender string identifiers.
   * @property {boolean} is_empty `true` - staff has photo; `false` - has no photo.
   * @property {string} s_url URL to staff photo.
   */

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_staff
   * @property {Wl_Schedule_ClassView_ClassViewModel_a_staff_a_logo} a_logo Information about staff photo:
   * @property {boolean} is_quick_substitute Whether staff or pay rate changed due quick substitution.
   * @property {boolean} is_substitute Whether or not this staff member is a substitute.
   * @property {string} k_staff Deprecated use `uid_staff` instead.
   * @property {string} s_family 1st letter of surname of staff member.
   * @property {string} s_name Staff name.
   * @property {string} uid_staff Staff user key.
   */

  /**
   * Staff member list data.
   *
   * This will be `null` if data isn't loaded yet.
   *
   * @get result
   * @post result
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_staff[]}
   */
  this.a_staff = null;

  /**
   * List of other locations where virtual class can be booked.
   * Empty array if class isn't virtual or can't be booked in other locations.
   *
   * @get result
   * @post result
   * @type {string[]}
   */
  this.a_virtual_location = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_visits_required
   * @property {number} i_count Number of visits.
   * @property {boolean} is_event `true` if this is an event, `false` if this is a class.
   * @property {string} k_class Key of the class or event.
   * @property {string} text_title Name of the class or event.
   */

  /**
   * A list of classes and events that clients should visit before this one.
   *
   * @get result
   * @type {Wl_Schedule_ClassView_ClassViewModel_a_visits_required[]}
   */
  this.a_visits_required = undefined;

  /**
   * The date/time of the session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Key of the business in which the action is performed.
   *
   * `null` if key of the business was not passed.
   *
   * Key of the business is required if [ClassViewApi](/Wl/Schedule/ClassView/ClassView.json) was passed.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The class period key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * A list of sessions to get information for.
   * A serialized array. See [ClassViewApi](/Wl/Schedule/ClassView/ClassView.json) for the array structure.
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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassView_ClassViewModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassView_ClassViewModel.prototype.config=function()
{
  return {"a_field":{"a_asset":{"get":{"result":true},"post":{"result":true}},"a_class":{"get":{"result":true},"post":{"result":true}},"a_location":{"get":{"result":true},"post":{"result":true}},"a_session_request":{"get":{"get":true},"post":{"get":true}},"a_session_result":{"get":{"result":true},"post":{"result":true}},"a_staff":{"get":{"result":true},"post":{"result":true}},"a_virtual_location":{"get":{"result":true},"post":{"result":true}},"a_visits_required":{"get":{"result":true}},"dt_date":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"s_session_request":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
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

/**
 * Retrieves information about class.
 *
 * Returns detailed information about one or more class sessions, including staff, location,
 * assigned assets, virtual location links, visit counts, and booking availability. Supports
 * single-session mode for one class period or multi-session mode for batch lookups.
 *
 * @function
 * @name Wl_Schedule_ClassView_ClassViewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Retrieves information about classes.
 *
 * A POST-method alternative to `get()` for multi-session batch lookups
 * where the session list is too long to encode in a GET query string. The session list is
 * provided as a JSON-encoded string in the request body.
 *
 * @function
 * @name Wl_Schedule_ClassView_ClassViewModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
