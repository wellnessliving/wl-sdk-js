/**
 * An endpoint that retrieves, changes, or deletes a video tag.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Tag_TagModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, confirmation is required to delete videos. Otherwise, this will be `false`.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_delete_confirm = undefined;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The video tag key.
   *
   * @delete get
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_video_tag = undefined;

  /**
   * The video tag title.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Tag_TagModel);

/**
 * @inheritDoc
 */
Wl_Video_Tag_TagModel.prototype.config=function()
{
  return {"a_field": {"is_delete_confirm": {"delete": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_video_tag": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"text_title": {"post": {"post": true},"put": {"post": true}}}};
};