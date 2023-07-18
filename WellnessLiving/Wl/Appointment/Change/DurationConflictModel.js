/**
 * An endpoint that gets information related to appointment conflicts.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Change_DurationConflictModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See for {@link RsAppointmentEditConflict::checkAvailability()} details.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_conflict = undefined;

  /**
   * A list of user keys to use for booking appointments.
   * Empty values signify walk-ins.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * If `true`, staff members can book the appointment despite the conflict. Otherwise, this will be `false` if
   * staff members can't book the appointment due to the conflict.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_anyway = undefined;

  /**
   * The appointment duration.
   * This must be specified for asset bookings only.
   *
   * @get get
   * @type {number}
   */
  this.i_duration_new = 0;

  /**
   * The staff book flow ID. One of the {@link Wl_Appointment_Change_ServiceStaffBookFlowSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_staff_book_flow = undefined;

  /**
   * This will be `true` if the client is walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The appointment primary key.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The business key.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The service primary key.
   *
   * @get result
   * @type {string}
   */
  this.k_service = undefined;

  /**
   * The key of the selected staff member.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * The ID form.
   *
   * @get result
   * @type {string}
   */
  this.s_form_id = undefined;

  /**
   * The user to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Change_DurationConflictModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Change_DurationConflictModel.prototype.config=function()
{
  return {"a_field": {"a_conflict": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"can_book_anyway": {"get": {"result": true}},"i_duration_new": {"get": {"get": true}},"id_staff_book_flow": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"result": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_service": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"s_form_id": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};