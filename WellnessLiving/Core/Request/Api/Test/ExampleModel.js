/**
 * Example API point.
 *
 * Used to test methods of {@link \Core\Request\Api\ApiModel}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Test_ExampleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Example array argument.
   *
   * @put result,post
   * @type {{}}
   */
  this.a_array = undefined;

  /**
   * Example array result.
   *
   * @put result
   * @type {{}}
   */
  this.a_array_result = undefined;

  /**
   * Example integer argument.
   *
   * @put get,result
   * @type {number}
   */
  this.i_integer = undefined;

  /**
   * Example int result.
   *
   * @put result
   * @type {number}
   */
  this.i_integer_result = undefined;

  /**
   * Example boolean argument.
   *
   * @put result,post
   * @type {boolean}
   */
  this.is_boolean = undefined;

  /**
   * Example boolean result.
   *
   * @put result
   * @type {boolean}
   */
  this.is_boolean_result = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Test_ExampleModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Test_ExampleModel.prototype.config=function()
{
  return {"a_field": {"a_array": {"put": {"result": true,"post": true}},"a_array_result": {"put": {"result": true}},"i_integer": {"put": {"get": true,"result": true}},"i_integer_result": {"put": {"result": true}},"is_boolean": {"put": {"result": true,"post": true}},"is_boolean_result": {"put": {"result": true}}}};
};