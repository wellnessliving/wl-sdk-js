/**
 * An endpoint that retrieves and validates a list of insurance partner fields.
 *
 * Use the GET method to load a list of required fields.
 *
 * Use the POST method to validate the fields before sending them to the payment API.
 *
 * This model is generated automatically based on API.
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
   * Validation is performed by {@link Wl\Insurance\Enrollment\Field\EnrollmentFieldList::setAccountForm()} method.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_account = [];

  /**
   * List of fields that the user has filled in for enrollment.
   *
   * Keys - field key in the database. See {@link \Wl\Integration\Curves\PartnerFieldSql} table for more details.
   * Values - value entered by user.
   *
   * Validation is performed by {@link Wl\Insurance\Enrollment\Field\EnrollmentFieldList::setFieldForm()} method.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_field = [];

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config
   * @property {{}} a_option A set of options for the dropdown list. The key is the title and the value is the value of the list item.
   * @property {string} text_type The type of text field.
   */
  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config} a_config Additional information about the field.
   *    <dl>
   *  <dt>array <tt>a_option</tt></dt>
   *  <dd>A set of options for the dropdown list. The key is the title and the value is the value of the list item.</dd>
   *  <dt>string <tt>text_type</tt></dt>
   *  <dd>The type of text field.</dd>
   *    </dl>
   * @property {number} i_length The length of the field.
   * @property {boolean} is_disable Determines whether this field is enabled.
   * @property {boolean} is_required Determines whether this field is required.
   * @property {string} k_field The field key.
   * @property {string} s_regular The regular expression validation for the field.
   * @property {string} text_display_name The label text for the field.
   * @property {string} text_error_message The error message if the value in field isn't valid.
   * @property {string} text_field_name The name of the field.
   */
  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list
   * @property {{}} a_account The list of reimbursement account fields.
   *    If the program doesn't require reimbursement, this list will be empty.
   *    The description of the list of fields is similar to the <tt>a_field</tt>.
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field} a_field The partner field info.
   *    <dl>
   *  <dt>array <tt>a_config</tt></dt>
   *  <dd>
   *    Additional information about the field.
   *    <dl>
   *      <dt>array <tt>a_option</tt></dt>
   *      <dd>A set of options for the dropdown list. The key is the title and the value is the value of the list item.</dd>
   *      <dt>string <tt>text_type</tt></dt>
   *      <dd>The type of text field.</dd>
   *    </dl>
   *  </dd>
   * 
   *  <dt>int <tt>i_length</tt></dt>
   *  <dd>The length of the field.</dd>
   * 
   *  <dt>bool <tt>is_disable</tt></dt>
   *  <dd>Determines whether this field is enabled.</dd>
   * 
   *  <dt>bool <tt>is_required</tt></dt>
   *  <dd>Determines whether this field is required.</dd>
   * 
   *  <dt>string <tt>k_field</tt></dt>
   *  <dd>The field key.</dd>
   * 
   *  <dt>string <tt>s_regular</tt></dt>
   *  <dd>The regular expression validation for the field.</dd>
   * 
   *  <dt>string <tt>text_display_name</tt></dt>
   *  <dd>The label text for the field.</dd>
   * 
   *  <dt>string <tt>text_error_message</tt></dt>
   *  <dd>The error message if the value in field isn't valid.</dd>
   * 
   *  <dt>string <tt>text_field_name</tt></dt>
   *  <dd>The name of the field.</dd>
   *    </dl>
   */

  /**
   * The partner field list.
   * <dl>
   *  <dt>array <var>a_account</var></dt>
   *  <dd>
   *    The list of reimbursement account fields.
   *    If the program doesn't require reimbursement, this list will be empty.
   *    The description of the list of fields is similar to the <var>a_field</var>.
   *  </dd>
   *  <dt>array <var>a_field</var></dt>
   *  <dd>
   *    The partner field info.
   *    <dl>
   *      <dt>array <var>a_config</var></dt>
   *      <dd>
   *        Additional information about the field.
   *        <dl>
   *          <dt>array <var>a_option</var></dt>
   *          <dd>A set of options for the dropdown list. The key is the title and the value is the value of the list item.</dd>
   *          <dt>string <var>text_type</var></dt>
   *          <dd>The type of text field.</dd>
   *        </dl>
   *      </dd>
   *
   *      <dt>int <var>i_length</var></dt>
   *      <dd>The length of the field.</dd>
   *
   *      <dt>bool <var>is_disable</var></dt>
   *      <dd>Determines whether this field is enabled.</dd>
   *
   *      <dt>bool <var>is_required</var></dt>
   *      <dd>Determines whether this field is required.</dd>
   *
   *      <dt>string <var>k_field</var></dt>
   *      <dd>The field key.</dd>
   *
   *      <dt>string <var>s_regular</var></dt>
   *      <dd>The regular expression validation for the field.</dd>
   *
   *      <dt>string <var>text_display_name</var></dt>
   *      <dd>The label text for the field.</dd>
   *
   *      <dt>string <var>text_error_message</var></dt>
   *      <dd>The error message if the value in field isn't valid.</dd>
   *
   *      <dt>string <var>text_field_name</var></dt>
   *      <dd>The name of the field.</dd>
   *    </dl>
   *  </dd>
   * </dl>
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
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * "Wellness Program" key.
   *
   * @get get
   * @post get
   * @put get
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
  return {"a_field": {"a_account": {"post": {"post": true},"put": {"post": true}},"a_field": {"post": {"post": true},"put": {"post": true}},"a_field_list": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_wellness_program": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};