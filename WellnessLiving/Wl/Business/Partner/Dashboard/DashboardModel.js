/**
 * Class for drawing chart earnings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_Dashboard_DashboardModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Data for chart report.
   *
   * @get result
   * @type {string}
   */
  this.html_chart = undefined;

  /**
   * Chart format ID. One of {@link \Wl\Business\Partner\Dashboard\ChartEarningsSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_chart = undefined;

  /**
   * Key of the business. Primary key from  {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_Dashboard_DashboardModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_Dashboard_DashboardModel.prototype.config=function()
{
  return {"a_field": {"html_chart": {"get": {"result": true}},"id_chart": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};