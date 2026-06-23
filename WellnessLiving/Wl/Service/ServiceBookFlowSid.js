/**
 * A list of client booking flow types.
 */
function Wl_Service_ServiceBookFlowSid()
{
  // Empty constructor.
}

/**
 * Client selects the date and time and then the staff member.
 *
 * @type {number}
 */
Wl_Service_ServiceBookFlowSid.DATE_STAFF_ORDER = 2;

/**
 * Client selects their preferred booking order should be staff member / calendar.
 *
 * @type {number}
 */
Wl_Service_ServiceBookFlowSid.PREFER_ORDER = 3;

/**
 * Client selects the staff member and then the date and time.
 *
 * @type {number}
 */
Wl_Service_ServiceBookFlowSid.STAFF_DATE_ORDER = 1;
