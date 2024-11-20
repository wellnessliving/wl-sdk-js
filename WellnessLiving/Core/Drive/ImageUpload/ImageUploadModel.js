/**
 * Performs final action action to image uploaded with {@link Core_Drive_ImageUpload_ImageUploadTemporaryModel}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Drive_ImageUpload_ImageUploadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_class,k_id";

  /**
   * Image information for every ID. Every element contains values like {@link Core_Drive_ImageUpload_ImageUploadModel._get()} result.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_image = undefined;

  /**
   * Information about text on the empty upload image. See PHP-side to get more information about this.
   *
   * @get result
   * @put result
   * @type {?{}}
   */
  this.a_text_empty = null;

  /**
   * Html string to use as the image recommendation.
   *
   * @get result
   * @put result
   * @type {string}
   */
  this.html_image_hint = undefined;

  /**
   * Maximum height of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_height_max = null;

  /**
   * Minimum height of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_height_min = null;

  /**
   * Height of thumbnail image.
   * <tt>null</tt> until loaded from server.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_thumbnail_height = null;

  /**
   * Width of thumbnail image.
   * <tt>null</tt> until loaded from server.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_thumbnail_width = null;

  /**
   * Maximum width of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_width_max = null;

  /**
   * Minimum width of image.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.i_width_min = null;

  /**
   * <tt>true</tt> if image is treated as circular; <tt>false</tt> otherwise.
   *
   * @get result
   * @put result
   * @type {?boolean}
   */
  this.is_circular = null;

  /**
   * <tt>true</tt> if image deleting is allowed; <tt>false</tt> otherwise.
   * <tt>null</tt> until loaded from server.
   *
   * @get result
   * @put result
   * @type {?boolean}
   */
  this.is_delete_allow = null;

  /**
   * <tt>true</tt> if temporary image to be retrieved; <tt>false</tt> otherwise.
   *
   * @get get
   * @put get
   * @type {boolean}
   */
  this.is_temporary = false;

  /**
   * ID of image within {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Name of class that manages this image.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.s_class = "";

  /**
   * Link protection code.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.s_code = null;

  /**
   * Action that must be done to image.
   *
   * @put post
   * @type {string}
   */
  this.s_command = "";

  /**
   * Image link.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.s_link = null;

  /**
   * List of image IDs within {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}. Serialised via JSON.
   *
   * <tt>null</tt> if no data sent from client.
   *
   * @post post
   * @type {?string}
   */
  this.text_id = null;

  /**
   * URL of the image that should be shown in a case image is not uploaded.
   * <tt>null</tt> until loaded from server.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_empty = null;

  /**
   * URL of thumbnail of the image.
   * <tt>null</tt> until loaded from server.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_thumbnail = null;

  /**
   * URL the script where new image should be uploaded.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_upload = null;

  /**
   * URL of the full image.
   *
   * @get result
   * @put result
   * @type {?string}
   */
  this.url_view = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Drive_ImageUpload_ImageUploadModel);

/**
 * @inheritDoc
 */
Core_Drive_ImageUpload_ImageUploadModel.prototype.config=function()
{
  return {"a_field": {"a_image": {"post": {"result": true}},"a_text_empty": {"get": {"result": true},"put": {"result": true}},"html_image_hint": {"get": {"result": true},"put": {"result": true}},"i_height_max": {"get": {"result": true},"put": {"result": true}},"i_height_min": {"get": {"result": true},"put": {"result": true}},"i_thumbnail_height": {"get": {"result": true},"put": {"result": true}},"i_thumbnail_width": {"get": {"result": true},"put": {"result": true}},"i_width_max": {"get": {"result": true},"put": {"result": true}},"i_width_min": {"get": {"result": true},"put": {"result": true}},"is_circular": {"get": {"result": true},"put": {"result": true}},"is_delete_allow": {"get": {"result": true},"put": {"result": true}},"is_temporary": {"get": {"get": true},"put": {"get": true}},"k_id": {"get": {"get": true},"put": {"get": true}},"s_class": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"s_code": {"get": {"result": true},"put": {"result": true}},"s_command": {"put": {"post": true}},"s_link": {"get": {"result": true},"put": {"result": true}},"text_id": {"post": {"post": true}},"url_empty": {"get": {"result": true},"put": {"result": true}},"url_thumbnail": {"get": {"result": true},"put": {"result": true}},"url_upload": {"get": {"result": true},"put": {"result": true}},"url_view": {"get": {"result": true},"put": {"result": true}}}};
};

/**
 * @function
 * @name Core_Drive_ImageUpload_ImageUploadModel.instanceGet
 * @param {string} s_class Name of class that manages this image.
 * @param {string} k_id ID of image within {@link Core_Drive_ImageUpload_ImageUploadModel.s_class}.
 * @returns {Core_Drive_ImageUpload_ImageUploadModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */