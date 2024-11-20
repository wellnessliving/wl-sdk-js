/**
 * Tool to authorize user with Apple.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Apple_Login_AppleLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application ID.
   *
   * @post post
   * @type {string}
   */
  this.text_application = "";

  /**
   * Authorization code.
   *
   * @post post
   * @type {string}
   */
  this.text_authorization = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Apple_Login_AppleLoginModel);

/**
 * @inheritDoc
 */
Social_Apple_Login_AppleLoginModel.prototype.config=function()
{
  return {"a_field": {"text_application": {"post": {"post": true}},"text_authorization": {"post": {"post": true}}}};
};