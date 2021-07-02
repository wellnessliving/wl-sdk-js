/**
 * Api to churn business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Churn_BusinessChurnModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business churn date.
   * <tt>null</tt> if not initialized yet.
   *
   * @post get
   * @type {?string}
   */
  this.dl_churn = null;

  /**
   * <tt>true</tt> if business is a lost customer, <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_churn = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Business name
   *
   * @get result
   * @type {string}
   */
  this.text_business_name = undefined;

  /**
   * Reason of a business churn.
   *
   * @post get
   * @type {string}
   */
  this.text_churn_reason = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Churn_BusinessChurnModel);

/**
 * @inheritDoc
 */
Wl_Business_Churn_BusinessChurnModel.prototype.config=function()
{
  return {"a_field": {"dl_churn": {"post": {"get": true}},"is_churn": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"text_business_name": {"get": {"result": true}},"text_churn_reason": {"post": {"get": true}}}};
};