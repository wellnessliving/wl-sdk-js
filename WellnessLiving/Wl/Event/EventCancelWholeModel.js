/**
 * Cancels book of event {@link Wl_Event_EventCancelWholeModel}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventCancelWholeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business in which the class resides.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * An event key.
   *
   * @post post
   * @type {string}
   */
  this.k_class = "";

  /**
   * A user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventCancelWholeModel);

/**
 * @inheritDoc
 */
Wl_Event_EventCancelWholeModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"k_class":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Cancels book of event {@link Wl_Event_EventCancelWholeModel}.
 *
 * Used when a client wants to drop out of a multi-session event entirely. Cancels all remaining
 * upcoming sessions at once, including any waitlisted spots, without requiring the client to cancel
 * each session individually.
 *
 * @function
 * @name Wl_Event_EventCancelWholeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
