/**
 * Progress image api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_Image_ImageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business,uid";

  /**
   * @typedef {{}} Wl_Member_Progress_Log_Image_ImageModel_a_image
   * @property {{}} a_image Image storage data. Structure of this array corresponds result of {@link \Wl\Member\Progress\Log\Image\ProgressImage::load()}.
   * @property {number} i-preview-height Image preview height.
   * @property {number} i-preview-width Image preview width.
   * @property {number} i-size Max image size.
   * @property {number} i-thumbnail-height Image thumbnail height.
   * @property {number} i-thumbnail-width Image thumbnail width.
   * @property {string} s_link Image link.
   * @property {string} url-action Image upload url.
   */

  /**
   * Image data:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Image storage data. Structure of this array corresponds result of {@link \Wl\Member\Progress\Log\Image\ProgressImage::load()}.
   *   </dd>
   *   <dt>
   *     int <var>i-preview-height</var>
   *   </dt>
   *   <dd>
   *     Image preview height.
   *   </dd>
   *   <dt>
   *     int <var>i-preview-width</var>
   *   </dt>
   *   <dd>
   *     Image preview width.
   *   </dd>
   *   <dt>
   *     int <var>i-size</var>
   *   </dt>
   *   <dd>
   *     Max image size.
   *   </dd>
   *   <dt>
   *     int <var>i-thumbnail-height</var>
   *   </dt>
   *   <dd>
   *     Image thumbnail height.
   *   </dd>
   *   <dt>
   *     int <var>i-thumbnail-width</var>
   *   </dt>
   *   <dd>
   *     Image thumbnail width.
   *   </dd>
   *   <dt>
   *     string <var>s_link</var>
   *   </dt>
   *   <dd>
   *     Image link.
   *   </dd>
   *   <dt>
   *     string <var>url-action</var>
   *   </dt>
   *   <dd>
   *     Image upload url.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Member_Progress_Log_Image_ImageModel_a_image}
   */
  this.a_image = undefined;

  /**
   * Date of the progress picture.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.dt_date = null;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Save image command.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_command = "";

  /**
   * User key.
   *
   * <tt>null</tt> if not initialized yet.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_Image_ImageModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_Image_ImageModel.prototype.config=function()
{
  return {"a_field": {"a_image": {"get": {"result": true}},"dt_date": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"s_command": {"post": {"post": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Image_ImageModel.instanceGet
 * @param {?string} dt_date Date of the progress picture. <tt>null</tt> if not initialized yet.
 * @param {?string} k_business Business key. Primary key in the {@link \RsBusinessSql} table. <tt>null</tt> if not initialized yet.
 * @param {?string} uid User key. <tt>null</tt> if not initialized yet.
 * @returns {Wl_Member_Progress_Log_Image_ImageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */