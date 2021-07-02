/**
 * Sharing user's activity in social networks.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Activity_ShareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of IDs of user's activity. Primary keys in {@link RsLoginActivitySql} table.
   *
   * @post post
   * @type {string[]}
   */
  this.a_login_activity = [];

  /**
   * <tt>true</tt> - share activity on Facebook; <tt>false</tt> - do not share on Facebook.
   *
   * @post post
   * @type {boolean}
   */
  this.is_facebook = false;

  /**
   * <tt>true</tt> - share activity on Twitter; <tt>false</tt> - do not share on Twitter.
   *
   * @post post
   * @type {boolean}
   */
  this.is_twitter = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Activity_ShareModel);

/**
 * @inheritDoc
 */
Wl_Login_Activity_ShareModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"post": true}},"is_facebook": {"post": {"post": true}},"is_twitter": {"post": {"post": true}}}};
};