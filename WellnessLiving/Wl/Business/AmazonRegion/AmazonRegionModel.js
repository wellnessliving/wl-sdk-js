/**
 * Returns the Amazon region ID for each of the requested business keys.
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
  this.a_business = undefined;

  /**
   * List of region IDs for {@link Wl_Business_AmazonRegion_AmazonRegionModel.a_business}.
   *
   * Key - is business key.
   * Value - is region ID. One of {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *   `0` if this business is from an unknown region.
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
  return {"a_field":{"a_business":{"get":{"get":true}},"a_business_region":{"get":{"result":true}}}};
};

/**
 * Returns the Amazon region ID for each of the requested business keys.
 *
 * Used to determine which data center stores the data for a given set of businesses. Knowing the region
 * is required before routing API calls across data centers. Returns `0` for businesses whose region
 * is not set. All requested business keys must exist.
 *
 * @function
 * @name Wl_Business_AmazonRegion_AmazonRegionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
