/**
 * An endpoint that cancels a whole event booked by a client.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventCancelWholeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business within which the action is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * An event key.
   *
   * @post post
   * @type {string}
   */
  this.k_class = "0";

  /**
   * A user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventCancelWholeModel);

/**
 * @inheritDoc
 */
Wl_Event_EventCancelWholeModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_class": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};