/**
 * List of user statuses for collectors.
 *
 * Last used ID: 7.
 */
function Wl_Collector_DebtStatusSid()
{
  // Empty constructor.
}

/**
 * User is a debtor that was pending to be sent to collections but was removed from this list.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.FORGIVEN = 5;

/**
 * User has no debts.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.INNOCENT = 1;

/**
 * User who are at least {@link \Wl\Business\Account\Subscription\Collections\CollectionsSubscriptionConfigEntity::$i_day_due} days past due
 * before the {@link \Wl\Business\Account\Subscription\Collections\CollectionsSubscription} feature turned on.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.OVERDUE = 6;

/**
 * User is a debtor and pending to be sent to collections.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.PENDING = 2;

/**
 * User is a debtor and already sent to collections.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.SENT = 4;

/**
 * User is a debtor but not pending to be sent to collections.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.SUSPECT = 3;

/**
 * Special status of the debt to indicate that it is currently in update state.
 * For example re-activation of the debt can take a time because it is performed by task.
 *
 * @type {number}
 */
Wl_Collector_DebtStatusSid.SYNC = 7;
