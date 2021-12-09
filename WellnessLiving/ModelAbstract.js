/**
 * Base class for all SPA models.
 *
 * Read <tt>Core/Request/Api/Sdk/AboutAuthentication.md</tt> about way of request authentication.
 *
 * @mixin
 * @constructor
 */
function WlSdk_ModelAbstract()
{
  /**
   * Interval to cleanup current model in seconds. If time has been passed model will be invalidated.
   * <tt>null</tt> means that interval should be stopped.
   * This value can be overridden.
   *
   * @see WlSdk_ModelAbstract._cleanupCallback()
   * @see WlSdk_ModelAbstract.changeInit()
   * @type {?number}
   */
  this.CLEANUP_TIMEOUT = 3600;

  /**
   * Default timeout that is used to schedule PUT request with {@link WlSdk_ModelAbstract.putSchedule()}.
   *
   * @type {number}
   */
  this.SCHEDULE_DEFAULT = 2;

  /**
   * Old values for all model fields.
   *
   * Key is the name of the field.
   *
   * Value is its field.
   *
   * @type {{}}
   * @private
   */
  this.__a_model_old = {};

  /**
   * Representing the ID value of the timer that is set.
   * Using this value in {@link WlSdk_ModelAbstract.cleanupTimeoutSet()}.
   *
   * @see setTimeout()
   * @type {number}
   * @private
   */
  this._i_timeout = 0;

  /**
   * Whether this model is in sync with server.
   *
   * @type {boolean}
   * @private
   */
  this._is_sync = false;

  /**
   * Deferred object that is resolved when current request completes.
   *
   * <tt>null</tt> if model is not being synchronized now.
   *
   * @type {?WlSdk_Deferred}
   * @private
   */
  this._o_defer = null;

  /**
   * Error event that has occurred during last request to server.
   *
   * <tt>null</tt> if no errors occurred (there were no requests to server or last request was successful).
   *
   * @type {?{}}
   * @private
   */
  this._o_error = null;

  /**
   * Deferred object that is resolved when a scheduled PUT request completes.
   *
   * <tt>null</tt> if no PUT requests scheduled.
   *
   * @type {?WlSdk_Deferred}
   * @private
   */
  this._o_schedule_defer = null;

  /**
   * Timer ID that is used make a scheduled PUT request.
   *
   * <tt>null</tt> if no PUT requests scheduled.
   *
   * @type {?number}
   * @private
   */
  this._o_schedule_timer = null;

  /**
   * Name of the key field.
   *
   * It is possible to specify multiple fields as a key. In this case field names should be separated with comma (',').
   *
   * It is used to generate default model registry key.
   *
   * <tt>null</tt> if key field is not defined.
   *
   * @type {?string}
   */
  this._s_key = null;
}

/**
 * Credentials to sign requests.
 *
 * <tt>null</tt> if not loaded.
 *
 * @type {?{s_key_secret: string}|{s_code: string,s_cookie_persistent: string,s_cookie_transient: string}}
 */
WlSdk_ModelAbstract.a_credentials = null;

/**
 * Model registry. A list of cached models.
 *
 * Key is model key (usually - value of primary key). Value is model object.
 *
 * Note that instances of this field within individual subclasses are used.
 * This is why we do not need class name in the key.
 *
 * @type {{}}
 * @private
 */
WlSdk_ModelAbstract.a_registry = {};

/**
 * List of models that are successors of this class.
 *
 * @type {WlSdk_ModelAbstract[]}
 * @private
 */
WlSdk_ModelAbstract.a_successor = [];

/**
 * Performs a request to server.
 *
 * @param {{
 *   contentType: string,
 *   data: string,
 *   dt_request: string,
 *   error: Function,
 *   headers: {}.
 *   success: Function,
 *   type: string,
 *   url: string
 * }} a_config A set of key/value pairs that configure the request.
 * @return {WlSdk_Deferred_Promise} Promise that request will be performed.
 * @private
 */
WlSdk_ModelAbstract.prototype._ajax = function(a_config)
{
  var o_deferred = WlSdk_Config_Mixin.configDeferredCreate();

  var o_signature = new WlSdk_AuthorizationSignature();
  var o_array_promise = o_signature.signatureArray(a_config['data']);
  o_array_promise.done(function()
  {
    var s_body;
    var url = a_config['url'];

    if(a_config['data'] instanceof FormData)
    {
      s_body = a_config['data'];
    }
    else
    {
      var a_parameter = [];
      for(var s_field in o_signature.a_array)
      {
        if(!o_signature.a_array.hasOwnProperty(s_field))
          continue;

        var x_value = o_signature.a_array[s_field];

        if(x_value===null)
          continue; // null means do not include this value to request.

        if((x_value instanceof Array)&&x_value.length===0)
        {
          a_parameter.push(encodeURIComponent(s_field)+'=');
        }
        else
        {
          var x_parameter = WlSdk_Core_Url.encode(s_field,x_value);
          WlSdk_AssertException.assertTrue(typeof x_parameter==='string',{
            's_field': s_field,
            's_type': typeof x_parameter,
            'text_message': '[WlSdk_ModelAbstract._ajax] Unsupported value.',
            'url': url,
            'x_value': x_value
          });

          a_parameter.push(x_parameter);
        }
      }
      if(a_config['type']==='GET')
      {
        if(a_parameter.length)
          url += '?'+a_parameter.join('&');
      }
      else
      {
        s_body = a_parameter.join('&');
      }
    }

    var o_header = new Headers({});
    if(a_config['contentType'])
      o_header.append('Content-Type',a_config['contentType']);
    for(var s_header in a_config['headers'])
    {
      if(a_config['headers'].hasOwnProperty(s_header))
        o_header.append(s_header,a_config['headers'][s_header]);
    }

    fetch(url,{
      'method': a_config['type'],
      'mode': 'cors',
      'cache': 'no-cache',
      'credentials': 'include',
      'headers': o_header,
      'body': s_body
    }).then(function(response)
    {
      return response.json();
    }).then(function(data)
    {
      a_config['success'](data);
      o_deferred.resolve();
    }).catch(function(data)
    {
      a_config['error'](data);
      o_deferred.reject();
    });
  }).fail(function()
  {
    o_deferred.reject();
  });

  // 'fetch' returns native JS 'Promise'.
  // This promise is nor compatible with 'jQuery.Promise'.
  // It is the reason, why we return promise created using 'WlSdk_ModelAbstract.configDeferredCreate()'.
  return o_deferred.promise();
};

/**
 * Performs cleanup for model. Model will be invalidated and new cleanup will be scheduled.
 * This method ignores global models.
 *
 * @protected
 */
WlSdk_ModelAbstract.prototype._cleanupTimeoutCallback = function()
{
  this.invalidate();
  this.cleanupTimeoutSet(this.CLEANUP_TIMEOUT);
};

/**
 * Checks if specified data contents object of <tt>File</tt>.
 *
 * @param {{}} x_data Data to be checked.
 * @return {boolean} <tt>true</tt> if data contains <tt>File</tt>; <tt>false</tt> otherwise.
 * @private
 */
WlSdk_ModelAbstract.prototype._fileCheck = function(x_data)
{
  if(x_data instanceof File)
    return true;

  if(!(x_data instanceof Object))
    return false;

  for(var s_key in x_data)
  {
    if(!x_data.hasOwnProperty(s_key))
      continue;

    if(this._fileCheck(x_data[s_key]))
      return true;
  }

  return false;
};

/**
 * Fills <tt>FormData</tt> object by specified data.
 *
 * @param {{}} a_signature Fields to be used for signature calculation.
 * @param {FormData} o_form_data Object to be filled.
 * @param {{}} a_data Data to past into <tt>FormData</tt>.
 * @param {?string} s_key_previous Name of parent <tt>a_data</tt> field. Not empty for recursive calls.
 * @private
 */
WlSdk_ModelAbstract.prototype._formDataFill = function(a_signature,o_form_data,a_data,s_key_previous)
{
  if(!(a_data instanceof Object)||(a_data instanceof File))
  {
    if(s_key_previous)
    {
      o_form_data.append(s_key_previous,a_data);
      a_signature[s_key_previous] = a_data;
    }
    return;
  }

  for(var s_key in a_data)
  {
    if(!a_data.hasOwnProperty(s_key))
      continue;

    var x_value = a_data[s_key];

    if(x_value===false||x_value===null||x_value===undefined)
      continue;

    if(s_key_previous)
      s_key = s_key_previous+'['+s_key+']';

    this._formDataFill(a_signature,o_form_data,x_value,s_key);
  }
};

/**
 * Returns URL to access API endpoint.
 *
 * @return {string} URL to access API endpoint.
 */
WlSdk_ModelAbstract.prototype.apiUrl = function()
{
  return WlSdk_Config_MixinAbstract.apiUrl() + this.resource();
};

/**
 * Converts model object to a hash where key is name of the field, and value is its value.
 *
 * @param {{}} [a_filter={}] Specified how to filter fields.
 * @param {string} [a_filter.s_method] Only return fields that are used in specified method.
 *   Allowed methods are: <tt>'delete'</tt>, <tt>'get'</tt>, <tt>'post'</tt>, <tt>'put'</tt>.
 * @param {boolean} [a_filter.s_mode] Only return fields that are used in specified mode.
 *   This filter is only applied if method is specified.
 *   Allowed modes: <tt>'get'</tt>, <tt>'post'</tt>, <tt>'result'</tt>.
 * @return {{}} A hash where key is name of the field, and value is its value.
 */
