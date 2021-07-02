/**
 * Retrieves business config options.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Config_Option_BusinessConfigOptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * List of config option values. Key - config option class CID, value - config option value.
   *
   * @get result
   * @type {{}}
   */
  this.a_option = undefined;

  /**
   * Key of business. Primary key in {@link RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Config_Option_BusinessConfigOptionModel);

/**
 * @inheritDoc
 */
Wl_Business_Config_Option_BusinessConfigOptionModel.prototype.config=function()
{
  return {"a_field": {"a_option": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Config_Option_BusinessConfigOptionModel.instanceGet
 * @param {string} k_business Key of business. Primary key in {@link RsBusinessSql}.
 * @returns {Wl_Business_Config_Option_BusinessConfigOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */