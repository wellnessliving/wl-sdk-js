/**
 * Marks the visit as not attended via the Attendance Kiosk.
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
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The visit key.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The secret for authenticating the attendance kiosk.
   *
   * @post post
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
  return {"a_field":{"k_business":{"post":{"post":true}},"k_visit":{"post":{"post":true}},"s_secret":{"post":{"post":true}}}};
};

/**
 * Marks the visit as not attended via the Attendance Kiosk.
 *
 * Validates the Attendance Kiosk secret and updates the specified visit record to reflect that the client did
 * not attend the session.
 *
 * @function
 * @name Wl_Reception_Roster_AttendanceListNotAttendModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
