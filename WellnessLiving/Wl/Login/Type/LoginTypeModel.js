/**
 * Gets a login types list of a business.
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
   * @property {number} id_client_type A list of client type IDs.
   * @property {boolean} is_member Deprecated Use `id_client_type` instead. It will be `1` if the record contains a type of member. It will be `0` if record contains some other type of client. It will be `null` if the record contains some type of prospect.
   * @property {string} k_login_type The login type key.
   * @property {string} s_title The name of the login type.
   * @property {string} text_title Same as `s_title` offset.
   */

  /**
   * A list of login types, keys, and information. Each element is an array with the following information:
   *
   * @get result
   * @type {Wl_Login_Type_LoginTypeModel_a_login_type_list[]}
   */
  this.a_login_type_list = undefined;

  /**
   * If `true`, this `k_business` is a franchisor, and login types of all franchisees should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchisor = false;

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
  return {"a_field":{"a_login_type_list":{"get":{"result":true}},"is_franchisor":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Type_LoginTypeModel.instanceGet
 * @param {string} k_business The business key used internally by WellnessLiving.
 * @returns {Wl_Login_Type_LoginTypeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a login types list of a business.
 *
 * Returns all client types configured for the specified business, each with its key, title, client type ID, and
 * a deprecated membership flag. If `is_franchisor` is `true`, returns the combined login types of all franchisees
 * under the franchisor business.
 *
 * @function
 * @name Wl_Login_Type_LoginTypeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