WlSdk_ModelAbstract.prototype.array = function(a_filter)
{
  if(!a_filter)
    a_filter = {};

  var a_config=this.config();
  var a_result={};
  for(var s_key in a_config['a_field'])
  {
    if(!a_config['a_field'].hasOwnProperty(s_key))
      continue;

    if(a_filter.hasOwnProperty('s_method'))
    {
      if(!a_config['a_field'][s_key].hasOwnProperty(a_filter.s_method))
        continue;

      if(a_filter.hasOwnProperty('s_mode'))
      {
        if(!a_config['a_field'][s_key][a_filter.s_method].hasOwnProperty(a_filter.s_mode))
          continue;
      }
    }

    a_result[s_key] = this[s_key];
  }
  return a_result;
};

/**
 * Performs actions that must be done after model change.
 *
 * @param {{}} [a_change={}] List of changes.
 */
WlSdk_ModelAbstract.prototype.changeDone = function(a_change)
{
  // Do nothing by default.
};

/**
 * Initializes stored values of fields to evaluate if fields were changed.
 *
 * This method should be called in constructor after you have set initial values.
 */
WlSdk_ModelAbstract.prototype.changeInit = function()
{
  for(var s_key in this)
  {
    if(!this.hasOwnProperty(s_key))
      continue;
    if(typeof this[s_key]==='function')
      continue;
    if(s_key.substr(0,1)==='_')
      continue;
    if(!s_key.match(/^[0-9a-z_]+$/))
      continue;

    this.__a_model_old[s_key]=this[s_key];
  }

  this.cleanupTimeoutSet(this.CLEANUP_TIMEOUT);
};

/**
 * Updates stored values of all fields. Throws events in a case of changes.
 */
WlSdk_ModelAbstract.prototype.changeUpdate = function()
{
  var has_change;
  var a_change = {};

  for(var s_key in this.__a_model_old)
  {
    if(!this.__a_model_old.hasOwnProperty(s_key))
      continue;
    if(this.__a_model_old[s_key]===this[s_key])
      continue;

    a_change[s_key] = this.__a_model_old[s_key];
    this.__a_model_old[s_key] = this[s_key];
    has_change = true;
  }

  if(has_change)
  {
    this.changeDone(a_change);
    this._is_sync = false;
  }
};

/**
 * Sets timeout to cleanup model.
 * If old timeout is active it will be replaced.
 *
 * @see WlSdk_ModelAbstract._cleanupTimeoutCallback()
 * @param {?number} i_timeout Timeout in seconds. <tt>null</tt> means that interval should be stopped.
 */
WlSdk_ModelAbstract.prototype.cleanupTimeoutSet = function (i_timeout)
{
  if(this._i_timeout)
  {
    window.clearTimeout(this._i_timeout);
    this._i_timeout = 0;
  }

  if(i_timeout)
    this._i_timeout = setTimeout(this._cleanupTimeoutCallback.bind(this),i_timeout*1000);
};

/**
 * Returns array of configuration settings for this model.
 *
 * @return {{}} Array of configuration settings for this model:<ul>
 *   <li>array <tt>a_field</tt> Field configuration. Key is field name. Value is configuration of the field:<ul>
 *     <li>array [<tt>delete</tt>={}] Configuration of the field for DELETE request (see structure below).</li>
 *     <li>array [<tt>get</tt>={}] Configuration of the field for GET request (see structure below).</li>
 *     <li>array [<tt>post</tt>={}] Configuration of the field for POST request (see structure below).</li>
 *     <li>array [<tt>put</tt>={}] Configuration of the field for PUT request (see structure below).</li>
 *   </li>
 *   Configuration of the field for a request is an array with the following fields:<ul>
 *     <li>bool [<tt>get</tt>=false] Whether this field should be passed to server with POST variables.</li>
 *     <li>bool [<tt>post</tt>=false] Whether this field should be passed to server with POST or PUT variables (in correspondence to initial request).</li>
 *     <li>bool [<tt>result</tt>=false] Whether this field is returned by the server as a result of request.</li>
 *   </ul>
 * </ul>
 */
WlSdk_ModelAbstract.prototype.config = function()
{
  return {
    'a_field': {}
  };
};

/**
 * Deletes content of the model from server.
 *
 * @return {WlSdk_Deferred_Promise} Promise object for AJAX query started.
 */
WlSdk_ModelAbstract.prototype.delete = function()
{
  return this.request({
    's_method': 'DELETE'
  });
};

/**
 * Gets error event that has occurred during last request to server.
 *
 * @returns {?{}} See {@link WlSdk_ModelAbstract._o_error}.
 */
