/**
 * API to retrieve quantity of recipients which will get a postcard.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Mail_PostcardSummaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Quantity of recipients.
   *
   * @get result
   * @type {number}
   */
  this.i_quantity = undefined;

  /**
   * Business in which clients must be searched.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Current currency of the business.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Total cost of postcards.
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * ID of the element with the list of receivers.
   * See {@link \RsReportMail::list_set()}.
   *
   * @get get
   * @type {string}
   */
  this.s_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Mail_PostcardSummaryModel);

/**
 * @inheritDoc
 */
Wl_Report_Mail_PostcardSummaryModel.prototype.config=function()
{
  return {"a_field": {"i_quantity": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_currency": {"get": {"result": true}},"m_cost": {"get": {"result": true}},"s_id": {"get": {"get": true}}}};
};