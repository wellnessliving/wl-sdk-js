/**
 * Saves new uploaded image.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Drive_ImageUpload_ImageUploadTemporaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The image to be uploaded.
   *
   * @post post
   * @type {string}
   */
  this.f_image = "";

  /**
   * If `true`, a crop is used. Otherwise, this will be `false` if a crop isn't used (the image is saved in its original size).
   *
   * @post result
   * @type {boolean}
   */
  this.has_crop = undefined;

  /**
   * The actual height of the thumbnail image.
   *
   * @post result
   * @type {number}
   */
  this.i_height = undefined;

  /**
   * The height of the original image.
   *
   * @post result
   * @type {number}
   */
  this.i_height_src = undefined;

  /**
   * The angle of the image rotation compared to the original.
   *
   * @post result
   * @type {number}
   */
  this.i_rotate = undefined;

  /**
   * The actual width of the thumbnail image.
   *
   * @post result
   * @type {number}
   */
  this.i_width = undefined;

  /**
   * The width of the original image.
   *
   * @post result
   * @type {number}
   */
  this.i_width_src = undefined;

  /**
   * List of image types.
   *
   * Values:
   * - 4 (`BMP`): Bmp image.
   * - 1 (`GIF`): Gif image.
   * - 2 (`JPEG`): Jpeg image.
   * - 3 (`PNG`): Png image.
   *
   * @post result
   * @type {number}
   */
  this.id_type_src = undefined;

  /**
   * If `true`, the thumbnail is a resized variant of the original image.
   *
   * @post result
   * @type {boolean}
   */
  this.is_resize = undefined;

  /**
   * The key of the image within [ImageUploadTemporaryApi](/Core/Drive/ImageUpload/ImageUploadTemporary.json).
   *
   * For example, for a user's photo, specify the user's key here.
   *
   * @post get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The name of the class that manages this image.
   *
   * For example, for a user's photo, specify the string `PassportLoginImage` here.
   *
   * @post get
   * @type {string}
   */
  this.s_class = "";

  /**
   * The URL to the resized and rotated image in file storage.
   *
   * @post result
   * @type {string}
   */
  this.url_thumbnail = undefined;

  /**
   * The URL to the original image in file storage.
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
  return {"a_field":{"f_image":{"post":{"post":true}},"has_crop":{"post":{"result":true}},"i_height":{"post":{"result":true}},"i_height_src":{"post":{"result":true}},"i_rotate":{"post":{"result":true}},"i_width":{"post":{"result":true}},"i_width_src":{"post":{"result":true}},"id_type_src":{"post":{"result":true}},"is_resize":{"post":{"result":true}},"k_id":{"post":{"get":true}},"s_class":{"post":{"get":true}},"url_thumbnail":{"post":{"result":true}},"url_view":{"post":{"result":true}}}};
};

/**
 * Saves new uploaded image.
 *
 * First step of the two-step image upload flow. Stores the uploaded file in temporary drive storage and
 * returns preview URLs and dimension metadata so the user can review or crop the image before it is
 * permanently saved. Call [ImageUploadApi](/Core/Drive/ImageUpload/ImageUpload.json) to commit the temporary image to the entity.
 *
 * @function
 * @name Core_Drive_ImageUpload_ImageUploadTemporaryModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
