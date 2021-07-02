/**
 * A model to change status of transfer.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Franchise_Transfer_TransferStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Transfer status ID. One of {@link \Wl\Franchise\Transfer\TransferStatusSid} constants.
   *
   * @put post
   * @type {number}
   */
  this.id_transfer_status = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @put post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Franchise transfer key. Primary key in {@link \Wl\Franchise\Transfer\TransferSql} table.
   *
   * @put post
   * @type {string}
   */
  this.k_franchise_transfer = undefined;

  /**
   * Reason of transfer status.
   *
   * @put post
   * @type {string}
   */
  this.text_reason = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Franchise_Transfer_TransferStatusModel);

/**
 * @inheritDoc
 */
Wl_Franchise_Transfer_TransferStatusModel.prototype.config=function()
{
  return {"a_field": {"id_transfer_status": {"put": {"post": true}},"k_business": {"put": {"post": true}},"k_franchise_transfer": {"put": {"post": true}},"text_reason": {"put": {"post": true}}}};
};