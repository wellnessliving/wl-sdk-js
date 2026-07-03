/**
 * Returns taxes of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tax_TaxListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Tax_TaxListModel_a_list
   * @property {string[]} a_location The locations where the tax is applicable.
   * @property {number} f_value The amount of the tax.
   * @property {string} k_tax The tax key.
   * @property {string} text_title The name of the tax.
   */

  /**
   * A list of taxes.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Tax_TaxListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * The key of the business for which to get a list of taxes.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tax_TaxListModel);

/**
 * @inheritDoc
 */
Wl_Tax_TaxListModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Tax_TaxListModel.instanceGet
 * @param {string} k_business The key of the business for which to get a list of taxes.
 * @returns {Wl_Tax_TaxListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns taxes of the specified business.
 *
 * Returns all active taxes configured for the business, including each tax's title, rate,
 * and type. Used to populate tax pickers when creating products, promotions, or invoices.
 *
 * @function
 * @name Wl_Tax_TaxListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
