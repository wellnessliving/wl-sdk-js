/**
 * Views or changes the visit status.
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
   * An array of service resources.
   *
   * The key refers to the `k_resource_type`. See {@link \RsResourceTypeSql}.
   * The value is an array with the following key: `k_resource`. See {@link \RsResourceSql}.
   * The array element contains a nested array with `i_index` and `i_quantity`. See {@link \RsResourceBusySql}.
   *
   * This will be empty if not set yet.
   *
   * @get result
   * @type {?{}[]}
   */
  this.a_resource = [];

  /**
   * @typedef {{}} Wl_Visit_VisitStatusModel_a_resource_alias
   * @property {string} k_resource Resource primary key in {@link \RsResourceSql} table.
   * @property {string} k_resource_type Resource type primary key in {@link \RsResourceTypeSql} table.
   * @property {number} i_index Index of the resource on the layout.
   * @property {number} i_quantity Quantity of the resource on the layout.
   * @property {string} text_alias Resource's custom name (alias) on the layout.
   * @property {string} text_title Resource's title.
   */

  /**
   * An array of service resources.
   *
   * Contains an extended data set, as well as a different format than {@link Wl_Visit_VisitStatusModel.a_resource}.
   *
   * Each element contains the following set of data:
   * <dl>
   *  <dt>string <var>k_resource</var></dt>
   *  <dd>Resource primary key in {@link \RsResourceSql} table.</dd>
   *  <dt>string <var>k_resource_type</var></dt>
   *  <dd>Resource type primary key in {@link \RsResourceTypeSql} table.</dd>
   *  <dt>int <var>i_index</var></dt>
   *  <dd>Index of the resource on the layout.</dd>
   *  <dt>int <var>i_quantity</var></dt>
   *  <dd>Quantity of the resource on the layout.</dd>
   *  <dt>string <var>text_alias</var></dt>
   *  <dd>Resource's custom name (alias) on the layout.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Resource's title.</dd>
   * </dl>
   *
   * @get result
   * @type {?Wl_Visit_VisitStatusModel_a_resource_alias[]}
   */
  this.a_resource_alias = [];

  /**
   * The list of keys of staff members that conduct the class.
   *
   * @get result
   * @type {string[]}
   */
  this.a_staff = [];

  /**
   * The visit date and time in UTC and in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The visit date in the location's time zone and in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_date = "";

  /**
   * The service duration (in minutes).
   *
   * @get result
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * The client's place in a waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = 0;

  /**
   * The source of the visit or the visit change.
   * One of the {@link Wl_Mode_ModeSid} constants.
   * If you're unsure about the value to use, keep the default value.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The status of the visit.
   * One of the {@link Wl_Visit_VisitSid} constants.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.id_visit = "0";

  /**
   * The status of the visit from which the transition is made. One of the {@link Wl_Visit_VisitSid} constants.
   *
   * If the visit status is passed, it will be used to check with the actual status in the database.
   * If `null`, the visit hasn't yet passed.
   *
   * If the status of this parameter is out of date, the API call will refresh it.
   *
   * @post post,error
   * @type {?number}
   */
  this.id_visit_from = null;

  /**
   * The staff decision to charge (or not charge) a penalty when a client meets late cancel/no-show requirements.
   *
   * If `true`, a late cancel fee should be charged. Otherwise, this will be `false`.
   *
   * @post get
   * @type {boolean}
   */
  this.is_charge_fee = true;

  /**
   * Determines whether the visit is from an event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * Whether or not to send email notification.
   *
   * `true` - email notification will be sent.
   * `false` - email notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail = false;

  /**
   * Whether or not to send push notification.
   *
   * `true` - push notification will be sent.
   * `false` - push notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_push = false;

  /**
   * Whether this visit is requested and requires staff confirmation.
   *
   * * `true` - visit is requested.
   * * `false` - visit is confirmed or denied or this is a system request.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request = false;

  /**
   * Whether or not to send sms notification.
   *
   * `true` - sms notification will be sent.
   * `false` - sms notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sms = false;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The class key.
   *
   * @get result
   * @type {string}
   */
  this.k_class = "";

  /**
   * The class period key.
   *
   * @get result
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The key of the location where visit provides.
   *
   * @get result
   * @type {string}
   */
  this.k_location = "";

  /**
   * The email pattern key.
   * If `null`, the live email pattern shouldn't be used.
   *
   * @post get
   * @type {?string}
   */
  this.k_mail_pattern_live = null;

  /**
   * The service key.
   * If 'null', the visit isn't from an appointment.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * The key of the staff providing the appointment.
   * If `null`, the visit isn't from an appointment (for example, the visit is from an asset).
   *
   * @get result
   * @type {?string}
   */
  this.k_staff = null;

  /**
   * The time zone key.
   *
   * `null` if not set then use default timezone client. See {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The visit key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * The .ics file for adding the service to a phone calendar.
   *
   * @get result
   * @type {string}
   */
  this.s_calendar_file_content = "";

  /**
   * The text abbreviation of the time zone.
   *
   * @get result
   * @type {string}
   */
  this.text_abbr_timezone = "";

  /**
   * The full address of the location for the visit (not the name of the location).
   *
   * @get result
   * @type {string}
   */
  this.text_location = "";

  /**
   * The reason the visit was canceled.
   *
   * @post get
   * @type {string}
   */
  this.text_reason = "";

  /**
   * The full name of the staff member who conducts this visit.
   * If there are several staff members conducting the visit, their names will all be listed and separated by commas.
   *
   * @get result
   * @type {string}
   */
  this.text_staff = "";

  /**
   * The service title.
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
  return {"a_field": {"a_resource": {"get": {"result": true}},"a_resource_alias": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"dt_date": {"get": {"result": true}},"dtl_date": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_wait_spot": {"get": {"result": true}},"id_mode": {"get": {"result": true},"post": {"post": true}},"id_visit": {"get": {"result": true},"post": {"post": true}},"id_visit_from": {"post": {"post": true,"error": true}},"is_charge_fee": {"post": {"get": true}},"is_event": {"get": {"result": true}},"is_mail": {"post": {"post": true}},"is_push": {"post": {"post": true}},"is_request": {"get": {"result": true}},"is_sms": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class": {"get": {"result": true}},"k_class_period": {"get": {"result": true}},"k_location": {"get": {"result": true}},"k_mail_pattern_live": {"post": {"get": true}},"k_service": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"k_timezone": {"get": {"get": true}},"k_visit": {"get": {"get": true},"post": {"get": true}},"s_calendar_file_content": {"get": {"result": true}},"text_abbr_timezone": {"get": {"result": true}},"text_location": {"get": {"result": true}},"text_reason": {"post": {"get": true}},"text_staff": {"get": {"result": true}},"text_title": {"get": {"result": true}}}};
};