/**
 * An endpoint that returns information about a review.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewList_ReviewElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_review,uid";

  /**
   * @typedef {{}} Wl_Review_ReviewList_ReviewElementModel_a_review
   * @property {string} dt_add Date when review was added by user.
   * @property {number} f_rate Review rate.
   * @property {number} id_review_status Status of the Review
   * @property {boolean} is_verify <tt>true</tt> if review is verified, <tt>false</tt> otherwise.
   * @property {string} text_firstname Client's first name who added review.
   * @property {string} text_lastname Client's last name who added review.
   * @property {string} text_reply Staff reply. Can be empty.
   * @property {string} text_review Review text.
   * @property {string} text_business_name Business name
   * @property {string} text_response Word "response".
   * @property {string} uid User key.
   * @property {string} url_logo User logo.
   */

  /**
   * Review data:
   * <dl>
   *   <dt>
   *     string <var>dt_add</var>
   *   </dt>
   *   <dd>
   *     Date when review was added by user.
   *   </dd>
   *   <dt>
   *     float <var>f_rate</var>
   *   </dt>
   *   <dd>
   *     Review rate.
   *   </dd>
   *   <dt>
   *     int <var>id_review_status</var>
   *   </dt>
   *   <dd>
   *     Status of the Review
   *   </dd>
   *   <dt>
   *     bool <var>is_verify</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if review is verified, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>text_firstname</var>
   *   </dt>
   *   <dd>
   *     Client's first name who added review.
   *   </dd>
   *   <dt>
   *     string <var>text_lastname</var>
   *   </dt>
   *   <dd>
   *     Client's last name who added review.
   *   </dd>
   *   <dt>
   *     string <var>text_reply</var>
   *   </dt>
   *   <dd>
   *     Staff reply. Can be empty.
   *   </dd>
   *   <dt>
   *     string <var>text_review</var>
   *   </dt>
   *   <dd>
   *     Review text.
   *   </dd>
   *   <dt>
   *     string <var>text_business_name</var>
   *   </dt>
   *   <dd>
   *     Business name
   *   </dd>
   *   <dt>
   *     string <var>text_response</var>
   *   </dt>
   *   <dd>
   *     Word "response".
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     User key.
   *   </dd>
   *   <dt>
   *     string <var>url_logo</var>
   *   </dt>
   *   <dd>
   *     User logo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Review_ReviewList_ReviewElementModel_a_review}
   */
  this.a_review = [];

  /**
   * The key of the business to which the review belongs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The review key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_review = "0";

  /**
   * The user key.
   *
   * May be empty in the case of a quest.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewList_ReviewElementModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewList_ReviewElementModel.prototype.config=function()
{
  return {"a_field": {"a_review": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_review": {"delete": {"get": true},"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewElementModel.instanceGet
 * @param {string} k_business The key of the business to which the review belongs.
 * @param {string} k_review The review key.
 * @param {string} uid The user key. May be empty in the case of a quest.
 * @returns {Wl_Review_ReviewList_ReviewElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */