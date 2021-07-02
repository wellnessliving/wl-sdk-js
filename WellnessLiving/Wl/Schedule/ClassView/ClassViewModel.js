/**
 * Retrieves information about class item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ClassView_ClassViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_class_period,uid";

  /**
   * Class data.
   *
   * @get result
   * @post result
   * @type {?{}}
   */
  this.a_class = null;

  /**
   * Location data.
   *
   * @get result
   * @post result
   * @type {?{}}
   */
  this.a_location = null;

  /**
   * @typedef {{}} Wl_Schedule_ClassView_ClassViewModel_a_session_request
   * @property {string} dt_date Date/time of the session in UTC.
   * @property {string} k_class_period Session primary key in {@link RsClassPeriodSql} table.
   */

  /**
   * List of sessions to get information for. Every element has next keys:
   *
   * <dl>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>Date/time of the session in UTC.</dd>
   *   <dt>string <var>k_class_period</var></dt>
   *   <dd>Session primary key in {@link RsClassPeriodSql} table.</dd>
   * </dl>
   *
   * <tt>null</tt> for mode of single session.
   *
   * @get get
   * @post get
   * @type {?Wl_Schedule_ClassView_ClassViewModel_a_session_request[]}
   */
  this.a_session_request = null;

  /**
   * List of data for requested sessions. Every element - result of {@link \Wl\Schedule\ClassView\ClassViewApi::_getSingle()}.
   *
   * @get result
   * @post result
   * @type {{}[]}
   */
  this.a_session_result = undefined;

  /**
   * Staff list data.
   *
   * @get result
   * @post result
   * @type {?{}[]}
   */
  this.a_staff = null;

  /**
   * Date/time of the class start in UTC.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Session primary key in {@link \RsClassPeriodSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * List of sessions in JSON format.
   *
   * @post post
   * @type {string}
   */
  this.s_session_request = "";

  /**
   * User's primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ClassView_ClassViewModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ClassView_ClassViewModel.prototype.config=function()
{
  return {"a_field": {"a_class": {"get": {"result": true},"post": {"result": true}},"a_location": {"get": {"result": true},"post": {"result": true}},"a_session_request": {"get": {"get": true},"post": {"get": true}},"a_session_result": {"get": {"result": true},"post": {"result": true}},"a_staff": {"get": {"result": true},"post": {"result": true}},"dt_date": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"s_session_request": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ClassView_ClassViewModel.instanceGet
 * @param {string} dt_date Date/time of the class start in UTC.
 * @param {string} k_class_period Session primary key in {@link \RsClassPeriodSql} table.
 * @param {string} uid User's primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Schedule_ClassView_ClassViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */