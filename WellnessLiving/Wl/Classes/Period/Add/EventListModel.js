/**
 * Returns list of events in which the current user can schedule a new instance.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Period_Add_EventListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Classes_Period_Add_EventListModel_a_event
   * @property {string} k_class Key of the event instance which represents the enrollment block.
   * @property {string} text_title Title of the event.
   */

  /**
   * List of events sorted by title. One entry for each enrollment block.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Classes_Period_Add_EventListModel_a_event[]}
   */
  this.a_event = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Period_Add_EventListModel);

/**
 * @inheritDoc
 */
Wl_Classes_Period_Add_EventListModel.prototype.config=function()
{
  return {"a_field":{"a_event":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns list of events in which the current user can schedule a new instance.
 *
 * Used by the "Schedule event" dialog of the Schedule tab. Only active events are listed, one entry for each
 * enrollment block. "Manage events" is not required, but the user must be able to schedule future events.
 *
 * @function
 * @name Wl_Classes_Period_Add_EventListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
