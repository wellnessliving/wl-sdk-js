/**
 * List of sources from where the user registers.
 */
function Wl_Profile_RegisterSourceSid()
{
  // Empty constructor.
}

/**
 * Source when a user registers while booking a service.
 *
 * <b>Don't use to edit existing user profile.</b>
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.BOOKING = 4;

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
 * Source when a guest (an unregistered visitor) books a service or makes a purchase.
 *
 * Independent of {@link Wl_Profile_RegisterSourceSid.BOOKING}/{@link Wl_Profile_RegisterSourceSid.PURCHASE} - a guest may be
 *  asked for a field even when a registered client is not, and vice versa.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.GUEST = 6;

/**
 * Source when a user registers while making a purchase.
 *
 * <b>Don't use to edit existing user profile.</b>
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.PURCHASE = 5;

/**
 * Source when a client adds a family member (a relative profile) - directly, or as part of booking or purchase.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.RELATIONSHIP = 7;

/**
 * Source when a user registers on self-registration web app, self-registration web app URL, etc.
 *
 * <b>Don't use to edit existing user profile.</b>
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.SELF = 2;

/**
 * Source when staff add or edit a client profile.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.STAFF = 8;

/**
 * This is a service value, which means to not choose any specific source.
 *
 * @type {number}
 */
Wl_Profile_RegisterSourceSid.UNSET_VALUE = 3;
