/**
 * Retrieves information about product images.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_View_Image_ImageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_sale,k_id,k_shop_product_option";

  /**
   * Contains a list of images for the current product.
   *
   * @get result
   * @type {{}}
   */
  this.a_image = undefined;

  /**
   * ID of sale category. One of {@link \RsSaleSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_sale = 0;

  /**
   * ID of the sale item.
   *
   * @get get
   * @type {string}
   */
  this.k_id = 0;

  /**
   * Shop product option ID.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_View_Image_ImageModel);

/**
 * @inheritDoc
 */
Wl_Catalog_View_Image_ImageModel.prototype.config=function()
{
  return {"a_field": {"a_image": {"get": {"result": true}},"id_sale": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_shop_product_option": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_View_Image_ImageModel.instanceGet
 * @param {number} id_sale ID of sale category. One of {@link \RsSaleSid}.
 * @param {string} k_id ID of the sale item.
 * @param {string} k_shop_product_option Shop product option ID.
 * @returns {Wl_Catalog_View_Image_ImageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */