/**
 * An endpoint that retrieves information about a WellnessLiving user.
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
   * @typedef {{}} Wl_User_Info_UserInfoModel_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} url_photo The URL of the photo.
   */

  /**
   * Information about the user's photo. The information returned has the following structure:<dl>
   *   <dt>int <var>i_height</var></dt>
   *   <dd>The height of the photo.</dd>
   *
   *   <dt>int <var>i_width</var></dt>
   *   <dd>The width of the photo.</dd>
   *
   *   <dt>string <var>url_photo</var></dt>
   *   <dd>The URL of the photo.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_User_Info_UserInfoModel_a_photo}
   */
  this.a_photo = undefined;

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
   * The ID of the user's gender. One of the {@link Wl_Gender_GenderSid} constants.
   *
   * This will be `null` if the gender isn't set yet.
   *
   * @get result
   * @type {number}
   */
  this.id_gender = undefined;

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
  this.k_business = "0";

  /**
   * The key of the login type. The login type describes the user's client type in this business.
   *
   * @get result
   * @type {string}
   */
  this.k_login_type = undefined;

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
   * is set by the business and separate from the <var>uid</var> value.
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
   * The key of the user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

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
  return {"a_field": {"a_photo": {"get": {"result": true}},"dt_add": {"get": {"result": true}},"dt_birth": {"get": {"result": true}},"id_gender": {"get": {"result": true}},"is_customer_new": {"get": {"result": true}},"is_traveller": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_login_type": {"get": {"result": true}},"s_first_name": {"get": {"result": true}},"s_last_name": {"get": {"result": true}},"s_mail": {"get": {"result": true}},"s_member": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_photo": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserInfoModel.instanceGet
 * @param {string} uid The key of the user.
 * @param {string} k_business The key of the business. This may be empty if system-wide information is needed.
 * @returns {Wl_User_Info_UserInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */