/**
 * Logs new error occurred in browser.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Debug_ErrorModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of errors. Each entry is either a raw error message or a structured array with error details.
   *
   * JSON-encoded array mary arrive as a `string`.
   *
   * @post post
   * @type {*[]|string}
   */
  this.a_error_list = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Debug_ErrorModel);

/**
 * @inheritDoc
 */
Core_Debug_ErrorModel.prototype.config=function()
{
  return {"a_field":{"a_error_list":{"post":{"post":true}}}};
};

/**
 * Logs new error occurred in browser.
 *
 * Ignores errors reported by bots and monitoring user agents. Accepts up to
 * `MAX_ERROR` errors per request, discarding any extra entries. Each error is
 * written to the debug log: variable errors are logged as-is together with the current session
 * and user agent, while structured error records are formatted into a message that includes the
 * file, line number, browser, and stack trace when available.
 *
 * @function
 * @name Core_Debug_ErrorModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
