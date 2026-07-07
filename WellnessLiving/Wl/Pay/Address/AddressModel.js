/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_AddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_AddressModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_AddressModel.prototype.config=function()
{
  return {"a_field":{}};
};
