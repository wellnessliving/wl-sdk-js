/**
 * Updates the featured status of the given review for the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewFeatureModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines if the review is featured.
   *
   * @post post
   * @type {boolean}
   */
  this.is_featured = true;

  /**
   * The business key.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Review_ReviewFeatureModel);

/**
 * @inheritDoc
 */
Wl_Review_ReviewFeatureModel.prototype.config=function()
{
  return {"a_field":{"is_featured":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_review":{"post":{"post":true}}}};
};

/**
 * Updates the featured status of the given review for the business.
 *
 * If featuring the review, unfeatures the currently featured review for the business location and marks the
 * specified review as featured; if unfeaturing, clears the featured flag on the given review.
 *
 * @function
 * @name Wl_Review_ReviewFeatureModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
