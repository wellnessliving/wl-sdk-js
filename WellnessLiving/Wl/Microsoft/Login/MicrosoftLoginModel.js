/**
 * Removes the association between a website client and a Microsoft account.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Microsoft_Login_MicrosoftLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, the user has a bound Microsoft account. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * If authorization is performed in a third-party application, set this flag in case of authorization errors.
   *
   * @post get
   * @type {boolean}
   */
  this.is_external = false;

  /**
   * Business in which authorization is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The authorization code that the app requested.
   *
   * @post post
   * @type {string}
   */
  this.s_code = "";

  /**
   * If a state parameter is included in the request, the same value should appear in the response.
   * The app should verify that the state values in the request and response are identical.
   *
   * @post post
   * @type {string}
   */
  this.s_state = "";

  /**
   * The client for whom the Microsoft account will be unlinked.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * The Microsoft OAuth 2.0 authorization link.
   *
   * @get result
   * @type {string}
   */
  this.url_login = undefined;

  /**
   * The Redirect URI for external applications.
   * The link to the page on which Microsoft will return the result after authorization.
   *
   * * All possible links must be registered in the Microsoft application used for authorization.
   * * WARNING: Do not use this link for a direct redirect. This will present a vulnerability.
   *
   * * A {@link Social_Microsoft_LoginModel} link will be generated along with this redirect URI.
   * * When checking the received {@link Social_Microsoft_LoginModel} from Microsoft.
   * The link must be sent along with it to the `post()` method.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.url_redirect = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Microsoft_Login_MicrosoftLoginModel);

/**
 * @inheritDoc
 */
Wl_Microsoft_Login_MicrosoftLoginModel.prototype.config=function()
{
  return {"a_field":{"is_exists":{"get":{"result":true}},"is_external":{"post":{"get":true}},"k_business":{"post":{"post":true}},"s_code":{"post":{"post":true}},"s_state":{"post":{"post":true}},"uid":{"delete":{"get":true},"get":{"get":true}},"url_login":{"get":{"result":true}},"url_redirect":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Removes the association between a website client and a Microsoft account.
 *
 * Accepts the user's UID, verifies that the caller is the account owner, and unlinks the Microsoft
 * account from the user's profile.
 *
 * @function
 * @name Wl_Microsoft_Login_MicrosoftLoginModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Collects data for the Microsoft login button.
 *
 * Called when rendering the "Sign in with Microsoft" button. Generates the OAuth 2.0 authorization URL
 * the button must link to. When a UID is provided, also reports whether that user already has a Microsoft
 * account linked, so the frontend can show "Link" or "Unlink" instead of the default sign-in label.
 *
 * @function
 * @name Wl_Microsoft_Login_MicrosoftLoginModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Authenticates a user via Microsoft OAuth for the specified business.
 *
 * Validates the business key, sets it as the current frontend business context, and then delegates to the
 * parent Microsoft OAuth flow to complete sign-in.
 *
 * @function
 * @name Wl_Microsoft_Login_MicrosoftLoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
