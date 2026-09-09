/**
 * Lifecycle state of a guest pass invitation.
 *
 * Last used: 12
 */
function Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum()
{
  // Empty constructor.
}

/**
 * Guest attended the visit booked with the guest pass.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.ATTEND = 9;

/**
 * Guest booked the visit booked with the guest pass.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.BOOK = 8;

/**
 * Guest attended the visit booked with the guest pass.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.CHECKED_IN = 3;

/**
 * Guest cancelled the visit early (without penalty). Pass is returned to the host's
 *  available quota and no longer counts toward 'Used'.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.EARLY_CANCELLED = 10;

/**
 * Guest accepted the invitation but did not attend within the pass expiration
 *  window. Distinct from {@link \Wl\Login\Promotion\GuestPass\Invite\InviteStatusEnum::INVITE_EXPIRED}: the pass has
 *  already been committed to the guest at acceptance, so it counts toward "Used"
 *  and is not refunded to the host's available quota.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.GUEST_PASS_EXPIRED = 6;

/**
 * Guest claimed the invitation but the linked visit (if any) has not been
 *  completed yet. Pass is committed to the guest - it is no longer "Available"
 *  to the host and will not be refunded if the guest fails to attend.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.INVITE_ACCEPTED = 2;

/**
 * Invitation expired before the guest claimed it. Pass returns to the host's
 *  available quota (refundable case).
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.INVITE_EXPIRED = 7;

/**
 * Invitation has been sent but the guest has not claimed it yet. Pass is held
 *  against the host's quota but can still be revoked by the host.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.INVITE_SENT = 1;

/**
 * Guest cancelled the visit too late and was penalised. Pass is consumed and
 *  counts toward "Used".
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.LATE_CANCELLED = 5;

/**
 * Guest accepted the invitation but did not show up for the visit. Pass is
 *  consumed and counts toward "Used".
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.NO_SHOW = 4;

/**
 * Guest has a visit linked to the guest pass, but its outcome (attended, no-show,
 *  or late-cancelled) has not been determined yet and must be resolved manually by
 *  staff. Distinct from {@link \Wl\Login\Promotion\GuestPass\Invite\InviteStatusEnum::INVITE_ACCEPTED}: the guest already
 *  has a linked visit here, rather than merely having accepted the invitation.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.PENDING = 12;

/**
 * Guest is on the waitlist for the class session booked with the guest pass.
 *  Pass is committed to the guest - it is no longer "Available" to the host,
 *  but the guest has not secured a confirmed spot in the class yet.
 *
 * @type {number}
 */
Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum.WAITLISTED = 11;
