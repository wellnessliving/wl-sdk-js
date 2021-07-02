/**
 * API of test model A. Synchronizing of this model will always cause errors.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Spa_Test_TestAModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Spa_Test_TestAModel);

/**
 * @inheritDoc
 */
Core_Spa_Test_TestAModel.prototype.config=function()
{
  return {"a_field": []};
};