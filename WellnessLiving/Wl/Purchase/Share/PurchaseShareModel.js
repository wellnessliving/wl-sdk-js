/**
 * Records the purchase share action and returns the social network sharing URL.
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
   * @see ASocialSid
   * @type {number}
   */
  this.id_social = 0;

  /**
   * The key of the purchase.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = "";

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
  return {"a_field":{"id_social":{"post":{"post":true}},"k_purchase":{"post":{"post":true}},"url_share":{"post":{"result":true}}}};
};

/**
 * Records the purchase share action and returns the social network sharing URL.
 *
 * Validates that the caller owns the purchase, prevents duplicate share actions, saves the share record,
 * and returns the social network URL for sharing.
 *
 * @function
 * @name Wl_Purchase_Share_PurchaseShareModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
