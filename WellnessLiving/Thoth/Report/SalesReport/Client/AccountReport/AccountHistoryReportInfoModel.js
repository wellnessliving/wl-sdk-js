/**
 * Returns the payer information of the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid_client";

  /**
   * Whether the client is currently a payer, i.e. pays for at least one relationship member.
   *
   *
   *
   * When `true`, the toggle is shown and defaults to on.
   *
   * @get result
   * @type {boolean}
   */
  this.is_payer = undefined;

  /**
   * Whether the client has at least one past account transaction paid on behalf of a relationship member.
   *
   * Meaningful only when {@link Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel.is_payer} is `false`.
   * When `true`, the toggle is shown but defaults to off.
   *
   * @get result
   * @type {boolean}
   */
  this.is_payer_has_history = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Full name of the user who pays for this client.
   *
   * Empty string when the client pays for themselves.
   *
   * @get result
   * @type {string}
   */
  this.text_payer_name = undefined;

  /**
   * Client user key.
   *
   * @get get
   * @type {?string}
   */
  this.uid_client = null;

  /**
   * UID of the user who pays for this client. 
   *
   * Empty string when the client pays for themselves.
   *
   * @get result
   * @type {string}
   */
  this.uid_payer = undefined;

  /**
   * URL of the payer's Balance History and Statements page.
   *
   * Empty string when the client pays for themselves.
   *
   * @get result
   * @type {string}
   */
  this.url_payer_balance_history = undefined;

  /**
   * URL of the payer's Statement History tab on the Balance History and Statements page.
   *
   * Empty string when the client pays for themselves.
   *
   * @get result
   * @type {string}
   */
  this.url_payer_statement_history = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel);

/**
 * @inheritDoc
 */
Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel.prototype.config=function()
{
  return {"a_field":{"is_payer":{"get":{"result":true}},"is_payer_has_history":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_payer_name":{"get":{"result":true}},"uid_client":{"get":{"get":true}},"uid_payer":{"get":{"result":true}},"url_payer_balance_history":{"get":{"result":true}},"url_payer_statement_history":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel.instanceGet
 * @param {?string} k_business Business key.
 * @param {?string} uid_client Client user key.
 * @returns {Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the payer information of the client.
 *
 * Tells whether the client pays for relationship members and who pays for the client.
 * For a client paid for by another user, gives the name of the payer and the links to the payer's
 * Balance History and Statement History pages.
 *
 * @function
 * @name Thoth_Report_SalesReport_Client_AccountReport_AccountHistoryReportInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
