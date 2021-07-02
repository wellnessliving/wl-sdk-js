/**
 * API for mass synchronization of models.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Spa_Model_ModelPoolModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A set of model objects that need to be synchronized.
   *
   * Key - model class name.
   * Value - model data.
   *
   * @post post
   * @type {{}}
   */
  this.a_request = [];

  /**
   * Model result.
   *
   * @post result
   * @type {{}}
   */
  this.a_result = undefined;

  /**
   * The method (get, post, put, delete) that will be called on all given models.
   *
   * Currently only the "get" method is supported
   *
   * @post post
   * @type {string}
   */
  this.s_method = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Spa_Model_ModelPoolModel);

/**
 * @inheritDoc
 */
Core_Spa_Model_ModelPoolModel.prototype.config=function()
{
  return {"a_field": {"a_request": {"post": {"post": true}},"a_result": {"post": {"result": true}},"s_method": {"post": {"post": true}}}};
};