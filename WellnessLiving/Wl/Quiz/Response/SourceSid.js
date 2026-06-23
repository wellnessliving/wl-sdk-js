/**
 * List of sources where quiz response can be generated.
 *
 * Last used ID: 6
 */
function Wl_Quiz_Response_SourceSid()
{
  // Empty constructor.
}

/**
 * Quiz response received during booking process.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.BOOKING = 2;

/**
 * Quiz response was imported.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.IMPORT = 6;

/**
 * Quiz response received by kiosk mode link.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.KIOSK = 7;

/**
 * Quiz response received by direct link.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.LINK = 1;

/**
 * Quiz response received by direct link.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.MANUAL = 5;

/**
 * Quiz response received during purchase process.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.PURCHASE = 4;

/**
 * Quiz response received during registration process.
 *
 * @type {number}
 */
Wl_Quiz_Response_SourceSid.REGISTRATION = 3;