WlSdk_ModelAbstract.prototype.errorGet = function()
{
  return this._o_error;
};

/**
 * Extends a child class with standard static methods.
 *
 * @deprecated Use {@link WlSdk_ModelAbstract.extends} (in the required subclass) instead.
 * @param {WlSdk_ModelAbstract} o_child A subclass to extend.
 */
WlSdk_ModelAbstract.extend = function(o_child)
{
  this.extends(o_child);
};

/**
 * Extends a child class with standard static methods.
 *
 * @param {WlSdk_ModelAbstract} o_child A subclass to extend.
 */
WlSdk_ModelAbstract.extends = function(o_child)
{
  o_child.prototype=Object.create(this.prototype);

  this.a_successor.push(o_child);

  for(var s_method in this)
  {
    if(!this.hasOwnProperty(s_method))
      continue;

    if(o_child.hasOwnProperty(s_method))
      continue;

    // This is needed to separate registries of different models.
    // Because array is an object, and object is its handler, assigning leads to that global registry is used by all models.
    // See WlSdk_ModelAbstract.a_registry for details.
    if(s_method==='a_registry')
      o_child[s_method] = {};
    else if(s_method==='a_successor')
      o_child[s_method] = [];
    else
      o_child[s_method] = this[s_method];
  }

  //noinspection JSValidateTypes
  o_child.prototype.constructor = o_child;
};

/**
 * Retrieves content of the model from server.
 *
 * @return {WlSdk_Deferred_Promise} Promise object for AJAX query started.
 */
WlSdk_ModelAbstract.prototype.get = function()
{
  var o_defer = this.request({
    's_method': 'GET'
  });

  var o_this = this;
  o_defer.done(function()
  {
    o_this.getDone();
  });

  return o_defer;
};

/**
 * This is a callback method that is called after successful GET synchronization.
 */
WlSdk_ModelAbstract.prototype.getDone = function()
{
  // Default implementation does nothing.
};

/**
 * Only performs GET request in a case model is not synchronized with server.
 *
 * If synchronized, this method does nothing.
 *
 * @return {WlSdk_Deferred_Promise} Promise object that is resolved when synchronization is complete.
 */
WlSdk_ModelAbstract.prototype.getIf = function()
{
  if(this._is_sync)
    return WlSdk_Config_Mixin.configDeferredCreate().resolve().promise()
  else if(this._o_defer)
    return this._o_defer.promise();
  else
    return this.get();
};

/**
 * Returns additional headers that must be added to each request.
 *
 * @return {{}} Headers that must be added.
 */
WlSdk_ModelAbstract.prototype.header = function()
{
  return {};
};

/**
 * Start indication of request.
 */
WlSdk_ModelAbstract.prototype.indicatorStart = function()
{
  // Do nothing by default.
};

/**
 * Stops indication of request.
 */
WlSdk_ModelAbstract.prototype.indicatorStop = function()
{
  // Do nothing.
};

/**
 * Tries to retrieve a model object from model registry.
 *
 * If not available, creates a new model object and adds it to the registry.
 *
 * @param {... string} [_key] Values of key fields.
 *   These values are only required for models that have key field.
 *   Key field is set by {@link WlSdk_ModelAbstract._s_key}.
 *   In a case of composite key, order of key values should correspond order of field names specified by
 *   {@link WlSdk_ModelAbstract._s_key}.
 *   For models that do not support keys, passing keys is not allowed.
 * @return {WlSdk_ModelAbstract} Model object.
 * @throws {WlSdk_AssertException} In a case key value is specified, but model does not support keys; key value is not
 *   specified for models that support keys.
 */
