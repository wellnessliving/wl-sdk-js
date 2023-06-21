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
   * @inheritDoc
   */
  this._s_key = "k_business,k_resource";

  /**
   * Mode to require amount while booking a resource.
   * * One of the {@link RsServiceRequireSid} constants.
   * * Copy of the {@link \RsResourceSql}.`id_service_require`.
   *
   * @get result
   * @type {number}
   */
  this.id_service_require = undefined;

  /**
   * Whether booking of the resource required confirmation from staff member.
   * * Copy of {@link \RsResourceSql}.`is_staff_confirm`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff_confirm = undefined;

  /**
   * Key of the business.
   *
   * <tt>null</tt> - if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the location.
   *
   * <tt>null</tt> - if not set.
   *
   * @get get,result
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Key of the resource.
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
  return {"a_field": {"id_service_require": {"get": {"result": true}},"is_staff_confirm": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true}},"k_resource": {"get": {"get": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Resource_ResourceModel.instanceGet
 * @param {?string} k_business Key of the business. <tt>null</tt> - if not set.
 * @param {?string} k_resource Key of the resource. <tt>null</tt> - if not set.
 * @returns {Wl_Resource_ResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */