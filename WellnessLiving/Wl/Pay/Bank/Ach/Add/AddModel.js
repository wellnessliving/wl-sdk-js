/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Ach_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Ach_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Ach_Add_AddModel.prototype.config=function()
{
  return {"a_field":{}};
};
