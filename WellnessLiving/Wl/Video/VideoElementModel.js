/**
 * Api to return list of video categories.
 *
 * Results of the methods can be viewed in the model.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_VideoElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_video,is_backend";

  /**
   * Keys of the locations, where this video is available.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * Keys of the staff members, who are on the video.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * @typedef {{}} Wl_Video_VideoElementModel_a_staff_info
   * @property {string} k_staff Key of the staff. Primary key in {@link \RsStaffSql} table.
   * @property {string} text_name Full staff name.
   */

  /**
   * List of staff members to show videos with. Every item has next structure:<dl>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Key of the staff. Primary key in {@link \RsStaffSql} table.</dd>
   *   <dt>string <var>text_name</var></dt>
   *   <dd>Full staff name.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_VideoElementModel_a_staff_info}
   */
  this.a_staff_info = undefined;

  /**
   * Keys of the video category, where these video can be found.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_video_category = undefined;

  /**
   * Keys of the video tag.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_video_tag = undefined;

  /**
   * Date and time when video published
   *
   * <tt>null</tt> if published date is not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_publish = null;

  /**
   * Date and time when video unpublished
   *
   * <tt>null</tt> if unpublished date is not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_unpublish = null;

  /**
   * Date when video upload.
   *
   * @get result
   * @type {string}
   */
  this.dtl_upload = undefined;

  /**
   * Video file.
   * This property is not used, but need for correct generate model.
   *
   * @post post
   * @type {{}}
   */
  this.file_video = undefined;

  /**
   * Count of burned calories.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_calorie = 0;

  /**
   * Current time as a percentage of the video duration at which the user is at in the video.
   *
   * @get result
   * @type {number}
   */
  this.i_current_percent = undefined;

  /**
   * Current time in seconds at which the user is at in the video.
   *
   * @get result
   * @type {number}
   */
  this.i_current_time = undefined;

  /**
   * Duration of video.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Size of the uploaded file.
   *
   * If the file will be uploaded in parts, size will be set.
   *
   * In this case, the file will not be uploaded to this API.
   * Method {@link VideoElementApi::_fileVideoGet()} will not return the result.
   *
   * @post post
   * @type {number|string}
   */
  this.i_file_upload_size = "";

  /**
   * Number of video views.
   *
   * @get result
   * @type {number}
   */
  this.i_watch = undefined;

  /**
   * {@link YesNoSid::NO} if video is available in all locations.
   * {@link YesNoSid::YES} if video is available only in certain locations.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_location_select = undefined;

  /**
   * <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
   *
   * @delete get
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * <tt>true</tt> if display calories on video.
   * <tt>false</tt> if hide calories on video.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_calorie = undefined;

  /**
   * `true` if video is converted.
   * `false` if video is not converted.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_converted = undefined;

  /**
   * <tt>true</tt> if video is published, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_published = undefined;

  /**
   * <tt>true</tt> if enable video level for video.
   * <tt>false</tt> if disable video level for video.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_video_level = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Video key from {@link VideoSql}.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_video = undefined;

  /**
   * Video category primary key.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_video_category_primary = undefined;

  /**
   * Video level key.
   * <tt>0</tt> if select <tt>All Levels</tt>
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_video_level = undefined;

  /**
   * Name of the command that had been executing when exception occurred.
   *
   * @post post
   * @type {string}
   */
  this.s_command = "";

  /**
   * ID of the uploaded file.
   * If the file will be uploaded in parts, upload ID will be set.
   *
   * In this case, the file will not be uploaded to this API.
   * Method {@link VideoElementApi::_fileVideoGet()} will not return the result.
   *
   * @post post
   * @type {string}
   */
  this.s_file_upload_id = "";

  /**
   * The real name of the uploaded file.
   *
   * If the file will be uploaded in parts, the name will be set.
   *
   * In this case, the file will not be uploaded to this API.
   * Method {@link VideoElementApi::_fileVideoGet()} will not return the result.
   *
   * @post post
   * @type {string}
   */
  this.s_file_upload_name = "";

  /**
   * String representation of video's key.
   *
   * <tt>null</tt> if video does not have thumbnail image.
   *
   * @get result
   * @type {?string}
   */
  this.s_preview_video_key = null;

  /**
   * Thumbnail of video.
   *
   * @post post
   * @type {string}
   */
  this.s_thumbnail = undefined;

  /**
   * <tt>false</tt> if number of calorie on videos is hidden, <tt>true</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_calorie = undefined;

  /**
   * <tt>false</tt> if levels of videos is hidden, <tt>true</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_level = undefined;

  /**
   * <tt>false</tt> if number of views on videos is hidden, <tt>true</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.show_view = undefined;

  /**
   * Name of video level.
   *
   * @get result
   * @type {string}
   */
  this.text_level_title = undefined;

  /**
   * Name of the video.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * Url of the thumbnail for video.
   *
   * @get result
   * @type {string}
   */
  this.url_thumbnail = undefined;

  /**
   * Url of the video.
   *
   * @get result
   * @type {?string}
   */
  this.url_video = null;

  /**
   * Direct url of the video.
   *
   * @get result
   * @type {string}
   */
  this.url_video_direct = undefined;

  /**
   * Description of the video.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.xml_description = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_VideoElementModel);

/**
 * @inheritDoc
 */
Wl_Video_VideoElementModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true},"post": {"post": true}},"a_staff": {"get": {"result": true},"post": {"post": true}},"a_staff_info": {"get": {"result": true}},"a_video_category": {"get": {"result": true},"post": {"post": true}},"a_video_tag": {"get": {"result": true},"post": {"post": true}},"dtl_publish": {"get": {"result": true},"post": {"post": true}},"dtl_unpublish": {"get": {"result": true},"post": {"post": true}},"dtl_upload": {"get": {"result": true}},"file_video": {"post": {"post": true}},"i_calorie": {"get": {"result": true},"post": {"post": true}},"i_current_percent": {"get": {"result": true}},"i_current_time": {"get": {"result": true}},"i_duration": {"get": {"result": true},"post": {"post": true}},"i_file_upload_size": {"post": {"post": true}},"i_watch": {"get": {"result": true}},"id_location_select": {"get": {"result": true},"post": {"post": true}},"is_backend": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"is_calorie": {"get": {"result": true},"post": {"post": true}},"is_converted": {"get": {"result": true},"post": {"get": true}},"is_published": {"get": {"result": true}},"is_video_level": {"get": {"result": true},"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_video": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"k_video_category_primary": {"get": {"result": true},"post": {"post": true}},"k_video_level": {"get": {"result": true},"post": {"post": true}},"s_command": {"post": {"post": true}},"s_file_upload_id": {"post": {"post": true}},"s_file_upload_name": {"post": {"post": true}},"s_preview_video_key": {"get": {"result": true}},"s_thumbnail": {"post": {"post": true}},"show_calorie": {"get": {"result": true}},"show_level": {"get": {"result": true}},"show_view": {"get": {"result": true}},"text_level_title": {"get": {"result": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"url_thumbnail": {"get": {"result": true}},"url_video": {"get": {"result": true}},"url_video_direct": {"get": {"result": true}},"xml_description": {"get": {"result": true},"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Video_VideoElementModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @param {string} k_video Video key from {@link VideoSql}.
 * @param {boolean} is_backend <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
 * @returns {Wl_Video_VideoElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */