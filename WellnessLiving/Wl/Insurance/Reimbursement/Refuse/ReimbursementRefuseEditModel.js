/**
 * Allows to create, edit and delete reimbursement refuse.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Insurance provider key. Primary key in {@link \Wl\Integration\Curves\PartnerSql} table,
   * <tt>null</tt> if field is not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.k_insurance_provider = null;

  /**
   * Reimbursement refuse key. Primary key in {@link \Wl\Insurance\Reimbursement\Refuse\ReimbursementRefuseSql} table,
   * <tt>null</tt> if field is not set.
   *
   * @delete get
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_reimbursement_refuse = null;

  /**
   * Code of the reason, which should be unique per partner.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_code = "";

  /**
   * Description of the refuse from provider.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_description_provider = "";

  /**
   * Description of the refuse, which should be shown in reimbursement reports. This field is filled by franchise owner.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_display = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseEditModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseEditModel.prototype.config=function()
{
  return {"a_field": {"k_insurance_provider": {"get": {"result": true},"post": {"post": true}},"k_reimbursement_refuse": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"text_code": {"get": {"result": true},"post": {"post": true}},"text_description_provider": {"get": {"result": true},"post": {"post": true}},"text_display": {"get": {"result": true},"post": {"post": true}}}};
};