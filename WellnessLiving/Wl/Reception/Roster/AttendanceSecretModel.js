/**
 * Api endpoint to get the secret string for Attendance Kiosk requests.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_AttendanceSecretModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Secret string.
   *
   * @get result
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceSecretModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceSecretModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"s_secret": {"get": {"result": true}}}};
};