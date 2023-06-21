/**
 * An endpoint that returns a list of either previous or upcoming visits for a specific user.
 *
 * A visit can be for an appointment, class, or an event.
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
   * @property {string} k_business Key of the business in which this visit was made.
   * @property {string} k_visit Key of a book/visit.
   */

  /**
   * Elements of user's schedule. Every element has next keys:
   * <dl>
   *   <dt>string <var>k_business</var></dt>
   *   <dd>
   *     Key of the business in which this visit was made.
   *   </dd>
   *   <dt>
   *     string <var>k_visit</var>
   *   </dt>
   *   <dd>
   *     Key of a book/visit.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_PageListModel_a_visit[]}
   */
  this.a_visit = undefined;

  /**
   * If the date is set, a list of services before this date will be returned.
   * The date and time is in UTC and in MySQL format.
   * If left as `null`, then a list of services that aren't limited to the end date will be returned.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_end = null;

  /**
   * If the date is set, a list of services after this date will be returned.
   * The date and time is in UTC and in MySQL format.
   * If left as `null`, then a list of services that aren't limited to the start date will be returned.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_start = null;

  /**
   * If `true`, then all the client previous visits will be retrieved.
   * If `false` or left as `null`, then all the client upcoming visits will be retrieved.
   *
   * @get get
   * @type {boolean}
   */
  this.is_past = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The user key.
   *
   * @get get
   * @type {?string}
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
 * @param {?string} uid The user key.
 * @param {string} k_business The business key.
 * @param {boolean} is_past If `true`, then all the client previous visits will be retrieved. If `false` or left as `null`, then all the client upcoming visits will be retrieved.
 * @returns {Wl_Schedule_Page_PageListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */