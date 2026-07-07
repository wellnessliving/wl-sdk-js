/**
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Transaction_Report_TransactionAllPaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Transaction_Report_TransactionAllPaymentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Transaction_Report_TransactionAllPaymentModel.prototype.config=function()
{
  return {"a_field":{}};
};
