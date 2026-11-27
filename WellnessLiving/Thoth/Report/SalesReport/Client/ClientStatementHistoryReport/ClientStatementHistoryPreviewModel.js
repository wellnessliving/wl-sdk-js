/**
 * Returns the HTML of an account statement.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_statement";

  /**
   * The complete HTML document of the statement, to be shown in an isolated frame.
   *
   * The styles are inline, the logo is embedded as a data URI, and there are no scripts, so the document loads
   * nothing from outside. The status badges of the transactions have no icon: they keep their colour and text.
   *
   * @get result
   * @type {string}
   */
  this.html_statement = undefined;

  /**
   * Business key. 
   *
   * Required: `null` means that it was not passed, and the request is refused.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Statement key.
   *
   *
   * Required: `null` means that it was not passed, and the request is refused.
   *
   * @get get
   * @type {?string}
   */
  this.k_statement = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel);

/**
 * @inheritDoc
 */
Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel.prototype.config=function()
{
  return {"a_field":{"html_statement":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_statement":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel.instanceGet
 * @param {?string} k_business Business key. Required: `null` means that it was not passed, and the request is refused.
 * @param {?string} k_statement Statement key. Required: `null` means that it was not passed, and the request is refused.
 * @returns {Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the HTML of an account statement.
 *
 * Checks that the statement belongs to the business and that the caller has access to the profile of the client,
 * then gives the statement as a complete HTML document for a preview in an isolated frame.
 *
 * @function
 * @name Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryPreviewModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
