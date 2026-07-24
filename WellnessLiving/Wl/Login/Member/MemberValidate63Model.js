/**
 * Checks whether anything prevents the user from using the business and returns details about missing required fields.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_MemberValidate63Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Login_Member_MemberValidate63Model_a_empty_fields_booking
   * @property {number} id_field_general The general field ID. One of {@link RsFieldGeneralSid} constants.
   * @property {string} k_field Profile field key.
   * @property {string} text_field_title Human-readable field title describing what value is missing.
   */

  /**
   * List of fields if the user has empty profile fields, which are required for booking.
   *
   * @get result
   * @type {Wl_Login_Member_MemberValidate63Model_a_empty_fields_booking[]}
   */
  this.a_empty_fields_booking = undefined;

  /**
   * @typedef {{}} Wl_Login_Member_MemberValidate63Model_a_empty_fields_registration
   * @property {number} id_field_general The general field ID. One of {@link RsFieldGeneralSid} constants.
   * @property {string} k_field Profile field key.
   * @property {string} text_field_title Human-readable field title describing what value is missing.
   */

  /**
   * List of fields if the user has empty profile fields, which are required for registration.
   *
   * @get result
   * @type {Wl_Login_Member_MemberValidate63Model_a_empty_fields_registration[]}
   */
  this.a_empty_fields_registration = undefined;

  /**
   * @typedef {{}} Wl_Login_Member_MemberValidate63Model_a_empty_fields_required
   * @property {number} id_field_general The general field ID. One of {@link RsFieldGeneralSid} constants.
   * @property {string} k_field Profile field key.
   * @property {string} text_field_title Human-readable field title describing what value is missing.
   */

  /**
   * List of profile fields that are required but empty for this user.
   *
   * @get result
   * @type {Wl_Login_Member_MemberValidate63Model_a_empty_fields_required[]}
   */
  this.a_empty_fields_required = undefined;

  /**
   * `true` If the user has credit cards on profile, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_credit_card = undefined;

  /**
   * `true` if the user has an outstanding contract, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_outstanding_contract = undefined;

  /**
   * `true` If the user has an outstanding waiver for the business, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_outstanding_waiver = undefined;

  /**
   * `true` If the user has pending registration quizzes to complete, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_pending_quizzes = undefined;

  /**
   * `true` If the user has to provide credit card details before booking, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_booking_require_card = undefined;

  /**
   * `true` If the user has to provide credit card details to finish their registration, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_register_require_card = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Home user`s location.
   * `null` if user has not home location.
   *
   * @get result
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The user's key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_MemberValidate63Model);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberValidate63Model.prototype.config=function()
{
  return {"a_field":{"a_empty_fields_booking":{"get":{"result":true}},"a_empty_fields_registration":{"get":{"result":true}},"a_empty_fields_required":{"get":{"result":true}},"has_credit_card":{"get":{"result":true}},"has_outstanding_contract":{"get":{"result":true}},"has_outstanding_waiver":{"get":{"result":true}},"has_pending_quizzes":{"get":{"result":true}},"is_booking_require_card":{"get":{"result":true}},"is_register_require_card":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_MemberValidate63Model.instanceGet
 * @param {string} k_business Key of the business.
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_MemberValidate63Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks whether anything prevents the user from using the business and returns details about missing required fields.
 *
 * Extends the base validation by additionally returning separate lists of missing profile fields grouped by their
 * required context: booking and purchase, self-registration, or general requirement.
 *
 * @function
 * @name Wl_Login_Member_MemberValidate63Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
