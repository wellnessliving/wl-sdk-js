/**
 * Manage actions of sms history report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Sms_History_ResendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A sms history ID.
   *
   * @post get
   * @type {string}
   */
  this.k_sms_history = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Sms_History_ResendModel);

/**
 * @inheritDoc
 */
Wl_Sms_History_ResendModel.prototype.config=function()
{
  return {"a_field": {"k_sms_history": {"post": {"get": true}}}};
};