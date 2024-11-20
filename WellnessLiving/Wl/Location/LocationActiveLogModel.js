/**
 * API to edit location active log.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_LocationActiveLogModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Local date of operation.
   *
   * @post post
   * @type {string}
   */
  this.dl_operation = undefined;

  /**
   * Primary key of business in {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Primary key of location in {@link \RsLocationSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Primary key of location active log in {@link \Wl\Location\LocationActiveLogSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_location_active_log = undefined;

  /**
   * Reason of the change of location status.
   *
   * @post post
   * @type {string}
   */
  this.text_reason = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_LocationActiveLogModel);

/**
 * @inheritDoc
 */
Wl_Location_LocationActiveLogModel.prototype.config=function()
{
  return {"a_field": {"dl_operation": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_location": {"post": {"post": true}},"k_location_active_log": {"post": {"post": true}},"text_reason": {"post": {"post": true}}}};
};