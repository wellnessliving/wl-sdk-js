/**
 * Possible ways to stop repeatable events.
 */
function WlPayMethodSid()
{
  // Empty constructor.
}

/**
 * Payment with personal user account (rs.pay.account).
 *
 * @type {number}
 */
WlPayMethodSid.ACCOUNT = 7;

/**
 * Payment with personal user account.
 * Special payment method to indicate payments related only to manual adjustment of user account balance.
 * This payment method actually does not exist and used only for filtering purpose.
 *
 * @deprecated
 * @type {number}
 */
WlPayMethodSid.ACCOUNT_MANUAL = 13;

/**
 * ACH system (USA-specific direct banking transactions).
 *
 * @link http://en.wikipedia.org/wiki/Automated_Clearing_House
 * @type {number}
 */
WlPayMethodSid.ACH = 9;

/**
 * Payment with cash.
 *
 * @type {number}
 */
WlPayMethodSid.CASH = 4;

/**
 * Payment with a cheque.
 *
 * @type {number}
 */
WlPayMethodSid.CHEQUE = 5;

/**
 * Payment by clear balance.
 *
 * @type {number}
 */
WlPayMethodSid.CLEAR_BALANCE = 12;

/**
 * Payment with a coupon.
 *
 * @type {number}
 */
WlPayMethodSid.COUPON = 8;

/**
 * Direct Entry system (australian-specific direct banking transactions).
 *
 * @link http://en.wikipedia.org/wiki/Financial_system_in_Australia#Direct_Entry
 * @type {number}
 */
WlPayMethodSid.DIRECT_ENTRY = 10;

/**
 * Online payment. Card not present.
 *
 * @type {number}
 */
WlPayMethodSid.ECOMMERCE = 2;

/**
 * Payment with an external terminal.
 *
 * @type {number}
 */
WlPayMethodSid.EXTERNAL = 6;

/**
 * Special method to be used for migration process.
 *
 * There are sales in Mindbody that were not bought using account balance or reward points.
 * This is not real revenue and cannot be imported as real sales. So, they can be imported as this special method
 * to be in the system and to allow business owner to hide on sales report.
 *
 * In online store this method should not be available.
 *
 * @type {number}
 */
WlPayMethodSid.IMPORT_ACCRUAL = 11;

/**
 * Payment method at a Points of sale.
 *
 * @type {number}
 */
WlPayMethodSid.POS = 1;
