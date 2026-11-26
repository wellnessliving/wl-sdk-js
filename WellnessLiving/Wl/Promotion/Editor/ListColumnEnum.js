/**
 * The optional columns of the list of Purchase Options, whose data is read only when it is asked.
 *
 * The nine default columns and the status of a Purchase Option are always in a row, so they are not here.
 *
 * Last used ID: 11.
 */
function Wl_Promotion_Editor_ListColumnEnum()
{
  // Empty constructor.
}

/**
 * The limit of the purchases of one client.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.BUY_LIMIT = 1;

/**
 * The client groups that the Purchase Option is only for.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.CLIENT_GROUP = 8;

/**
 * The client types that the Purchase Option is only for.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.CLIENT_TYPE = 9;

/**
 * Who created the Purchase Option and when.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.CREATE = 6;

/**
 * Who changed the Purchase Option last and when.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.EDIT = 7;

/**
 * The locations where the Purchase Option is sold.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.LOCATION = 10;

/**
 * The date when the Purchase Option is published.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.PUBLISH = 2;

/**
 * Whether the Purchase Option renews itself.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.RENEW = 3;

/**
 * The store categories of the Purchase Option.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.SHOP_CATEGORY = 11;

/**
 * The planned date when the Purchase Option is switched off.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.STATUS = 4;

/**
 * The date when the Purchase Option is unpublished.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListColumnEnum.UNPUBLISH = 5;
