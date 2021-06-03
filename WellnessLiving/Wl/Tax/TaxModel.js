/**
 * Entry point for tax data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Tax_TaxModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_tax";

  /**
   * Tax ID. Primary key in {@link \RsTaxSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_tax = "0";

  /**
   * Tax title.
   *
   * @get result
   * @type {string}
   */
  this.text_tax = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tax_TaxModel);

/**
 * @inheritDoc
 */
Wl_Tax_TaxModel.prototype.config=function()
{
  return {"a_field": {"k_tax": {"get": {"get": true}},"text_tax": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Tax_TaxModel.instanceGet
 * @param {string} k_tax Tax ID. Primary key in {@link \RsTaxSql} table.
 * @returns {Wl_Tax_TaxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */