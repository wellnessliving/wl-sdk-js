/**
 * Checker for <tt>next</tt>, <tt>complete</tt> buttons in booking process.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Info_InfoCanCompleteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Selected sessions.
   *
   * Keys - session IDs. Primary keys in table {@link RsClassPeriodSql}.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @get get
   * @type {{}}
   */
  this.a_session_select = [];

  /**
   * Selected sessions.
   *
   * Keys - session IDs. Primary keys in table {@link RsClassPeriodSql}.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_select_post = [];

  /**
   * Whether booking process can be finished.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.can_complete = undefined;

  /**
   * Date and time in GMT.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Class period key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Booking process identifier.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.s_id = "";

  /**
   * User key for which booking process performed.
   * Empty if user is guest.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Info_InfoCanCompleteModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Info_InfoCanCompleteModel.prototype.config=function()
{
  return {"a_field": {"a_session_select": {"get": {"get": true}},"a_session_select_post": {"post": {"post": true}},"can_complete": {"get": {"result": true},"post": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"s_id": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};