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
   * Key of the visit whose modal is being dismissed.
   * Primary key of the {@link RsVisitSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * Key of the user that is dismissing the modal.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Virtual_NotificationModel);

/**
 * @inheritDoc
 */
Wl_Classes_Virtual_NotificationModel.prototype.config=function()
{
  return {"a_field": {"k_visit": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};