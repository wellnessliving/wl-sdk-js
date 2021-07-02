/**
 * Api to add transfer.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Franchise_Transfer_TransferAddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * End date of temporary transfer.
   * Set if {@link \Wl\Franchise\Transfer\TransferAddApi::$id_transfer_period} equals to
   * {@link \Wl\Franchise\Transfer\TransferPeriodSid::RANGE} constant, otherwise <tt>null</tt>.
   *
   * @post post
   * @type {?string}
   */
  this.dt_end_local = null;

  /**
   * Start date of temporary transfer.
   * Set if {@link \Wl\Franchise\Transfer\TransferAddApi::$id_transfer_period} equals to
   * {@link \Wl\Franchise\Transfer\TransferPeriodSid::RANGE} constant, otherwise <tt>null</tt>.
   *
   * @post post
   * @type {?string}
   */
  this.dt_start_local = null;

  /**
   * Number of days of temporary transfer.
   * Set if {@link \Wl\Franchise\Transfer\TransferAddApi::$id_transfer_period} equals to
   * {@link \Wl\Franchise\Transfer\TransferPeriodSid::DAY} constant, otherwise <tt>null</tt>.
   *
   * @post post
   * @type {?number}
   */
  this.i_day = null;

  /**
   * Transfer direction ID. One of {@link \Wl\Franchise\Transfer\TransferDirectionSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_transfer_direction = undefined;

  /**
   * Transfer period ID. One of {@link \Wl\Franchise\Transfer\TransferPeriodSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_transfer_period = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   * This is business in which the transfer takes place.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location key. Primary key in {@link \RsLocationSql} table.
   * This is a location where the transfer takes place.
   *
   * @post post
   * @type {string}
   */
  this.k_location_to = undefined;

  /**
   * Transferred user key. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid_transfer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Franchise_Transfer_TransferAddModel);

/**
 * @inheritDoc
 */
Wl_Franchise_Transfer_TransferAddModel.prototype.config=function()
{
  return {"a_field": {"dt_end_local": {"post": {"post": true}},"dt_start_local": {"post": {"post": true}},"i_day": {"post": {"post": true}},"id_transfer_direction": {"post": {"post": true}},"id_transfer_period": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_location_to": {"post": {"post": true}},"uid_transfer": {"post": {"post": true}}}};
};