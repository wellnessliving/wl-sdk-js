/**
 * Returns a fixed connection value and, when requested, selected log findings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_AI_LogTriage_ConnectionCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_AI_LogTriage_ConnectionCheckModel_a_log
   * @property {number} i_occurrence_count Number of matching records.
   * @property {string} s_first_seen Date of the first matching record.
   * @property {string} s_last_seen Date of the last matching record.
   * @property {string} s_message Log message.
   * @property {string} s_source Log source: `error` or `slow`.
   */

  /**
   * Grouped log findings.
   *
   * One element contains:
   *
   * @get result
   * @type {Core_AI_LogTriage_ConnectionCheckModel_a_log[]}
   */
  this.a_log = undefined;

  /**
   * Connection check value.
   *
   * @get result
   * @type {number}
   */
  this.i_result = undefined;

  /**
   * Whether log findings must be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_log = false;

  /**
   * Date/time mask accepted by LogSearchQuery.
   *
   * Empty string selects the current UTC date.
   *
   * @get get
   * @type {string}
   */
  this.s_date_mask = "";

  /**
   * Optional case-insensitive message substring.
   *
   * @get get
   * @type {string}
   */
  this.s_search = "";

  /**
   * Log source: `all`, `error`, or `slow`.
   *
   * @get get
   * @type {string}
   */
  this.s_source = "all";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_AI_LogTriage_ConnectionCheckModel);

/**
 * @inheritDoc
 */
Core_AI_LogTriage_ConnectionCheckModel.prototype.config=function()
{
  return {"a_field":{"a_log":{"get":{"result":true}},"i_result":{"get":{"result":true}},"is_log":{"get":{"get":true}},"s_date_mask":{"get":{"get":true}},"s_search":{"get":{"get":true}},"s_source":{"get":{"get":true}}}};
};

/**
 * Returns a fixed connection value and, when requested, selected log findings.
 *
 * @function
 * @name Core_AI_LogTriage_ConnectionCheckModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
