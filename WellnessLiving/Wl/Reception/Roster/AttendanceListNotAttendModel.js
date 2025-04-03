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
    return {"a_field": {"k_business": {"post": {"post": true}},"k_visit": {"post": {"post": true}},"s_secret": {"post": {"post": true}}}};
};