/**
 * Checks if specified email address is busy.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_Email_EditEmail67Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "is_backend,k_business,text_mail,uid_want";

  /**
   * List of business keys where a user is already a member.
   *
   * @get result
   * @type {string[]}
   */
  this.a_business_member_key = undefined;

  /**
   * @typedef {{}} Wl_Profile_Edit_Email_EditEmail67Model_a_user
   * @property {string} text_firstname First name.
   * @property {string} text_lastname Last name.
   * @property {string} text_phone Phone.
   * @property {string} url_photo URL to photo.
   */

  /**
   * Information about the user who occupies the specified email.
   * This will be empty if the email is free or if the rate limit has been reached.
   * Otherwise, has next keys:
   *
   * @get result
   * @type {Wl_Profile_Edit_Email_EditEmail67Model_a_user}
   */
  this.a_user = undefined;

  /**
   * Shows, whether client was registered in the business: `true` if user was added to the business,
   * `false` if staff only received temporary access, because mandatory fields must be specified first.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.is_added = undefined;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If `true`, user is already a member of current business, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_current_member = undefined;

  /**
   * If `true`, then the number of requests has exceeded the rate limit. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_limit = undefined;

  /**
   * If `true`, user, who has the specified email, has password set, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_password_set = undefined;

  /**
   * If `true`, user, who has the specified email, is staff in current business, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff = undefined;

  /**
   * If `true`, user, who has the specified email, is staff in any business, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff_any_business = undefined;

  /**
   * If `true`, then the specified email is in use. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_use = undefined;

  /**
   * The business key where the check must be performed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The email address to be checked.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The key of user who has the specified email.
   * This will be `0` if the email is free or if the rate limit has been reached.
   *
   * @get result
   * @type {string}
   */
  this.uid_result = undefined;

  /**
   * The key of user whose email will be edited.
   * This will be `0` in the case of a new user creation.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_want = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_Email_EditEmail67Model);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_Email_EditEmail67Model.prototype.config=function()
{
  return {"a_field":{"a_business_member_key":{"get":{"result":true}},"a_user":{"get":{"result":true}},"is_added":{"get":{"result":true},"post":{"result":true}},"is_backend":{"get":{"get":true}},"is_current_member":{"get":{"result":true}},"is_limit":{"get":{"result":true}},"is_password_set":{"get":{"result":true}},"is_staff":{"get":{"result":true}},"is_staff_any_business":{"get":{"result":true}},"is_use":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"text_mail":{"get":{"get":true}},"uid_result":{"get":{"result":true}},"uid_want":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_Email_EditEmail67Model.instanceGet
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @param {string} k_business The business key where the check must be performed.
 * @param {string} text_mail The email address to be checked.
 * @param {string} uid_want The key of user whose email will be edited. This will be `0` in the case of a new user creation.
 * @returns {Wl_Profile_Edit_Email_EditEmail67Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks if specified email address is busy.
 *
 * Looks up whether the given email is already registered and returns user info, membership
 * status, staff flags, and password status if found; guest requests are subject to a per-IP
 * rate limit.
 *
 * @function
 * @name Wl_Profile_Edit_Email_EditEmail67Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds user to business.
 *
 * Registers the found user as a member of the specified business. If required profile fields
 * are missing, grants temporary access until the profile is completed. Sends a welcome
 * notification once the user is fully registered.
 *
 * @function
 * @name Wl_Profile_Edit_Email_EditEmail67Model.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
