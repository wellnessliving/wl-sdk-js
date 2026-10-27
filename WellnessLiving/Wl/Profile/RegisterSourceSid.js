/**
 * List of sources from where the user registers.
 *
 * @constructor
 */
class Wl_Profile_RegisterSourceSid
{
    /**
     * Source when a user registers while booking a service.
     *
     * @type {number}
     */
    static BOOKING = 4;

    /**
     * Source when a user registers during purchase or booking.
     *
     * @deprecated Use {@link BOOKING} or {@link PURCHASE}
     * instead, so that the booking and purchase entry points can be configured independently. Kept for `@sdk`
     * compatibility.
     * @type {number}
     */
    static BOOKING_AND_PURCHASE = 1;

    /**
     * Source when a guest (an unregistered visitor) books a service or makes a purchase.
     *
     * Independent of {@link BOOKING}/{@link PURCHASE} -
     * a guest may be asked for a field even when a registered client is not, and vice versa.
     *
     * @type {number}
     */
    static GUEST = 6;

    /**
     * Source when a user registers while making a purchase.
     *
     * @type {number}
     */
    static PURCHASE = 5;

    /**
     * Source when a client adds a family member (a relative profile) - directly, or as part of booking or purchase.
     *
     * @type {number}
     */
    static RELATIONSHIP = 7;

    /**
     * Source when a user registers on self-registration web app, self-registration web app URL, etc.
     *
     * @type {number}
     */
    static SELF = 2;

    /**
     * Source when staff add or edit a client profile.
     *
     * @type {number}
     */
    static STAFF = 8;

    /**
     * This is a service value, which means to not choose any specific source.
     *
     * @type {number}
     */
    static UNSET_VALUE = 3;
}