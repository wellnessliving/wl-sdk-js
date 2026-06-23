/**
 * List of sources from where the user registers.
 */
function Wl_Profile_RegisterSourceSid()
{
  // Empty constructor.
}

/**
 * Source when a user registers during purchase or booking.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.BOOKING_AND_PURCHASE = 1;

/**
 * Source when a user registers on self-registration web app, self-registration web app URL, etc.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.SELF = 2;

/**
 * This is a service value, which means to not choose any specific source.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.UNSET_VALUE = 3;
