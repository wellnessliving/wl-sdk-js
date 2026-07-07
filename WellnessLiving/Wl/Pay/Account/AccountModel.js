/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Account_AccountModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Account_AccountModel);

/**
 * @inheritDoc
 */
Wl_Pay_Account_AccountModel.prototype.config=function()
{
  return {"a_field":{}};
};