WlSdk_ModelAbstract.instanceGet = function(_key)
{
  var o_model;

  if(!arguments.length)
  {
    if(this.a_registry.hasOwnProperty('default'))
      o_model=this.a_registry['default'];
    else
      o_model=new this();

    WlSdk_AssertException.assertTrue(!o_model._s_key,{
      'o_model': o_model,
      'text_message': '[WlSdk_ModelAbstract.instanceGet] instanceGet is called without keys, but requested model requires keys.'
    });

    if(!this.a_registry.hasOwnProperty('default'))
      this.a_registry['default']=o_model;
  }
  else
  {
    /**
     * Registry key.
     *
     * @type {string}
     */
    var s_key = Array.from(arguments).join('::');

    if(this.a_registry.hasOwnProperty(s_key))
      o_model = this.a_registry[s_key];
    else
      o_model = new this();

    WlSdk_AssertException.assertTrue(!!o_model._s_key,{
      'o_model': o_model,
      'text_message': '[WlSdk_ModelAbstract.instanceGet] It is required to specify key value for models that do support key.'
    });

    var a_key = o_model._s_key.split(',');

    WlSdk_AssertException.assertTrue(a_key.length===arguments.length,{
      '_s_key': o_model._s_key,
      'arguments': arguments,
      'arguments.length': arguments.length,
      'o_model': o_model,
      'text_message': '[WlSdk_ModelAbstract.instanceGet] Number of arguments should correspond number of fields specified by _s_key.'
    });

    var i;

    for(i = 0;i<a_key.length;i++)
    {
      WlSdk_AssertException.assertTrue(o_model.hasOwnProperty(a_key[i]),{
        'o_model': o_model,
        's_key': a_key[i],
        'text_message': '[WlSdk_ModelAbstract.instanceGet] Key field of a model is not defined.'
      });
    }

    if(!this.a_registry.hasOwnProperty(s_key))
    {
      for(i = 0;i<a_key.length;i++)
        o_model[a_key[i]] = arguments[i];
      this.a_registry[s_key] = o_model;
    }
    else
    {
      for(i = 0;i<a_key.length;i++)
      {
        var x_value = o_model[a_key[i]];

        if(is_numeric(x_value))
          x_value = x_value.toString();
        if(is_numeric(arguments[i]))
          arguments[i] = arguments[i].toString();

        WlSdk_AssertException.assertTrue(x_value===arguments[i],{
          's_class': o_model.constructor.name,
          's_key': a_key[i],
          'text_message': '[WlSdk_ModelAbstract.instanceGet] Key value stored in registry does not correspond key value of the registry item.',
          'x_registry': x_value,
          'x_search': arguments[i]
        });
      }
    }
  }
  return o_model;
};

/**
 * Invalidates model.
 */
WlSdk_ModelAbstract.prototype.invalidate = function()
{
  this.changeUpdate();

  // If fields in the model has not been changed.
  if(this._is_sync)
  {
    this.changeDone();
    this._is_sync = false;
  }
};

/**
 * Invalidates all models in the registry.
 */
WlSdk_ModelAbstract.invalidateAll = function()
{
  var s_key;

  // Registers of models cache 'a_registry' are separated for each model.
  // So, we have to call 'invalidateAll()' for each model.
  for(s_key in this.a_successor)
  {
    if(!this.a_successor.hasOwnProperty(s_key))
      continue;
    // noinspection JSUnresolvedFunction
    this.a_successor[s_key].invalidateAll();
  }

  for(s_key in this.a_registry)
  {
    if(!this.a_registry.hasOwnProperty(s_key))
      continue;
    var o_model = this.a_registry[s_key];
    o_model.invalidate();
  }
  this.a_registry = {};
};

/**
 * Saves content of the model to server.
 *
 * @return {*} Promise object for AJAX query started.
 */
WlSdk_ModelAbstract.prototype.post = function()
{
  var o_defer = this.request({
    's_method': 'POST'
  });

  var o_this = this;
  o_defer.done(function()
  {
    o_this.postDone();
  });

  return o_defer;
};

/**
 * This is a callback method that is called after successful POST synchronization.
 */
WlSdk_ModelAbstract.prototype.postDone = function()
{
  // Default implementation does nothing.
};

/**
 * Performs <tt>PUT</tt> request to server.
 *
 * @return {WlSdk_Deferred_Promise} Promise object for AJAX query started.
 */
WlSdk_ModelAbstract.prototype.put = function()
{
  WlSdk_AssertException.assertTrue(!this._o_schedule_timer,{
    'text_message': '[WlSdk_ModelAbstract.put] This method may not be called while there is a scheduled PUT request pending.'
  });

  return this.request({
    's_method': 'PUT'
  });
};

/**
 * Cancels PUT operation that was previously scheduled with {@link WlSdk_ModelAbstract.putSchedule()}.
 *
 * Does nothing if no PUT operations were scheduled.
 */
WlSdk_ModelAbstract.prototype.putCancel = function()
{
  if(this._o_schedule_timer)
  {
    window.clearTimeout(this._o_schedule_timer);
    this._o_schedule_timer = null;
  }
};

/**
 * Saves content of the model to after specified number of seconds.
 *
 * Consecutive calls to this method leads to that PUT request is rescheduled.
 *
 * @param {number} [t_timeout] Number of seconds to wait before model is saved.
 *   If not specified, value of {@link WlSdk_ModelAbstract.SCHEDULE_DEFAULT} is used.
 * @return {WlSdk_Deferred_Promise} Promise object that is resolved when AJAX query completes.
 */
WlSdk_ModelAbstract.prototype.putSchedule = function(t_timeout)
{
  if(t_timeout===undefined)
    t_timeout = this.SCHEDULE_DEFAULT;

  if(!this._o_schedule_defer)
    this._o_schedule_defer = WlSdk_Config_Mixin.configDeferredCreate();

  if(this._o_schedule_timer)
    window.clearTimeout(this._o_schedule_timer);

  var o_this = this;
  var o_defer_schedule = this._o_schedule_defer;

  this._o_schedule_timer = window.setTimeout(function()
  {
    var o_defer = o_this.request({
      's_method': 'PUT'
    });
    o_defer.done(function()
    {
      o_this._o_schedule_defer = null;
      o_defer_schedule.resolve();
    });
    o_defer.fail(function()
    {
      o_this._o_schedule_defer = null;
      o_defer_schedule.reject();
    });

    o_this._o_schedule_timer = null;
  },t_timeout*1000);

  return this._o_schedule_defer.promise();
};

/**
 * Retrieves content of the model from server.
 *
 * @param {{}} a_config Configuration array.
 * @param {string} a_config.s_method Request method. Allowed values: <tt>'DELETE'</tt>, <tt>'GET'</tt>, <tt>'POST'</tt>,
 *   <tt>'PUT'</tt>.
 * @return {WlSdk_Deferred_Promise} Promise object that is resolved when request completes.
 *   In a case request ends with an error, this object is rejected.
 */
