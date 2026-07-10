/**
 * Checks if user can book specified session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Relation_RelationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_date,k_business,k_class_period,uid_from";

  /**
   * List of check that must be skipped.
   * Each element must be a member of {@link Wl_Book_Process_ProcessCheckSid}.
   *
   * @get get
   * @type {number[]}
   */
  this.a_check_ignore = undefined;

  /**
   * The date/time of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Day of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_day = null;

  /**
   * Month of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_month = null;

  /**
   * Year of birthday.
   * `null` if birthday is not entered.
   *
   * @post post
   * @type {?number}
   */
  this.i_year = null;

  /**
   * The mode type.
   * One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The relation type.
   * One of the {@link RsFamilyRelationSid} constants.
   *
   * @post post
   * @see RsFamilyRelationSid
   * @type {number}
   */
  this.id_relation = 0;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag and the check will still be performed.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * `true` - the new relative uses the email from `uid_from`.
   *
   * `false` - the new relative has their own email.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail_inherit = false;

  /**
   * `true` - the new relative pays for themselves.
   *
   * `false` - `uid_from` pays for the new relative.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pay_self = false;

  /**
   * The business where `uid_from` creates the new relative.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The new relative's email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The new relative's first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * The new relative's last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  /**
   * The newly added relative.
   *
   * @post result
   * @type {string}
   */
  this.uid_create = undefined;

  /**
   * UID of already existed in another business user.
   *
   * @post post
   * @type {string}
   */
  this.uid_existed = "";

  /**
   * The user who's adding the new relative.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Relation_RelationModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Relation_RelationModel.prototype.config=function()
{
  return {"a_field":{"a_check_ignore":{"get":{"get":true}},"dtu_date":{"get":{"get":true}},"i_day":{"post":{"post":true}},"i_month":{"post":{"post":true}},"i_year":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"id_relation":{"post":{"post":true}},"is_credit_card_check":{"get":{"get":true}},"is_mail_inherit":{"post":{"post":true}},"is_pay_self":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"get":{"get":true}},"text_mail":{"post":{"post":true}},"text_name_first":{"post":{"post":true}},"text_name_last":{"post":{"post":true}},"uid_create":{"post":{"result":true}},"uid_existed":{"post":{"post":true}},"uid_from":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Relation_RelationModel.instanceGet
 * @param {string} dtu_date The date/time of the session to check for booking availability.
 * @param {string} k_business The business where `uid_from` creates the new relative.
 * @param {string} k_class_period The key of the session to check for booking availability.
 * @param {string} uid_from The user who's adding the new relative.
 * @returns {Wl_Book_Process_Relation_RelationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks if user can book specified session.
 *
 * Validates the date, business, class period, and user, verifies the session is not already booked, then
 * runs the full booking eligibility check (credit card, waiver, age, overlap, outstanding balance) and throws
 * a descriptive user-facing error if any requirement is not met.
 *
 * @function
 * @name Wl_Book_Process_Relation_RelationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Added new relative.
 *
 * Creates a new family member profile for the specified business and links it as a relative of `uid_from`,
 * applying birthday validation, email-inheritance rules, and payment responsibility settings. Returns the UID
 * of the newly created user in `uid_create`.
 *
 * @function
 * @name Wl_Book_Process_Relation_RelationModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
