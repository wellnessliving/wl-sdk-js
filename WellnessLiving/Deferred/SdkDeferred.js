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
   * Custom code that must be executed when object is rejected.
   *
   * @type {WlSdk_Deferred_state[]}
   * @private
   */
  this.a_reject = [];

  /**
   * Custom code that must be executed when object is resolved.
   *
   * @type {WlSdk_Deferred_state[]}
   * @private
   */
  this.a_resolve = [];

  /**
   * Custom code that must be executed when object is resolved or rejected.
   *
   * @type {*[]}
   * @private
   */
  this.a_then = [];

  /**
   * Promise that must be resolved or rejected in sync with the deferred object.
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
   * Can accept next statuses:
   * * `pending` - The deferred object is not yet in a completed state (neither "rejected" nor "resolved").
   * * `rejected` - The deferred object is in the rejected state, meaning that {@link WlSdk_Deferred.reject()} has been called.
   * * `resolved` - The deferred object is in the resolved state, meaning that {@link WlSdk_Deferred.resolve()} has been called.
   *
   * @type {string}
   * @private
   * @see WlSdk_Deferred.isRejected()
   * @see WlSdk_Deferred.isResolved()
   * @see WlSdk_Deferred.state()
   */
  this.s_state = 'pending';

  /**
   * Data that were passed to methods which manage states {@link WlSdk_Deferred.reject()} and {@link WlSdk_Deferred.resolve()}.
   *
   * <tt>null</tt> if data is not set.
   *
   * @type {?*}
   */
  this.x_data = null;

  return this;
}

/**
 * @callback WlSdk_Deferred_state
 * @param {*} [x_result] Data that were passed to methods which manage states {@link WlSdk_Deferred.reject()} and {@link WlSdk_Deferred.resolve()}.
 */

/**
 * Checks that variable is deferred object.
 *
 * @param {*} x_var Variable for check.
 * @returns {boolean} `true` if variable is deferred object, `false` otherwise.
 * @private
 */
WlSdk_Deferred._deferIs = function(x_var)
{
  if(typeof x_var !== 'object')
    return false;

  return typeof x_var.state === 'function' && typeof x_var.reject === 'function' && typeof x_var.resolve === 'function';
}

/**
 * Callback for result of {@link WlSdk_Deferred.then()} method.
 *
 * @param {WlSdk_Deferred} o_defer_then Defer object.
 * @param {*} x_result Data that were passed to methods which manage states {@link WlSdk_Deferred.reject()} and {@link WlSdk_Deferred.resolve()}.
 * @private
 */
WlSdk_Deferred._thenResult = function(o_defer_then, x_result)
{
  if(WlSdk_Deferred._deferIs(x_result))
  {
    x_result.done(function(x_data)
    {
      o_defer_then.resolve(x_data)
    }).fail(function(x_data)
    {
      o_defer_then.reject(x_data)
    });
  }
  else
  {
    o_defer_then.resolve(x_result);
  }
}

/**
 * Adds handlers to be called when the deferred object is either resolved or rejected.
 *
 * @param {WlSdk_Deferred_state} call_always A function that is called when the deferred is resolved or rejected.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.always = function(call_always)
{
  if(typeof call_always !== 'function')
    return this;

  if(this.s_state==='pending')
  {
    this.a_resolve.push(call_always);
    this.a_reject.push(call_always);
  }
  else
  {
    call_always(this.x_data);
  }

  return this;
};

/**
 * Adds handlers to be called when the deferred object is resolved.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.done = function(call_done)
{
  if(typeof call_done !== 'function')
    return this;

  if(this.isResolved())
    call_done(this.x_data);
  else
    this.a_resolve.push(call_done);

  return this;
};

/**
 * Shell for {@link WlSdk_Deferred.done()} function.
 *
 * Processes exceptions thrown during execution of resolution/rejection callbacks.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.doneCatch = function(call_done)
{
  this.done(function(x_result)
  {
    if(!call_done)
      return;

    try
    {
      call_done(x_result);
    }
    catch(e)
    {
      WlSdk_Deferred.handleException(e);
    }
  });

  return this;
};

/**
 * Adds handlers to be called when the deferred object is rejected.
 *
 * @param {WlSdk_Deferred_state} call_fail A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.fail = function(call_fail)
{
  if(typeof call_fail !== 'function')
    return this;

  if(this.isRejected())
    call_fail(this.x_data);
  else
    this.a_reject.push(call_fail);
  return this;
};

/**
 * Shell for {@link WlSdk_Deferred.fail()} function.
 *
 * Processes exceptions thrown during execution of resolution/rejection callbacks.
 *
 * @param {WlSdk_Deferred_state} call_fail A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.failCatch = function(call_fail)
{
  this.fail(function(x_result)
  {
    if(!call_fail)
      return;

    try
    {
      call_fail(x_result);
    }
    catch(e)
    {
      WlSdk_Deferred.handleException(e);
    }
  });

  return this;
};

/**
 * Handles exception.
 *
 * This method should be called when an unexpected exception is thrown and not caught.
 *
 * @param {*} e Exception to handle.
 * @throws {*} Throws argument of this method always.
 */
WlSdk_Deferred.handleException = function(e)
{
  console.error(e);
  throw e;
}

/**
 * Determines whether a deferred object has been rejected.
 *
 * @return {boolean} `true` means 'rejected'; `false` means 'pending'.
 */
WlSdk_Deferred.prototype.isRejected = function()
{
  return this.s_state==='rejected';
}

