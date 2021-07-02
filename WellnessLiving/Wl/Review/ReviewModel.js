/**
 * Submits user's review.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Selected rate.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {number}
   */
  this.i_rate = undefined;

  /**
   * ID of a location.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * ID of activity "writing review". Primary key in {@link RsLoginActivitySql} table. Empty if review was not published.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity = undefined;

  /**
   * Primary key of review in {@link RsReviewSql} table.
   *
   * @post result
   * @type {string}
   */
  this.k_review = undefined;

  /**
   * The text of review.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {string}
   */
  this.s_text = true;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewModel.prototype.config=function()
{
  return {"a_field": {"i_rate": {"post": {"post": true}},"k_location": {"post": {"post": true}},"k_login_activity": {"post": {"result": true}},"k_review": {"post": {"result": true}},"s_text": {"post": {"post": true}}}};
};