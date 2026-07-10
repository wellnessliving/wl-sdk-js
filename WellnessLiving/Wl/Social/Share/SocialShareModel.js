/**
 * Saves the share post data and returns the secret key for the shared object.
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
   * * {@link Wl_Social_Share_ShareObjectSid} - each value is key of the visit. 
   * * {@link Wl_Social_Share_ShareObjectSid} - each value is key of the location. 
   * * {@link Wl_Social_Share_ShareObjectSid} - each value is key of the purchase. 
   * * {@link Wl_Social_Share_ShareObjectSid} - each value is key of the review.
   *
   * @post post
   * @type {number[]}
   */
  this.a_key = undefined;

  /**
   * The id of the social network.
   *
   * @post post
   * @see ASocialSid
   * @type {number}
   */
  this.id_share_destination = 0;

  /**
   * The id of type object for share post to social network.
   *
   * @post post
   * @see Wl_Social_Share_ShareObjectSid
   * @type {number}
   */
  this.id_share_object = 0;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Social_Share_SocialShareModel);

/**
 * @inheritDoc
 */
Wl_Social_Share_SocialShareModel.prototype.config=function()
{
  return {"a_field":{"a_key":{"post":{"post":true}},"id_share_destination":{"post":{"post":true}},"id_share_object":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_secret":{"post":{"result":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Saves the share post data and returns the secret key for the shared object.
 *
 * Records that the user has shared the specified objects (purchases, bookings, locations, or
 * reviews) to a social network, and returns a secret token that can be appended to the
 * destination URL to deep-link directly to the shared items.
 *
 * @function
 * @name Wl_Social_Share_SocialShareModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
