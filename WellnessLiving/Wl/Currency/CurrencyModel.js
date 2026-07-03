/**
 * Retrieves information about currencies.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Currency_CurrencyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Currency_CurrencyModel_a_currency
   * @property {boolean} is_before `true` - locate sign before amount; `false` - locate sign after amount.
   * @property {string} s_sign Sign of currency.
   * @property {string} sid_currency International code of the currency.
   */

  /**
   * Keys - currency keys. Values - information about currency:
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
  return {"a_field":{"a_currency":{"get":{"result":true}}}};
};

/**
 * Retrieves information about currencies.
 *
 * Queries all active (non-removed) currencies from the database and returns them as an associative array
 * keyed by currency key, with each entry containing the currency sign, its display position, and the
 * international currency code.
 *
 * @function
 * @name Wl_Currency_CurrencyModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
