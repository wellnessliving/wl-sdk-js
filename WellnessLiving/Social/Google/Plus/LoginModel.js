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
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * Google server auth code.
   *
   * @post post
   * @type {string}
   */
  this.s_code = "";

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