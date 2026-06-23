/**
 * Returns current user profile information.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_EditByTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_staff,id_register_source";

  /**
   * A list of fields to change. Values are the new field values. Specific values depend on an individual field type.
   * Some fields may be strings while others are arrays. If a composite field is changed, all fields should be specified
   * (for example, if you change your address, you'll need to specify the city). Keys are the `k_field` values.
   *
   * @put post
   * @type {*[]}
   */
  this.a_change = undefined;

  /**
   * @typedef {{}} Wl_Profile_Edit_EditByTokenModel_a_error_list
   * @property {string} code Error code identifying the type of validation failure.
   * @property {string} field Field identifier that caused the error.
   * @property {string} message Human-readable error message.
   */

  /**
   * List of validation errors. `null` if no error occurred.
   * Each element:
   *
   * @get result
   * @post result
   * @type {?Wl_Profile_Edit_EditByTokenModel_a_error_list[]}
   */
  this.a_error_list = null;

  /**
   * @typedef {{}} Wl_Profile_Edit_EditByTokenModel_a_family_relation
   * @property {number} id_family_relation Relation type between two relatives.
   * @property {boolean} is_relative_pay `true` if the relative will pay for this user; `false` or absent otherwise.
   * @property {string} uid_from User key of the relative (must be the currently logged-in user).
   */

  /**
   * Family relation data for the newly created user.
   * `null` if no family relation is required:
   *
   * @post post
   * @type {?Wl_Profile_Edit_EditByTokenModel_a_family_relation}
   */
  this.a_family_relation = null;

  /**
   * Information for user's photo.
   * It is necessary to save simultaneously user and photo in staff member mode.
   *
   * Attention!
   * Data from this field is taken directly from a POST somewhere in the depths of the photo upload.
   *
   * @post post
   * @type {string}
   */
  this.a_image_upload = "";

  /**
   * List of intent identifiers. Each element is one of {@link Wl_Login_Member_Intents_MemberIntentsSid} constants.
   *
   * Available only for leads added by CAASI agent.
   *
   * @post post
   * @put post
   * @type {number[]}
   */
  this.a_intents = undefined;

  /**
   * A copy of the [EditApi](/Wl/Profile/Edit/Edit.json).
   * This is used for POST requests when creating a new user.
   *
   * @post post
   * @type {*[]}
   */
  this.a_new = undefined;

  /**
   * @typedef {{}} Wl_Profile_Edit_EditByTokenModel_a_phone_inherit
   * @property {boolean} is_phone_inherit Indicates weather to inherit phone numbers from relative or not. `1` if phone inheritance is needed, '0' otherwise.
   * @property {string} text_relative Relative's name.
   * @property {string} uid_relative User key of relative.
   */

  /**
   * An array contained with information about phone inheritance.
   * The array has the following structure:
   *
   * @get result
   * @post post
   * @put post
   * @type {Wl_Profile_Edit_EditByTokenModel_a_phone_inherit}
   */
  this.a_phone_inherit = undefined;

  /**
   * @typedef {{}} Wl_Profile_Edit_EditByTokenModel_a_structure
   * @property {number} id_field_general List of general fields in user's profile.
   * @property {number} id_field_type Possible types of the custom fields: text, checkbox, radio buttons, etc.
   * @property {boolean} is_require Indicates whether the value of this field is required. This will be `1` if required or `0` if the field is optional.
   * @property {string} k_field The field ID (`k_field`). A copy of the key of this array element.
   * @property {string} s_title The title of the field.
   * @property {string} x_value The value of the field. This value is defined by individual fields.
   */

  /**
   * The values and structure of all fields. Array keys are field IDs (`k_field`).
   * Array values are the field values. The array has the following structure:
   *
   * @get result
   * @type {Wl_Profile_Edit_EditByTokenModel_a_structure[]}
   */
  this.a_structure = undefined;

  /**
   * Whether current user can change password of the given user or not.
   * If client is part of multiple businesses, then staff of the business can only request reset of the password,
   * but cannot change it.
   *
   * @get result
   * @type {boolean}
   */
  this.can_password_change = undefined;

  /**
   * ID of source mode. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @see Wl_Mode_ModeSid
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * Registration source ID.
   * One of {@link Wl_Profile_RegisterSourceSid} constants.
   *
   * Used only to register new clients.
   * * If the client is already authorized, the field value will not be used.
   * * If the client is not authorized and no value is set, {@link Wl_Profile_RegisterSourceSid} will be used.
   *
   * @get get
   * @post get
   * @put get
   * @see Wl_Profile_RegisterSourceSid
   * @type {?number}
   */
  this.id_register_source = null;

  /**
   * `true` if the A2P 10DLC registration feature is enabled for this business, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_a2p = undefined;

  /**
   * Whether the address be inherited.
   * `true` if address inherit, `false` to remove inheritance.
   * `null` if not explicitly set (PUT only: preserves the current state).
   *
   * @get result
   * @post get
   * @put get
   * @type {?boolean}
   */
  this.is_address_inherit = null;

  /**
   * `true` to throw an exception in a case of validation error; `false` to not throw.
   *
   * @post post
   * @type {boolean}
   */
  this.is_exception_throw = false;

  /**
   * Indicates whether to display the full profile edit form or the short version.
   * This is assumed to be used only in user registration mode.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_short = false;

  /**
   * This will be `true` to sign in a created user. Otherwise, this will be `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sing_in = false;

  /**
   * `true` - user agreed to receive marketing SMS;
   * `false` - otherwise.
   *
   * Only matters if [EditApi](/Wl/Profile/Edit/Edit.json) is `true`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sms_subscription_marketing = false;

  /**
   * `true` - user was shown checkboxes to subscribe to marketing and transactional sms messages.
   *   This means we need to modify his subscription based on the values in these fields.
   * `false` - otherwise. This means we should not change subscription settings.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sms_subscription_presented = false;

  /**
   * `true` - user agreed to receive transactional SMS;
   * `false` - otherwise.
   *
   * Only matters if [EditApi](/Wl/Profile/Edit/Edit.json) is `true`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sms_subscription_transactional = false;

  /**
   * Indicates whether to display the form as a user or as a staff member.
   * Staff members may have access to different fields than the user.
   *
   * @get get
   * @post get
   * @put get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * The key of the business you're editing.
   *
   * An empty value will return the system-wide fields.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the lead source.
   *
   * `null` if not defined.
   *
   * When creating or editing a user:
   * `LEAD_SOURCE_REPLACE_NONE` if Lead Source is to be unselected for the user.
   *
   * @get result
   * @post get
   * @put get
   * @type {?string}
   */
  this.k_lead_source = null;

  /**
   * Exception class name.
   * `null` if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.s_class = null;

  /**
   * Code of the error.
   * `null` if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.s_code = null;

  /**
   * Status of the request.
   * `null` if there was no mistake.
   *
   * @post result
   * @type {?string}
   */
  this.s_status = null;

  /**
   * Compound key delimited with a colon. First part is the business key where the selected client exists.
   * Second part is the uid of the already existing user we want to add. Empty if a non-existent client is being added.
   *
   * @post get
   * @type {string}
   */
  this.text_business_uid_key = "";

  /**
   * Error message.
   * `null` if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.text_message = null;

  /**
   * The password to be set for a new user.
   *
   * @post post
   * @type {string}
   */
  this.text_password = "";

  /**
   * The security token.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * The key of the user to edit.
   *
   * If empty, an empty form will be displayed to add a new user.
   *
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.uid = "";

  /**
   * The UID of an existing user in another business to add to the current business.
   *
   * @post get
   * @type {string}
   */
  this.uid_existed = "";

  /**
   * UID of the user, whose address was inherited by the existing client we want to add.
   * Empty if non-existent user is being added or user to add is the one, whose address is inherited.
   * `null` If the address is not inherited.
   *
   * @get result
   * @post get
   * @put get
   * @type {?string}
   */
  this.uid_inherit_address = null;

  /**
   * UID of the user, whose email was inherited by the existing client we want to add.
   * Empty if non-existent user is being added or user to add is the one, whose email is inherited.
   *
   * @post get
   * @type {string}
   */
  this.uid_relative_key = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_EditByTokenModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_EditByTokenModel.prototype.config=function()
{
  return {"a_field":{"a_change":{"put":{"post":true}},"a_error_list":{"get":{"result":true},"post":{"result":true}},"a_family_relation":{"post":{"post":true}},"a_image_upload":{"post":{"post":true}},"a_intents":{"post":{"post":true},"put":{"post":true}},"a_new":{"post":{"post":true}},"a_phone_inherit":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"a_structure":{"get":{"result":true}},"can_password_change":{"get":{"result":true}},"id_mode":{"post":{"get":true}},"id_register_source":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"is_a2p":{"get":{"result":true}},"is_address_inherit":{"get":{"result":true},"post":{"get":true},"put":{"get":true}},"is_exception_throw":{"post":{"post":true}},"is_short":{"get":{"result":true},"post":{"get":true}},"is_sing_in":{"post":{"post":true}},"is_sms_subscription_marketing":{"post":{"post":true}},"is_sms_subscription_presented":{"post":{"post":true}},"is_sms_subscription_transactional":{"post":{"post":true}},"is_staff":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_lead_source":{"get":{"result":true},"post":{"get":true},"put":{"get":true}},"s_class":{"get":{"result":true},"post":{"result":true}},"s_code":{"get":{"result":true},"post":{"result":true}},"s_status":{"post":{"result":true}},"text_business_uid_key":{"post":{"get":true}},"text_message":{"get":{"result":true},"post":{"result":true}},"text_password":{"post":{"post":true}},"text_token":{"get":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"uid_existed":{"post":{"get":true}},"uid_inherit_address":{"get":{"result":true},"post":{"get":true},"put":{"get":true}},"uid_relative_key":{"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_EditByTokenModel.instanceGet
 * @param {string} k_business The key of the business you're editing. An empty value will return the system-wide fields.
 * @param {string} uid The key of the user to edit. If empty, an empty form will be displayed to add a new user.
 * @param {boolean} is_staff Indicates whether to display the form as a user or as a staff member. Staff members may have access to different fields than the user.
 * @param {?number} id_register_source Registration source ID. One of {@link Wl_Profile_RegisterSourceSid} constants. Used only to register new clients. * If the client is already authorized, the field value will not be used. * If the client is not authorized and no value is set, {@link Wl_Profile_RegisterSourceSid} will be used.
 * @returns {Wl_Profile_Edit_EditByTokenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns current user profile information.
 *
 * Returns the profile field definitions and current values for the specified user, or an empty
 * structure when creating a new account. Used to populate the profile edit form with the
 * correct fields, validation rules, and inheritance options for the business.
 *
 * @function
 * @name Wl_Profile_Edit_EditByTokenModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates a new user.
 *
 * Registers a new user in the business using the submitted profile field values, enforces
 * IP-based registration rate limiting, and handles family relations and phone or address
 * inheritance. Returns the identifier of the newly created account.
 *
 * @function
 * @name Wl_Profile_Edit_EditByTokenModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates values of profile fields.
 *
 * Saves the updated profile field values for the existing user, propagates phone and address
 * inheritance changes, triggers relevant notifications, and re-indexes the user for search.
 *
 * @function
 * @name Wl_Profile_Edit_EditByTokenModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
