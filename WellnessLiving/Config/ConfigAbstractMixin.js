// @after Core/Request/Api/Sdk/AssertException.js

/**
 * Configurations for SDK.
 *
 * @mixin
 */
function WlSdk_Config_MixinAbstract()
{
  // Empty constructor.
}

/**
 * Class of exception that must be thrown is a case of failed assertion.
 *
 * @type {Function}
 */
WlSdk_Config_MixinAbstract.ASSERT_EXCEPTION = WlSdk_AssertException;

/**
 * Code for CSRF protection.
 *
 * @type {string}
 */
WlSdk_Config_MixinAbstract.CSRF_CODE = '';

/**
 * URL of the API server (including trailing slash).
 *
 * @type {string}
 */
WlSdk_Config_MixinAbstract.URL_API = '';

/**
 * URL of the page where secret key for signature may be generated.
 *
 * @type {string}
 */
WlSdk_Config_MixinAbstract.URL_CSRF = '';

/**
 * Login for application authorization.
 *
 * @type {string}
 */
WlSdk_Config_MixinAbstract.CONFIG_AUTHORIZE_ID = '';

/**
 * List of rules, which is used to convert error codes to HTTP codes.
 *
 * Keys are names of class model or empty string.
 * * Empty string in a case if this is default rule.
 * * Class name in a case if there are specific rules for particular class. Class specific rules will override default rules.
 *
 * Value is a string with list of rules separated by comma. Each rule has next format: <ul>
 *   <li>
 *     <tt>default</tt>
 *     Special rule with already predefined list of rules.
 *   </li>
 *   <li>
 *     <tt>[http code] [rule]</tt>
 *     Allow only 4xx codes. Check the list here: {@link https://en.wikipedia.org/wiki/List_of_HTTP_status_codes}.
 *     Rules can be in next format:<dl>
 *       <dt>[status]</dt>
 *       <dd>Exact value of the status.</dd>
 *       <dt>-[value]</dt>
 *       <dd>Can be used for any status, which ends with -[value].</dd>
 *       <dt>-[value]-/dt>
 *       <dd>Can be used for any status, which includes -[value]-.</dd>
 *       <dt>[value]-/dt>
 *       <dd>Can be used for any status, which starts with [value]-.</dd>
 *       <dt>-</dt>
 *       <dd>Code, which should be set, if status is not <tt>ok</tt>, but we do not have any corresponding code in the rules.</dd>
 *     </dl>
 *   </li>
 * </ul>
 *
 * Example: <code>
 *   WlSdk_Config_Mixin.RESULT_CONVERSION_RULES = {
 *     '': 'default',
 *     'Wl_Login_LoginModel': '418 code-teapot, 451 signature-empty'
 *   };
 * </code>
 *
 * @type {{}}
 */
WlSdk_Config_MixinAbstract.RESULT_CONVERSION_RULES = {};

/**
 * Deferred object that is resolved when credentials for request signing are loaded.
 *
 * @type {?WlSdk_Deferred}
 */
WlSdk_Config_MixinAbstract.o_deferred_credentials = null;

/**
 * Loads credentials to sign requests.
 *
 * @param {{}} a_config Request configuration.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when credentials are loaded.
 */
