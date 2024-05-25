/**
 * An endpoint that displays information about members of businesses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Member_MemberValidateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of fields if the user has empty profile fields, which are required for booking.
   *
   * @get result
   * @type {array}
   */
  this.a_empty_fields_booking = [];

  /**
   * List of fields if the user has empty profile fields, which are required for registration.
   *
   * @get result
   * @type {array}
   */
  this.a_empty_fields_registration = [];

  /**
   * `true` If the user has credit cards on profile, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_credit_card = false;

  /**
   * `true` if the user has an outstanding contract, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_outstanding_contract = false;

  /**
   * `true` If the user has an outstanding waiver for the business, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_outstanding_waiver = false;

  /**
   * `true` If the user has pending registration quizzes to complete, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.has_pending_quizzes = false;

  /**
   * `true` If the user has to provide credit card details before booking, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_booking_require_card = false;

  /**
   * `true` If the user has to provide credit card details to finish their registration, otherwise `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_register_require_card = false;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = '0';

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
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Member_MemberValidateModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberValidateModel.prototype.config=function()
{
  return {"a_field": {"a_empty_fields_booking": {"get": {"result": true}},"a_empty_fields_registration": {"get": {"result": true}},"has_credit_card": {"get": {"result": true}},"has_outstanding_contract": {"get": {"result": true}},"has_outstanding_waiver": {"get": {"result": true}},"has_pending_quizzes": {"get": {"result": true}},"is_booking_require_card": {"get": {"result": true}},"is_register_require_card": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_MemberValidateModel.instanceGet
 * @param {string} k_business The key of the business.
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_MemberValidateModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */