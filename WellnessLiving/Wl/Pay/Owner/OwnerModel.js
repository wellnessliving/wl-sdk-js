/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Owner_OwnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Owner_OwnerModel);

/**
 * @inheritDoc
 */
Wl_Pay_Owner_OwnerModel.prototype.config=function()
{
  return {"a_field":{}};
};
