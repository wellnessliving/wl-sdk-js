/**
 * Retrieves a list of events.
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
  this._s_key = "k_business,k_class_tab,uid,id_status";

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
   * Event availability map.
   *
   * Unavailable events are those that cannot be booked,
   *  but they can be shown to the client (for example, under the "not available" filter).
   *
   * Key is the event class key. 
   * Value is `true` if the event is available for booking, `false` if it is unavailable.
   *
   * @get result
   * @type {boolean[]}
   */
  this.a_event_available = undefined;

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
  this.id_status = 0;

  /**
   * `true` if exist at least one virtual event
   * by specific {@link Wl_Event_Book_EventList_ListModel} and
   * {@link Wl_Event_Book_EventList_ListModel},
   * `false` otherwise.
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
  this.k_business = "";

  /**
   * The key of the category tab.
   * If empty, select only elements with not specified book tab.
   *
   * @get get
   * @type {string}
   */
  this.k_class_tab = "";

  /**
   * The user's key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_Book_EventList_ListModel);

/**
 * @inheritDoc
 */
Wl_Event_Book_EventList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_event":{"get":{"result":true}},"a_event_available":{"get":{"result":true}},"id_status":{"get":{"get":true}},"is_virtual_service":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Event_Book_EventList_ListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} k_class_tab The key of the category tab. If empty, select only elements with not specified book tab.
 * @param {string} uid The user's key.
 * @param {number} id_status Defines how the event availability flag filter should be applied. One of {@link AFlagSid} constants. * {@link AFlagSid} to show only available events. * {@link AFlagSid} to show only unavailable events. * {@link AFlagSid} to show all events (available and unavailable).
 * @returns {Wl_Event_Book_EventList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of events.
 *
 * Used to populate the events tab on the client-facing booking page. Returns all events offered in
 * the business (or filtered to a specific tab), together with availability flags so the UI can
 * show which events still have open spots.
 *
 * @function
 * @name Wl_Event_Book_EventList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
