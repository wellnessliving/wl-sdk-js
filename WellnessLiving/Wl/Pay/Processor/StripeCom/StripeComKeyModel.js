/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_StripeComKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComKeyModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComKeyModel.prototype.config=function()
{
  return {"a_field":{}};
};
