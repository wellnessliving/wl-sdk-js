/**
 * Appointment booking conflicts data for multiple users.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Appointment\Book\Conflict\Conflict56Api
 */
function Wl_Appointment_Book_Conflict_Conflict56Model()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @typedef {{}} Wl_Appointment_Book_Conflict_Conflict56Model_a_conflict
     * @property {string[]} [a_resource] Titles of assets that cause the conflict. Not empty only if the conflict is caused by assets.
     * @property {string} [dt_date_global] Date and time of the conflict in UTC, in MySQL format.
     * @property {string} [dt_date_local] Date and time of the conflict in the location timezone, in MySQL format.
     * @property {string} [html_title] Message describing a client age restriction conflict, already HTML-escaped.
     * @property {boolean} [is_age_conflict] `true` if the conflict is caused by a client age restriction.
     * @property {boolean} [is_holiday] `true` if the conflict is caused by a holiday, `false` for another reason.
     * @property {boolean} [is_staff_conflict] `true` if the conflict is caused by the staff member's working hours, `false` for another reason.
     * @property {string} [k_staff] Staff member key, kept only for applications still using the deprecated legacy staff identifier.
     * @property {string} [text_staff] Name of the staff member who conducts the appointment.
     * @property {string} [uid] User ID of the client whose age restriction caused the conflict.
     * @property {string} [uid_staff] Staff member user ID resolved for the conflict entry.
     */

    /**
     * List of appointment booking conflicts.
     *
     *
     *
     * @get result
     * @type {Wl_Appointment_Book_Conflict_Conflict56Model_a_conflict[]}
     */
    this.a_conflict = [];

    /**
     * List of add-ons.
     *
     * @get get
     * @type {string[]}
     */
    this.a_product = [];

    /**
     * @typedef {{}} Wl_Appointment_Book_Conflict_Conflict56Model_a_repeat
     * @property {number[]} [a_week] Days of week when the appointment repeats. One of {@link ADateWeekSid} constants.
     *    Empty if the appointment does not repeat weekly.
     * @property {string} [dl_end] Date when the repeat cycle stops. Empty if the repeat cycle does not stop at a certain date.
     * @property {number} [i_occurrence] Number of occurrences after which the repeat cycle stops. Empty if the repeat cycle does
     *    not stop after a certain number of occurrences.
     * @property {number} i_period Frequency of the repeat cycle.
     * @property {number} id_period Measurement unit of `i_period`. One of {@link ADurationSid} constants.
     * @property {boolean} [is_month] `true` if the appointment repeats monthly on the same date, `false` if it repeats
     *    monthly on the same day of the week, `null` if the appointment does not repeat monthly.
     */

    /**
     * Data of appointment repeat.
     * See key <tt>a_repeat</tt> of {@link Wl_Appointment_Book_Finish_FinishModel.a_book_data} for details.
     *
     * <tt>null</tt> if repeat is not required. Empty array if the appointment is not recurring, otherwise:
     *
     * @get get
     * @type {?Wl_Appointment_Book_Conflict_Conflict56Model_a_repeat}
     */
    this.a_repeat = null;

    /**
     * @typedef {{}} Wl_Appointment_Book_Conflict_Conflict56Model_a_resource
     * @property {number} [i_index] Asset index in layout.
     * @property {string} k_resource Asset key.
     */

    /**
     * List of assets.
     *
     * May be specified for service booking only.
     *
     * @get get
     * @type {Wl_Appointment_Book_Conflict_Conflict56Model_a_resource[]}
     */
    this.a_resource = [];

    /**
     * List of user keys to book appointments.
     * There may be empty values in this list, which means that this is a walk-in.
     *
     * @get get
     * @post get
     * @type {string[]}
     */
    this.a_uid = [];

    /**
     * New weekdays for a weekly forward reschedule, constants of {@link ADateWeekSid}.
     * Empty to keep the current weekdays.
     *
     * @get get
     * @type {number[]}
     */
    this.a_week = [];

    /**
     * First local date of the bounded reschedule range, in MySQL format.
     * Required for {@link Wl_Appointment_Edit_EditRangeSid.RANGE}; empty otherwise.
     *
     * @get get
     * @type {string}
     */
    this.dl_edit_from = "";

    /**
     * Last local date of the bounded reschedule range, in MySQL format.
     * Required for {@link Wl_Appointment_Edit_EditRangeSid.RANGE}; empty otherwise.
     *
     * @get get
     * @type {string}
     */
    this.dl_edit_to = "";

    /**
     * Date/time of appointment. In location timezone.
     *
     * @get get
     * @type {string}
     */
    this.dt_date = "";

    /**
     * Appointment duration.
     * Must be specified for asset booking only.
     *
     * @get get
     * @type {number}
     */
    this.i_duration = 0;

    /**
     * Scope of a staff reschedule of a recurring appointment.
     *
     * Omitted or {@link Wl_Appointment_Edit_EditRangeSid.ONCE} keeps the existing single-session behavior.
     * A wider scope keeps each session's calendar date and checks its new time in the destination location.
     * Each returned `dt_date_global` is the key of that session's conflict solution on the write.
     *
     * @get get
     * @see Wl_Appointment_Edit_EditRangeSid
     * @type {number}
     */
    this.id_edit_range = 1;

    /**
     * If `true`, the client is a walk-in. Otherwise, this will be `false`.
     *
     * @get get
     * @post get
     * @type {boolean}
     */
    this.is_walk_in = false;

    /**
     * Appointment key. Empty for a new appointment.
     *
     * @get get
     * @type {string}
     */
    this.k_appointment = "0";

    /**
     * Location to show available appointment booking schedule.
     *
     * @get get,result
     * @post get
     * @type {string}
     */
    this.k_location = "0";

    /**
     * Asset key. Empty for service booking.
     *
     * @get get
     * @type {string}
     */
    this.k_resource = "0";

    /**
     * Service key. Empty for asset booking.
     *
     * @get get
     * @type {string}
     */
    this.k_service = "0";

    /**
     * Staff member key.
     *
     * @deprecated Use {@link Wl_Appointment_Book_Conflict_Conflict56Model.uid_staff}.
     * @get get
     * @type {string}
     */
    this.k_staff = "0";

    /**
     * The user key.
     *
     * This field is used if the client books for himself or for the relative.
     *
     * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
     *
     * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.uid = "0";

    /**
     * Staff member user key.
     *
     * @get get
     * @type {string}
     */
    this.uid_staff = "0";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Conflict_Conflict56Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Conflict_Conflict56Model.prototype.config=function()
{
    return {"a_field": {"a_conflict": {"get": {"result": true}},"a_product": {"get": {"get": true}},"a_repeat": {"get": {"get": true}},"a_resource": {"get": {"get": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_week": {"get": {"get": true}},"dl_edit_from": {"get": {"get": true}},"dl_edit_to": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"id_edit_range": {"get": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"uid_staff": {"get": {"get": true}}}};
};