/**
 * Health check status API endpoint.
 *
 * Used by Google to check that our services are available.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_HealthCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_HealthCheckModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_HealthCheckModel.prototype.config=function()
{
  return {"a_field": []};
};