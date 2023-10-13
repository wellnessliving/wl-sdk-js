/**
 * An endpoint that retrieves information about login types.
 *
 * A login type is basically a client type.
 * This information can be used to filter clients by their client type in the All Clients Report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Type_LoginTypeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Login_Type_LoginTypeModel_a_login_type_list
   * @property {boolean} is_member It will be `1` if the record contains a type of member.
   * It will be `0` if record contains some other type of client.
   * It will be `null` if the record contains some type of prospect.
   * @property {string} k_login_type The login type key.
   * @property {string} s_title The name of the login type.
   * @property {string} text_title Same as <tt>s_title</tt> offset.
   */

  /**
   * A list of login types, keys, and information. Each element is an array with the following information:
   *
   * <dl>
   *   <dt>bool <var>is_member</var></dt>
   *   <dd>
   *     It will be `1` if the record contains a type of member.
   *     It will be `0` if record contains some other type of client.
   *     It will be `null` if the record contains some type of prospect.
   *   </dd>
   *   <dt>string <var>k_login_type</var></dt>
   *   <dd>The login type key.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The name of the login type.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Same as <var>s_title</var> offset.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Type_LoginTypeModel_a_login_type_list[]}
   */
  this.a_login_type_list = undefined;

  /**
   * The business key used internally by WellnessLiving.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Type_LoginTypeModel);

/**
 * @inheritDoc
 */
Wl_Login_Type_LoginTypeModel.prototype.config=function()
{
  return {"a_field": {"a_login_type_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Type_LoginTypeModel.instanceGet
 * @param {string} k_business The business key used internally by WellnessLiving.
 * @returns {Wl_Login_Type_LoginTypeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */