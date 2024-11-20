/**
 * An endpoint that gets the payment owner ID.
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
  this._s_key = "uid,k_business";

  /**
   * The type of user for which transactions can be made (this property is optional).
   *
   * This is one of the {@link RsPayOwnerSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_owner = undefined;

  /**
   * Is client pay only for self. If parent pays for child this flag will be `false` for both.
   *
   * @get result
   * @type {*}
   */
  this.is_pay_self_only = true;

  /**
   * Business key.
   * `null` if not passed.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The payment owner key. This is used for financial transactions.
   *
   * @get result
   * @type {string}
   */
  this.k_pay_owner = "0";

  /**
   * Key of the money owner.
   *
   * Copy of result of {@link Wl\Pay\Owner\PayOwner::ownerMoney()}.
   *
   * @get result
   * @type {string}
   */
  this.k_pay_owner_money = "";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
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
  return {"a_field": {"id_pay_owner": {"get": {"result": true}},"is_pay_self_only": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_pay_owner": {"get": {"result": true}},"k_pay_owner_money": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Owner_OwnerModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {?string} k_business Business key. `null` if not passed.
 * @returns {Wl_Pay_Owner_OwnerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */