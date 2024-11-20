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
 * Adds handlers to be called when the deferred object is either resolved or rejected.
 *
 * @param {WlSdk_Deferred_state} call_always A function that is called when the deferred is resolved or rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.always = function(call_always)
{
  this.o_defer.always(call_always);
  return this;
};

/**
 * Adds handlers to be called when the deferred object is resolved.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.done = function(call_done)
{
  this.o_defer.done(call_done);
  return this;
};

/**
 * Shell for {@link WlSdk_Deferred_Promise.done()} function.
 *
 * Processes exceptions thrown during execution of resolution callback.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.doneCatch = function(call_done)
{
  this.o_defer.doneCatch(call_done);
  return this;
};

/**
 * Adds handlers to be called when the deferred object is rejected.
 *
 * @param {WlSdk_Deferred_state} call_fail A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.fail = function(call_fail)
{
  this.o_defer.fail(call_fail);
  return this;
};

/**
 * Shell for {@link WlSdk_Deferred_Promise.fail()} function.
 *
 * Processes exceptions thrown during execution of rejection callback.
 *
 * @param {WlSdk_Deferred_state} call_fail A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.failCatch = function(call_fail)
{
  this.o_defer.failCatch(call_fail);
  return this;
};

/**
 * Determines whether a deferred object has been rejected.
 *
 * @return {boolean} `true` means 'rejected'; `false` means 'pending'.
 */
WlSdk_Deferred_Promise.prototype.isRejected = function()
{
  return this.o_defer.isRejected();
}

/**
 * Determines whether a deferred object has been resolved.
 *
 * @return {boolean} `true` means 'resolved'; `false` means 'pending'.
 */
WlSdk_Deferred_Promise.prototype.isResolved = function()
{
  return this.o_defer.isResolved();
}

/**
 * Gets the current state of a deferred object.
 *
 * @return {string} Current state of a deferred object. See {@link WlSdk_Deferred.s_state} for more information.
 */
WlSdk_Deferred_Promise.prototype.state = function()
{
  return this.o_defer.state();
};

/**
 * Adds handlers to be called when the deferred object is resolved, rejected.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @param {WlSdk_Deferred_state} [call_fail] A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.then = function(call_done, call_fail)
{
  this.o_defer.then(call_done, call_fail);
  return this;
};

/**
 * Shell for {@link WlSdk_Deferred_Promise.then()} function.
 *
 * Processes exceptions thrown during execution of resolution/rejection callbacks.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @param {WlSdk_Deferred_state} [call_fail] A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred_Promise.prototype.thenCatch = function(call_done, call_fail)
{
  this.o_defer.thenCatch(call_done, call_fail);
  return this;
};