/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Form_EnvironmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Form_EnvironmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Form_EnvironmentModel.prototype.config=function()
{
  return {"a_field":{}};
};
