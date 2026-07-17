/**
 * Adds new report to a dashboard.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_ReportDashboardModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Filter raw data of the report.
   *
   * Keys are filter field names, values are the raw filter values.
   *
   * @deprecated Use {@link Wl_Report_Dashboard_ReportDashboardModel.json_filter}.
This variable do not get empty values of filters from HTML forms.
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_filter = null;

  /**
   * View widget settings raw data of the saved report.
   *
   * Keys are widget setting names, values are the raw setting values.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_settings = null;

  /**
   * CID of the controller class. Subclass of {@link Wl_Report_View_ReportViewControllerAbstract}.
   *
   * @post post
   * @put post
   * @type {number}
   */
  this.cid_controller = 0;

  /**
   * Filter raw data of the saved report. Uses to save empty filter values, actual when empty filter is the same as all
   * values are chosen.
   *
   * Use this value instead of {@link Wl_Report_Dashboard_ReportDashboardModel.a_filter}.
   *
   * In this array, key is name of a filter field.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.json_filter = "[]";

  /**
   * Business key of the report.
   *
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Report dashboard key to which report should be added.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_report_dashboard = "";

  /**
   * Report save key.
   *
   * @put get
   * @type {string}
   */
  this.k_report_save = "";

  /**
   * Description of the report.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Title of the report.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

  /**
   * UID user's key of the actor.
   *
   * @post get
   * @put get
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_ReportDashboardModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_ReportDashboardModel.prototype.config=function()
{
  return {"a_field":{"a_filter":{"post":{"post":true},"put":{"post":true}},"a_settings":{"post":{"post":true},"put":{"post":true}},"cid_controller":{"post":{"post":true},"put":{"post":true}},"json_filter":{"post":{"post":true},"put":{"post":true}},"k_business":{"post":{"get":true},"put":{"get":true}},"k_report_dashboard":{"post":{"post":true},"put":{"post":true}},"k_report_save":{"put":{"get":true}},"text_description":{"post":{"post":true},"put":{"post":true}},"text_title":{"post":{"post":true},"put":{"post":true}},"uid_actor":{"post":{"get":true},"put":{"get":true}}}};
};

/**
 * Adds new report to a dashboard.
 *
 * Creates a saved report from the specified title, description, filters and view widget settings and
 * attaches it as a widget to the dashboard identified by {@link Wl_Report_Dashboard_ReportDashboardModel.k_report_dashboard}.
 *
 * @function
 * @name Wl_Report_Dashboard_ReportDashboardModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates added report to a dashboard.
 *
 * Rewrites the title, description, filters and view widget settings of the dashboard report identified by
 * {@link Wl_Report_Dashboard_ReportDashboardModel.k_report_save} within the current business.
 *
 * @function
 * @name Wl_Report_Dashboard_ReportDashboardModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
