/**
 * Creates or updates the integration credentials for the given business application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Connect_ApplicationConnectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` to enable Sign In with Apple for this application, `false` to disable.
   *
   * @post post
   * @type {boolean}
   */
  this.is_apple = false;

  /**
   * `true` to enable Sign In with Facebook (iOS) for this application, `false` to disable.
   *
   * @post post
   * @type {boolean}
   */
  this.is_facebook = false;

  /**
   * `true` to enable Sign In with Facebook (Android) for this application, `false` to disable.
   *
   * @post post
   * @type {boolean}
   */
  this.is_facebook_android = false;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the created or updated application.
   * Set in the response after a successful `post()` call.
   *
   * @post result
   * @type {string}
   */
  this.k_spa_application = undefined;

  /**
   * Firebase service account private key (JSON content of the `.p8`-equivalent key file).
   *
   * @post post
   * @type {string}
   */
  this.s_firebase_key = "";

  /**
   * Firebase project ID.
   *
   * @post post
   * @type {string}
   */
  this.s_firebase_project = "";

  /**
   * Google OAuth client ID.
   *
   * @post post
   * @type {string}
   */
  this.s_google_id = "";

  /**
   * Reversed Google OAuth client ID (iOS URL scheme).
   *
   * @post post
   * @type {string}
   */
  this.s_google_reverse = "";

  /**
   * Google OAuth client secret.
   *
   * @post post
   * @type {string}
   */
  this.s_google_secret = "";

  /**
   * Sign In with Apple key (`.p8` file content).
   *
   * @post post
   * @type {string}
   */
  this.text_cert_ios_login = "";

  /**
   * APNs push notification auth key (`.p8` file content).
   *
   * @post post
   * @type {string}
   */
  this.text_cert_ios_push = "";

  /**
   * Bundle ID used as the application identifier.
   *
   * @post post
   * @type {string}
   */
  this.text_domain = "";

  /**
   * Sign In with Apple key ID.
   *
   * @post post
   * @type {string}
   */
  this.text_key_login_id = "";

  /**
   * APNs push notification key ID.
   *
   * @post post
   * @type {string}
   */
  this.text_key_push_id = "";

  /**
   * Application display name.
   *
   * @post post
   * @type {string}
   */
  this.text_name = "";

  /**
   * Apple Developer Team ID.
   *
   * @post post
   * @type {string}
   */
  this.text_team_id = "";

  /**
   * Google OAuth redirect URL.
   *
   * @post post
   * @type {string}
   */
  this.url_google_redirect = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Connect_ApplicationConnectModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Connect_ApplicationConnectModel.prototype.config=function()
{
  return {"a_field":{"is_apple":{"post":{"post":true}},"is_facebook":{"post":{"post":true}},"is_facebook_android":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_spa_application":{"post":{"result":true}},"s_firebase_key":{"post":{"post":true}},"s_firebase_project":{"post":{"post":true}},"s_google_id":{"post":{"post":true}},"s_google_reverse":{"post":{"post":true}},"s_google_secret":{"post":{"post":true}},"text_cert_ios_login":{"post":{"post":true}},"text_cert_ios_push":{"post":{"post":true}},"text_domain":{"post":{"post":true}},"text_key_login_id":{"post":{"post":true}},"text_key_push_id":{"post":{"post":true}},"text_name":{"post":{"post":true}},"text_team_id":{"post":{"post":true}},"url_google_redirect":{"post":{"post":true}}}};
};

/**
 * Creates or updates the integration credentials for the given business application.
 *
 * If a record already exists for `k_business`, it is updated
 * in place. Otherwise, a new record is created and linked to the business.
 *
 * @function
 * @name Wl_Skin_Application_Connect_ApplicationConnectModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
