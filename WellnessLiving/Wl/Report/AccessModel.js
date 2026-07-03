/**
 * Checks access to given report.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_AccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_report,k_business";

  /**
   * Report CID.
   *
   * It's used mostly for second generation reports.
   * For first generation reports use {@link Wl_Report_AccessModel.id_report} instead.
   *
   * Only one of these two fields should be sent, but not both.
   *
   * @get get
   * @type {number}
   */
  this.cid_report = 0;

  /**
   * `true` - access is granted; `false` - access is denied.
   *
   * @get result
   * @type {boolean}
   */
  this.has_access = undefined;

  /**
   * Report ID.
   *
   * It's used mostly for first generation reports.
   * For second generation reports use {@link Wl_Report_AccessModel.cid_report} instead.
   *
   * Only one of these two fields should be sent, but not both.
   *
   * @get get
   * @see RsReportSid
   * @type {number}
   */
  this.id_report = 0;

  /**
   * ID of business for which access must be checked.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_AccessModel);

/**
 * @inheritDoc
 */
Wl_Report_AccessModel.prototype.config=function()
{
  return {"a_field":{"cid_report":{"get":{"get":true}},"has_access":{"get":{"result":true}},"id_report":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_AccessModel.instanceGet
 * @param {number} id_report Report ID. It's used mostly for first generation reports. For second generation reports use {@link Wl_Report_AccessModel.cid_report} instead. Only one of these two fields should be sent, but not both.
 * @param {string} k_business ID of business for which access must be checked.
 * @returns {Wl_Report_AccessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks access to given report.
 *
 * Accepts either {@link Wl_Report_AccessModel.id_report} (first-generation reports) or {@link Wl_Report_AccessModel.cid_report} (second-generation reports), but not both,
 * and returns `has_access` indicating whether the current user may view the report in the given business.
 *
 * @function
 * @name Wl_Report_AccessModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
