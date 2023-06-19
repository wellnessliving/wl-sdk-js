/**
 * An endpoint that retrieves a list of events that fit the given filter parameters.
 *
 * This model is generated automatically based on API.
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
   * List of enrollment blocks keys applied by filter.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_enrollment_block_filter = null;

  /**
   * List of available enrollment blocks correspond to requested parameters.
   *
   * @get result
   * @type {{}}
   */
  this.a_enrollment_block_list = [];

  /**
   * A list of events corresponding to requested parameters.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_event_list = [];

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
   * The end date of the range from which a list of events should be retrieved.
   *
   * <tt>null</tt> if the range has no end date.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * The start date of the range from which a list of events should be retrieved.
   *
   * <tt>null</tt> if the range has no start date.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Defines how the event availability flag filter should be applied.
   *
   * One of {@link AFlagSid} constants.
   *
   * * {@link AFlagSid.ON} to show only available events.
   * * {@link AFlagSid.OFF} to show only unavailable events.
   * * {@link AFlagSid.ALL} to show all events (available and unavailable).
   *
   * @get get
   * @type {number}
   */
  this.id_flag = 3;

  /**
   * Determines whether the endpoint is used for backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

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
   * * <tt>true</tt> - retrieves a list regardless of the specified tab.
   * * <tt>false</tt> - retrieves a list only for the specific tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * The event business key to retrieve a list of all event sessions in business.
   *
   * Required if {@link Wl_Event_EventListModel.k_location} isn't specified.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The event class key to retrieve a list of all event sessions of a specific class.
   *
   * @get get
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * The class tab key to retrieve a list of event sessions from a specific tab only.
   * An empty value to retrieve a list of event sessions that don't belong to any tab.
   *
   * Will be ignored in next cases:
   * * {@link Wl_Event_EventListModel.k_skin} specified.
   * * {@link Wl_Event_EventListModel.is_tab_all} is <tt>true</tt>.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = undefined;

  /**
   * The event location key to retrieve a list of all event sessions in a specific location.
   *
   * Required if {@link Wl_Event_EventListModel.k_business} isn't specified.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The skin key if an event list is used for widget mode.
   *
   * {@link Wl_Event_EventListModel.k_class_tab} will be ignored for widget mode.
   *
   * @get get
   * @type {string}
   */
  this.k_skin = undefined;

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
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventListModel);

/**
 * @inheritDoc
 */
Wl_Event_EventListModel.prototype.config=function()
{
  return {"a_field": {"a_class_filter": {"get": {"get": true}},"a_enrollment_block_filter": {"get": {"get": true}},"a_enrollment_block_list": {"get": {"result": true}},"a_event_list": {"get": {"result": true}},"a_location": {"get": {"get": true}},"a_staff": {"get": {"get": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"id_flag": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_ignore_requirement": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_skin": {"get": {"get": true}},"text_search": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};