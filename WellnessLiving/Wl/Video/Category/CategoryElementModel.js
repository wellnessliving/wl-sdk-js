/**
 * An endpoint that saves video categories.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Category_CategoryElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of client and member types who can access videos from the category.
   *
   * @get result
   * @put post
   * @type {string[]}
   */
  this.a_login_type = undefined;

  /**
   * A list of member groups who can access videos from the category.
   *
   * @get result
   * @put post
   * @type {string[]}
   */
  this.a_member_group = undefined;

  /**
   * The category's placement in the business's list of categories.
   *
   * @get result
   * @type {number}
   */
  this.i_order = undefined;

  /**
   * This will be `true` if the video category is for cloud session recordings. Otherwise, this will be `false`.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_cloud_recording = false;

  /**
   * This will be `true` if some client or member types can grant access to the video category. Otherwise, this will be
   * `false`.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_login_type = undefined;

  /**
   * This will be `true` if some member groups can grant access to the video category.
   * Otherwise, this will be `false` if no member groups can grant access to the video category.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_member_group = false;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The category key.
   *
   * @delete get
   * @get get,result
   * @put get,result
   * @type {string}
   */
  this.k_video_category = undefined;

  /**
   * The category name.
   *
   * @get result
   * @put post
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Category_CategoryElementModel);

/**
 * @inheritDoc
 */
Wl_Video_Category_CategoryElementModel.prototype.config=function()
{
  return {"a_field": {"a_login_type": {"get": {"result": true},"put": {"post": true}},"a_member_group": {"get": {"result": true},"put": {"post": true}},"i_order": {"get": {"result": true}},"is_cloud_recording": {"get": {"result": true},"put": {"post": true}},"is_login_type": {"get": {"result": true},"put": {"post": true}},"is_member_group": {"get": {"result": true},"put": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"put": {"get": true}},"k_video_category": {"delete": {"get": true},"get": {"get": true,"result": true},"put": {"get": true,"result": true}},"text_title": {"get": {"result": true},"put": {"post": true}}}};
};