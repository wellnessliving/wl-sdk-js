/**
 * Binding of user's profile to Facebook.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Facebook_Login_LoginBindModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * User ID in Facebook.
   *
   * @delete get
   * @get result
   * @type {string}
   */
  this.i_facebook = "";

  /**
   * <tt>true</tt> - profile is bound to Facebook; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * Facebook token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  /**
   * User key. Primary key in {@link PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Facebook_Login_LoginBindModel);

/**
 * @inheritDoc
 */
Social_Facebook_Login_LoginBindModel.prototype.config=function()
{
  return {"a_field": {"i_facebook": {"delete": {"get": true},"get": {"result": true}},"is_exists": {"get": {"result": true}},"s_token": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Social_Facebook_Login_LoginBindModel.instanceGet
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Social_Facebook_Login_LoginBindModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */