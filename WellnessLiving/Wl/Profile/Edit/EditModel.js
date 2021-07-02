/**
 * Allows to retrieve and edit user profile information.
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
   * Field values to save.
   *
   * Keys are field IDs.
   *
   * Values are new field values. Specific values depend on individual type of field. For some fields, there may be a
   * string, for some fields there may be an array.
   *
   * If a composite field is changed, all fields should be specified (for example, if you change address you should
   * obligatorily specify city).
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
   * Contains all form data.
   * Has the same structure as {@link EditApi::$a_change}.
   * Used for POST request when creating a new user.
   *
   * @post post
   * @type {{}}
   */
  this.a_new = [];

  /**
   * Structure and values of profile fields. See result of {@link \Wl\Profile\Field\FieldList::dataGet()} for description of this array. Actual values of fields are current values for the user (loaded
   * with {@link FieldList::loadDb()}).
   *
   * @get result
   * @type {{}}
   */
  this.a_structure = undefined;

  /**
   * The form display mode. Short or full.
   * Assumes use only in user registration mode.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_short = 0;

  /**
   * How we want to see this page. As a staff or as a user.
   *
   * @get get
   * @post get
   * @put get
   * @type {boolean}
   */
  this.is_staff = 0;

  /**
   * ID of a business to manipulate with.
   *
   * Empty value to manipulate with system-wide fields.
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
   * Password to be set for a new user.
   *
   * @post post
   * @type {string}
   */
  this.text_password = "";

  /**
   * ID of a user to manipulate with.
   *
   * If empty then an empty form will be displayed to add a new user.
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
  return {"a_field": {"a_change": {"put": {"post": true}},"a_error": {"get": {"result": true},"post": {"result": true}},"a_image_upload": {"post": {"post": true}},"a_new": {"post": {"post": true}},"a_structure": {"get": {"result": true}},"is_short": {"get": {"result": true},"post": {"get": true}},"is_staff": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"class": {"get": {"result": true},"post": {"result": true}},"code": {"get": {"result": true},"post": {"result": true}},"status": {"post": {"result": true}},"message": {"get": {"result": true},"post": {"result": true}},"text_password": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_EditModel.instanceGet
 * @param {string} k_business ID of a business to manipulate with. Empty value to manipulate with system-wide fields.
 * @param {string} uid ID of a user to manipulate with. If empty then an empty form will be displayed to add a new user.
 * @param {boolean} is_staff How we want to see this page. As a staff or as a user.
 * @returns {Wl_Profile_Edit_EditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */