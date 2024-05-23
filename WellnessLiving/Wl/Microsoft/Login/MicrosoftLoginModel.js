/**
 * An endpoint that performs authorization actions with Microsoft.
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
  this.is_exists = false;

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
  this.url_login = "";

  /**
   * The Redirect URI for external applications.
   * The link to the page on which Microsoft will return the result after authorization.
   *
   * * All possible links must be registered in the Microsoft application used for authorization.
   * * WARNING: Do not use this link for a direct redirect. This will present a vulnerability.
   *
   * * A {@link Social_Microsoft_LoginModel.url_login} link will be generated along with this redirect URI.
   * * When checking the received {@link Social_Microsoft_LoginModel.s_code} from Microsoft, the link must be sent along with it
   * to the {@link Social_Microsoft_LoginModel.post()} method.
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
  return {"a_field": {"is_exists": {"get": {"result": true}},"is_external": {"post": {"get": true}},"k_business": {"post": {"post": true}},"s_code": {"post": {"post": true}},"s_state": {"post": {"post": true}},"uid": {"delete": {"get": true},"get": {"get": true}},"url_login": {"get": {"result": true}},"url_redirect": {"get": {"get": true},"post": {"get": true}}}};
};