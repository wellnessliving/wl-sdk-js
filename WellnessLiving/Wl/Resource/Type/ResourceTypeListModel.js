/**
 * Returns list of resource types in the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Type_ResourceTypeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Resource_Type_ResourceTypeListModel_a_resource_type
   * @property {number} id_category Type of the resource. One of {@link Wl_Resource_ResourceCategoryEnum} cases.
   * @property {boolean} is_active Whether resource type is active.
   * @property {string} k_resource_type Resource type key.
   * @property {string} text_title Resource type title.
   */

  /**
   * Resource type list:
   *
   * @get result
   * @type {Wl_Resource_Type_ResourceTypeListModel_a_resource_type[]}
   */
  this.a_resource_type = undefined;

  /**
   * Type of the resource.
   *
   * 1 - if this is a bookable asset.
   * 2 - if this is an off-site location with its own address.
   *
   * @get get
   * @see Wl_Resource_ResourceCategoryEnum
   * @type {number}
   */
  this.id_category = 0;

  /**
   * Whether to return franchisee-created resource types (if business is franchisor).
   * `true` to include franchisee-created resource types.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key, to load resource types for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Type_ResourceTypeListModel);

/**
 * @inheritDoc
 */
Wl_Resource_Type_ResourceTypeListModel.prototype.config=function()
{
  return {"a_field":{"a_resource_type":{"get":{"result":true}},"id_category":{"get":{"get":true}},"is_franchise":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Resource_Type_ResourceTypeListModel.instanceGet
 * @param {string} k_business Business key, to load resource types for.
 * @returns {Wl_Resource_Type_ResourceTypeListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns list of resource types in the business.
 *
 * When {@link Wl_Resource_Type_ResourceTypeListModel.is_franchise} is set, the search is expanded to every
 * business in the franchise and resource types that a franchisee already imported from the
 * franchisor are skipped, so each resource type appears only once. The result can be
 * narrowed to a single resource category with {@link Wl_Resource_Type_ResourceTypeListModel.id_category}.
 *
 * @function
 * @name Wl_Resource_Type_ResourceTypeListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
