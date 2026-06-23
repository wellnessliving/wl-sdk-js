/**
 * Checks whether anything prevents the user from using the business and returns any blocking conditions found.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use instead {@link _Wl_Login_Member_MemberValidate63Model}.
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
   * @type {string[]}
   */
  this.a_empty_fields_booking = undefined;

  /**
   * List of fields if the user has empty profile fields, which are required for registration.
   *
   * @get result
   * @type {string[]}
   */
  this.a_empty_fields_registration = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Login_Member_MemberValidateModel);

/**
 * @inheritDoc
 */
Wl_Login_Member_MemberValidateModel.prototype.config=function()
{
  return {"a_field":{"a_empty_fields_booking":{"get":{"result":true}},"a_empty_fields_registration":{"get":{"result":true}},"has_credit_card":{"get":{"result":true}},"has_outstanding_contract":{"get":{"result":true}},"has_outstanding_waiver":{"get":{"result":true}},"has_pending_quizzes":{"get":{"result":true}},"is_booking_require_card":{"get":{"result":true}},"is_register_require_card":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Member_MemberValidateModel.instanceGet
 * @param {string} k_business Key of the business.
 * @param {string} uid The user's key.
 * @returns {Wl_Login_Member_MemberValidateModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks whether anything prevents the user from using the business and returns any blocking conditions found.
 *
 * Returns flags indicating whether the user has an outstanding waiver, an unconfirmed contract, pending
 * registration quizzes, a required credit card on file, and lists of missing required profile fields for
 * booking and registration.
 *
 * @function
 * @name Wl_Login_Member_MemberValidateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
