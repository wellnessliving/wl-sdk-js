/**
 * Manages a list of banners.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Notification_Banner_BannerListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of banners.
   *
   * @get result
   * @type {{}}
   */
  this.a_banner_list = undefined;

  /**
   * The key of the business where the list of available banners will be loaded.
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the banner to be closed.
   * Primary key in the {@link \Wl\Notification\Banner\BannerSql} table.
   *
   * @put post
   * @type {string}
   */
  this.k_notification_banner = "";

  /**
   * User for which available banners will be loaded.
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Notification_Banner_BannerListModel);

/**
 * @inheritDoc
 */
Wl_Notification_Banner_BannerListModel.prototype.config=function()
{
  return {"a_field": {"a_banner_list": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_notification_banner": {"put": {"post": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Notification_Banner_BannerListModel.instanceGet
 * @param {string} k_business The key of the business where the list of available banners will be loaded. Primary key in {@link \RsBusinessSql}.
 * @param {string} uid User for which available banners will be loaded. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_Notification_Banner_BannerListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */