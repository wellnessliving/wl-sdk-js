/**
 * This endpoint gets information about a client profile. Alternatively, this endpoint can also edit or create a profile.
 *
 * The GET method returns the profile fields for a specified user or a blank set of fields for a new user of a
 * given business:
 *
 * * If the GET method is used with a valid UID greater than 0, the method will return a list of fields with the
 *   values of the specified user.
 * * If the GET method is used with a UID set to 0, a list of profile fields will be returned for the specified
 *   business. A user in WellnessLiving can be in multiple businesses. There are some fields common among all business
 *   and others specific to one business.
 *
 * The type of field is described in `id_field_type`, which will be one of the {@link RsFieldTypeSid} constants.
 * Some fields have a general type which can have a specific format:
 * * Address - An array containing the following keys: `k_city`, `s_address`, `s_city`, and `s_postal`.
 * The `k_city` value can be retrieved via the {@link Core_Geo_ComboboxModel} endpoint. The following is an example address array:
 *
 * * Birthday -  A string containing the date in MySQL format (for example, `1987-06-05`).
 * * Email Address - An array containing the following keys:
 * <dl>
 *   <dt>bool <var>is_inherit</var></dt>
 *   <dd>Whether the user shares the email address with another user.
 *   This is typically done for children who use their parent’s email (`is_inherit=1`).
 *   In general, most other cases use (`is_inherit=0`).</dd>
 *   <dt>bool <var>s_mail</var></dt>
 *   <dd>The new email address.</dd>
 * </dl>
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_staff";

  /**
   * A list of fields to change. Values are the new field values. Specific values depend on an individual field type.
   * Some fields may be strings while others are arrays. If a composite field is changed, all fields should be specified
   * (for example, if you change your address, you'll need to specify the city). Keys are the `k_field` values.
   *
   * @put post
   * @type {{}}
   */
  this.a_change = [];

  /**
   * List of errors.
   * <tt>null</tt> if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?{}}
   */
  this.a_error = null;

  /**
   * Information for user's photo.
   * It is necessary to save simultaneously user and photo in staff member mode.
   *
   * Attention!
   * Data from this field is taken directly from a POST somewhere in the depths of the photo upload.
   *
   * @post post
   * @type {{}}
   */
  this.a_image_upload = [];

  /**
   * A copy of the {@link Wl_Profile_Edit_EditModel.a_change}.
   * This is used for POST requests when creating a new user.
   *
   * @post post
   * @type {{}}
   */
  this.a_new = [];

  /**
   * @typedef {{}} Wl_Profile_Edit_EditModel_a_structure
   * @property {*} id_field_general The ID of a system field. One of {@link RsFieldGeneralSid} constants. This value is only defined if <tt>id_field_type</tt>={@link RsFieldTypeSid.GENERAL}.
   * @property {boolean} is_require Indicates whether the value of this field is required. This will be `1` if required or `0` if the field is optional.
   * @property {number} id_field_type The type of field. This is one of the {@link RsFieldTypeSid} constants.
   * @property {string} k_field The field ID (<tt>k_field</tt>). A copy of the key of this array element.
   * @property {string} s_title The title of the field.
   * @property {*} x_value The value of the field. This value is defined by individual fields.
   */

  /**
   * The values and structure of all fields. Array keys are field IDs (`k_field`).
   * Array values are the field values. The array has the following structure:
   * <dl>
   *   <dt>int [<var>id_field_general</var>]</dt>
   *   <dd>The ID of a system field. One of {@link RsFieldGeneralSid} constants. This value is only defined if <var>id_field_type</var>={@link RsFieldTypeSid.GENERAL}.</dd>
   *   <dt>bool <var>is_require</var></dt>
   *   <dd>Indicates whether the value of this field is required. This will be `1` if required or `0` if the field is optional.</dd>
   *   <dt>int <var>id_field_type</var></dt>
   *   <dd>The type of field. This is one of the {@link RsFieldTypeSid} constants.</dd>
   *   <dt>string <var>k_field</var></dt>
   *   <dd>The field ID (<var>k_field</var>). A copy of the key of this array element.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The title of the field.</dd>
   *   <dt>mixed <var>x_value</var></dt>
   *   <dd>The value of the field. This value is defined by individual fields.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Edit_EditModel_a_structure[]}
   */
  this.a_structure = undefined;

  /**
   * ID of registration source. One of {@link Wl_Profile_RegisterSourceSid} constants.
   * If empty {@link Wl_Profile_RegisterSourceSid.SELF} is used.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_register_source = 0;

  /**
   * Indicates whether to display the full profile edit form or the short version.
   * This is assumed to be used only in user registration mode.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_short = 0;

  /**
   * <tt>true</tt> to sing in a created user; <tt>false</tt> to not sign in.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sing_in = false;

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
   * The key of the business where you're editing.
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
   * Exception class name.
   * <tt>null</tt> if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.class = null;

  /**
   * Code of the error.
   * <tt>null</tt> if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.code = null;

  /**
   * Status of the request.
   * <tt>null</tt> if there was no mistake.
   *
   * @post result
   * @type {?string}
   */
  this.status = null;

  /**
   * Error message.
   * <tt>null</tt> if there was no mistake.
   *
   * @get result
   * @post result
   * @type {?string}
   */
  this.message = null;

  /**
   * The password to be set for a new user.
   *
   * @post post
   * @type {string}
   */
  this.text_password = "";

  /**
   * The key of the user to edit.
   *
   * If empty, then an empty form will be displayed to add a new user.
   *
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_EditModel.prototype.config=function()
{
  return {"a_field": {"a_change": {"put": {"post": true}},"a_error": {"get": {"result": true},"post": {"result": true}},"a_image_upload": {"post": {"post": true}},"a_new": {"post": {"post": true}},"a_structure": {"get": {"result": true}},"id_register_source": {"get": {"get": true},"post": {"get": true}},"is_short": {"get": {"result": true},"post": {"get": true}},"is_sing_in": {"post": {"post": true}},"is_staff": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"class": {"get": {"result": true},"post": {"result": true}},"code": {"get": {"result": true},"post": {"result": true}},"status": {"post": {"result": true}},"message": {"get": {"result": true},"post": {"result": true}},"text_password": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_EditModel.instanceGet
 * @param {string} k_business The key of the business where you're editing. An empty value will return the system-wide fields.
 * @param {string} uid The key of the user to edit. If empty, then an empty form will be displayed to add a new user.
 * @param {boolean} is_staff Indicates whether to display the form as a user or as a staff member. Staff members may have access to different fields than the user.
 * @returns {Wl_Profile_Edit_EditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */