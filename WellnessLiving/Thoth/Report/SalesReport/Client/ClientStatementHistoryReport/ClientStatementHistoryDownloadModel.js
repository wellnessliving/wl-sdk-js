/**
 * Returns the PDF of an account statement.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_statement";

  /**
   * Business key.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Statement primary key.
   *
   * @get get
   * @type {?string}
   */
  this.k_statement = null;

  /**
   * Base64-encoded PDF binary content.
   *
   * Decode on the client side and use as a Blob URL for file download.
   *
   * @get result
   * @type {string}
   */
  this.s_pdf_base64 = undefined;

  /**
   * Suggested file name for the downloaded PDF.
   *
   * @get result
   * @type {string}
   */
  this.text_filename = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel);

/**
 * @inheritDoc
 */
Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"k_statement":{"get":{"get":true}},"s_pdf_base64":{"get":{"result":true}},"text_filename":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel.instanceGet
 * @param {?string} k_business Business key.
 * @param {?string} k_statement Statement primary key.
 * @returns {Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the PDF of an account statement.
 *
 * Checks that the statement belongs to the business and that the caller has access to the profile of the client,
 * then gives the PDF as a Base64 string together with a suggested file name.
 *
 * @function
 * @name Thoth_Report_SalesReport_Client_ClientStatementHistoryReport_ClientStatementHistoryDownloadModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
