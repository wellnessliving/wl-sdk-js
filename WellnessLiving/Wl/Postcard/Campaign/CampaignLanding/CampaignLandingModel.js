/**
 * Api for subscribing for direct mail campaigns.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Postcard_Campaign_CampaignLanding_CampaignLandingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignLanding_CampaignLandingModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignLanding_CampaignLandingModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}}}};
};