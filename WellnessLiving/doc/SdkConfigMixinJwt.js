/**
 * Configurations for SDK.
 *
 * @augments WlSdk_Config_MixinAbstract
 * @mixes WlSdk_Config_MixinAbstract
 */
function WlSdk_Config_Mixin ()
{
}

WlSdk_Config_MixinAbstract.extend(WlSdk_Config_Mixin);

/**
 * Login for application authorization.
 *
 * @type {string}
 */
WlSdk_Config_Mixin.CONFIG_AUTHORIZE_ID = '[add ID]';

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
 * `jwt` based on JWT token.
 * `local` base on session key which is saved in the browser local storage.
 *
 * @type {string}
 * @see WlSdk_Config_MixinAbstract.SESSION
 */
WlSdk_Config_Mixin.SESSION = 'jwt';

/**
 * Loads credentials to sign requests.
 *
 * @param {{}} a_config Request configuration.
 * @return {WlSdk_Deferred_Promise} Promise that will be resolved when credentials are loaded.
 */
WlSdk_Config_Mixin.configCredentialsLoad = function ()
{
  WlSdk_ModelAbstract.a_credentials = {
    's_jwt': '[JWT Token]'
  };

  return (new WlSdk_Deferred()).resolve().promise();
};