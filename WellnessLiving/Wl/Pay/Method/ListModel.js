/**
 * Returns list of active payment methods data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Method_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_active,show_manual";

  /**
   * @typedef {{}} Wl_Pay_Method_ListModel_a_pay_method
   * @property {?number} id_pay_method A list of payment methods.
   * @property {?string} k_pay_method Payment method key.  May be `null` if it is a system payment method.
   * @property {string} s_title The payment method name.
   */

  /**
   * A list of payment methods:
   *
   * @get result
   * @type {Wl_Pay_Method_ListModel_a_pay_method[]}
   */
  this.a_pay_method = undefined;

  /**
   * Whether only active payment methods should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_active = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Whether payment method {@link RsPayMethodSid} should be included in response.
   *
   * @get get
   * @type {boolean}
   */
  this.show_manual = false;

  /**
   * The key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Method_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Method_ListModel.prototype.config=function()
{
  return {"a_field":{"a_pay_method":{"get":{"result":true}},"is_active":{"get":{"get":true}},"k_business":{"get":{"get":true}},"show_manual":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Method_ListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} uid The key of a user to show information for.
 * @param {boolean} is_active Whether only active payment methods should be returned.
 * @param {boolean} show_manual Whether payment method {@link RsPayMethodSid} should be included in response.
 * @returns {Wl_Pay_Method_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns list of active payment methods data.
 *
 * Returns the system-level payment methods enabled for the business combined with any custom payment methods
 * configured for the business and accessible to the given user based on their role. When `$is_active` is
 * `false`, inactive custom methods are included as well.
 *
 * @function
 * @name Wl_Pay_Method_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
