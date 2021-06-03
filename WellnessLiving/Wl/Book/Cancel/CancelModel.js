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
   * Key of the business within which the action is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key. Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_visit": {"post": {"post": true}},"k_business": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};