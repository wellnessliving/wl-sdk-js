/**
 * Book a class for a client and mark as attended using the Attendance Kiosk.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_AttendanceListAttendModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * The UTC datetime for the class in MySQL format.
     *
     * @post get
     * @type {string}
     */
    this.dtu_date = "";

    /**
     * The business key.
     *
     * @post get
     * @type {string}
     */
    this.k_business = "";

    /**
     * The class period key.
     *
     * @post get
     * @type {string}
     */
    this.k_class_period = "";

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

    /**
     * The status message displayed on a successful check-in.
     *
     * @post result
     * @type {string}
     */
    this.text_message = undefined;

    /**
     * The client's user key.
     *
     * @post get
     * @type {string}
     */
    this.uid = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceListAttendModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceListAttendModel.prototype.config=function()
{
    return {"a_field": {"dtu_date": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_class_period": {"post": {"get": true}},"k_visit": {"post": {"result": true}},"s_secret": {"post": {"get": true}},"text_message": {"post": {"result": true}},"uid": {"post": {"get": true}}}};
};