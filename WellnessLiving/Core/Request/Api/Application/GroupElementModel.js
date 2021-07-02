/**
 * Allows to create, edit and delete group.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_GroupElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If a group is edited, its key is stored here.
   *
   * Primary key in {@link \Core\Request\Api\Application\GroupSql} table.
   *
   * <tt>null</tt> if a new group should be created.
   * This value is required for edit and delete operations.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {?string}
   */
  this.k_application_group = null;

  /**
   * Title of the group.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_access = "";

  /**
   * Title of the group.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_privilege = "";

  /**
   * Title of the group.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_GroupElementModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_GroupElementModel.prototype.config=function()
{
  return {"a_field": {"k_application_group": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"text_access": {"get": {"result": true},"post": {"post": true}},"text_privilege": {"get": {"result": true},"post": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true}}}};
};