WlSdk_Config_MixinAbstract.configCredentialsLoad = function(a_config)
{
  WlSdk_AssertException.notEmpty(this.CSRF_CODE,{
    'text_message': 'Code for protection of CSRF is empty.'
  });
  WlSdk_AssertException.notEmpty(this.URL_CSRF,{
    'text_message': 'URL of the page to load signature credentials is not configured.'
  });

  if(!empty(a_config['is_public'])||WlSdk_ModelAbstract.a_credentials)
    return this.configDeferredCreate().resolve().promise();

  if(WlSdk_Config_MixinAbstract.o_deferred_credentials)
    return WlSdk_Config_MixinAbstract.o_deferred_credentials.promise();

  WlSdk_Config_MixinAbstract.o_deferred_credentials = this.configDeferredCreate('WlSdk_Config_MixinAbstract.configCredentialsLoad');

  var o_this = this;

  var o_key_session = new Core_Request_Api_KeySessionModel();
  o_key_session.s_application = this.CONFIG_AUTHORIZE_ID;
  o_key_session.s_csrf = this.CSRF_CODE;
  o_key_session.request({
    'is_public': true,
    's_method': 'GET'
  }).done(function()
  {
    var url = o_this.URL_CSRF;
    url = WlSdk_Core_Url.variable(url,{
      's_csrf': o_this.CSRF_CODE,
      's_key_session': o_key_session.s_key
    });

    fetch(url,{
      'method': 'GET',
      'mode': 'same-origin',
      'cache': 'no-cache',
      'credentials': 'include'
    }).then(function(response)
    {
      return response.json();
    }).then(function(data)
    {
      if(data['s_error'])
      {
        WlSdk_Config_MixinAbstract.o_deferred_credentials.reject({'s_message': data['s_error']});
      }
      else
      {
        WlSdk_ModelAbstract.a_credentials = data;
        WlSdk_Config_MixinAbstract.o_deferred_credentials.resolve();
      }
      WlSdk_Config_MixinAbstract.o_deferred_credentials = null;
    }).catch(function(error)
    {
      WlSdk_Config_MixinAbstract.o_deferred_credentials.reject({'s_message': error['s_error']});
    });
  }).fail(function()
  {
    WlSdk_Config_MixinAbstract.o_deferred_credentials.reject(o_key_session.errorGet());
  });

  return WlSdk_Config_MixinAbstract.o_deferred_credentials.promise();
};

/**
 * Returns a CSRF code for authentication.
 *
 * @return {string} CSRF code.
 */
WlSdk_Config_MixinAbstract.configCsrf = function()
{
  return '';
};

// noinspection JSUnusedLocalSymbols
/**
 * Creates deferred object.
 *
 * @param {string} [s_where] Identifier of a place from where method is called.
 * @param {string} [s_comment] Comment of object.
 * @return {WlSdk_Deferred} Deferred object.
 */
WlSdk_Config_MixinAbstract.configDeferredCreate = function(s_where,s_comment)
{
  return new WlSdk_Deferred();
};

/**
 * Creates a promise that will be resolved when a set of deferred objects is resolved.
 *
 * @param {WlSdk_Deferred[]} a_defer A list of deferred objects.
 * @return {WlSdk_Deferred_Promise} Promise that wil be resolved
 * when all deferred objects in the list are resolved.
 */
WlSdk_Config_MixinAbstract.configDeferredWhen = function(a_defer)
{
  return WlSdk_Deferred.when(a_defer).promise();
};

/**
 * Writes into log for test purposes.
 *
 * @param {*} x_log Text to be written.
 */
WlSdk_Config_MixinAbstract.configTestLog = function(x_log)
{
  // Do nothing by default.
};

/**
 * Extends the class to a child.
 *
 * @param {WlSdk_Config_MixinAbstract} o_child Child class to be extended.
 */
WlSdk_Config_MixinAbstract.extend = function(o_child)
{
  for(var s_method in this)
  {
    if(!this.hasOwnProperty(s_method))
      continue;
    if(o_child.hasOwnProperty(s_method))
      continue;
    o_child[s_method] = this[s_method];
  }
};

// noinspection JSUnusedLocalSymbols
/**
 * Processes a case of successful request to server.
 *
 * @param {{}} a_result Result info.
 * @param {string} s_request Request type (<tt>GET</tt>, <tt>POST</tt>, ...).
 * @param {string} url_request Result URL.
 * @return {boolean} <tt>true</tt> to continue response processing in general way;
 * <tt>false</tt> to stop general success processing.
 */
WlSdk_Config_MixinAbstract.requestSuccess = function(a_result,s_request,url_request)
{
  return true;
};