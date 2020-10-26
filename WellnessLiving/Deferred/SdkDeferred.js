/**
 * @callback WlSdk_Deferred_state
 * @param {*} [x_data] Data that were specified when the object was deferred of resolved.
 */

/**
 * Represents a deferred object.
 *
 * Depending on implementation {@link WlSdk_Config_MixinAbstract.configDeferredCreate()} method may return
 * jQuery deferred object or an object of this class.
 * Because of this the class is compatible with jQuery deferred object.
 *
 * @see https://api.jquery.com/category/deferred-object/
 * @constructor
 */
function WlSdk_Deferred()
{
  /**
   * Custom code to be executed when the object generates progress notifications.
   *
   * @type {WlSdk_Deferred_state[]}
   * @private
   */
  this.a_progress = [];

  /**
   * Custom code that must be executed when object is resolved.
   *
   * @type {WlSdk_Deferred_state[]}
   * @private
   */
  this.a_reject = [];

  /**
   * Custom code that must be executed when object is rejected.
   *
   * @type {WlSdk_Deferred_state[]}
   * @private
   */
  this.a_resolve = [];

  /**
   * Promise that must be resolved of rejected in sync with the deferred object.
   *
   * This field serves for optimization purposes only (to prevent creating of a lit of promises).
   *
   * <tt>null</tt> if not created yet. Created at the first call of {@link WlSdk_Deferred.promise()} method.
   *
   * @type {?WlSdk_Deferred_Promise}
   * @private
   */
  this.o_promise = null;

  /**
   * Status of the deferred object.
   *
   * @type {string}
   * @private
   */
  this.s_status = 'pending';

  /**
   * Data that were specified when the object was deferred of resolved.
   *
   * <tt>null</tt> if not set.
   *
   * @type {?*}
   */
  this.x_data = null;
}

/**
 * Add handlers to be called when the deferred object is either resolved or rejected.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is resolved or rejected.
 */
WlSdk_Deferred.prototype.always = function(call_function)
{
  if(this.s_status==='pending')
  {
    this.a_resolve.push(call_function);
    this.a_reject.push(call_function);
  }
  else
  {
    call_function(this.x_data);
  }
};

/**
 * Add handlers to be called when the deferred object is resolved.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.done = function(call_function)
{
  if(this.isResolved())
    call_function(this.x_data);
  else
    this.a_resolve.push(call_function);
  return this;
};

/**
 * Add handlers to be called when the deferred object is rejected.
 *
 * @param {WlSdk_Deferred_state} call_function A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.fail = function(call_function)
{
  if(this.isRejected())
    call_function(this.x_data);
  else
    this.a_reject.push(call_function);
  return this;
};

/**
 * Determine whether a Deferred object has been rejected.
 *
 * @return {boolean} <tt>true</tt> means 'rejected'; <tt>false</tt> means 'not rejected'.
 */
WlSdk_Deferred.prototype.isRejected = function()
{
  return this.s_status==='rejected';
}

/**
 * Determine whether a Deferred object has been resolved.
 *
 * @return {boolean} <tt>true</tt> means 'resolved'; <tt>false</tt> means 'not resolved'.
 */
WlSdk_Deferred.prototype.isResolved = function()
{
  return this.s_status==='resolved';
}

/**
 * Call the progress callbacks on the deferred object with the given args.
 *
 * @param {*} _args Optional arguments that are passed to the progress callbacks.
 */
WlSdk_Deferred.prototype.notify = function(_args)
{
  this.a_progress.forEach(function(call_progress)
  {
    call_progress(_args);
  });
};

/**
 * Add handlers to be called when the object generates progress notifications.
 *
 * @param {WlSdk_Deferred_state} call_function A function to be called when the object generates progress notifications.
 */
WlSdk_Deferred.prototype.progress = function(call_function)
{
  this.a_progress.push(call_function);
};

/**
 * Get promise from the deferred object.
 *
 * @return {WlSdk_Deferred_Promise} Promise that is resolved of rejected in sync with the deferred object.
 */
WlSdk_Deferred.prototype.promise = function()
{
  if(!this.o_promise)
    this.o_promise = new WlSdk_Deferred_Promise(this);

  return this.o_promise;
};

/**
 * Rejects the deferred object.
 *
 * @param {*} [a_data] Data to be put into reject handler.
 * @return {WlSdk_Deferred} This deferred object.
 */
WlSdk_Deferred.prototype.reject = function(a_data)
{
  WlSdk_AssertException.assertTrue(this.s_status==='pending',{
    'text_message': "Object can be resolver or rejected only in status 'pending'."
  });

  this.x_data = a_data;

  this.s_status = 'rejected';
  this.a_reject.forEach(function(call_reject)
  {
    call_reject(a_data);
  });

  return this;
};

/**
 * Resolves the deferred object.
 *
 * @param {*} [a_data] Data to be put into resolve handler.
 * @return {WlSdk_Deferred} This deferred object.
 */
WlSdk_Deferred.prototype.resolve = function(a_data)
{
  WlSdk_AssertException.assertTrue(this.s_status==='pending',{
    'text_message': "Object can be resolver or rejected only in status 'pending'."
  });

  this.x_data = a_data;

  this.s_status = 'resolved';
  this.a_resolve.forEach(function(call_resolve)
  {
    call_resolve(a_data);
  });

  return this;
};

/**
 * Get status of the deferred object.
 *
 * @return {string} Object status.
 */
WlSdk_Deferred.prototype.state = function()
{
  return this.s_status;
};

/**
 * Creates a deferred object that will be resolved when a set of deferred objects is resolved.
 *
 * @param {WlSdk_Deferred[]} x_defer A list of deferred objects.
 * @return {WlSdk_Deferred} Deferred object that wil be resolved
 * when all deferred objects in the list are resolved.
 */
WlSdk_Deferred.when = function(x_defer)
{
  var o_defer_main = new this();

  var a_defer;
  if(x_defer instanceof Array)
  {
    a_defer = x_defer;
  }
  else
  {
    a_defer = [];
    for (var i = 0;i<arguments.length;i++)
      a_defer.push(arguments[i]);
  }

  var i_defer = a_defer.length;

  a_defer.forEach(function(o_defer)
  {
    o_defer.done(function()
    {
      if(o_defer_main.state()!=='pending')
        return;
      if(!--i_defer)
        o_defer_main.resolve();
    });
    o_defer.fail(function(x_data)
    {
      o_defer_main.reject(x_data);
    });
  });

  if(!i_defer&&o_defer_main.state()==='pending')
    o_defer_main.resolve();

  return o_defer_main;
};