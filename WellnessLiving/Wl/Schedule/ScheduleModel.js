/**
 * API to get schedule.
 *
 * <b>Note.</b>
 * List of the properties is temporary.
 * This is a temporary version which returns a completed template.
 *
 * <b>Important.</b>
 * When this API will be completed - delete TODO 'Schedule Api' in the project and code for them.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_backend,is_widget,url_page,s_data";

  /**
   * Schedule info. Prepares only in the backend mode.
   *
   * @get result
   * @type {*}
   */
  this.a_result = undefined;

  /**
   * Schedule session data.
   *
   * @get result
   * @type {{}}
   */
  this.a_schedule = undefined;

  /**
   * Parsed template of the schedule.
   *
   * @get result
   * @type {string}
   */
  this.html_template = undefined;

  /**
   * Whether API is called in the backend mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = undefined;

  /**
   * Whether the schedule is shown in the widget.
   *
   * @get get
   * @type {boolean}
   */
  this.is_widget = undefined;

  /**
   * Business key for which schedule should be get.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Parameters and filters of the schedule encoded by Javascript analogue of the {@link \Core\Tool\UrlEncode\UrlEncode::encode()} method.
   *
   * @get get
   * @type {?string}
   */
  this.s_data = null;

  /**
   * User key who get the schedule.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  /**
   * URL to the controller which were used before API to show the schedule. Used to create URL for printing schedule.
   *
   * @get get
   * @type {string}
   */
  this.url_page = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleModel.prototype.config=function()
{
  return {"a_field": {"a_result": {"get": {"result": true}},"a_schedule": {"get": {"result": true}},"html_template": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"is_widget": {"get": {"get": true}},"k_business": {"get": {"get": true}},"s_data": {"get": {"get": true}},"uid": {"get": {"get": true}},"url_page": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleModel.instanceGet
 * @param {string} k_business Business key for which schedule should be get. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key who get the schedule.
 * @param {boolean} is_backend Whether API is called in the backend mode.
 * @param {boolean} is_widget Whether the schedule is shown in the widget.
 * @param {string} url_page URL to the controller which were used before API to show the schedule. Used to create URL for printing schedule.
 * @param {?string} s_data Parameters and filters of the schedule encoded by Javascript analogue of the {@link \Core\Tool\UrlEncode\UrlEncode::encode()} method.
 * @returns {Wl_Schedule_ScheduleModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */