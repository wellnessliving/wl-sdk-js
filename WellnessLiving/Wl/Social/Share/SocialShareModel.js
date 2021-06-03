/**
 * Saves data about share post to database.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Social_Share_SocialShareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The primary keys of the share objects.
   *
   * @post post
   * @type {string[]}
   */
  this.a_key = undefined;

  /**
   * One of {@link \ASocialSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_share_destination = undefined;

  /**
   * One of {@link \Wl\Social\Share\ShareObjectSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_share_object = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Secret code shared object.
   *
   * @post result
   * @type {string}
   */
  this.s_secret = undefined;

  /**
   * User key. Primary key {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Social_Share_SocialShareModel);

/**
 * @inheritDoc
 */
Wl_Social_Share_SocialShareModel.prototype.config=function()
{
  return {"a_field": {"a_key": {"post": {"post": true}},"id_share_destination": {"post": {"post": true}},"id_share_object": {"post": {"post": true}},"k_business": {"post": {"post": true}},"s_secret": {"post": {"result": true}},"uid": {"post": {"post": true}}}};
};