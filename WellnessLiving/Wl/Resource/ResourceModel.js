/**
 * Api to get data about resource.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_ResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business. Primary key from {@link \RsBusinessSql} table.
   *
   * <tt>null</tt> - if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the location. Primary key from {@link \RsLocationSql} table.
   *
   * <tt>null</tt> - if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Key of the resource. Primary key from {@link \RsResourceSql} table.
   *
   * <tt>null</tt> - if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Title of the resource.
   *
   * @get result
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_ResourceModel);

/**
 * @inheritDoc
 */
Wl_Resource_ResourceModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource": {"get": {"get": true}},"text_title": {"get": {"result": true}}}};
};