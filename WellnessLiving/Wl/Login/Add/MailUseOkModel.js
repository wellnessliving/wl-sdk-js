/**
 * An endpoint that registers an existing user in the specified Enterprise Headquarters account.
 *
 * This endpoint isn't applicable for users who are already members of the business. After a profile is edited, there can
 * be a delay while the data replicates to system caches. As a result, you may see a 'profile-field-empty' status code. In most
 * cases, this delay is less than 20 seconds.
 *
 * For Enterprise Cloud in WellnessLiving, clients can only be members in one Enterprise Location.
 * In all other Enterprise Locations, they'll be treated as travelers in the system.
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
   * @property {string} s_field The name of the field missing information.
   * Given in the format `k_field.name`.
   */

  /**
   * The list of fields with missing information.
   * Each element is an array containing the following data:
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
   *     The name of the field missing information.
   *     Given in the format `k_field.name`.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Login_Add_MailUseOkModel_a_error}
   */
  this.a_error = undefined;

  /**
   * This value is `true` if this user is a lead. `false` if otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_lead = false;

  /**
   * The business key used internally by WellnessLiving.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The Lead Capture Widget skin key. This is used only if a lead was added.
   *
   * @post post
   * @type {string}
   */
  this.k_skin = "";

  /**
   * The result code of the request.
   *
   * @post result
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * The result message of the request.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  /**
   * The user key.
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