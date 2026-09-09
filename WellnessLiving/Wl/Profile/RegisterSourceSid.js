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
 * <b>
 *  Don't use to edit existing user profile.
 *  Used only to register new clients during booking or purchase.
 * </b>
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.BOOKING_AND_PURCHASE = 1;

/**
 * Source when a user registers on self-registration web app, self-registration web app URL, etc.
 *
 * <b>Don't use to edit existing user profile.</b>
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
