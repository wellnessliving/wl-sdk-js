/**
 * "Wellness Programs" enrollment requirements API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Enrollment_EnrollmentPanelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_wellness_program,k_login_promotion";

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
   * @typedef {{}} Wl_Insurance_Enrollment_EnrollmentPanelModel_a_info
   * @property {boolean} is_reimbursement_information_required Determines whether the requiring ACH account.
   * @property {string} s_account Part of reimbursement account number.
   * @property {string} text_insurance_organization Insurance organization name.
   */

  /**
   * "Wellness Program" info.
   * <dl>
   *   <dt>
   *     bool <var>is_reimbursement_information_required</var>
   *   </dt>
   *   <dd>
   *     Determines whether the requiring ACH account.
   *   </dd>
   *   <dt>
   *     string <var>s_account</var>
   *   </dt>
   *   <dd>
   *     Part of reimbursement account number.
   *   </dd>
   *   <dt>
   *     string <var>text_insurance_organization</var>
   *   </dt>
   *   <dd>
   *     Insurance organization name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Insurance_Enrollment_EnrollmentPanelModel_a_info}
   */
  this.a_info = undefined;

  /**
   * List of fields that must be filled for enrollment. Presented by rendered template.
   *
   * @get result
   * @type {string}
   */
  this.html_field_list = undefined;

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
   * Purchased program key.
   * Primary key from {@link \RsLoginPromotionSql} table.
   *
   * If set, the program key (<tt>k_wellness_program</tt>) will be taken from the {@link \Wl\Login\Promotion\LoginPromotionInsuranceSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_login_promotion = "";

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

WlSdk_ModelAbstract.extend(Wl_Insurance_Enrollment_EnrollmentPanelModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Enrollment_EnrollmentPanelModel.prototype.config=function()
{
  return {"a_field": {"a_account": {"post": {"post": true},"put": {"post": true}},"a_field": {"post": {"post": true},"put": {"post": true}},"a_info": {"get": {"result": true}},"html_field_list": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_login_promotion": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_wellness_program": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Insurance_Enrollment_EnrollmentPanelModel.instanceGet
 * @param {string} k_business The key of the business in which the enrollment is performed.
 * @param {string} k_wellness_program "Wellness Program" key. Primary key from {@link \Wl\Integration\Curves\WellnessProgramSql} table.
 * @param {string} k_login_promotion Purchased program key. Primary key from {@link \RsLoginPromotionSql} table. If set, the program key (<tt>k_wellness_program</tt>) will be taken from the {@link \Wl\Login\Promotion\LoginPromotionInsuranceSql} table.
 * @returns {Wl_Insurance_Enrollment_EnrollmentPanelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */