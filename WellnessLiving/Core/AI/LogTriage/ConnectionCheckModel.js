/**
 * Returns a fixed connection value and, when requested, selected findings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_AI_LogTriage_ConnectionCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_AI_LogTriage_ConnectionCheckModel_a_finding
   * @property {string} dl_first_seen Local date of the first WatchUsageStat record.
   * @property {string} dl_last_seen Local date of the last WatchUsageStat record.
   * @property {string} dtu_first_seen UTC date/time of the first matching log or async-task record. Empty for background tasks.
   * @property {string} dtu_last_seen UTC date/time of the last matching log or async-task record. Empty for background tasks.
   * @property {number} i_occurrence_count Number of matching records.
   * @property {number} id_source Finding source from {@link Core_AI_LogTriage_TriageSourceSid}.
   * @property {string} s_object WatchUsageStat object. Present for this source.
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
   * IDs of finding sources from {@link Core_AI_LogTriage_TriageSourceSid}.
   *
   * @get get
   * @type {number[]}
   */
  this.a_id_source = undefined;

  /**
   * Connection check value.
   *
   * @get result
   * @type {number}
   */
  this.i_result = undefined;

  /**
   * Whether findings must be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_finding = false;

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
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_AI_LogTriage_ConnectionCheckModel);

/**
 * @inheritDoc
 */
Core_AI_LogTriage_ConnectionCheckModel.prototype.config=function()
{
  return {"a_field":{"a_finding":{"get":{"result":true}},"a_id_source":{"get":{"get":true}},"i_result":{"get":{"result":true}},"is_finding":{"get":{"get":true}},"s_date_mask":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * Returns a fixed connection value and, when requested, selected findings.
 *
 * @function
 * @name Core_AI_LogTriage_ConnectionCheckModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
