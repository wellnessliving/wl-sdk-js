/**
 * Registers existing user in current business.
 * If user already member of current business then do nothing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Add_MailUseOkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Add_MailUseOkModel_a_error
   * @property {string} html_message The error message.
   * @property {string} s_field The key and name of the field which is missing information. Given in the format 'key.name'. The key is <tt>k_field</tt>, primary key of {@link RsFieldSql}.
   */

  /**
   * A list of fields missing information.
   * <dl>
   *   <dt>
   *     string <var>html_message</var>
   *   </dt>
   *   <dd>
   *     The error message.
   *   </dd>
   *   <dt>
   *     string <var>s_field</var>
   *   </dt>
   *   <dd>
   *     The key and name of the field which is missing information. Given in the format 'key.name'. The key is <tt>k_field</tt>, primary key of {@link RsFieldSql}.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Login_Add_MailUseOkModel_a_error}
   */
  this.a_error = undefined;

  /**
   * Whether this is a lead. <tt>true</tt> if this is the lead. <tt>false</tt> otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_lead = false;

  /**
   * Business key. Primary key in the {@link RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Lead Widget skin key used to add the lead. Primary key in the {@link RsSkinSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_skin = "";

  /**
   * The status code, will be mail-success on success.
   *
   * @post result
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * The status message, it will be 'ok' on success.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  /**
   * User key. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Add_MailUseOkModel);

/**
 * @inheritDoc
 */
Wl_Login_Add_MailUseOkModel.prototype.config=function()
{
  return {"a_field": {"a_error": {"post": {"result": true}},"is_lead": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_skin": {"post": {"post": true}},"s_code": {"post": {"result": true}},"text_message": {"post": {"result": true}},"uid": {"post": {"post": true}}}};
};