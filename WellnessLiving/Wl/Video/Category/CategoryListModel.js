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
function Wl_Video_Category_CategoryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_backend";

  /**
   * List of shard video category keys in order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = undefined;

  /**
   * @typedef {{}} Wl_Video_Category_CategoryListModel_a_video_category
   * @property {boolean} can_delete Whether video category can be deleted.
   * @property {number} i_video Number of videos.
   * @property {string} k_video_category Key of the video category.
   * @property {string} k_video_category_full String key of the video category.
   * @property {string} text_title Title of the category.
   */

  /**
   * Categories of business video library {@link Wl_Video_Category_CategoryListModel.k_business}.
   *
   * Each element has next structure: <dl>
   *   <dt>bool <var>can_delete</var></dt>
   *   <dd>Whether video category can be deleted.</dd>
   *   <dt>int <var>i_video</var></dt>
   *   <dd>Number of videos.</dd>
   *   <dt>string <var>k_video_category</var></dt>
   *   <dd>Key of the video category.</dd>
   *   <dt>string <var>k_video_category_full</var></dt>
   *   <dd>String key of the video category.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of the category.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_Category_CategoryListModel_a_video_category[]}
   */
  this.a_video_category = undefined;

  /**
   * <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
   *
   * @get get
   * @put get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * <tt>true</tt> if skip group without video, <tt>false</tt> otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_skip_empty_group = undefined;

  /**
   * Key of the business.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Filter phrase to filter categories by name.
   *
   * @get get
   * @type {string}
   */
  this.text_filter = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Category_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Video_Category_CategoryListModel.prototype.config=function()
{
  return {"a_field": {"a_order": {"put": {"post": true}},"a_video_category": {"get": {"result": true}},"is_backend": {"get": {"get": true},"put": {"get": true}},"is_skip_empty_group": {"get": {"get": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"text_filter": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Video_Category_CategoryListModel.instanceGet
 * @param {string} k_business Key of the business.
 * @param {boolean} is_backend <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
 * @returns {Wl_Video_Category_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */