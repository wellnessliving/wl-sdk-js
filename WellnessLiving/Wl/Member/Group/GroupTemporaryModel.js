/**
 * Point to check if quick group of clients is empty.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_GroupTemporaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if there are no clients is the quick group; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_empty = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_GroupTemporaryModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_GroupTemporaryModel.prototype.config=function()
{
  return {"a_field": {"is_empty": {"get": {"result": true}}}};
};