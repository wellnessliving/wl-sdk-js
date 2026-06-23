/**
 * Business status for managing claim request behavior.
 *
 * Last used ID: 4
 */
function Wl_Business_Claim_BusinessClaimStatusSid()
{
  // Empty constructor.
}

/**
 * Business HAD a contract with WL, but decided not to continue it, i.e. it is a churned business, or a business with the trial expired.
 *
 * @type {number}
 */
Wl_Business_Claim_BusinessClaimStatusSid.CHURN = 4;

/**
 * Business has a contract with WL, be it a trial (with all fields updated and actual), or a subscription.
 *
 * @type {number}
 */
Wl_Business_Claim_BusinessClaimStatusSid.CUSTOMER = 3;

/**
 * Business is not a WL client and never was, i.e. it is a true prospect business.
 *
 * @type {number}
 */
Wl_Business_Claim_BusinessClaimStatusSid.PROSPECT = 1;

/**
 * Business claiming process started, the contact information was verified, the trial has started, but company information wasn’t yet update
 *
 * @type {number}
 */
Wl_Business_Claim_BusinessClaimStatusSid.UNVERIFY = 2;
