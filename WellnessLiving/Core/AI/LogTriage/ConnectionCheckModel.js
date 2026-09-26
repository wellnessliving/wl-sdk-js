/**
 * Collects findings for the requested calendar date.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_AI_LogTriage_ConnectionCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_AI_LogTriage_ConnectionCheckModel_a_finding
   * @property {number} cid_source CID of a {@link Core_AI_LogTriage_TriageProblemAbstract} subclass.
   * @property {string} dl_first_seen Date of the first usage-statistics record.
   * @property {string} dl_last_seen Date of the last usage-statistics record.
   * @property {string} dtu_first_seen UTC date/time of the first matching log or async-task record. Empty for background tasks.
   * @property {string} dtu_last_seen UTC date/time of the last matching log or async-task record. Empty for background tasks.
   * @property {number} i_occurrence_count Number of matching records.
   * @property {number} i_priority_multiplier Usage-statistics priority multiplier. Present for the usage-statistics source.
   * @property {string} s_object Usage-statistics object. Present for the usage-statistics source.
   * @property {string} s_period Usage-statistics aggregation period. Present for the usage-statistics source.
   * @property {string} s_priority Usage-statistics priority. Present for the usage-statistics source.
   * @property {string} text_message Log message or task description. Present for log and task sources.
   */

  /**
   * Grouped findings.
   *
   * One element contains:
   *
   * @get result
   * @type {Core_AI_LogTriage_ConnectionCheckModel_a_finding[]}
   */
  this.a_finding = undefined;

  /**
   * Calendar date to collect findings for. Empty string selects the current UTC date.
   *
   * @get get
   * @type {string}
   */
  this.dl_date = "";

  /**
   * Optional case-insensitive message substring.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_AI_LogTriage_ConnectionCheckModel);

/**
 * @inheritDoc
 */
Core_AI_LogTriage_ConnectionCheckModel.prototype.config=function()
{
  return {"a_field":{"a_finding":{"get":{"result":true}},"dl_date":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * Collects findings for the requested calendar date.
 *
 * Searches every registered problem source using the requested date and optional text filter.
 *
 * @function
 * @name Core_AI_LogTriage_ConnectionCheckModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
