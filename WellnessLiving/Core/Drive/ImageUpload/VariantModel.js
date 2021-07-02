/**
 * Rotates image by given link.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Drive_ImageUpload_VariantModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_link,s_command,s_code";

  /**
   * @typedef {{}} Core_Drive_ImageUpload_VariantModel_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If set to <tt>false</tt>, value returned in <tt>url-thumbnail</tt> equals value in <tt>url-view</tt>.
   * @property {string} url-view Url to original image in file storage.
   * @property {string} url-thumbnail Url to resized and rotated image in file storage. If size of original image is larger then specified by arguments, image thumbnail as created, and a link to this thumbnail is returned.
   * Otherwise link to original image is returned here.
   */

  /**
   * Information about image.
   * <dl>
   *   <dt>
   *     int <var>i_height</var>
   *   </dt>
   *   <dd>
   *     Actual height of thumbnail image.
   *   </dd>
   *   <dt>
   *     int <var>i_height_src</var>
   *   </dt>
   *   <dd>
   *     Height of original image.
   *   </dd>
   *   <dt>
   *     int <var>i_rotate</var>
   *   </dt>
   *   <dd>
   *     Angle on which image was rotated compared to the original.
   *   </dd>
   *   <dt>
   *     int <var>i_width</var>
   *   </dt>
   *   <dd>
   *     Actual width of thumbnail image.
   *   </dd>
   *   <dt>
   *     int <var>i_width_src</var>
   *   </dt>
   *   <dd>
   *     Width of original image.
   *   </dd>
   *   <dt>
   *     bool <var>is-resize</var>
   *   </dt>
   *   <dd>
   *     Whether thumbnail is a resized variant of original image. If set to <tt>false</tt>, value returned in <var>url-thumbnail</var> equals value in <var>url-view</var>.
   *   </dd>
   *   <dt>
   *     string <var>url-view</var>
   *   </dt>
   *   <dd>
   *     Url to original image in file storage.
   *   </dd>
   *   <dt>
   *     string <var>url-thumbnail</var>
   *   </dt>
   *   <dd>
   *     Url to resized and rotated image in file storage. If size of original image is larger then specified by arguments, image thumbnail as created, and a link to this thumbnail is returned.
   *     Otherwise link to original image is returned here.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Core_Drive_ImageUpload_VariantModel_a_image}
   */
  this.a_image = undefined;

  /**
   * Protection string.
   * Used to prevent custom link generation on client side.
   *
   * @get get
   * @type {string}
   */
  this.s_code = "";

  /**
   * Command that must be applied to image.
   * Used to receive modified image variant.
   *
   * @get get
   * @type {string}
   */
  this.s_command = "";

  /**
   * Image link.
   *
   * @get get
   * @type {string}
   */
  this.s_link = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Drive_ImageUpload_VariantModel);

/**
 * @inheritDoc
 */
Core_Drive_ImageUpload_VariantModel.prototype.config=function()
{
  return {"a_field": {"a_image": {"get": {"result": true}},"s_code": {"get": {"get": true}},"s_command": {"get": {"get": true}},"s_link": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Drive_ImageUpload_VariantModel.instanceGet
 * @param {string} s_link Image link.
 * @param {string} s_command Command that must be applied to image. Used to receive modified image variant.
 * @param {string} s_code Protection string. Used to prevent custom link generation on client side.
 * @returns {Core_Drive_ImageUpload_VariantModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */