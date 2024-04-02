/**
 * An endpoint that performs authorization actions with Google.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Login_GoogleLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * This will be `null` for application use, which makes the request. Use the application credential from
   * {@link Core_Request_Model\Application\Credential\GoogleCredential} for user authorization.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * The Google server authorization code.
   *
   * @post post
   * @type {string}
   */
  this.s_code = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Login_GoogleLoginModel);

/**
 * @inheritDoc
 */
Wl_Google_Login_GoogleLoginModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"s_application": {"post": {"post": true}},"s_code": {"post": {"post": true}}}};
};