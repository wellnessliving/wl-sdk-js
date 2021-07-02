/**
 * Api for Curves data files.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Franchise_Report_Curves_AccumulationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Progress value.
   *
   * @get result
   * @type {number}
   */
  this.f_progress = undefined;

  /**
   * <tt>true</tt> - accumulation reports exist; <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  /**
   * Link to download archive.
   *
   * @get result
   * @type {string}
   */
  this.url_download = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Franchise_Report_Curves_AccumulationModel);

/**
 * @inheritDoc
 */
Wl_Business_Franchise_Report_Curves_AccumulationModel.prototype.config=function()
{
  return {"a_field": {"f_progress": {"get": {"result": true}},"is_exists": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"url_download": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Franchise_Report_Curves_AccumulationModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @returns {Wl_Business_Franchise_Report_Curves_AccumulationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */