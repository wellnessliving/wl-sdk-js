/**
 * Entry point for cancellation of session book of whole event.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Event_EventCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business to which the visit belongs.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Book ID.
   * Primary key in table {@link \RsVisitSql}.
   *
   * @post get
   * @type {string}
   */
  this.k_visit = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Event_EventCancelModel);

/**
 * @inheritDoc
 */
Wl_Event_EventCancelModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"k_visit": {"post": {"get": true}}}};
};