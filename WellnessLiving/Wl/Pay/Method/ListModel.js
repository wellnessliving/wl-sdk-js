/**
 * List of payment methods.
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
   * @property {number} id_pay_method Payment method type id.
   * @property {string} k_pay_method Payment method key. Primary key int the {@link \Wl\Pay\Method\MethodSql} table. May be <tt>null</tt> if it is a system payment method.
   * @property {string} s_title Payment method name.
   */

  /**
   * List of payment methods:
   * <dl>
   *   <dt>
   *     int <var>id_pay_method</var>
   *   </dt>
   *   <dd>
   *     Payment method type id.
   *   </dd>
   *   <dt>
   *     string <var>k_pay_method</var>
   *   </dt>
   *   <dd>
   *     Payment method key. Primary key int the {@link \Wl\Pay\Method\MethodSql} table. May be <tt>null</tt> if it is a system payment method.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Payment method name.
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
   * Business primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of a user to show information for.
   * Primary key in {@link \PassportLoginSql} table.
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