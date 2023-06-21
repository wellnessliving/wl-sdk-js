/**
 * An endpoint that changes the order of video levels.
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
   * @property {string} k_video_level The video level key.
   * @property {string} text_title The video level title.
   */

  /**
   * A list of video levels with the following structure: <dl>
   *   <dt>string <var>k_video_level</var></dt>
   *   <dd>The video level key.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The video level title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Video_Level_LevelListModel_a_level_list[]}
   */
  this.a_level_list = [];

  /**
   * A list of video level keys in the order to be saved.
   *
   * @put post
   * @type {string[]}
   */
  this.a_order = [];

  /**
   * The business key.
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
 * @param {string} k_business The business key.
 * @returns {Wl_Video_Level_LevelListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */