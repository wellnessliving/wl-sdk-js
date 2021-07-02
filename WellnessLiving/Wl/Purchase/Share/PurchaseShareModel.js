/**
 * Saves data about share post of the purchase to specified social network.
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
   * Social network. One of {@link \ASocialSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_social = undefined;

  /**
   * Purchase key. Primary key {@link \RsPurchaseSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * Url to sharing page.
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