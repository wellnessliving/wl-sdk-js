/**
 * Action that a client or staff performs with terms and conditions of cart items.
 */
function Wl_Catalog_Terms_TermsActionSid()
{
  // Empty constructor.
}

/**
 * Terms and conditions are accepted.
 *
 * @type {number}
 */
Wl_Catalog_Terms_TermsActionSid.AGREE = 1;

/**
 * Terms and conditions are declined, so items are removed from the cart.
 *
 * @type {number}
 */
Wl_Catalog_Terms_TermsActionSid.DECLINE = 2;

/**
 * Terms and conditions are skipped by staff in the point of sale.
 *
 * @type {number}
 */
Wl_Catalog_Terms_TermsActionSid.SKIP = 3;
