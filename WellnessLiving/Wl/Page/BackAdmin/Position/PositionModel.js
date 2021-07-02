/**
 * Coordinates of back admin container.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_BackAdmin_Position_PositionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Value of left property.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.i_left = undefined;

  /**
   * Value of top property.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.i_top = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_BackAdmin_Position_PositionModel);

/**
 * @inheritDoc
 */
Wl_Page_BackAdmin_Position_PositionModel.prototype.config=function()
{
  return {"a_field": {"i_left": {"get": {"result": true},"post": {"post": true}},"i_top": {"get": {"result": true},"post": {"post": true}}}};
};