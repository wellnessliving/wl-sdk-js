/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_ProfileModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_ProfileModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_ProfileModel.prototype.config=function()
{
  return {"a_field":{}};
};
