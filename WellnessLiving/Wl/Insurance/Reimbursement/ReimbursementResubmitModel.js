/**
 * Triggers resubmission of the reimbursement record.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Reimbursement_ReimbursementResubmitModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the reimbursement record to be resubmitted.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_insurance_reimbursement = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Reimbursement_ReimbursementResubmitModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Reimbursement_ReimbursementResubmitModel.prototype.config=function()
{
  return {"a_field": {"k_insurance_reimbursement": {"get": {"get": true}}}};
};