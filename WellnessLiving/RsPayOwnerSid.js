/**
 * A list of money owners from which account money can be transferred.
 */
function RsPayOwnerSid()
{
  // Empty constructor.
}

/**
 * Anonymous user (Walk-In).
 *
 * @type {number}
 */
RsPayOwnerSid.ANONYMOUS = 3;

/**
 * Business.
 *
 * @type {number}
 */
RsPayOwnerSid.BUSINESS = 2;

/**
 * System user.
 *
 * @type {number}
 */
RsPayOwnerSid.USER = 1;
