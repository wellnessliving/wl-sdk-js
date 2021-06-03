/**
 * Retrieves information about Wellnessliving user.
 *
 * This model is generated automatically based on API.
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
   * Information about user's photo.
   *
   * @get result
   * @type {{}}
   */
  this.a_photo = undefined;

  /**
   * Day when user has become business member.
   *
   * @get result
   * @type {string}
   */
  this.dt_add = undefined;

  /**
   * Birthday.
   *
   * @get result
   * @type {string}
   */
  this.dt_birth = undefined;

  /**
   * User's gender. One of {@link GenderSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_gender = undefined;

  /**
   * Whether user is new customer.
   *
   * @get result
   * @type {boolean}
   */
  this.is_customer_new = undefined;

  /**
   * <tt>true</tt> is user is traveller in specified business; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

  /**
   * ID of business.
   * May be empty if we need system-wide information.
   *
   * Primary key in {@link RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User's login type. Primary key in {@link \Wl\Login\Type\Sql} table. Can be <tt>0</tt> for prospects.
   *
   * @get result
   * @type {string}
   */
  this.k_login_type = undefined;

  /**
   * User first name.
   *
   * @get result
   * @type {string}
   */
  this.s_first_name = undefined;

  /**
   * User last name.
   *
   * @get result
   * @type {string}
   */
  this.s_last_name = undefined;

  /**
   * User email address.
   *
   * @get result
   * @type {string}
   */
  this.s_mail = undefined;

  /**
   * User member ID.
   *
   * @get result
   * @type {string}
   */
  this.s_member = undefined;

  /**
   * User phone number.
   *
   * @get result
   * @type {string}
   */
  this.s_phone = undefined;

  /**
   * ID of user.
   *
   * Primary key in {@link PassportLoginSql}.
   *
   * @get get
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

WlSdk_ModelAbstract.extend(Wl_User_Info_UserInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Info_UserInfoModel.prototype.config=function()
{
  return {"a_field": {"a_photo": {"get": {"result": true}},"dt_add": {"get": {"result": true}},"dt_birth": {"get": {"result": true}},"id_gender": {"get": {"result": true}},"is_customer_new": {"get": {"result": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_login_type": {"get": {"result": true}},"s_first_name": {"get": {"result": true}},"s_last_name": {"get": {"result": true}},"s_mail": {"get": {"result": true}},"s_member": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_photo": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserInfoModel.instanceGet
 * @param {string} uid ID of user. Primary key in {@link PassportLoginSql}.
 * @param {string} k_business ID of business. May be empty if we need system-wide information. Primary key in {@link RsBusinessSql}.
 * @returns {Wl_User_Info_UserInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */