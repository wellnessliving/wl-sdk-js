/**
 * A list of bank account types.
 */
function RsPayBankSid()
{
  // Empty constructor.
}

/**
 * Bank account for ACH direct bank transactions. USA-specific system.
 *
 * @type {number}
 */
RsPayBankSid.ACH = 2;

/**
 * A credit card.
 *
 * @type {number}
 */
RsPayBankSid.CARD = 1;

/**
 * Bank account for Direct Entry direct bank transactions.  Australian-specific system.
 *
 * @type {number}
 */
RsPayBankSid.DIRECT_ENTRY = 3;
