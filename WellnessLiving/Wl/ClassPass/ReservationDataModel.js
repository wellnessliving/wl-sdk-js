/**
 * Provides manipulations of the reservations.
 *
 * ## Dispatched URL:
 * <tt>/cp/v1/reservations/{reservation_id}</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_ReservationDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\ReservationCancel::$is_late_cancel} for documentation.
   *
   * @patch result
   * @type {boolean}
   */
  this.is_late_cancel = undefined;

  /**
   * Reservation ID.
   *
   * @patch get
   * @type {string}
   */
  this.s_reservation = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_ReservationDataModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_ReservationDataModel.prototype.config=function()
{
  return {"a_field": {"is_late_cancel": {"patch": {"result": true}},"s_reservation": {"patch": {"get": true}}}};
};