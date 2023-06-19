/**
 * Information of conflicts when change appointment duration.
 *
 * This model is generated automatically based on API.
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
   * List of user keys to book appointments - primary keys in {@link \PassportLoginSql}.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * <tt>true</tt> if staff can book appointment when conflict. <tt>false</tt> in other cases.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_anyway = undefined;

  /**
   * Appointment duration.
   * Must be specified for asset booking only.
   *
   * @get get
   * @type {number}
   */
  this.i_duration_new = 0;

  /**
   * Staff book flow id, one of {@link Wl_Appointment_Change_ServiceStaffBookFlowSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_staff_book_flow = undefined;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Appointment primary key in {@link \RsAppointmentSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Key of the business.
   *
   * @get result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Service primary key in {@link \RsServiceSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_service = undefined;

  /**
   * Selected staff key.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * ID form.
   *
   * @get result
   * @type {string}
   */
  this.s_form_id = undefined;

  /**
   * User to get information for.
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