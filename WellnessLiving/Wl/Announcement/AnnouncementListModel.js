/**
 * Returns a list of announcements for the given business and location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Announcement_AnnouncementListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,is_backend";

  /**
   * @typedef {{}} Wl_Announcement_AnnouncementListModel_a_list
   * @property {string[]} a_location Location keys where the announcement is published.
   * @property {string} dtl_create Creation date in local MySQL format.
   * @property {?string} dtl_publish Local date and time the announcement is published in MySQL format. `null` if not set.
   * @property {?string} dtl_unpublish Local date and time the announcement is unpublished in MySQL format. `null` if not set.
   * @property {string} html_description Announcement description as HTML.
   * @property {string} html_description_clear Announcement description text stripped of HTML tags.
   * @property {?number} i_order Sort order. `null` if the announcement is not pinned.
   * @property {number} id_status List of announcement statuses.
   * @property {boolean} is_pin `true` if the announcement is pinned, `false` otherwise.
   * @property {string} k_announcement Announcement key.
   * @property {string} k_business Business key.
   * @property {string} text_create_date Formatted creation date.
   * @property {string} text_publish_date Formatted publish date.
   * @property {string} text_publish_date_short Formatted publish date with month name but without day of week.
   * @property {string} text_title Announcement title.
   * @property {string} text_unpublish_date Formatted unpublish date.
   * @property {string} uid_create Key of the user who created the announcement.
   * @property {string} url_detail URL of the announcement detail page.
   * @property {string} url_image URL of the announcement image.
   * @property {string} xml_description Announcement description as XML.
   */

  /**
   * List of announcements. Each element has the following keys:
   *
   * @get result
   * @type {Wl_Announcement_AnnouncementListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Order ID for list of announcements.
   *
   * Used only when {@link Wl_Announcement_AnnouncementListModel} is `true`.
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
   * Used only when {@link Wl_Announcement_AnnouncementListModel} is `true`.
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
  return {"a_field":{"a_list":{"get":{"result":true}},"id_order":{"get":{"get":true,"result":true}},"id_sort_field":{"get":{"get":true,"result":true}},"is_backend":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
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

/**
 * Returns a list of announcements for the given business and location.
 *
 * Retrieves published announcements visible to the current user, optionally filtered to a single location.
 * In backend mode the caller can also sort the results by column and direction, and the chosen sort
 * preference is persisted per user so the backend grid remembers
 * it across requests. Access is validated against announcement editor permissions for the business.
 *
 * @function
 * @name Wl_Announcement_AnnouncementListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
