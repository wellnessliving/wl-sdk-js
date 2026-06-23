/**
 * Deletes business phone number from the system.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Phone_PhoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of locales.
   *
   * Last used ID: 21
   *
   * Values:
   * - 4 (`AUSTRALIA`): Australia.
   * - 20 (`BAHAMAS`): Bahamas.
   * - 19 (`BERMUDA`): Bermuda.
   * - 2 (`CANADA`): Canada.
   * - 5 (`CAYMAN`): Cayman Islands.
   * - 13 (`CYPRUS`): Cyprus.
   * - 8 (`EGYPT`): Egypt.
   * - 18 (`IRELAND`): Republic of Ireland.
   * - 14 (`KUWAIT`): Kuwait
   * - 16 (`MAURITIUS`): Republic of Mauritius.
   * - 9 (`NEVERLAND`): A special locale that can be used for testing or a business situated in an unknown region.
   * - 10 (`NEW_ZEALAND`): New Zealand.
   * - 12 (`PHILIPPINES`): Philippines.
   * - 15 (`SAUDI_ARABIA`): Saudi Arabia.
   * - 17 (`SENEGAL`): Senegal
   * - 21 (`SINGAPORE`): Singapore.
   * - 6 (`SOUTH_AFRICA`): South Africa.
   * - 11 (`UAE`): United Arab Emirates.
   * - 3 (`UK`): United Kingdom.
   * - 1 (`USA`): United States of America.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Business phone number(in locale format).
   * Used to receive SMS notifications from clients. Can be `null` during bundle SID saving.
   *
   * @delete get
   * @get result
   * @post get
   * @type {?string}
   */
  this.text_phone = null;

  /**
   * Business phone number mask.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_mask = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Phone_PhoneModel);

/**
 * @inheritDoc
 */
Wl_Business_Phone_PhoneModel.prototype.config=function()
{
  return {"a_field":{"id_locale":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"text_phone":{"delete":{"get":true},"get":{"result":true},"post":{"get":true}},"text_phone_mask":{"get":{"result":true}}}};
};

/**
 * Deletes business phone number from the system.
 *
 * Used by WellnessLiving admins to decommission a business's SMS messaging service. After deletion,
 * the business can no longer receive inbound SMS notifications. Admin privileges are required.
 *
 * @function
 * @name Wl_Business_Phone_PhoneModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns phone number(in locale format) of the business, if phone number does not exist returns empty line.
 *
 * Used in the SMS settings UI to display the currently registered business phone number and its input
 * mask. The locale is derived from the business's office country so the number is formatted correctly
 * for that region.
 *
 * @function
 * @name Wl_Business_Phone_PhoneModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Registers business phone number in system.
 *
 * Used when a business enables SMS messaging for the first time or replaces an existing number.
 * Provisions a messaging service with the SMS provider so the business can receive inbound client
 * messages. If the same number is already registered for this business, the call is a no-op.
 *
 * @function
 * @name Wl_Business_Phone_PhoneModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
