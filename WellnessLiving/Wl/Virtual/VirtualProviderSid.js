/**
 * List of possible value of virtual integrations.
 *
 * Last used ID: 4.
 */
function Wl_Virtual_VirtualProviderSid()
{
  // Empty constructor.
}

/**
 * The service is delivered in person.
 *
 * Never stored in the table of virtual services and never offered as a separate card.
 *
 * @type {number}
 */
Wl_Virtual_VirtualProviderSid.IN_PERSON = 4;

/**
 * Virtual integration non implemented.
 *
 * @type {number}
 */
Wl_Virtual_VirtualProviderSid.NON_INTEGRATED = 2;

/**
 * Staff call the client at the number given at booking.
 *
 * Available for appointments only.
 *
 * @type {number}
 */
Wl_Virtual_VirtualProviderSid.PHONE_CALL = 3;

/**
 * Virtual Zoom service integration.
 *
 * @type {number}
 */
Wl_Virtual_VirtualProviderSid.ZOOM = 1;
