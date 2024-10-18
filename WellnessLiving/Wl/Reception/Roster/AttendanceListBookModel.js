/**
 * Book a class for a client using the Attendance Kiosk.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_AttendanceListBookModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @inheritDoc
     */
    this._s_key = "dtu_date,k_business,k_class_period,s_secret,uid";

    /**
     * The UTC datetime for the class in MySQL format.
     *
     * @post post
     * @type {string}
     */
    this.dtu_date = "";

    /**
     * `true` if the client is on the wait list for the class, `false` if they are on the class list.
     *
     * @post result
     * @type {boolean}
     */
    this.is_wait = undefined;

    /**
     * The business key.
     *
     * @post post
     * @type {string}
     */
    this.k_business = "";

    /**
     * The class period key.
     *
     * @post post
     * @type {string}
     */
    this.k_class_period = "";

    /**
     * The secret for authenticating the attendance kiosk.
     *
     * @post post
     * @type {string}
     */
    this.s_secret = "";

    /**
     * The status message displayed on a successful booking.
     * Describes whether client was put in class list or waitlist.
     *
     * @post result
     * @type {string}
     */
    this.text_message = undefined;

    /**
     * The client's user key.
     *
     * @post post
     * @type {string}
     */
    this.uid = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceListBookModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceListBookModel.prototype.config=function()
{
    return {"a_field": {"dtu_date": {"post": {"post": true}},"is_wait": {"post": {"result": true}},"k_business": {"post": {"post": true}},"k_class_period": {"post": {"post": true}},"s_secret": {"post": {"post": true}},"text_message": {"post": {"result": true}},"uid": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Reception_Roster_AttendanceListBookModel.instanceGet
 * @param {string} dtu_date The UTC datetime for the class in MySQL format.
 * @param {string} k_business The business key.
 * @param {string} k_class_period The class period key.
 * @param {string} s_secret The secret for authenticating the attendance kiosk.
 * @param {string} uid The client's user key.
 * @returns {Wl_Reception_Roster_AttendanceListBookModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */