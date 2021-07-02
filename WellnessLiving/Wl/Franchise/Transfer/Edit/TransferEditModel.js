/**
 * Api to edit franchise transfer.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Franchise_Transfer_Edit_TransferEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if transfer can be edited to permanent, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_permanent = undefined;

  /**
   * Current end date of temporary transfer.
   *
   * @get result
   * @type {?string}
   */
  this.dt_end_current_local = null;

  /**
   * New end date of temporary transfer.
   *
   * @put post
   * @type {?string}
   */
  this.dt_end_local = null;

  /**
   * Current start date of temporary transfer.
   *
   * @get result
   * @type {?string}
   */
  this.dt_start_current_local = null;

  /**
   * New start date of temporary transfer.
   *
   * @put post
   * @type {?string}
   */
  this.dt_start_local = null;

  /**
   * Franchise transfer direction.
   *
   * @get result
   * @type {number}
   */
  this.id_transfer_direction = undefined;

  /**
   * Transfer period ID. One of {@link \Wl\Franchise\Transfer\TransferPeriodSid} constants.
   *
   * @put post
   * @type {number}
   */
  this.id_transfer_period = undefined;

  /**
   * Business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Franchise transfer key. Primary key in {@link \Wl\Franchise\Transfer\TransferSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_franchise_transfer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Franchise_Transfer_Edit_TransferEditModel);

/**
 * @inheritDoc
 */
Wl_Franchise_Transfer_Edit_TransferEditModel.prototype.config=function()
{
  return {"a_field": {"can_permanent": {"get": {"result": true}},"dt_end_current_local": {"get": {"result": true}},"dt_end_local": {"put": {"post": true}},"dt_start_current_local": {"get": {"result": true}},"dt_start_local": {"put": {"post": true}},"id_transfer_direction": {"get": {"result": true}},"id_transfer_period": {"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_franchise_transfer": {"get": {"get": true},"put": {"get": true}}}};
};