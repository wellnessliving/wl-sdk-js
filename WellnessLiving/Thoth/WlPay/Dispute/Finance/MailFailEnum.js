/**
 * The step of the funds of a Stripe dispute that failed, and that Finance must do by hand.
 *
 * Stored in the column `id_fail` of StripeDisputeSql and given to
 * Mail::send(). The code does not repeat a failed step, see
 * StripeDisputeFunds.
 *
 * Last used ID: 3
 */
function Thoth_WlPay_Dispute_Finance_MailFailEnum()
{
  // Empty constructor.
}

/**
 * The funds came back to the platform, but the code did not recover them from the studio.
 *
 * @type {number}
 */
Thoth_WlPay_Dispute_Finance_MailFailEnum.REINSTATED = 3;

/**
 * The studio was not repaid after a won dispute.
 *
 * @type {number}
 */
Thoth_WlPay_Dispute_Finance_MailFailEnum.REPAY = 2;

/**
 * The transfer of the disputed payment was not reversed.
 *
 * @type {number}
 */
Thoth_WlPay_Dispute_Finance_MailFailEnum.REVERSE = 1;
