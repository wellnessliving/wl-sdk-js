/**
 * Information about business assets.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource
   * @property {{}} a_image Data of asset image. See {@link \RsResourceImage::data()} for details.
   * @property {string} text_title Asset title.
   */

  /**
   * List of assets. Keys - asset IDs; primary key in {@link \RsResourceSql} table. Values - sub array with next keys:
   * <dl>
   *   <dt>
   *     array <var>a_image</var>
   *   </dt>
   *   <dd>
   *     Data of asset image. See {@link \RsResourceImage::data()} for details.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Asset title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel_a_resource}
   */
  this.a_resource = undefined;

  /**
   * Business key.
   * Primary key in {@link RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   * Primary key in {@link PassportLoginSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Resource_ScheduleListResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */