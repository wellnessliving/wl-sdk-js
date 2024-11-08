/**
 * An Edge Cache for business data center.
 */
class Wl_Business_AmazonRegion_BusinessRegionEdge extends WlSdk_EdgeAbstract
{
  /**
   * @inheritDoc
   */
  CID=1565;

  /**
   * @inheritDoc
   */
  _s_key = "i_block";

  /**
   * A list of blocks.
   *
   * Format of this array is discussed in
   * `namespace.Wl/Business/AmazonRegion/doc/business-region-edge-format.en.md`.
   *
   * Only businesses that reside in {@link Wl\Business\AmazonRegion\BusinessRegionEdge::$a_region} are added here.
   *
   * @get result
   * @type {string[]}
   */
  a_block = undefined;

  /**
   * A list of non-default regions mentioned in {@link Wl\Business\AmazonRegion\BusinessRegionEdge::$a_block}.
   *
   * Effectively, this is a list of all regions that have at least one business except default region.
   *
   * Value is one of {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *
   * @get result
   * @type {number[]}
   */
  a_region = undefined;

  /**
   * ID of the data block.
   *
   * In current implementation, this property is not used an is always set to 0.
   *
   * @get get
   * @type {string}
   */
  i_block = "0";

  /**
   * ID of the default region.
   *
   * One of {@link Core_Amazon_Region_AmazonRegionSid} constants.
   *
   * The most popular region is selected as default region, and its data is not stored in
   * {@link Wl\Business\AmazonRegion\BusinessRegionEdge::$a_block}. Thus, all non-existent businesses are deemed as placed in this default
   * region.
   *
   * @get result
   * @type {number}
   */
  id_region = undefined;

  /**
   * @inheritDoc
   */
  config()
  {
    return {"a_field": {"a_block": {"get": {"result": true}},"a_region": {"get": {"result": true}},"i_block": {"get": {"get": true}},"id_region": {"get": {"result": true}}}};
  }
}

/**
 * @function
 * @name Wl_Business_AmazonRegion_BusinessRegionEdge.instanceGet
 * @param {string} i_block ID of the data block. In current implementation, this property is not used an is always set to 0.
 * @returns {Wl_Business_AmazonRegion_BusinessRegionEdge}
 * @see Core_Spa_Model.instanceGet()
 */