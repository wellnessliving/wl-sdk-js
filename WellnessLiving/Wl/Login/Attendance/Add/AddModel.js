/**
 * Adds client to attendance list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_global,k_class_period,uid_client";

  /**
   * @typedef {{}} Wl_Login_Attendance_Add_AddModel_a_login_promotion
   * @property {string} k_login_promotion User's promotion key.
   * @property {string} text_title Promotion title.
   */

  /**
   * User's promotion are suitable to pay for session. Every element has keys:
   * <dl>
   *   <dt>
   *     string <var>k_login_promotion</var>
   *   </dt>
   *   <dd>
   *     User's promotion key.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Promotion title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_Add_AddModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_Add_AddModel_a_session_pass
   * @property {string} k_session_pass Session pass key, available to pay for the session, primary key in {@link \Wl\Session\Pass\Sql}.
   * @property {string} text_title Session pass title.
   */

  /**
   * User's promotion are suitable to pay for session. Every element has keys:
   * <dl>
   *   <dt>string <var>k_session_pass</var></dt>
   *   <dd>Session pass key, available to pay for the session, primary key in {@link \Wl\Session\Pass\Sql}.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Session pass title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_Add_AddModel_a_session_pass[]}
   */
  this.a_session_pass = undefined;

  /**
   * Start date of the class in MySQL format in GMT.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_global = "";

  /**
   * Adding type ID, one of {@link \Wl\Login\Attendance\AddOptionSid}.
   *
   * @post post
   * @type {number}
   */
  this.id_add_option = 0;

  /**
   * Mode ID, one of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Status of the created visit, one of {@link VisitSid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_visit = undefined;

  /**
   * Defines whether only single session can be booked for block event.
   *
   * <tt>true</tt> Only current session of the block event will be booked in a case if staff event has appropriate setting to do this action.
   *   In this case this session will be considered as session out of event block.
   * <tt>false</tt> all available event sessions will be booked.
   *   In this case session will be considered as part of event block.
   *
   * @post get
   * @type {boolean}
   */
  this.is_event_single = false;

  /**
   * <tt>true</tt> - session is free (no ways to pay); <tt>false</tt> - session is chargeable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = undefined;

  /**
   * Indicates that visit was automatically paid in any available way during booking.
   *
   * @post result
   * @type {boolean}
   */
  this.is_paid = undefined;

  /**
   * ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * User's promotion to be used for booking. Primary key in {@link \RsLoginPromotionSql}.
   * If empty, use any suitable user's promotion.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * User's session pass key to be used for booking. Primary key in {@link \Wl\Session\Pass\Sql}.
   * If empty, use any suitable user's session pass.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_session_pass = "0";

  /**
   * Key of created visit. Primary key in {@link \RsVisitSql} table.
   *
   * @post result
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * Price of the session, including taxes and discount.
   *
   * @get result
   * @type {?string}
   */
  this.m_price = null;

  /**
   * User's account balance after charging {@link Wl_Login_Attendance_Add_AddModel.m_price} amount.
   *
   * @get result
   * @type {?string}
   */
  this.m_rest = null;

  /**
   * User key that staff adds to attendance list. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_client = "0";

  /**
   * Url link to store to pay for the visit, can be used for website only.
   *
   * @post result
   * @type {string}
   */
  this.url_store = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_Add_AddModel.prototype.config=function()
{
  return {"a_field": {"a_login_promotion": {"get": {"result": true}},"a_session_pass": {"get": {"result": true}},"dt_date_global": {"get": {"get": true},"post": {"get": true}},"id_add_option": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"id_visit": {"post": {"result": true}},"is_event_single": {"post": {"get": true}},"is_free": {"get": {"result": true}},"is_paid": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"get": {"result": true},"post": {"post": true}},"k_session_pass": {"get": {"result": true},"post": {"post": true}},"k_visit": {"post": {"result": true}},"m_price": {"get": {"result": true}},"m_rest": {"get": {"result": true}},"uid_client": {"get": {"get": true},"post": {"get": true}},"url_store": {"post": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_Add_AddModel.instanceGet
 * @param {string} dt_date_global Start date of the class in MySQL format in GMT.
 * @param {string} k_class_period ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
 * @param {string} uid_client User key that staff adds to attendance list. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Login_Attendance_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */