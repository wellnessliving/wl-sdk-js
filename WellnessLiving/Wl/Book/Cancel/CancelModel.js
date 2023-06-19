/**
 * Cancels a services.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Cancel_CancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array of visit's key. Each key is primary key in {@link \RsVisitSql} table.
   *
   * @post post
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * Array of visit's key which were canceled. These visits are in current location. Bookings made at other locations
   * cannot be canceled, but they can be visible in clients Upcoming schedule in franchisee and can be selected for
   * cancellation.
   *
   * Each key is primary key in {@link \RsVisitSql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit_canceled = [];

  /**
   * Key of the business within which the action is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
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