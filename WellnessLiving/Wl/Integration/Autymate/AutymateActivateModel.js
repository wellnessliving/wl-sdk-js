/**
 * An endpoint that checks or changes the status of Autymate enrollments.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Autymate_AutymateActivateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The mode of the request.
   *
   * One of {@link Wl_Integration_Autymate_AutymateAccessModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_mode = 1;

  /**
   * The new status of the enrollment. If `0`, the current status is returned.
   *
   * One of {@link Wl_Integration_Autymate_AutymateStatusSid} constants.
   *
   * @get get,result
   * @type {number}
   */
  this.id_status = 0;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The randomly generated 32 character string used to authenticate Autymate requests for the business.
   *
   * @get get
   * @type {string}
   */
  this.s_guid = "";

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Autymate_AutymateActivateModel);

/**
 * @inheritDoc
 */
Wl_Integration_Autymate_AutymateActivateModel.prototype.config=function()
{
  return {"a_field": {"id_mode": {"get": {"get": true}},"id_status": {"get": {"get": true,"result": true}},"k_business": {"get": {"get": true}},"s_guid": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};