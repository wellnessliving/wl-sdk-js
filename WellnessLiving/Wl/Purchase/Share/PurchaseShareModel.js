/**
 * An endpoint that shares a purchase to a specified social network.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Share_PurchaseShareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The social network. One of the {@link ASocialSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_social = undefined;

  /**
   * The key of the purchase.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * The URL to the sharing page.
   *
   * @post result
   * @type {string}
   */
  this.url_share = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Share_PurchaseShareModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Share_PurchaseShareModel.prototype.config=function()
{
  return {"a_field": {"id_social": {"post": {"post": true}},"k_purchase": {"post": {"post": true}},"url_share": {"post": {"result": true}}}};
};