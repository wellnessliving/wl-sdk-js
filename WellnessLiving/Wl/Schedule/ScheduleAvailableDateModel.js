/**
 * Finds the nearest class session that can be booked by the current user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleAvailableDateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Class keys to filter.
   *
   * Empty to search for all classes.
   *
   * @get get
   * @type {string[]}
   */
  this.a_class = undefined;

  /**
   * IDs of week days from {@link ADateWeekSid} class.
   *
   * Empty to search for all week days.
   *
   * @get get
   * @type {number[]}
   */
  this.a_day = undefined;

  /**
   * Event keys to filter.
   *
   * Empty to search for all events.
   *
   * @get get
   * @type {string[]}
   */
  this.a_event = undefined;

  /**
   * Location keys to filter.
   *
   * Empty to search in all locations.
   *
   * @get get
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * Staff member keys to filter.
   *
   * Empty to search for all staff members.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ScheduleAvailableDateModel_a_time
   * @property {number} tl_end End time.
   * @property {number} tl_start Start time.
   */

  /**
   * Time interval:
   *
   *
   * Empty to search for all time.
   *
   * @get get
   * @type {Wl_Schedule_ScheduleAvailableDateModel_a_time}
   */
  this.a_time = undefined;

  /**
   * Nearest session date available for booking in user's or business timezone.
   *
   * `null` if there is no suitable session found.
   *
   * @get result
   * @type {?string}
   */
  this.dl_next_available = null;

  /**
   * The date/time to start from in UTC.
   *
   * @get get
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * "Book now" tab ID. One of {@link Wl_Classes_Tab_TabSid} constants.
   *
   * @get get
   * @see Wl_Classes_Tab_TabSid
   * @type {number}
   */
  this.id_class_tab = 0;

  /**
   * `true` to include classes; `false` to exclude.
   *
   * @get get
   * @type {boolean}
   */
  this.is_class = false;

  /**
   * `true` to include events; `false` to exclude.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * `true` to include only virtual classes;
   * `false` to include only in-person;
   * `null` to no filtering.
   *
   * @get get
   * @type {boolean}
   */
  this.is_virtual = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Timezone key.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleAvailableDateModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleAvailableDateModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"get":true}},"a_day":{"get":{"get":true}},"a_event":{"get":{"get":true}},"a_location":{"get":{"get":true}},"a_staff":{"get":{"get":true}},"a_time":{"get":{"get":true}},"dl_next_available":{"get":{"result":true}},"dtu_start":{"get":{"get":true}},"id_class_tab":{"get":{"get":true}},"is_class":{"get":{"get":true}},"is_event":{"get":{"get":true}},"is_virtual":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_timezone":{"get":{"get":true}}}};
};

/**
 * Finds the nearest class session that can be booked by the current user.
 *
 * Looks no further than `PERIOD_LIMIT` seconds ahead from the start date.
 *
 * @function
 * @name Wl_Schedule_ScheduleAvailableDateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
