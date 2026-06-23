/**
 * Returns the list of events matching the specified filter parameters.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of class keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_class_filter = null;

  /**
   * List of day the week applied by filter {@link ADateWeekSid}.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_day = null;

  /**
   * List of enrollment blocks keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_enrollment_block_filter = null;

  /**
   * List of available enrollment blocks matching the requested parameters.
   *
   * Key is the enrollment block key. 
   * Value is the title of the first event found in that enrollment block.
   *
   * @get result
   * @type {string[]}
   */
  this.a_enrollment_block_list = undefined;

  /**
   * @typedef {{}} Wl_Event_EventListModel_a_event_list_a_age_restriction
   * @property {?number} i_age_from The minimum age for participation in the event.  `null` if there's no minimum age set or information isn't available.
   * @property {?number} i_age_to The age limit for participation in the event. `null` if there's no age limit set or information isn't available.
   * @property {boolean} is_age_public `true` if age restrictions are public and available, `false` if they're hidden. When restrictions are hidden and the current user isn't a staff member, the age range will be empty.
   */

  /**
   * @typedef {{}} Wl_Event_EventListModel_a_event_list_a_schedule_a_staff_member
   * @property {string} k_staff_member Staff member key.
   * @property {string} text_business_role Staff member role title.
   * @property {string} text_mail Staff member email address.
   * @property {string} text_name_first Staff member first name.
   * @property {string} text_name_full Staff member full name.
   * @property {string} text_name_last Staff member last name.
   * @property {string} uid Staff member uid.
   */

  /**
   * @typedef {{}} Wl_Event_EventListModel_a_event_list_a_schedule
   * @property {number[]} a_day List of weekday numbers when event occur.
   * @property {Wl_Event_EventListModel_a_event_list_a_schedule_a_staff_member} a_staff_member List of staff members providing event session.
   * @property {string} dl_end End date of the schedule in `MySql` format.
   * @property {string} dl_start Start date of the schedule in `MySql` format.
   * @property {boolean} is_day Whether this is a single day schedule (start and end dates of the schedule are the same).
   * @property {string} k_class_period Class period key.
   * @property {string} k_location Location key.
   * @property {string} k_resource_location Resource key, which has category {@link Wl_Resource_ResourceCategoryEnum}. Only one such resource can be selected for a schedule.
   * @property {string} text_location Location title.
   * @property {string} text_room Room where the session takes place.
   * @property {string} text_time Start and end time of the scheduled sessions in human readable format.
   */

  /**
   * @typedef {{}} Wl_Event_EventListModel_a_event_list_a_search_tag
   * @property {string} k_search_tag Search tag key.
   * @property {string} text_title Name of the tag.
   */

  /**
   * @typedef {{}} Wl_Event_EventListModel_a_event_list
   * @property {Wl_Event_EventListModel_a_event_list_a_age_restriction} a_age_restriction
   * @property {string[]} a_class_tab
   * @property {*} a_logo
   * @property {Wl_Event_EventListModel_a_event_list_a_schedule[]} a_schedule
   * @property {Wl_Event_EventListModel_a_event_list_a_search_tag[]} a_search_tag
   * @property {boolean} can_book
   * @property {boolean} can_cancel
   * @property {string} dl_early
   * @property {string} dl_end
   * @property {string} dl_session
   * @property {string} dl_start
   * @property {string} dtu_session
   * @property {string} html_reason
   * @property {number} i_session_all
   * @property {number} i_session_future
   * @property {number} i_session_past
   * @property {number} id_reason
   * @property {boolean} is_age_restrict
   * @property {boolean} is_age_restrict_only
   * @property {?boolean} is_available
   * @property {boolean} is_block
   * @property {boolean} is_book_for_guest
   * @property {boolean} is_bookable
   * @property {boolean} is_booked
   * @property {boolean} is_closed
   * @property {boolean} is_full
   * @property {boolean} is_online
   * @property {boolean} is_online_private
   * @property {boolean} is_open
   * @property {boolean} is_promotion_only
   * @property {boolean} is_prorate
   * @property {boolean} is_single_buy
   * @property {boolean} is_virtual
   * @property {string} k_class
   * @property {string} k_class_period
   * @property {string} k_enrollment_block
   * @property {string} k_location
   * @property {string} m_price_max
   * @property {string} m_price_min
   * @property {string} m_price_total
   * @property {string} m_price_total_early
   * @property {string} sid_reason
   * @property {boolean} text_age_restrict
   * @property {string} text_title
   * @property {?string} url_book
   * @property {string} xml_description
   */

  /**
   * A list of events corresponding to requested parameters.
   *
   * @get result
   * @type {Wl_Event_EventListModel_a_event_list[]}
   */
  this.a_event_list = undefined;

  /**
   * List of location keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_location = null;

  /**
   * List of staff keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_staff = null;

  /**
   * List of time day applied by filter {@link RsScheduleTimeSid}.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_time = null;

  /**
   * List of IDs to include/exclude virtual events.
   * If the only ID is {@link Core_Sid_YesNoSid}, only virtual events are included.
   * If the only ID is {@link Core_Sid_YesNoSid}, only in-person events are included.
   * Otherwise, no filtering is done.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_virtual = null;

  /**
   * The end date of the range from which a list of events should be retrieved.
   *
   * `null` if the range has no end date.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * The start date of the range from which a list of events should be retrieved.
   *
   * `null` if the range has no start date.
   *
   * @get get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Defines how the event availability flag filter should be applied.
   *
   * One of {@link AFlagSid} constants.
   *
   * * {@link AFlagSid} to show only available events.
   * * {@link AFlagSid} to show only unavailable events.
   * * {@link AFlagSid} to show all events (available and unavailable).
   *
   * @get get
   * @see AFlagSid
   * @type {number}
   */
  this.id_flag = 0;

  /**
   * Determines whether the endpoint is used for backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Model cache reset flag.
   *
   * @put post
   * @type {boolean}
   */
  this.is_cache_reset = false;

  /**
   * `true` to show even event restricted by booking policies; `false` to show available events only.
   *
   * @get get
   * @type {boolean}
   */
  this.is_ignore_requirement = false;

  /**
   * Determines whether you need to retrieve a list of event sessions regardless of the tab specified in `k_class_tab`.
   *
   * * `true` - retrieves a list regardless of the specified tab.
   * * `false` - retrieves a list only for the specific tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * The event business key to retrieve a list of all event sessions in business.
   *
   * `null` to retrieve events from `k_location`.
   *
   * @get get
   * @put get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The event class key to retrieve a list of all event sessions of a specific class.
   * `null` to retrieve a list of event sessions of all classes.
   *
   * @get get
   * @type {?string}
   */
  this.k_class = null;

  /**
   * The class tab key to retrieve a list of event sessions from a specific tab only.
   * An empty value to retrieve a list of event sessions that don't belong to any tab.
   *
   * Will be ignored in next cases:
   * * `k_skin` specified.
   * * `is_tab_all` is `true`.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * The event location key to retrieve a list of all event sessions in a specific location.
   *
   * Required if `k_business` isn't specified.
   * `null` if you need to retrieve a list of event sessions in all locations of `k_business`.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The skin key if an event list is used for widget mode.
   *
   * `k_class_tab` will be ignored for widget mode.
   *
   * @get get
   * @type {string}
   */
  this.k_skin = "";

  /**
   * Search string to filter events by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  /**
   * The user key.
   * Required to apply specific user rules such as age restrictions.
   *
   * @get get
   * @put get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventListModel);

/**
 * @inheritDoc
 */
