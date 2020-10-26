/**
 * Represents a promise.
 *
 * Compatible with jQuery promise as well as {@link WlSdk_Deferred}.
 *
 * @param {WlSdk_Deferred} o_defer Deferred object to be represented by the promise.
 * @constructor
 */
function WlSdk_Deferred_Promise(o_defer)
{
  /**
   * Deferred object to be represented by the promise.
   *
   * @type {WlSdk_Deferred}
   * @private
   */
  this.o_defer = o_defer;
}

/**
 * Add handlers to be called when the deferred object is either resolved or rejected.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is resolved or rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.always = function(call_function)
{
  this.o_defer.always(call_function);
  return this;
};

/**
 * Add handlers to be called when the deferred object is resolved.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.done = function(call_function)
{
  this.o_defer.done(call_function);
  return this;
};

/**
 * Add handlers to be called when the deferred object is rejected.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.fail = function(call_function)
{
  this.o_defer.fail(call_function);
  return this;
};

/**
 * Determine whether a promise has been rejected.
 *
 * @return {boolean} <tt>true</tt> means 'rejected'; <tt>false</tt> means 'not rejected'.
 */
WlSdk_Deferred_Promise.prototype.isRejected = function()
{
  return this.o_defer.isRejected();
}

/**
 * Determine whether a promise has been resolved.
 *
 * @return {boolean} <tt>true</tt> means 'resolved'; <tt>false</tt> means 'not resolved'.
 */
WlSdk_Deferred_Promise.prototype.isResolved = function()
{
  return this.o_defer.isResolved();
}

/**
 * Get status of the deferred object.
 *
 * @return {string} Object status.
 */
WlSdk_Deferred_Promise.prototype.state = function()
{
  return this.o_defer.state();
};