/**
 * Api endpoint to retrieve list of events by specific filter parameters.
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
   * List of available enrollment blocks correspond to requested parameters.
   *
   * @get get
   * @type {{}}
   */
  this.a_enrollment_block_list = [];

  /**
   * List of events correspond to requested parameters.
   *
   * @get result
   * @type {*}
   */
  this.a_event_list = [];

  /**
   * End date of the range from which list of events should be retrieved.
   *
   * <tt>null</tt> if range has no end date.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * Start date of the range from which list of events should be retrieved.
   *
   * <tt>null</tt> if range has no start date.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Defines how flag filter should be applied.
   *
   * One of {@link \AFlagSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_flag = 3;

  /**
   * Whether api endpoint used for backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

  /**
   * Whether need to retrieve list of event sessions regardless tab specified in {@link EventListApi::$k_class_tab}.
   *
   * * <tt>true</tt> - retrieve list regardless specified tab.
   * * <tt>false</tt> - retrieve list only for specific tab.
   *
   * @get get
   * @type {boolean}
   */
  this.is_tab_all = false;

  /**
   * Event business key to retrieve list of all event sessions in business.
   *
   * ## Required if {@link EventListApi::$k_location} is not specified.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Event class key to retrieve list of all event sessions of specific class.
   *
   * @get get
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * Class tab key to retrieve list of event sessions from specific tab only.
   * Empty value to retrieve list of event sessions that do not belongs to any tab.
   *
   * ## Will be ignored in next cases:
   * * {@link EventListApi::$k_skin} specified.
   * * {@link EventListApi::$is_tab_all} is <tt>true</tt>.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = undefined;

  /**
   * Event location key to retrieve list of all event sessions in specific location.
   *
   * ## Required if {@link EventListApi::$k_business} is not specified.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Skin key if event list used for widget mode.
   *
   * {@link EventListApi::$k_class_tab} will be ignored for widget mode.
   *
   * @get get
   * @type {string}
   */
  this.k_skin = undefined;

  /**
   * User key.
   * Required to apply rules based on specific user, for example age restrictions.
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
  return {"a_field": {"a_enrollment_block_list": {"get": {"get": true}},"a_event_list": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"id_flag": {"get": {"get": true}},"is_backend": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_skin": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};