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
   * @property {Wl_Event_EventListModel_a_event_list_a_age_restriction} a_age_restriction Information about age restrictions for this event, has the following structure:
   * @property {string[]} a_class_tab List of book now tags connected to this event.
   * @property {*} a_logo Data about logo of the event.
   * @property {Wl_Event_EventListModel_a_event_list_a_schedule[]} a_schedule List of scheduled sessions of the event.
   * @property {Wl_Event_EventListModel_a_event_list_a_search_tag[]} a_search_tag List of search tags connected to this event.
   * @property {boolean} can_book Whether event can be booked or not. * `true` - there are no restrictions to book this event in general. * `false` - for some reason event cannot be booked.
   * @property {boolean} can_cancel Whether current user can cancel already booked event.
   * @property {string} dl_early End date, when early bird price ends in `MySql` format.
   * @property {string} dl_end End date of the scheduled session in `MySql` format.
   * @property {string} dl_session Local date of the closest session of the event.
   * @property {string} dl_start Start date of the scheduled sessions in `MySql` format.
   * @property {string} dtu_session Date of the closest session of the event.
   * @property {string} html_reason Reason why session can not be booked. Not empty only if `is_bookable` is `false`.
   * @property {number} i_session_all Number of all sessions in the event.
   * @property {number} i_session_future Number of future sessions in the event.
   * @property {number} i_session_past Number of past sessions in the event.
   * @property {number} id_reason ID of deny reason.
   * @property {boolean} is_age_restrict Whether booking of this event restricted because of age rules for {@link Wl_Event_EventListModel}.
   * @property {boolean} is_age_restrict_only `true` if this event booking is restricted and restricted because of client's age only. `false` otherwise.
   * @property {?boolean} is_available Whether the event is available for booking or not. The flag refers to the Available/Unavailable filter.
   * @property {boolean} is_block Whether single sessions of the event can be booked.
   * @property {boolean} is_book_for_guest Allow clients to book on behalf of a guest.
   * @property {boolean} is_bookable Whether event is bookable.
   * @property {boolean} is_booked Whether event is already booked.
   * @property {boolean} is_closed Whether booking of the event is closed already. Means that in general it is bookable but currently booking is closed.
   * @property {boolean} is_full Whether event is full already.
   * @property {boolean} is_online `true` if this class can be booked by any client; `false` otherwise.
   * @property {boolean} is_online_private `true` means to show class only for clients who can book online, `false` means to show class for all clients.
   * @property {boolean} is_open Whether event sessions can be booked after event has started.
   * @property {boolean} is_promotion_only Whether clients of the business can pay for the event with purchase option only.
   * @property {boolean} is_prorate Whether event sessions can be booked partially.
   * @property {boolean} is_single_buy Whether class/event can be paid with single session.
   * @property {boolean} is_virtual Whether event is virtual.
   * @property {string} k_class Class key.
   * @property {string} k_class_period Class period key of the closest session of the event.
   * @property {string} k_enrollment_block Key of enrollment block that corresponds to current row.
   * @property {string} k_location Location key of the closest session of the event.
   * @property {string} m_price_max Maximum price per session in the event.
   * @property {string} m_price_min Minimum price per session in the event.
   * @property {string} m_price_total Price of the entire event.
   * @property {string} m_price_total_early Early bird price of the entire event.
   * @property {string} sid_reason Code of `html_reason`. Is used for testing purposes. Not empty only if `is_bookable` is `false`.
   * @property {boolean} text_age_restrict Text message of the restriction based on age rules.
   * @property {string} text_title Title of the event.
   * @property {?string} url_book Link to the start of the booking wizard to book the closed session from this event or the entire event.
   * @property {string} xml_description Description of the event.
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
  this.id_flag = 3;

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
   * Determines whether you need to retrieve a list of event sessions regardless of the tab specified in {@link Wl_Event_EventListModel.k_class_tab}.
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
   * `null` to retrieve events from {@link Wl_Event_EventListModel.k_location}.
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
   * * {@link Wl_Event_EventListModel.k_skin} specified.
   * * {@link Wl_Event_EventListModel.is_tab_all} is `true`.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * The event location key to retrieve a list of all event sessions in a specific location.
   *
   * Required if {@link Wl_Event_EventListModel.k_business} isn't specified.
   * `null` if you need to retrieve a list of event sessions in all locations of {@link Wl_Event_EventListModel.k_business}.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The skin key if an event list is used for widget mode.
   *
   * {@link Wl_Event_EventListModel.k_class_tab} will be ignored for widget mode.
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
