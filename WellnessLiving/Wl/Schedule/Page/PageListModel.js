/**
 * Retrieves items of schedule for the client.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Page_PageListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,is_past";

  /**
   * @typedef {{}} Wl_Schedule_Page_PageListModel_a_visit
   * @property {string} k_visit ID of book/visit. Primary key in {@link RsVisitSql}
   */

  /**
   * Elements of user's schedule. Every element has next keys:
   * <dl>
   *   <dt>
   *     string <var>k_visit</var>
   *   </dt>
   *   <dd>
   *     ID of book/visit. Primary key in {@link RsVisitSql}
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_PageListModel_a_visit[]}
   */
  this.a_visit = undefined;

  /**
   * Determines date range end, date and time in UTC timezone in MySQL format.
   *
   * <tt>null</tt> until loaded.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_end = null;

  /**
   * Determines date range start, date and time in UTC timezone in MySQL format.
   *
   * <tt>null</tt> until loaded.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_start = null;

  /**
   * Determines whether current schedule is the past schedule.
   *
   * @get get
   * @type {boolean}
   */
  this.is_past = false;

  /**
   * Business primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User's primary key in {@link PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Page_PageListModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Page_PageListModel.prototype.config=function()
{
  return {"a_field": {"a_visit": {"get": {"result": true}},"dtu_end": {"get": {"get": true}},"dtu_start": {"get": {"get": true}},"is_past": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_PageListModel.instanceGet
 * @param {string} uid User's primary key in {@link PassportLoginSql} table.
 * @param {string} k_business Business primary key in {@link RsBusinessSql} table.
 * @param {boolean} is_past Determines whether current schedule is the past schedule.
 * @returns {Wl_Schedule_Page_PageListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */