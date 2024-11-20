/**
 * Health check status API endpoint.
 *
 * Used by Google to check that our services are available.
 *
 * **Cross-datacenter compatibility:** Requests to {@link Wl_Google_Booking_HealthCheckModel} are routed to a random datacenter.
 * Although this is not entirely correct, we decided to do that to save request time - Google is very demanding to
 * response times.
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