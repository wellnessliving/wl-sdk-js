/**
 * Retrieves an information about product images.
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
   * @typedef {{}} Wl_Catalog_View_Image_ImageModel_a_image_a_image
   * @property {number} i_height Height of the variant image.
   * @property {number} i_height_src Height of the original image.
   * @property {number} i_rotate Rotate.
   * @property {number} i_width Width of the variant image.
   * @property {number} i_width_src Width of the original image.
   * @property {number} id_type_src Type ID of the image. Constant from {@link Core_Drive_DriveTypeSid}.
   * @property {boolean} is-resize `true` if the variant differs from the original, `false` - otherwise.
   * @property {string} url-thumbnail URL to download variant (thumbnail) file.
   * @property {string} url-view URL to download original file.
   */

  /**
   * @typedef {{}} Wl_Catalog_View_Image_ImageModel_a_image
   * @property {Wl_Catalog_View_Image_ImageModel_a_image_a_image} a_image Information about the image.
   * @property {number} i_height Height of the variant image.
   * @property {number} i_width Width of the variant image.
   * @property {boolean} is_empty `true` if the image file does not exist, `false` - otherwise.
   * @property {string} s_url Link to the variant file.
   */

  /**
   * Contains a list of images for the current product.
   *
   * @get result
   * @type {Wl_Catalog_View_Image_ImageModel_a_image[]}
   */
  this.a_image = undefined;

  /**
   * ID of sale category. One of {@link RsSaleSid}.
   *
   * @get get
   * @see RsSaleSid
   * @type {?number}
   */
  this.id_sale = null;

  /**
   * ID of the sale item.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Shop product option ID.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_product_option = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_View_Image_ImageModel);

/**
 * @inheritDoc
 */
Wl_Catalog_View_Image_ImageModel.prototype.config=function()
{
  return {"a_field":{"a_image":{"get":{"result":true}},"id_sale":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_shop_product_option":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_View_Image_ImageModel.instanceGet
 * @param {?number} id_sale ID of sale category. One of {@link RsSaleSid}.
 * @param {string} k_id ID of the sale item.
 * @param {string} k_shop_product_option Shop product option ID.
 * @returns {Wl_Catalog_View_Image_ImageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves an information about product images.
 *
 * Requires the sale item ID and the sale category ID to be specified. For a `product`
 * sale category, resolves the business that owns the shop product, loads the thumbnail
 * image list for that product, and converts each image variant into its array
 * representation. For sale categories that do not represent a shop product, returns an
 * empty image list.
 *
 * @function
 * @name Wl_Catalog_View_Image_ImageModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
