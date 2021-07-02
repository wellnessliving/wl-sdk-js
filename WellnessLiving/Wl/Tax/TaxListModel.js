/**
 * Tax list API point.
 *
 * This model is generated automatically based on API.
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
   * @property {string} k_tax Tax key. Primary key in the {@link \RsTaxSql} table.
   * @property {string} text_title Tax title.
   */

  /**
   * Tax list.
   *
   * Each element has next structure:<dl>
   * <dt>string <var>k_tax</var> </dt>
   * <dd>Tax key. Primary key in the {@link \RsTaxSql} table.</dd>
   * <dt>string <var>text_title</var></dt>
   * <dd>Tax title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Tax_TaxListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Business key of the taxes.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Tax_TaxListModel);

/**
 * @inheritDoc
 */
Wl_Tax_TaxListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Tax_TaxListModel.instanceGet
 * @param {string} k_business Business key of the taxes.
 * @returns {Wl_Tax_TaxListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */