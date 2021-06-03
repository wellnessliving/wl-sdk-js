/**
 * API to edit asset category.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Type_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of current business. Primary key in {@link RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of asset category. Primary key in {@link RsResourceTypeSql} table.
   *
   * @post result
   * @put get
   * @type {string}
   */
  this.k_resource_type = "0";

  /**
   * Title for asset category. For post.
   *
   * @post post
   * @type {string}
   */
  this.s_title_post = "";

  /**
   * Title for asset category. For put.
   *
   * @put post
   * @type {string}
   */
  this.s_title_put = "";

  /**
   * URL to edit asset category layout.
   *
   * @post result
   * @type {string}
   */
  this.url_layout = undefined;

  /**
   * URL to create new asset of asset category.
   *
   * @post result
   * @type {string}
   */
  this.url_resource_create = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Type_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Resource_Type_Edit_EditModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"get": true}},"k_resource_type": {"post": {"result": true},"put": {"get": true}},"s_title_post": {"post": {"post": true}},"s_title_put": {"put": {"post": true}},"url_layout": {"post": {"result": true}},"url_resource_create": {"post": {"result": true}}}};
};