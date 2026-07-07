/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel.prototype.config=function()
{
  return {"a_field":{}};
};
