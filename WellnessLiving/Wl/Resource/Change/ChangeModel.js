/**
 * Point to change an asset occupied by specified visit.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Change_ChangeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Index of asset to be set.
   *
   * @put post
   * @type {number}
   */
  this.i_index = undefined;

  /**
   * Primary key in table {@link \RsResourceSql} of asset to be set.
   *
   * @put post
   * @type {string}
   */
  this.k_resource = undefined;

  /**
   * Primary key in table {@link \RsVisitSql} of visit.
   *
   * @put post
   * @type {string}
   */
  this.k_visit = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Change_ChangeModel);

/**
 * @inheritDoc
 */
Wl_Resource_Change_ChangeModel.prototype.config=function()
{
  return {"a_field": {"i_index": {"put": {"post": true}},"k_resource": {"put": {"post": true}},"k_visit": {"put": {"post": true}}}};
};