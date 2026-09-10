/**
 * Gets list of assets in business `k_business`.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource_a_image_a_image
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
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource_a_image
   * @property {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource_a_image_a_image} a_image Image data.
   * @property {number} i_angle Angle of shape rotation. Is set only if `sid_image` equals to `shape`.
   * @property {number} i_height Height of image.
   * @property {number} i_width Width of image.
   * @property {boolean} is_empty Whether is empty.
   * @property {string} k_resource Resource key.
   * @property {string} sid_image Image kind. String representation of one of {@link Wl_Resource_Image_ImageSid} constants.
   * @property {string} sid_image_icon Icon name. String representation of one of {@link Wl_Resource_Image_ImageIconSid} constants. Is set only if `sid_image` equals to `image`.
   * @property {string} sid_image_shape Shape name. String representation of one of {@link Wl_Resource_Image_ImageShapeSid} constants. Is set only if `sid_image` equals to `shape`.
   * @property {string} url Path to image.
   */

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource
   * @property {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource_a_image} a_image Data of asset image.
   * @property {string} text_title Asset title.
   */

  /**
   * List of assets. Keys - asset IDs. 
   * Values - sub array with next keys:
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource}
   */
  this.a_resource = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel.prototype.config=function()
{
  return {"a_field":{"a_resource":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of assets in business `k_business`.
 *
 * Returns active assets available at locations the current staff member can access, together with
 * asset images and their configured work and break periods.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
