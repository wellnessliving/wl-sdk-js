/**
 * An endpoint that returns a list of video categories.
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
   * A list of shared video category keys displayed in the order to be saved.
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
   * The business video library categories as found in {@link Wl_Video_Category_CategoryListModel.k_business}.
   *
   * Each element has the following structure: <dl>
   *   <dt>bool <var>can_delete</var></dt>
   *   <dd>Determines whether the video category can be deleted.</dd>
   *   <dt>int <var>i_video</var></dt>
   *   <dd>The number of videos.</dd>
   *   <dt>string <var>k_video_category</var></dt>
   *   <dd>The key of the video category.</dd>
   *   <dt>string <var>k_video_category_full</var></dt>
   *   <dd>The string key of the video category.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The title of the category.</dd>
   * </dl>
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
  this.is_skip_empty_group = undefined;

  /**
   * The business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The filter phrase used to filter categories by name.
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
 * @param {string} k_business The business key.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Video_Category_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */