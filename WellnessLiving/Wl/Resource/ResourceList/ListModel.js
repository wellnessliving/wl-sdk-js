/**
 * Asset list by business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_ResourceList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Resource_ResourceList_ListModel_a_resource
   * @property {boolean} hide_application Whether resource will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that resource will not be displayed, <tt>false</tt> otherwise.
   * @property {boolean} is_active Whether resource is active.
   * @property {boolean} is_book Whether resource is bookable.
   * @property {string} k_city Key of the city for off-site locations.}.
   * <tt>null</tt> if the resource is not an off-site location.
   * @property {string} k_resource Resource key.
   * @property {string} k_resource_layout Asset layout key.
   * @property {string} k_resource_type Resource type key.
   * @property {string} text_address Street address of the resource for off-site locations.
   * Empty string if the resource does not have an off-site address.
   * @property {string} text_guide Additional directions or access tips for reaching an off-site location.
   * Empty string if not specified.
   * @property {string} text_postal Postal code of the resource for off-site locations.
   * Empty string if the resource does not have an off-site address.
   * @property {string} text_title Resource name.
   */

  /**
   * Resources list:
   *
   * @get result
   * @type {Wl_Resource_ResourceList_ListModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * Type of the resource.
   *
   * 1 - if this is a bookable asset.
   * 2 - if this is an off-site location with its own address.
   *
   * @get get
   * @type {number}
   */
  this.id_category = 0;

  /**
   * Whether to return franchisee-created resources (if business is franchisor).
   * <tt>true</tt> to include franchisee-created resources.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key, primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_ResourceList_ListModel);

/**
 * @inheritDoc
 */
Wl_Resource_ResourceList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"id_category": {"get": {"get": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};