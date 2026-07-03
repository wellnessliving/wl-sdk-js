/**
 * Checks whether the user can complete booking wizard without additional steps.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link post()} instead. GET method fails if user is booking more than 50 sessions due to
 query string length limitation.
 */
function Wl_Book_Process_Info_InfoCanCompleteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoCanCompleteModel_a_session_select
   * @property {string} dt_date The date and time in MySQL format in GMT when the session starts.
   * @property {boolean} is_select `true` if this session should be booked, `false` otherwise.
   * @property {string} k_class_period The class period key.
   */

  /**
   * A list of sessions of an event that can be booked together.
   *
   * This is the same as {@link Wl_Book_Process_Info_InfoCanCompleteModel.a_session_select_post}, but limited by query string
   * length and might fail if the user is booking more than 50 sessions at once.
   * Therefore, using the POST method is preferable.
   *
   * @get get
   * @type {Wl_Book_Process_Info_InfoCanCompleteModel_a_session_select[]}
   */
  this.a_session_select = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Info_InfoCanCompleteModel_a_session_select_post
   * @property {string} dt_date The date and time in MySQL format in GMT when the session starts.
   * @property {boolean} is_select `true` if this session should be booked, `false` otherwise.
   * @property {string} k_class_period The class period key.
   */

  /**
   * A list of sessions of an event that can be booked together.
   *
   * Every element has the next structure:
   *
   * @post post
   * @type {Wl_Book_Process_Info_InfoCanCompleteModel_a_session_select_post[]}
   */
  this.a_session_select_post = undefined;

  /**
   * Determines whether users can complete the booking process from the info step.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.can_complete = undefined;

  /**
   * The date and time of the session that the user is booking, returned in MySQL format and in GMT.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * `true` if price for the individual session should be hidden, if client has applicable pricing option to pay for this
   * booking.
   * `false` if price should be shown always.
   *
   * @get result
   * @type {boolean}
   */
  this.hide_price = undefined;

  /**
   * Key of the business in which the booking is performed.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * The class period ID that the user started to book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The unique booking process key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.s_id = "";

  /**
   * The key of a user who is making the booking.
   * Empty if user is a guest.
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
  return {"a_field":{"a_session_select":{"get":{"get":true}},"a_session_select_post":{"post":{"post":true}},"can_complete":{"get":{"result":true},"post":{"result":true}},"dt_date_gmt":{"get":{"get":true},"post":{"get":true}},"hide_price":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"s_id":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Checks whether the user can complete booking wizard without additional steps.
 *
 * Copies the GET session selection into the POST field and delegates to `post()`.
 * Prefer the POST variant when the session list may be large, as the query string has length limitations.
 *
 * @function
 * @name Wl_Book_Process_Info_InfoCanCompleteModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Checks whether the user can complete booking wizard without additional steps.
 *
 * Performs a dry-run booking attempt for the given class period, date, and session selection to determine
 * whether the client can finalize the booking directly from the info step without proceeding to the payment
 * or purchase-option steps.
 *
 * @function
 * @name Wl_Book_Process_Info_InfoCanCompleteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
