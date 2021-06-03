/**
 * Api for add reply of review.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewReplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business to which the review belongs.
   *
   * Empty string to defined business automatically, based on value of <tt>k_review</tt>.
   *
   * Although this value may be empty, this behavior is deprecated and will be removed in the future.
   * You MUST pass key of the business always.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Review key. Primary key in {@link \RsReviewSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_review = undefined;

  /**
   * Reply text for review.
   *
   * @post post
   * @type {string}
   */
  this.text_reply = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewReplyModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewReplyModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_review": {"post": {"post": true}},"text_reply": {"post": {"post": true}}}};
};