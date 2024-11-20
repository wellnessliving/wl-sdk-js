/**
 * An endpoint that retrieves business config options.
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
   * A list of config option values.
   *
   * Keys refer to config option class CIDs. Value refer to config option values.
   *
   * @get result
   * @type {{}}
   */
  this.a_option = undefined;

  /**
   * The business key.
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
 * @param {string} k_business The business key.
 * @returns {Wl_Business_Config_Option_BusinessConfigOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */