/**
 * API of test model B.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Spa_Test_TestBModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Test result field.
   *
   * @get result
   * @type {string}
   */
  this.text_result = undefined;

  /**
   * Test field.
   *
   * @get get
   * @type {string}
   */
  this.text_text = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Spa_Test_TestBModel);

/**
 * @inheritDoc
 */
Core_Spa_Test_TestBModel.prototype.config=function()
{
  return {"a_field": {"text_result": {"get": {"result": true}},"text_text": {"get": {"get": true}}}};
};