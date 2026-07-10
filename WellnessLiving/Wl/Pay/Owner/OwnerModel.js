/**
 * Returns information about payment owner.
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
   * @see RsPayOwnerSid
   * @type {number}
   */
  this.id_pay_owner = undefined;

  /**
   * Is client pay only for self. If parent pays for child this flag will be `false` for both.
   * `true` if client pay only for self, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_pay_self_only = true;

  /**
   * Business key.
   *
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
  this.k_pay_owner = undefined;

  /**
   * Key of the money owner.
   *
   * @get result
   * @type {string}
   */
  this.k_pay_owner_money = undefined;

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Owner_OwnerModel);

/**
 * @inheritDoc
 */
Wl_Pay_Owner_OwnerModel.prototype.config=function()
{
  return {"a_field":{"id_pay_owner":{"get":{"result":true}},"is_pay_self_only":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_pay_owner":{"get":{"result":true}},"k_pay_owner_money":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Owner_OwnerModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {?string} k_business Business key. `null` if not passed.
 * @returns {Wl_Pay_Owner_OwnerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about payment owner.
 *
 * Must be called before initiating any payment on behalf of a user, to determine the correct payment
 * owner keys to pass to the payment form. Also indicates whether a family-account relationship exists
 * (for example, a parent paying for a child), which affects how the payment form is pre-populated.
 *
 * @function
 * @name Wl_Pay_Owner_OwnerModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
