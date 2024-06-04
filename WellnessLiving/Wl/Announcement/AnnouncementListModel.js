/**
 * Retrieves a list of announcements.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Announcement\AnnouncementListApi
 */
function Wl_Announcement_AnnouncementListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,is_backend";

  /**
   * List of announcements.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = [];

  /**
   * Order ID for list of announcements.
   *
   * Used only when {@link Wl_Announcement_AnnouncementListModel.is_backend} is `true`.
   *
   * `null` in case when use default order.
   *
   * @get get,result
   * @see Core_Sid_SortOrderSid
   * @type {?number}
   */
  this.id_order = null;

  /**
   * Sort field ID for list of announcements.
   *
   * Used only when {@link Wl_Announcement_AnnouncementListModel.is_backend} is `true`.
   *
   * `null` in case when use default field.
   *
   * @get get,result
   * @see Wl_Announcement_SortFieldSid
   * @type {?number}
   */
  this.id_sort_field = null;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key for which need show announcement.
   *
   * `null` in case when need show location for all locations in business.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The filter phrase to filter announcements by name.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Announcement_AnnouncementListModel);

/**
 * @inheritDoc
 */
Wl_Announcement_AnnouncementListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"id_order": {"get": {"get": true,"result": true}},"id_sort_field": {"get": {"get": true,"result": true}},"is_backend": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"text_search": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Announcement_AnnouncementListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {?string} k_location Location key for which need show announcement. `null` in case when need show location for all locations in business.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Announcement_AnnouncementListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */