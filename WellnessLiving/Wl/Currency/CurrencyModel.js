/**
 * Information about all currencies in the system.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Currency_CurrencyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Currency_CurrencyModel_a_currency
   * @property {boolean} is_before <tt>true</tt> - locate sign before amount; <tt>false</tt> - locate sign after amount.
   * @property {string} s_sign Sign of currency.
   */

  /**
   * Keys - currency keys. Values - information about currency:
   * <dl>
   *   <dt>
   *     bool <var>is_before</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - locate sign before amount; <tt>false</tt> - locate sign after amount.
   *   </dd>
   *   <dt>
   *     string <var>s_sign</var>
   *   </dt>
   *   <dd>
   *     Sign of currency.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Currency_CurrencyModel_a_currency[]}
   */
  this.a_currency = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Currency_CurrencyModel);

/**
 * @inheritDoc
 */
Wl_Currency_CurrencyModel.prototype.config=function()
{
  return {"a_field": {"a_currency": {"get": {"result": true}}}};
};