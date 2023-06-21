/**
 * An endpoint that can create or edit a staff member in a business.
 *
 * You can also use this endpoint to get information about a staff member's activity in another business when using
 * the {@link Wl_Business_BusinessModel} endpoint.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_StaffElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_staff";

  /**
   * Lis of locations where the staff member works. Each element is primary key from {@link \RsLocationSql} table.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?{}}
   */
  this.a_location = null;

  /**
   * Employment end date.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Employment start date.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Gender of staff member. One of {@link Wl_Gender_GenderSid} constants.
   *
   * `null` means to not change the current value of the field or set gender by default for new staff.
   *
   * @post post
   * @type {?number}
   */
  this.id_gender = null;

  /**
   * ID of the default system role from {@link RsPrivilegeRoleSid}.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?number}
   */
  this.id_role = null;

  /**
   * Whether the staff is currently employed.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_employ = null;

  /**
   * Determines whether the staff member be shown on the directory site of the business.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_microsite = null;

  /**
   * Whether the staff member can to sign in.
   *
   * @post post
   * @type {boolean}
   */
  this.is_uid = true;

  /**
   * The key of the business in which the staff member is being created or edited.
   * This field is required.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Business role key.
   *
   * `null` if not set.
   *
   * @post post
   * @type {?string}
   */
  this.k_business_role = null;

  /**
   * City key.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.k_city = null;

  /**
   * Home location key.
   *
   * `null` if not set.
   *
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The key of the staff member who is being created or edited.
   *
   * This will be `null` in cases where a new staff member is created.
   *
   * @post get,result
   * @type {?string}
   */
  this.k_staff = null;

  /**
   * Address.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.text_address = null;

  /**
   * Staff biography.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.text_biography = null;

  /**
   * Custom city title.
   *
   * `null` means to not change the current value of the field or <var>k_city</var> is specified.
   *
   * @post post
   * @type {?string}
   */
  this.text_city = null;

  /**
   * The staff member's email address.
   * This field is required when creating a new staff member.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_email = null;

  /**
   * The staff member's first name.
   * This field is required when creating a new staff member.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_first_name = null;

  /**
   * The staff member's last name.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_last_name = null;

  /**
   * The password.
   * This field is required when creating a new staff member.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_password = null;

  /**
   * Confirmation of the password.
   * This field is required when creating a new staff member.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_password_confirm = null;

  /**
   * Home phone.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.text_phone_home = null;

  /**
   * Cell phone.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string}
   */
  this.text_phone_mobile = null;

  /**
   * The staff member's job title.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_position = null;

  /**
   * The staff member's job title.
   *
   * If `null`, the current value of the field shouldn't be changed.
   *
   * @post post
   * @type {?string}
   */
  this.text_postal = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffElementModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffElementModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"post": {"post": true}},"dl_end": {"post": {"post": true}},"dl_start": {"post": {"post": true}},"id_gender": {"post": {"post": true}},"id_role": {"post": {"post": true}},"is_employ": {"post": {"post": true}},"is_microsite": {"post": {"post": true}},"is_uid": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_role": {"post": {"post": true}},"k_city": {"post": {"post": true}},"k_location": {"post": {"post": true}},"k_staff": {"post": {"get": true,"result": true}},"text_address": {"post": {"post": true}},"text_biography": {"post": {"post": true}},"text_city": {"post": {"post": true}},"text_email": {"post": {"post": true}},"text_first_name": {"post": {"post": true}},"text_last_name": {"post": {"post": true}},"text_password": {"post": {"post": true}},"text_password_confirm": {"post": {"post": true}},"text_phone_home": {"post": {"post": true}},"text_phone_mobile": {"post": {"post": true}},"text_position": {"post": {"post": true}},"text_postal": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffElementModel.instanceGet
 * @param {string} k_business The key of the business in which the staff member is being created or edited. This field is required.
 * @param {?string} k_staff The key of the staff member who is being created or edited. This will be `null` in cases where a new staff member is created.
 * @returns {Wl_Staff_StaffElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */