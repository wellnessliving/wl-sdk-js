/**
 * An endpoint for retrieve region ID for businesses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AmazonRegion_AmazonRegionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of business key.
   *
   * @get get
   * @type {string[]}
   */
  this.a_business = [];

  /**
   * List of region IDs for {@link Wl_Business_AmazonRegion_AmazonRegionModel.a_business}.
   *
   * Key - is business key.
   * Value - is region ID. One of {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *   `0` if this business is form an unknown region.
   *
   * @get result
   * @type {number[]}
   */
  this.a_business_region = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AmazonRegion_AmazonRegionModel);

/**
 * @inheritDoc
 */
Wl_Business_AmazonRegion_AmazonRegionModel.prototype.config=function()
{
  return {"a_field": {"a_business": {"get": {"get": true}},"a_business_region": {"get": {"result": true}}}};
};