/**
 * Determines whether a deferred object has been resolved.
 *
 * @return {boolean} `true` means 'resolved'; `false` means 'pending'.
 */
WlSdk_Deferred.prototype.isResolved = function()
{
  return this.s_state==='resolved';
}

/**
 * Calls the progress callbacks on the deferred object with the given args.
 *
 * @param {*} _args Optional arguments that are passed to the progress callbacks.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.notify = function(_args)
{
  this.a_progress.forEach(function(call_progress)
  {
    call_progress(_args);
  });

  return this;
};

/**
 * Adds handlers to be called when the object generates progress notifications.
 *
 * @param {WlSdk_Deferred_state} call_function A function to be called when the object generates progress notifications.
 * @return {WlSdk_Deferred} This object.
 */
WlSdk_Deferred.prototype.progress = function(call_function)
{
  if(typeof call_function !== 'function')
    return this;

  this.a_progress.push(call_function);

  return this;
};

/**
 * Gets promise from the deferred object.
 *
 * @return {WlSdk_Deferred_Promise} Promise that is resolved or rejected in sync with the deferred object.
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
 * @param {*} [x_data] Data to be put into fail handlers.
 * @return {WlSdk_Deferred} This deferred object.
 */
WlSdk_Deferred.prototype.reject = function(x_data)
{
  if(this.s_state!=='pending')
    return this;

  this.x_data = x_data;

  this.s_state = 'rejected';
  this.a_reject.forEach(function(call_reject)
  {
    call_reject(x_data);
  });
  this.a_then.forEach(function(x_then)
  {
    if(!x_then.call_fail)
    {
      x_then.o_defer.reject(x_data);
      return;
    }

    WlSdk_Deferred._thenResult(x_then.o_defer, x_then.call_fail(x_data))
  });

  return this;
};

/**
 * Resolves the deferred object.
 *
 * @param {*} [x_data] Data to be put into resolve handler.
 * @return {WlSdk_Deferred} This deferred object.
 */
WlSdk_Deferred.prototype.resolve = function(x_data)
{
  if(this.s_state!=='pending')
    return this;

  this.x_data = x_data;

  this.s_state = 'resolved';
  this.a_resolve.forEach(function(call_resolve)
  {
    call_resolve(x_data);
  });
  this.a_then.forEach(function(x_then)
  {
    if(!x_then.call_done)
    {
      x_then.o_defer.resolve(x_data);
      return;
    }

    WlSdk_Deferred._thenResult(x_then.o_defer, x_then.call_done(x_data))
  });

  return this;
};

/**
 * Gets the current state of a deferred object.
 *
 * @return {string} Current state of a deferred object.
 */
WlSdk_Deferred.prototype.state = function()
{
  return this.s_state;
};

/**
 * Adds handlers to be called when the deferred object is resolved or rejected.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @param {WlSdk_Deferred_state} [call_fail] A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred.prototype.then = function(call_done,call_fail)
{
  const o_defer = new WlSdk_Deferred();

  if(this.isResolved())
  {
    if(call_done)
      WlSdk_Deferred._thenResult(o_defer,call_done(this.x_data));
    else
      o_defer.resolve(this.x_data);
  }
  else if(this.isRejected())
  {
    if(call_fail)
      WlSdk_Deferred._thenResult(o_defer,call_fail(this.x_data));
    else
      o_defer.reject(this.x_data);
  }
  else
  {
    this.a_then.push({
      'call_done': call_done,
      'call_fail': call_fail,
      'o_defer': o_defer
    });
  }

  return o_defer.promise();
};

/**
 * Shell for {@link WlSdk_Deferred.then()} function.
 *
 * Processes exceptions thrown during execution of resolution/rejection callbacks.
 *
 * @param {WlSdk_Deferred_state} call_done A function that is called when the deferred is resolved.
 * @param {WlSdk_Deferred_state} [call_fail] A function that is called when the deferred is rejected.
 * @return {WlSdk_Deferred_Promise} This object.
 */
WlSdk_Deferred.prototype.thenCatch = function(call_done,call_fail)
{
  return this.then(function(x_result)
  {
    if(!call_done)
      return new WlSdk_Deferred().resolve(x_result);

    try
    {
      return call_done(x_result);
    }
    catch(e)
    {
      WlSdk_Deferred.handleException(e);
    }
  },function(x_result)
  {
    if(!call_fail)
      return new WlSdk_Deferred().reject(x_result);

    try
    {
      return call_fail(x_result);
    }
    catch(e)
    {
      WlSdk_Deferred.handleException(e);
    }
  });
};

/**
 * Creates a deferred object that will be resolved when a set of deferred objects is resolved.
 *
 * @param {WlSdk_Deferred[]} [x_defer] A list of deferred objects.
 * @return {WlSdk_Deferred} Deferred object that wil be resolved
 * when all deferred objects in the list are resolved.
 */
WlSdk_Deferred.when = function(x_defer)
{
  const o_defer_main = new this();

  let a_defer;
  if(typeof x_defer === 'undefined')
  {
    a_defer = [];
  }
  else if(x_defer instanceof Array)
  {
    a_defer = x_defer;
  }
  else
  {
    a_defer = [];
    for(let i = 0;i<arguments.length;i++)
      a_defer.push(arguments[i]);
  }

  let i_defer = a_defer.length;

  a_defer.forEach(function(o_defer)
  {
    WlSdk_AssertException.assertTrue(WlSdk_Deferred._deferIs(o_defer), {
      'o_defer': o_defer,
      'text_message': 'Invalid deferred object.'
    });

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