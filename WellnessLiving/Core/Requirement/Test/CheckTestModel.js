/**
 * Api for checks requirements in test.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Requirement_Test_CheckTestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Serialized date from {@link \Core\Requirement\CoreRequirementAbstract::runAll()} method.
   *
   * @get result
   * @type {string}
   */
  this.s_requirements = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Requirement_Test_CheckTestModel);

/**
 * @inheritDoc
 */
Core_Requirement_Test_CheckTestModel.prototype.config=function()
{
  return {"a_field": {"s_requirements": {"get": {"result": true}}}};
};