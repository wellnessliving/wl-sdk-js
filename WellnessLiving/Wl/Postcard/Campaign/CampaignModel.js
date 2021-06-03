/**
 * Entry point to manipulate direct mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_Campaign_CampaignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of mail campaign.
   * Primary key in {@link \Wl\Postcard\Campaign\CampaignSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_postcard_campaign = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignModel.prototype.config=function()
{
  return {"a_field": {"k_postcard_campaign": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};