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
 * @see WlSdk_Config_MixinAbstract.ID_REGION
 */
WlSdk_Config_Mixin.ID_REGION = WlSdk_Config_ConfigRegionSid.US_EAST_1;

/**
 * Session type.
 *
 * `cookie` based on cookies.
 * `local` base on session key which is saved in the browser local storage.
 *
 * @type {string}
 * @see WlSdk_Config_MixinAbstract.SESSION
 */
WlSdk_Config_Mixin.SESSION = 'cookie';

/**
 * URL of the API where secret key for signature may be generated.
 *
 * @type {string}
 */
WlSdk_Config_Mixin.URL_CSRF = 'http://stable.wellnessliving.lc/secret.php';  // Example of API URL.

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
