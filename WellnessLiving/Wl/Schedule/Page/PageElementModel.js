/**
 * Information about one element of schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Page_PageElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit";

  /**
   * @typedef {{}} Wl_Schedule_Page_PageElementModel_a_staff
   * @property {string} k_staff Staff key. Primary key in {@link RsStaffSql}.
   * @property {string} s_family Staff surname.
   * @property {string} s_name Staff name.
   */

  /**
   * List if staff. Every element has next keys:
   * <dl>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key. Primary key in {@link RsStaffSql}.
   *   </dd>
   *   <dt>
   *     string <var>s_family</var>
   *   </dt>
   *   <dd>
   *     Staff surname.
   *   </dd>
   *   <dt>
   *     string <var>s_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_PageElementModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Date to which book can be cancelled without penalty. In GMT.
   *
   * @get result
   * @type {string}
   */
  this.dt_cancel = undefined;

  /**
   * Date in GMT.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_global = undefined;

  /**
   * Date in location timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Special instructions for service.
   *
   * @get result
   * @type {string}
   */
  this.html_special = undefined;

  /**
   * Duration (in minutes).
   *
   * @get result
   * @type {*}
   */
  this.i_duration = undefined;

  /**
   * Estimated place of reservation on the waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = undefined;

  /**
   * Type of note. One of {@link \Wl\Visit\Note\Sid\NoteSid} constants. <tt>null</tt> if notes not allowed.
   *
   * @get result
   * @type {number}
   */
  this.id_note = undefined;

  /**
   * Virtual provider ID.
   *
   * <tt>null</tt> for not virtual classes.
   *
   * @get result
   * @var {?number}
   */
  this.id_virtual_provider = undefined;

  /**
   * ID of visit state. One of {@link \Wl\Visit\VisitSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_visit = undefined;

  /**
   * <tt>true</tt> - user can check-in to this session; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_checkin = undefined;

  /**
   * <tt>true</tt> - if client can cancel session; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_enable_client_cancel = undefined;

  /**
   * <tt>true</tt> - this element belongs to whole event; <tt>false</tt> - belongs to class or to session event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * <tt>true</tt> - service is virtual; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual = undefined;

  /**
   * Appointment ID. Primary key in {@link RsAppointmentSql} table.
   *
   * @get result
   * @type {*}
   */
  this.k_appointment = undefined;

  /**
   * Key of the business to which the visit belongs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Session ID. Primary key in {@link RsClassPeriodSql} table.
   *
   * @get result
   * @type {*}
   */
  this.k_class_period = undefined;

  /**
   * Location key. Primary key in {@link RsLocationSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Book/visit ID. Primary key in table {@link RsVisitSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * Name of class or service.
   *
   * @get result
   * @type {*}
   */
  this.s_title = undefined;

  /**
   * Location title.
   *
   * @get result
   * @type {string}
   */
  this.text_location = undefined;

  /**
   * Room where session takes place.
   *
   * @get result
   * @type {string}
   */
  this.text_room = undefined;

  /**
   * User key. Primary key in {@link PassportLoginSql} table.
   *
   * @get result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * Url to wait page is the beginning of an online service.
   *
   * @get result
   * @type {string}
   */
  this.url_virtual_join = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Page_PageElementModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Page_PageElementModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"dt_cancel": {"get": {"result": true}},"dt_date_global": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"html_special": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_note": {"get": {"result": true}},"id_visit": {"get": {"result": true}},"is_checkin": {"get": {"result": true}},"is_enable_client_cancel": {"get": {"result": true}},"is_event": {"get": {"result": true}},"is_virtual": {"get": {"result": true}},"k_appointment": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"result": true}},"k_location": {"get": {"result": true}},"k_visit": {"get": {"get": true}},"s_title": {"get": {"result": true}},"text_location": {"get": {"result": true}},"text_room": {"get": {"result": true}},"uid": {"get": {"result": true}},"url_virtual_join": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_PageElementModel.instanceGet
 * @param {string} k_business Key of the business to which the visit belongs.
 * @param {string} k_visit Book/visit ID. Primary key in table {@link RsVisitSql}.
 * @returns {Wl_Schedule_Page_PageElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */