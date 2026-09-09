/**
 * Payment actors (staff member, user or business owner).
 */
function RsPayActorSid()
{
  // Empty constructor.
}

/**
 * Business owner.
 *
 * Business owner is a sort of ordinary user. It is used when business acts as a user - for example, pays for business
 * account to system business.
 *
 * @type {number}
 */
RsPayActorSid.BUSINESS = 3;

/**
 * Staff member.
 *
 * The payment is performed by staff (business owner, or administrator within a business backend) on
 * behalf of a user.
 *
 * @type {number}
 */
RsPayActorSid.STAFF = 1;

/**
 * User.
 *
 * The payment is performed by the user.
 *
 * @type {number}
 */
RsPayActorSid.USER = 2;
