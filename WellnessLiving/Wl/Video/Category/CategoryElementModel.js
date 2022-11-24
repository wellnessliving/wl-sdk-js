/**
 * Api to save video categories.
 *
 * Results of the methods can be viewed in the model.
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
   * List of client and member types, who can access videos from the category.
   *
   * @get result
   * @put post
   * @type {string[]}
   */
  this.a_login_type = undefined;

  /**
   * List of member groups, who can access videos from the category.
   *
   * @get result
   * @put post
   * @type {string[]}
   */
  this.a_member_group = undefined;

  /**
   * Place of the category in the list of categories of the business.
   *
   * @get result
   * @type {number}
   */
  this.i_order = undefined;

  /**
   * <tt>true</tt> if video category is for cloud session recordings.
   * Otherwise <tt>false</tt> if video category is not for cloud session recordings.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_cloud_recording = false;

  /**
   * <tt>true</tt> if some client or member types can grant access to the video category, <tt>false</tt> otherwise.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_login_type = undefined;

  /**
   * <tt>true</tt> if some member groups can grant access to the video category.
   * Otherwise <tt>false</tt> if none of the member groups can grant access to the video category.
   *
   * @get result
   * @put post
   * @type {boolean}
   */
  this.is_member_group = false;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Category key from {@link VideoCategorySql}.
   *
   * @delete get
   * @get get,result
   * @put get,result
   * @type {string}
   */
  this.k_video_category = undefined;

  /**
   * Name of the category.
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