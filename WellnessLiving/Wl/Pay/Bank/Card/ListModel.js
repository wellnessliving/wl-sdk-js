/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_ListModel.prototype.config=function()
{
  return {"a_field":{}};
};
