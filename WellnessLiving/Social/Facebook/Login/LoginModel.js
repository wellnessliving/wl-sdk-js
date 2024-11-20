/**
 * A class is for authorizing user with facebook.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Facebook_Login_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_token";

  /**
   * Application ID.
   *
   * <tt>null</tt> for use application, which makes request. And use credential of application from {@link Core_Request_Model\Application\Credential\FacebookCredential} class for authorization user.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * Facebook token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Facebook_Login_LoginModel);

/**
 * @inheritDoc
 */
Social_Facebook_Login_LoginModel.prototype.config=function()
{
  return {"a_field": {"s_application": {"post": {"post": true}},"s_token": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Social_Facebook_Login_LoginModel.instanceGet
 * @param {string} s_token Facebook token.
 * @returns {Social_Facebook_Login_LoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */