/**
 * Removes the card.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_Remove_RemoveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business the card is being removed for. The card must belong to this business, see
   * PayBank::payBusinessTrx().
   *
   * @delete get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the card to remove.
   *
   * @delete get
   * @type {string}
   */
  this.k_pay_bank = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Remove_RemoveModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Remove_RemoveModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"delete":{"get":true}},"k_pay_bank":{"delete":{"get":true}}}};
};

/**
 * Removes the card.
 *
 * @function
 * @name Wl_Pay_Bank_Card_Remove_RemoveModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */
