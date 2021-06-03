/**
 * API for manipulation with payment owner data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Owner_OwnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * Payment owner type. One of {@link RsPayOwnerSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_owner = undefined;

  /**
   * ID of the purchase owner. Primary key in {@link RsPayOwnerSql}.
   *
   * @get result
   * @type {string}
   */
  this.k_pay_owner = undefined;

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {number}
   */
  this.uid = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Owner_OwnerModel);

/**
 * @inheritDoc
 */
Wl_Pay_Owner_OwnerModel.prototype.config=function()
{
  return {"a_field": {"id_pay_owner": {"get": {"result": true}},"k_pay_owner": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Owner_OwnerModel.instanceGet
 * @param {number} uid ID of a user to show information for.
 * @returns {Wl_Pay_Owner_OwnerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */