/**
 * Statuses of mail verification. Based on statuses that returns Amazon SES API.
 * It is necessary for sending email through Amazon SES. Amazon SES can send email only from verified email addresses.
 *
 * Last used ID: 4.
 */
function Wl_Mail_Verify_MailVerifyStatusSid()
{
  // Empty constructor.
}

/**
 * Email is not verified.
 *
 * @type {number}
 */
Wl_Mail_Verify_MailVerifyStatusSid.FAIL = 4;

/**
 * Verification request is not running.
 *
 * @type {number}
 */
Wl_Mail_Verify_MailVerifyStatusSid.NONE = 1;

/**
 * Email is verified.
 *
 * @type {number}
 */
Wl_Mail_Verify_MailVerifyStatusSid.VERIFY = 3;

/**
 * Verification in progress.
 *
 * @type {number}
 */
Wl_Mail_Verify_MailVerifyStatusSid.WAIT_FOR_VERIFY = 2;