WlSdk_ModelAbstract.prototype.request = function(a_config)
{
  var s_class = get_class(this);
  WlSdk_AssertException.assertTrue(!this._o_defer,{
    's_method': a_config.s_method,
    'text_message': 'It is not allowed to perform synchronization while model is being synchronized.',
    'this': s_class
  });

  var o_this = this;

  var s_method = a_config.s_method.toLowerCase();

  var a_data = this.array({
    's_method': s_method,
    's_mode': a_config.s_method==='GET'?'get':'post'
  });

  var url = this.apiUrl();

  var s_csrf = WlSdk_Config_Mixin.configCsrf();
  if(s_csrf)
    a_data['csrf'] = s_csrf;

  var a_url;
  if(a_config.s_method!=='GET')
  {
    a_url = this.array({
      's_method': s_method,
      's_mode': 'get'
    });
    url = WlSdk_Core_Url.variable(url,a_url);
  }
  else
  {
    a_url = {};
  }

  if(a_config.s_method==='DELETE'&&s_csrf)
    url = WlSdk_Core_Url.variable(url,{'csrf': s_csrf});

  this._o_defer = WlSdk_Config_Mixin.configDeferredCreate(
    s_class+'.request',
    'URL: '+url+'. Method: '+a_config.s_method+'. Data: '+JSON.stringify(a_data)
  );

  WlSdk_Config_Mixin.configTestLog(a_config.s_method + ' ' + url);

  WlSdk_Config_Mixin.configCredentialsLoad(a_config).done(function()
  {
    var has_stop = false;

    var is_file = o_this._fileCheck(a_data);

    var a_signature_variable = a_url;
    var o_data_ready;
    if(is_file)
    {
      o_data_ready = new FormData();
      o_this._formDataFill(a_signature_variable,o_data_ready,a_data,null);
    }
    else
    {
      o_data_ready = a_data;
      a_signature_variable = Object.assign(a_signature_variable,a_data);
    }

    var dt_request = WlSdk_Core_Date.nowMysql();
    o_this.signatureAuthorize({
      'a_variable': a_signature_variable,
      'dt_request': dt_request,
      's_method': s_method,
      's_resource': o_this.resource(),
      'url_request': url
    },!empty(a_config['is_public'])).done(function(a_signature)
    {
      var a_header = o_this.header();
      a_header['X-Signature-Date'] = WlSdk_Core_Date.mysqlHttp(dt_request);
      a_header['X-Signature-Timezone'] = (new Date()).getTimezoneOffset();
      if(a_signature)
      {
        a_header['Authorization'] = a_signature['s_authorization'];

        // We do this action to be sure that send exactly fields that are used for signature calculation.
        // Yes, fields that are used for signature may be different from original fields in a model.
        // It relates to fields with undefined/null/false values.
        if(!is_file)
          o_data_ready = a_signature['a_parameter'];
      }

      var s_rule = null;
      if(WlSdk_Config_Mixin.RESULT_CONVERSION_RULES)
      {
        if(WlSdk_Config_Mixin.RESULT_CONVERSION_RULES.hasOwnProperty(s_class))
          s_rule = WlSdk_Config_Mixin.RESULT_CONVERSION_RULES[s_class];
        else if(WlSdk_Config_Mixin.RESULT_CONVERSION_RULES.hasOwnProperty(''))
          s_rule = WlSdk_Config_Mixin.RESULT_CONVERSION_RULES[''];
      }
      if(s_rule)
        a_header['X-Error-Rules'] = s_rule;

      var a_ajax = {
        'cache': false,
        'contentType': is_file?false:'application/x-www-form-urlencoded; charset=UTF-8',
        'crossDomain': false,
        'data': o_data_ready,
        'dataType': 'json',
        'dt_request': dt_request,
        'error': function(jsXHR,textStatus,errorThrown)
        {
          WlSdk_Config_Mixin.configTestLog(s_method+' '+url+' Fatal!');

          o_this.requestErrorProcess(textStatus,errorThrown,jsXHR.status);

          o_this._o_defer.reject();
        },
        'headers': a_header,
        'processData': !is_file,
        'success': function(a_result)
        {
          try
          {
            WlSdk_AssertException.assertTrue((typeof a_result==='object')&&a_result!==null,{
              'a_result': a_result,
              'text_message': 'Result of an API request is not an array.',
              'url': url
            });

            var a_config = o_this.config();
            var s_key;
            if(a_result['status']==='ok')
            {
              WlSdk_Config_Mixin.configTestLog(s_method+' '+url+' Success!');

              o_this._o_error = null;

              for(s_key in a_config['a_field'])
              {
                if(!a_config['a_field'].hasOwnProperty(s_key))
                  continue;
                if(!a_config['a_field'][s_key][s_method])
                  continue;
                if(!a_config['a_field'][s_key][s_method]['result'])
                  continue;

                // noinspection JSObjectNullOrUndefined
                if(a_result.hasOwnProperty(s_key))
                  o_this[s_key] = a_result[s_key];
                else
                  o_this[s_key] = null;
              }

              o_this.changeUpdate();
              o_this._is_sync = true;

              var o_defer_sync = o_this.syncDo();

              o_defer_sync.done(function()
              {
                o_this.syncDone();
                o_this._o_defer.resolve();
              });

              o_defer_sync.fail(function()
              {
                WlSdk_AssertException.fail(
                  'Error during call to '+o_this.constructor.name+'.syncDo() (deferred object is rejected).'
                );
              });
            }
            else
            {
              var s_error = s_method+' '+url+' Fatal!'+' Status: '+a_result['status'];
              if(a_result['message'])
                s_error += ' Message: '+a_result['message'];
              if(a_result['class'])
                s_error += ' Class: '+a_result['class'];
              WlSdk_Config_Mixin.configTestLog(s_error);
            }

            if(!WlSdk_Config_Mixin.requestSuccess(a_result,s_method,url))
              return;

            // noinspection JSObjectNullOrUndefined
            if(a_result['status']!=='ok'||a_result.hasOwnProperty('a_error'))
            {
              for(s_key in a_config['a_field'])
              {
                if(!a_config['a_field'].hasOwnProperty(s_key))
                  continue;
                if(!a_config['a_field'][s_key][s_method])
                  continue;
                if(!a_config['a_field'][s_key][s_method]['error'])
                  continue;

                // noinspection JSObjectNullOrUndefined
                if(a_result.hasOwnProperty(s_key))
                  o_this[s_key] = a_result[s_key];
                else
                  o_this[s_key] = null;
              }

              var o_event = o_this.syncErrorProcess(a_result);

              o_this._o_error = o_event;

              o_this.requestErrorNotify(o_event);

              if(a_result['status']!=='ok')
                o_this._o_defer.reject(o_event);
            }
          }
          catch(e)
          {
            if(!has_stop)
            {
              // In a case of an exception all following callbacks registered with deferred object are not called.
              // This may lead to that a request hangs in 'waiting' state.
              // This leads to that indicator is showing that a request is being performed.
              // In testing mode this may lead to additional waiting.
              has_stop = true;
              o_this.indicatorStop();
            }

            // Deferred object might already be resolved or rejected by the code within try block.
            // Because reject() and resolve() methods invoke all listeners, there is a chance that one of those listeners
            // throw an exception.
            // If listener that has thrown exception is invoked after invocation of always() that sets _o_defer to null,
            // we may come here with empty _o_defer.
            if(o_this._o_defer)
              o_this._o_defer.reject();

            o_this.requestExceptionHandle(e);
          }
        },
        'type': a_config.s_method,
        'url': url,
        'xhr': function()
        {
          var o_request;
          try
          {
            o_request = new window.XMLHttpRequest();
          }
          catch(e)
          {
          }
          if(o_request)
          {
            o_request.upload.addEventListener('progress',function(o_event)
            {
              if(o_event.lengthComputable)
              {
                var i_percent = Math.round((o_event.loaded*100)/o_event.total);
                o_this._o_defer.notify(i_percent);
              }
            },false);
          }
          return o_request;
        }
      };

      var o_ajax = o_this._ajax(a_ajax);
      o_this._o_defer.notify(0);

      o_this.indicatorStart();

      o_ajax.always(function()
      {
        if(!has_stop)
        {
          has_stop = true;
          o_this.indicatorStop();
        }
      });
    }).fail(function()
    {
      o_this._o_defer.reject();
    });
  }).fail(function(o_error)
  {
    o_this.requestErrorProcess('',o_error?o_error['s_message']:'');
    o_this._o_error = o_error;
    o_this._o_defer.reject(o_error);
  });

  this._o_defer.always(function()
  {
    o_this._o_defer = null;
  });

  return this._o_defer.promise();
};

