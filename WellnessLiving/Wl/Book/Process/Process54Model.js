/**
 * Returns the ordered list of booking wizard steps, including the quiz step when required.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Wl_Book_Process_Process59Model} instead.
 */
function Wl_Book_Process_Process54Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,id_mode";

  /**
   * Relationships who clients are allowed to book for.
   * One of the {@link RsFamilyRelationSid} constants.
   *
   * This will be `null` if clients aren't allowed to book for their relationships.
   *
   * @get result
   * @type {?number[]}
   */
  this.a_family_relation_login_allow = null;

  /**
   * @typedef {{}} Wl_Book_Process_Process54Model_a_path
   * @property {number} id_book_process Class/Event booking process sid class.
   * @property {boolean} is_current `true` - this item is current. `false` - this item isn't current or not set yet.
   */

  /**
   * All the steps to be performed to make a booking. Every element has the next keys:
   *
   * @get result
   * @type {Wl_Book_Process_Process54Model_a_path[]}
   */
  this.a_path = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * List of possible modes to require amount while booking a class.
   *
   * Values:
   * - 3 (`ADVANCE`): Clients can pay online or pay when they visit.
   *   If set "pay when visit" then it has additional options. See {@link Wl_Classes_RequirePayVisitOptionSid}.
   * - 4 (`DEPOSIT`): Client should leave a deposit before booking an event.
   * - 1 (`ONLINE`): Client must purchase online.
   * - 2 (`VISIT`): Clients can only pay when they visit. Online payment is not available.
   *   It has additional options {@link Wl_Classes_RequirePayVisitOptionSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_pay_require = undefined;

  /**
   * `true` if this class has age restriction and requires user to specify age. `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_age_require = undefined;

  /**
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Determines if the client must authorize the credit card.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_authorize = undefined;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag, and the check will still be performed.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * If `true`, the session being booked is an event. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * Determines whether clients are allowed to book for their relationships without switching profiles.
   *
   * @get result
   * @type {boolean}
   */
  this.is_family_relation_book = undefined;

  /**
   * Determines whether the class/event is free (price).
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = undefined;

  /**
   * `true` if the client has an ach account, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_ach = undefined;

  /**
   * If `true`, the client has a credit card. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_have_credit_card = undefined;

  /**
   * `true` - the client can select several sessions per booking.
   *
   * `false` - the client can't select several sessions.
   *
   * @get result
   * @type {boolean}
   */
  this.is_session = undefined;

  /**
   * If `true`, the user can be placed on a wait list. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait = undefined;

  /**
   * If `true`, the user can be placed on a wait list without payment, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait_list_unpaid = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The key of the location where the session is booked.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * `true` to show "book for" option in booking wizard. `false` for default behavior.
   *
   * @get get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The client key for which the booking is being made.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Process54Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Process54Model.prototype.config=function()
{
  return {"a_field":{"a_family_relation_login_allow":{"get":{"result":true}},"a_path":{"get":{"result":true}},"dt_date_gmt":{"get":{"get":true}},"id_mode":{"get":{"get":true}},"id_pay_require":{"get":{"result":true}},"is_age_require":{"get":{"result":true}},"is_backend":{"get":{"get":true}},"is_card_authorize":{"get":{"result":true}},"is_credit_card_check":{"get":{"get":true}},"is_event":{"get":{"result":true}},"is_family_relation_book":{"get":{"result":true}},"is_free":{"get":{"result":true}},"is_have_ach":{"get":{"result":true}},"is_have_credit_card":{"get":{"result":true}},"is_session":{"get":{"result":true}},"is_wait":{"get":{"result":true}},"is_wait_list_unpaid":{"get":{"result":true}},"k_class_period":{"get":{"get":true}},"k_location":{"get":{"result":true}},"show_relation":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Process54Model.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid The client key for which the booking is being made.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Process54Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the ordered list of booking wizard steps, including the quiz step when required.
 *
 * Delegates to the parent implementation and then appends the quiz (or document) step when the class or event
 * requires it, adds the detail step for Client Web App flows, and re-sorts the path into the correct wizard order.
 *
 * @function
 * @name Wl_Book_Process_Process54Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
