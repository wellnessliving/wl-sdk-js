/**
 * An endpoint that retrieves a list of taxes for a business.
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
   * @property {number} f_value The amount of the tax.
   * @property {string} k_tax The type of the tax, one of the {@link RsTaxSid} constants.
   * @property {string} k_tax The tax key.
   * @property {string} text_title The name of the tax.
   */

  /**
   * A list of taxes.
   *
   * Each element has the following structure:<dl>
   * <dt>float <var>f_value</var> </dt>
   * <dd>The amount of the tax.</dd>
   * <dt>string <var>k_tax</var> </dt>
   * <dd>The type of the tax, one of the {@link RsTaxSid} constants.</dd>
   * <dt>string <var>k_tax</var> </dt>
   * <dd>The tax key.</dd>
   * <dt>string <var>text_title</var></dt>
   * <dd>The name of the tax.</dd>
   * </dl>
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
 * @param {string} k_business The key of the business for which to get a list of taxes.
 * @returns {Wl_Tax_TaxListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */