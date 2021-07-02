/**
 * Loads list of reimbursement refuse for editor.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseListModel_a_list
   * @property {string} k_reimbursement_refuse Insurance reimbursement refuse key. Primary key from {@link \Wl\Insurance\Reimbursement\Refuse\ReimbursementRefuseSql} table.
   * @property {string} text_code Code of the reason, which should be unique per partner.
   * @property {string} text_description_provider Description of the refuse from provider.
   * @property {string} text_display Description of the refuse, which should be shown in reimbursement reports. This field is filled by franchise owner.
   * @property {string} text_insurance_provider Insurance provider name.
   */

  /**
   * A list refuse translate message:
   * <dl>
   *   <dt>
   *     string <var>k_reimbursement_refuse</var>
   *   </dt>
   *   <dd>
   *     Insurance reimbursement refuse key. Primary key from {@link \Wl\Insurance\Reimbursement\Refuse\ReimbursementRefuseSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_code</var>
   *   </dt>
   *   <dd>
   *     Code of the reason, which should be unique per partner.
   *   </dd>
   *   <dt>
   *     string <var>text_description_provider</var>
   *   </dt>
   *   <dd>
   *     Description of the refuse from provider.
   *   </dd>
   *   <dt>
   *     string <var>text_display</var>
   *   </dt>
   *   <dd>
   *     Description of the refuse, which should be shown in reimbursement reports. This field is filled by franchise owner.
   *   </dd>
   *   <dt>
   *     string <var>text_insurance_provider</var>
   *   </dt>
   *   <dd>
   *     Insurance provider name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseListModel_a_list}
   */
  this.a_list = undefined;

  /**
   * Status of the refuse message. One of {@link \Wl\Insurance\Reimbursement\Refuse\Filter\FilterRefuseMessageSelectSid} constants.
   * Default value {@link \Wl\Insurance\Reimbursement\Refuse\Filter\FilterRefuseMessageSelectSid::ALL}.
   *
   * @get get
   * @type {number}
   */
  this.id_refuse_message = 3;

  /**
   * Insurance provider key. Primary key in {@link \Wl\Integration\Curves\PartnerSql} table, <tt>null</tt> if field is not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_insurance_provider = null;

  /**
   * Code of the reason, which should be unique per partner.
   *
   * @get get
   * @type {string}
   */
  this.text_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseListModel);

/**
 * @inheritDoc
 */
Wl_Insurance_Reimbursement_Refuse_ReimbursementRefuseListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"id_refuse_message": {"get": {"get": true}},"k_insurance_provider": {"get": {"get": true}},"text_code": {"get": {"get": true}}}};
};