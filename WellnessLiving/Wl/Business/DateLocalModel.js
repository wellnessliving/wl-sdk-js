/**
 * Api to get current business local date in MySQL format.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_DateLocalModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business local date in mysql format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_date = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_DateLocalModel);

/**
 * @inheritDoc
 */
Wl_Business_DateLocalModel.prototype.config=function()
{
  return {"a_field": {"dtl_date": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};