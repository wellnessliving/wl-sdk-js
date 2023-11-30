/**
 * An endpoint that returns a list of review IDs for all reviews for a location. If location is not specified, returns
 * all reviews for all locations in the specified business.
 *
 * Reviews in WellnessLiving apply to specific locations. This endpoint can be used to get the IDs for all reviews or
 * to get a listing that includes all the review data if the `i_page parameter` is set.
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
  this._s_key = "k_business,k_location,uid,id_order,i_page";

  /**
   * @typedef {{}} Wl_Review_ReviewList_ReviewListModel_a_review
   * @property {boolean} can_reply <tt>true</tt> if can reply to review, <tt>false</tt> otherwise.
   * @property {string} dl_reply Date when staff reply to review. Can be empty string if no one replied.
   * @property {string} dt_add Date when review added.
   * @property {number} f_rate Rate of review.
   * @property {boolean} is_verify <tt>true</tt> if review is verify, <tt>false</tt> otherwise.
   * @property {string} k_review Review key.
   * @property {string} s_firstname First name of user who wrote review.
   * @property {string} s_lastname Last name of user who wrote review.
   * @property {string} s_reply Reply for review.
   * @property {string} s_text Review text.
   * @property {string} text_city City from the profile of the user, who left review.
   * @property {string} text_reply_first First name of staff who replied of review. Can be empty string if no one replied.
   * @property {string} text_reply_last Last name of staff who replied of review. Can be empty string if no one replied.
   * @property {string} text_role Staff role who replied of review. Can be empty string if no one replied.
   * @property {string} uid User key who wrote review.
   * @property {string} url_image Link to the image of the user who wrote review.
   * @property {string} url_reply_image Link to the image of the user who replied of review. Can be empty string if no one replied.
   */

  /**
   * List of reviews. If passed {@link Wl_Review_ReviewList_ReviewListModel.i_page} then the result will be full, otherwise in result will be keys: <tt>k_review</tt>, <tt>uid</tt>.
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
   *     Review key.
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
   *     string <var>text_city</var>
   *   </dt>
   *   <dd>
   *     City from the profile of the user, who left review.
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
   * If not specified, this request will return all review keys. If specified, this request will return detailed reviews
   * (10 per page).
   *
   * This will be `null` if you only need to load the keys of the review.
   *
   * @get get
   * @type {?number}
   */
  this.i_page = null;

  /**
   * The order in which the review should be arranged. One of the {@link Wl_Review_ReviewList_ReviewOrderSid} constants.
   *
   * If not passed use default order {@link Wl_Review_ReviewList_ReviewOrderSid.LATEST}.
   *
   * @get get
   * @type {?number}
   */
  this.id_order = null;

  /**
   * The key of the business to show reviews for. If not specified, location key needs to be specified.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the location to show reviews for. If location is not specified, business key needs to be specified.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff members can see
   * all reviews. Clients can only see checked reviews.
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
  return {"a_field": {"a_review": {"get": {"result": true}},"i_page": {"get": {"get": true}},"id_order": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewListModel.instanceGet
 * @param {string} k_business The key of the business to show reviews for.
 * @param {string} k_location The key of the location to show reviews for.
 * @param {string} uid The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff members can see all reviews. Clients can only see checked reviews.
 * @param {?number} id_order The order in which the review should be arranged. One of the {@link Wl_Review_ReviewList_ReviewOrderSid} constants. If not passed use default order {@link Wl_Review_ReviewList_ReviewOrderSid.LATEST}.
 * @param {?number} i_page If not specified, this request will return all review keys. If specified, this request will return detailed reviews (10 per page). This will be `null` if you only need to load the keys of the review.
 * @returns {Wl_Review_ReviewList_ReviewListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */