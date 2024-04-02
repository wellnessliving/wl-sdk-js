/**
 * An endpoint that performs authorization actions with Facebook.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Facebook_Login_FacebookLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_token";

  /**
   * Business in which authorization is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The application ID.
   *
   * This will be `null` if the application is being used to make the request.
   * Use the application credential from the {@link Core_Request_Model\Application\Credential\FacebookCredential} class for user authorization.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * The Facebook token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Facebook_Login_FacebookLoginModel);

/**
 * @inheritDoc
 */
Wl_Facebook_Login_FacebookLoginModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"s_application": {"post": {"post": true}},"s_token": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Facebook_Login_FacebookLoginModel.instanceGet
 * @param {string} s_token The Facebook token.
 * @returns {Wl_Facebook_Login_FacebookLoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */