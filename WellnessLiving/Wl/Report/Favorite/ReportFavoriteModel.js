/**
 * API point to manages favorite reports.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Favorite_ReportFavoriteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "cid_controller,k_report_save";

  /**
   * CID of the controller.
   *
   * Subclass of the {@link ReportViewControllerAbstract}.
   *
   * @delete get
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_controller = undefined;

  /**
   * Whether report is favorite.
   *
   * @get result
   * @type {boolean}
   */
  this.is_favorite = undefined;

  /**
   * Business key within which request is performed.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Saved report key to manage.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * UID user's key of the actor.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Favorite_ReportFavoriteModel);

/**
 * @inheritDoc
 */
Wl_Report_Favorite_ReportFavoriteModel.prototype.config=function()
{
  return {"a_field": {"cid_controller": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"is_favorite": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_report_save": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid_actor": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Favorite_ReportFavoriteModel.instanceGet
 * @param {number} cid_controller CID of the controller. Subclass of the {@link ReportViewControllerAbstract}.
 * @param {string} k_report_save Saved report key to manage.
 * @returns {Wl_Report_Favorite_ReportFavoriteModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */