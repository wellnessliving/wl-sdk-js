/**
 * Check availability for a requested slot.
The partner backend verifies that the requested appointment slot is valid and available.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_CheckAvailabilityModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Core\Integration\IntegrationDataTrait::toArray()} for documentation.
   *
   * @post result
   * @type {{}}
   */
  this.slot = undefined;

  /**
   * Count of available slots
   *
   * @post result
   * @type {number}
   */
  this.count_available = undefined;

  /**
   * The appointment slot that is being checked.
   *
   * @post post
   * @type {*}
   */
  this.slot = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_CheckAvailabilityModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_CheckAvailabilityModel.prototype.config=function()
{
  return {
    "a_field": {
      "slot": {
        "post": {
          "post": true
        }
      },
      "count_available": {
        "post": {
          "result": true
        }
      }
    }
  };
};