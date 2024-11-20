/**
 * A class is for authorizing user with Google.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Google_Plus_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application ID.
   *
   * <tt>null</tt> for use application, which makes request. And use credential of application from {@link Core_Request_Model\Application\Credential\GoogleCredential} class for authorization user.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * Google server auth code.
   *
   * @post post
   * @type {string}
   */
  this.s_code = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Google_Plus_LoginModel);

/**
 * @inheritDoc
 */
Social_Google_Plus_LoginModel.prototype.config=function()
{
  return {"a_field": {"s_application": {"post": {"post": true}},"s_code": {"post": {"post": true}}}};
};