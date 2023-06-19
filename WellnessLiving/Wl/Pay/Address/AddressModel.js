/**
 * An endpoint that gets information about a user's payment addresses.
 *
 * This model is generated automatically based on API.
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
   * The payee's address information.
   *
   * @get result
   * @type {{}}
   */
  this.a_pay_address = undefined;

  /**
   * The ID of the payment owner type.
   * One of {@link RsPayOwnerSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Business key, where the payment is performed.
   * <tt>null</tt> if pay owner is not user.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The primary key of a payment owner.
   * This could be the business of the user depending on a {@link Wl_Pay_Address_AddressModel.id_pay_owner} value.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_AddressModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_AddressModel.prototype.config=function()
{
  return {"a_field": {"a_pay_address": {"get": {"result": true}},"id_pay_owner": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Address_AddressModel.instanceGet
 * @param {number} id_pay_owner The ID of the payment owner type. One of {@link RsPayOwnerSid} constants.
 * @param {string} k_id The primary key of a payment owner. This could be the business of the user depending on a {@link Wl_Pay_Address_AddressModel.id_pay_owner} value.
 * @returns {Wl_Pay_Address_AddressModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */