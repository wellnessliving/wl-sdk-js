/**
 * Default report configuration API.
 * Stored in {@link Wl\Business\Report\BusinessReportConfig} with report id = 0.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Report_DefaultReportConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Hidden feature button list.
   * Each element is a constant of {@link Wl_Report_Container_ControlPanel_ControlButton_ReportContainerControlButtonSid}.
   *
   * May be an empty array.
   *
   * @post get
   * @type {number[]}
   */
  this.a_button_hidden = [];

  /**
   * Visible feature button list.
   * Each element is a constant of {@link Wl_Report_Container_ControlPanel_ControlButton_ReportContainerControlButtonSid}.
   *
   * May be an empty array.
   *
   * @post get
   * @type {number[]}
   */
  this.a_button_visible = [];

  /**
   * Selected report date range.
   * One of the {@link RsReportDateSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_report_date = undefined;

  /**
   * Does report use preselected date range. If not - open date range page before report generation.
   *
   * @post get
   * @type {boolean}
   */
  this.is_report_date_default = undefined;

  /**
   * Whether last generated range should be used instead of generating new report.
   *
   * @post get
   * @type {boolean}
   */
  this.is_report_generate_last = undefined;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Whether buttons for date range selection should be shown nearby date filter.
   *
   * @post get
   * @type {boolean}
   */
  this.show_button_selection = undefined;

  /**
   * User's UID key.
   *
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Report_DefaultReportConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Report_DefaultReportConfigModel.prototype.config=function()
{
  return {"a_field": {"a_button_hidden": {"post": {"get": true}},"a_button_visible": {"post": {"get": true}},"id_report_date": {"post": {"get": true}},"is_report_date_default": {"post": {"get": true}},"is_report_generate_last": {"post": {"get": true}},"k_business": {"post": {"get": true}},"show_button_selection": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Report_DefaultReportConfigModel.instanceGet
 * @param {string} uid User's UID key.
 * @param {string} k_business Business key.
 * @returns {Wl_Business_Report_DefaultReportConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */