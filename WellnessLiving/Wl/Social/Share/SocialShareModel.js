/**
 * Saves data about share post to database.
 * Api usage example:
 * <code>
 *     $o_api = new SocialShareModel();
 *     $o_api->id_share_object = Wl_Social_Share_ShareObjectSid.PURCHASE;
 *     // Key of the purchase because id_share_object is Wl_Social_Share_ShareObjectSid.PURCHASE
 *     $o_api->a_key = [$k_purchase_a, $k_purchase_b];
 *     $o_api->id_share_destination = ASocialSid.FACEBOOK;
 *     $o_api->k_business = $k_business;
 *     $o_api->uid = $uid;
 *     $o_api->post();
 *
 *     $url_link = ''; // Example: Wl_Profile_Activity_ElementModel.url_link
 *
 *     // s_secret points specifically to your object that you want to share, so add it to the url.
 *     // In this case url_link stores all purchases for the business,
 *     // and by using s_secret we will get a link to only those purchases we want to share.
 *     $url_facebook_share = 'https://www.facebook.com/sharer/sharer.php?u=' . urlencode($url_link . '&s_secret=' . $o_api->s_secret);
 * </code>
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
   * The primary keys of the shared objects. Depends on {@link Wl_Social_Share_SocialShareModel.id_share_object}.
   * If {@link Wl_Social_Share_SocialShareModel.id_share_object} is:
   * * {@link Wl_Social_Share_ShareObjectSid.BOOK} - each value is key of the visit.
   * * {@link Wl_Social_Share_ShareObjectSid.LOCATION} - each value is key of the location.
   * * {@link Wl_Social_Share_ShareObjectSid.PURCHASE} - each value is key of the purchase.
   * * {@link Wl_Social_Share_ShareObjectSid.REVIEW} - each value is key of the review.
   *
   * @post post
   * @type {string[]}
   */
  this.a_key = undefined;

  /**
   * The id of the social network. One of {@link ASocialSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_share_destination = undefined;

  /**
   * The id of type object for share post to social network. One of {@link Wl_Social_Share_ShareObjectSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_share_object = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Secret key for access shared object.
   *
   * @post result
   * @type {string}
   */
  this.s_secret = undefined;

  /**
   * User key.
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