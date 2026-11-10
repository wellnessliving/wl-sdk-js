/**
 * Results of a scan at the staff check-in kiosk.
 *
 * Last used ID: 5
 */
function Wl_Visit_Kiosk_ScanResultSid()
{
  // Empty constructor.
}

/**
 * The scanned value is a dynamic barcode of a client that has expired.
 *
 * @type {number}
 */
Wl_Visit_Kiosk_ScanResultSid.DYNAMIC_EXPIRED = 4;

/**
 * The business uses QR codes for the member IDs, and the kiosk does not read them.
 *
 * @type {number}
 */
Wl_Visit_Kiosk_ScanResultSid.FORMAT_UNSUPPORTED = 5;

/**
 * The scanned value identifies an active client that the staff member may see.
 *
 * @type {number}
 */
Wl_Visit_Kiosk_ScanResultSid.FOUND = 1;

/**
 * The scanned value identifies a client whose member ID is inactive.
 *
 * @type {number}
 */
Wl_Visit_Kiosk_ScanResultSid.MEMBER_INACTIVE = 3;

/**
 * No client that the staff member may see matches the scanned value.
 *
 * @type {number}
 */
Wl_Visit_Kiosk_ScanResultSid.NOT_FOUND = 2;
