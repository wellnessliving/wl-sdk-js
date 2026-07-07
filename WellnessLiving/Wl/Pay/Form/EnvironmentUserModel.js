/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Form_EnvironmentUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Form_EnvironmentUserModel);

/**
 * @inheritDoc
 */
Wl_Pay_Form_EnvironmentUserModel.prototype.config=function()
{
  return {"a_field":{}};
};