Wl_Event_EventListModel.prototype.config=function()
{
  return {"a_field":{"a_class_filter":{"get":{"get":true}},"a_day":{"get":{"get":true}},"a_enrollment_block_filter":{"get":{"get":true}},"a_enrollment_block_list":{"get":{"result":true}},"a_event_list":{"get":{"result":true}},"a_location":{"get":{"get":true}},"a_staff":{"get":{"get":true}},"a_time":{"get":{"get":true}},"a_virtual":{"get":{"get":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"id_flag":{"get":{"get":true}},"is_backend":{"get":{"get":true}},"is_cache_reset":{"put":{"post":true}},"is_ignore_requirement":{"get":{"get":true}},"is_tab_all":{"get":{"get":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"k_class":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_skin":{"get":{"get":true}},"text_search":{"get":{"get":true}},"uid":{"get":{"get":true},"put":{"get":true}}}};
};

/**
 * Returns the list of events matching the specified filter parameters.
 *
 * Used to display the event schedule on business and location pages. Supports filtering by location,
 * date range, staff, and booking status. Results are cached per business and user context; the cache
 * is invalidated automatically when events are modified.
 *
 * @function
 * @name Wl_Event_EventListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Resets the event list cache for the specified business and user.
 *
 * Call this after modifying event data to force the next request to rebuild the schedule from the
 * database. Can also conditionally reset without parameters if the caller determines a reset is needed.
 *
 * @function
 * @name Wl_Event_EventListModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
