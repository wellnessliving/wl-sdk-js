/**
 * Provides header information and some header display settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Header_OwnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Business or Location title.
   * Which of the title will be returned depends on the current user and the features of the business.
   *
   * @get result
   * @type {string}
   */
  this.html_title = undefined;

  /**
   * The key of the business for which you want to get header information.
   *
   * As a result, this field may be empty. In this case, the location key will be setted.
   *
   * Primary key from {@link \RsBusinessSql} table.
   *
   * @get get,result
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of current user location.
   *
   * Primary key from {@link \RsLocationSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Whether title will be displayed or not.
   * Depends on business settings.
   *
   * @get result
   * @type {boolean}
   */
  this.show_business_name = undefined;

  /**
   * The user key for which information will be loaded.
   *
   * Primary key from {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * Microsite URL for user location.
   *
   * @get result
   * @type {string}
   */
  this.url_microsite = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Header_OwnerModel);

/**
 * @inheritDoc
 */
Wl_Business_Header_OwnerModel.prototype.config=function()
{
  return {"a_field": {"html_title": {"get": {"result": true}},"k_business": {"get": {"get": true,"result": true}},"k_location": {"get": {"result": true}},"show_business_name": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_microsite": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Header_OwnerModel.instanceGet
 * @param {string} k_business The key of the business for which you want to get header information. As a result, this field may be empty. In this case, the location key will be setted. Primary key from {@link \RsBusinessSql} table.
 * @param {string} uid The user key for which information will be loaded. Primary key from {@link \PassportLoginSql} table.
 * @returns {Wl_Business_Header_OwnerModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */