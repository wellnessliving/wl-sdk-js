/**
 * Tool to upload a raw image into server.
 *
 * Then you must save this image by {@link Core_Drive_ImageUpload_ImageUploadModel}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Drive_ImageUpload_ImageUploadTemporaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Image to be uploaded.
   *
   * @post post
   * @type {{}}
   */
  this.f_image = undefined;

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
   * Key of image within {@link Core_Drive_ImageUpload_ImageUploadTemporaryModel.s_class}.
   *
   * For example, for user's photo specify user's key here.
   *
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Name of class that manages this image.
   *
   * For example, for user's photo specify string <tt>PassportLoginImage</tt> here.
   *
   * @post get
   * @type {string}
   */
  this.s_class = "";

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

WlSdk_ModelAbstract.extend(Core_Drive_ImageUpload_ImageUploadTemporaryModel);

/**
 * @inheritDoc
 */
Core_Drive_ImageUpload_ImageUploadTemporaryModel.prototype.config=function()
{
  return {"a_field": {"f_image": {"post": {"post": true}},"has_crop": {"post": {"result": true}},"i_height": {"post": {"result": true}},"i_height_src": {"post": {"result": true}},"i_rotate": {"post": {"result": true}},"i_width": {"post": {"result": true}},"i_width_src": {"post": {"result": true}},"id_type_src": {"post": {"result": true}},"is_resize": {"post": {"result": true}},"k_id": {"post": {"get": true}},"s_class": {"post": {"get": true}},"url_thumbnail": {"post": {"result": true}},"url_view": {"post": {"result": true}}}};
};