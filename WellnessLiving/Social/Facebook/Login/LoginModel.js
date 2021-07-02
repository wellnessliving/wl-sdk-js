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
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * Facebook token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

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