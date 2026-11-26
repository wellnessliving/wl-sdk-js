/**
 * The statuses by which the list of Purchase Options is filtered.
 *
 * Last used ID: 3.
 */
function Wl_Promotion_Editor_ListStatusEnum()
{
  // Empty constructor.
}

/**
 * Active Purchase Options: switched on and not expired.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListStatusEnum.ACTIVE = 1;

/**
 * Purchase Options of every status.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListStatusEnum.ALL = 3;

/**
 * Inactive Purchase Options: switched off or expired.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListStatusEnum.INACTIVE = 2;
