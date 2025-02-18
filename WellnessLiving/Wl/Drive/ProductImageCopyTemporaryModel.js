/**
 * Overwrites core functionality of the {@link Core_Drive_ImageUpload_ImageCopyTemporaryModel} based on the product specification.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Drive_ProductImageCopyTemporaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Allows to give custom parameters which can be required for different types of images.
   *
   * @post get
   * @type {{}}
   */
  this.a_config = [];

  /**
   * <tt>true</tt> - crop is used. <tt>false</tt> - crop is not used (the image is saved in the original size).
   *
   * @post result
   * @type {boolean}
   */
  this.has_crop = undefined;

  /**
   * Actual height of thumbnail image.
   *
   * @post result
   * @type {number}
   */
  this.i_height = undefined;

  /**
   * Height of original image.
   *
   * @post result
   * @type {number}
   */
  this.i_height_src = undefined;

  /**
   * Angle on which image was rotated compared to the original.
   *
   * @post result
   * @type {number}
   */
  this.i_rotate = undefined;

  /**
   * Actual width of thumbnail image.
   *
   * @post result
   * @type {number}
   */
  this.i_width = undefined;

  /**
   * Width of original image.
   *
   * @post result
   * @type {number}
   */
  this.i_width_src = undefined;

  /**
   * Image type ID. One of {@link Core_Drive_DriveTypeSid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_type_src = undefined;

  /**
   * <tt>true</tt> if thumbnail is a resized variant of original image.
   *
   * @post result
   * @type {boolean}
   */
  this.is_resize = undefined;

  /**
   * Image link.
   *
   * @post get,result
   * @type {string}
   */
  this.s_link = "";

  /**
   * URL to resized and rotated image in file storage.
   *
   * @post result
   * @type {string}
   */
  this.url_thumbnail = undefined;

  /**
   * URL to original image in file storage.
   *
   * @post result
   * @type {string}
   */
  this.url_view = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Drive_ProductImageCopyTemporaryModel);

/**
 * @inheritDoc
 */
Wl_Drive_ProductImageCopyTemporaryModel.prototype.config=function()
{
  return {"a_field": {"a_config": {"post": {"get": true}},"has_crop": {"post": {"result": true}},"i_height": {"post": {"result": true}},"i_height_src": {"post": {"result": true}},"i_rotate": {"post": {"result": true}},"i_width": {"post": {"result": true}},"i_width_src": {"post": {"result": true}},"id_type_src": {"post": {"result": true}},"is_resize": {"post": {"result": true}},"s_link": {"post": {"get": true,"result": true}},"url_thumbnail": {"post": {"result": true}},"url_view": {"post": {"result": true}}}};
};