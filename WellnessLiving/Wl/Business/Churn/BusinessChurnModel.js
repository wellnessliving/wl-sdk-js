/**
 * An endpoint that churns a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Churn_BusinessChurnModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business's churn date.
   * This will be `null` if not set yet.
   *
   * @post get
   * @type {?string}
   */
  this.dl_churn = null;

  /**
   * If `true`, the business is a lost customer. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_churn = undefined;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The business name.
   *
   * @get result
   * @type {string}
   */
  this.text_business_name = undefined;

  /**
   * The reason for the business churn.
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