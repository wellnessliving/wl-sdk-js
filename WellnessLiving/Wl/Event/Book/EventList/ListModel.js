/**
 * An endpoint that retrieves a list of events for a given class tab.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_Book_EventList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_class_tab,uid";

  /**
   * A list of event identifiers.
   *
   * The order of items in this array matches the order in which elements should be displayed.
   *
   * @get result
   * @type {string[]}
   */
  this.a_event = undefined;

  /**
   * Event availability value.
   *
   * Unavailable events are those that cannot be booked, but they are shown to the client.
   *
   * @get result
   * @var array
   */
  this.a_event_available = [];

  /**
   * Defines how the event availability flag filter should be applied.
   *
   * One of {@link AFlagSid} constants.
   *
   * * {@link AFlagSid::ON} to show only available events.
   * * {@link AFlagSid::OFF} to show only unavailable events.
   * * {@link AFlagSid::ALL} to show all events (available and unavailable).
   *
   * @get get
   * @var int
   */
  this.id_status = 3;

  /**
   * <tt>true</tt> if exist at least one virtual event
   * by specific {@link Wl_Event_Book_EventList_ListModel.k_business} and
   * {@link Wl_Event_Book_EventList_ListModel.k_class_tab},
   * <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the category tab.
   * If empty, select only elements with not specified book tab.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "0";

  /**
   * The user's key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_Book_EventList_ListModel);

/**
 * @inheritDoc
 */
Wl_Event_Book_EventList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_event": {"get": {"result": true}},"a_event_available": {"get": {"result": true}},"id_status": {"get": {"get": true}},"is_virtual_service": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_tab": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventList_ListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_class_tab The key of the category tab. If empty, select only elements with not specified book tab.
 * @param {string} uid The user's key.
 * @returns {Wl_Event_Book_EventList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */