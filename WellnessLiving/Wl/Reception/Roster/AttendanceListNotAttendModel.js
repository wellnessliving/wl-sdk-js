/**
 * Marks the visit as not attended using the Attendance Kiosk.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_AttendanceListNotAttendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The visit key.
   *
   * @post result
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * The secret for authenticating the attendance kiosk.
   *
   * @post get
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceListNotAttendModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceListNotAttendModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"k_visit": {"post": {"result": true}},"s_secret": {"post": {"get": true}}}};
};