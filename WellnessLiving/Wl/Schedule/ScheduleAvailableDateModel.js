/**
 * Retrieves the nearest class session available for booking.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleAvailableDateModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * Keys of classes.
     *
     * Empty to search for all classes.
     *
     * @get get
     * @type {string[]}
     */
    this.a_class = [];

    /**
     * IDs of week days from {@link ADateWeekSid} class.
     *
     * Empty to search for all week days.
     *
     * @get get
     * @type {number[]}
     */
    this.a_day = [];

    /**
     * Keys of events.
     *
     * Empty to search for all events.
     *
     * @get get
     * @type {string[]}
     */
    this.a_event = [];

    /**
     * Keys of locations.
     *
     * Empty to search in all locations.
     *
     * @get get
     * @type {string[]}
     */
    this.a_location = [];

    /**
     * Keys of staff members.
     *
     * Empty to search for all staff members.
     *
     * @get get
     * @type {string[]}
     */
    this.a_staff = [];

    /**
     * @typedef {{}} Wl_Schedule_ScheduleAvailableDateModel_a_time
     * @property {string} tl_end End time.
     * @property {string} tl_start Start time.
     */

    /**
     * Time interval:
     * <dl><dt>string `tl_end`</dt><dd>End time.</dd>
     * <dt>string `tl_start`</dt><dd>Start time.</dd></dl>
     *
     * Empty to search for all time.
     *
     * @get get
     * @type {Wl_Schedule_ScheduleAvailableDateModel_a_time|{}}
     */
    this.a_time = {};

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
    this.is_virtual = undefined;

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

WlSdk_ModelAbstract.extends(Wl_Schedule_ScheduleAvailableDateModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleAvailableDateModel.prototype.config=function()
{
    return {"a_field": {"a_class": {"get": {"get": true}},"a_day": {"get": {"get": true}},"a_event": {"get": {"get": true}},"a_location": {"get": {"get": true}},"a_staff": {"get": {"get": true}},"a_time": {"get": {"get": true}},"dl_next_available": {"get": {"result": true}},"dtu_start": {"get": {"get": true}},"id_class_tab": {"get": {"get": true}},"is_class": {"get": {"get": true}},"is_event": {"get": {"get": true}},"is_virtual": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_timezone": {"get": {"get": true}}}};
};