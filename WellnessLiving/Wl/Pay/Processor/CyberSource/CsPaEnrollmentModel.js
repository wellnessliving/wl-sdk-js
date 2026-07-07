/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel.prototype.config=function()
{
  return {"a_field":{}};
};