/**
 * Notifies the model about a response with an error.
 *
 * @param {Object} o_error Error information.
 */
WlSdk_ModelAbstract.prototype.requestErrorNotify = function(o_error)
{
  // Do nothing by default.
};

/**
 * Indicates request error.
 *
 * @param {string} s_status Error code.
 * @param {string} s_message Error message.
 * @param {number} [i_code] HTTP response code.
 */
WlSdk_ModelAbstract.prototype.requestErrorProcess = function(s_status,s_message,i_code)
{
  // Do nothing by default.
};

/**
 * Handles an exception of response processing.
 *
 * @param {Error} e Exception of response processing.
 */
WlSdk_ModelAbstract.prototype.requestExceptionHandle = function(e)
{
  // Do nothing by default.
}

/**
 * Returns URI of current model.
 *
 * @return {string} URI of current model.
 */
WlSdk_ModelAbstract.prototype.resource = function()
{
  var o_match=this.constructor.toString().match(/function ([A-Za-z0-9_]+)Model\(/);
  WlSdk_AssertException.notEmpty(o_match,{
    'constructor': this.constructor,
    'o_model': this,
    's_message': 'Can not parse constructor name or constructor name is invalid (Model suffix is expected).'
  });

  return o_match[1].split('_').join('/')+'.json';
};

/**
 * Calls computation of request signature.
 *
 * @param {{
 *   a_variable: {},
 *   dt_request: string,
 *   s_method: string,
 *   s_resource: string,
 *   url_request: string
 * }} a_request Request information.
 * @param {boolean} is_public <tt>true</tt> - model is public, signature is not necessary;
 * <tt>false</tt> - signature is required.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when signature is computed.
 */
WlSdk_ModelAbstract.prototype.signatureAuthorize = function(a_request,is_public)
{
  var o_deferred = WlSdk_Config_Mixin.configDeferredCreate(get_class(this)+'.signatureAuthorize');
  if(is_public||!WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID)
  {
    o_deferred.resolve(null);
  }
  else
  {
    var o_signature = new WlSdk_AuthorizationSignature();
    try
    {
      o_signature.signatureAuthorize(a_request).done(function()
      {
        o_deferred.resolve({
          'a_parameter': o_signature.a_array,
          's_authorization': o_signature.s_header
        });
      }).fail(o_deferred.reject);
    }
    catch(e)
    {
      this.requestExceptionHandle(e);
    }
  }
  return o_deferred.promise();
};

/**
 * This method is called when synchronization completes successfully.
 *
 * This method is called before synchronization event is notified, and before deferred object is resolved.
 *
 * @return {WlSdk_Deferred_Promise} Promise object that is resolved when operation is completed.
 */
WlSdk_ModelAbstract.prototype.syncDo = function()
{
  // This method may be overridden to perform additional actions after synchronization.
  // Default implementation does nothing.

  return WlSdk_Config_Mixin.configDeferredCreate().resolve().promise();
};

/**
 * Does actions when any model is synchronised.
 */
WlSdk_ModelAbstract.prototype.syncDone = function()
{
  // Does nothing by default.
};

/**
 * Crates an information object from failed server response.
 *
 * @param {{}} a_result Response from server.
 * @return {{}} Information object.
 */
WlSdk_ModelAbstract.prototype.syncErrorProcess = function(a_result)
{
  return WlSdk_SyncError.createApi(a_result);
};

/**
 * Verifies if this model is in sync with server.
 *
 * @return {boolean} <tt>true</tt> if this model is in sync with server, <tt>false</tt> otherwise.
 */
WlSdk_ModelAbstract.prototype.syncIs = function()
{
  return this._is_sync;
};

/**
 * Returns promise object that is resolved when model completes synchronization.
 *
 * @return {?WlSdk_Deferred_Promise} Promise object that is resolved when model completes synchronization.
 *   <tt>null</tt> if model is not being synchronized now.
 */
WlSdk_ModelAbstract.prototype.syncPromise = function()
{
  return this._o_defer?this._o_defer.promise():null;
};

/**
 * Sets if model is sync or not.
 *
 * @param {boolean} is_sync <tt>true</tt> or <tt>false</tt> to set model synchronization status.
 */
WlSdk_ModelAbstract.prototype.syncSet = function(is_sync)
{
  this._is_sync = is_sync;
};