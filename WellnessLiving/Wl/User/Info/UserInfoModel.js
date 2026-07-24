/**
 * Retrieves information about user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Info_UserInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_custom_field
   * @property {string} k_field Field key.
   * @property {string} text_title Name of the field. Will be `null` for general fields. Their titles are static.
   * @property {string} text_value Value of the field. This is the key of the selected item for `select` and `radio` elements.
   * @property {string} text_value_title Title of the selected option for `select` and `radio` elements. Unused for other elements.
   */

  /**
   * List of the custom user fields. Each value is:
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_custom_field[]}
   */
  this.a_custom_field = undefined;

  /**
   * List of member groups that the user belongs to.
   *
   * @get result
   * @type {string[]}
   */
  this.a_member_group = undefined;

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} url_photo The URL of the photo.
   */

  /**
   * Information about the user's photo. The information returned has the following structure:
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_photo}
   */
  this.a_photo = undefined;

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_result_list_a_custom_field
   * @property {string} k_field Field key.
   * @property {string} text_title Name of the field. Will be `null` for general fields. Their titles are static.
   * @property {string} text_value Value of the field.
   */

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_result_list_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} url_photo The URL of the photo.
   */

  /**
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_result_list
   * @property {Wl_User_Info_UserInfoModel_a_result_list_a_custom_field} a_custom_field List of the custom user fields. Each value is:
   * @property {string[]} a_member_group List of member groups that the user belongs to.
   * @property {Wl_User_Info_UserInfoModel_a_result_list_a_photo} a_photo Information about the user's photo.
   * @property {string} dt_add The date the user was added, given in UTC time.
   * @property {string} dt_birth The user's birthday. This will be `null` if the birthday isn't set yet.
   * @property {number} id_gender The ID of the user's gender. One of the {@link AGenderSid} constants.
   * @property {boolean} is_customer_new This will be `true` if the user has never made purchases or reservations in this business. Otherwise, this will be `false`.
   * @property {boolean} is_traveller This will be `true` if the user is a traveler. A traveler is someone whose home location isn't the current location in the Enterprise business.
   * @property {string} k_business The key of the business. This may be empty if system-wide information is needed.
   * @property {string} k_login_type The key of the login type. The login type describes the user's client type in this business.
   * @property {string} s_first_name The user's first name.
   * @property {string} s_last_name The user's last name.
   * @property {string} s_mail The user's email address.
   * @property {string} s_member The user's member ID in the business. Also referred to as the client ID in the client's profile. This value is set by the business and separate from the `uid` value.
   * @property {string} s_phone The user's phone number.
   * @property {string} s_phone_home The user's home phone number.
   * @property {string} s_phone_work The user's work phone number.
   * @property {string} uid The key of the user.
   * @property {string} url_photo The URL for the user's photo.
   */

  /**
   * List of user's data.
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_result_list[]}
   */
  this.a_result_list = undefined;

  /**
   * A list of user keys.
   *
   * @get get
   * @type {string[]}
   */
  this.a_user_list = undefined;

  /**
   * Whether the user can purchase introductory offers.
   *
   * `true` if user can purchase introductory offers, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_introductory = undefined;

  /**
   * The date the user was added, given in UTC time.
   *
   * @get result
   * @type {string}
   */
  this.dt_add = undefined;

  /**
   * The user's birthday. This will be `null` if the birthday isn't set yet.
   *
   * @get result
   * @type {string}
   */
  this.dt_birth = undefined;

  /**
   * Whether client's login type has a discount.
   * `true` - login type has a discount, `false` - otherwise.
   *
   * This will be `null` if a client has no assigned login type.
   *
   * @get result
   * @type {?boolean}
   */
  this.has_discount = null;

  /**
   * The ID of the user's gender. One of the {@link AGenderSid} constants.
   *
   * This will be `null` if the gender isn't set yet.
   *
   * @get result
   * @see AGenderSid
   * @type {number}
   */
  this.id_gender = undefined;

  /**
   * This will be `true` if the user has Google Calendar linked to their account; otherwise, `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_calendar_google = undefined;

  /**
   * This will be `true` if the user has Microsoft Calendar linked to their account; otherwise, `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_calendar_microsoft = undefined;

  /**
   * This will be `true` if the user has never made purchases or reservations in this business.
   * Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_customer_new = undefined;

  /**
   * This will be `true` if the user is a traveler. A traveler is someone whose home location isn't the current location
   * in the Enterprise business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * The key of the business.
   * This may be empty if system-wide information is needed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * City key.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {?string}
   */
  this.k_city = null;

  /**
   * The key of the login type. The login type describes the user's client type in this business.
   *
   * @get result
   * @type {string}
   */
  this.k_login_type = undefined;

  /**
   * `true` to ignore cache and load information from the database directly.
   * `false` - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.not_cached = false;

  /**
   * The user's first name.
   *
   * @get result
   * @type {string}
   */
  this.s_first_name = undefined;

  /**
   * The user's last name.
   *
   * @get result
   * @type {string}
   */
  this.s_last_name = undefined;

  /**
   * The user's email address.
   *
   * @get result
   * @type {string}
   */
  this.s_mail = undefined;

  /**
   * The user's member ID in the business. Also referred to as the client ID in the client's profile. This value
   * is set by the business and separate from the `uid` value.
   *
   * @get result
   * @type {string}
   */
  this.s_member = undefined;

  /**
   * The user's phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * The user's home phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone_home = undefined;

  /**
   * The user's work phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone_work = undefined;

  /**
   * Address inside a city.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {?string}
   */
  this.text_address = null;

  /**
   * City name.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {?string}
   */
  this.text_city = null;

  /**
   * Login type title.
   * Empty if a client has no client type assigned.
   *
   * @get result
   * @type {string}
   */
  this.text_login_type = undefined;

  /**
   * Postal code.
   *
   * `null` if "address" field is disabled in the business.
   *
   * @get result
   * @type {?string}
   */
  this.text_postal = null;

  /**
   * The key of the user.
   *
   * @get get,result
   * @type {string}
   */
  this.uid = "";

  /**
   * The URL for the user's photo.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Info_UserInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Info_UserInfoModel.prototype.config=function()
{
  return {"a_field":{"a_custom_field":{"get":{"result":true}},"a_member_group":{"get":{"result":true}},"a_photo":{"get":{"result":true}},"a_result_list":{"get":{"result":true}},"a_user_list":{"get":{"get":true}},"can_introductory":{"get":{"result":true}},"dt_add":{"get":{"result":true}},"dt_birth":{"get":{"result":true}},"has_discount":{"get":{"result":true}},"id_gender":{"get":{"result":true}},"is_calendar_google":{"get":{"result":true}},"is_calendar_microsoft":{"get":{"result":true}},"is_customer_new":{"get":{"result":true}},"is_traveller":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_city":{"get":{"result":true}},"k_login_type":{"get":{"result":true}},"not_cached":{"get":{"get":true}},"s_first_name":{"get":{"result":true}},"s_last_name":{"get":{"result":true}},"s_mail":{"get":{"result":true}},"s_member":{"get":{"result":true}},"s_phone":{"get":{"result":true}},"s_phone_home":{"get":{"result":true}},"s_phone_work":{"get":{"result":true}},"text_address":{"get":{"result":true}},"text_city":{"get":{"result":true}},"text_login_type":{"get":{"result":true}},"text_postal":{"get":{"result":true}},"uid":{"get":{"get":true,"result":true}},"url_photo":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserInfoModel.instanceGet
 * @param {string} uid The key of the user.
 * @param {string} k_business The key of the business. This may be empty if system-wide information is needed.
 * @returns {Wl_User_Info_UserInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about user.
 *
 * Returns profile data for a WellnessLiving user, including name, email, phone, photo, gender,
 * login type, custom profile fields, member groups, and calendar integration status. Supports
 * single-user mode and batch mode for loading multiple profiles in one request.
 *
 * @function
 * @name Wl_User_Info_UserInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
