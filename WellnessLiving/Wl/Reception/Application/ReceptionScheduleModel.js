/**
 * Shows schedule for check in process.
 *
 * Returns html code as we have ready functionality for this and want to save time avoiding re-building it into API and
 * javascript generation.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Application_ReceptionScheduleModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared_a_staff_all
     * @property {string} s_name_full Full name of the staff member.
     */
    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared
     * @property {string} k_resource Resource key.
     * @property {string} s_title Resource title.
     */
    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class
     * @property {Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared} a_resources_shared List of shared resources. Contains:<dl>
     *   <dt>string <tt>k_resource</tt></dt><dd>Resource key.</dd>
     *   <dt>string <tt>s_title</tt></dt><dd>Resource title.</dd>
     *   </dl>
     * @property {Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared_a_staff_all} a_staff_all List of staff members instructing. Contains:<dl>
     *   <dt>string <tt>s_name_full</tt></dt><dd>Full name of the staff member.</dd>
     *   </dl>
     * @property {string} dtu_date Date of the session.
     * @property {string} html_class_js Javascript classes to display icon depending on type of service.
     * @property {number} i_duration Duration of the session in minutes.
     * @property {number} id_service service ID.
     * @property {boolean} is_auto `true` if the session can be checked in automatically, `false` otherwise.
     * @property {?string} k_appointment Appointment key. `null` if not an appointment.
     * @property {?string} k_class_period Class period key. `null` if not a class or event.
     * @property {?string} k_visit Visit key if the session has been checked in, `null` otherwise.
     * @property {string} s_class Name of the service.
     * @property {string} s_duration Duration of the session, formatted by business configuration.
     * @property {string} s_time Time the session takes place.
     */

    /**
     * List of sessions to display. Contains:
     * <dl>
     *   <dt>array <var>a_resources_shared</var></dt>
     *   <dd>List of shared resources. Contains:<dl>
     *       <dt>string <var>k_resource</var></dt><dd>Resource key.</dd>
     *       <dt>string <var>s_title</var></dt><dd>Resource title.</dd>
     *   </dl></dd>
     *   <dt>array <var>a_staff_all</var></dt>
     *   <dd>List of staff members instructing. Contains:<dl>
     *       <dt>string <var>s_name_full</var></dt><dd>Full name of the staff member.</dd>
     *   </dl></dd>
     *   <dt>string <var>dtu_date</var></dt>
     *   <dd>Date of the session.</dd>
     *   <dt>string <var>html_class_js</var></dt>
     *   <dd>Javascript classes to display icon depending on type of service.</dd>
     *   <dt>int <var>i_duration</var></dt>
     *   <dd>Duration of the session in minutes.</dd>
     *   <dt>int <var>id_service</var></dt>
     *   <dd>service ID.</dd>
     *   <dt>bool <var>is_auto</var></dt>
     *   <dd>`true` if the session can be checked in automatically, `false` otherwise.</dd>
     *   <dt>string|null <var>k_appointment</var></dt>
     *   <dd>Appointment key. `null` if not an appointment.</dd>
     *   <dt>string|null <var>k_class_period</var></dt>
     *   <dd>Class period key. `null` if not a class or event.</dd>
     *   <dt>string|null <var>k_visit</var></dt>
     *   <dd>Visit key if the session has been checked in, `null` otherwise.</dd>
     *   <dt>string <var>s_class</var></dt>
     *   <dd>Name of the service.</dd>
     *   <dt>string <var>s_duration</var></dt>
     *   <dd>Duration of the session, formatted by business configuration.</dd>
     *   <dt>string <var>s_time</var></dt>
     *   <dd>Time the session takes place.</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Reception_Application_ReceptionScheduleModel_a_class}
     */
    this.a_class = [];

    /**
     * Date and time in UTC in MySQL format of the visit.
     *
     * @post post
     * @type {string}
     */
    this.dtu_date = "";

    /**
     * Confirmation template to be shown in Self Check In web application for selected user.
     *
     * @post result
     * @type {string}
     */
    this.html_confirmation = "";

    /**
     * Schedule to be shown in Self Check In web application for selected user.
     *
     * @get result
     * @type {string}
     */
    this.html_schedule = "";

    /**
     * Key of the appointment to check in.
     *
     * `null` if this is class visit or gym visit.
     *
     * @post post
     * @type {?string}
     */
    this.k_appointment = null;

    /**
     * Key of the business, where Check In application is started.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.k_business = "";

    /**
     * Key of the class schedule to check in.
     *
     * `null` if this is appointment visit or gym visit.
     *
     * @post post
     * @type {?string}
     */
    this.k_class_period = null;

    /**
     * Key of the location, where Check In application is started.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.k_location = "";

    /**
     * Key of the visit, which was added or checked in.
     *
     * @post result
     * @type {string}
     */
    this.k_visit = "";

    /**
     * Key of the Check In application.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.s_secret = "";

    /**
     * Key of the user to show schedule for.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.uid = "";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Application_ReceptionScheduleModel);

/**
 * @inheritDoc
 */
Wl_Reception_Application_ReceptionScheduleModel.prototype.config=function()
{
    return {"a_field": {"a_class": {"get": {"result": true}},"dtu_date": {"post": {"post": true}},"html_confirmation": {"post": {"result": true}},"html_schedule": {"get": {"result": true}},"k_appointment": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"post": {"post": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"k_visit": {"post": {"result": true}},"s_secret": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};