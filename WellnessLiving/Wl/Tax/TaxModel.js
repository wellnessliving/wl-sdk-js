/**
 * An endpoint that returns tax information for a business.
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
   * The tax key to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_tax = "0";

  /**
   * The tax title.
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
 * @param {string} k_tax The tax key to get information for.
 * @returns {Wl_Tax_TaxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */