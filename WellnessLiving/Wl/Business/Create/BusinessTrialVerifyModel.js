/**
 * Business trial verification API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Create_BusinessTrialVerifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The key of the business to be verified.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The email address of the location.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The phone number of the business, staff and location.
   *
   * @post post
   * @type {string}
   */
  this.text_phone = "";

  /**
   * The key of the user who verified the business.
   *
   * @put post
   * @type {string}
   */
  this.uid_verified = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Create_BusinessTrialVerifyModel);

/**
 * @inheritDoc
 */
Wl_Business_Create_BusinessTrialVerifyModel.prototype.config=function()
{
  return {"a_field": {"id_claim_status": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"text_mail": {"post": {"post": true}},"text_phone": {"post": {"post": true}},"uid_verified": {"put": {"post": true}}}};
};