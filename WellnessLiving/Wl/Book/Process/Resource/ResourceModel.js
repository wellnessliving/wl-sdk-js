/**
 * Step of select of assets.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Resource_ResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid,a_session";

  /**
   * IDs of user's activity. Primary keys in table {@link RsLoginActivitySql}. Not empty only if session(s) was booked on this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> if appointment must repeat monthly at the same date.
   * <tt>false</tt> if appointment must repeat monthly at the same week day.
   * <tt>null</tt> if appointment must not repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment must repeat monthly at the same date.
   *     <tt>false</tt> if appointment must repeat monthly at the same week day.
   *     <tt>null</tt> if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * <tt>null</tt> if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Resource_ResourceModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list
   * @property {number} i_index Number of asset. Actual for assets with quantity more than <tt>1</tt>.
   * @property {boolean} is_current <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   * @property {string} k_resource ID of asset. Primary key {@link RsResourceSql} table.
   * @property {string} s_resource Title of asset.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_all
   * @property {Wl_Book_Process_Resource_ResourceModel_a_resource_all_a_resource_list[]} a_resource_list List of available assets. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <tt>i_index</tt>
   *   </dt>
   *   <dd>
   *     Number of asset. Actual for assets with quantity more than <tt>1</tt>.
   *   </dd>
   *   <dt>
   *     bool <tt>is_current</tt>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <tt>k_resource</tt>
   *   </dt>
   *   <dd>
   *     ID of asset. Primary key {@link RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string <tt>s_resource</tt>
   *   </dt>
   *   <dd>
   *     Title of asset.
   *   </dd>
   * </dl>
   * @property {boolean} has_current <tt>true</tt> - has current resource in the list of available assets; <tt>false</tt> - otherwise.
   * @property {boolean} is_client_select <tt>true</tt> - client selected resource from current group; <tt>false</tt> otherwise.
   * @property {boolean} is_select <tt>true</tt> - has selected resources; <tt>false</tt> - otherwise.
   * @property {boolean} is_share <tt>true</tt> - assets of this category do not belong to certain users but belong to session in general; <tt>false</tt> - assets belong to certain users.
   * @property {string} k_resource_layout ID of asset layout. Primary key in {@link \Wl\Resource\Layout\Sql} table.
   * @property {string} k_resource_type ID of asset category. Primary key in {@link RsResourceTypeSql} table.
   * @property {string} s_resource_type Title of asset category.
   */

  /**
   * List of asset categories which are available for specified session. Every element has next keys:
   * <dl>
   *   <dt>
   *     array[] <var>a_resource_list</var>
   *   </dt>
   *   <dd>
   *     List of available assets. Every element has next keys:
   *     <dl>
   *       <dt>
   *         int <var>i_index</var>
   *       </dt>
   *       <dd>
   *         Number of asset. Actual for assets with quantity more than <tt>1</tt>.
   *       </dd>
   *       <dt>
   *         bool <var>is_current</var>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> means that this asset is selected by client, <tt>false</tt> - otherwise.
   *       </dd>
   *       <dt>
   *         string <var>k_resource</var>
   *       </dt>
   *       <dd>
   *         ID of asset. Primary key {@link RsResourceSql} table.
   *       </dd>
   *       <dt>
   *         string <var>s_resource</var>
   *       </dt>
   *       <dd>
   *         Title of asset.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>has_current</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - has current resource in the list of available assets; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_client_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - client selected resource from current group; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - has selected resources; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_share</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - assets of this category do not belong to certain users but belong to session in general; <tt>false</tt> - assets belong to certain users.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_layout</var>
   *   </dt>
   *   <dd>
   *     ID of asset layout. Primary key in {@link \Wl\Resource\Layout\Sql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_type</var>
   *   </dt>
   *   <dd>
   *     ID of asset category. Primary key in {@link RsResourceTypeSql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_resource_type</var>
   *   </dt>
   *   <dd>
   *     Title of asset category.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_all[]}
   */
  this.a_resource_all = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Resource_ResourceModel_a_resource_select
   * @property {number} i_index Order number of the asset (may be from 1 to asset quantity).
   * @property {string} k_resource Asset ID. Primary key in table {@link RsResourceSql}.
   */

  /**
   * Selected assets.
   *
   * Every element has keys:
   * <dl><dt>int <var>i_index</var></dt><dd>Order number of the asset (may be from 1 to asset quantity).</dd>
   * <dt>string <var>k_resource</var></dt><dd>Asset ID. Primary key in table {@link RsResourceSql}.</dd></dl>
   *
   * @post post
   * @type {Wl_Book_Process_Resource_ResourceModel_a_resource_select}
   */
  this.a_resource_select = [];

  /**
   * Selected sessions.
   * Not empty only for session mode.
   *
   * Fields - IDs of sessions in database.
   * Values - arrays of date/time when session is occurred. In MySQL format. In GMT.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * IDs of book of session(s). Primary keys in table {@link RsVisitSql}. Not empty only if session(s) was booked on this step.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Mode type. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * <tt>true</tt> - next steps of booking process are required. <tt>false</tt> - session(s) are booked, process must be finished.
   *
   * @post result
   * @type {boolean}
   */
  this.is_next = undefined;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Key of a user who is making a book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Resource_ResourceModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Resource_ResourceModel.prototype.config=function()
{
  return {"a_field": {"a_login_activity": {"post": {"result": true}},"a_repeat": {"post": {"post": true}},"a_resource_all": {"get": {"result": true}},"a_resource_select": {"post": {"post": true}},"a_session": {"get": {"get": true},"post": {"get": true}},"a_visit": {"post": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_next": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Resource_ResourceModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @param {{}} a_session Selected sessions. Not empty only for session mode. Fields - IDs of sessions in database. Values - arrays of date/time when session is occurred. In MySQL format. In GMT.
 * @returns {Wl_Book_Process_Resource_ResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */