/**
 * Saves the reply text and optional status update for the given review.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewReplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Review status identifiers.
   *
   * Values:
   * - 1 (`ADMIN`): Admin.
   * - 4 (`HIDDEN`): Hidden.
   * - 3 (`PUBLISH`): Publish.
   *
   * @post post
   * @see RsReviewStatusSid
   * @type {?number}
   */
  this.id_review_status = null;

  /**
   * Key of the business to which the review belongs.
   *
   * Empty string to defined business automatically, based on value of `k_review`.
   *
   * Although this value may be empty, this behavior is deprecated and will be removed in the future.
   * You MUST pass key of the business always.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The review key.
   *
   * @post post
   * @type {string}
   */
  this.k_review = "";

  /**
   * The reply text for review.
   *
   * @post post
   * @type {string}
   */
  this.text_reply = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewReplyModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewReplyModel.prototype.config=function()
{
  return {"a_field":{"id_review_status":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_review":{"post":{"post":true}},"text_reply":{"post":{"post":true}}}};
};

/**
 * Saves the reply text and optional status update for the given review.
 *
 * Validates edit access for the current user, persists the reply text and optional review status change,
 * and records the replying staff or admin user.
 *
 * @function
 * @name Wl_Review_ReviewReplyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
