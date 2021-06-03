/**
 * Retrieves a list of product for the store.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_CatalogList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,uid";

  /**
   * List of products to show.
   *
   * @get result
   * @type {{}}
   */
  this.a_product = undefined;

  /**
   * Key of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location key.
   * Can affect the list of displayed products.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_CatalogList_ListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_CatalogList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_product": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ListModel.instanceGet
 * @param {string} k_business Key of a business to show information for.
 * @param {string} k_location Location key. Can affect the list of displayed products.
 * @param {string} uid Key of a user to show information for.
 * @returns {Wl_Catalog_CatalogList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */