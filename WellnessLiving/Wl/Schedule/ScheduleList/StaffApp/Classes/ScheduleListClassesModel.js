/**
 * Information about classes/events which must be represented on schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_event";

  /**
   * List of classes/events. Keys - class/event IDs; primary key in {@link \RsClassSql} table. Values - class/event titles.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_class = undefined;

  /**
   * <tt>true</tt> - to return events; <tt>false</tt> - to return classes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.prototype.config=function()
{
  return {"a_field": {"a_class": {"get": {"result": true}},"is_event": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @param {boolean} is_event <tt>true</tt> - to return events; <tt>false</tt> - to return classes.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */