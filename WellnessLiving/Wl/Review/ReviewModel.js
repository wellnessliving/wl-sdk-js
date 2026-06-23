/**
 * Submits user's review.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The rating given to the location (1 to 5 stars).
   *
   * This will be `null` if not set yet.
   *
   * @post post
   * @type {?number}
   */
  this.i_rate = null;

  /**
   * Reward score for leaving a review.
   *
   * @post result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Reward score for sharing a review on Facebook.
   *
   * @post result
   * @type {number}
   */
  this.i_score_facebook = undefined;

  /**
   * Reward score for sharing a review on Twitter.
   *
   * @post result
   * @type {number}
   */
  this.i_score_twitter = undefined;

  /**
   * If a reward score for leaving a review exists.
   *
   * @post result
   * @type {boolean}
   */
  this.is_score = undefined;

  /**
   * If a reward score for sharing a review on Facebook exists.
   *
   * @post result
   * @type {boolean}
   */
  this.is_score_facebook = undefined;

  /**
   * If a reward score for sharing a review on Twitter exists.
   *
   * @post result
   * @type {boolean}
   */
  this.is_score_twitter = undefined;

  /**
   * If a reward score for sharing exists.
   *
   * @post result
   * @type {boolean}
   */
  this.is_share_points = undefined;

  /**
   * If a reward score does not exist for leaving a review or sharing the review.
   *
   * @post result
   * @type {boolean}
   */
  this.is_share_points_none = undefined;

  /**
   * The key of a location.
   *
   * This will be `null` if not loaded yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The key of the review writing activity. This will be empty if the review was saved but not published.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity = undefined;

  /**
   * Review key.
   *
   * @post result
   * @type {string}
   */
  this.k_review = undefined;

  /**
   * Visit key.
   * Can be `null` if the review is not connected to a visit.
   *
   * @post post
   * @type {?string}
   */
  this.k_visit = null;

  /**
   * The text of the review.
   *
   * This will be `null` if not set yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_text = null;

  /**
   * The UID of client who leaves review.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * The sharing url of the review.
   *
   * @post result
   * @type {string}
   */
  this.url_share = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewModel.prototype.config=function()
{
  return {"a_field":{"i_rate":{"post":{"post":true}},"i_score":{"post":{"result":true}},"i_score_facebook":{"post":{"result":true}},"i_score_twitter":{"post":{"result":true}},"is_score":{"post":{"result":true}},"is_score_facebook":{"post":{"result":true}},"is_score_twitter":{"post":{"result":true}},"is_share_points":{"post":{"result":true}},"is_share_points_none":{"post":{"result":true}},"k_location":{"post":{"post":true}},"k_login_activity":{"post":{"result":true}},"k_review":{"post":{"result":true}},"k_visit":{"post":{"post":true}},"s_text":{"post":{"post":true}},"uid":{"post":{"result":true}},"url_share":{"post":{"result":true}}}};
};

/**
 * Submits user's review.
 *
 * Validates the captcha, saves the review rating and text for the specified location, and returns reward score
 * information if the business awards points for leaving a review.
 *
 * @function
 * @name Wl_Review_ReviewModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
