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
   * @typedef {{}} Wl_Reception_Roster_AttendanceListModel_a_client_a_asset
   * @property {string} k_resource Resource key.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.
   * @property {string} text_title Title of the asset.
   */
  /**
   * @typedef {{}} Wl_Reception_Roster_AttendanceListModel_a_client
   * @property {Wl_Reception_Roster_AttendanceListModel_a_client_a_asset} a_asset A list of the assets.<dl>
   * <dt>string <tt>k_resource</tt></dt><dd>Resource key.</dd>
   * <dt>string <tt>text_name</tt></dt>
   * <dd>Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.</dd>
   * <dt>string <tt>text_title</tt></dt><dd>Title of the asset.</dd>
   *   </dl>
   * @property {string} sid_gender Gender SID. On of the {@link Wl_Gender_GenderSid} constants.
   * @property {string} text_first_name Client's first name.
   * @property {string} text_last_name Client's last name.
   * @property {string} text_mail Mail of client.
   * @property {string} text_name Full name. Combination of the first and last names.
   * @property {boolean} text_pass_prospect Whether client used Pass Promote to visit class.
   * @property {string} text_phone Phone number of client.
   * @property {string} text_visit State of visit. String representation of constants {@link Wl_Visit_VisitSid}.
   * @property {number} uid User identifier.
   */

  /**
   * List of clients that registered on class each element contains information:
   * <dl>
   *   <dt>array <var>a_asset</var></dt><dd>A list of the assets.<dl>
   *     <dt>string <var>k_resource</var></dt><dd>Resource key.</dd>
   *     <dt>string <var>text_name</var></dt>
   *     <dd>Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by '#'.</dd>
   *     <dt>string <var>text_title</var></dt><dd>Title of the asset.</dd>
   *   </dl>
   *   </dd>
   *   <dt>string <var>sid_gender</var></dt><dd>Gender SID. On of the {@link Wl_Gender_GenderSid} constants.</dd>
   *   <dt>string <var>text_first_name</var></dt><dd>Client's first name.</dd>
   *   <dt>string <var>text_last_name</var></dt><dd>Client's last name.</dd>
   *   <dt>string <var>text_mail</var></dt><dd>Mail of client.</dd>
   *   <dt>string <var>text_name</var></dt><dd>Full name. Combination of the first and last names.</dd>
   *   <dt>bool <var>text_pass_prospect</var></dt><dd>Whether client used Pass Promote to visit class.</dd>
   *   <dt>string <var>text_phone</var></dt><dd>Phone number of client.</dd>
   *   <dt>string <var>text_visit</var></dt><dd>State of visit. String representation of constants {@link Wl_Visit_VisitSid}.</dd>
   *   <dt>int <var>uid</var></dt><dd>User identifier.</dd>
   * </dl>
   *
   * `null` if not defined yet.
   *
   * @get result
   * @type {?Wl_Reception_Roster_AttendanceListModel_a_client[]}
   */
  this.a_client = null;

  /**
   * Date and time of the currently viewed attendance list.
   *
   * `null` if not defined yet.
   *
   * @get get
   * @type {?string}
   */
  this.dtl_date = null;

  /**
   * Whether only clients from `Classpass` should be returned.
   *
   * `null` if not defined yet.
   *
   * @get get
   * @type {boolean}
   */
  this.is_classpass_only = false;

  /**
   * Class period key of the attendance list.
   *
   * `null` if not defined yet.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * Secret key for access to attendance list.
   *
   * @get get
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_AttendanceListModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_AttendanceListModel.prototype.config=function()
{
  return {"a_field": {"a_client": {"get": {"result": true}},"dtl_date": {"get": {"get": true}},"is_classpass_only": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"s_secret": {"get": {"get": true}}}};
};