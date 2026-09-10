/**
 * Changes an asset occupied by specified visit.
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
  this.i_index = 0;

  /**
   * Key of asset to be set.
   *
   * @put post
   * @type {string}
   */
  this.k_resource = "";

  /**
   * Key of visit.
   *
   * @put post
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Change_ChangeModel);

/**
 * @inheritDoc
 */
Wl_Resource_Change_ChangeModel.prototype.config=function()
{
  return {"a_field":{"i_index":{"put":{"post":true}},"k_resource":{"put":{"post":true}},"k_visit":{"put":{"post":true}}}};
};

/**
 * Changes an asset occupied by specified visit.
 *
 * Validates that the specified resource and visit belong to the same business and that the
 * resource is available for the visit's session, then checks that the current user has
 * attendance privileges for the class location. When the visit belongs to a block event, the
 * new asset is applied to all sessions of that event for the same visitor. The change runs
 * inside a transaction that updates or inserts the corresponding `rs_resource_busy` records,
 * and fails when the target asset is already occupied for the affected time slot.
 *
 * @function
 * @name Wl_Resource_Change_ChangeModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
