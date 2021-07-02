/**
 * Lead status processing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Lead_LeadStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Status of the lead record. One of {@link \RsLeadStatusSid} constants.
   *
   * @post post
   * @type {string}
   */
  this.id_lead_status = "";

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key. Primary key in {@link \PassportLoginSql}.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Lead_LeadStatusModel);

/**
 * @inheritDoc
 */
Wl_Lead_LeadStatusModel.prototype.config=function()
{
  return {"a_field": {"id_lead_status": {"post": {"post": true}},"k_business": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};