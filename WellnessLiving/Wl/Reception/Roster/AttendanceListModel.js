/**
 * Clients attendance list for attendance web app.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_AttendanceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of clients that registered on class each element contains information:
   * <ul>
   *   <li>string <var>first_name</var> Client's first name.
   *   </li>
   *   <li>string <var>gender</var> Gender of client. String representation of constants {@link \Wl\Gender\GenderSid}.
   *   </li>
   *   <li>string <var>last_name</var> Client's last name.
   *   </li>
   *   <li>string <var>mail</var> Mail of client.
   *   </li>
   *   <li>string <var>name</var> Full name. Combination of the first and last names.
   *   </li>
   *   <li>bool <var>pass_prospect</var> Whether client used Pass Promote to visit class.
   *   </li>
   *   <li>string <var>phone</var> Phone number of client.
   *   </li>
   *   <li>int <var>uid</var> User identifier.
   *   </li>
   *   <li>string <var>visit</var> State of visit. String representation of constants {@link \Wl\Visit\VisitSid}.
   *   </li>
   * </ul>
   *
   * @get result
   * @type {{}}
   */
  this.clients = undefined;

  /**
   * Date and time of the currently viewed attendance list.
   *
   * @get get
   * @type {string}
   */
  this.dtl_date = undefined;

  /**
   * Whether only clients from <tt>Classpass</tt> should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_classpass_only = undefined;

  /**
   * Class period key of the attendance list.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceListModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceListModel.prototype.config=function()
{
  return {"a_field": {"clients": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"is_classpass_only": {"get": {"get": true}},"k_class_period": {"get": {"get": true}}}};
};