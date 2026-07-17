/**
 * Removes report controller from favorites.
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
   * @delete get
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_controller = 0;

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
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Saved report key to manage.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_report_save = "";

  /**
   * UID user's key of the actor.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Favorite_ReportFavoriteModel);

/**
 * @inheritDoc
 */
Wl_Report_Favorite_ReportFavoriteModel.prototype.config=function()
{
  return {"a_field":{"cid_controller":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"is_favorite":{"get":{"result":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"k_report_save":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}},"uid_actor":{"delete":{"get":true},"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_Favorite_ReportFavoriteModel.instanceGet
 * @param {number} cid_controller CID of the controller.
 * @param {string} k_report_save Saved report key to manage.
 * @returns {Wl_Report_Favorite_ReportFavoriteModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes report controller from favorites.
 *
 * Deletes the favorite record for the current user that matches either the specified saved report
 * or the report controller within the current business.
 *
 * @function
 * @name Wl_Report_Favorite_ReportFavoriteModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns information whether passed report controller (saved report controller) is favorite for the specified user
  within specified business.
 *
 * Populates {@link Wl_Report_Favorite_ReportFavoriteModel.is_favorite} with the current favorite state for the specified saved
 * report or report controller.
 *
 * @function
 * @name Wl_Report_Favorite_ReportFavoriteModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds report controller to favorites.
 *
 * Creates a favorite record for the current user that references either the specified saved report
 * or the report controller within the current business.
 *
 * @function
 * @name Wl_Report_Favorite_ReportFavoriteModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
