/**
 * A list of payment methods.
 *
 *
 *
 * Last used ID: 13.
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
 * ACH system (USA-specific direct banking transactions).
 *
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
 * Payment with a coupon.
 *
 * @type {number}
 */
WlPayMethodSid.COUPON = 8;

/**
 * Direct Entry system (australian-specific direct banking transactions).
 *
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
 * @type {number}
 */
WlPayMethodSid.IMPORT_ACCRUAL = 11;

/**
 * Payment method at a Points of sale.
 *
 * @type {number}
 */
WlPayMethodSid.POS = 1;
