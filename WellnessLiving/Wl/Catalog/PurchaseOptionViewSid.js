/**
 * A list of Purchase Option view types.
 *
 * Last ID: 9.
 */
function Wl_Catalog_PurchaseOptionViewSid()
{
  // Empty constructor.
}

/**
 * A single appointment reservation.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.APPOINTMENT = 1;

/**
 * A single class reservation.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.CLASS_PERIOD = 2;

/**
 * A gift card.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.COUPON = 3;

/**
 * Enrollments. Classes where flag event is `true`.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.ENROLLMENT = 4;

/**
 * Promotions with programs: * {@link RsProgramSid}; * {@link RsProgramSid}; * {@link RsProgramSid}; * {@link RsProgramSid}; * {@link RsProgramSid}.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.MEMBERSHIP = 8;

/**
 * Promotions with program {@link RsProgramSid}.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.PACKAGE = 5;

/**
 * Products (such as water, t-shirts, etc.).
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.PRODUCT = 6;

/**
 * Session passes.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.PROMOTION = 7;

/**
 * Products available for quick buy.
 *
 * @type {number}
 */
Wl_Catalog_PurchaseOptionViewSid.QUICK_BUY = 9;
