/**
 * Returns a list of video categories.
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
   * The keys of the locations where this video is available.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * The keys of the staff members who are on the video.
   *
   * @deprecated This property will be removed in the future. Use {@link Wl_Video_VideoElementModel.a_staff_uid} instead.
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_staff = [];

  /**
   * @typedef {{}} Wl_Video_VideoElementModel_a_staff_info
   * @property {*} k_staff The staff member key.
   * @property {string} text_name The staff member's full name.
   * @property {string} uid_staff The staff user ID.`uid`.
   */

  /**
   * A list of staff members associated with the video. Every item has the following structure:<dl>
   *   <dt>string <var>k_staff</var> <b>(deprecated)</b></dt>
   *   <dd>The staff member key.</dd>
   *   <dt>string <var>text_name</var></dt>
   *   <dd>The staff member's full name.</dd>
   *   <dt>string <var>uid_staff</var></dt>
   *   <dd>The staff user ID.`uid`.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_VideoElementModel_a_staff_info}
   */
  this.a_staff_info = [];

  /**
   * The user IDs of the staff members who are on the video.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_staff_uid = [];

  /**
   * The video category keys where this video can be found.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_video_category = undefined;

  /**
   * The video tag keys.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_video_tag = undefined;

  /**
   * The date and time when the video was published.
   *
   * This will be `null` if the published date is not set yet.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_publish = null;

  /**
   * The date and time when the video was unpublished.
   *
   * This will be `null` if the unpublished date is not set yet.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_unpublish = null;

  /**
   * The date when the video was uploaded.
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
   * The video embed code.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.html_embed = "";

  /**
   * The count of burned calories associated with the video.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_calorie = 0;

  /**
   * The current time as a percentage of the video duration at which the user is at in the video.
   *
   * @get result
   * @type {number}
   */
  this.i_current_percent = undefined;

  /**
   * The current time in seconds at which the user is at in the video.
   *
   * @get result
   * @type {number}
   */
  this.i_current_time = undefined;

  /**
   * The video duration in seconds.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * The size of the uploaded file.
   *
   * If the file will be uploaded in parts, its size will be set.
   *
   * In this case, the file will not be uploaded to this API.
   * Method {@link Wl_Video_VideoElementModel._fileVideoGet()} will not return the result.
   *
   * @post post
   * @type {number|string}
   */
  this.i_file_upload_size = "";

  /**
   * The number of video views.
   *
   * @get result
   * @type {number}
   */
  this.i_watch = undefined;

  /**
   * Embedded video source.
   * One of {@link Wl_Video_VideoEmbedSourceSid} constants.
   *
   * `null` if video is uploaded.
   *
   * @get result
   * @put result
   * @type {?number}
   */
  this.id_embed_source = null;

  /**
   * {@link Core_Sid_YesNoSid.NO} if the video is available in all locations.
   * {@link Core_Sid_YesNoSid.YES} if the video is available only in certain locations.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_location_select = undefined;

  /**
   * Source of the video.
   *
   * One of {@link Wl_Video_VideoSourceSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_source = 1;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @delete get
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If `true`, the calorie count will be displayed on the video.
   * If `false`, the calorie count will be hidden on the video.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_calorie = undefined;

  /**
   * If `true`, the video is converted.
   * If `false`, the video isn't converted.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_converted = undefined;

  /**
   * If `true`, the video is published. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_published = undefined;

  /**
   * If `true`, the video level for the video is enabled.
   * If `false`, the video level for the video is disabled.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_video_level = undefined;

  /**
   * Video.js media player initialization parameters in JSON format.
   *
   * Usage example:
   *      <script>
   *          videojs($('video'), {
   *              "techOrder": ["Vimeo"],
   *              "sources": [
   *                  {"type": "video/vimeo", "src": "https://vimeo.com/123456789"}
   *              ]
   *          });
   *      </script>
   *
   * @get result
   * @put result
   * @type {string}
   */
  this.json_setup = "";

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The video key.
   *
   * *Be careful, when use this property in code, use {@link Wl_Video_VideoElementModel.k_video_binary} instead.*
   * In this property can be key in next format:
   * * [Deprecated] String key in old format. See {@link Core\Db\Shard\DbShardKey::keyString()}.
   * * String key in new format. See {@link Core\Db\Shard\DbShardKey::keyBinary()} or {@link Core\Db\DbKey::generate()}.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_video = undefined;

  /**
   * The binary string video key.
   *
   * @get result
   * @type {string}
   */
  this.k_video_binary = undefined;

  /**
   * The video category primary key.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_video_category_primary = undefined;

  /**
   * The video level key.
   * This will be `0` if `All Levels` is selected.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.k_video_level = undefined;

  /**
   * The action that must be performed to the video thumbnail image.
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
   * Method {@link Wl_Video_VideoElementModel._fileVideoGet()} will not return the result.
   *
   * @post post
   * @type {string}
   */
  this.s_file_upload_id = "";

  /**
   * The real name of the uploaded file.
   *
   * If the file will be uploaded in parts, its name will be set.
   *
   * In this case, the file won't be uploaded to this API and the POST method won't
   * return the result.
   *
   * @post post
   * @type {string}
   */
  this.s_file_upload_name = "";

  /**
   * The string representation of the video's key.
   *
   * This will be `null` if the video doesn't have a thumbnail image.
   *
   * @get result
   * @type {?string}
   */
  this.s_preview_video_key = null;

  /**
   * The video thumbnail.
   *
   * @post post
   * @type {string}
   */
  this.s_thumbnail = undefined;

  /**
   * If `false`, the calorie count for videos is hidden. Otherwise, this will be `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.show_calorie = undefined;

  /**
   * If `false`, video levels are hidden. Otherwise, this will be `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.show_level = undefined;

  /**
   * If `false`, the number of views for videos is hidden. Otherwise, this will be `true`.
   *
   * @get result
   * @type {boolean}
   */
  this.show_view = undefined;

  /**
   * The video level name.
   *
   * @get result
   * @type {string}
   */
  this.text_level_title = undefined;

  /**
   * The video name.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The URL of the video thumbnail.
   *
   * @get result
   * @type {string}
   */
  this.url_thumbnail = undefined;

  /**
   * The URL of the video file.
   *
   * This URL return with domain which you use when you call this API.
   * In case when you make request to local domain and video is
   * {@link Wl_Video_VideoElementModel.is_converted} links in file will have global domain and for correct
   * work you must replace global domain to local.
   *
   * Example for `videojs` player you can override method `beforeRequest`: <code>
   *  videojs.Vhs.xhr.beforeRequest = function(options)
   *  {
   *    if (options.uri.startsWith('https://www.'))
   *    {
   *      options.uri = options.uri.replace('https://www.', 'https://us.');
   *    }
   *    return options;
   *  }
   * </code>
   *
   * @get result
   * @type {?string}
   */
  this.url_video = null;

  /**
   * The direct URL of the video.
   *
   * @get result
   * @type {string}
   */
  this.url_video_direct = undefined;

  /**
   * The direct URL of the video for iframe.
   *
   * @get result
   * @type {string}
   */
  this.url_video_frame = undefined;

  /**
   * The video description.
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
  return {"a_field": {"a_location": {"get": {"result": true},"post": {"post": true}},"a_staff": {"get": {"result": true},"post": {"post": true}},"a_staff_info": {"get": {"result": true}},"a_staff_uid": {"get": {"result": true},"post": {"post": true}},"a_video_category": {"get": {"result": true},"post": {"post": true}},"a_video_tag": {"get": {"result": true},"post": {"post": true}},"dtl_publish": {"get": {"result": true},"post": {"post": true}},"dtl_unpublish": {"get": {"result": true},"post": {"post": true}},"dtl_upload": {"get": {"result": true}},"file_video": {"post": {"post": true}},"html_embed": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"i_calorie": {"get": {"result": true},"post": {"post": true}},"i_current_percent": {"get": {"result": true}},"i_current_time": {"get": {"result": true}},"i_duration": {"get": {"result": true},"post": {"post": true}},"i_file_upload_size": {"post": {"post": true}},"i_watch": {"get": {"result": true}},"id_embed_source": {"get": {"result": true},"put": {"result": true}},"id_location_select": {"get": {"result": true},"post": {"post": true}},"id_source": {"get": {"result": true},"post": {"post": true}},"is_backend": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"is_calorie": {"get": {"result": true},"post": {"post": true}},"is_converted": {"get": {"result": true},"post": {"get": true}},"is_published": {"get": {"result": true}},"is_video_level": {"get": {"result": true},"post": {"post": true}},"json_setup": {"get": {"result": true},"put": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_video": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"k_video_binary": {"get": {"result": true}},"k_video_category_primary": {"get": {"result": true},"post": {"post": true}},"k_video_level": {"get": {"result": true},"post": {"post": true}},"s_command": {"post": {"post": true}},"s_file_upload_id": {"post": {"post": true}},"s_file_upload_name": {"post": {"post": true}},"s_preview_video_key": {"get": {"result": true}},"s_thumbnail": {"post": {"post": true}},"show_calorie": {"get": {"result": true}},"show_level": {"get": {"result": true}},"show_view": {"get": {"result": true}},"text_level_title": {"get": {"result": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"url_thumbnail": {"get": {"result": true}},"url_video": {"get": {"result": true}},"url_video_direct": {"get": {"result": true}},"url_video_frame": {"get": {"result": true}},"xml_description": {"get": {"result": true},"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Video_VideoElementModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} k_video The video key. *Be careful, when use this property in code, use {@link Wl_Video_VideoElementModel.k_video_binary} instead.* In this property can be key in next format: * [Deprecated] String key in old format. See {@link Core\Db\Shard\DbShardKey::keyString()}. * String key in new format. See {@link Core\Db\Shard\DbShardKey::keyBinary()} or {@link Core\Db\DbKey::generate()}.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Video_VideoElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */