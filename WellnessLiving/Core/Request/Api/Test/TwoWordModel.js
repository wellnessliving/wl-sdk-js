/**
 * Example API entry point, for testing purposes only.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Test_TwoWordModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Example array.
   *
   * @delete result
   * @put result
   * @type {{}}
   */
  this.id_array = undefined;

  /**
   * Example some ID.
   *
   * @delete result
   * @put result
   * @type {number}
   */
  this.id_number = undefined;

  /**
   * Example some ID.
   *
   * @delete result
   * @put result
   * @type {string}
   */
  this.id_string = undefined;

  /**
   * Result of {@link \Core\Request\Api::apiPrivilegeCheck()} method.
   *
   * @put result
   * @type {boolean}
   */
  this.is_privilege = undefined;

  /**
   * Example GET field.
   *
   * @delete get,result
   * @put get,result
   * @type {string}
   */
  this.s_get = undefined;

  /**
   * Http header <tt>X-api-header</tt>
   *
   * @delete result
   * @put result
   * @type {string}
   */
  this.s_header = undefined;

  /**
   * Method name.
   *
   * @delete result
   * @put result
   * @type {string}
   */
  this.s_method = undefined;

  /**
   * Example POST field.
   *
   * @delete post,result
   * @put result,post
   * @type {string}
   */
  this.s_post = undefined;

  /**
   * Text result
   *
   * @delete result
   * @put result
   * @type {string}
   */
  this.s_result = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Test_TwoWordModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Test_TwoWordModel.prototype.config=function()
{
  return {"a_field": {"id_array": {"delete": {"result": true},"put": {"result": true}},"id_number": {"delete": {"result": true},"put": {"result": true}},"id_string": {"delete": {"result": true},"put": {"result": true}},"is_privilege": {"put": {"result": true}},"s_get": {"delete": {"get": true,"result": true},"put": {"get": true,"result": true}},"s_header": {"delete": {"result": true},"put": {"result": true}},"s_method": {"delete": {"result": true},"put": {"result": true}},"s_post": {"delete": {"post": true,"result": true},"put": {"result": true,"post": true}},"s_result": {"delete": {"result": true},"put": {"result": true}}}};
};