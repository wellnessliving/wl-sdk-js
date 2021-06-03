/**
 * Purchase email sending.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Mail_PurchaseMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether mail sending should be forced.
   *
   * @post post
   * @type {boolean}
   */
  this.is_send_force = false;

  /**
   * Purchase key.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Mail_PurchaseMailModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Mail_PurchaseMailModel.prototype.config=function()
{
  return {"a_field": {"is_send_force": {"post": {"post": true}},"k_purchase": {"post": {"post": true}}}};
};