/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel.prototype.config=function()
{
  return {"a_field":{}};
};
