/**
 * Allows to create, edit and delete announcement.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Announcement\AnnouncementElementApi
 */
function Wl_Announcement_AnnouncementElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_announcement,is_backend";

  /**
   * @inheritDoc
   */
  this.ERROR_SILENT = true;

  /**
   * @inheritDoc
   */
  this.ACTIVE_OVERLAY = true;

  /**
   * List of locations keys.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_location = [];

  /**
   * The date and time when the announcement was published.
   *
   * This will be `null` if the published date is not set yet.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_publish = null;

  /**
   * The date and time when the announcement was unpublished.
   *
   * This will be `null` if the unpublished date is not set yet.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dtl_unpublish = null;

  /**
   * Announcement description.
   *
   * @get result
   * @type {string}
   */
  this.html_description = undefined;

  /**
   * Order to sort announcements.
   *
   * This will be `null` if sort order is not set yet (announcement is not pinned).
   *
   * @get result
   * @see Core_Locale_Language_LocaleLanguageSid
   * @type {?number}
   */
  this.i_order = null;

  /**
   * Announcement status ID.
   *
   * @get result
   * @type {number}
   */
  this.id_status = undefined;

  /**
   * If `true`, the API is being used from backend. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` to pin the announcement, `false` to unpin.
   *
   * @put post
   * @type {boolean}
   */
  this.is_pin = false;

  /**
   * Announcement key.
   *
   * @delete get
   * @get get,result
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_announcement = "";

  /**
   * The string representation of the announcement's image key.
   *
   * `null` if the announcement doesn't have an image.
   *
   * @get result
   * @type {?string}
   */
  this.k_announcement_image = null;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The name of the command that has been executing when the exception occurred.
   *
   * @post post
   * @type {string}
   */
  this.s_command = "";

  /**
   * The date and time when the announcement was published in human format.
   *
   * @get result
   * @type {string}
   */
  this.text_publish_date = "";

  /**
   * The date when the announcement was published in human format.
   *
   * @get result
   * @type {string}
   */
  this.text_publish_date_short = "";

  /**
   * Title of announcement.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  /**
   * Announcement image url.
   *
   * @get result
   * @type {string}
   */
  this.url_image = "";

  /**
   * Description of announcement.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.xml_description = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Announcement_AnnouncementElementModel);

/**
 * @inheritDoc
 */
Wl_Announcement_AnnouncementElementModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true},"post": {"post": true}},"dtl_publish": {"get": {"result": true},"post": {"post": true}},"dtl_unpublish": {"get": {"result": true},"post": {"post": true}},"html_description": {"get": {"result": true}},"i_order": {"get": {"result": true}},"id_status": {"get": {"result": true}},"is_backend": {"get": {"get": true}},"is_pin": {"put": {"post": true}},"k_announcement": {"delete": {"get": true},"get": {"get": true,"result": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_announcement_image": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"s_command": {"post": {"post": true}},"text_publish_date": {"get": {"result": true}},"text_publish_date_short": {"get": {"result": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"url_image": {"get": {"result": true}},"xml_description": {"get": {"result": true},"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Announcement_AnnouncementElementModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_announcement Announcement key.
 * @param {boolean} is_backend If `true`, the API is being used from backend. Otherwise, this will be `false`.
 * @returns {Wl_Announcement_AnnouncementElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */