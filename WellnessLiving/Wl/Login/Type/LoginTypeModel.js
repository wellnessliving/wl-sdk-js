/**
 * Retrieves information about login types.
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
   * List of login types keys.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_login_type_list = undefined;

  /**
   * Business key.
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
 * @param {string} k_business Business key.
 * @returns {Wl_Login_Type_LoginTypeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */