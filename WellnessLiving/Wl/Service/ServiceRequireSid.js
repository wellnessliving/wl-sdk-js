/**
 * A list of client booking flow types.
 *
 * 3 - is reserved for deprecated "advanced percent" that was combined with "flat advance" into "ADVANCE".
 *
 * Last used ID: 6
 */
function Wl_Service_ServiceRequireSid()
{
  // Empty constructor.
}

/**
 * Some part of the price is required. Type of the deposit can be flat or percentage. Type of the deposit depends on `is_deposit_percent`. Size of the deposit is specified in `f_deposit`
 *
 * @type {number}
 */
Wl_Service_ServiceRequireSid.ADVANCE = 4;

/**
 * Full payment is required.
 *
 * @type {number}
 */
Wl_Service_ServiceRequireSid.FULL = 2;

/**
 * Nothing is required. Online Payment is optional.
 *
 * @type {number}
 */
Wl_Service_ServiceRequireSid.NOTHING = 1;

/**
 * Clients can book, but online purchase is not available. Clients can pay only when they visit.
 *
 * @type {number}
 */
Wl_Service_ServiceRequireSid.OFFLINE = 6;

/**
 * Credit card authorisation without payment is required.
 *
 * @type {number}
 */
Wl_Service_ServiceRequireSid.ZERO = 5;
