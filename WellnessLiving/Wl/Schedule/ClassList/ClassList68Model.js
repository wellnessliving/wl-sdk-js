/**
 * This method is a modified Get method `get()`.
 * The difference is as follows:
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ClassList_ClassList68Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys are dates of the days inside requested date range, when there is at least one class in the business.
   * If locations are sent as a parameter, then at least one class must exist in the given locations.
   *
   * Each key is a date string in `YYYY-MM-DD` format (local date in the business time zone).
   * Each value is an empty array reserved for future use.
   *
   * @post result
   * @type {{}}
   */
  this.a_calendar = undefined;

  /**
   * The list of classes keys to filter.
   * Return sessions with matching class IDs.
   *
   * If it's empty and {@link Wl_Schedule_ClassList_ClassList68Model.show_class} is `true`, all classes will be returned.
   *
   * @post post
   * @type {string[]}
   */
  this.a_class = undefined;

  /**
   * List of tabs keys.
   *
   * This will be ignored if {@link Wl_Schedule_ClassList_ClassList68Model.is_tab_all} is `true`.
   *
   * If list of tab keys is not empty, {@link Wl_Schedule_ClassList_ClassList68Model.id_class_tab} is mandatory.
   *
   * `null` if no filtering by Book Now Tab is required.
   *
   * @post post
   * @type {?string[]}
   */
  this.a_class_tab = null;

  /**
   * Class filter by day of the week.
   * Array of number representing the days of the week.
   * Return sessions matching the given weekdays.
   * (7 = Sunday, 1 = Monday, ..., 6 = Saturday)
   *
   * Empty array means no filtering.
   *
   * @post post
   * @type {number[]}
   */
  this.a_day = undefined;

  /**
   * The list of event keys to filter.
   * Return sessions with matching event keys.
   *
   * If it's empty and {@link Wl_Schedule_ClassList_ClassList68Model.show_event} is `true`, all events will be returned.
   *
   * @post post
   * @type {string[]}
   */
  this.a_event = undefined;

  /**
   * The list of location keys to filter results.
   * If it's empty, schedule for all locations will be returned.
   * All given locations should be from the same business, which is sent in {@link Wl_Schedule_ClassList_ClassListModel.k_business}.
   *
   * @post post
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_quick
   * @property {number} i_class Total sessions found.
   * @property {string} k_class Class/event key.
   * @property {string} s_class Class/event title.
   * @property {string} text_type Type of class ("class" || "event")
   */

  /**
   * Information about classes/events for quick filter.
   *
   * Every element has the following keys:
   *
   *
   * For generating this filter, all filters are applied except:
   * - {@link Wl_Schedule_ClassList_ClassList68Model.a_class};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.a_event};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.show_class};
   * - {@link Wl_Schedule_ClassList_ClassList68Model.show_event}.
   *
   * @post result
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_quick}
   */
  this.a_quick = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_session
   * @property {string[]} a_class_tab Keys of class tab.
   * @property {string[]} a_image The class image. Empty array if there is no image.
   * @property {string[]} a_search_tag Tags associated with an individual class.
   * @property {string[]} a_staff The list of staff keys for the staff member conducting the session. For legacy third-party apps listed in `APPS_USE_OLD_K_STAFF`, contains  `k_staff` for backward compatibility. Empty for all other applications. Use `a_staff_uid` instead.
   * @property {boolean[]} a_staff_quick_substitute Whether staff or pay rate changed due quick substitution, for each staff member. Aligned by index with `a_staff_uid`.
   * @property {string[]} a_staff_uid The list of staff user keys for the staff member conducting the session.
   * @property {string[]} a_virtual_location The list of virtual locations keys. Each value is a location key.
   * @property {?boolean} can_book Whether current client can book class. Only present if {@link Wl_Schedule_ClassList_ClassList68Model.show_book_status} is `true`. `null` if not requested.
   * @property {string} dt_date The date/time of the session start in UTC.
   * @property {string} dt_time The time of the session start in the local time zone.
   * @property {string} dtl_date The date/time of session start in the location's time zone.
   * @property {boolean} hide_application Specifies whether the class will be hidden in the White Label Achieve Client App. If `true`, it means that the  class won't be displayed. Otherwise, this will be `false` to indicate that the class will be displayed.
   * @property {string} html_description The class description.
   * @property {?number} i_age_from The minimum age restriction. Deprecated and is left only for back compatibility. `null` if {@link Wl_Schedule_ClassList_ClassList68Model.a_session}'s `is_age_public` is `false` or age is not restricted.
   * @property {?number} i_age_from_month The minimum age restriction (months). `null` if `is_age_public` is `false` or age is not restricted.
   * @property {?number} i_age_from_year The minimum age restriction (years). `null` if `is_age_public` is `false` or age is not restricted.
   * @property {?number} i_age_to The maximum age restriction. Deprecated and is left only for back compatibility. `null` if `is_age_public` is `false` or age is not restricted.
   * @property {?number} i_age_to_month The maximum age restriction (months). `null` if `is_age_public` is `false` or age is not restricted.
   * @property {?number} i_age_to_year The maximum age restriction (years). `null` if `is_age_public` is `false` or age is not restricted.
   * @property {number} i_book Count of visits on this class.
   * @property {?number} i_capacity The capacity of the service. 'null' indicates that the capacity is not set.
   * @property {number} i_day The day of the week when session is occurred. Constant from {@link ADateWeekSid}.
   * @property {number} i_duration The duration of the session in minutes.
   * @property {number} i_wait Number of clients in wait list.
   * @property {?number} i_wait_limit Limit of wait list. `null` if limit is not set.
   * @property {number} i_wait_spot Position of the current client (`uid`) in the wait list for this session. `0` if the client is not on the wait list, or if the business hides wait list position (fastest-response wait list promotion).
   * @property {number} id_deny_reason ID of deny reason. One of {@link Wl_Schedule_ClassView_DenyReasonSid} constants. Only present if {@link Wl_Schedule_ClassList_ClassList68Model.show_book_status} is `true`. `null` if not requested.
   * @property {boolean} is_age_public Whether the age restriction of the class is shown to clients.
   * @property {?boolean} is_book Whether current class was booked by current client. Only present if {@link Wl_Schedule_ClassList_ClassList68Model.show_book_status} is `true`. `null` if not requested.
   * @property {boolean} is_book_for_guest Allow clients to book on behalf of a guest.  `true` if clients can book on behalf of a guest.  `false` otherwise.
   * @property {boolean} is_cancel If `true`, this class period was canceled. Otherwise, this will be `false`.
   * @property {boolean} is_cancellation_enabled `true` if clients can cancel this session. Otherwise, this will be `false`.
   * @property {boolean} is_event If `true`, this is an event. Otherwise, this will be `false`.
   * @property {boolean} is_special_instructions Whether special instructions are configured for this session and are visible to the current client. The content itself (`html_special` in {@link Wl_Schedule_ClassView_ClassViewModel}) is not returned here.
   * @property {boolean} is_virtual If `true`, this class is virtual. Otherwise, this will be `false`.
   * @property {boolean} is_wait `true` if the current client (`uid`) is on the wait list for this session; `false` otherwise.
   * @property {?boolean} is_wait_list `true` if the current client can only take a place on the wait list; `false` otherwise. Only present if {@link Wl_Schedule_ClassList_ClassList68Model.show_book_status} is `true`. `null` if not requested.
   * @property {boolean} is_wait_list_enabled This will be `true` if user is only on the wait-list. Otherwise, this will be `false`.
   * @property {string} k_class The class key.
   * @property {string} k_class_period The class period key.
   * @property {string} k_location The key of the session's location.
   * @property {string} k_resource_location Off-site location asset key. Empty if off-site location is not assigned to this class.
   * @property {string} s_title The title of the session.
   * @property {string} text_room Class room. Empty string if not set.
   * @property {string} url_book The direct link to start booking on the WellnessLiving website.
   * @property {string} url_virtual_join Link to virtual service. Empty string if the class isn't virtual, or if the current client (`uid`) has not booked/waitlisted this session, or joining isn't available yet.
   */

  /**
   * A list of classes sessions starting with the date {@link Wl_Schedule_ClassList_ClassListModel.dt_date}
   * and in the 62 days ahead (or up to {@link Wl_Schedule_ClassList_ClassListModel.dt_end}).
   * Every element has the following keys:
   *
   * @post result
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_session[]}
   */
  this.a_session = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ClassList_ClassList68Model_a_time
   * @property {number} tl_end Time when the session ends. Example: value `'14:00'`.
   * @property {number} tl_start Time when the session starts. Example: value `'06:00'`.
   */

  /**
   * Class filter by time of day.
   * List of arrays with start and end time in "HH:MM" format (24h).
   * Include sessions that start between the specified time range.
   *
   * Each value is array with time parameters:
   *
   *
   * Empty array means no filtering.
   *
   * @post post
   * @type {Wl_Schedule_ClassList_ClassList68Model_a_time[]}
   */
  this.a_time = undefined;

  /**
   * The list start date in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The list end date in MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dt_end = "";

  /**
   * ID of tab. One of {@link Wl_Classes_Tab_TabSid} constants.
   * This will be ignored if {@link Wl_Schedule_ClassList_ClassList68Model.is_tab_all} is `true`.
   *
   * `null` if no filtering by tab is required.
   *
   * @post post
   * @see Wl_Classes_Tab_TabSid
   * @type {?number}
   */
  this.id_class_tab = null;

  /**
   * `true` means to not generate {@link Wl_Schedule_ClassList_ClassList68Model.a_session} result.
   * Can be used, if you do not need full information about existing classes and result in {@link Wl_Schedule_ClassList_ClassList68Model.a_calendar} is enough.
   *
   * @post post
   * @type {boolean}
   */
  this.is_response_short = false;

  /**
   * If `true`, sessions from every class tab are returned. If `false`, use the
   * {@link Wl_Schedule_ClassList_ClassList68Model.k_class_tab} or {@link Wl_Schedule_ClassList_ClassList68Model.id_class_tab} to filter sessions by class tab.
   *
   * @post post
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * If `true`, the list of sessions contains sessions from different time zones. Otherwise, this will be `false`.
   *
   * @post result
   * @type {boolean}
   */
  this.is_timezone_different = undefined;

  /**
   * Class filter by type.
   * The class is virtual.
   *
   * `true`: Only virtual classes.
   * `false`: Only in-person.
   * `null` or not set: No filtering.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_virtual = null;

  /**
   * If `true`, there exists at least one virtual service by a specified
   * {@link Wl_Schedule_ClassList_ClassList68Model.k_business} and {@link Wl_Schedule_ClassList_ClassList68Model.k_class_tab},
   * Otherwise, this will be `false`.
   *
   * @post result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The tab key.
   * This will be ignored if {@link Wl_Schedule_ClassList_ClassList68Model.is_tab_all} is `true`.
   *
   * @post post
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * Key of timezone.
   *
   * If not set then use default client timezone.
   *
   * @post post
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The list of staff members to filter.
   * A comma separated list of staff keys.
   *
   * @deprecated Use {@link Wl_Schedule_ClassList_ClassListModel.s_staff_uid} instead.
   * @post post
   * @type {string}
   */
  this.s_staff = "";

  /**
   * The list of staff user keys to filter.
   * A comma separated list of staff user keys.
   *
   * @post post
   * @type {string}
   */
  this.s_staff_uid = "";

  /**
   * Whether to compute and add the per-session booking status fields to each element of
   * {@link Wl_Schedule_ClassList_ClassList68Model.a_session}: `can_book`, `is_book`, `is_wait_list`,
   * `id_deny_reason`.
   *
   *  It requires evaluating the full
   * booking policy (promotions, family accounts, resource availability, etc.) for every returned session, which
   * is significantly more expensive than the rest of this API. Defaults to `false` so that regular schedule
   * listing calls are not slowed down; enable it only when the caller actually needs these fields.
   *
   * @post post
   * @type {boolean}
   */
  this.show_book_status = false;

  /**
   * If `true`, canceled sessions will be returned. If `false`, canceled sessions won't be returned.
   *
   * @post post
   * @type {boolean}
   */
  this.show_cancel = false;

  /**
   * If `true`, classes will be included in the response. `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.show_class = true;

  /**
   * If `true`, events are also returned. If `false`, only classes are returned.
   *
   * @post post
   * @type {boolean}
   */
  this.show_event = false;

  /**
   * Whether to generate {@link Wl_Schedule_ClassList_ClassList68Model.a_quick} a quick filter.
   * If `true`, a quick filter will be generated. `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.show_quick_filter = false;

  /**
   * The user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassList_ClassList68Model);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassList_ClassList68Model.prototype.config=function()
{
  return {"a_field":{"a_calendar":{"post":{"result":true}},"a_class":{"post":{"post":true}},"a_class_tab":{"post":{"post":true}},"a_day":{"post":{"post":true}},"a_event":{"post":{"post":true}},"a_location":{"post":{"post":true}},"a_quick":{"post":{"result":true}},"a_session":{"post":{"result":true}},"a_time":{"post":{"post":true}},"dt_date":{"post":{"post":true}},"dt_end":{"post":{"post":true}},"id_class_tab":{"post":{"post":true}},"is_response_short":{"post":{"post":true}},"is_tab_all":{"post":{"post":true}},"is_timezone_different":{"post":{"result":true}},"is_virtual":{"post":{"post":true}},"is_virtual_service":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_class_tab":{"post":{"post":true}},"k_timezone":{"post":{"post":true}},"s_staff":{"post":{"post":true}},"s_staff_uid":{"post":{"post":true}},"show_book_status":{"post":{"post":true}},"show_cancel":{"post":{"post":true}},"show_class":{"post":{"post":true}},"show_event":{"post":{"post":true}},"show_quick_filter":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * This method is a modified Get method `get()`.
The difference is as follows:
 *
 * - Some data for filtering is now transmitted by the post method.
 * Because the addition of the filters creates a scenario where we can easily reach the maximum URL length of GET
 * requests and the browser refuse to send the request (situations with long class ID, event ID or staff ID lists).
 *
 * - Added generation of a separate 'Quick filter'.
 * This generation is enabled using the flag {@link Wl_Schedule_ClassList_ClassList68Model.show_quick_filter}.
 *
 * - Added a filter list of events {@link Wl_Schedule_ClassList_ClassList68Model.a_event}.
 * - Added a filter ID of tab {@link Wl_Schedule_ClassList_ClassList68Model.id_class_tab}.
 *
 * @function
 * @name Wl_Schedule_ClassList_ClassList68Model.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
