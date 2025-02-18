/**
 * Overwrites core functionality of the {@link Core_Drive_ImageUpload_ImageUploadModel} based on the product specification.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Drive_ProductImageUploadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_class,k_id,a_config";

  /**
   * Allows to give custom parameters which can be required for different types of images.
   *
   * @get get
   * @post get
   * @put get
   * @type {{}}
   */
  this.a_config = [];

  /**
   * Image information for every ID.
   * Every element contains values such as the {@link Core_Drive_ImageUpload_ImageUploadModel._get()} result.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_image = undefined;

  /**
   * Information about the text for an empty image upload. See the PHP side for more information.
   *
   * @get result
   * @put result
   * @type {?{}}
   */
  this.a_text_empty = null;

  /**
   * An HTML string to use for the image recommendation.
   *
   * @get result
   * @put result
   * @type {string}
   */
  this.html_image_hint = undefined;

  /**
   * The maximum height of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_height_max = null;

  /**
   * The minimum height of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_height_min = null;

  /**
   * The height of the thumbnail image.
   * This will be `null` until it's loaded from the server.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_thumbnail_height = null;

  /**
   * The width of the thumbnail image.
   * This will be `null` until it's loaded from the server.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_thumbnail_width = null;

  /**
   * The maximum width of the image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_width_max = null;

  /**
   * The minimum width of the image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_width_min = null;

  /**
   * If `true`, the image is treated as circular. Otherwise, this will be `false`.
   *
   * @get result
   * @put result
   * @type {?boolean}
   */
  this.is_circular = null;

  /**
   * If `true`, image deletion is permitted. Otherwise, this will be `false`.
   *
   * This will be `null` until it's loaded from the server.
   *
   * @get result
   * @put result
   * @type {?boolean}
   */
  this.is_delete_allow = null;

  /**
   * If `true`, the temporary image will be retrieved. Otherwise, this will be `false`.
   *
   * @get get
   * @put get
   * @type {boolean}
   */
  this.is_temporary = false;

  /**
   * The image ID set in {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The name of the class that manages this image.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.s_class = "";

  /**
   * The link protection code.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.s_code = null;

  /**
   * The action that must be performed to the image.
   *
   * @put post
   * @type {string}
   */
  this.s_command = "";

  /**
   * The image link.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.s_link = null;

  /**
   * A list of image IDs set in {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}, serialised using JSON.
   *
   * This will be `null` if there's no data being sent by the client.
   *
   * @post post
   * @type {?string}
   */
  this.text_id = null;

  /**
   * The image URL that should be displayed in cases where no image is uploaded.
   * This will be `null` until it's loaded from the server.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_empty = null;

  /**
   * The thumbnail URL of the image.
   * This will be `null` until it's loaded from the server.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_thumbnail = null;

  /**
   * The script URL where new image should be uploaded from.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_upload = null;

  /**
   * The URL of the full image.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_view = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Drive_ProductImageUploadModel);

/**
 * @inheritDoc
 */
Wl_Drive_ProductImageUploadModel.prototype.config=function()
{
  return {"a_field": {"a_config": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"a_image": {"post": {"result": true}},"a_text_empty": {"get": {"result": true},"put": {"result": true}},"html_image_hint": {"get": {"result": true},"put": {"result": true}},"i_height_max": {"get": {"result": true},"put": {"result": true}},"i_height_min": {"get": {"result": true},"put": {"result": true}},"i_thumbnail_height": {"get": {"result": true},"put": {"result": true}},"i_thumbnail_width": {"get": {"result": true},"put": {"result": true}},"i_width_max": {"get": {"result": true},"put": {"result": true}},"i_width_min": {"get": {"result": true},"put": {"result": true}},"is_circular": {"get": {"result": true},"put": {"result": true}},"is_delete_allow": {"get": {"result": true},"put": {"result": true}},"is_temporary": {"get": {"get": true},"put": {"get": true}},"k_id": {"get": {"get": true},"put": {"get": true}},"s_class": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"s_code": {"get": {"result": true},"put": {"result": true}},"s_command": {"put": {"post": true}},"s_link": {"get": {"result": true},"put": {"result": true}},"text_id": {"post": {"post": true}},"url_empty": {"get": {"result": true},"put": {"result": true}},"url_thumbnail": {"get": {"result": true},"put": {"result": true}},"url_upload": {"get": {"result": true},"put": {"result": true}},"url_view": {"get": {"result": true},"put": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Drive_ProductImageUploadModel.instanceGet
 * @param {string} s_class The name of the class that manages this image.
 * @param {string} k_id The image ID set in {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}.
 * @param {{}} a_config Allows to give custom parameters which can be required for different types of images.
 * @returns {Wl_Drive_ProductImageUploadModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */