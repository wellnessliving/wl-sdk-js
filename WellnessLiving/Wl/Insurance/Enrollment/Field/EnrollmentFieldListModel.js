/**
 * Returns the list of required partner fields for the specified wellness program.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Reimbursement account information.
   *
   * Keys - field name.
   * Values - value entered by user.
   *
   * @post post
   * @type {string[]}
   */
  this.a_account = undefined;

  /**
   * List of fields that the user has filled in for enrollment.
   *
   * Keys refer specifically to field keys. 
   * Values refer specifically to values entered by the user.
   *
   * @post post
   * @type {string[]}
   */
  this.a_field = undefined;

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_account
   * @property {string[]} a_config Additional configuration for the field. For the account type field, keys are account type titles and values are {@link RsPayBankAchTypeSid} constants. Empty array for other fields.
   * @property {?number} i_length Maximum length of the field value. `null` if no limit.
   * @property {boolean} is_disable `true` if the field is disabled and should not be shown.
   * @property {boolean} is_required `true` if the field is required.
   * @property {string} k_field The field identifier key.
   * @property {string} s_regular Regular expression for client-side validation. Empty string if no validation pattern.
   * @property {string} text_display_name The label text for the field displayed to the user.
   * @property {string} text_error_message The error message to display if the field value is invalid.
   * @property {string} text_field_name The internal name of the field.
   */

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config
   * @property {string[]} a_option Options for dropdown fields. Keys are display titles, values are option values. Empty array if the field is not a dropdown.
   * @property {string} text_type The type of text input. Present only for text-type fields.
   */

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config} a_config Additional configuration for the field:
   * @property {?number} i_length Maximum length of the field value. `null` if no limit.
   * @property {boolean} is_disable `true` if the field is disabled and should not be shown.
   * @property {boolean} is_required `true` if the field is required.
   * @property {string} k_field The field key.
   * @property {string} s_regular Regular expression for client-side validation. Empty string if no validation pattern.
   * @property {string} text_display_name The label text for the field displayed to the user.
   * @property {string} text_error_message The error message to display if the field value is invalid.
   * @property {string} text_field_name The internal name of the field.
   */

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_account} a_account The list of reimbursement account fields. If the program doesn't require reimbursement, this list will be empty. Each element has the same structure as elements of `a_field`:
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field} a_field The list of partner enrollment fields. Each element:
   */

  /**
   * The partner field list:
   *
   * @get result
   * @type {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list}
   */
  this.a_field_list = undefined;

  /**
   * The key of the business in which the enrollment is performed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * "Wellness Program" key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_wellness_program = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.prototype.config=function()
{
  return {"a_field":{"a_account":{"post":{"post":true}},"a_field":{"post":{"post":true}},"a_field_list":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_wellness_program":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Returns the list of required partner fields for the specified wellness program.
 *
 * Returns enrollment fields defined by the insurance partner along with reimbursement account fields if the
 * program requires reimbursement. Each field includes validation rules, display labels, and configuration
 * options for rendering the enrollment form.
 *
 * @function
 * @name Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Validates the list of fields filled in by the user for enrollment.
 *
 * Accepts the values submitted by the user for the wellness program enrollment form and validates them
 * against the partner's field rules before passing them to the payment API.
 *
 * @function
 * @name Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
