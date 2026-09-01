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
   * Grouped findings.
   *
   * One element contains:
   *
   * @get result
   * @type {{}}
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
   * `true` returns findings; otherwise `false` performs only the connection check.
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
