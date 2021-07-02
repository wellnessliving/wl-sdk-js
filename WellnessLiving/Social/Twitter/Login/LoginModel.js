/**
 * A class is for authorizing user with twitter.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Twitter_Login_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * User ID in Twitter.
   *
   * @delete get
   * @get result
   * @post get
   * @type {string}
   */
  this.i_twitter = "";

  /**
   * <tt>true</tt> - profile is linked to Twitter; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * Twitter secret key.
   *
   * @post post
   * @type {string}
   */
  this.s_secret = "";

  /**
   * Twitter token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  /**
   * User's primary key in {@link PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Twitter_Login_LoginModel);

/**
 * @inheritDoc
 */
Social_Twitter_Login_LoginModel.prototype.config=function()
{
  return {"a_field": {"i_twitter": {"delete": {"get": true},"get": {"result": true},"post": {"get": true}},"is_exists": {"get": {"result": true}},"s_secret": {"post": {"post": true}},"s_token": {"post": {"post": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Social_Twitter_Login_LoginModel.instanceGet
 * @param {string} uid User's primary key in {@link PassportLoginSql} table.
 * @returns {Social_Twitter_Login_LoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */