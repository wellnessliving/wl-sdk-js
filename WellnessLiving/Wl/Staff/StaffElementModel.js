/**
 * Update or create staff.
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
  this._s_key = "k_business,uid_staff";

  /**
   * The list of locations where the staff member works.
   *
   * `null` means to not change the current value of the field.
   *
   * @post post
   * @type {?string[]}
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
   * String identifiers for gender.
   *
   * Values:
   * - 2 (`FEMALE`): Female gender.
   * - 1 (`MALE`): Male gender.
   * - 3 (`UNDEFINED`): Gender is undefined in cases where the user preferred not to identify their gender.
   *
   * @post post
   * @see AGenderSid
   * @type {?number}
   */
  this.id_gender = null;

  /**
   * String identifiers for rs.privilege.role.
   *
   * Do not reorder class constants. It is important during selecting all system roles and custom roles from database.
   *
   * Values:
   * - 1 (`BUSINESS_OWNER`): Staff role business owner.
   * - 4 (`FRONT_DESK`): Staff role front desk.
   * - 3 (`INSTRUCTOR`): Staff role instructor.
   * - 2 (`LOCATION_OWNER`): Staff role location owner.
   *
   * @post post
   * @see RsPrivilegeRoleSid
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
   * Whether password set is disabled. `true` - if the email is associated to a client profile which has a password set,
   *   `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_password_set_disable = false;

  /**
   * Whether the staff member can to sign in.
   *
   * @post post
   * @type {boolean}
   */
  this.is_uid = false;

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
   * The key of the staff member resolved and used internally by this API.
   *
   * This property is populated from {@link Wl_Staff_StaffElementModel} in `post()` and
   * returned in API result for compatibility.
   *
   * Passing `k_staff` in request payload is not supported and causes an error.
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
   * `null` means to not change the current value of the field or `k_city` is specified.
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

  /**
   * User key of a staff member.
   *
   * This is the supported request identifier for staff update operations.
   * Value is normalized into {@link Wl_Staff_StaffElementModel} in `post()`.
   *
   * @post post
   * @type {?string}
   */
  this.uid_staff = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_StaffElementModel);

/**
 * @inheritDoc
 */
Wl_Staff_StaffElementModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"post":{"post":true}},"dl_end":{"post":{"post":true}},"dl_start":{"post":{"post":true}},"id_gender":{"post":{"post":true}},"id_role":{"post":{"post":true}},"is_employ":{"post":{"post":true}},"is_microsite":{"post":{"post":true}},"is_password_set_disable":{"post":{"post":true}},"is_uid":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_role":{"post":{"post":true}},"k_city":{"post":{"post":true}},"k_location":{"post":{"post":true}},"k_staff":{"post":{"get":true,"result":true}},"text_address":{"post":{"post":true}},"text_biography":{"post":{"post":true}},"text_city":{"post":{"post":true}},"text_email":{"post":{"post":true}},"text_first_name":{"post":{"post":true}},"text_last_name":{"post":{"post":true}},"text_password":{"post":{"post":true}},"text_password_confirm":{"post":{"post":true}},"text_phone_home":{"post":{"post":true}},"text_phone_mobile":{"post":{"post":true}},"text_position":{"post":{"post":true}},"text_postal":{"post":{"post":true}},"uid_staff":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Staff_StaffElementModel.instanceGet
 * @param {string} k_business The key of the business in which the staff member is being created or edited. This field is required.
 * @param {?string} uid_staff User key of a staff member. This is the supported request identifier for staff update operations. Value is normalized into {@link Wl_Staff_StaffElementModel} in `post()`.
 * @returns {Wl_Staff_StaffElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Update or create staff.
 *
 * Creates a new staff member or updates an existing one in the business. When creating,
 * a new user account is provisioned if no matching email exists. When updating, the target
 * staff member must already belong to the business. Role, location, contact details,
 * employment dates, and custom profile fields can all be set in a single call.
 *
 * @function
 * @name Wl_Staff_StaffElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
