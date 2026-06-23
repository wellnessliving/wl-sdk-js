/**
 * Deletes progress image.
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
   * @typedef {{}} Wl_Member_Progress_Log_Image_ImageModel_a_image_a_image
   * @property {number} i_height Actual height of thumbnail image.
   * @property {number} i_height_src Height of original image.
   * @property {number} i_rotate Angle on which image was rotated compared to the original.
   * @property {number} i_width Actual width of thumbnail image.
   * @property {number} i_width_src Width of original image.
   * @property {boolean} is-resize Whether thumbnail is a resized variant of original image. If `false`, `url-thumbnail` equals `url-view`.
   * @property {string} url-thumbnail URL to resized and rotated image in file storage. If the original is larger than the specified dimensions, a thumbnail is created and its link is returned. Otherwise, the link to the original image is returned here.
   * @property {string} url-view URL to original image in file storage.
   */

  /**
   * @typedef {{}} Wl_Member_Progress_Log_Image_ImageModel_a_image
   * @property {Wl_Member_Progress_Log_Image_ImageModel_a_image_a_image} a_image Image storage data.
   * @property {number} i-size Max image size.
   * @property {number} i-thumbnail-height Image thumbnail height.
   * @property {number} i-thumbnail-width Image thumbnail width.
   * @property {string} s_link Image link.
   * @property {string} url-action Image upload url.
   */

  /**
   * Image data:
   *
   * @get result
   * @type {Wl_Member_Progress_Log_Image_ImageModel_a_image}
   */
  this.a_image = undefined;

  /**
   * Local date of the progress picture.
   *
   * `null` if not initialized yet.
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
   * `null` if not initialized yet.
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
   * `null` if not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_command = null;

  /**
   * User key.
   *
   * `null` if not initialized yet.
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
  return {"a_field":{"a_image":{"get":{"result":true}},"dt_date":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"s_command":{"post":{"post":true}},"uid":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Image_ImageModel.instanceGet
 * @param {?string} dt_date Local date of the progress picture. `null` if not initialized yet.
 * @param {?string} k_business Business key. `null` if not initialized yet.
 * @param {?string} uid User key. `null` if not initialized yet.
 * @returns {Wl_Member_Progress_Log_Image_ImageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Deletes progress image.
 *
 * Removes the progress picture for the specified user and date from storage and deletes the corresponding
 * progress log record from the database, then logs the change.
 *
 * @function
 * @name Wl_Member_Progress_Log_Image_ImageModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns progress picture data.
 *
 * Loads the progress picture for the specified user and date, returning image storage data, thumbnail
 * dimensions, the upload URL, and a direct link to the image.
 *
 * @function
 * @name Wl_Member_Progress_Log_Image_ImageModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves progress picture.
 *
 * Applies the image command from `$s_command` to the progress picture for the specified user and date,
 * persists the result in storage, and writes or updates the corresponding progress log record in the database.
 *
 * @function
 * @name Wl_Member_Progress_Log_Image_ImageModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
