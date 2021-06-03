/**
 * Contains API methods handlers for working with business integrations.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Integration_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Integration_Model_businesses
   * @property {number} business_id Business key.
   * @property {boolean} status Active or inactive integration.
   */

  /**
   * A list of businesses.
   * <dl>
   *   <dt>
   *     int <var>business_id</var>
   *   </dt>
   *   <dd>
   *     Business key.
   *   </dd>
   *   <dt>
   *     bool <var>status</var>
   *   </dt>
   *   <dd>
   *     Active or inactive integration.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Integration_Model_businesses}
   */
  this.businesses = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Integration_Model);

/**
 * @inheritDoc
 */
Wl_Business_Integration_Model.prototype.config=function()
{
  return {"a_field": {"businesses": {"get": {"result": true}}}};
};