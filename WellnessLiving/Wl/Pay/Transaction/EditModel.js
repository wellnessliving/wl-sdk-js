/**
 * Allows to manually change some data of a payment transaction process, such as date, amount, payment method.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Transaction_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Pay_Transaction_EditModel_a_time
   * @property {number} i_hour Number of hours.
   * @property {number} i_minute Number of minutes.
   * @property {boolean} is_am Whether time in AM or PM.
   */

  /**
   * New time of payment transaction:
   * <dl>
   *   <dt>int <var>i_hour</var></dt>
   *   <dd>Number of hours.</dd>
   *   <dt>int <var>i_minute</var></dt>
   *   <dd>Number of minutes.</dd>
   *   <dt>bool <var>is_am</var></dt>
   *   <dd>Whether time in AM or PM.</dd>
   * </dl>
   *
   * Not specified if should not be changed.
   *
   * @put post
   * @type {Wl_Pay_Transaction_EditModel_a_time}
   */
  this.a_time = undefined;

  /**
   * New date without time of payment transaction process.
   *
   * Not specified if should not be changed.
   *
   * @put post
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Changed amount of the transaction.
   *
   * @put result
   * @type {string}
   */
  this.html_amount = undefined;

  /**
   * Changed date of the transaction.
   *
   * @put result
   * @type {string}
   */
  this.html_date = undefined;

  /**
   * New base payment method of payment transaction. One of {@link \RsPayMethodSid} constants.
   *
   * Not specified if should not be changed.
   *
   * @put post
   * @type {number}
   */
  this.id_pay_method = undefined;

  /**
   * New custom payment method of payment transaction. Primary key from {@link \Wl\Pay\Method\MethodSql}.
   *
   * Not specified if should not be changed or if base payment method should be used.
   *
   * @put post
   * @type {string}
   */
  this.k_pay_method = undefined;

  /**
   * ID of a payment transaction to change.
   *
   * Primary key from {@link \RsPayTransactionSql}.
   *
   * May be empty if {@link \EditApi.$k_pay_transaction_process} is specified.
   *
   * @put get
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * ID of a payment transaction process to change.
   *
   * Primary key from {@link \RsPayTransactionProcessSql}.
   *
   * May be empty if {@link \EditApi.$k_pay_transaction} is specified.
   *
   * @put get
   * @type {string}
   */
  this.k_pay_transaction_process = undefined;

  /**
   * New amount of payment transaction process.
   *
   * Not specified if should not be changed.
   *
   * @put post
   * @type {string}
   */
  this.m_amount = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Transaction_EditModel);

/**
 * @inheritDoc
 */
Wl_Pay_Transaction_EditModel.prototype.config=function()
{
  return {"a_field": {"a_time": {"put": {"post": true}},"dt_date_local": {"put": {"post": true}},"html_amount": {"put": {"result": true}},"html_date": {"put": {"result": true}},"id_pay_method": {"put": {"post": true}},"k_pay_method": {"put": {"post": true}},"k_pay_transaction": {"put": {"get": true}},"k_pay_transaction_process": {"put": {"get": true}},"m_amount": {"put": {"post": true}}}};
};