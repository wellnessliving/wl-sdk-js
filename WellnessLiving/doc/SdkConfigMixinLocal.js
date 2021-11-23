/**
 * Configurations for SDK.
 *
 * @augments WlSdk_Config_MixinAbstract
 * @mixes WlSdk_Config_MixinAbstract
 */
function WlSdk_Config_Mixin()
{
}

WlSdk_Config_MixinAbstract.extend(WlSdk_Config_Mixin);

/**
 * Login for application authorization.
 *
 * @type {string}
 */
WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID = 'add ID';

/**
 * Code for CSRF protection.
 */
WlSdk_Config_Mixin.CSRF_CODE = SDK_CSRF_CODE; // Set variable with your CSRF code.

/**
 * Region id in which information about this business is stored.
 * One of {@link WlSdk_Config_ConfigRegionSid} fields.
 *
 * @type {number}
 */
WlSdk_Config_Mixin.ID_REGION = WlSdk_Config_ConfigRegionSid.US_EAST_1;

/**
 * URL of the API where secret key for signature may be generated.
 *
 * @type {string}
 */
WlSdk_Config_Mixin.URL_CSRF = 'http://stable.wellnessliving.lc/secret.php';  // Example of API URL.

/**
 * Returns CSRF code based on session key.
 *
 * @param {string} s_session_key Session key.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when CSRF code is ready to use.
 */
WlSdk_Config_Mixin.csrfCode = function(s_session_key)
{
  var o_defer = WlSdk_Config_Mixin.configDeferredCreate();

  // If saved already.
  // Note. You can output CSRF code into variable during the page is rendered, if it is saved in a cookie or session.
  // Additional check that CSRF code is valid - s_session_key.substr(0,5) === CSRF_CODE_VARIABLE.substr(-5,5).
  if(WLSDK_CSRF_CODE_VARIABLE && s_session_key.substr(0,5) === WLSDK_CSRF_CODE_VARIABLE.substr(-5,5))
    return o_defer.resolve(WLSDK_CSRF_CODE_VARIABLE).promise();

  var url = 'https://domain.com/csrfCode.php'; // URL to get CSRF code on your server.
  url = WlSdk_Core_Url.variable(url,{
    's_session_key': s_session_key
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
    WLSDK_CSRF_CODE_VARIABLE = data['s_csrf']; // saving CSRF code
    o_defer.resolve(data['s_csrf']);
  }).catch(function(error)
  {
    o_defer.reject({'s_message': error['s_error']});
  });

  return o_defer.promise();
};

/*
/!**
 * Version of signature.
 *
 * @type {string}
 *!/
WlSdk_Config_Mixin.SIGNATURE_VERSION = '20150518';

/!**
 * Loads credentials to sign requests.
 *
 * @param {{}} a_config Request configuration.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when credentials are loaded.
 *!/
WlSdk_Config_Mixin.configCredentialsLoad = function(a_config)
{
  WlSdk_ModelAbstract.a_credentials = {
    's_code': 'loitvw0hgzjffmd6fh3p1qcz4e7kyxqgvh7v6ra9fn-d',
    's_cookie_persistent': 'HwdXBpMG5mZNOGyems6ZKELCAGVNXBjl',
    's_cookie_transient': 'fPFTqWyCv9N9R95udyqr61ncJQr0rwDB'
  };

  return (new WlSdk_Deferred()).resolve().promise();
};

/!**
 * Forms the header "Authorization".
 *
 * @param {string} s_signature Signature for a request.
 * @return {string} Value for the header "Authorization".
 *!/
WlSdk_Config_Mixin.signatureCompose = function(s_signature)
{
  return WlSdk_Config_Mixin.SIGNATURE_VERSION+','+WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID+',,'+s_signature;
};*/
