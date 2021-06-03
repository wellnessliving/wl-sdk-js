/**
 * Api for manage video settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Setting_SettingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * <tt>true</tt> if calories is available for video, <tt>false</tt> otherwise.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.show_calorie = undefined;

  /**
   * <tt>true</tt> if levels is available for video, <tt>false</tt> otherwise.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.show_level = undefined;

  /**
   * <tt>true</tt> if calories is available for video, <tt>false</tt> otherwise.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.show_view = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Setting_SettingModel);

/**
 * @inheritDoc
 */
Wl_Video_Setting_SettingModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true},"put": {"get": true}},"show_calorie": {"get": {"result": true},"put": {"post": true}},"show_level": {"get": {"result": true},"put": {"post": true}},"show_view": {"get": {"result": true},"put": {"post": true}}}};
};