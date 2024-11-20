/**
 * Keeps a record of closed notification modal.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Virtual_NotificationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business to which the closed notification modal window belongs.
   *
   * `null` if key of the business is not known (may only occur in legacy applications).
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the visit whose modal is being dismissed.
   *
   * `null` if this value did not arrive from the client application.
   *
   * @get get
   * @type {?string}
   */
  this.k_visit = null;

  /**
   * Key of the user that is dismissing the modal.
   *
   * `null` if this value did not arrive from the client application.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Virtual_NotificationModel);

/**
 * @inheritDoc
 */
Wl_Classes_Virtual_NotificationModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_visit": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};