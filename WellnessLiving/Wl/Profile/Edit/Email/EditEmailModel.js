/**
 * Entry point to check user's email.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Edit_Email_EditEmailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,text_mail,uid_want";

  /**
   * @typedef {{}} Wl_Profile_Edit_Email_EditEmailModel_a_user
   * @property {string} text_firstname First name.
   * @property {string} text_lastname Last name.
   * @property {string} text_phone Phone.
   * @property {string} url_photo URL to photo.
   */

  /**
   * Information about user who already occupies specified email. Empty array if email is free or if quantity of requests is exhausted. Otherwise has next keys:
   * <dl>
   *   <dt>
   *     string <var>text_firstname</var>
   *   </dt>
   *   <dd>
   *     First name.
   *   </dd>
   *   <dt>
   *     string <var>text_lastname</var>
   *   </dt>
   *   <dd>
   *     Last name.
   *   </dd>
   *   <dt>
   *     string <var>text_phone</var>
   *   </dt>
   *   <dd>
   *     Phone.
   *   </dd>
   *   <dt>
   *     string <var>url_photo</var>
   *   </dt>
   *   <dd>
   *     URL to photo.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Profile_Edit_Email_EditEmailModel_a_user}
   */
  this.a_user = undefined;

  /**
   * <tt>true</tt> - quantity of request is exhausted; <tt>false</tt> - otherwise. See {@link \Wl\Login\Member\MemberMail::mailUse()} for details.
   *
   * @get result
   * @type {boolean}
   */
  this.is_limit = undefined;

  /**
   * <tt>true</tt> - specified email is occupied; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_use = undefined;

  /**
   * Business primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Email to be checked.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * User who occupies specified email. Primary key in {@link \PaslortLoginSql} table. <tt>0</tt> if email is free or if quantity of requests is exhausted.
   *
   * @get result
   * @type {string}
   */
  this.uid_result = undefined;

  /**
   * User primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_want = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Edit_Email_EditEmailModel);

/**
 * @inheritDoc
 */
Wl_Profile_Edit_Email_EditEmailModel.prototype.config=function()
{
  return {"a_field": {"a_user": {"get": {"result": true}},"is_limit": {"get": {"result": true}},"is_use": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"text_mail": {"get": {"get": true}},"uid_result": {"get": {"result": true}},"uid_want": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Edit_Email_EditEmailModel.instanceGet
 * @param {string} k_business Business primary key in {@link \RsBusinessSql} table.
 * @param {string} text_mail Email to be checked.
 * @param {string} uid_want User primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Profile_Edit_Email_EditEmailModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */