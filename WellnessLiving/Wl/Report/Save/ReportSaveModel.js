/**
 * Returns information about saved report.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Save_ReportSaveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_report_save";

  /**
   * Filter raw data of the saved report.
   *
   * Keys are filter field names, values are the raw filter values.
   *
   * @deprecated Use {@link Wl_Report_Save_ReportSaveModel.json_filter}.
This variable do not get empty values of filters from HTML forms.
   * @get result
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
   * CID of the controller class.
   *
   * @post post
   * @put post
   * @type {number}
   */
  this.cid_controller = 0;

  /**
   * Report category of the saved report.
   *
   * One of the {@link RsReportCategorySid} constants.
   *
   * @get result
   * @post post
   * @put post
   * @see RsReportCategorySid
   * @type {number}
   */
  this.id_report_category = 0;

  /**
   * Filter raw data of the saved report. Uses to save empty filter values, actual when empty filter is the same as all
   * values are chosen.
   *
   * Use this value instead of {@link Wl_Report_Save_ReportSaveModel.a_filter}.
   *
   * In this array, key is name of a filter field.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.json_filter = "";

  /**
   * Business key of the saved report.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Report save key used as a base configuration when saving a new report.
   *
   * @post post
   * @type {string}
   */
  this.k_report_config = "";

  /**
   * Report save key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_report_save = "";

  /**
   * Description of the saved report.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = "";

  /**
   * Title of the saved report.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

  /**
   * UID user's key of the actor.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Save_ReportSaveModel);

/**
 * @inheritDoc
 */
Wl_Report_Save_ReportSaveModel.prototype.config=function()
{
  return {"a_field":{"a_filter":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"a_settings":{"post":{"post":true},"put":{"post":true}},"cid_controller":{"post":{"post":true},"put":{"post":true}},"id_report_category":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"json_filter":{"post":{"post":true},"put":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_report_config":{"post":{"post":true}},"k_report_save":{"get":{"get":true},"put":{"get":true}},"text_description":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"text_title":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"uid_actor":{"get":{"get":true},"post":{"get":true},"put":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_Save_ReportSaveModel.instanceGet
 * @param {string} k_report_save Report save key.
 * @returns {Wl_Report_Save_ReportSaveModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about saved report.
 *
 * Loads the title, description, category and stored filters of the saved report identified by
 * {@link Wl_Report_Save_ReportSaveModel.k_report_save} within the current business.
 *
 * @function
 * @name Wl_Report_Save_ReportSaveModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves new saved report.
 *
 * Creates a new saved report for the current business from the specified title, description, category,
 * filters and view widget settings, and stores the related customization for the report controller.
 *
 * @function
 * @name Wl_Report_Save_ReportSaveModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates existing saved report.
 *
 * Rewrites the title, description, category, filters and view widget settings of the saved report
 * identified by {@link Wl_Report_Save_ReportSaveModel.k_report_save} within the current business.
 *
 * @function
 * @name Wl_Report_Save_ReportSaveModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
