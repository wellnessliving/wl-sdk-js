/**
 * Allows to create, edit and delete partner.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Curves_Partner_PartnerEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Channel type ID. One of {@link \Wl\Integration\Curves\ChannelTypeSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_channel_type = undefined;

  /**
   * Curves country ID. One of {@link \Wl\Integration\Curves\CurvesCountrySid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_curves_country = undefined;

  /**
   * Deal type ID. One of {@link \Wl\Integration\Curves\DealTypeSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_deal_type = undefined;

  /**
   * Reimbursement type ID. One of {@link \Wl\Insurance\Reimbursement\ReimbursementTypeSid} constants.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.id_reimbursement_type = undefined;

  /**
   * Determines whether the program is active.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_active = undefined;

  /**
   * Determines whether the ACH account is required.
   *
   * @get result
   * @post post
   * @type {number}
   */
  this.is_reimbursement_information_required = undefined;

  /**
   * If a partner is edited, its key is stored here.
   *
   * Primary key in {@link \Wl\Integration\Curves\PartnerSql} table.
   *
   * <tt>null</tt> if a new partner should be created.
   * This value is required for edit and delete operations.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {?string}
   */
  this.k_partner = null;

  /**
   * Partner key in Curves. Need for update wellness program.
   *
   * @get result
   * @type {string}
   */
  this.s_partner = undefined;

  /**
   * Name of the curves partner.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_partner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_Partner_PartnerEditModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_Partner_PartnerEditModel.prototype.config=function()
{
  return {"a_field": {"id_channel_type": {"get": {"result": true},"post": {"post": true}},"id_curves_country": {"get": {"result": true},"post": {"post": true}},"id_deal_type": {"get": {"result": true},"post": {"post": true}},"id_reimbursement_type": {"get": {"result": true},"post": {"post": true}},"is_active": {"get": {"result": true},"post": {"post": true}},"is_reimbursement_information_required": {"get": {"result": true},"post": {"post": true}},"k_partner": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"s_partner": {"get": {"result": true}},"text_partner": {"get": {"result": true},"post": {"post": true}}}};
};