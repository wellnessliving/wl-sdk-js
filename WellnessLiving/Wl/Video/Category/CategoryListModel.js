/**
 * Returns the list of video categories for the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Category_CategoryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_backend";

  /**
   * A list of shared video category keys displayed in the order to be saved.
   *
   * Values can be:
   * * <b>[Deprecated]</b> String keys in old format. 
   * * String keys in new format.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * @typedef {{}} Wl_Video_Category_CategoryListModel_a_video_category
   * @property {boolean} can_delete Determines whether the video category can be deleted.
   * @property {number} i_video The number of videos.
   * @property {string} k_video_category The key of the video category.
   * @property {string} k_video_category_full The string key of the video category.
   * @property {string} text_title The title of the category.
   */

  /**
   * The business video library categories as found in {@link Wl_Video_Category_CategoryListModel}.
   *
   * Each element has the following structure:
   *
   * @get result
   * @type {Wl_Video_Category_CategoryListModel_a_video_category[]}
   */
  this.a_video_category = undefined;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @put get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * If `true`, groups that are missing videos won't be displayed. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_skip_empty_group = false;

  /**
   * The business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The filter phrase used to filter categories by name.
   *
   * @get get
   * @type {string}
   */
  this.text_filter = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Category_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Video_Category_CategoryListModel.prototype.config=function()
{
  return {"a_field":{"a_order":{"put":{"post":true}},"a_video_category":{"get":{"result":true}},"is_backend":{"get":{"get":true},"put":{"get":true}},"is_skip_empty_group":{"get":{"get":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"text_filter":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Video_Category_CategoryListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Video_Category_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of video categories for the business.
 *
 * Returns all video categories for the business with their titles, video counts, and cloud
 * recording assignment. In frontend mode, only categories accessible to the current user are
 * included. Results can be filtered by name and optionally limited to non-empty categories.
 *
 * @function
 * @name Wl_Video_Category_CategoryListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates the order of video categories.
 *
 * Reorders the video library categories for the business according to the provided list.
 * Requires backend access with the video library management privilege.
 *
 * @function
 * @name Wl_Video_Category_CategoryListModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
