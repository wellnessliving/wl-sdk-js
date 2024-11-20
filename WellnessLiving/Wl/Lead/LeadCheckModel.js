/**
 * Checks if user with specified email already belongs to specified business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Lead\LeadCheckApi
 */
function Wl_Lead_LeadCheckModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` if user with specified email is lead of a specified business, `false` - otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_lead = false;

  /**
   * `true` if user with specified email is a member of a specified business, `false` - otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_member = false;

  /**
   * The key of business to which the new user must be captured.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User email.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Lead_LeadCheckModel);

/**
 * @inheritDoc
 */
Wl_Lead_LeadCheckModel.prototype.config=function()
{
  return {"a_field": {"is_lead": {"post": {"result": true}},"is_member": {"post": {"result": true}},"k_business": {"post": {"post": true}},"s_mail": {"post": {"post": true}}}};
};