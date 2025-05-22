/**
 * Business status for managing claim request behavior.
 *
 * Last used ID: 4
 */
function Wl_Business_Create_BusinessClaimSid ()
{
  // Empty constructor.
}

/**
 * Business HAD a contract with WL, but decided not to continue it, i.e. it is a churned business, or a business
 * with the trial expired.
 *
 * @constant
 * @default 4
 * @type {number}
 */
Wl_Business_Create_BusinessClaimSid.CHURN = 4

/**
 * Business has a contract with WL, be it a trial (with all fields updated and actual), or a subscription.
 *
 * @constant
 * @default 3
 * @type {number}
 */
Wl_Business_Create_BusinessClaimSid.CUSTOMER = 3

/**
 * Business is not a WL client and never was, i.e. it is a true prospect business.
 *
 * @constant
 * @default 1
 * @type {number}
 */
Wl_Business_Create_BusinessClaimSid.PROSPECT = 1

/**
 * Business claiming process started, the contact information was verified, the trial has started, but company
 * information wasn’t yet updated.
 *
 * @constant
 * @default 2
 * @type {number}
 */
Wl_Business_Create_BusinessClaimSid.UNVERIFY = 2