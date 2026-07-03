/**
 * Retrieves information about user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Login_LoginModel_a_login
   * @property {number} id_gender String identifiers for gender.
   * @property {string} k_staff User's key as staff member.
   * @property {string} s_first_name User first name.
   * @property {string} s_last_name First letter of user last name.
   * @property {string} text_mail_client Client`s mail.
   * @property {string} text_mail_staff Staff`s mail.
   * @property {string} text_name_first_staff Staff's first name.
   * @property {string} text_name_full_client Full client name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login.
   * @property {string} text_name_full_staff Full staff name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login.
   * @property {string} text_name_last_staff Staff`s last name.
   * @property {string} uid_staff The user's UID as a staff member.
   * @property {string} url_photo User photo URL.
   */

  /**
   * List of information about users:
   *
   * @post result
   * @type {Wl_Login_LoginModel_a_login[]}
   */
  this.a_login = undefined;

  /**
   * Whether this user can send postcards.
   *
   * @get result
   * @type {boolean}
   */
  this.can_postcard = undefined;

  /**
   * Whether this user can send SMS. If `true` - user can send SMS, otherwise - `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.can_send_message = undefined;

  /**
   * The height of the requested photo.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.i_photo_height = 0;

  /**
   * The width of the requested photo.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.i_photo_width = 0;

  /**
   * String identifiers for gender.
   *
   * Values:
   * - 2 (`FEMALE`): Female gender.
   * - 1 (`MALE`): Male gender.
   * - 3 (`UNDEFINED`): Gender is undefined in cases where the user preferred not to identify their gender.
   *
   * @get result
   * @type {number}
   */
  this.id_gender = undefined;

  /**
   * Whether photo is uploaded.
   * `true` if photo is not uploaded, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_photo_empty = undefined;

  /**
   * The key of the business. Users can be in multiple businesses.
   * This can be left as `null` to retrieve system-wide information.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user's staff key for the specified business.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * The first name of the user.
   *
   * @get result
   * @type {string}
   */
  this.s_first_name = undefined;

  /**
   * The surname of the user.
   *
   * @get result
   * @type {string}
   */
  this.s_last_name = undefined;

  /**
   * The client`s mailing address.
   *
   * @get result
   * @type {string}
   */
  this.text_mail_client = undefined;

  /**
   * The staff member's mailing address.
   * This will be set if the user is a staff member ({@link Wl_Login_LoginModel.k_staff}).
   *
   * @get result
   * @type {string}
   */
  this.text_mail_staff = undefined;

  /**
   * The staff member's first name.
   * This will be set if the user is a staff member ({@link Wl_Login_LoginModel.k_staff}).
   *
   * @get result
   * @type {string}
   */
  this.text_name_first_staff = undefined;

  /**
   * The user's login name. This is returned in cases when neither the first name nor the last name have been specified.
   * An empty string is returned in cases where neither the first name, last name, nor login have been specified.
   *
   * @get result
   * @type {string}
   */
  this.text_name_full_client = undefined;

  /**
   * The staff member's full name.
   * The user login is returned in cases where neither the first name nor the last name have been specified.
   * An empty string is returned in cases where neither the first name, last name, nor login have been specified.
   * This will be set if the user is a staff member ({@link Wl_Login_LoginModel.k_staff}).
   *
   * @get result
   * @type {string}
   */
  this.text_name_full_staff = undefined;

  /**
   * The staff member's last name.
   * This will be set if the user is a staff member ({@link Wl_Login_LoginModel.k_staff}).
   *
   * @get result
   * @type {string}
   */
  this.text_name_last_staff = undefined;

  /**
   * List of users to get information for serialized as JSON string.
   *
   * `null` for mode of single user.
   *
   * @post post
   * @type {?string}
   */
  this.text_uid = null;

  /**
   * The key of the user.
   *
   * `null` on case when is walk-in client.
   *
   * @get get,result
   * @type {?string}
   */
  this.uid = null;

  /**
   * The user's UID as a staff member for the specified business.
   *
   * @get result
   * @type {?string}
   */
  this.uid_staff = null;

  /**
   * The URL where the user photo can be retrieved.
   *
   * @get result
   * @type {string}
   */
  this.url_photo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_LoginModel);

/**
 * @inheritDoc
 */
Wl_Login_LoginModel.prototype.config=function()
{
  return {"a_field":{"a_login":{"post":{"result":true}},"can_postcard":{"get":{"result":true}},"can_send_message":{"get":{"result":true}},"i_photo_height":{"get":{"get":true},"post":{"get":true}},"i_photo_width":{"get":{"get":true},"post":{"get":true}},"id_gender":{"get":{"result":true}},"is_photo_empty":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_staff":{"get":{"result":true}},"s_first_name":{"get":{"result":true}},"s_last_name":{"get":{"result":true}},"text_mail_client":{"get":{"result":true}},"text_mail_staff":{"get":{"result":true}},"text_name_first_staff":{"get":{"result":true}},"text_name_full_client":{"get":{"result":true}},"text_name_full_staff":{"get":{"result":true}},"text_name_last_staff":{"get":{"result":true}},"text_uid":{"post":{"post":true}},"uid":{"get":{"get":true,"result":true}},"uid_staff":{"get":{"result":true}},"url_photo":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Login_LoginModel.instanceGet
 * @param {?string} uid The key of the user. `null` on case when is walk-in client.
 * @param {string} k_business The key of the business. Users can be in multiple businesses. This can be left as `null` to retrieve system-wide information.
 * @returns {Wl_Login_LoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about user.
 *
 * Returns name, gender, photo URL, email, and staff details for the specified user within the given business.
 * Public staff information is returned even without profile access; full client details require access to the
 * user's profile.
 *
 * @function
 * @name Wl_Login_LoginModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Retrieves information about a list of users.
This is done via "post" method because only "post" allows large requests.
 *
 * Accepts a JSON-encoded array of user keys, validates each one, resolves staff and client roles, and returns
 * name, gender, photo URL, email, and staff details for every user in the list, respecting per-user profile access
 * rules.
 *
 * @function
 * @name Wl_Login_LoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
