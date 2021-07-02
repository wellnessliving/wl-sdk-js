/**
 * Retrieves a list of reviews to location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewList_ReviewListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,uid";

  /**
   * @typedef {{}} Wl_Review_ReviewList_ReviewListModel_a_review
   * @property {boolean} can_reply <tt>true</tt> if can reply to review, <tt>false</tt> otherwise.
   * @property {string} dl_reply Date when staff reply to review. Can be empty string if no one replied.
   * @property {string} dt_add Date when review added.
   * @property {number} f_rate Rate of review.
   * @property {boolean} is_verify <tt>true</tt> if review is verify, <tt>false</tt> otherwise.
   * @property {string} k_review Review key. Primary key in {@link \RsReviewSql} table.
   * @property {string} s_firstname First name of user who wrote review.
   * @property {string} s_lastname Last name of user who wrote review.
   * @property {string} s_reply Reply for review.
   * @property {string} s_text Review text.
   * @property {string} text_reply_first First name of staff who replied of review. Can be empty string if no one replied.
   * @property {string} text_reply_last Last name of staff who replied of review. Can be empty string if no one replied.
   * @property {string} text_role Staff role who replied of review. Can be empty string if no one replied.
   * @property {string} uid User key who wrote review.
   * @property {string} url_image Link to the image of the user who wrote review.
   * @property {string} url_reply_image Link to the image of the user who replied of review. Can be empty string if no one replied.
   */

  /**
   * List of reviews. If passed {@link \Wl\Review\ReviewList\ReviewListApi::$i_page} then the result will be full, otherwise in result will be keys: <tt>k_review</tt>, <tt>uid</tt>.
   * <dl>
   *   <dt>
   *     bool <var>can_reply</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if can reply to review, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>dl_reply</var>
   *   </dt>
   *   <dd>
   *     Date when staff reply to review. Can be empty string if no one replied.
   *   </dd>
   *   <dt>
   *     string <var>dt_add</var>
   *   </dt>
   *   <dd>
   *     Date when review added.
   *   </dd>
   *   <dt>
   *     float <var>f_rate</var>
   *   </dt>
   *   <dd>
   *     Rate of review.
   *   </dd>
   *   <dt>
   *     bool <var>is_verify</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if review is verify, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_review</var>
   *   </dt>
   *   <dd>
   *     Review key. Primary key in {@link \RsReviewSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_firstname</var>
   *   </dt>
   *   <dd>
   *     First name of user who wrote review.
   *   </dd>
   *   <dt>
   *     string <var>s_lastname</var>
   *   </dt>
   *   <dd>
   *     Last name of user who wrote review.
   *   </dd>
   *   <dt>
   *     string <var>s_reply</var>
   *   </dt>
   *   <dd>
   *     Reply for review.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     Review text.
   *   </dd>
   *   <dt>
   *     string <var>text_reply_first</var>
   *   </dt>
   *   <dd>
   *     First name of staff who replied of review. Can be empty string if no one replied.
   *   </dd>
   *   <dt>
   *     string <var>text_reply_last</var>
   *   </dt>
   *   <dd>
   *     Last name of staff who replied of review. Can be empty string if no one replied.
   *   </dd>
   *   <dt>
   *     string <var>text_role</var>
   *   </dt>
   *   <dd>
   *     Staff role who replied of review. Can be empty string if no one replied.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     User key who wrote review.
   *   </dd>
   *   <dt>
   *     string <var>url_image</var>
   *   </dt>
   *   <dd>
   *     Link to the image of the user who wrote review.
   *   </dd>
   *   <dt>
   *     string <var>url_reply_image</var>
   *   </dt>
   *   <dd>
   *     Link to the image of the user who replied of review. Can be empty string if no one replied.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Review_ReviewList_ReviewListModel_a_review[]}
   */
  this.a_review = undefined;

  /**
   * Page number.
   * <tt>null</tt> if need load only keys of review.
   *
   * @get get
   * @type {number}
   */
  this.i_page = undefined;

  /**
   * Review order ID. One of {@link \Wl\Review\ReviewList\ReviewOrderSid} constants.
   * If not passed use default order {@link \Wl\Review\ReviewList\ReviewOrderSid::LATEST}.
   *
   * @get get
   * @type {?number}
   */
  this.id_order = null;

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewList_ReviewListModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewList_ReviewListModel.prototype.config=function()
{
  return {"a_field": {"a_review": {"get": {"result": true}},"i_page": {"get": {"get": true}},"id_order": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewListModel.instanceGet
 * @param {string} k_location Location key.
 * @param {string} uid User key.
 * @returns {Wl_Review_ReviewList_ReviewListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */