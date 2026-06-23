/**
 * Retrieves a list of reviews.
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
   * @property {boolean} can_reply `true` if can reply to review, `false` otherwise.
   * @property {string} dl_reply Date when staff reply to review. Can be empty string if no one replied.
   * @property {string} dt_add Date when review added.
   * @property {number} f_rate Rate of review.
   * @property {boolean} is_featured `true` if review is featured, `false` otherwise.
   * @property {boolean} is_verify `true` if review is verify, `false` otherwise.
   * @property {string} k_location The location key for where the review was left/assigned.
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
   * List of reviews. If passed `i_page` then the result will be full, otherwise in result will be keys: `k_review`, `uid`.
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
   * If not passed use default order {@link Wl_Review_ReviewList_ReviewOrderSid}.
   *
   * @get get
   * @see Wl_Review_ReviewList_ReviewOrderSid
   * @type {?number}
   */
  this.id_order = null;

  /**
   * Business key. If not specified, location key needs to be specified.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the location to show reviews for. If not specified, business key should be specified.
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
  return {"a_field":{"a_review":{"get":{"result":true}},"i_page":{"get":{"get":true}},"id_order":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewListModel.instanceGet
 * @param {string} k_business Business key. If not specified, location key needs to be specified.
 * @param {string} k_location The key of the location to show reviews for. If not specified, business key should be specified.
 * @param {string} uid The user's key. WellnessLiving allows staff to check low-rated reviews before posting them. Staff members can see all reviews. Clients can only see checked reviews.
 * @param {?number} id_order The order in which the review should be arranged. One of the {@link Wl_Review_ReviewList_ReviewOrderSid} constants. If not passed use default order {@link Wl_Review_ReviewList_ReviewOrderSid}.
 * @param {?number} i_page If not specified, this request will return all review keys. If specified, this request will return detailed reviews (10 per page). This will be `null` if you only need to load the keys of the review.
 * @returns {Wl_Review_ReviewList_ReviewListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of reviews.
 *
 * Returns reviews for the specified location, or all reviews for the business if no location is given, with support
 * for filtering by user, ordering, and pagination.
 *
 * @function
 * @name Wl_Review_ReviewList_ReviewListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
