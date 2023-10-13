/**
 * An endpoint that cancels a service.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Cancel_CancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * An array of visit keys.
   *
   * @post post
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * An array of visit keys that were canceled in the selected location. Bookings made at other locations
   * can't be canceled, but they can be visible in a client's upcoming schedule and can be selected for
   * cancellation.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit_canceled = [];

  /**
   * The key of the business within which the action is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The user key.
   *
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Cancel_CancelModel);

/**
 * @inheritDoc
 */
Wl_Book_Cancel_CancelModel.prototype.config=function()
{
  return {"a_field": {"a_visit": {"post": {"post": true}},"a_visit_canceled": {"post": {"result": true}},"k_business": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};