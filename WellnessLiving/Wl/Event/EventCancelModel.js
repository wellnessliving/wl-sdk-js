/**
 * Cancels book of session {@link Wl_Event_EventCancelModel.k_visit}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Visit source. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` is late cancel, `false` reservation is not late cancel.
   * This is required to enable late cancel even if the user is staff.
   *
   * @post get
   * @type {boolean}
   */
  this.is_late_cancel = false;

  /**
   * Key of the business to which the visit belongs.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Book ID.
   *
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventCancelModel);

/**
 * @inheritDoc
 */
Wl_Event_EventCancelModel.prototype.config=function()
{
  return {"a_field":{"id_mode":{"post":{"post":true}},"is_late_cancel":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_visit":{"post":{"get":true}}}};
};

/**
 * Cancels book of session {@link Wl_Event_EventCancelModel.k_visit}.
 *
 * Validates the business and visit keys, checks that the visit is still in a cancellable
 * state, and verifies that the current user has access to cancel it. Loads the attendance
 * record for the visit and delegates the actual cancellation to the event service.
 *
 * @function
 * @name Wl_Event_EventCancelModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
