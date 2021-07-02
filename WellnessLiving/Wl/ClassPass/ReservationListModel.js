/**
 * Create class from data received from Class Pass.
 *
 * Dispatched URL: <tt>/cp/v1/reservations</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_ReservationListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\ReservationResultData::$text_spot_label} for documentation.
   *
   * @post result
   * @type {?string}
   */
  this.spot_label = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_ReservationListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_ReservationListModel.prototype.config=function()
{
  return {"a_field": {"spot_label": {"post": {"result": true}}}};
};