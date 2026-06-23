/**
 * Deletes a review.
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
   * @property {?number} id_review_status Review status identifiers.
   * @property {boolean} is_featured If `true`, the review is featured. Otherwise, this will be `false`.
   * @property {boolean} is_verify `true` if review is verified, `false` otherwise.
   * @property {string} text_business_name Business name
   * @property {string} text_firstname Client's first name who added review.
   * @property {string} text_lastname Client's last name who added review.
   * @property {string} text_reply Staff reply. Can be empty.
   * @property {string} text_response Word "response".
   * @property {string} text_review Review text.
   * @property {string} uid User key.
   * @property {string} url_logo User logo.
   */

  /**
   * Review data:
   *
   * @get result
   * @type {Wl_Review_ReviewList_ReviewElementModel_a_review}
   */
  this.a_review = undefined;

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
  this.k_review = "";

  /**
   * The user key.
   *
   * May be empty in the case of a guest.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewList_ReviewElementModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewList_ReviewElementModel.prototype.config=function()
{
  return {"a_field":{"a_review":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_review":{"delete":{"get":true},"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Review_ReviewList_ReviewElementModel.instanceGet
 * @param {string} k_business The key of the business to which the review belongs.
 * @param {string} k_review The review key.
 * @param {string} uid The user key. May be empty in the case of a guest.
 * @returns {Wl_Review_ReviewList_ReviewElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes a review.
 *
 * Checks that the caller has the required permission, removes the review, and recomputes the best reviews
 * for the associated business location.
 *
 * @function
 * @name Wl_Review_ReviewList_ReviewElementModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Retrieves information about review item.
 *
 * Returns the review rating, text, date, author information, reply, and featured status for the specified review.
 *
 * @function
 * @name Wl_Review_ReviewList_ReviewElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
