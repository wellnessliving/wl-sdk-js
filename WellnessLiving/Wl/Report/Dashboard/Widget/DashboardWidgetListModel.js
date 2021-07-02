/**
 * Handles list of widgets(reports) available to be put on a dashboard.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_Widget_DashboardWidgetListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_category_list
   * @property {number} i_sort Category sort order.
   * @property {number} id_report_category Category ID. One of {@link \RsReportCategorySid}.
   * @property {string} text_title Category title.
   */

  /**
   * List of report categories available to the user and that have at least 1 widget in the <var>a_widget_list</var> below. Each item has the following structure:
   * <dl>
   *   <dt>
   *     int <var>i_sort</var>
   *   </dt>
   *   <dd>
   *     Category sort order.
   *   </dd>
   *   <dt>
   *     int <var>id_report_category</var>
   *   </dt>
   *   <dd>
   *     Category ID. One of {@link \RsReportCategorySid}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Category title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_category_list}
   */
  this.a_category_list = undefined;

  /**
   * @typedef {{}} Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_widget_default_list
   * @property {number|string} i_report_widget Widget content identifier. Depending on <tt>id_report_widget</tt> may be one of {@link \RsReportSid}, {@link \RsReportPageSid}, or primary key in {@link \RsReportSaveSql} table.
   * @property {number} i_sort Widget order within its category.
   * @property {number} id_report_widget Widget type. One of {@link \RsReportWidgetSid} for details.
   * @property {string} text_widget_key Unique key of the widget. Composite of <tt>id_report_widget</tt> and <tt>i_report_widget</tt>.
   */

  /**
   * List of widgets that should be pre-selected by default for a new dashboard. Each item is an array with the following structure:
   * <dl>
   *   <dt>
   *     int|string <var>i_report_widget</var>
   *   </dt>
   *   <dd>
   *     Widget content identifier. Depending on <var>id_report_widget</var> may be one of {@link \RsReportSid}, {@link \RsReportPageSid}, or primary key in {@link \RsReportSaveSql} table.
   *   </dd>
   *   <dt>
   *     int <var>i_sort</var>
   *   </dt>
   *   <dd>
   *     Widget order within its category.
   *   </dd>
   *   <dt>
   *     int <var>id_report_widget</var>
   *   </dt>
   *   <dd>
   *     Widget type. One of {@link \RsReportWidgetSid} for details.
   *   </dd>
   *   <dt>
   *     string <var>text_widget_key</var>
   *   </dt>
   *   <dd>
   *     Unique key of the widget. Composite of <var>id_report_widget</var> and <var>i_report_widget</var>.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_widget_default_list}
   */
  this.a_widget_default_list = undefined;

  /**
   * @typedef {{}} Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_widget_list
   * @property {number[]} a_report_category List of report categories this widget belongs to. List of IDs from {@link \RsReportCategorySid}.
   * @property {number|string} i_report_widget Widget content identifier. Depending on <tt>id_report_widget</tt> may be one of {@link \RsReportSid}, {@link \RsReportPageSid}, or primary key in {@link \RsReportSaveSql} table.
   * @property {number} i_sort Widget order within its category.
   * @property {number} id_report_widget Widget type. One of {@link \RsReportWidgetSid} for details.
   * @property {string} text_widget_key Unique key of the widget. Composite of <tt>id_report_widget</tt> and <tt>i_report_widget</tt>.
   * @property {string} text_title Widget title.
   */

  /**
   * List of available widgets. Each item is an array with the following structure:
   * <dl>
   *   <dt>
   *     int[] <var>a_report_category</var>
   *   </dt>
   *   <dd>
   *     List of report categories this widget belongs to. List of IDs from {@link \RsReportCategorySid}.
   *   </dd>
   *   <dt>
   *     int|string <var>i_report_widget</var>
   *   </dt>
   *   <dd>
   *     Widget content identifier. Depending on <var>id_report_widget</var> may be one of {@link \RsReportSid}, {@link \RsReportPageSid}, or primary key in {@link \RsReportSaveSql} table.
   *   </dd>
   *   <dt>
   *     int <var>i_sort</var>
   *   </dt>
   *   <dd>
   *     Widget order within its category.
   *   </dd>
   *   <dt>
   *     int <var>id_report_widget</var>
   *   </dt>
   *   <dd>
   *     Widget type. One of {@link \RsReportWidgetSid} for details.
   *   </dd>
   *   <dt>
   *     string <var>text_widget_key</var>
   *   </dt>
   *   <dd>
   *     Unique key of the widget. Composite of <var>id_report_widget</var> and <var>i_report_widget</var>.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Widget title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Report_Dashboard_Widget_DashboardWidgetListModel_a_widget_list}
   */
  this.a_widget_list = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_Widget_DashboardWidgetListModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_Widget_DashboardWidgetListModel.prototype.config=function()
{
  return {"a_field": {"a_category_list": {"get": {"result": true}},"a_widget_default_list": {"get": {"result": true}},"a_widget_list": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Dashboard_Widget_DashboardWidgetListModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @returns {Wl_Report_Dashboard_Widget_DashboardWidgetListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */