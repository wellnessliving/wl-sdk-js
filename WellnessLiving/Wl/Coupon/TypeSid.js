/**
 * List of possible types of Gift Cards.
 */
function Wl_Coupon_TypeSid()
{
  // Empty constructor.
}

/**
 * Amount Gift Card. Only one card of this type can be created in one business.
 *
 * @type {number}
 */
Wl_Coupon_TypeSid.AMOUNT = 2;

/**
 * Product Gift Card. Many cards of this type can be created in one business. Each card contains list of products.
 *
 * @type {number}
 */
Wl_Coupon_TypeSid.COMPONENT = 1;

/**
 * Quick Gift Card. Only one card of this type can be created in one business.
 *
 * @type {number}
 */
Wl_Coupon_TypeSid.QUICK = 3;
