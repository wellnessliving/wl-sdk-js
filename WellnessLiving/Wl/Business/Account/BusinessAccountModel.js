/**
 * An endpoint used to get a list of active businesses.
 *
 * This endpoint isn't available without user authorization. It requires the authorized user to have the
 * `rs.business.view` privilege.
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
  this.a_business_keys = [];

  /**
   * If `true`, this will only return paying WellnessLiving customers. Otherwise, this will be `false` to return only
   * prospects.
   *
   * Note that test and churned businesses are never returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_prospects = false;

  /**
   * Determines if only businesses with published locations should be returned.
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
  return {"a_field": {"a_business_keys": {"get": {"result": true}},"is_prospects": {"get": {"get": true}},"is_published": {"get": {"get": true}}}};
};