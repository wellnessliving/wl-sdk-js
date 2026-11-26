/**
 * The sorts of the list of Purchase Options.
 *
 * Last used ID: 5.
 */
function Wl_Promotion_Editor_ListSortEnum()
{
  // Empty constructor.
}

/**
 * By the length of the Purchase Option: the unit of the duration, then its number.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListSortEnum.LENGTH = 3;

/**
 * By the title of the Purchase Option.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListSortEnum.NAME = 1;

/**
 * By the order in which clients see the Purchase Options in the store.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListSortEnum.ORDER = 5;

/**
 * By the price of the Purchase Option.
 *
 * The order follows the price that is saved with the Purchase Option, as the old list does. A package shows the
 * sum of its components, so its place may differ from the price shown.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListSortEnum.PRICE = 2;

/**
 * By the number of the visits that the Purchase Option includes.
 *
 * The order follows the limit that is saved with the Purchase Option, as the old list does. A guest pass shows the
 * limit of its own settings, so its place may differ from the visits shown.
 *
 * @type {number}
 */
Wl_Promotion_Editor_ListSortEnum.VISIT = 4;
