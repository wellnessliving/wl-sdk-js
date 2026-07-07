/**
 * Gets user's payment addresses information.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_AddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_pay_owner,k_id";

  /**
   * @typedef {{}} Wl_Pay_Address_AddressModel_a_pay_address
   * @property {boolean} is_selected `true` if this address is currently selected, `false` otherwise.
   * @property {?string} k_country Country geo key. `null` if the country cannot be determined.
   * @property {string} k_pay_address Payment address key. Primary key in the `rs_pay_address` table.
   * @property {string} k_region Region geo key.
   * @property {string} s_city City name.
   * @property {?string} s_country Country name. `null` if the country cannot be determined.
   * @property {string} s_country_code Country abbreviation code, or an empty string if unavailable.
   * @property {string} s_name Full name of the address owner.
   * @property {string} s_phone Phone number.
   * @property {string} s_postal Postal code.
   * @property {?string} s_region Region name.
   * @property {?string} s_region_code Region abbreviation code. `null` if the region cannot be determined.
   * @property {string} s_street1 First line of the street address.
   * @property {string} s_street2 Second line of the street address.
   * @property {?string} text_mail Email address of the owner. `null` if the owner is a business.
   */

  /**
   * The payee's address information.
   *
   * A list of payment addresses belonging to the owner. Each element: 
   *
   * `null` if the current user has no access to the required information, or cannot edit the bank account.
   *
   * @get result
   * @type {?Wl_Pay_Address_AddressModel_a_pay_address[]}
   */
  this.a_pay_address = null;

  /**
   * The ID of the payment owner type.
   * One of {@link RsPayOwnerSid} constants.
   *
   * @get get
   * @see RsPayOwnerSid
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Business key, where the payment is performed.
   * `null` if pay owner is not user.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The primary key of a payment owner.
   * This could be the business of the user depending on a {@link Thoth_WlPay_Address_AddressModel.id_pay_owner} value.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_AddressModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_AddressModel.prototype.config=function()
{
  return {"a_field":{"a_pay_address":{"get":{"result":true}},"id_pay_owner":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_id":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Address_AddressModel.instanceGet
 * @param {number} id_pay_owner The ID of the payment owner type. One of {@link RsPayOwnerSid} constants.
 * @param {string} k_id The primary key of a payment owner. This could be the business of the user depending on a {@link Thoth_WlPay_Address_AddressModel.id_pay_owner} value.
 * @returns {Wl_Pay_Address_AddressModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets user's payment addresses information.
 *
 * Returns the list of saved payment addresses for the specified owner type and key, including address fields,
 * country and region details, and the currently selected address. Returns `null` if the current user cannot
 * edit bank accounts for the owner.
 *
 * @function
 * @name Wl_Pay_Address_AddressModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
