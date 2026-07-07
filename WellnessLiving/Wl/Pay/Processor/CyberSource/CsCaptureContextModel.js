/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsCaptureContextModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsCaptureContextModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsCaptureContextModel.prototype.config=function()
{
  return {"a_field":{}};
};
