/**
 * Class to work with gender string identifiers.
 */
function Wl_Purchase_Item_ItemSid()
{
  // Empty constructor.
}

/**
 * Personal user's account refill.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.ACCOUNT = 7;

/**
 * Business account payment.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.ACCOUNT_BUSINESS = 11;

/**
 * Single appointment reservation.
 *
 * This purchase is created when a worker has charged a client for an appointment.
 *
 * This purchase can only be created in POS.
 *
 * @see Wl_Purchase_Item_ItemSid.SERVICE
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.APPOINTMENT = 8;

/**
 * Single appointment reservation with deposit.
 *
 * This purchase created when client books a single appointment reservation with deposit amount,
 * to do so appointment should be managed with deposit.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.APPOINTMENT_DEPOSIT = 18;

/**
 * Tips for the appointment.
 *
 * @see RsPurchaseItemAppointment Purchase item manager class.
 * @see RsPurchaseItemSid::SERVICE A purchased item that is created during the online booking process.
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.APPOINTMENT_TIP = 22;

/**
 * Expense that comes along with the payment business. It contains information about additional services which are
 * included in the package. For example, payment for SMS.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.BUSINESS_EXPENSE = 16;

/**
 * A skipped purchase for the business account.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.BUSINESS_SKIP = 17;

/**
 * Single classes.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.CLASS_PERIOD = 2;

/**
 * Arbitrary money withdrawal with comment.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.COMMENT = 13;

/**
 * Gift Cards.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.COUPON = 10;

/**
 * Events and enrollments. Client can not book only one class, he needs to to book the whole enrollment.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.ENROLLMENT = 4;

/**
 * Enrollment reservation with a deposit.
 *
 * This purchase created when client books an enrollment reservation with deposit amount,
 * to do so enrollment should be managed with deposit.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.ENROLLMENT_DEPOSIT = 19;

/**
 * Enrollment reservation with a discount.
 *
 * This purchase created when client books an enrollment reservation with early bird price.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.ENROLLMENT_DISCOUNT = 21;

/**
 * Payment by an installment plan.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.INSTALLMENT = 14;

/**
 * Recurrent payments.
 *
 * <tt>k_id</tt> is ID of a purchased promotion (<tt>k_login_promotion</tt>).
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.MEMBERSHIP = 3;

/**
 * Products.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.PRODUCT = 9;

/**
 * Promotions.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.PROMOTION = 1;

/**
 * A purchase to renew a promotion.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.PROMOTION_RENEW = 12;

/**
 * A purchase to book an asset.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.RESOURCE = 15;

/**
 * A purchase to book a deposit asset.
 *
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.RESOURCE_DEPOSIT = 20;

/**
 * Purchase item for appointments.
 *
 * This purchase item is created during the online booking process.
 *
 * @see Wl_Purchase_Item_ItemSid.APPOINTMENT
 * @type {number}
 */
Wl_Purchase_Item_ItemSid.SERVICE = 6;