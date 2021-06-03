/**
 * Retrieves information about WellnessLiving user.
 *
 * Can return public information about the staff.
 * To obtain full user information, you must have access to the requested user, otherwise there will be an access error.
 *
 * This model is generated automatically based on API.
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
   * @property {number} id_gender User's gender. One of {@link GenderSid} constants.
   * @property {string} k_staff User's key as staff member. Primary key in {@link \RsStaffSql} table.
   * @property {string} s_first_name User first name.
   * @property {string} s_last_name First letter of user last name.
   * @property {string} text_mail_client Client`s mail.
   * @property {string} text_mail_staff Staff`s mail.
   * @property {string} text_name_first_staff Staff`s first name.
   * @property {string} text_name_full_client Full client name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login. See
   * description of the {@link \Wl\User\Info\UserInfoAbstract::nameFullText()} method.
   * @property {string} text_name_full_staff Full staff name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login.
   * @property {string} text_name_last_staff Staff`s last name.
   * @property {string} url_photo User photo URL.
   */

  /**
   * List of information about users:
   * <dl>
   *   <dt>
   *     int <var>id_gender</var>
   *   </dt>
   *   <dd>
   *     User's gender. One of {@link GenderSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     User's key as staff member. Primary key in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_first_name</var>
   *   </dt>
   *   <dd>
   *     User first name.
   *   </dd>
   *   <dt>
   *     string <var>s_last_name</var>
   *   </dt>
   *   <dd>
   *     First letter of user last name.
   *   </dd>
   *   <dt>
   *     string <var>text_mail_client</var>
   *   </dt>
   *   <dd>
   *     Client`s mail.
   *   </dd>
   *   <dt>
   *     string <var>text_mail_staff</var>
   *   </dt>
   *   <dd>
   *     Staff`s mail.
   *   </dd>
   *   <dt>
   *     string <var>text_name_first_staff</var>
   *   </dt>
   *   <dd>
   *     Staff`s first name.
   *   </dd>
   *   <dt>
   *     string <var>text_name_full_client</var>
   *   </dt>
   *   <dd>
   *     Full client name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login. See
   *     description of the {@link \Wl\User\Info\UserInfoAbstract::nameFullText()} method.
   *   </dd>
   *   <dt>
   *     string <var>text_name_full_staff</var>
   *   </dt>
   *   <dd>
   *     Full staff name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login.
   *   </dd>`
   *   <dt>
   *     string <var>text_name_last_staff</var>
   *   </dt>
   *   <dd>
   *     Staff`s last name.
   *   </dd>
   *   <dt>
   *     string <var>url_photo</var>
   *   </dt>
   *   <dd>
   *     User photo URL.
   *   </dd>
   * </dl>
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
   * User's gender. One of {@link GenderSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_gender = undefined;

  /**
   * Key of business.
   *
   * Primary key in {@link RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User's key as staff member. Primary key in {@link \RsStaffSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * User first name.
   *
   * @get result
   * @type {string}
   */
  this.s_first_name = undefined;

  /**
   * First letter of user last name.
   *
   * @get result
   * @type {string}
   */
  this.s_last_name = undefined;

  /**
   * Client`s mail.
   *
   * @get result
   * @type {string}
   */
  this.text_mail_client = undefined;

  /**
   * Staff`s mail.
   *
   * @get result
   * @type {string}
   */
  this.text_mail_staff = undefined;

  /**
   * Staff`s first name.
   *
   * @get result
   * @type {string}
   */
  this.text_name_first_staff = undefined;

  /**
   * Full client name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login. See
   * description of the {@link \Wl\User\Info\UserInfoAbstract::nameFullText()} method.
   *
   * @get result
   * @type {string}
   */
  this.text_name_full_client = undefined;

  /**
   * Full staff name. User login is returned in a case neither first name, nor last name specified. An empty string is returned in a case neither first name, nor last name specified, nor login.
   *
   * @get result
   * @type {string}
   */
  this.text_name_full_staff = undefined;

  /**
   * Staff`s last name.
   *
   * @get result
   * @type {string}
   */
  this.text_name_last_staff = undefined;

  /**
   * List of users to get information for. Primary keys in {@link \PassportLoginSql} table. Serialized as JSON string.
   *
   * <tt>null</tt> for mode of single user.
   *
   * @post post
   * @type {?string}
   */
  this.text_uid = null;

  /**
   * Key of user.
   *
   * Primary key in {@link PassportLoginSql}.
   *
   * @get get,result
   * @type {string}
   */
  this.uid = "0";

  /**
   * User photo URL.
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
  return {"a_field": {"a_login": {"post": {"result": true}},"can_postcard": {"get": {"result": true}},"i_photo_height": {"get": {"get": true},"post": {"get": true}},"i_photo_width": {"get": {"get": true},"post": {"get": true}},"id_gender": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_staff": {"get": {"result": true}},"s_first_name": {"get": {"result": true}},"s_last_name": {"get": {"result": true}},"text_mail_client": {"get": {"result": true}},"text_mail_staff": {"get": {"result": true}},"text_name_first_staff": {"get": {"result": true}},"text_name_full_client": {"get": {"result": true}},"text_name_full_staff": {"get": {"result": true}},"text_name_last_staff": {"get": {"result": true}},"text_uid": {"post": {"post": true}},"uid": {"get": {"get": true,"result": true}},"url_photo": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Login_LoginModel.instanceGet
 * @param {string} uid Key of user. Primary key in {@link PassportLoginSql}.
 * @param {string} k_business Key of business. Primary key in {@link RsBusinessSql}.
 * @returns {Wl_Login_LoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */