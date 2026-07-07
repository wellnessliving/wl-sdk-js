/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaValidateModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaValidateModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaValidateModel.prototype.config=function()
{
  return {"a_field":{}};
};
