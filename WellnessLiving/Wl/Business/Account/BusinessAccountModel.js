/**
 * Generates list of active business keys for the same region as the requesting user (proper permissions required).
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_BusinessAccountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of business keys.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business_keys = undefined;

  /**
   * `true` returns WellnessLiving customers.
   *
   * `false` returns prospects.
   *
   * Test and churned businesses are never returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_prospects = false;

  /**
   * Specifies if only businesses having published locations should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_published = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_BusinessAccountModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_BusinessAccountModel.prototype.config=function()
{
  return {"a_field":{"a_business_keys":{"get":{"result":true}},"is_prospects":{"get":{"get":true}},"is_published":{"get":{"get":true}}}};
};

/**
 * Generates list of active business keys for the same region as the requesting user (proper permissions required).
 *
 * Used internally by WellnessLiving operations tools to enumerate all customer businesses in the current region.
 * Returns only active, non-test businesses; set `is_prospects` to also include prospect businesses that have not
 * yet churned. Requires the `rs.business.view` privilege.
 *
 * @function
 * @name Wl_Business_Account_BusinessAccountModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
