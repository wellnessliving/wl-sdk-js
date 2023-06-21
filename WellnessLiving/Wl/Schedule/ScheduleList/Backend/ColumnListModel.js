/**
 * API point to get column list of the table schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_Backend_ColumnListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_Backend_ColumnListModel_a_column
   * @property {boolean} is_fix Whether column is fixed. Should not be hidden.
   * @property {boolean} is_hide Whether column is hidden.
   * @property {string} s_name Column name.
   * @property {string} text_title Column title.
   */

  /**
   * Column list.
   * Each element has next structure:<dl>
   * <dt>bool <var>is_fix</var></dt>
   * <dd>Whether column is fixed. Should not be hidden.</dd>
   * <dt>bool <var>is_hide</var></dt>
   * <dd>Whether column is hidden.</dd>
   * <dt>string <var>s_name</var></dt>
   * <dd>Column name.</dd>
   * <dt>string <var>text_title</var></dt>
   * <dd>Column title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_Backend_ColumnListModel_a_column}
   */
  this.a_column = undefined;

  /**
   * Column list.
   * Each element has next structure described here {@link Wl_Schedule_ScheduleList_Backend_ColumnListModel.a_column}
   *
   * @post post
   * @type {{}}
   */
  this.a_column_set = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User's UID key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_Backend_ColumnListModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_Backend_ColumnListModel.prototype.config=function()
{
  return {"a_field": {"a_column": {"get": {"result": true}},"a_column_set": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_Backend_ColumnListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User's UID key.
 * @returns {Wl_Schedule_ScheduleList_Backend_ColumnListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */