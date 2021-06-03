/**
 * API to edit location active status.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_LocationActiveEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Local date of operation.
   *
   * @post get
   * @type {string}
   */
  this.dl_operation = undefined;

  /**
   * Whether type of operation is the churn, otherwise - reactivation.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_churn = false;

  /**
   * Primary key of business in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Primary key of location in {@link \RsLocationSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Confirmation message.
   *
   * @get result
   * @type {string}
   */
  this.text_confirm = undefined;

  /**
   * Reason of the change of location status.
   *
   * @post get
   * @type {string}
   */
  this.text_reason = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_LocationActiveEditModel);

/**
 * @inheritDoc
 */
Wl_Location_LocationActiveEditModel.prototype.config=function()
{
  return {"a_field": {"dl_operation": {"post": {"get": true}},"is_churn": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"text_confirm": {"get": {"result": true}},"text_reason": {"post": {"get": true}}}};
};