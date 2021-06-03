/**
 * Allows to create, edit and delete applications.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_ApplicationElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The array of keys of access groups of current application.
   * <tt>null</tt> when application doesn't have access groups.
   *
   * Primary key in {@link \Core\Request\Api\Application\GroupSql} table.
   *
   * @get result
   * @post post
   * @type {?string[]}
   */
  this.a_application_group = null;

  /**
   * If an application is edited, its key is stored here.
   *
   * Primary key in {@link \Core\Request\Api\Application\Sql} table.
   *
   * <tt>null</tt> if a new group should be created.
   * This value is required for edit and delete operations.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {?string}
   */
  this.k_api_application = null;

  /**
   * Secret code to authorize application.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.s_code = undefined;

  /**
   * Application identifier to authenticate application.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.s_id = undefined;

  /**
   * Name of application.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_application = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_ApplicationElementModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_ApplicationElementModel.prototype.config=function()
{
  return {"a_field": {"a_application_group": {"get": {"result": true},"post": {"post": true}},"k_api_application": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"s_code": {"get": {"result": true},"post": {"post": true}},"s_id": {"get": {"result": true},"post": {"post": true}},"text_application": {"get": {"result": true},"post": {"post": true}}}};
};