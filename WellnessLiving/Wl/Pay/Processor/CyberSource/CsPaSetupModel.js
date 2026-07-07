/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaSetupModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaSetupModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaSetupModel.prototype.config=function()
{
  return {"a_field":{}};
};
