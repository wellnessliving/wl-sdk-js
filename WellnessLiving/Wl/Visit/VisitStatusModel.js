/**
 * Visit status processing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit,k_business";

  /**
   * Array of service resources.
   *
   * Key is {@link \RsResourceTypeSql}.<tt>k_resource_type</tt>
   * Value is array with the following Key: {@link \RsResourceSql}.<tt>k_resource</tt>,
   * Value is array with {@link \RsResourceBusySql}.<tt>i_index</tt> and {@link \RsResourceSql}.<tt>i_quantity</tt>
   *
   * [{@link \RsResourceTypeSql}.<tt>k_resource_type</tt>] =>
   * [{@link \RsResourceSql}.<tt>k_resource</tt> =>
   * [{@link \RsResourceBusySql}.<tt>i_index</tt>, {@link \RsResourceSql}.<tt>i_quantity</tt>]]
   *
   * Empty if not set yet.
   *
   * @get result
   * @type {*}
   */
  this.a_resource = [];

  /**
   * List of staff member keys that instruct the class.
   *
   * @get result
   * @type {string[]}
   */
  this.a_staff = [];

  /**
   * Visit date and time in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Visit local date and time in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_date = "";

  /**
   * Service duration (in minutes).
   *
   * @get result
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Place in a waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = 0;

  /**
   * Visit source. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get result
   * @post post
   * @type {int}
   */
  this.id_mode = 0;

  /**
   * Visit status. One of {@link Wl_Visit_VisitSid} constants.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.id_visit = "0";

  /**
   * The status of the visit from which the transition is made. One of {@link Wl_Visit_VisitSid} constants.
   *
   * If visit status is passed it will be used to check with actual status in database.
   * <tt>null</tt> means not passed.
   *
   * If the status from is expired this field will be filled with actual status in database.
   *
   * @post post,error
   * @type {*}
   */
  this.id_visit_from = undefined;

  /**
   * A staff decision to charge or not charge a penalty when a customer meets late cancel/no-show requirements.
   *
   * @post get
   * @type {boolean}
   */
  this.is_charge_fee = true;

  /**
   * Whether the visit is from an event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * ID of business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of class.
   *
   * @get result
   * @type {string}
   */
  this.k_class = "";

  /**
   * Key of class period.
   *
   * @get result
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Key of the mail pattern.
   * `null` when live mail pattern should not be used.
   *
   * @post get
   * @type {?string}
   */
  this.k_mail_pattern_live = null;

  /**
   * Service key.
   * 'null' if visit is not from appointment.
   *
   * @get result
   * @type {*}
   */
  this.k_service = undefined;

  /**
   * Key of staff who provide appointment.
   * `null` if visit is not from appointment, for example visit is from asset.
   *
   * @get result
   * @type {?string}
   */
  this.k_staff = null;

  /**
   * Key of timezone.
   *
   * `null` if not set then use default timezone client {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * Visit ID to get status for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * ics file for adding service to phone calendar.
   *
   * @get result
   * @type {string}
   */
  this.s_calendar_file_content = "";

  /**
   * Text abbr of timezone.
   *
   * @get result
   * @type {string}
   */
  this.text_abbr_timezone = "";

  /**
   * Reason of visit cancelling.
   *
   * @post get
   * @type {string}
   */
  this.text_reason = "";

  /**
   * Title of the service.
   *
   * @get result
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitStatusModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitStatusModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"dt_date": {"get": {"result": true}},"dtl_date": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_mode": {"get": {"result": true},"post": {"post": true}},"id_visit": {"get": {"result": true},"post": {"post": true}},"id_visit_from": {"post": {"post": true,"error": true}},"is_charge_fee": {"post": {"get": true}},"is_event": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class": {"get": {"result": true}},"k_class_period": {"get": {"result": true}},"k_mail_pattern_live": {"post": {"get": true}},"k_service": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"k_timezone": {"get": {"get": true}},"k_visit": {"get": {"get": true},"post": {"get": true}},"s_calendar_file_content": {"get": {"result": true}},"text_abbr_timezone": {"get": {"result": true}},"text_reason": {"post": {"get": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitStatusModel.instanceGet
 * @param {string} k_visit Visit ID to get status for.
 * @param {string} k_business ID of business.
 * @returns {Wl_Visit_VisitStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */