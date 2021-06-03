/**
 * Api for get video tags.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Tag_TagListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Video_Tag_TagListModel_a_tag_list
   * @property {string} k_video_tag Video tag key.
   * @property {string} text_title Title of the video tag.
   */

  /**
   * List of video tags. Has next structure: <dl>
   *   <dt>string <var>k_video_tag</var></dt>
   *   <dd>Video tag key.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of the video tag.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_Tag_TagListModel_a_tag_list[]}
   */
  this.a_tag_list = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Tag_TagListModel);

/**
 * @inheritDoc
 */
Wl_Video_Tag_TagListModel.prototype.config=function()
{
  return {"a_field": {"a_tag_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Video_Tag_TagListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Video_Tag_TagListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */