/**
 * API to get summary data about direst mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_Campaign_CampaignEdit_CampaignEditSummaryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,id_postcard_campaign_client,id_flag_active,s_login_type,s_member_group";

  /**
   * Quantity of recipients.
   *
   * @get result
   * @type {number}
   */
  this.i_quantity = undefined;

  /**
   * Whether to send mails to active and inactive clients.
   * One of {@link \AFlagSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_flag_active = 0;

  /**
   * Recipient group. One of {@link \Wl\Postcard\Campaign\CampaignClientSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_postcard_campaign_client = undefined;

  /**
   * Business in which clients must be searched.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Total cost of campaign.
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * Serialized by JSON list of client types.
   * Every element is primary key in {@link \Wl\Login\Type\Sql} table.
   *
   * @get get
   * @type {string}
   */
  this.s_login_type = "";

  /**
   * Serialized by JSON list of client groups.
   * Every element is primary key in {@link \Wl\Member\Group\Sql} table.
   *
   * @get get
   * @type {string}
   */
  this.s_member_group = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignEdit_CampaignEditSummaryModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignEdit_CampaignEditSummaryModel.prototype.config=function()
{
  return {"a_field": {"i_quantity": {"get": {"result": true}},"id_flag_active": {"get": {"get": true}},"id_postcard_campaign_client": {"get": {"get": true}},"k_business": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"s_login_type": {"get": {"get": true}},"s_member_group": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Postcard_Campaign_CampaignEdit_CampaignEditSummaryModel.instanceGet
 * @param {string} k_business Business in which clients must be searched.
 * @param {number} id_postcard_campaign_client Recipient group. One of {@link \Wl\Postcard\Campaign\CampaignClientSid} constants.
 * @param {number} id_flag_active Whether to send mails to active and inactive clients. One of {@link \AFlagSid} constants.
 * @param {string} s_login_type Serialized by JSON list of client types. Every element is primary key in {@link \Wl\Login\Type\Sql} table.
 * @param {string} s_member_group Serialized by JSON list of client groups. Every element is primary key in {@link \Wl\Member\Group\Sql} table.
 * @returns {Wl_Postcard_Campaign_CampaignEdit_CampaignEditSummaryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */