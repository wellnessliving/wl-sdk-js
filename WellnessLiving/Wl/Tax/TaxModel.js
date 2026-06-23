/**
 * Returns the title for the specified tax.
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
  this.k_tax = "";

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
  return {"a_field":{"k_tax":{"get":{"get":true}},"text_tax":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Tax_TaxModel.instanceGet
 * @param {string} k_tax The tax key to get information for.
 * @returns {Wl_Tax_TaxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the title for the specified tax.
 *
 * Returns the human-readable display name for the given tax record. Throws if the tax
 * key is invalid or if the tax has been marked as removed.
 *
 * @function
 * @name Wl_Tax_TaxModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
