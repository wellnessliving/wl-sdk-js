/**
 * Example API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Js_Compile_Test_ExampleBModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Example key.
   *
   * @get get
   * @type {string}
   */
  this.k_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Js_Compile_Test_ExampleBModel);

/**
 * @inheritDoc
 */
Core_Js_Compile_Test_ExampleBModel.prototype.config=function()
{
  return {"a_field": {"k_id": {"get": {"get": true}}}};
};