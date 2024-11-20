/**
 * Menages API methods for summary price on promotion edit page.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Edit_Summary_SummaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "m_price,k_business,s_tax";

  /**
   * Business key within which price should be calculated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Initial price without taxes (or with depends on locale).
   *
   * @get get
   * @type {string}
   */
  this.m_price = "0";

  /**
   * Summary price in business currency.
   *
   * @get result
   * @type {string}
   */
  this.m_summary = undefined;

  /**
   * List of tax IDs divided by coma to apply to initial price.
   *
   * @get get
   * @type {string}
   */
  this.s_tax = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Edit_Summary_SummaryModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Edit_Summary_SummaryModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"m_price": {"get": {"get": true}},"m_summary": {"get": {"result": true}},"s_tax": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Promotion_Edit_Summary_SummaryModel.instanceGet
 * @param {string} m_price Initial price without taxes (or with depends on locale).
 * @param {string} k_business Business key within which price should be calculated.
 * @param {string} s_tax List of tax IDs divided by coma to apply to initial price.
 * @returns {Wl_Promotion_Edit_Summary_SummaryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */