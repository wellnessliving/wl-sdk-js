/**
 * Point to load data for a customization form.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Customization_CustomizationFormModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "cid_page,cid_report,k_business,k_report_save,s_report,uid_actor";

  /**
   * Customization form data.
   * See {@link CustomizationFormAbstract::toArray()} for details.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_customization_form = [];

  /**
   * Report page CID.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_page = 0;

  /**
   * Page CID.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_report = 0;

  /**
   * Business primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Primary key of a saved report in {@link \RsReportSaveSql} table.
   *
   * <tt>null</tt> means that report is not saved.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_report_save = null;

  /**
   * Report CID list to that page customization form must be converted. String separated with <tt>,</tt>.
   *
   * May be specified only if {@link CustomizationFormApi::$cid_page} in not empty.
   *
   * @get get
   * @type {string}
   */
  this.s_report = "";

  /**
   * Current user's primary key in {@link \PassportLoginAr} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_actor = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Customization_CustomizationFormModel);

/**
 * @inheritDoc
 */
Wl_Report_Customization_CustomizationFormModel.prototype.config=function()
{
  return {"a_field": {"a_customization_form": {"get": {"result": true},"post": {"post": true}},"cid_page": {"get": {"get": true},"post": {"get": true}},"cid_report": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_report_save": {"get": {"get": true},"post": {"get": true}},"s_report": {"get": {"get": true}},"uid_actor": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Customization_CustomizationFormModel.instanceGet
 * @param {number} cid_page Report page CID.
 * @param {number} cid_report Page CID.
 * @param {string} k_business Business primary key in {@link \RsBusinessSql} table.
 * @param {?string} k_report_save Primary key of a saved report in {@link \RsReportSaveSql} table. <tt>null</tt> means that report is not saved.
 * @param {string} s_report Report CID list to that page customization form must be converted. String separated with <tt>,</tt>. May be specified only if {@link CustomizationFormApi::$cid_page} in not empty.
 * @param {string} uid_actor Current user's primary key in {@link \PassportLoginAr} table.
 * @returns {Wl_Report_Customization_CustomizationFormModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */