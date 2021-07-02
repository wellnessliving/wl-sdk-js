/**
 * Api for change order of video levels.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Level_LevelListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Video_Level_LevelListModel_a_level_list
   * @property {string} k_video_level Video level key.
   * @property {string} text_title Title of the video level.
   */

  /**
   * List of video levels. Has next structure: <dl>
   *   <dt>string <var>k_video_level</var></dt>
   *   <dd>Video level key.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of the video level.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_Level_LevelListModel_a_level_list[]}
   */
  this.a_level_list = [];

  /**
   * List of video level keys in order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = [];

  /**
   * Business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Level_LevelListModel);

/**
 * @inheritDoc
 */
Wl_Video_Level_LevelListModel.prototype.config=function()
{
  return {"a_field": {"a_level_list": {"get": {"result": true}},"a_order": {"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Video_Level_LevelListModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Video_Level_LevelListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */