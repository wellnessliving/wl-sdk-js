/**
 * @typedef {{}} WlSdk_SyncError_a_error
 * @property {string} html_message HTML version of user-friendly error message.
 * @property {number} id Numeric version of error code.
 * @property {string} s_field Name of the field to which this error is bound.
 * @property {string} s_message Textual version of user-friendly error message
 * (may contain unescaped HTML special characters!).
 * @property {string} sid String version of error code.
 */

/**
 * Data structure that represents information about an error.
 *
 * @constructor
 */
function WlSdk_SyncError()
{
  /**
   * A list of all errors that occurred.
   *
   * @type {WlSdk_SyncError_a_error[]}
   */
  this.a_error = [];

  /**
   * Class of error that occurred.
   *
   * @type {string}
   */
  this.s_class = '';

  /**
   * User-friendly error message.
   *
   * @type {string}
   */
  this.s_message = '';

  /**
   * Error code.
   *
   * @type {string}
   */
  this.s_status = '';
}

/**
 * Creates error object based on API response.
 *
 * @param {{}} a_api API response.
 * @return {WlSdk_SyncError} Error information.
 */
WlSdk_SyncError.createApi = function(a_api)
{
  var o_error = new WlSdk_SyncError();
  if(a_api.hasOwnProperty('a_error'))
    o_error.a_error = a_api['a_error'];
  if(a_api.hasOwnProperty('class'))
    o_error.s_class = a_api['class'];
  if(a_api.hasOwnProperty('message'))
    o_error.s_message = a_api['message'];
  if(a_api.hasOwnProperty('status'))
    o_error.s_status = a_api['status'];

  return o_error;
};