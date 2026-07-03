/**
 * Returns the list of videos for the specified business.
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
   * @typedef {{}} Wl_Video_VideoListModel_a_calorie
   * @property {number} i_from The minimum number of calories.
   * @property {number} i_to The maximum number of calories.
   */

  /**
   * The calorie range ascribed to the video to use for the search.
   *
   * @get get
   * @type {Wl_Video_VideoListModel_a_calorie[]}
   */
  this.a_calorie = undefined;

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_duration
   * @property {number} i_from The minimum duration.
   * @property {number} i_to The maximum duration.
   */

  /**
   * The duration range ascribed to the video to use for the search.
   * The interval is set in seconds.
   *
   * @get get
   * @type {Wl_Video_VideoListModel_a_duration[]}
   */
  this.a_duration = undefined;

  /**
   * A list of levels to show videos for. A level can refer to the difficulty ascribed to the video.
   *
   * @get get
   * @type {string[]}
   */
  this.a_level = undefined;

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_list_a_staff
   * @property {string} k_staff Staff key. Only for legacy apps.
   * @property {string} text_name Full name of the staff.
   * @property {string} uid_staff UID of the staff.
   */

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_list_a_video_category
   * @property {string} k_video_category Video category key.
   * @property {string} text_title Category name.
   */

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_list_a_video_tag
   * @property {string} k_video_tag Video tag key.
   * @property {string} text_title Tag name.
   */

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_list
   * @property {Wl_Video_VideoListModel_a_list_a_staff} a_staff List of staff members associated with the video.
   * @property {Wl_Video_VideoListModel_a_list_a_video_category} a_video_category List of video categories.
   * @property {Wl_Video_VideoListModel_a_list_a_video_tag} a_video_tag List of video tags.
   * @property {?string} dtl_publish Date and time when the video becomes published, in the business time zone. `null` if not set.
   * @property {?string} dtl_unpublish Date and time when the video becomes unpublished, in the business time zone. `null` if not set.
   * @property {string} dtl_upload Date and time when the video was uploaded, in the business time zone.
   * @property {string} html_description HTML description of the video parsed from `xml_description`.
   * @property {number} i_calorie Number of calories burned during the video session.
   * @property {number} i_current_percent Percentage of the video watched by the current user.
   * @property {number} i_current_time Current watch position in seconds for the current user.
   * @property {number} i_duration Video duration in seconds.
   * @property {number} i_watch Total number of views.
   * @property {number} id_source List of video types.
   * @property {boolean} is_calorie `true` if calorie information is enabled for this video; `false` otherwise.
   * @property {boolean} is_converted `true` if the video has been converted to HLS format; `false` otherwise.
   * @property {boolean} is_published `true` if the video is currently published; `false` otherwise.
   * @property {boolean} is_video_level `true` if a difficulty level is assigned to this video; `false` otherwise.
   * @property {string} k_business Business key.
   * @property {string} k_video Video key.
   * @property {string} k_video_binary Binary video key.
   * @property {?string} k_video_level Video level key. `null` if no level assigned.
   * @property {boolean} show_calorie `true` if calorie count should be displayed; `false` otherwise.
   * @property {boolean} show_level `true` if difficulty level should be displayed; `false` otherwise.
   * @property {boolean} show_view `true` if view count should be displayed; `false` otherwise.
   * @property {string} text_level_title Difficulty level title.
   * @property {string} text_title Video title.
   * @property {?string} url_thumbnail URL of the video thumbnail image.
   * @property {?string} url_video URL of the video file (HLS stream). `null` if not available. See {@link Wl_Video_VideoElementModel} for details about the video URL.
   */

  /**
   * A list of videos.
   * Each element:
   *
   * @get result
   * @type {Wl_Video_VideoListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * A list of locations to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * A list of shared video keys in their saved order.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * @typedef {{}} Wl_Video_VideoListModel_a_page
   * @property {boolean} is-next `true` for the "next page" navigation entry. Only present on the next-page entry.
   * @property {boolean} is-previous `true` for the "previous page" navigation entry. Only present on the previous-page entry.
   * @property {boolean} is-selected `true` if this entry represents the current page. Only present on the selected page entry.
   * @property {number} page Page number. `0` represents a skipped range (ellipsis) between non-adjacent pages.
   * @property {boolean} skip `true` if this entry represents a skipped page range (ellipsis). Only present on skip entries.
   */

  /**
   * Pagination data.
   * Empty array if pagination is not active (total video count is within `VIDEO_COUNT_PAGINATION`).
   * Otherwise contains a list of page entries as:
   *
   * @get result
   * @type {Wl_Video_VideoListModel_a_page}
   */
  this.a_page = undefined;

  /**
   * A list of video sources.
   *
   * @get get
   * @type {number[]}
   */
  this.a_source = undefined;

  /**
   * A list of staff members who appear in videos.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * A list of staff members who appear in videos.
   *
   * @get get
   * @type {string[]}
   */
  this.a_staff_uid = undefined;

  /**
   * A list of video categories to show videos from.
   *
   * @get get
   * @type {string[]}
   */
  this.a_video_category = undefined;

  /**
   * A list of video tags to show videos for.
   *
   * @get get
   * @type {string[]}
   */
  this.a_video_tag = undefined;

  /**
   * Page to return.
   * Pagination are ignored when count of videos less than `VIDEO_COUNT_PAGINATION`.
   *
   * `null` if you need to return all the videos.
   *
   * @get get
   * @type {?number}
   */
  this.i_page = null;

  /**
   * List of embed video sources.
   *
   * Last used ID: 4
   *
   * Values:
   * - 4 (`LES_MILLS`): Les Mills.
   * - 2 (`VIMEO`): Vimeo.
   * - 3 (`WISTIA`): Wistia.
   * - 1 (`YOUTUBE`): YouTube.
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
   * @see Core_Sid_SortOrderSid
   * @type {?number}
   */
  this.id_order = null;

  /**
   * The sorting type.
   * A constant from {@link Wl_Video_Catalog_Filter_Sort_FilterSortSid}. `null` or 0 if sort is undefined and custom sort order is used.
   *
   * @get get,result
   * @see Wl_Video_Catalog_Filter_Sort_FilterSortSid
   * @type {?number}
   */
  this.id_sort = null;

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
  this.json_setup = undefined;

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
   * NOTE: Not used directly in API, needed for `KEY` constant.
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
  return {"a_field":{"a_calorie":{"get":{"get":true}},"a_duration":{"get":{"get":true}},"a_level":{"get":{"get":true}},"a_list":{"get":{"result":true}},"a_location":{"get":{"get":true}},"a_order":{"put":{"post":true}},"a_page":{"get":{"result":true}},"a_source":{"get":{"get":true}},"a_staff":{"get":{"get":true}},"a_staff_uid":{"get":{"get":true}},"a_video_category":{"get":{"get":true}},"a_video_tag":{"get":{"get":true}},"i_page":{"get":{"get":true}},"id_embed_source":{"get":{"result":true},"put":{"result":true}},"id_order":{"get":{"get":true,"result":true}},"id_sort":{"get":{"get":true,"result":true}},"is_backend":{"get":{"get":true},"put":{"get":true}},"json_setup":{"get":{"result":true},"put":{"result":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"text_search":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Video_VideoListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {?string} uid UID of the client who request list of videos. `null` if user is not signed in. NOTE: Not used directly in API, needed for `KEY` constant.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Video_VideoListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of videos for the specified business.
 *
 * Returns videos for the business video library with optional filtering by category, tag,
 * difficulty level, staff, location, calorie range, and duration. Supports sorting and
 * pagination for large libraries. In frontend mode, results are restricted to videos the
 * current user is allowed to watch based on their membership and login type.
 *
 * @function
 * @name Wl_Video_VideoListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates the custom sort order of videos for the specified business.
 *
 * Reorders the video library according to the provided list. Only takes effect when the
 * library is configured to use the custom sort order. Requires backend access with the
 * video library management privilege.
 *
 * @function
 * @name Wl_Video_VideoListModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
