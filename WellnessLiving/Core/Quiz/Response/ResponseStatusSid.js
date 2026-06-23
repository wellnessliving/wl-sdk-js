/**
 * List of response statuses.
 *
 * Last used ID: 6
 */
function Core_Quiz_Response_ResponseStatusSid()
{
  // Empty constructor.
}

/**
 * Response is active.
 *
 * @type {number}
 */
Core_Quiz_Response_ResponseStatusSid.ACTIVE = 1;

/**
 * Response is active and has amendments.
 *
 * @type {number}
 */
Core_Quiz_Response_ResponseStatusSid.ACTIVE_AMEND = 5;

/**
 * Response in draft mode.
 *
 * @type {number}
 */
Core_Quiz_Response_ResponseStatusSid.DRAFT = 2;

/**
 * Response in inactive.
 *
 * @type {number}
 */
Core_Quiz_Response_ResponseStatusSid.INACTIVE = 3;

/**
 * Response in inactive and in draft mode.
 *
 * @type {number}
 */
Core_Quiz_Response_ResponseStatusSid.INACTIVE_DRAFT = 4;
