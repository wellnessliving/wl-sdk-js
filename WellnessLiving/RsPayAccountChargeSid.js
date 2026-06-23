/**
 * List of page transaction type.
 */
function RsPayAccountChargeSid()
{
  // Empty constructor.
}

/**
 * Account charging using payment form.
 *
 * @type {number}
 */
RsPayAccountChargeSid.AUTO = 1;

/**
 * Manual account charge by admin.
 *
 * @type {number}
 */
RsPayAccountChargeSid.CREDIT = 3;

/**
 * Manual account withdrawal by admin.
 *
 * @type {number}
 */
RsPayAccountChargeSid.DEBIT = 2;
