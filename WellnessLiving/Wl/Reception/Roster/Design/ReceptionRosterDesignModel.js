/**
 * Api endpoint to get information about Attendance Kiosk settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Reception\Roster\Design\ReceptionRosterDesignApi
 */
function Wl_Reception_Roster_Design_ReceptionRosterDesignModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @typedef {{}} Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_image
     * @property {number} i_height Requested image height.
     * @property {number} i_height_src Original image height.
     * @property {number} i_width Requested image width.
     * @property {number} i_width_src Original image width.
     * @property {number} id_type_src Image type ID. One of {@link Core_Drive_DriveTypeSid} constants.
     *  Will be present only for \Core\Drive\Drive images.
     * @property {boolean} is-resize Whether image was resized to satisfy specified
     *  <tt>i_width</tt> and <tt>i_height</tt>.
     * @property {string} url-thumbnail Url to requested image.
     * @property {string} url-view Url to original image.
     */

    /**
     * Image data for image which will be displayed in attendance web app page.
     * <dl>
     *  <dt>int <var>i_height</var></dt>
     *  <dd>
     *      Requested image height.
     *  </dd>
     *  <dt>int <var>i_height_src</var></dt>
     *  <dd>
     *      Original image height.
     *  </dd>
     *  <dt>int <var>i_width</var></dt>
     *  <dd>
     *      Requested image width.
     *  </dd>
     *  <dt>int <var>i_width_src</var></dt>
     *  <dd>
     *      Original image width.
     *  </dd>
     *  <dt>int <var>id_type_src</var></dt>
     *  <dd>
     *      Image type ID. One of {@link Core_Drive_DriveTypeSid} constants.
     *      Will be present only for \Core\Drive\Drive images.
     *  </dd>
     *  <dt>bool <var>is-resize</var></dt>
     *  <dd>
     *      Whether image was resized to satisfy specified
     *      <var>i_width</var> and <var>i_height</var>.
     *  </dd>
     *  <dt>string <var>url-thumbnail</var></dt>
     *  <dd>
     *      Url to requested image.
     *  </dd>
     *  <dt>string <var>url-view</var></dt>
     *  <dd>
     *     Url to original image.
     *  </dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Reception_Roster_Design_ReceptionRosterDesignModel_a_image}
     */
    this.a_image = [];

    /**
     * Number of seconds of inactivity before automatic redirect.
     *
     * @get result
     * @type {number}
     */
    this.i_attendance_direct_delay = 15;

    /**
     * Number of minutes for the client check-in window after session has started.
     *
     * @get result
     * @type {number}
     */
    this.i_book_open = 0;

    /**
     * Units of time for the look ahead window for attendance app.
     *
     * @get result
     * @type {number}
     */
    this.i_book_quick_app = 0;

    /**
     * Delay in seconds on attendance web app confirmation screen before redirect to login screen.
     *
     * @get result
     * @type {number}
     */
    this.i_confirm_delay = 0;

    /**
     * ID of the action to take when automatically redirecting.
     * One of {@link Wl_Reception_Roster_DirectSid} constants.
     *
     * @get result
     * @type {*}
     */
    this.id_attendance_direct = 1;

    /**
     * Unit of time for the look ahead window for attendance app.
     *
     * @get result
     * @type {number}
     */
    this.id_book_quick_app = 2;

    /**
     * `true` if clients are allowed to check-in unpaid, `false` otherwise.
     *
     * @get result
     * @type {boolean}
     */
    this.is_attend_free = false;

    /**
     * Whether to allow sign-ins to classes in progress.
     *
     * @get result
     * @type {boolean}
     */
    this.is_book_open = false;

    /**
     * `true` if clients are allowed to check-in without booking prior,
     * `false` otherwise.
     *
     * @get result
     * @type {boolean}
     */
    this.is_book_optional = false;

    /**
     * `true` if clients are allowed to sign in before session is started.,
     * `false` otherwise.
     *
     * @get result
     * @type {boolean}
     */
    this.is_book_quick_app = false;

    /**
     * Key of the business.
     *
     * @get get
     * @type {string}
     */
    this.k_business = "";

    /**
     * `true` - show business name on attendance web app; `false` - do not show.
     *
     * @get result
     * @type {boolean}
     */
    this.show_business_name = false;

    /**
     * `true` - show confirm screen on attendance web app;
     * `false` - do not show.
     *
     * @get result
     * @type {boolean}
     */
    this.show_confirm_screen = false;

    /**
     * Name of the business to display in the attendance web app.
     *
     * @get result
     * @type {string}
     */
    this.text_business_name = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_Design_ReceptionRosterDesignModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_Design_ReceptionRosterDesignModel.prototype.config=function()
{
    return {"a_field": {"a_image": {"get": {"result": true}},"i_attendance_direct_delay": {"get": {"result": true}},"i_book_open": {"get": {"result": true}},"i_book_quick_app": {"get": {"result": true}},"i_confirm_delay": {"get": {"result": true}},"id_attendance_direct": {"get": {"result": true}},"id_book_quick_app": {"get": {"result": true}},"is_attend_free": {"get": {"result": true}},"is_book_open": {"get": {"result": true}},"is_book_optional": {"get": {"result": true}},"is_book_quick_app": {"get": {"result": true}},"k_business": {"get": {"get": true}},"show_business_name": {"get": {"result": true}},"show_confirm_screen": {"get": {"result": true}},"text_business_name": {"get": {"result": true}}}};
};