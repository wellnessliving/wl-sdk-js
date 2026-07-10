/**
 * Gets information about ability of user to pay for given session in any ways.
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
  this._s_key = "k_business,dt_date_global,k_class_period,uid_client";

  /**
   * @typedef {{}} Wl_Login_Attendance_Add_AddModel_a_login_promotion
   * @property {string} k_login_promotion The login promotion key, available to pay for the session.
   * @property {string} text_title The title of the login promotion.
   */

  /**
   * Any of the client memberships that can be used to pay for the session.
   * Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Login_Attendance_Add_AddModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_Add_AddModel_a_session_pass
   * @property {string} k_session_pass The session pass key, available to pay for the session.
   * @property {string} text_title The title of the session pass.
   */

  /**
   * Any user's session passes that can be used to pay for the session.
   * Every element is an array with the following keys:
   *
   * @get result
   * @type {Wl_Login_Attendance_Add_AddModel_a_session_pass[]}
   */
  this.a_session_pass = undefined;

  /**
   * The start date and time of the class in GMT and MySQL format.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_global = "";

  /**
   * Determines how the payment was handled for the session.
   * One of the {@link Wl_Login_Attendance_AddOptionSid} constants.
   *
   * @post post
   * @see Wl_Login_Attendance_AddOptionSid
   * @type {number}
   */
  this.id_add_option = 0;

  /**
   * Determines how the session was booked.
   * One of the {@link Wl_Mode_ModeSid} constants.
   * We recommend using the `WEB_BACKEND` value.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The status of the visit.
   * One of the {@link Wl_Visit_VisitSid} constants.
   *
   * @post result
   * @see Wl_Visit_VisitSid
   * @type {number}
   */
  this.id_visit = undefined;

  /**
   * Defines whether only single session can be booked for block event.
   *
   * `true` Only current session of the block event will be booked in a case if staff event has appropriate setting to do this action.
   *   In this case this session will be considered as session out of event block.
   * `false` all available event sessions will be booked.
   *   In this case session will be considered as part of event block.
   *
   * @post get
   * @type {boolean}
   */
  this.is_event_single = false;

  /**
   * If `true`, the session is free with no methods of payment. If `false`, the session can be paid for.
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = undefined;

  /**
   * If `true`, the visit was automatically paid for in any available way during the booking.
   * If `false`, the visit wasn't automatically paid for.
   *
   * @post result
   * @type {boolean}
   */
  this.is_paid = undefined;

  /**
   * Key of the business in which the request must be processed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class period key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The key of the user's promotion to be used for booking.
   * If empty, use any suitable user's promotion.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The key of a session pass that can be used for a single session payment.
   * If no such payment is available, `0` will be returned.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The key of the booked visit. This will be set on success.
   * This value will be needed if the session still needs to be paid for.
   *
   * @post result
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * Account balance.
   *
   * @get result
   * @type {string}
   */
  this.m_account = undefined;

  /**
   * The price of the session, including any taxes and discounts.
   *
   * If `null`, the price of the session hasn't been loaded yet.
   *
   * @get result
   * @type {?string}
   */
  this.m_price = null;

  /**
   * The user's account balance if they were charged the {@link Wl_Login_Attendance_Add_AddModel.m_price} amount.
   *
   * @get result
   * @type {?string}
   */
  this.m_rest = null;

  /**
   * The client user key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_client = "";

  /**
   * The URL link to the store to allow for the payment of the visit.
   *
   * This link is for web only.
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
  return {"a_field":{"a_login_promotion":{"get":{"result":true}},"a_session_pass":{"get":{"result":true}},"dt_date_global":{"get":{"get":true},"post":{"get":true}},"id_add_option":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"id_visit":{"post":{"result":true}},"is_event_single":{"post":{"get":true}},"is_free":{"get":{"result":true}},"is_paid":{"post":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"k_login_promotion":{"get":{"result":true},"post":{"post":true}},"k_session_pass":{"get":{"result":true},"post":{"post":true}},"k_visit":{"post":{"result":true}},"m_account":{"get":{"result":true}},"m_price":{"get":{"result":true}},"m_rest":{"get":{"result":true}},"uid_client":{"get":{"get":true},"post":{"get":true}},"url_store":{"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_Add_AddModel.instanceGet
 * @param {string} k_business Key of the business in which the request must be processed.
 * @param {string} dt_date_global The start date and time of the class in GMT and MySQL format.
 * @param {string} k_class_period The class period key.
 * @param {string} uid_client The client user key.
 * @returns {Wl_Login_Attendance_Add_AddModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about ability of user to pay for given session in any ways.
 *
 * Returns available Purchase Options and session passes that can be used to pay for the specified class session,
 * along with the session price, the client's account balance, and whether the session is free.
 *
 * @function
 * @name Wl_Login_Attendance_Add_AddModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds client to attendance list.
 *
 * Books the specified client into the given class session using the chosen payment option (debit, Purchase Option,
 * session pass, or unpaid), and returns the resulting visit key, visit status, and a store URL if payment is still
 * required.
 *
 * @function
 * @name Wl_Login_Attendance_Add_AddModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
