/**
 * An endpoint that adds a review reply.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Review_ReviewFeatureModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If is review is featured.
   *
   * @post post
   * @type {boolean}
   */
  this.is_featured = true;

  /**
   * Key of the business.
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
  return {"a_field": {"is_featured": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_review": {"post": {"post": true}}}};
};