/**
 * Retrieves the debt status of the specified user within the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Collector_DebtStatus_DebtStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Date and time when user sent to collection agency.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.dtl_sent = null;

  /**
   * Date and time since user in given debt status.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.dtl_since = null;

  /**
   * Date and time when user sent to collection agency.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_sent = null;

  /**
   * Date and time since user in given debt status.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_since = null;

  /**
   * Number of days past due.
   *
   * @get result
   * @type {number}
   */
  this.i_day_due = undefined;

  /**
   * The currency for which status should be retrieved.
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * `null` if status should be retrieved for current business currency.
   *
   * @get get,result
   * @see Core_Locale_CurrencySid
   * @type {?number}
   */
  this.id_currency = null;

  /**
   * The debt status ID of the client.
   * One of {@link Wl_Collector_DebtStatusSid} constants.
   *
   * `0` if collections are not supported or status could not be defined.
   *
   * @get result
   * @see Wl_Collector_DebtStatusSid
   * @type {number}
   */
  this.id_status = undefined;

  /**
   * The key of the business within which status of the user should be retrieved.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Active debt key.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.k_collector_debt = null;

  /**
   * Current debt amount.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.m_debt_current = null;

  /**
   * Future debt amount.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.m_debt_future = null;

  /**
   * Additional note to the debt.
   *
   * `null` if user has no debts.
   *
   * @get result
   * @type {?string}
   */
  this.text_comment = null;

  /**
   * The key of the user for which status should be retrieved.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtStatus_DebtStatusModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtStatus_DebtStatusModel.prototype.config=function()
{
  return {"a_field":{"dtl_sent":{"get":{"result":true}},"dtl_since":{"get":{"result":true}},"dtu_sent":{"get":{"result":true}},"dtu_since":{"get":{"result":true}},"i_day_due":{"get":{"result":true}},"id_currency":{"get":{"get":true,"result":true}},"id_status":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_collector_debt":{"get":{"result":true}},"m_debt_current":{"get":{"result":true}},"m_debt_future":{"get":{"result":true}},"text_comment":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Retrieves the debt status of the specified user within the business.
 *
 * Validates the business, the user, the current subscription, and access privileges, then loads the
 * current debt status: days past due, current and future debt amounts, collection dates, and any comment.
 *
 * @function
 * @name Wl_Collector_DebtStatus_DebtStatusModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
