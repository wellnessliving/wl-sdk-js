/**
 * Wellness Program field API.
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
   * Validation is performed by {@link \Wl\Insurance\Enrollment\Field\EnrollmentFieldList::setAccountForm()} method.
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
   * Validation is performed by {@link \Wl\Insurance\Enrollment\Field\EnrollmentFieldList::setFieldForm()} method.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_field = [];

  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config
   * @property {{}} a_option Set of options for the dropdown list. The key is the title, the value is the value of the list item.
   * @property {string} text_type Type of text field.
   */
  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field_a_config} a_config Additional information about field.
   *    <dl>
   *  <dt>array <tt>a_option</tt></dt>
   *  <dd>Set of options for the dropdown list. The key is the title, the value is the value of the list item.</dd>
   *  <dt>string <tt>text_type</tt></dt>
   *  <dd>Type of text field.</dd>
   *    </dl>
   * @property {number} i_length Length of field.
   * @property {boolean} is_disable Whether this field is disabled.
   * @property {boolean} is_required Whether this field is required.
   * @property {string} k_field Field key.
   * @property {string} s_regular Regular expression validation for field.
   * @property {string} text_display_name Label text for field.
   * @property {string} text_error_message Error message if value in field is not valid.
   * @property {string} text_field_name Name of field.
   */
  /**
   * @typedef {{}} Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list
   * @property {{}} a_account List of reimbursement account fields.
   *    If the program does not require reimbursement, this list will be empty.
   *    The description of the list of fields is similar to the <tt>a_field</tt>.
   * @property {Wl_Insurance_Enrollment_Field_EnrollmentFieldListModel_a_field_list_a_field} a_field Partner field info.
   *    <dl>
   *  <dt>array <tt>a_config</tt></dt>
   *  <dd>
   *    Additional information about field.
   *    <dl>
   *      <dt>array <tt>a_option</tt></dt>
   *      <dd>Set of options for the dropdown list. The key is the title, the value is the value of the list item.</dd>
   *      <dt>string <tt>text_type</tt></dt>
   *      <dd>Type of text field.</dd>
   *    </dl>
   *  </dd>
   * 
   *  <dt>int <tt>i_length</tt></dt>
   *  <dd>Length of field.</dd>
   * 
   *  <dt>bool <tt>is_disable</tt></dt>
   *  <dd>Whether this field is disabled.</dd>
   * 
   *  <dt>bool <tt>is_required</tt></dt>
   *  <dd>Whether this field is required.</dd>
   * 
   *  <dt>string <tt>k_field</tt></dt>
   *  <dd>Field key.</dd>
   * 
   *  <dt>string <tt>s_regular</tt></dt>
   *  <dd>Regular expression validation for field.</dd>
   * 
   *  <dt>string <tt>text_display_name</tt></dt>
   *  <dd>Label text for field.</dd>
   * 
   *  <dt>string <tt>text_error_message</tt></dt>
   *  <dd>Error message if value in field is not valid.</dd>
   * 
   *  <dt>string <tt>text_field_name</tt></dt>
   *  <dd>Name of field.</dd>
   *    </dl>
   */

  /**
   * Partner field list.
   * <dl>
   *  <dt>array <var>a_account</var></dt>
   *  <dd>
   *    List of reimbursement account fields.
   *    If the program does not require reimbursement, this list will be empty.
   *    The description of the list of fields is similar to the <var>a_field</var>.
   *  </dd>
   *  <dt>array <var>a_field</var></dt>
   *  <dd>
   *    Partner field info.
   *    <dl>
   *      <dt>array <var>a_config</var></dt>
   *      <dd>
   *        Additional information about field.
   *        <dl>
   *          <dt>array <var>a_option</var></dt>
   *          <dd>Set of options for the dropdown list. The key is the title, the value is the value of the list item.</dd>
   *          <dt>string <var>text_type</var></dt>
   *          <dd>Type of text field.</dd>
   *        </dl>
   *      </dd>
   *
   *      <dt>int <var>i_length</var></dt>
   *      <dd>Length of field.</dd>
   *
   *      <dt>bool <var>is_disable</var></dt>
   *      <dd>Whether this field is disabled.</dd>
   *
   *      <dt>bool <var>is_required</var></dt>
   *      <dd>Whether this field is required.</dd>
   *
   *      <dt>string <var>k_field</var></dt>
   *      <dd>Field key.</dd>
   *
   *      <dt>string <var>s_regular</var></dt>
   *      <dd>Regular expression validation for field.</dd>
   *
   *      <dt>string <var>text_display_name</var></dt>
   *      <dd>Label text for field.</dd>
   *
   *      <dt>string <var>text_error_message</var></dt>
   *      <dd>Error message if value in field is not valid.</dd>
   *
   *      <dt>string <var>text_field_name</var></dt>
   *      <dd>Name of field.</dd>
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
   * Primary key from {@link \Wl\Integration\Curves\WellnessProgramSql} table.
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