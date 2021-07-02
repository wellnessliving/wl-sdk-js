/**
 * Retrieves information about review item.
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
   * @property {string} s_firstname Client's first name who added review.
   * @property {string} s_lastname Client's last name who added review.
   * @property {string} s_reply Staff reply. Can be empty.
   * @property {string} s_text Review text.
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
   *     string <var>s_firstname</var>
   *   </dt>
   *   <dd>
   *     Client's first name who added review.
   *   </dd>
   *   <dt>
   *     string <var>s_lastname</var>
   *   </dt>
   *   <dd>
   *     Client's last name who added review.
   *   </dd>
   *   <dt>
   *     string <var>s_reply</var>
   *   </dt>
   *   <dd>
   *     Staff reply. Can be empty.
   *   </dd>
   *   <dt>
   *     string <var>s_text</var>
   *   </dt>
   *   <dd>
   *     Review text.
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
  this.a_review = undefined;

  /**
   * Key of the business to which the review belongs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Review primary key in {@link \RsReviewSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_review = "0";

  /**
   * User primary key in {@link \PassportLoginSql}.
   *
   * May be empty for a case of quest.
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
  return {"a_field": {"a_review": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_review": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewElementModel.instanceGet
 * @param {string} k_business Key of the business to which the review belongs.
 * @param {string} k_review Review primary key in {@link \RsReviewSql}.
 * @param {string} uid User primary key in {@link \PassportLoginSql}. May be empty for a case of quest.
 * @returns {Wl_Review_ReviewList_ReviewElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */