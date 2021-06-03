/**
 * Api for retrieves/change/delete video level.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Level_LevelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if confirmation for delete video level which currently
   * associated to one or more videos, <tt>false</tt> otherwise.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_delete_confirm = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Video level key.
   *
   * @delete get
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_video_level = undefined;

  /**
   * Title of the video level.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Level_LevelModel);

/**
 * @inheritDoc
 */
Wl_Video_Level_LevelModel.prototype.config=function()
{
  return {"a_field": {"is_delete_confirm": {"delete": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_video_level": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"text_title": {"post": {"post": true},"put": {"post": true}}}};
};