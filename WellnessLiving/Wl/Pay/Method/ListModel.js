/**
 * An endpoint containing a model to get the list of payment methods.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Method_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Pay_Method_ListModel_a_pay_method
   * @property {number} id_pay_method The payment method type ID. One of {@link RsPayMethodSid} constants.
   * @property {?string} k_pay_method Payment method key. May be <tt>null</tt> if it is a system payment method.
   * @property {string} s_title The payment method name.
   */

  /**
   * A list of payment methods:
   * <dl>
   *   <dt>
   *     int <var>id_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method type ID. One of {@link RsPayMethodSid} constants.
   *   </dd>
   *   <dt>
   *     string|null <var>k_pay_method</var>
   *   </dt>
   *   <dd>
   *     Payment method key. May be <tt>null</tt> if it is a system payment method.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The payment method name.
   *   </dd>
   * </dl>
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
  this.is_active = true;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Method_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Method_ListModel.prototype.config=function()
{
  return {"a_field": {"a_pay_method": {"get": {"result": true}},"is_active": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};