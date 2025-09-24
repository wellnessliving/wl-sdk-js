/**
 * A list of bookable types.
 */
function Wl_Service_BookableSid()
{
    // Empty constructor.
}

/**
 * All users can book.
 *
 * @type {number}
 */
Wl_Service_BookableSid.ALL=1;

/**
 * Only special client groups can book.
 *
 * @type {number}
 */
Wl_Service_BookableSid.CUSTOM=3;

/**
 * Nobody can book.
 *
 * @type {number}
 */
Wl_Service_BookableSid.NONE=2;