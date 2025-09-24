/**
 * Returns a list of videos.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_VideoListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_backend";

  /**
   * The calorie range ascribed to the video to use for the search.
   *
   * <dl>
   *  <dt>int [<var>i_from</var>]</dt>
   *  <dd>The minimum number of calories.</dd>
   *  <dt>int [<var>i_to</var>]</dt>
   *  <dd>The maximum number of calories.</dd>
   * </dl>
   *
   * @get get
   * @type {number[]}
   */
  this.a_calorie = [];

  /**
   * The duration range ascribed to the video to use for the search.
   * The interval is set in seconds.
   *
   * <dl>
   *  <dt>int [<var>i_from</var>]</dt>
   *  <dd>The minimum duration. </dd>
   *  <dt>int [<var>i_to</var>]</dt>
   *  <dd>The maximum duration.</dd>
   * </dl>
   *
   * @get get
   * @type {number[]}
   */
  this.a_duration = [];

  /**
   * A list of levels to show videos for. A level can refer to the difficulty ascribed to the video.
   *
   * @get get
   * @type {string[]}
   */
  this.a_level = [];

  /**
   * A list of videos.
   *
   * See {@link Wl_Video_VideoElementModel.url_video} for details about the video URL.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = [];

  /**
   * A list of locations to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_location = [];

  /**
   * A list of shared video keys in their saved order.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = [];

  /**
   * Pagination data.
   *
   * @get result
   * @type {{}}
   */
  this.a_page = [];

  /**
   * A list of video sources.
   *
   * @get get
   * @see Wl_Video_VideoSourceSid
   * @type {string[]}
   */
  this.a_source = [];

  /**
   * A list of staff members who appear in videos.
   *
   * @deprecated This property will be removed in the future. Use {@link Wl_Video_VideoListModel.a_staff_uid} instead.
   * @get get
   * @type {string[]}
   */
  this.a_staff = [];

  /**
   * A list of staff members who appear in videos.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff_uid = [];

  /**
   * A list of video categories to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_video_category = [];

  /**
   * A list of video tags to show videos for.
   *
   * @get get
   * @type {string[]}
   */
  this.a_video_tag = [];

  /**
   * Page to return.
   * Pagination are ignored when count of videos less than {@link Wl_Video_VideoListModel.VIDEO_COUNT_PAGINATION}.
   *
   * `null` if you need to return all the videos.
   *
   * @get get
   * @type {?number}
   */
  this.i_page = null;

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
   * Sort order ID. One of {@link Core_Sid_SortOrderSid} constants. `null` or 0 if order is undefined and depends on sort order.
   *
   * @get get,result
   * @type {?number}
   */
  this.id_order = 0;

  /**
   * The sorting type.
   * A constant from {@link Wl_Video_Catalog_Filter_Sort_FilterSortSid}. `null` or 0 if sort is undefined and custom sort order is used.
   *
   * @get get,result
   * @type {?number}
   */
  this.id_sort = 0;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @put get
   * @type {boolean}
   */
  this.is_backend = false;

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
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The filter phrase to filter videos by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  /**
   * UID of the client who request list of videos.
   *
   * `null` if user is not signed in.
   *
   * NOTE: Not used directly in API, needed for {@link Wl_Video_VideoListModel.KEY} constant.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_VideoListModel);

/**
 * @inheritDoc
 */
Wl_Video_VideoListModel.prototype.config=function()
{
  return {"a_field": {"a_calorie": {"get": {"get": true}},"a_duration": {"get": {"get": true}},"a_level": {"get": {"get": true}},"a_list": {"get": {"result": true}},"a_location": {"get": {"get": true}},"a_order": {"put": {"post": true}},"a_page": {"get": {"result": true}},"a_source": {"get": {"get": true}},"a_staff": {"get": {"get": true}},"a_staff_uid": {"get": {"get": true}},"a_video_category": {"get": {"get": true}},"a_video_tag": {"get": {"get": true}},"i_page": {"get": {"get": true}},"id_embed_source": {"get": {"result": true},"put": {"result": true}},"id_order": {"get": {"get": true,"result": true}},"id_sort": {"get": {"get": true,"result": true}},"is_backend": {"get": {"get": true},"put": {"get": true}},"json_setup": {"get": {"result": true},"put": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"text_search": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Video_VideoListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {?string} uid UID of the client who request list of videos. `null` if user is not signed in. NOTE: Not used directly in API, needed for {@link Wl_Video_VideoListModel.KEY} constant.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Video_VideoListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */