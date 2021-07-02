/**
 * Point to get information about user's payment addresses.
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
   * Payment addresses information.
   *
   * @get result
   * @type {?{}}
   */
  this.a_pay_address = null;

  /**
   * ID of payment owner type.
   * One of {@link RsPayOwnerSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Primary key of a payment owner.
   * May be business of user depending on a {@link \Wl\Pay\Address\AddressApi::$id_pay_owner} value.
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
  return {"a_field": {"a_pay_address": {"get": {"result": true}},"id_pay_owner": {"get": {"get": true}},"k_id": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Address_AddressModel.instanceGet
 * @param {number} id_pay_owner ID of payment owner type. One of {@link RsPayOwnerSid} constants.
 * @param {string} k_id Primary key of a payment owner. May be business of user depending on a {@link \Wl\Pay\Address\AddressApi::$id_pay_owner} value.
 * @returns {Wl_Pay_Address_AddressModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */