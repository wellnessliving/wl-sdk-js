/**
 * Returns the example result for debugging.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_ExampleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Example argument.
   *
   * @get get
   * @type {number}
   */
  this.i_argument = 0;

  /**
   * Example result.
   *
   * @get result
   * @type {number}
   */
  this.i_result = undefined;

  /**
   * Key of the log record written by the API controller.
   *
   * @get result
   * @type {string}
   */
  this.s_log = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_ExampleModel);

/**
 * @inheritDoc
 */
Core_Request_ExampleModel.prototype.config=function()
{
  return {"a_field":{"i_argument":{"get":{"get":true}},"i_result":{"get":{"result":true}},"s_log":{"get":{"result":true}}}};
};

/**
 * Returns the example result for debugging.
 *
 * A diagnostic endpoint used to verify that a given API connection is working correctly. Increments
 * the input argument by one (confirming round-trip data flow), records a debug log entry with the
 * current session and authentication context, and returns the log key so the caller can inspect it.
 *
 * @function
 * @name Core_Request_ExampleModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
