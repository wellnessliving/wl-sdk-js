/**
 * Statuses of domain verification.
 * Based on the statuses that return Amazon SES API.
 *
 * Last used ID: 3.
 */
function Wl_Mail_Domain_DomainVerifyStatusSid()
{
  // Empty constructor.
}

/**
 * Domain is not verified.
 *
 * @type {number}
 */
Wl_Mail_Domain_DomainVerifyStatusSid.FAIL = 2;

/**
 * Domain verification is pending. This is the initial state of the domain verification. After state should be changed to {@link Wl_Mail_Domain_DomainVerifyStatusSid} or {@link Wl_Mail_Domain_DomainVerifyStatusSid}.
 *
 * @type {number}
 */
Wl_Mail_Domain_DomainVerifyStatusSid.PENDING = 1;

/**
 * Domain is verified.
 *
 * @type {number}
 */
Wl_Mail_Domain_DomainVerifyStatusSid.SUCCESS = 3;
