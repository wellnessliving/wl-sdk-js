/**
 * An API used to get a list of active businesses.
 *
 * Is not available without user authorization.
 * Requires authorized user to have privilege `rs.business.view`.
 *
 * This model is generated automatically based on API.
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
   * `true` to return only wellnesliving paid customers.
   * `false` to return prospects.
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
  return {"a_field": {"a_business_keys": {"get": {"result": true}},"is_prospects": {"get": {"get": true}},"is_published": {"get": {"get": true}}}};
};