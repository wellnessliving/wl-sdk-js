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
     * @property {number} id_service Service ID. One of the {@link Wl_Service_ServiceSid} constants.
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
     *   <dd>Service ID. One of the {@link Wl_Service_ServiceSid} constants.</dd>
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
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_resources_not_shared
     * @property {number} i_index Busy resource index.
     * @property {string} s_title Resource name.
     */
    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_restrict
     * @property {number} i_limit Count of possible visits.
     * @property {number} i_remain Count of remaining visits.
     * @property {boolean} s_date Name of the calendar period.
     */
    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment
     * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_restrict} a_restrict Calendar restrictions. A duration pass will only have elements if the limit has been met. Contains: <dl>
     *   <dt>int <tt>i_limit</tt></dt><dd>Count of possible visits.</dd>
     *   <dt>int <tt>i_remain</tt></dt><dd>Count of remaining visits.</dd>
     *   <dt>bool <tt>s_date</tt></dt><dd>Name of the calendar period.</dd>
     * </dl>
     * @property {boolean} has_visit_past `true` if the promotion was renewed in the past, `false` otherwise.
     * @property {boolean} hide_visit_additional_info `true` if additional info should be excluded, `false otherwise.
     * @property {number} i_book Count of upcoming uses of the promotion.
     * @property {number} i_book_duration Number of minutes used for upcoming visits.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * @property {number} i_limit Limit on the visit count of the promotion.
     * @property {number} i_remain Remaining count of visits.
     * @property {number} i_remain_duration Number of minutes left in this promotion.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * @property {number} i_use Count of held uses in the pass.
     * @property {number} i_use_duration Number of minutes used for past visits by this promotion.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * @property {number} i_visit_past Count of attended sessions before last renew.
     *   `0` if there are no sessions before last renew or promotion is not auto-renew.
     * @property {number} id_program_type ID of the promotion's program type.
     * @property {boolean} is_last_use `true` if the promotion has a usage limit and no remaining visits. `false` otherwise.
     * @property {boolean} is_package `true` if promotion is a package, `false` otherwise.
     * @property {boolean} is_restrict_multiply `true` if there is more than 1 calendar restriction on the pass, `false` otherwise.
     * @property {string} k_login_promotion Login promotion key.
     * @property {string} s_remain_measure The formatted remaining duration on the promotion.
     * @property {boolean} show_remain `true` if there is rollover on a pass with calendar restrictions, `false` otherwise.
     * @property {string} sid_program_type SID of the promotion's program type.
     */
    /**
     * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data
     * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment} a_payment Data for the promotion payment informational card. Each element contains:<dl>
     * <dt>array <tt>a_restrict</tt></dt>
     * <dd>Calendar restrictions. A duration pass will only have elements if the limit has been met. Contains: <dl>
     *   <dt>int <tt>i_limit</tt></dt><dd>Count of possible visits.</dd>
     *   <dt>int <tt>i_remain</tt></dt><dd>Count of remaining visits.</dd>
     *   <dt>bool <tt>s_date</tt></dt><dd>Name of the calendar period.</dd>
     * </dl></dd>
     * <dt>bool <tt>has_visit_past</tt></dt>
     * <dd>`true` if the promotion was renewed in the past, `false` otherwise.</dd>
     * <dt>bool <tt>hide_visit_additional_info</tt></dt>
     * <dd>`true` if additional info should be excluded, `false otherwise.</dd>
     * <dt>int <tt>i_book</tt></dt><dd>Count of upcoming uses of the promotion.</dd>
     * <dt>int <tt>i_book_duration</tt></dt>
     * <dd>
     *   Number of minutes used for upcoming visits.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * </dd>
     * <dt>int <tt>i_limit</tt></dt><dd>Limit on the visit count of the promotion.</dd>
     * <dt>int <tt>i_remain</tt></dt><dd>Remaining count of visits.</dd>
     * <dt>int <tt>i_remain_duration</tt></dt>
     * <dd>
     *   Number of minutes left in this promotion.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * </dd>
     * <dt>int <tt>i_use</tt></dt><dd>Count of held uses in the pass.</dd>
     * <dt>int <tt>i_use_duration</tt></dt>
     * <dd>
     *   Number of minutes used for past visits by this promotion.
     *   Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     * </dd>
     * <dt>int <tt>i_visit_past</tt></dt>
     * <dd>
     *   Count of attended sessions before last renew.
     *   `0` if there are no sessions before last renew or promotion is not auto-renew.
     * </dd>
     * <dt>int <tt>id_program_type</tt></dt><dd>ID of the promotion's program type.</dd>
     * <dt>bool <tt>is_last_use</tt></dt>
     * <dd>`true` if the promotion has a usage limit and no remaining visits. `false` otherwise.</dd>
     * <dt>bool <tt>is_package</tt></dt><dd>`true` if promotion is a package, `false` otherwise.</dd>
     * <dt>bool <tt>is_restrict_multiply</tt></dt>
     * <dd>`true` if there is more than 1 calendar restriction on the pass, `false` otherwise.</dd>
     * <dt>string <tt>k_login_promotion</tt></dt>
     * <dd>Login promotion key.</dd>
     * <dt>string <tt>s_remain_measure</tt></dt><dd>The formatted remaining duration on the promotion.</dd>
     * <dt>bool <tt>show_remain</tt></dt>
     * <dd>`true` if there is rollover on a pass with calendar restrictions, `false` otherwise.</dd>
     * <dt>string <tt>sid_program_type</tt></dt><dd>SID of the promotion's program type.</dd>
     *   </dl>
     * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_resources_not_shared} a_resources_not_shared List of assets reserved individually at the time of booking. Contains:<dl>
     *   <dt>int <tt>i_index</tt></dt><dd>Busy resource index.</dd>
     *   <dt>string <tt>s_title</tt></dt><dd>Resource name.</dd>
     *   </dl>
     * @property {string} dl_renew Promotion renewal date in local time.
     * @property {number} i_visits The total workouts attended.
     * @property {string} s_expire Short format of the promotion expiration date.
     * @property {string} s_payment The payment method used to book (free, unpaid, single buy or promotion name).
     * @property {string} s_renew Short format of the promotion renewal date.
     * @property {string} show_visits Whether to show the client's total workouts attended on the confirmation screen.
     */

    /**
     * Data for the confirmation screen. Contains:
     * <dl>
     *   <dt>array <var>a_payment</var></dt>
     *   <dd>Data for the promotion payment informational card. Each element contains:<dl>
     *     <dt>array <var>a_restrict</var></dt>
     *     <dd>Calendar restrictions. A duration pass will only have elements if the limit has been met. Contains: <dl>
     *       <dt>int <var>i_limit</var></dt><dd>Count of possible visits.</dd>
     *       <dt>int <var>i_remain</var></dt><dd>Count of remaining visits.</dd>
     *       <dt>bool <var>s_date</var></dt><dd>Name of the calendar period.</dd>
     *     </dl></dd>
     *     <dt>bool <var>has_visit_past</var></dt>
     *     <dd>`true` if the promotion was renewed in the past, `false` otherwise.</dd>
     *     <dt>bool <var>hide_visit_additional_info</var></dt>
     *     <dd>`true` if additional info should be excluded, `false otherwise.</dd>
     *     <dt>int <var>i_book</var></dt><dd>Count of upcoming uses of the promotion.</dd>
     *     <dt>int <var>i_book_duration</var></dt>
     *     <dd>
     *       Number of minutes used for upcoming visits.
     *       Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     *     </dd>
     *     <dt>int <var>i_limit</var></dt><dd>Limit on the visit count of the promotion.</dd>
     *     <dt>int <var>i_remain</var></dt><dd>Remaining count of visits.</dd>
     *     <dt>int <var>i_remain_duration</var></dt>
     *     <dd>
     *       Number of minutes left in this promotion.
     *       Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     *     </dd>
     *     <dt>int <var>i_use</var></dt><dd>Count of held uses in the pass.</dd>
     *     <dt>int <var>i_use_duration</var></dt>
     *     <dd>
     *       Number of minutes used for past visits by this promotion.
     *       Has sense only for promotions of program type {@link Wl_WlProgramTypeSid.DURATION}.
     *     </dd>
     *     <dt>int <var>i_visit_past</var></dt>
     *     <dd>
     *       Count of attended sessions before last renew.
     *       `0` if there are no sessions before last renew or promotion is not auto-renew.
     *     </dd>
     *     <dt>int <var>id_program_type</var></dt><dd>ID of the promotion's program type.</dd>
     *     <dt>bool <var>is_last_use</var></dt>
     *     <dd>`true` if the promotion has a usage limit and no remaining visits. `false` otherwise.</dd>
     *     <dt>bool <var>is_package</var></dt><dd>`true` if promotion is a package, `false` otherwise.</dd>
     *     <dt>bool <var>is_restrict_multiply</var></dt>
     *     <dd>`true` if there is more than 1 calendar restriction on the pass, `false` otherwise.</dd>
     *     <dt>string <var>k_login_promotion</var></dt>
     *     <dd>Login promotion key.</dd>
     *     <dt>string <var>s_remain_measure</var></dt><dd>The formatted remaining duration on the promotion.</dd>
     *     <dt>bool <var>show_remain</var></dt>
     *     <dd>`true` if there is rollover on a pass with calendar restrictions, `false` otherwise.</dd>
     *     <dt>string <var>sid_program_type</var></dt><dd>SID of the promotion's program type.</dd>
     *   </dl></dd>
     *   <dt>array <var>a_resources_not_shared</var></dt>
     *   <dd>List of assets reserved individually at the time of booking. Contains:<dl>
     *       <dt>int <var>i_index</var></dt><dd>Busy resource index.</dd>
     *       <dt>string <var>s_title</var></dt><dd>Resource name.</dd>
     *   </dl></dd>
     *   <dt>string <var>dl_renew</var></dt>
     *   <dd>Promotion renewal date in local time.</dd>
     *   <dt>int <var>i_visits</var></dt>
     *   <dd>The total workouts attended.</dd>
     *   <dt>string <var>s_expire</var></dt>
     *   <dd>Short format of the promotion expiration date.</dd>
     *   <dt>string <var>s_payment</var></dt>
     *   <dd>The payment method used to book (free, unpaid, single buy or promotion name).</dd>
     *   <dt>string <var>s_renew</var></dt>
     *   <dd>Short format of the promotion renewal date.</dd>
     *   <dt>string <var>show_visits</var></dt>
     *   <dd>Whether to show the client's total workouts attended on the confirmation screen.</dd>
     * </dl>
     *
     * @post result
     * @type {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data}
     */
    this.a_confirmation_data = [];

    /**
     * All types of services that appear in the schedule.
     * Keys are constants from {@link Wl_Service_ServiceSid}. Values are the HTML classes associated with that service.
     *
     * @get result
     * @type {{}}
     */
    this.a_schedule_class_all = undefined;

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
     * Read more {@link Wl\Reception\Application\MainController::$s_secret}.
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
    return {"a_field": {"a_class": {"get": {"result": true}},"a_confirmation_data": {"post": {"result": true}},"a_schedule_class_all": {"get": {"result": true}},"dtu_date": {"post": {"post": true}},"html_confirmation": {"post": {"result": true}},"html_schedule": {"get": {"result": true}},"k_appointment": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"post": {"post": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"k_visit": {"post": {"result": true}},"s_secret": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};